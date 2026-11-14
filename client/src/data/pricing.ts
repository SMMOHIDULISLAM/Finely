export const pricing = [
  {
    id: "consultation",
    title: "First consultation",
    amount: 1000,
    unit: "per consultation",
  },
  {
    id: "prompt",
    title: "Paid AI prompt",
    amount: 500,
    unit: "per prompt, outside the free collection",
  },
  {
    id: "marketing",
    title: "Full AI marketing",
    amount: 30000,
    unit: "for the first 3 months",
  },
  {
    id: "automation",
    title: "Full AI automation",
    amount: 50000,
    unit: "per agreed project",
  },
  {
    id: "agent",
    title: "AI agent",
    amount: 100000,
    unit: "one agent, one work/task",
  },
] as const;
export const formatBDT = (amount: number) =>
  `৳${amount.toLocaleString("en-BD")}`;
export function invoiceEnquiry(subject: string) {
  return `mailto:info@finelybd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hello FinelyBD,\n\nI would like to enquire about " + subject + ".\nMy requirements: \n\nPlease confirm the scope, VAT rate and amount, total payable, delivery terms and available payment instructions before I pay.\n\nName: \n")}`;
}
