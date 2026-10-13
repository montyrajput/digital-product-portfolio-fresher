# Portfolio 1 (Fresher): Premium Upgrade

A one-page developer portfolio for a fresher with no job history yet. Projects come first. Each project shows the problem, what you did yourself, the results, a screenshot, and live and source links.

- **Look:** Navy with an indigo and violet accent. Dark by default, with a light theme toggle. Colours are unchanged from the first version of this portfolio.
- **Fonts:** Bricolage Grotesque (headings) and Geist (body). Both are bundled, so the page makes no font requests to other sites.
- **Hero:** your portrait on the right on desktop, stacked under the text on phones. It has no card, border or frame. Until you add a photo, a neutral placeholder is shown (see "Add your photo").
- **Page order:** Hero, Projects, About, Skills, Education and learning, Contact
- **Sample person:** Aarav Mehta (matches the Format 1 resume in the Fresher Job Kit). All names, companies, numbers and links in the sample are made up. Replace every one of them with your own. The sample-content bar and the "Sample link" buttons remind you until you do.

## Add your photo and screenshots

I could not use a real photo of you, so the hero shows a neutral placeholder silhouette. To use your own photo:

1. Save it as **`src/assets/profile.jpg`** (JPG, PNG, WebP or AVIF named `profile.*`). Portrait orientation, about 4:5, 800 x 1000 px or larger. A transparent PNG cut-out also works.
2. That is all. It replaces the placeholder automatically. Photos with another shape are cropped to 4:5 (never stretched), keeping the top of the picture, so put your face in the upper half.
3. Edit `person.photoAlt` in `src/portfolio.config.js` to describe the photo.

Project screenshots: save one image per project in **`src/assets/projects/`**, named after the project `id` in the config (task-manager, event-finder, expense-tracker, result-portal), for example `task-manager.png` (about 1280 x 800). It shows up in that project automatically. Without a file, sample mode shows a labelled empty slot and a published site shows nothing.

## What is in the folder

| Path | What it is |
|---|---|
| `src/portfolio.config.js` | **The file you edit.** Every word on the page comes from here |
| `src/assets/` | Your photo (`profile.jpg`), the placeholder, and `projects/` screenshots |
| `src/assets.js` | Finds those images at build time. Missing files cause no broken requests |
| `public/resume.pdf` | Your resume. Replace it and keep the file name |
| `src/index.css` | Colours (dark and light), fonts and Tailwind setup |
| `src/App.jsx` | Page order, title and share-card meta tags |
| `src/components/` | One file per section, plus `HeroPhoto`, `Screenshot`, `Reveal` (scroll-in motion), `ExtLink` (safe links) and `CopyEmail` |
| `src/hooks/useTheme.js` | Dark and light toggle (remembers the choice) |
| `index.html` | Page shell: title, description, Open Graph and Twitter tags, theme colour |
| `vite.config.js` | Build settings. `base: './'` lets the build run on any host or sub-path |
| `DEPLOY.md` | Step-by-step deployment guide |
| `screenshots/` | Screenshots of the upgraded sample site (placeholder photo) |

## Requirements

- Node.js 22 or newer (built and tested on Node 22.22.0, npm 10.9.4).
- A terminal. Git is only needed if you deploy from a Git repository.

## Install, run, build

```bash
cd portfolio-1-premium-upgraded

npm install          # first time only. `npm ci` installs exactly what the lockfile pins
npm run dev          # development server, usually http://localhost:5173
npm run build        # production build into dist/
npm run preview      # serves dist/ locally so you can check the real build
```

Do not open `dist/index.html` by double-clicking it. Browsers block the scripts when a page is opened from a file, and you will see a blank page. Use `npm run preview` or a static host (see `DEPLOY.md`).

## Make it yours (about 20 minutes)

