import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function NetherlandsIncorporation() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "€799 + Govt. Fees",
      bullets: [
        "BV incorporation basics",
        "Notary coordination",
        "Basic tax registration guidance",
      ],
    },
    {
      name: "Standard",
      priceLabel: "€1,299 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Registered address (3 months)",
        "Banking guidance",
      ],
    },
    {
      name: "Pro",
      priceLabel: "€1,999 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "Payroll setup guidance",
        "Compliance calendar",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Company Incorporation in Netherlands - An Overview",
      paragraphs: [
        "In the atmosphere of Brexit, the Netherlands has become a top choice for starting a business. The country offers significant benefits to entrepreneurs and investors with its innovative industries and strategic EU location.",
        "Being part of the European Single Market allows businesses to freely trade goods and services across the EU. The Netherlands also enjoys great logistical advantages due to its central position in Europe.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Starting a Business in the Netherlands",
      items: [
        "Lowest corporate income tax rate in the EU (19% up to €200,000, 25% above).",
        "Further tax reductions planned (16.5% in 2020, 15% in 2021 for lower bracket).",
        "No VAT on intra-EU transactions.",
        "Largest network of double tax avoidance treaties worldwide.",
        "Founding member of the EU with strong international ties.",
        "93% English-speaking population, high proficiency in German and French.",
        "Highly educated workforce (top 3 globally).",
        "Excellent international business environment and stable politics.",
        "Welcoming policies for foreign entrepreneurs and Fortune 500 companies alike.",
      ],
    },
    {
      kind: "list",
      title: "Who Can Register a Company in the Netherlands?",
      items: [
        "A company director.",
        "A branch manager with a Dutch power of attorney (signed by directors).",
      ],
    },
    {
      kind: "list",
      title: "Process of Company Registration",
      ordered: true,
      items: [
        "Prepare necessary documentation.",
        "Execute notary deed for incorporation.",
        "Register at the Dutch Chamber of Commerce (KVK).",
        "Submit forms: Form 6 (non-resident legal entity), Form 11 (official of a legal entity), Form 13 (authorised representative).",
        "Register with Dutch tax authorities.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Proof of company registration from country of origin (not older than one month).",
        "Certified copy of Memorandum of Association.",
        "Certified copy of Articles of Association.",
        "Certificate of Incumbency showing appointed directors.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "4 Business Days – Complete documentation delivered quickly with modification support.",
        "9.1 Customer Score – Transparent process with realistic expectations.",
        "160+ Expert Advisors – Always available for guidance and clarification.",
        "Affordable pricing both online and offline.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Company Registration in the Netherlands",
      qa: [
        {
          q: "Is it possible to establish a Dutch company if I reside elsewhere?",
          a: "Yes, non-residents can register a Dutch company with proper documentation.",
        },
        {
          q: "Is a Dutch company address mandatory?",
          a: "Yes, every company must have a registered Dutch address.",
        },
        {
          q: "What are the company types in the Netherlands?",
          a: "BV (Private Limited), NV (Public Limited), branch office, partnerships, and sole proprietorship.",
        },
        {
          q: "How long does it take to start a business?",
          a: "Usually 2–4 weeks, depending on notary and bank processing.",
        },
        {
          q: "What is the minimum required share capital?",
          a: "For a BV, the minimum capital is €0.01 (nominal).",
        },
        {
          q: "What taxes apply to Dutch companies?",
          a: "Corporate income tax, VAT, and payroll taxes as applicable.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Company Registration in the Netherlands"
      subtitle="Expert-led business registration in the Netherlands with full compliance support."
      gradientFrom="from-emerald-700"
      gradientTo="to-green-800"
      serviceLabel="Netherlands Incorporation"
      pricing={pricing}
      sections={sections}
      serviceKey="netherlands"
    />
  );
}
