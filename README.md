# FinelyBD redesigned website

A responsive React/Vite redesign of FinelyBD using the supplied blue-green logo and AI city backgrounds. The home, services, about/leadership, contact, portal, mobile and payment pages share one visual system. Business content comes from the supplied source backups and current live website; no unsupported client counts, results, awards or partnerships are added.

## Development

Use Node 22 and the pinned pnpm 10.18.0 package manager. Run `pnpm install --frozen-lockfile`, then `pnpm dev:static`. The demo listens on port 3000. `pnpm check` checks TypeScript; `pnpm build:static` creates static files in `dist/public`.

The frontend is in `client/src`. Shared assets and service/leadership information are in `client/src/data/brand.ts`, navigation/footer in `client/src/components/SiteLayout.tsx`, home in `client/src/pages/Home.tsx`, and supporting pages in `client/src/pages/SupportingPages.tsx`. The existing starter backend is unused; this demo requires no database or server resource.

## Preview and forms

In Manus Preview, imagery uses managed storage. The contact form prepares an unsent draft and can copy it. It does not send enquiries, collect passwords or process payments. No verified business mailbox, phone or address is in the supplied website sources, so the official contact page is linked instead.

The portal is explicitly under development. Payment methods remain pending merchant onboarding; there are no QR codes or payment fields. The linked external AI app is explicitly unverified and separate from this site.

## GitHub / Netlify handoff

The user’s named repository is `SMMOHIDULISLAM/Fine`; it was not accessible through unauthenticated cloning during this task. No changes have been pushed there. Source archives supplied in `Finelybdwebfile.zip` were used to preserve meaningful content and route compatibility.

`netlify.toml` builds to `dist/public` with the pinned package manager. `VITE_PORTABLE_ASSETS=true` selects the committed `/assets/` copies rather than Manus storage, so the site does not depend on Manus asset hosting on Netlify. Original routes `/index.html`, `/contact.html`, `/login.html`, `/mobile-app.html`, and `/payments.html` remain supported. The original consultation form name, hidden static definition and fields are retained; `VITE_NETLIFY_FORMS=true` enables Netlify form submission. Check Netlify form detection/settings after a branch deploy. A positive HTTP response means submission acceptance, not verified email delivery.

Review this redesign on a separate branch or deploy preview before merging into the live-deployment branch. The original repository’s root-level static publishing setting must be replaced with this project’s build declaration when the redesign is intentionally adopted. Its legacy Jekyll workflow and HTML-only smoke checks require adjustment for the new build, not blind copying. Do not overwrite unrelated work or commit credentials.

This is a design-review version. The `noindex, nofollow` metadata and footer’s design-preview label are deliberate. Remove those only when the owner approves production release. The mobile page currently directs installation to the existing live PWA; this preview does not replace its production service worker.
