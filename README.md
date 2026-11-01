# Marc Christian Francisco — Portfolio

A monochrome portfolio built with Vite and SCSS.

## Run locally

Install Node.js 20.19+ or 22.12+, then from this folder run:

```bash
npm install
npm run dev
```

Vite prints the local address to open in your browser. To make a production build locally, run `npm run build`.

## Minified output

`npm run build` compiles and minifies `src/style.scss` into `dist/assets/main.min.css` and `src/main.js` into `dist/assets/main.min.js`. The built `dist/index.html` links to both files. The file names are set in `vite.config.js`.

## Publish with GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.

The Vite base path is relative, so the built site works at the root of a `username.github.io` repository and at a repository subpath.

## Project images

The six project screenshots are stored in `public/images/projects/` as WebP files and are included in the GitHub Pages build.

## Personal links

Contact destinations and profile links are in `index.html`. The Gmail link opens a compose window for `Franciscomarc009@gmail.com`; WhatsApp uses the number in international format.