1. Open `src/portfolio.config.js`. The comments at the top repeat these steps.
2. Replace the sample text with your own. Only write what is true. Recruiters open your links and read your code. If you do not have a number, describe the change instead.
3. For each project fill in `problem` (what was wrong), `contribution` (what you did yourself), and `highlights` (results you can verify).
4. Replace every link that contains `your-` with a real one. While `sampleMode` is `true` these show as "Sample link" buttons. When you set `sampleMode` to `false`, any link that still contains `your-` is **hidden**, so a published page never has a dead link.
5. Add your photo, project screenshots, and `public/resume.pdf` (keep the name `resume.pdf`).
6. Set `sampleMode` to `false`. Set `showCredit` to `false` if you do not want the credit line.
7. Run `npm run dev`, click everything, check on your phone, then `npm run build` and follow `DEPLOY.md`.

## Motion and accessibility

- Sections fade in once as they scroll into view. Hover effects are subtle. Smooth scrolling is used for in-page links.
- With "reduce motion" turned on in the operating system, all of that is off: content simply appears, and the scroll-progress bar and smooth scrolling are disabled.
- There is no 3D, parallax or particle effect.
- Skip link, visible keyboard focus, labelled landmarks, `aria-current` in the navigation, and a mobile menu that traps focus, closes on Escape and returns focus to its button.
- Text colours were measured against the backgrounds: body text 16:1, muted text at least 5.7:1, accent text at least 5.9:1, white button text at least 4.8:1 (WCAG AA needs 4.5:1).

## Change colours or fonts

- **Colours:** open `src/index.css`. The dark theme is the `:root` block and the light theme is `[data-theme='light']`. Check that text stays readable on both.
- **Tailwind:** v4, no `tailwind.config.js`. It loads through `@tailwindcss/vite`, and the tokens live in `@theme inline` at the top of `src/index.css`.
- **Fonts:** imported in `src/main.jsx` from @fontsource-variable packages. Change the imports and `--font-display` / `--font-sans` in `src/index.css`.

## What was tested, and what was not

Tested on 11 Oct 2026, on the final code, after a clean `npm ci` and `npm run build` (Node 22.22.0):

- Headless Chromium at 1440 x 900, 820 x 1100 and 390 x 844, in dark and light (12 runs): 0 console errors, 0 failed requests, no sideways scrolling, no 3D canvas, hero photo area has no border, radius, shadow or background, photo on the right on desktop and stacked below the text on tablet and phone, every in-page anchor resolves, no unfinished `your-` link is an active link.
- Theme toggle switches and remembers the choice. Clicking a nav link scrolls to the section and marks it current. The resume file is served as a PDF. "Copy email" works. Sample links show the "Sample link" note. The mobile menu keeps focus inside, closes on Escape and releases the scroll lock.
- Reduced motion: nothing is hidden and no entrance animation runs.
- A simulated landscape photo (1000 x 600) was cropped to 4:5 without stretching, and a simulated screenshot appeared in its project.

Not tested:

- **Your real photo.** None was supplied, so only a synthetic image was used to test the layout.
- Real phones and tablets, Safari and Firefox, Lighthouse or other speed scores, screen readers.
- A real deployment on Vercel, Netlify or GitHub Pages.
- Whether the sample links work. They are placeholders by design.

## Dependencies and licences

| Package | Licence |
|---|---|
| react, react-dom, framer-motion | MIT |
| vite, @vitejs/plugin-react, tailwindcss, @tailwindcss/vite | MIT |
| @fontsource-variable/bricolage-grotesque, @fontsource-variable/geist | SIL Open Font License 1.1 |

The three.js dependency from the first version was removed because the 3D hero is gone. The placeholder silhouette and the layout were created for this kit. No images are copied from other sites.

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page after opening `dist/index.html` | Use `npm run preview` or a static host |
| `npm install` complains about the Node version | Install Node 22 or newer from nodejs.org |
| My photo does not show | The file must be named `profile.jpg` (or .png, .webp, .avif) and sit directly in `src/assets/`. Restart `npm run dev` after adding it |
| Screenshot does not show | Name it exactly like the project `id`, in `src/assets/projects/` |
| A link disappeared after I set `sampleMode` to `false` | It still contained `your-`. Put in the real address |
| Page still shows sample content after a deploy | You deployed an old `dist/`. Run `npm run build` again and upload the new one |
