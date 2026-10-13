# Deploying Portfolio A: Fresher

Before any of these, edit `src/portfolio.config.js`, set `sampleMode` to `false`, replace `public/resume.pdf`, and run `npm run build` once on your computer to confirm it works.

These steps follow each service's standard flow. They have not been run against your accounts, and service screens change, so follow the on-screen labels if they differ from the words below.

The build uses `base: './'`, so the same `dist/` folder works at a domain root (`you.vercel.app`) and under a sub-path (`you.github.io/portfolio`).

## Option 1: Netlify, fastest (no Git needed)

1. Run `npm run build`.
2. Sign in at netlify.com and open the Netlify Drop page (drag-and-drop deploy).
3. Drag the `dist` folder onto the page.
4. Netlify gives you a live link. Open it on your phone and check every link.

To update later, run `npm run build` again and drag the new `dist` folder onto the same site's Deploys page.

## Option 2: Vercel (Git based, updates on every push)

1. Put the project folder in a GitHub repository (the `.gitignore` already leaves out `node_modules` and `dist`).
2. In Vercel choose Add New, then Project, and import the repository.
3. Use these settings: Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`.
4. Click Deploy. Every push to the main branch redeploys the site.

## Option 3: GitHub Pages (free, from your GitHub account)

1. Put the project in a GitHub repository with the default branch named `main`.
2. In the repository open Settings, then Pages, and set Source to **GitHub Actions**.
3. Create the file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. Commit and push. Open the Actions tab and wait for the run to finish.
5. Your site is at `https://<your-username>.github.io/<repository-name>/`.

## Custom domain

Every service above has a Domains or Custom domain setting. Add your domain there, then add the DNS records the service shows you at your domain registrar. HTTPS is set up by the service.

## After you deploy: 5-minute check

- Open the live link on your phone, not only on your computer.
- Click every project link, the GitHub link, the LinkedIn link and the email link.
- Click Resume and check that it downloads **your** resume.
- Switch between dark and light.
- Confirm the "sample content" bar is gone. If it is still there, `sampleMode` was still `true` when you built.
- Put the live link on your resume, your LinkedIn profile and your GitHub profile README.
