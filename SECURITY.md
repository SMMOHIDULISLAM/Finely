# Finely BD security notes

Production corporate site serves static HTML via Netlify. The staff/client login is NOT implemented and must not collect user credentials until a proper authentication provider and role-based authorization are configured.

The enquiry form uses Netlify Forms. Verify real submissions using Netlify's form dashboard; visiting a success page alone is not proof of submission.

There is no live payment provider. Do not claim any payment gateway is active without merchant onboarding and end-to-end security testing.

Before enabling accounts or payments: implement server-side role enforcement, MFA for privileged users, secure session handling, audit logs, privacy/retention controls, abuse limits and appropriate monitoring. No real user data in demos.

The current inline scripts/styles require additional work before a strict Content Security Policy can be deployed. Review security headers and run browser tests before production publication.
