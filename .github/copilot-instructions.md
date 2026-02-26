<!-- Copilot / AI agent instructions tailored to this repository -->
# Repo overview

This is a small, static portfolio site (no build tool). Primary files:

- `index.html` — single-page HTML with semantic sections (ids: `home`, `about`, `skills`, `projects`, `experience`, `contact`).
- `styles.css` — global styles, CSS variables for theming (`:root` + `[data-theme="light"]`).
- `script.js` — vanilla JS for UI behaviors: theme toggle, mobile menu, IntersectionObserver-driven animations, and skill-bar animations.
- `images/` — static assets (e.g. `images/profile.jpg`).

# Big picture & design rationale

- Intention: minimal, client-side static site for a portfolio — no Node/npm toolchain or server-side code in this repo. Changes should aim for small, incremental edits to HTML/CSS/JS.
- Theming is implemented with CSS variables and a `data-theme` attribute stored in `localStorage` under the key `portfolio-theme` (see `script.js`). This enables simple light/dark variations without runtime CSS compilation.
- Animations use IntersectionObserver and data attributes (`data-delay`, `.animate-on-scroll`, `.skill-bar-fill[data-width]`) to keep JS small and declarative.

# Developer workflows (how to run & debug)

- Local preview (PowerShell):

  ```powershell
  cd E:\portfolio
  python -m http.server 3000
  # then open http://localhost:3000 in a browser
  ```

- Alternatively use any static server (`npx serve .`, `live-server`, or open `index.html` directly). Use browser DevTools for JS/CSS debugging.

# Project-specific conventions & patterns

- DOM IDs and classes are relied upon in `script.js`. If renaming elements, update `script.js` accordingly. Key IDs/classes:
  - `theme-toggle` — button toggling `data-theme`.
  - `mobile-menu-btn`, `mobile-menu`, `menu-icon`, `close-icon` — mobile navigation.
  - `.animate-on-scroll` with optional `data-delay` — elements animated when intersecting viewport.
  - `.skill-bar-fill` with `data-width="<number>"` — width set when visible.

- Styling: use CSS variables in `:root` and in `[data-theme="light"]` instead of hard-coded colors, to preserve the theme system.

- Content updates: prefer editing `index.html` for copy and section structure. Keep presentational changes in `styles.css` and behavioral changes in `script.js`.

# Integration points & external dependencies

- External resources loaded at runtime:
  - Google Fonts (via link in `index.html`).
  - External social links / demos referenced in project cards — these are just links, not integrated services.

- No package.json, CI, or test framework detected. Do not add tooling without the maintainer's approval.

# Examples / quick edits

- Add a new project card: copy the existing `.project-card` block in `index.html` and update the `project-tags` and `project-links` anchors.

- Change theme default: update the bootstrapping logic at the top of `script.js` that reads `localStorage.getItem("portfolio-theme")`.

- Add a new scroll animation: give the element `.animate-on-scroll` and optionally `data-delay="150"`.

# Safety & constraints for AI edits

- Keep changes minimal and focused: this repo is a simple static site. Avoid introducing build systems, transpilers, or complex dependencies unless asked.
- Preserve existing IDs and data-attributes used by `script.js` unless you update the JS to match.
- Do not remove the Google Fonts link without confirming visual impact.

# Where to look for examples

- Animation + behavior: `script.js`
- Theme tokens & layout: `styles.css` (search for `:root` and `[data-theme="light"]`)
- Live content structure & example project entries: `index.html`

---

If anything above is unclear or you'd like the file rephrased (shorter, more directive, or expanded with examples), tell me which sections to change and I will iterate.
