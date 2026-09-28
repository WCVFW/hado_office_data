import type { PricingPlan } from "@/components/RegistrationTemplate";
import { useParams, Link, useLocation } from "react-router-dom";

const plansData: Record<string, PricingPlan[]> = {
  plc: [
    {
      name: "Starter",
      priceLabel: "₹999 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Company name filing 2-4 days",
        "DSC in 4-7 days",
        "SPICe+ filing in 14 days",
        "Incorporation Certificate in 28-35 days",
        "PAN + TAN, DIN for directors",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹1,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Faster name filing 1-2 days",
        "DSC in 3-4 days",
        "SPICe+ filing in 7 days",
        "Incorporation in 14-21 days",
        "PAN + TAN, DIN",
        "Digital welcome kit & post-incorporation checklist",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹3,499 + Govt. fee",
      bullets: [
        "Everything in Standard",
        "MSME registration included",
        "Expedited Trademark application filing",
      ],
    },
  ],
  llp: [
    {
      name: "Standard",
      priceLabel: "₹1,499 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Name reservation 2–4 days",
        "DSC in 4–7 days",
        "LLP incorporation filing in 21 days*",
        "Incorporation Certificate",
        "LLP agreement filing (post incorporation)",
        "PAN + TAN, DIN for partners",
      ],
    },
    {
      name: "Fastrack",
      priceLabel: "₹2,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Name reserved in 24 hours*",
        "DSC in 24 hours*",
        "Incorporation filing in 14 days*",
        "LLP agreement in 7 days (post incorporation)",
        "Digital welcome kit with compliance checklist",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹10,999 + Govt. fee",
      bullets: [
        "Includes Standard benefits",
        "Form 8 & 11 filing (1 year)",
        "DIR 3 KYC (for 2 partners)",
        "One year Income Tax filing (upto turnover 20 lakhs)",
        "Accounting & Bookkeeping (upto 100 txns)",
        "Financial statements + software (1-year license)",
      ],
    },
  ],
  opc: [
    {
      name: "Standard",
      priceLabel: "₹999 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Name reserved 2–4 days",
        "DSC 4–7 days",
        "SPICe+ filing 14 days*",
        "PAN & TAN, DIN",
      ],
    },
    {
      name: "Fastrack",
      priceLabel: "₹1,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Name reserved 1–2 days*",
        "DSC in 3–4 days",
        "SPICe+ filing 5–7 days*",
        "Digital welcome kit",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹24,999 + Govt. fee",
      bullets: [
        "Top priority service",
        "Annual compliance support",
        "Accounting & bookkeeping",
        "Financial statements & 1-year software",
      ],
    },
  ],
  sp: [
    {
      name: "Starter / Lite",
      priceLabel: "₹999 (50% off ₹499)",
      bullets: ["Expert assisted process", "GST or MSME (any one)"],
    },
    {
      name: "Standard",
      priceLabel: "₹4,999 (30% off ₹3,499)",
      highlight: true,
      bullets: [
        "GST registration",
        "MSME (Udyam)",
        "GST filing (1 FY up to 300 txns)",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹8,260 (35% off ₹5,999)",
      bullets: [
        "GST registration",
        "MSME (Udyam)",
        "GST filing (1 FY up to 500 txns)",
        "ITR filing",
      ],
    },
  ],
  partnership: [
    {
      name: "Basic",
      priceLabel: "₹1,499",
      bullets: [
        "Partnership deed drafting",
        "Basic consultation",
        "Government registration",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹2,999",
      highlight: true,
      bullets: [
        "Deed drafting",
        "Registration certificate",
        "PAN & TAN",
        "3 months compliance",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹4,999",
      bullets: [
        "Full registration support",
        "PAN, TAN & GST",
        "1 year compliance support",
      ],
    },
  ],
  producer: [
    {
      name: "Basic",
      priceLabel: "Custom",
      bullets: ["MOA & bylaws drafting", "Documentation & ROC filing"],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["Name reservation", "Complete filing", "Welcome kit"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Annual compliance"],
    },
  ],
  nidhi: [
    {
      name: "Basic",
      priceLabel: "Custom",
      bullets: [
        "Expert assisted process",
        "DSC & DIN",
        "SPICe+ filing",
        "Certificate of Incorporation",
      ],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["End-to-end filing", "Compliance guidance", "Welcome kit"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Annual compliance support"],
    },
  ],
  startup: [
    {
      name: "Basic",
      priceLabel: "Custom",
      bullets: ["Eligibility assessment", "Documentation", "Portal filing"],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["Complete filing", "Post-approval guidance"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Add-on compliance pack"],
    },
  ],
};

function parseAmount(label: string): number | null {
  const m = label.replace(/,/g, "").match(/(\d{2,})(?=\b)/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

export default function PlansPage() {
  const { service = "plc" } = useParams();
  const location = useLocation();
  // allow passing pricing via Link state from the service page
  const statePricing = (location.state as any)?.pricing as PricingPlan[] | undefined;
  const pricing = statePricing ?? plansData[service] ?? plansData.plc;

  return (
    <main className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-bold text-center">
          Right Plan For Your Business
        </h1>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-2xl border bg-white shadow ${p.highlight ? "border-gray-900" : "border-gray-200"}`}
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-2xl font-extrabold text-gray-900">
                {p.priceLabel}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
              {p.priceLabel.toLowerCase().includes("custom") ? (
                <Link
                  to="/checkout"
                  className="mt-6 inline-block rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black"
                >
                  Enquire
                </Link>
              ) : (
                <div className="mt-6 flex gap-3">
                  <button
                    className="inline-block rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-black"
                    onClick={() => {
                      const amt = parseAmount(p.priceLabel);
                      if (!amt) return;
                      const q = new URLSearchParams({
                        plan: p.name,
                        amount: String(amt),
                        service,
                      });
                      window.location.href = `/checkout?${q.toString()}`;
                    }}
                  >
                    Proceed to Pay
                  </button>
                  <button
                    className="inline-block rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      try {
                        const amt = parseAmount(p.priceLabel) || 0;
                        const cart = JSON.parse(localStorage.getItem('bizsuite_cart') || '[]');
                        cart.push({ service, plan: p.name, amount: amt, name: p.name });
                        localStorage.setItem('bizsuite_cart', JSON.stringify(cart));
                        window.dispatchEvent(new Event('cart_updated'));
                        alert('Added to cart');
                      } catch (err) {
                        // noop
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
