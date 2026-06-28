# dornstein.io

Personal site for David Ornstein, served via GitHub Pages from this repository
(`dornstein/dornstein.io`) on the custom domain **dornstein.io**.

> **Migration in progress.** The site content is being moved here from the
> `dornstein/about` repository so it can be served at <https://dornstein.io>.
> Once dornstein.io is verified live, the `about` repository will be retired
> (archived).

## How it works

- Static site (`index.html`) — no build step.
- GitHub Pages publishes the `main` branch automatically on every push.
- `CNAME` binds the site to the apex domain `dornstein.io`.
- `.nojekyll` disables Jekyll so files are served exactly as committed.
- DNS for `dornstein.io` is being configured.

## Local preview

Open `index.html` in a browser, or:

```sh
python -m http.server 8000
```
