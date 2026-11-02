# Code Root Academy — Project Audit

## Structure
- Root redirect: `index.html` redirects to `ar/index.ar.html`.
- Arabic site: `ar/` with eight HTML pages, shared `CSS/style.css`, shared `JS/main.js`, `JS/gallery-data.js`, `JS/jquery.min.js`, and `images/`.
- English site: `en/` with the matching eight HTML pages and shared assets.
- The project is static/front-end only; no package manifest or backend was found in the extracted top-level structure.

## Architecture
- Each page is a largely self-contained HTML document and uses body classes such as `page-home`, `page-booking`, and `page-gallery`.
- The shared stylesheet contains both base styles and later page-specific overrides; later rules are expected to take precedence.
- The shared JavaScript handles language labels, theme persistence, mobile navigation, the circuit canvas, assistant widget, gallery rendering, booking validation/WhatsApp handoff, FAQ behavior, sharing, and footer year.
- Arabic and English documents are maintained separately, with language counterpart links between equivalent pages.

## Initial observations
- The visual direction is a premium biophilic technology style using Root Green and Cobalt Blue, with responsive layout and Canvas background effects.
- Some images are referenced from `/manus-storage/...`, while local scene assets are referenced under `images/images/...`; these paths should be preserved or corrected only if the user requests asset/path work.
- `gallery-data.js` currently provides empty `certifications` and `materials` arrays.
- The code uses jQuery and native browser APIs; modifications should preserve existing selectors and shared behavior unless a requested change requires otherwise.

## Next input needed
- Specific UI/content/interaction changes requested by the user.
