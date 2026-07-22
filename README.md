# Muhammad Usama — Professional Portfolio

A responsive, accessible and attractive one-page portfolio built with React and Vite. The site is designed primarily for international Android-development jobs, remote work, freelance clients and selected digital services.

## Highlights

- Premium dark and light themes with saved preference
- Responsive mobile navigation and active-section tracking
- Animated professional hero with Muhammad Usama's profile photograph
- Android-first skills and project positioning
- Filterable project gallery with expandable mini case studies
- Experience, education, services and certificate sections
- Free mailto-based contact form with validation
- Downloadable CV
- Accessibility support, skip link and reduced-motion handling
- SEO metadata, Open Graph cover, favicon, robots file and sitemap template
- No paid framework, UI kit or hosting requirement

## Project structure

```text
muhammad-usama-portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── certificates/
│   │   └── logos/
│   ├── documents/
│   │   └── Muhammad_Usama_CV.pdf
│   ├── favicon.png
│   ├── og-cover.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── sections/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

Install Node.js, then open this folder in Visual Studio Code and run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:5173`.

Create a production build:

```bash
npm run build
npm run preview
```

## Required personalization before publishing

### 1. Contact and social links

Open `src/data/site.js` and replace:

- `your.email@example.com`
- Phone and WhatsApp values
- LinkedIn URL
- GitHub URL
- Portfolio URL

### 2. Education

Open `src/data/experience.js` and replace the education placeholder with verified details.

### 3. Work history

Update company names, exact dates, responsibilities and measurable achievements. Do not publish confidential employer information.

### 4. Projects

Open `src/data/projects.js` and replace placeholder GitHub links. Add Play Store, live demo, Behance or case-study links where available.

Project artwork is stored in `public/images/projects`. Replace the SVG previews with genuine screenshots for stronger recruiter trust.

### 5. Certificates

Put verified certificate images in `public/images/certificates`, then add entries to `src/data/certificates.js`.

### 6. Resume

Replace `public/documents/Muhammad_Usama_CV.pdf` whenever the CV is updated. Keep the same filename so the buttons continue to work.

### 7. Search metadata

Update the website URL in:

- `public/sitemap.xml`
- `src/data/site.js`
- Open Graph information in `index.html`, where required

## Free Vercel deployment

1. Create a GitHub repository named `muhammad-usama-portfolio`.
2. Upload or push this project to the repository.
3. Sign in to Vercel with GitHub.
4. Choose **Add New Project** and import the repository.
5. Vercel should detect Vite automatically.
6. Select **Deploy**.

Every future push to the main branch can update the live website automatically.

## Free GitHub Pages deployment

For GitHub Pages, configure the Vite `base` option when deploying under a repository path, then use a GitHub Actions workflow or a Pages deployment package. Vercel is the simplest option for this project.

## Recommended improvements after launch

- Replace project illustrations with real screenshots and short demo videos
- Add verified client or manager testimonials
- Connect the form to EmailJS or Formspree after replacing the placeholder email
- Add analytics only after setting an appropriate privacy notice
- Create separate case-study pages when each project has enough detail
- Add a custom domain later; the free `.vercel.app` domain is enough to start
- Review spelling, dates and links before sending the portfolio to recruiters

## Privacy and security

Never upload API keys, passwords, private endpoints, customer information, employer source code or confidential documents. Use screenshots and written case studies for private projects.
