import { pricing, formatBDT, invoiceEnquiry } from "@/data/pricing";
import "@/pages/prompt-house.css";
export default function PricingSection() {
  return (
    <section className="section ph-pricing" aria-labelledby="pricing-heading">
      <div className="wrap">
        <span className="eyebrow">FINELYBD PRICING</span>
        <h2 id="pricing-heading">Clear prices. Agreed scope.</h2>
        <p>
          Prices are in Bangladeshi taka, plus VAT. Your invoice will confirm
          the applicable VAT rate, VAT amount and total before payment.
        </p>
        <div className="ph-prices">
          {pricing.map(item => (
            <article className="ph-price" key={item.id}>
              <h3>{item.title}</h3>
              <strong>
                {formatBDT(item.amount)} <small>+ VAT</small>
              </strong>
              <p>{item.unit}</p>
              <a className="text-link" href={invoiceEnquiry(item.title)}>
                Request an invoice →
              </a>
            </article>
          ))}
        </div>
        <p className="small-note">
          Prompt House’s fixed 100-prompt collection is free for everyone. Paid
          prompts cost ৳500 + VAT each. Project deliverables and marketing terms
          after the first three months are agreed separately.
        </p>
      </div>
    </section>
  );
}
