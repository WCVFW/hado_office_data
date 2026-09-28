import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function SingaporeIncorporation() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "S$499 + Govt. Fees",
      bullets: [
        "Company name reservation",
        "ACRA filing & constitution",
        "Basic compliance documentation",
      ],
    },
    {
      name: "Standard",
      priceLabel: "S$899 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Local secretary (3 months)",
        "Guidance for opening a bank account",
      ],
    },
    {
      name: "Pro",
      priceLabel: "S$1,499 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "Registered address (3 months)",
        "Employment Pass guidance",
        "Annual compliance setup",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Register Company in Singapore - An Overview",
      paragraphs: [
        "Singapore is one of the top destinations for global entrepreneurs because of its robust trade laws, simple compliance, and tax-friendly policies.",
        "The process of company registration is quick, cost-effective, and offers international credibility. However, foreigners are required to appoint a local resident director or nominee to incorporate a company.",
        "Singapore was ranked 2nd in the World Bank’s Ease of Doing Business Report 2020, making it an ideal hub for both startups and multinational companies.",
      ],
    },
    {
      kind: "list",
      title: "Types of Business Entities",
      items: [
        "Private Limited Company (Pte Ltd)",
        "Limited Liability Partnership (LLP)",
        "Subsidiary Company",
        "Branch Office",
        "Representative Office",
      ],
    },
    {
      kind: "list",
      title: "Private Limited Company – Key Requirements",
      items: [
        "At least 1 shareholder (individual or corporate)",
        "1 resident director",
        "1 company secretary",
        "Paid-up capital of minimum S$1",
        "Registered local address",
      ],
    },
    {
      kind: "list",
      title: "Limited Liability Partnership – Key Requirements",
      items: [
        "At least 2 partners",
        "A full-time resident manager",
        "Registered address in Singapore",
      ],
    },
    {
      kind: "list",
      title: "Subsidiary Company – Key Requirements",
      items: [
        "Owned by a foreign corporate entity",
        "At least 1 resident director",
        "1 company secretary",
        "Paid-up capital of minimum S$1",
        "Registered local address",
      ],
    },
    {
      kind: "list",
      title: "Branch Office – Key Requirements",
      items: [
        "Corporate shareholder (foreign entity)",
        "At least 1 local agent",
        "Registered local address",
        "Not eligible for tax exemptions like Pte Ltd companies",
      ],
    },
    {
      kind: "list",
      title: "Representative Office – Key Requirements",
      items: [
        "Temporary setup (max 3 years validity)",
        "Sales turnover must exceed S$250,000",
        "Foreign company must be at least 3 years old",
        "Maximum 5 employees allowed",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Proposed company name",
        "Business activity details",
        "Shareholder particulars",
        "Director particulars",
        "Registered office address",
        "Company secretary details",
        "Memorandum of Association (MOA) & Articles of Association (AOA)",
        "For Foreigners: Passport copy, proof of overseas address, KYC (bank reference letter, business profile, etc.)",
        "For Singapore Residents: Copy of Singapore Identity Card",
      ],
    },
    {
      kind: "list",
      title: "Key Factors of Company Registration",
      items: [
        "Liability protection – separates personal & company liabilities",
        "Scalability – entity choice affects growth potential",
        "Cost efficiency – important for startups with limited capital",
        "Ease of compliance – ACRA regulations must be followed",
      ],
    },
    {
      kind: "overview",
      title: "How Can We Assist?",
      paragraphs: [
        "We help you choose the right entity structure, prepare documents, and file with ACRA for smooth incorporation.",
        "Our team coordinates with banks for account setup and ensures compliance with Singapore’s corporate laws.",
        "We work with trusted partners like InCorp Group to deliver reliable, efficient, and ethical services for foreign entrepreneurs.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "Do Indians need a work permit in Singapore?",
          a: "Yes, foreigners including Indians require a work permit or Employment Pass to relocate and run operations in Singapore.",
        },
        {
          q: "Can an Indian company open a branch in Singapore?",
          a: "Yes, Indian companies can set up a branch office in Singapore, but it will not be treated as a separate legal entity.",
        },
        {
          q: "How long does incorporation take?",
          a: "Typically, 1–3 weeks depending on document verification, KYC checks, and bank approvals.",
        },
        {
          q: "What is the minimum capital required?",
          a: "The minimum paid-up capital requirement is just S$1 for a private limited company.",
        },
        {
          q: "What is UEN?",
          a: "UEN stands for Unique Entity Number, a mandatory registration number issued to every Singapore-incorporated company.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Singapore Company Incorporation"
      subtitle="Incorporate your Singapore business with ACRA filing, compliance, and banking support."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="Singapore Incorporation"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="singapore"
      heroImage="https://images.pexels.com/photos/7414207/pexels-photo-7414207.jpeg"
      heroImageAlt="Founders discussing incorporation in Singapore"
    />
  );
}
