# dornstein.io

Personal portfolio site for David Ornstein, served via GitHub Pages from this
repository on the custom domain **dornstein.io**.

## How it works

- Static site — no build step. Pages: `index.html` (home) and `patents.html`.
- Styling and behavior live in `styles.css`, `script.js`, and `glossary.js`.
- Images are under `media/`.
- GitHub Pages publishes the default branch automatically on every push.
- `CNAME` binds the site to the apex domain `dornstein.io`.
- `.nojekyll` disables Jekyll processing so all files are served as-is.

## Source of truth

- `REFERENCE.md` — authoritative factual reference for site content. Not
  published or linked from any page; consult it before editing facts.
- `FEEDBACK.md` — collected feedback used to inform site copy. Not published.

## Local preview

Open `index.html` in a browser, or:

```sh
python -m http.server 8000
```
