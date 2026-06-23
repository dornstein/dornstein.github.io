# davidorn.io

Personal site for David Ornstein, served via GitHub Pages from this repository
(`dornstein.github.io`) on the custom domain **davidorn.io**.

Used as the verified-publisher domain for Visual Studio Code extensions.

## How it works

- Static single-page site (`index.html`) — no build step.
- GitHub Pages publishes the `main` branch automatically on every push.
- `CNAME` binds the site to the apex domain `davidorn.io`.
- DNS for `davidorn.io` is managed in Cloudflare.

## Local preview

Open `index.html` in a browser, or:

```sh
python -m http.server 8000
```
