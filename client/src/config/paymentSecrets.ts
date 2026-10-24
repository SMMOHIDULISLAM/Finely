/**
 * Payment destination secrets.
 *
 * Full MFS / bank / card numbers are NOT stored in this repository. They are
 * provided at build time through the VITE_PAYMENT_SECRETS environment
 * variable (a JSON object, set in the Netlify site's environment settings),
 * baked into the production bundle, and never written to source control.
 *
 * If the variable is missing or malformed (local dev, forks, previews),
 * `paymentSecrets` is null and the Payments page renders a graceful
 * "details on request" state instead of the QR codes.
 *
 * Shape:
 * {
 *   "mfs":   [{ "name": "bKash", "numbers": ["01XXXXXXXXX"] }],
 *   "cards": [{ "network": "VISA", "number": "...", "currency": "..." }],
 *   "banks": [{ "holder": "...", "bank": "...", "account": "...", "branch": "..." }],
 *   "usd":   { "holder": "...", "bank": "...", "account": "...",
 *              "routing": "...", "address": "..." }
 * }
 */

export type MfsSecret = { name: string; numbers: string[] };
export type CardSecret = {
  network: string;
  number: string;
  currency: string;
};
export type BankSecret = {
  holder: string;
  bank: string;
  account: string;
  branch: string;
};
export type UsdSecret = {
  holder: string;
  bank: string;
  account: string;
  routing: string;
  address: string;
};

export type PaymentSecrets = {
  mfs: MfsSecret[];
  cards: CardSecret[];
  banks: BankSecret[];
  usd: UsdSecret;
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === "string");
}

function parseSecrets(raw: unknown): PaymentSecrets | null {
  if (typeof raw !== "string" || !raw.trim()) return null;
  try {
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    const mfs = (data.mfs ?? []).filter(
      (wallet: unknown): wallet is MfsSecret =>
        !!wallet &&
        typeof wallet === "object" &&
        typeof (wallet as MfsSecret).name === "string" &&
        isStringArray((wallet as MfsSecret).numbers)
    );
    const cards = (data.cards ?? []).filter(
      (card: unknown): card is CardSecret =>
        !!card &&
        typeof card === "object" &&
        typeof (card as CardSecret).network === "string" &&
        typeof (card as CardSecret).number === "string"
    );
    const banks = (data.banks ?? []).filter(
      (bank: unknown): bank is BankSecret =>
        !!bank &&
        typeof bank === "object" &&
        typeof (bank as BankSecret).bank === "string" &&
        typeof (bank as BankSecret).account === "string" &&
        typeof (bank as BankSecret).holder === "string" &&
        typeof (bank as BankSecret).branch === "string"
    );
    const usdRaw = data.usd;
    const usd: UsdSecret | null =
      usdRaw &&
      typeof usdRaw === "object" &&
      typeof usdRaw.holder === "string" &&
      typeof usdRaw.bank === "string" &&
      typeof usdRaw.account === "string" &&
      typeof usdRaw.routing === "string" &&
      typeof usdRaw.address === "string"
        ? {
            holder: usdRaw.holder,
            bank: usdRaw.bank,
            account: usdRaw.account,
            routing: usdRaw.routing,
            address: usdRaw.address,
          }
        : null;
    if (!mfs.length && !cards.length && !banks.length && !usd) return null;
    return { mfs, cards, banks, usd: usd! };
  } catch {
    return null;
  }
}

export const paymentSecrets: PaymentSecrets | null = parseSecrets(
  import.meta.env.VITE_PAYMENT_SECRETS
);
