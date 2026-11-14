/** Public recipient details, not secrets. Vite filters VITE_PAYMENT_SECRETS
 * to allowed MFS and JPMorgan recipients before embedding it in browser assets.
 * QR payloads can be read by every visitor. Card numbers and disabled local bank
 * destinations are excluded from the build. Missing configuration shows the
 * invoice-request fallback. Never put passwords, PINs, CVV or API keys here.
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
  usd: UsdSecret | null;
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
    return { mfs, cards, banks, usd };
  } catch {
    return null;
  }
}

export const paymentSecrets: PaymentSecrets | null = parseSecrets(
  import.meta.env.VITE_PAYMENT_SECRETS
);
