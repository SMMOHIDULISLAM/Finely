// VITE values are public. Strip card numbers and disabled bank destinations
// before Vite can embed the configured JSON in browser assets.
export function publicPaymentRecipients(raw: string | undefined): string {
  try {
    const data = JSON.parse(raw || "{}");
    const mfs = Array.isArray(data?.mfs)
      ? data.mfs
          .filter(
            (w: any) =>
              ["bkash", "rocket", "nagad", "upay"].includes(
                String(w?.name).toLowerCase()
              ) &&
              Array.isArray(w?.numbers) &&
              w.numbers.every((n: unknown) => typeof n === "string")
          )
          .map((w: any) => ({ name: w.name, numbers: w.numbers }))
      : [];
    const usd = data?.usd;
    const allowed =
      usd &&
      /j\.?\s*p\.?\s*morgan|chase/i.test(usd.bank || "") &&
      ["holder", "bank", "account", "routing", "address"].every(
        k => typeof usd[k] === "string"
      );
    return JSON.stringify({
      mfs,
      cards: [],
      banks: [],
      usd: allowed
        ? {
            holder: usd.holder,
            bank: usd.bank,
            account: usd.account,
            routing: usd.routing,
            address: usd.address,
          }
        : null,
    });
  } catch {
    return "{}";
  }
}
