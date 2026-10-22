# LARGO GitHub Pages preview

[Open the website](https://edgarlargo.github.io/edgar-largo-preview/)

This is a static public snapshot for the repository path `/edgar-largo-preview/`. All ten routes are ordinary directories with index.html; no PHP, Node function, database or build is required for hosting. Run `node local-server.mjs` for a local view at http://127.0.0.1:8189/edgar-largo-preview/.

Forms retain their layout and show a preview message; they do not send mail or collect submissions. CMS/admin features and sessions are excluded. Old index.php query addresses are replaced by clean paths; those old PHP addresses are not supported on GitHub Pages. Re-export if the repository name or base path changes.

GitHub Pages publishes the repository root from `main`. Changes pushed to that branch update the preview. `.nojekyll` preserves the exported static files without a Jekyll build. `deployment/pages.yml.example` is an optional, inactive workflow example.

This repository contains the public viewing export only. The complete PHP website, administration and private configuration are maintained separately. The design, fonts, media and models retain their respective rights; public visibility does not grant a blanket open-source license. Bundled library copyright and license notices are retained.
