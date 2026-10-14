# FinelyBD website redesign — development branch
## Approved identity
Use the supplied final blue-green infinity/leaf **finelybd** logo, tagline **AI FOR A BETTER HUMANITY**. Keep Panacea AI posters as visual layout inspiration only; do not publish Panacea branding as FinelyBD.
## Visual mapping (assets supplied in conversation, not yet in GitHub)
- Homepage hero: first Panacea AI wide business solutions poster, replace brand in design rather than displaying wrong brand.
- Individual services: services/products comparison poster.
- How it works: seven-step process poster.
- AI agent: two AI-agent interface posters.
- AI agent CTA: deploy agent poster; correct the original typographical errors.
- Cross-service landing page: FinelyBD laptop/robot poster.
- Brand header/favicon: final infinity-and-leaf FinelyBD logo.
Do not claim depicted statistics (5,000+, $3B+, 1M+, 99.9%) without evidence. Images must be optimized for mobile and accompanied by readable HTML copy and descriptive alt text.
## Payments
The `payments.html` page is a **non-transactional scaffold**. No live QR or checkout exists. bKash, Nagad, Rocket, Upay, bank transfer require verified merchant/payment information and permission. Card payments require a licensed hosted checkout, never raw card details or arbitrary card QR. Verify payments server-side before marking invoices paid. Show only necessary masked details publicly. Full account information, if ever required, belongs in an authenticated, authorized workflow and should not be exposed simply by scanning a QR.
## Email
Requested addresses: info@finelybd.com, ceo@finelybd.com, exop@finelybd.com. These are proposed, **not verified as existing mailboxes**. Create them in Namecheap's email-hosting control panel, confirm MX/SPF/DKIM/DMARC, then publish contact links.
## Release safety
Work on `develop`; do not merge into `main` or publish to production without review. Do not put secrets, bank account numbers, unapproved QRs, or API keys in the repository.
