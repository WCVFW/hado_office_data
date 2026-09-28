import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function UKIncorporation() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "£299 + Govt. Fees",
      bullets: [
        "Companies House filing",
        "Memorandum & Articles",
        "Basic tax registration guidance",
      ],
    },
    {
      name: "Standard",
      priceLabel: "£599 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Registered office (1 year)",
        "Banking guidance",
      ],
    },
    {
      name: "Pro",
      priceLabel: "£999 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "VAT registration assistance",
        "First compliance calendar",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "UK Company Formation - An Overview",
      paragraphs: [
        "The UK market offers multiple benefits for entrepreneurs and business owners. Opening your company in the UK is now much easier, thanks to expert legal support.",
        "The Companies Act 2006 and the UK corporate governance code govern incorporation. The Companies House is the main regulatory authority, with other bodies like the FCA overseeing compliance.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Incorporating in the UK",
      items: [
        "Very easy incorporation – takes 13 days on average vs 32 in Europe.",
        "Strong government support – tax benefits and entrepreneur relief.",
        "World’s largest product market – low barriers to entrepreneurship & trade.",
        "Efficient communication and ICT infrastructure.",
      ],
    },
    {
      kind: "list",
      title: "Documents & Information Required",
      items: [
        "Memorandum of Association (MoA)",
        "Articles of Association (AoA)",
        "Unique Company Name",
        "Registered Office in the UK",
        "First Officers (Directors, optional Secretary)",
        "Statement of Capital",
        "Persons with Significant Control (PSC)",
      ],
    },
    {
      kind: "list",
      title: "Requirements for UK Company Registration",
      items: [
        "Unique company name with no prohibited words",
        "At least one director (16+ years old)",
        "At least one shareholder (no upper limit)",
        "Registered address in the UK (publicly visible)",
        "Service address for directors/PSCs (can be anywhere)",
      ],
    },
    {
      kind: "list",
      title: "Types of Business Structures in the UK",
      items: [
        "Sole Trader – full personal liability",
        "Partnership – shared profits & liabilities",
        "Limited Liability Partnership (LLP)",
        "Unlimited Company – shareholders fully liable",
        "Private Limited Company (Ltd) – limited liability",
        "Public Company (PLC) – shares offered publicly",
      ],
    },
    {
      kind: "process",
      title: "Process of UK Company Formation",
      items: [
        "Choose business structure & name",
        "Prepare shareholder and director details",
        "Draft MoA & AoA",
        "Appoint directors/PSCs",
        "Provide registered UK address",
        "File with Companies House and obtain SIC code",
        "Register with HMRC for taxes",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Company Incorporation in the UK",
      qa: [
        {
          q: "Can non-UK residents register a company?",
          a: "Yes, there are no restrictions. A registered UK address is required.",
        },
        {
          q: "What documents will I receive after registration?",
          a: "You will receive Certificate of Incorporation, MoA, AoA, and statutory registers.",
        },
        {
          q: "Do I need a UK resident director?",
          a: "No. At least one director is needed, but they don’t have to be UK-based.",
        },
        {
          q: "Do foreign corporations pay tax in the UK?",
          a: "Yes, if the company operates or has income in the UK, tax obligations apply.",
        },
        {
          q: "What is the timeline for incorporation?",
          a: "Usually 1–2 weeks depending on Companies House and bank KYC processes.",
        },
      ],
    },
    {
      kind: "list",
      title: "Why Choose Us?",
      items: [
        "Expert team assisting 1000+ companies monthly",
        "All documentation within 4 working days",
        "Affordable packages with full compliance support",
        "Trusted by 19k+ clients with 4.5/5 Google reviews",
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Company Incorporation in UK"
      subtitle="Expand globally with expert support for seamless UK company registration."
      gradientFrom="from-green-700"
      gradientTo="to-emerald-800"
      serviceLabel="UK Incorporation"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="uk"
      heroImage="https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg"
      heroImageAlt="Business meeting in UK incorporation context"
    />
  );
}
