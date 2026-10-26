# Şerife Şeyma Dere

A minimal, single-page academic website for GitHub Pages. No build step or dependencies are required.

## Preview locally

Run `python3 -m http.server 8000 --bind 127.0.0.1` in this directory, then visit http://127.0.0.1:8000.

## Publish on GitHub Pages

After the approved files are pushed to `sseymadere/sseymadere.github.io`, the repository owner can open **Settings → Pages**, choose **Deploy from a branch**, and select **main** and **/ (root)**.

The site will be available at https://sseymadere.github.io/ once the deployment succeeds.

## Edit

- Update the biography, page title, and description in `index.html`.
- Adjust typography and spacing in `style.css`.

A custom domain can be configured later in GitHub Pages settings.

## Design reference

Typography, font files, and link colors follow [Cagatay Isil’s website](https://cagatayisil.github.io/), which credits [Jon Barron’s website template](https://github.com/jonbarron/jonbarron_website). This version uses a centered, text-only layout.

## Email

The email address is obfuscated in `email.js` and decoded only when a visitor selects **E-mail**. It appears as plain text using `[at]` and `[dot]`, without a clickable email link. This reduces basic scraping, but determined bots can still decode it. JavaScript is required to reveal the address.
