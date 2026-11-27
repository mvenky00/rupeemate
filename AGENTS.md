# Project Guide

- `public/index.html` holds the RupeeMate UI, styles, and browser-side JavaScript. Follow the existing vanilla JavaScript conventions; there is no package manager or compilation step.
- `public/manifest.json` and `public/icons/` define the installable app. Keep the manifest and service-worker asset paths aligned when changing icons.
- `public/sw.js` caches the offline shell. Increment its cache version when changing shell assets, and preserve the browser’s existing ledger storage keys and backup format unless migrating them deliberately.
- `netlify.toml` publishes only `public/`. Keep documentation and uploaded archives outside that directory. Never add an OAuth client secret or other private configuration to public assets.
