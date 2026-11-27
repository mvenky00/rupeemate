# RupeeMate

RupeeMate is an installable personal finance tracker for net worth, accounts, cash flow, budgets, and savings goals. It uses HTML, CSS, and vanilla JavaScript, with a web app manifest and a service worker for offline use after the first successful visit.

## Run locally

Run `python3 -m http.server 8000 --directory public` from the project root, then open `http://localhost:8000`. No dependency installation or build step is needed. Netlify serves the same `public/` directory.

## Data and offline use

Financial entries are stored in the current browser on the current site origin. Use the backup and restore controls in Settings before clearing browser data or moving to a different device or hostname.

## Google Drive sync

In Google Cloud, enable the Google Drive API and create a Web application OAuth client (or reuse the existing RupeeMate client to keep access to its Drive app data). Add the site's HTTPS origin to Authorized JavaScript origins, and add test users if the OAuth consent screen is still in testing. Configure the public OAuth client ID as `GOOGLE_CLIENT_ID` in Netlify with the Runtime scope; no OAuth client secret is needed. Deploy the app again after changing the setting. To test on a preview or locally, use an origin explicitly authorized in Google Cloud.

Continue with Google appears on Overview and in Settings. When it is unavailable, the app explains why and the ledger continues working locally.

Use a supported browser’s install or Add to Home Screen option to install the app. Exchange rates and projections in the app are estimates, not live financial data.
