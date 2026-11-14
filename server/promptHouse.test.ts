import { describe, it, expect } from "vitest";
import { freePrompts, premiumSectors } from "../client/src/data/promptHouse";
import { pricing, invoiceEnquiry } from "../client/src/data/pricing";
import { publicPaymentRecipients } from "../build-support/paymentRecipients";

describe("Prompt House launch rules", () => {
  it("keeps exactly 100 unique free prompts across the agreed sectors", () => {
    expect(freePrompts).toHaveLength(100);
    expect(new Set(freePrompts.map(p => p.id)).size).toBe(100);
    expect(new Set(freePrompts.map(p => p.task)).size).toBe(100);
    expect(new Set(freePrompts.map(p => p.sector)).size).toBe(11);
    expect(freePrompts.every(p => p.titleBn && p.task.includes("["))).toBe(
      true
    );
    expect(premiumSectors).toHaveLength(11);
  });
  it("uses the owner’s exact pre-VAT prices and a draft-only enquiry", () => {
    expect(pricing.map(p => p.amount)).toEqual([
      1000, 500, 30000, 50000, 100000,
    ]);
    expect(pricing.find(p => p.id === "marketing")?.unit).toBe(
      "for the first 3 months"
    );
    const url = new URL(invoiceEnquiry("Prompt & invoice"));
    expect(url.protocol).toBe("mailto:");
    expect(url.searchParams.get("subject")).toBe("Prompt & invoice");
    expect(url.searchParams.get("body")).toContain("VAT rate");
  });
});
describe("public payment configuration", () => {
  it("retains allowed recipients and excludes card numbers, local banks and extra keys", () => {
    const result = publicPaymentRecipients(
      JSON.stringify({
        mfs: [{ name: "bKash", numbers: ["TEST-WALLET"], pin: "DO-NOT-SHIP" }],
        cards: [{ number: "DO-NOT-SHIP" }],
        banks: [{ account: "DO-NOT-SHIP" }],
        usd: {
          holder: "Test",
          bank: "JP Morgan Chase NA",
          account: "TEST-ACCOUNT",
          routing: "TEST-ROUTING",
          address: "Test",
          password: "DO-NOT-SHIP",
        },
      })
    );
    expect(result).not.toContain("DO-NOT-SHIP");
    const parsed = JSON.parse(result);
    expect(parsed.mfs).toHaveLength(1);
    expect(parsed.usd.bank).toBe("JP Morgan Chase NA");
    expect(parsed.cards).toEqual([]);
    expect(parsed.banks).toEqual([]);
  });
  it("rejects other USD banks and malformed input", () => {
    expect(JSON.parse(publicPaymentRecipients("{bad"))).toEqual({});
    expect(
      JSON.parse(publicPaymentRecipients('{"usd":{"bank":"Other Bank"}}')).usd
    ).toBeNull();
    expect(JSON.parse(publicPaymentRecipients("null"))).toEqual({
      mfs: [],
      cards: [],
      banks: [],
      usd: null,
    });
  });
});
