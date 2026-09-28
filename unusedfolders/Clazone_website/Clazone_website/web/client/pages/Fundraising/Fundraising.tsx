import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function FundraisingOverview() {
  const pricing: PricingPlan[] = [
    {
      name: "Pre-Seed",
      priceLabel: "₹29,999",
      bullets: ["Narrative & metrics", "Basic outreach list", "Light data room"],
    },
    {
      name: "Seed",
      priceLabel: "₹59,999",
      highlight: true,
      bullets: ["Everything in Pre-Seed", "Investor pipeline", "Weekly coaching (4 weeks)"],
    },
    {
      name: "Series A",
      priceLabel: "₹99,999",
      bullets: ["Everything in Seed", "Advanced metrics pack", "Partner outreach"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Fundraising for startups involves raising capital to fund expansion, product development, or market penetration. Sources include angel investors, VCs, crowdfunding, and government grants.",
        "Vakilsearch assists with investor readiness, documentation, compliance, due diligence, and connects startups to the right investors.",
      ],
    },
    {
      kind: "list",
      title: "Types of Startup Fundraising",
      items: [
        "Equity Financing – Exchange ownership for capital; suitable for high-growth startups.",
        "Debt Financing – Borrow funds keeping full ownership; repayment required.",
        "SAFE Notes – Investor gives money now for future equity; simple, quick.",
        "Grants – Non-repayable funding for research/innovation; competitive.",
        "Bootstrapping – Self-funding; full control, slower growth.",
        "Crowdfunding – Raise small contributions from many individuals; community validation.",
      ],
    },
    {
      kind: "list",
      title: "Funding Stages",
      items: [
        "Idea Stage – Pre-seed: ₹5L–₹25L (Founders, friends, angel investors).",
        "Early Stage – Seed: ₹25L–₹2 Cr (Angels, incubators).",
        "Growth Stage – Series A: ₹2 Cr–₹10 Cr (VC firms).",
        "Expansion Stage – Series B/C: ₹10 Cr+ (Institutional VCs).",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Fundraising",
      items: [
        "Pitch Deck – Overview of business, team, finances, traction.",
        "Business Plan – Strategy, market analysis, projections.",
        "Term Sheet (Draft) – Investment terms summary.",
        "Shareholders' Agreement (SHA) – Rights & governance post-deal.",
        "Cap Table – Equity distribution.",
        "Company Incorporation Documents – CIN, PAN, MOA, AOA.",
        "Financial Statements – Audited accounts, P&L, balance sheet.",
        "Founders' KYC Documents – PAN, Aadhaar, address proof.",
      ],
    },
    {
      kind: "list",
      title: "Legal & Compliance Essentials",
      items: [
        "Company Incorporation (Pvt Ltd recommended for equity funding).",
        "DPIIT Startup India Registration for tax and credibility.",
        "FEMA Compliance for foreign investment.",
        "Valuation Report prepared by CA or registered valuer.",
        "Clean Cap Table & Shareholding Structure.",
        "Founders’ Agreements and Roles Defined.",
        "GST Registration if applicable.",
        "IP, Trademark, Licensing Documents if relevant.",
      ],
    },
    {
      kind: "list",
      title: "Vakilsearch Fundraising Support Services",
      items: [
        "Pitch Deck Creation – Investor-ready presentations.",
        "Financial Modeling – Accurate forecasts & valuations.",
        "Valuation Reports – Certified for equity negotiations.",
        "Business Plan Analysis – Fortify plan for investors.",
        "Application to Grants – Identify & apply for programs.",
        "Business Mentoring – One-on-one guidance for key decisions.",
        "Investor Connect – Access to vetted angels, VCs, and seed investors.",
        "Due Diligence – Legal, financial, regulatory screenings.",
        "DPR (Detailed Project Report) – Bankable, investor-friendly reports.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Fundraising for Startups",
      qa: [
        { q: "What is fundraising for startups?", a: "Raising financial investment to fund business expansion, product development, or market penetration." },
        { q: "How to raise funding for a startup?", a: "Through equity, debt, SAFE notes, grants, crowdfunding, or bootstrapping depending on your stage and needs." },
        { q: "What documents do investors require?", a: "Pitch Deck, Business Plan, Term Sheet, SHA, Cap Table, Incorporation & Financial statements, Founders’ KYC." },
        { q: "Do I need DPIIT registration?", a: "Yes, for credibility and tax benefits when raising funds from investors or government programs." },
        { q: "What is a SAFE note?", a: "A Simple Agreement for Future Equity where investors provide funds now for equity later." },
        { q: "How much equity should I give in seed funding?", a: "It varies depending on valuation, investor expectations, and stage of your startup." },
        { q: "Can I raise funds before registering my company?", a: "While possible through friends/family, formal investors typically require a registered company." },
        { q: "What are the typical funding stages?", a: "Pre-seed, Seed, Series A, Series B/C, aligned with growth, risk, and capital needs." },
        { q: "How can Vakilsearch assist?", a: "From documents, legal compliance, pitch decks, investor connections, to due diligence, we provide end-to-end support." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      variant="professional"
      title="Fundraising for Startups"
      subtitle="Tailored support for equity, debt, SAFE, grants, and investor connections."
      serviceLabel="Fundraising"
      pricing={pricing}
      serviceKey="fundraising"
      sections={sections}
    />
  );
}
