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

The owner has approved production release. The preview-only robots metadata and footer label have been removed. The mobile page currently directs installation to the existing live PWA; this preview does not replace its production service worker.


## Prompt House and pricing update (11 November 2026)

`/prompt-house` adds a fixed, shared collection of exactly 100 free prompts across
11 sectors. Stable IDs `free-001` through `free-100` are the free allowance for
every visitor, not a per-user quota. Search, sector filters, pagination, full-text
view, copy and Bangla/English output instructions are included. This is a curated
starter collection, not an empirically verified Bangladesh popularity ranking.
The homepage, desktop/mobile navigation and footer link to the wing.

Paid custom prompts cost BDT 500 + VAT. The paid tab contains category previews
and invoice-request email links. Full paid prompt content is not bundled in the
public frontend. Payment verification and delivery are manual: this release does
not implement a paid catalogue backend, customer authentication, automatic
checkout or entitlement/unlock service.

The shared price list is in `client/src/data/pricing.ts`, displayed on Services
and Payments. Consultation: BDT 1,000 + VAT; paid prompt: BDT 500 + VAT; full AI
marketing: BDT 30,000 + VAT for the first three months; full AI automation:
BDT 50,000 + VAT per agreed project; AI agent: BDT 100,000 + VAT for one agent and
one task. No VAT rate is assumed; invoices must confirm the rate, amount and total.

Personal MFS, cards (invoice instructions) and JPMorgan Chase are retained.
Local banks and all other methods are disabled. `VITE_PAYMENT_SECRETS` is a legacy
name for PUBLIC recipient data: Vite filters it through
`build-support/paymentRecipients.ts` before bundling, retaining only permitted
MFS recipients and JPMorgan Chase wire fields. Card numbers and local-bank
accounts are excluded. QR payloads are readable recipient text, not verified
payment-gateway QR codes. Do not put PINs, passwords, CVV, OTPs or API credentials
in frontend configuration. Absent recipient configuration shows invoice-request
fallbacks; this is not confirmation that a receiving account or gateway works.

Release review: the owner authorized GitHub updates and Netlify production publishing.
The verified Netlify project is `finelybd`, connected to this repository's `main`
branch with automatic publishing enabled. Netlify build/publish settings remain
in `netlify.toml`. `.netlify/` is ignored and no local site link is committed.

Validation: TypeScript and static build pass; 10 Vitest tests pass, including
free-collection count/uniqueness, prices and payment configuration filtering.
Local Chromium launch is blocked by the runtime's socket permission restriction;
shared browser could not reach the local server. Visual/interactions review on a
Netlify Deploy Preview is still required before production approval.
