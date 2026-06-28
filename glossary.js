// ============================================
// Glossary — term definitions and flyout panel
// ============================================

(function () {
  'use strict';

  var defined = {

    'stat-years': {
      title: '40+ Professional Years in Software',
      text: '<p>I wrote my first commercial software in 1979 as one of Sinclair Research’s earliest US employees, before the ZX80 had even launched in the US. What followed is a career that has tracked — and often anticipated — every major platform shift: from 8-bit microcomputers and assembly language through the PC era, object-oriented programming (Smalltalk from the late ‘80s), the web, XML-based document formats, enterprise security, and now AI-native development.</p><p>The 40+ counts paid professional years writing software, leading teams, or founding companies. It spans hardware (bank-switching chip design, ROM porting), firmware (Rocket eBook device software), enterprise software (CASE tools, compliance platforms), consumer products, and modern cloud platforms (Liquid, Indra). Each domain taught a different kind of engineering thinking — and those lessons compound.</p>',
      links: []
    },

    'stat-patents': {
      title: '12+ Patents',
      text: '<p>The 12+ patents were filed as primary inventor during my work on the Metro/XPS document format at Microsoft (2001–2004). They cover document formats, digital rights management, and security architecture — areas where novel mechanisms were needed to make the cross-team initiative work. These aren’t defensive filings; they reflect inventions that shipped in Office 2007, Windows, and Microsoft’s Rights Management infrastructure.</p><p>I also hold an earlier patent from Timex Computer Corp. (1982–1983) for a memory bank-switching system for the Timex/Sinclair 2000 — a hardware mechanism to extend the Z80’s severely limited address space. That patent predates the Microsoft work by two decades and sits in a completely different domain, but the pattern is the same: when the existing solution is insufficient, invent a better one.</p>',
      links: [{ label: 'View all patents', url: 'patents.html' }]
    },

    'stat-companies': {
      title: '3 Companies Founded',
      text: '<p><strong>Heuristics</strong> (1981–1982) was a technical services company for the Sinclair computing community — the only authorized Sinclair service center in the US. Small but profitable, run while I was still a college student.</p><p><strong>Pragmatica</strong> (1995–1998) was a web-tools startup I founded and led as CEO. We built an object-oriented web programming language with SGML syntax (predating XML), grew to 10 employees plus consultants, and attracted ~5,000 customers before I wound it down to join NuvoMedia.</p><p><strong>NuvoMedia</strong> (1998–2001), where I joined as Director of Software Development and was promoted to CTO, invented the Rocket eBook — one of the world’s first dedicated e-readers, nearly a decade before the Kindle. Acquired by Gemstar in 2000 for $200M.</p>',
      links: []
    },

    'stat-services': {
      title: '8,000+ Services Secured',
      text: '<p>This figure refers to the Microsoft services brought under continuous, automated SDL compliance by the Liquid platform I conceived and led from 2015 to 2025. Before Liquid, security compliance was largely a manual, periodic process: engineering teams self-attested to a checklist, auditors spot-checked, and the overall picture was delayed and incomplete.</p><p>Liquid replaced that model with continuous monitoring: automated policy scanners, code analysis pipelines, and a unified dashboard showing real-time compliance status. The scale — 8,000+ services, 1,200+ repos, ~18,000 services tracked via the Security Bugs S360 KPI — made the shift from attestation to automation not just valuable but necessary. No manual process could track that many moving parts with the fidelity the company needed.</p>',
      links: []
    },

    'stat-exit': {
      title: '$200M Startup Exit',
      text: '<p>NuvoMedia, Inc. was acquired by Gemstar International in March 2000 for approximately $200M. The company had invented the Rocket eBook in 1998 — a 22-ounce handheld device that could store roughly 55,000 pages of text, with a backlit screen and DRM-protected content distribution. As CTO, I led the engineering organization through the technical due diligence process, integration planning, and post-close transition.</p><p>The Rocket eBook launched nearly a decade before Amazon’s Kindle (2007), and the architecture we built — secure content distribution, device-based DRM, publisher partnerships — anticipated the e-reader market’s eventual mainstream success. The $200M exit validated that early vision, though the timing (just before the dot-com bust) also illustrated how much market readiness matters alongside technical merit.</p>',
      links: []
    },

    'stat-budget': {
      title: '$250M Largest Budget Managed',
      text: '<p>The largest budget I’ve overseen combines the compliance engineering program at Microsoft (over $10M annually in direct operating costs) with the broader security assurance and strategic programs I coordinated as Chief of Staff to the CVP of Trustworthy Computing — a role that touched hundreds of millions in security investment across the company.</p><p>At that scale, budget management is less about tracking spending and more about allocating organizational attention: which programs get investment, which get wound down, which get scaled, and how to make the ROI case to executives. Security compliance programs are unusual because the “return” is measured in risks that don’t materialize — a fundamentally different calculus than typical product investment.</p>',
      links: []
    },

    'stat-lines': {
      title: '150K+ Lines Shipped in 60 Days',
      text: '<p>The Indra platform is a ~150K-line TypeScript codebase — React frontend, Node.js backend, Azure infrastructure-as-code — built almost entirely by me working with a team of eight AI agents. The “past 60 days” figure reflects the pace in the most recent sprint cycle: designing and shipping new platform features, building apps on the platform, writing documentation, and maintaining CI/CD pipelines.</p><p>For context: 150,000 lines of production TypeScript in 60 days averages over 2,500 lines per working day. That is not typing speed. It is AI-accelerated development with an experienced architect directing every piece of it, reviewing every output, and maintaining architectural coherence across the whole system. This is what the AI-native super-IC model makes possible — and Indra is the live proof.</p>',
      links: []
    },

    'stat-engineers': {
      title: '50+ Engineers Led',
      text: '<p>At Microsoft’s Assurance Engineering, I built and led a 20+ person Deep Engineering team responsible for the Liquid compliance platform — software engineers, program managers, and data engineers working across SDL automation and security tooling. As CTO of NuvoMedia, I led a cross-functional engineering organization through the full product lifecycle of the Rocket eBook. At INTERSOLV, I managed a bi-coastal team of 12 as Director of Development for the Excelerator II CASE tool.</p><p>As Chief of Staff to the CVP of Trustworthy Computing at Microsoft, I coordinated security initiatives across engineering teams spanning multiple divisions — an indirect leadership role whose impact extended well beyond direct headcount. The 50+ figure reflects both direct and matrix leadership across these roles.</p>',
      links: []
    },

    'stat-ai-team': {
      title: '8 AI Teammates',
      text: '<p>The Indra project is built by a hybrid team: one human lead (me) and eight AI agents, each implemented as a GitHub Copilot custom agent in VS Code with a distinct role and personality. <strong>Owen</strong> (Engineer) manages the plan lifecycle — drafting, reviewing, implementing, and closing out work. <strong>Omar</strong> (Chief) handles cross-cutting coordination and project pulse. <strong>Sasha</strong> (Strategist) maintains the strategic framework and handles audience-aware communications. <strong>Kai</strong> (Sentinel) reviews plans, code, and infrastructure for security risks.</p><p><strong>Roz</strong> (Narrator) writes the project blog. <strong>Grace</strong> (Presenter) designs and runs live demos. <strong>Andy</strong> (Advocate) audits the builder experience from a newcomer’s perspective. <strong>Judy</strong> (Editor) reviews all documentation and prose for structure, clarity, and tone. Each agent has a distinct scope of authority and reports to me. Together they cover the disciplines a traditional engineering team distributes across many people.</p>',
      links: []
    },

    'indra': {
      title: 'Indra',
      text: '<p>An AI-first app platform inside Microsoft\u2019s CISO organization, conceived and led by David Ornstein as its sole human architect. Indra gives SIGMA security engineers building blocks to turn their expertise \u2014 Kusto queries, compliance workflows, operational know-how \u2014 into tools the whole organization can use, and gives deputy CISOs a unified view of security posture across domains.</p><p>The platform solves a fundamental fragmentation problem: security knowledge across CISO\u2019s dozens of domains is scattered across dashboards, scripts, and individual engineers\u2019 heads \u2014 inaccessible to leaders who need a cross-domain view and invisible to AI. Indra provides unified security reporting dashboards, a natural-language AI agent over security data, Kusto query integration, Power BI embedding, an app hosting ecosystem, and a full CI/CD pipeline.</p><p>What makes Indra distinctive is its development model: David leads a team of eight specialized AI agents \u2014 each a GitHub Copilot custom agent with a distinct role (engineer, strategist, security sentinel, narrator, advocate, presenter, editor) \u2014 and together they sustain a platform-scale project with the throughput of a full engineering org. It is a working proof of the AI-native super-IC concept.</p>',
      links: [
        { label: 'Visit Indra', url: 'https://indra.microsoft.com' }
      ]
    },

    'liquid': {
      title: 'Liquid Platform',
      text: '<p>Microsoft\u2019s internal platform for continuous security assurance and compliance, conceived and led by David starting around 2015. Liquid automated the Security Development Lifecycle (SDL) and other compliance processes that had previously relied on manual attestations and yearly audits.</p><p>The platform includes automated policy scanners, code compliance pipelines, and a unified dashboard for security standards adherence, integrated with Azure DevOps across the company. Liquid became the core of Microsoft\u2019s Continuous SDL program, providing automated coverage for over 8,000 services company-wide and enabling real-time compliance checks.</p><p>David\u2019s manager described Liquid\u2019s impact: \u201cLiquid anchors the company-wide continuous SDL\u2026 shifting processes to automated coverage,\u201d acknowledging David\u2019s \u201cincredible impact\u201d on Microsoft\u2019s security engineering ecosystem.</p>',
      links: [
        { label: 'What is Liquid? (Microsoft internal)', url: 'https://liquid.microsoft.com/Web/Docs/all/WhatIsLiquid.md' }
      ]
    },

    'sigma': {
      title: 'SIGMA (Standards, Insights, Governance, Monitoring & Assurance)',
      text: '<p>A team within Microsoft\u2019s CISO (Chief Information Security Officer) organization responsible for security standards, compliance monitoring, and assurance across the company. SIGMA integrates the work formerly spread across multiple security governance teams into a unified function.</p><p>David\u2019s Liquid platform and Assurance Engineering efforts were fully integrated into SIGMA by 2021\u20132023, with David continuing as the team\u2019s leader and technical evangelist. He transitioned to Principal Security Architect within SIGMA in late 2025.</p>',
      links: []
    },

    'sdl': {
      title: 'Security Development Lifecycle (SDL)',
      text: '<p>A software development process created by Microsoft that integrates security practices into every phase of the development lifecycle \u2014 from requirements and design through implementation, testing, and release. First formalized by Microsoft in 2004, the SDL became mandatory for all Microsoft products.</p><p>The SDL includes practices like threat modeling, static code analysis, fuzz testing, and security reviews. David\u2019s Liquid platform automated many SDL requirements, shifting the company from periodic manual audits to continuous, data-driven compliance monitoring across 8,000+ services.</p>',
      links: [
        { label: 'SDL on Wikipedia', url: 'https://en.wikipedia.org/wiki/Security_Development_Lifecycle' }
      ]
    },

    'twc': {
      title: 'Trustworthy Computing (TwC)',
      text: '<p>A central security strategy group at Microsoft, led by Senior VP Scott Charney, focused on improving the trustworthiness of Microsoft\u2019s products and services. TwC coordinated security engineering, security standards, compliance, and privacy programs across the company.</p><p>David served as Chief of Staff for TwC from 2008 to 2014, coordinating cross-team security initiatives and helping shift Microsoft\u2019s approach from compliance checklists to proactive security assurance. In 2014, TwC\u2019s functions were reorganized into Microsoft\u2019s legal and corporate affairs domain (CELA), a transition David helped manage.</p>',
      links: []
    },

    'codeql': {
      title: 'CodeQL Central',
      text: '<p>A scalable code analysis service for detecting security vulnerabilities, co-incubated by David\u2019s team at Microsoft. CodeQL uses a query language to treat code as data, enabling sophisticated pattern matching to find bugs, vulnerabilities, and code quality issues across large codebases.</p><p>David\u2019s team helped establish CodeQL Central as a company-wide service, making advanced static analysis available to engineering teams across Microsoft\u2019s thousands of repositories.</p>',
      links: [
        { label: 'CodeQL on GitHub', url: 'https://codeql.github.com/' }
      ]
    },

    'azure-devops': {
      title: 'Azure DevOps',
      text: '<p>Microsoft\u2019s cloud-based platform for software development collaboration, providing version control, CI/CD pipelines, project tracking, and artifact management. Under David\u2019s leadership, the Liquid platform was integrated with Azure DevOps across the company, enabling engineering teams to get real-time compliance checks as part of their standard development workflow.</p>',
      links: [
        { label: 'Azure DevOps', url: 'https://azure.microsoft.com/en-us/products/devops/' }
      ]
    },

    'metro': {
      title: 'Metro Document Format',
      image: 'media/office2007ribbon.png',
      imageAlt: 'Office 2007 Ribbon interface — built on the Metro/Open XML format David architected',
      text: '<p>The internal code name for a document format initiative David architected at Microsoft that unified how documents were represented in XML. It became two major shipping formats: the Office Open XML file formats (used in Office 2007 and later for .docx, .xlsx, and .pptx files) and the XML Paper Specification (XPS), Windows\u2019 answer to PDF.</p><p>The format was notable for being ZIP-based, fully XML, and designed for both editing and fixed-layout scenarios. It was one of the largest cross-company technical efforts at Microsoft during the early 2000s.</p>',
      links: [
        { label: 'Office Open XML on Wikipedia', url: 'https://en.wikipedia.org/wiki/Office_Open_XML' },
        { label: 'Open XML Paper Specification', url: 'https://en.wikipedia.org/wiki/Open_XML_Paper_Specification' }
      ]
    },

    'flexwiki': {
      title: 'FlexWiki',
      text: '<p>A wiki engine David built while at Microsoft, written in C#/.NET. It grew organically to become one of the most widely-used internal collaboration tools at the company, with over 1,000 wiki instances hosted on the internal network at <code>http://wiki</code>.</p><p>FlexWiki was later released as an open-source project and became an influential early example of enterprise wiki software. It demonstrated the power of lightweight, self-service knowledge management years before tools like Confluence became dominant.</p>',
      links: [
        { label: 'FlexWiki on Wikipedia', url: 'https://en.wikipedia.org/wiki/FlexWiki' }
      ]
    },

    'rocket-ebook': {
      title: 'Rocket eBook',
      text: '<p>One of the world\u2019s first dedicated e-reader devices, created by NuvoMedia and launched in 1998. It featured a backlit touchscreen, could hold about ten books, and sold for around $499. The device included a secure content distribution system and supported annotations and bookmarks.</p><p>The Rocket eBook preceded Amazon\u2019s Kindle by nearly a decade and is considered a pioneering milestone in the history of digital reading. It proved the concept of a dedicated reading device, even though the market wouldn\u2019t fully mature for another ten years.</p>',
      links: [
        { label: 'Rocket eBook on Wikipedia', url: 'https://en.wikipedia.org/wiki/Rocket_eBook' }
      ]
    },

    'nuvomedia': {
      title: 'NuvoMedia, Inc.',
      text: '<p>A Silicon Valley startup founded in 1997 that created the Rocket eBook, one of the first dedicated electronic book reading devices. The company built both the hardware device and the software ecosystem around it, including secure content distribution, desktop synchronization software, and the eBookNet.com portal.</p><p>NuvoMedia was acquired by Gemstar-TV Guide International in 2000. The company\u2019s work laid important groundwork for the entire eBook industry that would later explode with the Kindle and iPad.</p>',
      links: [
        { label: 'Rocket eBook on Wikipedia', url: 'https://en.wikipedia.org/wiki/Rocket_eBook' }
      ]
    },

    'oebf': {
      title: 'Open eBook Forum (OeBF)',
      image: 'media/epub-logo.svg',
      imageAlt: 'EPUB logo — the standard that evolved from the Open eBook Forum\u2019s work',
      text: '<p>An international, non-profit trade and standards organization with over 100 members, dedicated to promoting a thriving eBook market. Founded in 1999, the Forum created the Open eBook Publication Structure standard, which defined how eBook content should be structured.</p><p>This standard evolved through several iterations and ultimately became EPUB \u2014 now the dominant open format for eBooks, supported by virtually every e-reader except Amazon\u2019s Kindle. The organization later became the International Digital Publishing Forum (IDPF), which merged into the W3C in 2017.</p>',
      links: [
        { label: 'IDPF on Wikipedia', url: 'https://en.wikipedia.org/wiki/International_Digital_Publishing_Forum' },
        { label: 'EPUB format', url: 'https://en.wikipedia.org/wiki/EPUB' }
      ]
    },

    'case': {
      title: 'CASE (Computer Aided Software Engineering)',
      image: 'media/case-tool.png',
      imageAlt: 'A CASE tool showing UML diagrams — the type of software the CDIF standard interconnected',
      text: '<p>A category of software tools popular in the late 1980s and early 1990s that aimed to automate and systematize the software development process. CASE tools provided graphical editors for designing databases, data flows, entity-relationship models, and object models, and could often generate code from these designs.</p><p>The CASE movement was a precursor to modern IDE features, UML tools, and low-code platforms. While the specific term fell out of fashion, the ideas behind CASE \u2014 visual modeling, code generation, and structured development methodologies \u2014 remain central to software engineering.</p>',
      links: [
        { label: 'CASE on Wikipedia', url: 'https://en.wikipedia.org/wiki/Computer-aided_software_engineering' }
      ]
    },

    'cdif': {
      title: 'CDIF (CASE Data Interchange Format)',
      image: 'media/case-tool.png',
      imageAlt: 'A CASE tool — CDIF standardized data interchange between tools like this',
      text: '<p>An ANSI/EIA standard (EIA-927) that defined a common format for exchanging data between different CASE tools. The challenge was that in the late 1980s, organizations often used multiple CASE tools, but each stored its models in proprietary formats \u2014 making it impossible to share work between tools.</p><p>The CDIF standard included a comprehensive entity-relationship data model of software engineering processes with over 700 entities and relationships, published as a two-volume specification. David chaired this committee, which had approximately 30 voting members from major CASE industry companies and a 500+ person mailing list.</p>',
      links: [
        { label: 'CDIF on Wikipedia', url: 'https://en.wikipedia.org/wiki/CASE_Data_Interchange_Format' }
      ]
    },

    'smalltalk': {
      title: 'Smalltalk',
      image: 'media/smalltalk-76.png',
      imageAlt: 'Smalltalk-76 running on a Xerox Alto — the environment where OOP was born',
      text: '<p>A pioneering object-oriented programming language created at Xerox PARC in the 1970s by Alan Kay, Dan Ingalls, and Adele Goldberg. Smalltalk introduced or popularized many concepts that are now fundamental to software development: message-passing objects, the Model-View-Controller (MVC) pattern, integrated development environments (IDEs), and live coding with immediate feedback.</p><p>Its influence is enormous \u2014 Java, Ruby, Python, Objective-C, and Swift all owe significant design debts to Smalltalk. In the late 1980s and 1990s, Smalltalk was the language of choice for cutting-edge commercial software development, especially in finance and CASE tools.</p>',
      links: [
        { label: 'Smalltalk on Wikipedia', url: 'https://en.wikipedia.org/wiki/Smalltalk' }
      ]
    },

    'gemstone': {
      title: 'GemStone',
      image: 'media/gemstone.png',
      imageAlt: 'GemStone/S object database logo',
      text: '<p>An object database management system that allows Smalltalk (and later other language) objects to be stored, queried, and retrieved directly without the \u201cimpedance mismatch\u201d of mapping objects to relational database tables.</p><p>GemStone was notable for supporting transparent persistence \u2014 objects could be saved and retrieved without explicit serialization code. At LongView International, David used GemStone to build the persistence layer for their derivatives trading system, a natural fit given the complex object models that financial software requires.</p>',
      links: [
        { label: 'GemStone on Wikipedia', url: 'https://en.wikipedia.org/wiki/GemStone/S' }
      ]
    },

    'os2': {
      title: 'OS/2',
      image: 'media/os2warp-logo.png',
      imageAlt: 'OS/2 Warp Version 3 logo',
      text: '<p>An operating system co-developed by IBM and Microsoft in the late 1980s, intended as the successor to DOS. OS/2 featured preemptive multitasking, virtual memory, and a graphical user interface called Presentation Manager. For a time, it was considered the future of PC operating systems.</p><p>Though technically sophisticated, it lost the market battle to Windows 3.x and later Windows 95, primarily due to Microsoft\u2019s pivot away from the partnership. OS/2 found a lasting niche in banking (many ATMs ran OS/2 well into the 2000s) and enterprise environments that valued its stability.</p>',
      links: [
        { label: 'OS/2 on Wikipedia', url: 'https://en.wikipedia.org/wiki/OS/2' }
      ]
    },

    'sgml': {
      title: 'SGML (Standard Generalized Markup Language)',
      text: '<p>An international standard (ISO 8879, published 1986) for defining markup languages. SGML is the parent metalanguage from which both HTML and XML descend. It provided a rigorous framework for describing document structures using tags and schemas.</p><p>SGML was widely used in large-scale publishing, government documentation (especially the U.S. Department of Defense), and the aerospace industry. Its power came with complexity, which eventually led to the creation of XML \u2014 a simpler, more web-friendly subset \u2014 in 1998. Pragmatica\u2019s programming language used SGML syntax before XML even existed.</p>',
      links: [
        { label: 'SGML on Wikipedia', url: 'https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language' }
      ]
    },

    'xml': {
      title: 'XML (Extensible Markup Language)',
      text: '<p>A simplified subset of SGML that became one of the foundational technologies of the modern web. Published as a W3C recommendation in 1998, XML provides a flexible, human-readable format for structured data that is both machine-parsable and self-describing.</p><p>XML is used in web services (SOAP, REST), configuration files, document formats (including Office Open XML and EPUB), data interchange, and countless other applications. It remains ubiquitous even as JSON has become the preferred format for many web APIs.</p>',
      links: [
        { label: 'XML on Wikipedia', url: 'https://en.wikipedia.org/wiki/XML' }
      ]
    },

    'drm': {
      title: 'Digital Rights Management (DRM)',
      text: '<p>Technologies that control how digital content \u2014 books, music, video, software \u2014 can be accessed, copied, and distributed after purchase. DRM systems typically use encryption and licensing servers to enforce restrictions set by content publishers.</p><p>The eBook industry was an early and prominent arena for DRM development and debate. At NuvoMedia and the Open eBook Forum, David worked on both the technical implementation of DRM for the Rocket eBook\u2019s secure distribution system and the broader frameworks and ontology for digital rights management in electronic publishing.</p>',
      links: [
        { label: 'DRM on Wikipedia', url: 'https://en.wikipedia.org/wiki/Digital_rights_management' }
      ]
    },

    'ansi': {
      title: 'ANSI (American National Standards Institute)',
      text: '<p>The primary organization that coordinates voluntary consensus standards development in the United States. Founded in 1918, ANSI oversees the creation of norms and guidelines across virtually all industries and represents U.S. interests in international standards bodies like ISO and IEC.</p><p>ANSI doesn\u2019t write standards itself but accredits standards-developing organizations and ensures their processes follow principles of openness, balance, consensus, and due process. The CDIF committee David chaired operated under ANSI/EIA rules.</p>',
      links: [
        { label: 'ANSI on Wikipedia', url: 'https://en.wikipedia.org/wiki/American_National_Standards_Institute' }
      ]
    },

    'eia': {
      title: 'EIA (Electronic Industries Alliance)',
      text: '<p>A trade organization that developed technical standards for the electronics industry. Active from 1924 to 2011, the EIA created widely-used standards including the RS-232 serial communication standard, the 19-inch server rack specification, and the color codes for electronic resistors.</p><p>The CDIF standards committee operated under the EIA\u2019s standards-development umbrella, giving it the formal ANSI/EIA designation that ensured the process met national standards for openness and consensus.</p>',
      links: [
        { label: 'EIA on Wikipedia', url: 'https://en.wikipedia.org/wiki/Electronic_Industries_Alliance' }
      ]
    },

    'lan': {
      title: 'LAN (Local Area Network)',
      text: '<p>A computer network that connects devices within a limited area like a building or campus. Today, LANs are invisible infrastructure that we take for granted, but in the 1980s, building one was a significant technical undertaking requiring specialized knowledge of cabling, protocols, and network operating systems.</p><p>David describes proposing and building a 20-station LAN at Sage Software that eventually grew to span 7 states and 2 countries \u2014 a trajectory that mirrors the industry\u2019s evolution from local networking to wide-area and eventually internet connectivity.</p>',
      links: [
        { label: 'LAN on Wikipedia', url: 'https://en.wikipedia.org/wiki/Local_area_network' }
      ]
    },

    'visualworks': {
      title: 'VisualWorks',
      image: 'media/visualworks.png',
      imageAlt: 'VisualWorks Smalltalk development environment',
      text: '<p>A commercial Smalltalk development environment originally created at Xerox PARC as part of the Smalltalk-80 system. It was commercialized by ParcPlace Systems and later acquired by Cincom, becoming one of the premier Smalltalk environments for enterprise software development.</p><p>VisualWorks was known for its mature class libraries, cross-platform GUI framework, and sophisticated development tools including a browser, debugger, and refactoring support. At LongView International, it was the platform of choice for building their derivatives trading systems.</p>',
      links: [
        { label: 'VisualWorks on Wikipedia', url: 'https://en.wikipedia.org/wiki/VisualWorks' }
      ]
    },

    'entity-relationship': {
      title: 'Entity-Relationship Modeling',
      image: 'media/er-diagram.png',
      imageAlt: 'An entity-relationship diagram showing entities, attributes, and relationships',
      text: '<p>A data modeling technique invented by Peter Chen in 1976, used to describe the structure of data in terms of entities (things), attributes (properties of things), and relationships between entities. ER models are typically represented as diagrams and are fundamental to relational database design.</p><p>David has deep experience with ER modeling: he built ER diagramming tools in Smalltalk, created an ER model compiler that could generate production-grade relational database schemas, and the CDIF standard he chaired included a 700+ entity ER model of software engineering processes.</p>',
      links: [
        { label: 'ER Model on Wikipedia', url: 'https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model' }
      ]
    },

    'object-oriented': {
      title: 'Object-Oriented Programming (OOP)',
      text: '<p>A programming paradigm that organizes software around \u201cobjects\u201d \u2014 bundles of data and the methods that operate on that data \u2014 rather than around functions and logic. Key concepts include encapsulation, inheritance, polymorphism, and message passing.</p><p>OOP became the dominant programming paradigm in the 1990s and underpins most modern languages including Java, C#, Python, and Swift. David was an early adopter and evangelist, working extensively with Smalltalk (the language that pioneered OOP) and later mentoring organizations in object-oriented design using design patterns.</p>',
      links: [
        { label: 'OOP on Wikipedia', url: 'https://en.wikipedia.org/wiki/Object-oriented_programming' }
      ]
    },

    'design-patterns': {
      title: 'Design Patterns',
      text: '<p>Reusable solutions to commonly occurring problems in software design, popularized by the influential 1994 book <em>Design Patterns: Elements of Reusable Object-Oriented Software</em> by Gamma, Helm, Johnson, and Vlissides (known as the \u201cGang of Four\u201d).</p><p>Patterns like Observer, Factory, Strategy, and Model-View-Controller provide a shared vocabulary for developers and proven architectural approaches. David was an early adopter and evangelist for design patterns in software development, using pattern-based mentoring to help organizations improve their object-oriented practices.</p>',
      links: [
        { label: 'Software Design Patterns', url: 'https://en.wikipedia.org/wiki/Software_design_pattern' },
        { label: 'Design Patterns (book)', url: 'https://en.wikipedia.org/wiki/Design_Patterns' }
      ]
    },

    'derivatives-trading': {
      title: 'Derivatives Trading',
      text: '<p>The buying and selling of financial contracts (derivatives) whose value is derived from underlying assets like stocks, bonds, currencies, or commodities. Common derivatives include options, futures, swaps, and complex structured products.</p><p>Building trading systems for derivatives is one of the most technically demanding areas of software engineering, requiring complex mathematical models, real-time data processing, and extreme reliability. The framework-based approach David helped build at LongView International used Smalltalk to model the inherently object-oriented nature of financial instruments.</p>',
      links: [
        { label: 'Derivatives on Wikipedia', url: 'https://en.wikipedia.org/wiki/Derivative_(finance)' }
      ]
    },

    'trustworthy-computing': {
      title: 'Trustworthy Computing',
      text: '<p>Trustworthy Computing (TwC) was the Microsoft-wide initiative launched by Bill Gates in his famous January 2002 memo, which declared security the company’s highest priority. TwC became a formal organization within the company responsible for driving security, privacy, and reliability practices across every product group.</p><p>David served as Chief of Staff to the Corporate Vice President of Trustworthy Computing, where he operated at the intersection of executive strategy, cross-team coordination, and technical execution — helping drive security transformation across Microsoft’s engineering culture during a critical period in the company’s history.</p>',
      links: [
        { label: 'Trustworthy Computing on Wikipedia', url: 'https://en.wikipedia.org/wiki/Trustworthy_computing' }
      ]
    },

    'consent-decree': {
      title: 'Consent Decree (Microsoft)',
      text: '<p>The 2001 settlement of <em>United States v. Microsoft Corporation</em>, one of the most significant antitrust cases in technology history. After being found to have illegally maintained its monopoly in PC operating systems, Microsoft agreed to a set of remedies overseen by a Technical Committee.</p><p>The decree required Microsoft to share its APIs with third-party companies, document its protocols, and establish compliance monitoring. David led the engineering compliance programs that implemented Microsoft\u2019s technical obligations under this decree, including tools like APIscan for verifying API accessibility.</p>',
      links: [
        { label: 'US v. Microsoft on Wikipedia', url: 'https://en.wikipedia.org/wiki/United_States_v._Microsoft_Corp.' }
      ]
    },

    'checkpoint-express': {
      title: 'CheckPoint Express',
      text: '<p>An internal Microsoft engineering compliance tool that was part of the mandatory policy enforcement system. It tracked and verified that software development teams followed Microsoft\u2019s required engineering policies covering security, privacy, accessibility, legal compliance, and other requirements throughout the software development lifecycle.</p><p>As Director of Compliance Engineering, David oversaw CheckPoint Express as part of a broader compliance program with a budget exceeding $10M annually.</p>',
      links: []
    },

    'apiscan': {
      title: 'APIscan',
      text: '<p>A compliance analysis tool David managed at Microsoft as part of the Consent Decree middleware compliance program. APIscan analyzed Microsoft\u2019s software to verify proper API documentation and accessibility as required by the terms of the antitrust settlement.</p><p>The tool was part of a broader regulatory engagement effort ensuring that Microsoft\u2019s products met the technical obligations imposed by the court, particularly around making interfaces available to third-party software developers.</p>',
      links: []
    },

    'sinclair': {
      title: 'Sinclair Research',
      image: 'media/sinclair-zx80.jpg',
      imageAlt: 'The Sinclair ZX80 — one of the first affordable home computers',
      text: '<p>A British consumer electronics company founded by Sir Clive Sinclair that produced some of the earliest affordable home computers, including the ZX80 (1980), ZX81 (1981), and ZX Spectrum (1982). These machines brought personal computing to millions of people at price points under $200.</p><p>Sinclair played a pivotal role in the personal computing revolution, especially in the UK and Europe, spawning an entire generation of programmers. David was one of the earliest employees at Sinclair\u2019s US operation (Sinclair Research Ltd. in Boston), starting part-time in 1979 before the ZX80 had even launched.</p>',
      links: [
        { label: 'Sinclair Research on Wikipedia', url: 'https://en.wikipedia.org/wiki/Sinclair_Research' },
        { label: 'ZX Spectrum on Wikipedia', url: 'https://en.wikipedia.org/wiki/ZX_Spectrum' }
      ]
    },

    'zx80': {
      title: 'Sinclair ZX-80',
      image: 'media/zx80.jpg',
      imageAlt: 'The Sinclair ZX-80 home computer',
      text: '<p>One of the first affordable home computers, manufactured by Sinclair Research and launched in 1980 at a price of \u00a399.95 in the UK ($199.95 in the US). It featured a Zilog Z80 processor running at 3.25 MHz, 1KB of RAM, and output to a standard television set.</p><p>Despite its limitations \u2014 the display would flicker during computation and the membrane keyboard was famously difficult to use \u2014 the ZX80 introduced hundreds of thousands of people to computing and kickstarted the home computer revolution. David managed technical support for ZX-80 users at Sinclair\u2019s US office.</p>',
      links: [
        { label: 'ZX80 on Wikipedia', url: 'https://en.wikipedia.org/wiki/ZX80' }
      ]
    },

    'timex-sinclair': {
      title: 'Timex/Sinclair 2000',
      image: 'media/timex-sinclair-1000-top.jpg',
      imageAlt: 'The Timex Sinclair 1000 — the US version of the Sinclair ZX81',
      text: '<p>A home computer developed by Timex Computer Corporation as a successor to the Timex/Sinclair 1000 (the US version of the Sinclair ZX81). Timex had partnered with Sinclair Research to manufacture and sell Sinclair\u2019s computers in the US market.</p><p>David worked on the TS2000\u2019s hardware and software design at Timex Computer Corp., including inventing a memory bank-switching mechanism and designing a semi-custom chip to implement it. He also authored the complete third-party developer technical manual. Timex Computer Corp. folded in late 1983 amid the home computer market shakeout.</p>',
      links: [
        { label: 'Timex Sinclair on Wikipedia', url: 'https://en.wikipedia.org/wiki/Timex_Sinclair' }
      ]
    },

    'bank-switching': {
      title: 'Bank Switching',
      text: '<p>A technique for expanding the usable memory of early computers beyond their native addressing limits. Processors like the Z80 could only directly address 64KB of memory, but by rapidly swapping different \u201cbanks\u201d of memory chips into the processor\u2019s address space, systems could access much more.</p><p>David invented a bank switching mechanism for the Timex/Sinclair 2000 and designed a semi-custom chip to implement it. He was awarded a patent for this invention \u2014 his first patent, and one that addressed a fundamental hardware constraint of the era.</p>',
      links: [
        { label: 'Bank switching on Wikipedia', url: 'https://en.wikipedia.org/wiki/Bank_switching' }
      ]
    },

    'multimate': {
      title: 'MultiMate',
      image: null,
      imageAlt: 'MultiMate word processor running on an IBM PC',
      text: '<p>A popular word processing program for IBM PCs in the 1980s that emulated the keyboard interface of Wang dedicated word processors. This was a shrewd design choice \u2014 secretaries and office workers already trained on Wang systems could switch to a PC without relearning their workflow.</p><p>MultiMate was one of the leading word processors of its era, before being overtaken by WordPerfect and later Microsoft Word. The company was acquired by Ashton-Tate in December 1985. David managed the OEM/International group, porting the product to platforms including the Zenith Z-100 for a US Air Force contract.</p>',
      links: [
        { label: 'MultiMate on Wikipedia', url: 'https://en.wikipedia.org/wiki/MultiMate' }
      ]
    },

    'pragmatica': {
      title: 'Pragmatica, Inc.',
      text: '<p>A startup David founded in 1995 that developed advanced Internet publishing tools. Its core product was an object-oriented web programming language with SGML syntax \u2014 a concept that predated XML (which wouldn\u2019t be published until 1998).</p><p>David developed the business plan, recruited the executive team, secured multiple rounds of angel investment, and wrote substantial portions of the ~100,000-line C++ codebase. The company grew to 10 employees, several consultants, and over 5,000 users before David left to join NuvoMedia in 1998.</p>',
      links: []
    },

    'ebooknet': {
      title: 'eBookNet.com',
      text: '<p>Described at its launch as the world\u2019s largest eBook portal, eBookNet.com was developed by a cross-organization team of 12 people that David led at NuvoMedia. The site served as a central hub for discovering, purchasing, and downloading electronic books.</p><p>David designed both the user interface and the architecture for the site. In the late 1990s, building a large-scale content portal like this was a significant undertaking, and eBookNet.com represented one of the earliest attempts to create a comprehensive marketplace for digital books.</p>',
      links: []
    },

    'oeb-pub-structure': {
      title: 'Open eBook Publication Structure',
      image: 'media/epub-logo.svg',
      imageAlt: 'EPUB logo — the Open eBook Publication Structure evolved into the EPUB standard',
      text: '<p>A standard defining how electronic book content should be structured and formatted, first drafted by David and others at NuvoMedia. It specified an XML-based format for representing eBook content, including text, images, metadata, and navigation.</p><p>This standard evolved through the Open eBook Forum into the OEBPS (Open eBook Publication Structure) format and ultimately became EPUB \u2014 now the dominant open standard for eBooks, used by Apple Books, Google Play Books, Kobo, and virtually every e-reader except Amazon\u2019s Kindle.</p>',
      links: [
        { label: 'EPUB on Wikipedia', url: 'https://en.wikipedia.org/wiki/EPUB' },
        { label: 'OEBPS', url: 'https://en.wikipedia.org/wiki/Open_eBook' }
      ]
    },

    'public-key-crypto': {
      title: 'Public Key Cryptography',
      text: '<p>A cryptographic system that uses pairs of mathematically related keys: a public key (shared freely) and a private key (kept secret). Data encrypted with one key can only be decrypted with the other, enabling secure communication between parties who have never met.</p><p>Public key cryptography enables digital signatures, secure key exchange, and forms the backbone of internet security (HTTPS/TLS). It was central to the DRM and secure distribution systems David worked on in the eBook space, where content needed to be encrypted for authorized readers only.</p>',
      links: [
        { label: 'Public-key cryptography', url: 'https://en.wikipedia.org/wiki/Public-key_cryptography' }
      ]
    },

    'molecular-gastronomy': {
      title: 'Molecular Gastronomy',
      image: 'media/spherification.jpg',
      imageAlt: 'Spherification — a signature molecular gastronomy technique',
      text: '<p>A subdiscipline of food science that explores the physical and chemical transformations that occur during cooking. Coined by Hungarian physicist Nicholas Kurti and French chemist Herv\u00e9 This in 1988, it bridges the gap between kitchen tradition and laboratory science.</p><p>Techniques include spherification (creating caviar-like spheres from liquids using sodium alginate), sous vide (precision temperature-controlled cooking), foams, gels, and the use of hydrocolloids and emulsifiers to achieve novel textures and presentations. Chefs like Ferran Adri\u00e0 (elBulli) and Heston Blumenthal (The Fat Duck) popularized these techniques in fine dining.</p>',
      links: [
        { label: 'Molecular gastronomy', url: 'https://en.wikipedia.org/wiki/Molecular_gastronomy' }
      ]
    },

    'angel-investment': {
      title: 'Angel Investment',
      text: '<p>Early-stage funding provided by individual investors (called \u201cangel investors\u201d) to startups, typically in exchange for equity. Angel investment fills the gap between personal savings / friends-and-family money and larger venture capital rounds.</p><p>Angels typically invest their own money (as opposed to institutional funds), often bring industry expertise and connections, and are willing to take on more risk than traditional investors. David secured multiple rounds of angel investment to fund Pragmatica, growing the company to 10 employees and over 5,000 users.</p>',
      links: [
        { label: 'Angel investor on Wikipedia', url: 'https://en.wikipedia.org/wiki/Angel_investor' }
      ]
    },

    'excelerator': {
      title: 'Excelerator II',
      text: '<p>A CASE (Computer Aided Software Engineering) tool developed by INTERSOLV (formerly Sage Software) for the OS/2 operating system. Excelerator II provided graphical tools for software design, data modeling, and code generation, along with a LAN-hosted repository for storing and sharing design artifacts.</p><p>David served as both Director of Development and Chief Architect for Excelerator II, managing a bi-coastal team of 12 people while also doing significant design and coding work himself. The product was part of INTERSOLV\u2019s larger suite of software development tools.</p>',
      links: []
    },

    'rom-cartridges': {
      title: 'ROM Cartridges',
      text: '<p>Read-Only Memory modules that contain software stored permanently on a chip, requiring no disk drive or other storage device. In the early personal computing era, ROM cartridges provided a way to distribute software that loaded instantly and couldn\u2019t be accidentally erased.</p><p>At MultiMate, David ported the word processor to run from ROM cartridges on the HP Portable Plus \u2014 a significant technical challenge that required making a large program work with dynamically-located data segments while running from read-only storage, without disrupting the system\u2019s overall architecture.</p>',
      links: [
        { label: 'ROM cartridge on Wikipedia', url: 'https://en.wikipedia.org/wiki/ROM_cartridge' }
      ]
    },

    'csharp': {
      title: 'C# (C Sharp)',
      text: '<p>A modern, object-oriented programming language developed by Microsoft, first released in 2000 as part of the .NET initiative. Designed by Anders Hejlsberg (who also created Turbo Pascal and Delphi), C# drew heavily from C++, Java, and Smalltalk.</p><p>C# has become one of the most popular programming languages in the world, used for everything from Windows desktop applications and web services to game development (via Unity) and mobile apps (via Xamarin/MAUI). David used C# extensively at Microsoft, including to build FlexWiki.</p>',
      links: [
        { label: 'C# on Wikipedia', url: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' }
      ]
    },

    'z80': {
      title: 'Zilog Z80',
      image: 'media/z80-chip.jpg',
      imageAlt: 'A Zilog Z80 microprocessor chip',
      text: '<p>An 8-bit microprocessor designed by Zilog and released in 1976. It became one of the most widely used CPUs in computing history, powering machines like the Sinclair ZX80/ZX81/ZX Spectrum, TRS-80, MSX computers, and the original Game Boy.</p><p>The Z80 was software-compatible with the Intel 8080 but added many improvements, including a simpler power supply, more registers, and additional instructions. David worked extensively with Z80 hardware and software at Sinclair Research, Heuristics, and Timex Computer Corp.</p>',
      links: [
        { label: 'Z80 on Wikipedia', url: 'https://en.wikipedia.org/wiki/Zilog_Z80' }
      ]
    },

    'x86': {
      title: 'x86 Architecture',
      text: '<p>A family of instruction set architectures based on the Intel 8086 processor (1978) that became the dominant standard for personal computers. The lineage runs from 8086 \u2192 80286 \u2192 80386 \u2192 80486 \u2192 Pentium and continues through today\u2019s Intel and AMD processors.</p><p>David worked extensively with x86 assembly language and protected-mode programming on 286 and 386 processors, building low-level system tools like CRTS (over 100,000 lines of C and x86 assembler) at Sage Software, as well as DOS Dynamic Link Libraries and mixed-language integration.</p>',
      links: [
        { label: 'x86 on Wikipedia', url: 'https://en.wikipedia.org/wiki/X86' }
      ]
    },

    'dotnet': {
      title: '.NET Framework',
      text: '<p>A software framework developed by Microsoft, first released in 2002, providing a managed runtime environment (the CLR), a large class library, and support for multiple programming languages including C#, VB.NET, and F#. It became the primary platform for building Windows applications, web services, and enterprise software.</p><p>.NET has since evolved into the cross-platform, open-source .NET (formerly .NET Core), which runs on Windows, macOS, and Linux. David used the .NET Framework extensively at Microsoft, most notably to build FlexWiki in C#.</p>',
      links: [
        { label: '.NET Framework on Wikipedia', url: 'https://en.wikipedia.org/wiki/.NET_Framework' }
      ]
    },

    'aspnet': {
      title: 'ASP.NET',
      text: '<p>Microsoft\u2019s server-side web application framework built on the .NET platform. It enables developers to build dynamic websites, web applications, and web APIs. Introduced in 2002 as a successor to Active Server Pages (classic ASP), it represented a major leap in web development productivity.</p><p>ASP.NET went through several major evolutions: Web Forms (component-based, event-driven), MVC (model-view-controller pattern), Web API (RESTful services), and the modern cross-platform ASP.NET Core. It remains one of the most popular frameworks for building server-side web applications.</p>',
      links: [
        { label: 'ASP.NET on Wikipedia', url: 'https://en.wikipedia.org/wiki/ASP.NET' }
      ]
    },

    'sharepoint': {
      title: 'SharePoint',
      text: '<p>A web-based collaboration platform developed by Microsoft, used for document management, intranet portals, content management, and team collaboration. First released in 2001, it quickly became one of Microsoft\u2019s fastest-growing enterprise products.</p><p>SharePoint provides features like document libraries with version control, team sites, search, workflows, and integration with Office applications. It\u2019s now a core part of the Microsoft 365 ecosystem, with both on-premises and cloud-hosted (SharePoint Online) versions used by hundreds of thousands of organizations worldwide.</p>',
      links: [
        { label: 'SharePoint on Wikipedia', url: 'https://en.wikipedia.org/wiki/SharePoint' }
      ]
    }

  };

  // --- Panel elements ---
  var overlay = document.getElementById('glossary-overlay');
  var panel = document.getElementById('glossary-panel');
  var titleEl = document.getElementById('glossary-title');
  var textEl = document.getElementById('glossary-text');
  var linksEl = document.getElementById('glossary-links');
  var closeBtn = panel.querySelector('.glossary-close');

  var imageEl = document.getElementById('glossary-image');

  function openGlossary(key) {
    var entry = defined[key];
    if (!entry) return;

    titleEl.textContent = entry.title;

    if (entry.image) {
      imageEl.innerHTML = '<img src="' + entry.image + '" alt="' + (entry.imageAlt || entry.title) + '" loading="lazy">';
      imageEl.style.display = '';
    } else {
      imageEl.innerHTML = '';
      imageEl.style.display = 'none';
    }

    textEl.innerHTML = entry.text;

    if (entry.links && entry.links.length > 0) {
      var html = '<span class="glossary-links-label">Learn more</span>';
      entry.links.forEach(function (link) {
        html += '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
          link.label +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' +
          '</a>';
      });
      linksEl.innerHTML = html;
      linksEl.style.display = '';
    } else {
      linksEl.innerHTML = '';
      linksEl.style.display = 'none';
    }

    overlay.classList.add('active');
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGlossary() {
    overlay.classList.remove('active');
    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // --- Event delegation for .term elements ---
  document.addEventListener('click', function (e) {
    var term = e.target.closest('.term');
    if (term) {
      e.preventDefault();
      e.stopPropagation();
      openGlossary(term.getAttribute('data-term'));
      return;
    }
  });

  // --- Direct click handlers for stat tiles ---
  document.querySelectorAll('.stat[data-term]').forEach(function (el) {
    el.addEventListener('click', function () {
      openGlossary(el.getAttribute('data-term'));
    });
  });

  closeBtn.addEventListener('click', closeGlossary);
  overlay.addEventListener('click', closeGlossary);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('active')) {
      closeGlossary();
    }
  });

})();
