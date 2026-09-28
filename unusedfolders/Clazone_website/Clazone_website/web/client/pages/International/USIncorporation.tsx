import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function USIncorporation() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "$499 + State Fees",
      bullets: [
        "Name search & reservation",
        "LLC or C-Corp formation",
        "EIN (Employer Identification Number) issuance",
        "Basic bylaws / operating agreement",
      ],
    },
    {
      name: "Standard",
      priceLabel: "$799 + State Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Registered agent (1 year)",
        "US company address",
        "Bank account assistance (Mercury, Wise, Brex)",
        "Compliance calendar setup",
      ],
    },
    {
      name: "Pro",
      priceLabel: "$1,299 + State Fees",
      bullets: [
        "Everything in Standard",
        "Delaware C-Corp (investor-friendly)",
        "Cap table & ESOP basics",
        "Founders agreements",
        "Investor-grade documentation",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Company Incorporation in USA",
      paragraphs: [
        "Register your U.S. company in just 10 working days, with EIN issued in under 48 hours. Incorporate as an LLC or C Corporation to expand globally, raise venture capital, and access U.S. banking facilities.",
        "The U.S. has a large English-speaking population, a multicultural business ecosystem, and is friendly to foreign firms. Incorporation in states like Delaware, Wyoming, and Nevada offers favorable tax laws and strong investor confidence.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of US Incorporation",
      items: [
        "Registered Agent – Engage a registered agent and file documents easily.",
        "US Company Address – Incorporate without needing a physical office or director presence.",
        "Business Number – Compliance support for filings, notices, and reports.",
        "Company Annual Filing – Timely filing of annual reports.",
        "Business Bank Account – Open a U.S. account with debit card via Mercury.",
        "EIN Number – Get your Employer Identification Number for Shopify, Stripe, Google Ads, etc.",
      ],
    },
    {
      kind: "list",
      title: "Why Is It Advantageous for Indians?",
      items: [
        "Well-developed corporate laws and regulations.",
        "Extremely low corporate tax rates in certain states.",
        "No residency requirements for directors or shareholders.",
        "Access to venture capital and international investors.",
        "Delaware and Wyoming offer tax-friendly environments with minimal franchise tax.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Proposed company name",
        "Type of business activity",
        "US registered business address",
        "Registered agent details (if applicable)",
        "Partner names & addresses with shareholding %s",
        "PAN Card, Aadhaar, and Passport (for Indian founders)",
        "Company incorporation details",
      ],
    },
    {
      kind: "list",
      title: "Process",
      ordered: true,
      items: [
        "Choose entity type (LLC, C-Corp, S-Corp, Nonprofit, etc.)",
        "Select a unique business name",
        "File state incorporation documents",
        "Appoint a registered agent",
        "Apply for EIN with IRS (within 48 hours)",
        "Open U.S. business bank account",
        "Register for applicable taxes (federal & state)",
        "Obtain required licenses & permits",
        "Stay compliant with employment and insurance laws",
      ],
    },
    {
      kind: "table",
      title: "LLC vs C Corporation",
      headers: ["LLC", "C Corporation"],
      rows: [
        ["Owners act as partners", "Owners are shareholders"],
        [
          "Suitable for small businesses with limited shareholders",
          "Best for mid/large businesses with multiple shareholders",
        ],
        [
          "Partners configure and supervise operations",
          "Shareholders elect directors to manage company",
        ],
        [
          "Partners not personally liable",
          "Shareholders not personally liable",
        ],
        [
          "Transferability restricted by agreement",
          "Stocks & shares easily transferable",
        ],
        [
          "Less preferred by foreign investors",
          "Favored by foreign investors (stock-based)",
        ],
      ],
    },
    {
      kind: "list",
      title: "Vakilsearch US Incorporation Package",
      items: [
        "Articles of Association preparation",
        "Registered agent service (1 year)",
        "Association certification",
        "Federal EIN application & issuance",
        "Expert compliance guidance",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "Can my business headquarters be outside Delaware?",
          a: "Yes, you can incorporate in Delaware while operating elsewhere, provided you maintain compliance.",
        },
        {
          q: "Is a corporate seal required?",
          a: "No, a corporate seal is not mandatory in most states.",
        },
        {
          q: "Do I need a U.S. lawyer or auditor?",
          a: "Not necessarily. Incorporation can be handled online with expert services like Vakilsearch.",
        },
        {
          q: "What information is required for a bank account?",
          a: "Company incorporation docs, EIN, and identification of directors/shareholders.",
        },
        {
          q: "What types of companies can I form?",
          a: "LLCs, C-Corps, S-Corps, Nonprofits, and Sole Proprietorships.",
        },
        {
          q: "What is a registered agent?",
          a: "A state-appointed representative who receives compliance and legal documents on behalf of the company.",
        },
        {
          q: "What’s the difference between LLC and S-Corp?",
          a: "LLCs are flexible and simple, while S-Corps offer pass-through taxation but have ownership restrictions.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Company Registration in USA"
      subtitle="Register your US LLC or C-Corp in just 10 working days with EIN, banking, and compliance support."
      gradientFrom="from-emerald-700"
      gradientTo="to-lime-700"
      serviceLabel="US Incorporation"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="us"
      heroImage="https://images.pexels.com/photos/7580751/pexels-photo-7580751.jpeg"
      heroImageAlt="Team planning US incorporation"
    />
  );
}
