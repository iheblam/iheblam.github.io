# Iheb Lamouchi — Portfolio

A responsive bilingual (EN/FR) portfolio with a "data lab" theme matching the GitHub profile: calm navy base, cyan accent, violet for depth. Animated data pipelines in the background, a live neural-network training card in the hero, a computer-vision bounding box on the portrait, an interactive skills knowledge graph, a KNN cluster for TuniTech, and certifications as training checkpoints. Light/dark themes, pause-animation toggle, and reduced-motion support. Plain HTML, CSS and JavaScript; no build step. The previous UI is kept in `_old-ui/`.

## Preview locally

Open `index.html` in your browser, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Content

- `index.html`: English profile, projects, experience, contact links, and demo section.
- `app.js`: French translations and saved language/theme preferences.
- `styles.css`: responsive layout, themes, and motion. Respects reduced-motion preferences.
- `assets/iheb-portrait.png`: transparent portrait cutout; original photograph is preserved.
- `assets/Iheb-Lamouchi-CV.pdf`: supplied English CV.
- `projects/`: place future project videos and supporting assets here.

Project claims and metrics come from the supplied CV. Additional TechCare Pro and HomeDoc descriptions were checked against their public GitHub README files on October 7, 2026. Repository links point directly to the corresponding projects. Background data points and project illustrations are decorative, not evaluation charts. Demo videos will be added later.

Additional sources: https://github.com/iheblam/techcare-pro and https://github.com/iheblam/HomeDoc_Backend. HomeDoc is described as a software project; no clinical performance or deployment claims are made.

The portrait was edited with the built-in ImageGen tool. Prompt: remove only the white background, preserve identity, face, hair, glasses, pose, suit, white shirt, tie, and original photographic appearance; return a genuine transparent PNG with natural hair edges and no retouching or added elements.

## Adding videos later

Replace the demo placeholder with native video cards using `<video controls preload="metadata" playsinline poster="projects/project-poster.jpg">`, `<source src="projects/project-demo.mp4" type="video/mp4">`, and a captions `<track>`. Include bilingual titles and descriptions and avoid autoplay. For large recordings, use a hosted video embed to keep the repository small.

## Hosting readiness

All local asset paths are relative, so this works at either a root domain or a GitHub Pages repository subpath. Deployment is intentionally left for the next phase. No account credentials are required for the public GitHub profile link.

Fonts are loaded from Google Fonts with local system-font fallbacks. The site contains no analytics, backend, contact form, or external JavaScript dependencies. Email opens the visitor’s mail app. The downloadable CV is currently in English in both interface languages.
