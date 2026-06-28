// ============================================
// David Ornstein — Portfolio Site Scripts
// ============================================

(function () {
  'use strict';

  // --- Nav scroll effect ---
  const nav = document.getElementById('nav');
  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    const isOpen = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when a link is clicked
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // --- Timeline animation on scroll ---
  const timelineItems = document.querySelectorAll('.timeline-era');

  function revealTimeline() {
    timelineItems.forEach(function (item) {
      var rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealTimeline, { passive: true });
  // Run once on load
  revealTimeline();

  // --- Active nav link highlighting ---
  const sections = document.querySelectorAll('.section, #hero');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    var scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // --- Timeline filter by tags ---
  var filterChips = document.querySelectorAll('.filter-chip');
  var eras = document.querySelectorAll('.timeline-era[data-tags]');
  var countNum = document.getElementById('filterCountNum');
  var filterSummary = document.getElementById('filterSummary');
  var activeFilter = 'all';

  var filterSummaries = {
    leadership: '<strong>Leadership</strong> — Across four decades, I\'ve led organizations from 3-person startups to 20+ person enterprise teams, served as CEO of my own company, President of an international standards body, Chief of Staff to a Corporate VP, and Director-level engineering manager at Microsoft. I gravitate toward roles where vision, people, and strategy intersect.',
    architecture: '<strong>Architecture</strong> — I\'ve been the chief architect on multiple large-scale systems: CASE tools, e-book platforms, the XPS document format, and Microsoft\'s Liquid compliance platform. My architectural instincts favor clean separation of concerns, extensibility, and designs that survive contact with real-world scale.',
    security: '<strong>Security</strong> — For the past 20 years at Microsoft I\'ve been immersed in security assurance, from standing up compliance engineering and managing DOJ consent-decree tooling, to building the Liquid platform that automates the Security Development Lifecycle across 8,000+ services. Security isn\'t just a domain for me — it\'s been the throughline of my Microsoft career.',
    engineering: '<strong>Engineering</strong> — I\'ve written production code in C++, C#, TypeScript, Smalltalk, Z80 assembly, and more. From building the Rocket eBook firmware to architecting Microsoft\'s Liquid platform, I\'m happiest when I\'m deep in the code — designing systems, reviewing pull requests, and mentoring engineers on craft.',
    platform: '<strong>Platform</strong> — I\'ve built platforms that other teams build on: the Liquid compliance platform serving all of Microsoft, the Rocket eBook secure publishing system, and Excelerator II\'s CASE tool framework. I understand what it takes to ship reliable, extensible infrastructure that thousands of engineers depend on daily.',
    startup: '<strong>Startup</strong> — I founded Pragmatica (internet publishing tools, ~5,000 customers), co-founded NuvoMedia (Rocket eBook, acquired for $200M), and built early consulting businesses. These experiences taught me to ship fast, stay scrappy, and make every engineering dollar count.',
    standards: '<strong>Standards</strong> — I led the Open eBook Forum as President, driving the XML-based format that became EPUB. At Microsoft, I drove XPS document standards and built the compliance frameworks that enforce engineering standards across the company. I believe good standards multiply impact.',
    publishing: '<strong>Publishing</strong> — Digital publishing has been a recurring theme: from the Rocket eBook (one of the first e-readers) to the Open eBook standard (precursor to EPUB) to Microsoft\'s XPS/Metro document format. I helped shape how the world reads digital content.',
    patents: '<strong>Patents</strong> — I hold 12+ patents primarily in document formats, digital rights management, and security architecture, earned during my work on XPS, the Rocket eBook DRM system, and CASE tools. These patents reflect real inventions that shipped in products used by millions.',
    compliance: '<strong>Compliance</strong> — I built Microsoft\'s compliance engineering function from the ground up — first ensuring DOJ consent-decree adherence with tools like APIScan, then creating the Liquid platform to automate SDL compliance continuously across every Microsoft service. I\'ve managed compliance programs with $10M+ annual budgets.',
    'm-and-a': '<strong>Mergers &amp; Acquisitions</strong> — I\'ve been through significant M&amp;A from multiple angles: NuvoMedia\'s $200M acquisition by Gemstar (as CTO), INTERSOLV\'s merger with Micro Focus creating a $500M entity (as Director), and Access Technology\'s absorption into DCA. I understand due diligence, integration, and what happens after the deal closes.',
    ai: '<strong>AI-Native Engineering</strong> — My current project, Indra, is an AI-first app platform I\'m building inside Microsoft\'s CISO organization as its sole human architect — working alongside a crew of eight specialized AI agents, each owning a distinct domain. In parallel, I drove the full Liquid compliance team toward AI-accelerated development practices. This work is proving out what I call the AI-native super-IC model: one experienced architect, a team of AI collaborators, and the throughput of a full engineering organization.'
  };

  function applyFilter(tag) {
    activeFilter = tag;
    var visibleCount = 0;

    // Update chip states
    filterChips.forEach(function (chip) {
      chip.classList.toggle('active', chip.getAttribute('data-filter') === tag);
    });

    eras.forEach(function (era) {
      var tags = (era.getAttribute('data-tags') || '').split(' ');
      var matches = tag === 'all' || tags.indexOf(tag) !== -1;

      if (matches) {
        // Show
        era.classList.remove('filtered-out');
        era.classList.add('filtered-in');
        visibleCount++;
        // Remove animation class after it finishes to allow re-triggering
        era.addEventListener('animationend', function handler() {
          era.classList.remove('filtered-in');
          era.removeEventListener('animationend', handler);
        });
      } else {
        // Hide
        era.classList.remove('filtered-in');
        era.classList.add('filtered-out');
      }
    });

    // Update count with bounce
    if (countNum) {
      countNum.textContent = visibleCount;
      countNum.classList.add('bounce');
      setTimeout(function () {
        countNum.classList.remove('bounce');
      }, 350);
    }

    // Handle no-results message
    var existing = document.querySelector('.filter-empty-msg');
    if (existing) existing.remove();

    if (visibleCount === 0) {
      var msg = document.createElement('div');
      msg.className = 'filter-empty-msg';
      msg.innerHTML = '<span class="filter-empty-icon">🔍</span>No roles match this filter.';
      document.querySelector('.timeline').appendChild(msg);
    }

    // Show/hide filter summary
    if (filterSummary) {
      if (tag !== 'all' && filterSummaries[tag]) {
        filterSummary.setAttribute('data-active-filter', tag);
        filterSummary.innerHTML = '<div class="filter-summary-inner">' + filterSummaries[tag] + '</div>';
        // Force reflow then add visible class for transition
        filterSummary.offsetHeight;
        filterSummary.classList.add('visible');
      } else {
        filterSummary.classList.remove('visible');
        setTimeout(function () {
          if (!filterSummary.classList.contains('visible')) {
            filterSummary.innerHTML = '';
          }
        }, 400);
      }
    }
  }

  // --- Scroll-reveal for value cards ---
  var revealEls = document.querySelectorAll('.value-card, .value-cta');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function (el) {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }

  // Chip click handler with ripple effect
  filterChips.forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      var tag = chip.getAttribute('data-filter');

      // Create ripple
      var ripple = document.createElement('span');
      ripple.className = 'ripple';
      var rect = chip.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left - 20) + 'px';
      ripple.style.top = (e.clientY - rect.top - 20) + 'px';
      chip.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 500);

      applyFilter(tag);
    });
  });

  // --- Testimonial Carousel ---
  (function initCarousel() {
    var track = document.querySelector('.carousel-track');
    var slides = document.querySelectorAll('.testimonial-slide');
    var prevBtn = document.querySelector('.carousel-prev');
    var nextBtn = document.querySelector('.carousel-next');
    var dotsContainer = document.querySelector('.carousel-dots');
    var currentEl = document.querySelector('.carousel-current');
    var totalEl = document.querySelector('.carousel-total');

    if (!track || slides.length === 0) return;

    var current = 0;
    var total = slides.length;
    var autoplayInterval;
    var autoplayDelay = 8000;

    // Update total count
    if (totalEl) totalEl.textContent = total;

    // Create dots
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function () {
        goTo(parseInt(this.getAttribute('data-index')));
      });
      dotsContainer.appendChild(dot);
    }

    var dots = dotsContainer.querySelectorAll('.carousel-dot');

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';

      // Update dots
      dots.forEach(function (d, di) {
        d.classList.toggle('active', di === current);
      });

      // Update counter
      if (currentEl) currentEl.textContent = current + 1;
    }

    prevBtn.addEventListener('click', function () {
      goTo(current - 1);
      resetAutoplay();
    });

    nextBtn.addEventListener('click', function () {
      goTo(current + 1);
      resetAutoplay();
    });

    // Autoplay
    function startAutoplay() {
      autoplayInterval = setInterval(function () {
        goTo(current + 1);
      }, autoplayDelay);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    // Pause on hover
    var carousel = document.querySelector('.testimonial-carousel');
    carousel.addEventListener('mouseenter', function () {
      clearInterval(autoplayInterval);
    });
    carousel.addEventListener('mouseleave', function () {
      startAutoplay();
    });

    // Keyboard navigation
    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { goTo(current - 1); resetAutoplay(); }
      if (e.key === 'ArrowRight') { goTo(current + 1); resetAutoplay(); }
    });

    // Touch/swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    var viewport = document.querySelector('.carousel-viewport');

    viewport.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { goTo(current + 1); }
        else { goTo(current - 1); }
        resetAutoplay();
      }
    }, { passive: true });

    startAutoplay();
  })();

})();
