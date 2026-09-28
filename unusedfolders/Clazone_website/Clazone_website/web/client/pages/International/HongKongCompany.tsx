import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function HongKongCompany() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "HK$4,999 + Govt. Fees",
      bullets: [
        "Company formation",
        "Basic tax registration guidance",
        "Support for filing essentials",
      ],
    },
    {
      name: "Standard",
      priceLabel: "HK$8,999 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Company secretary (1 year)",
        "Registered office address (1 year)",
      ],
    },
    {
      name: "Pro",
      priceLabel: "HK$12,999 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "Bank account setup guidance",
        "Compliance calendar & reminders",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Company Incorporation in Hong Kong - An Overview",
      paragraphs: [
        "Hong Kong is one of the leading business markets in the world. Many global companies have their headquarters here and are flourishing.",
        "Company formation in Hong Kong is easy and affordable. A third party can readily register a company without the owner or directors residing in Hong Kong. Any adult over 18 can start a business.",
        "Online incorporation typically takes 5–7 working days.",
      ],
    },
    {
      kind: "list",
      title: "Types of Business Structures in Hong Kong",
      items: [
        "Sole Proprietorship – single owner with full liability for profits and losses.",
        "Business Collaboration – partnerships (2–20 participants); general partnerships have unlimited liability, limited partnerships restrict liability to investments.",
        "Companies Limited by Shares – private limited company with max 50 shareholders; treated as a separate legal entity.",
        "Public Limited Company – suitable for larger businesses; >50 shareholders; can list on SEHK.",
        "Limited Liability Company – suitable for charitable or non-profit entities; members guarantee a fixed sum in case of liquidation.",
        "Division Office – foreign corporation branch permitted to operate; not a separate legal entity.",
        "Representative Office – extension of a foreign business, restricted from profit-making activities (used for HR/marketing).",
      ],
    },
    {
      kind: "list",
      title: "Advantages of Registering a Company in Hong Kong",
      items: [
        "Greater business freedom: ranked among the freest jurisdictions globally.",
        "Quick, easy, and affordable registration process.",
        "Ability to manage your company remotely from anywhere in the world.",
        "Strategic entry point into Mainland China (market of 1.3 billion).",
        "More than 30 bilateral trade agreements offer favourable treatment.",
        "Strong government support as a Special Administrative Region of China.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for Company Registration in China",
      items: [
        "Directors Required: Minimum 3, maximum 13 directors.",
        "Chairman and Deputy Chairman mandatory.",
        "Registered business address required.",
        "Legal Representative must be designated in China.",
        "Company name must be reserved and protected.",
      ],
    },
    {
      kind: "list",
      title: "Compliances for Company Registration in China",
      items: [
        "Monthly filing of Chinese-language financial statements.",
        "Annual report submission to SAMR (Jan 1 – Jun 30).",
        "General corporate tax rate: 25% (15% for special schemes).",
        "Annual general meeting required (within 9 months of fiscal year end).",
        "Books of accounts must follow Chinese Accounting Standards, updated monthly.",
        "Quarterly corporate income tax return mandatory.",
        "VAT returns must be filed by the 15th of each month.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Company Incorporation in Hong Kong",
      items: [
        "Approved company name.",
        "Registered office address.",
        "Legal representative's tax ID.",
        "Company supervisor's ID.",
        "Information on shareholders and directors.",
        "Notarised shareholder documents.",
        "Memorandum of Association (MoA).",
        "Articles of Association (AoA).",
        "Capitalisation schedule of the company.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expert attorneys and business consultants for international incorporation.",
        "Specialised in compliance management.",
        "Seamless incorporation process without delays.",
        "Affordable and transparent pricing.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Company Incorporation in Hong Kong",
      qa: [
        {
          q: "What is the process of setting up a company in China?",
          a: "It involves name reservation, documentation, legal representative appointment, SAMR registration, and tax compliance.",
        },
        {
          q: "What documents are required to incorporate my company in China?",
          a: "MoA, AoA, capitalisation schedule, shareholder and director details, registered address, and notarised IDs.",
        },
        {
          q: "What is the capital requirement?",
          a: "No minimum capital for Hong Kong private companies; for China, capital varies by structure and industry.",
        },
        {
          q: "Are compliances mandatory after registration?",
          a: "Yes. Monthly, quarterly, and annual filings are legally required.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Easy Online Company Incorporation in Hong Kong"
      subtitle="Take your business to Hong Kong – one of the world’s top global financial hubs."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="Hong Kong Incorporation"
      pricing={pricing}
      sections={sections}
      serviceKey="hong-kong"
    />
  );
}
