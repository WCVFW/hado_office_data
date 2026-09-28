import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const ProducerCompanyRegistration: React.FC = () => {
  const pricing: PricingPlan[] = [
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
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Producer Company (FPO) Registration - Overview",
      paragraphs: [
        "Producer companies empower farmers/agri producers to market and sell effectively with limited liability.",
      ],
    },
    {
      kind: "list",
      title: "Benefits",
      items: [
        "Limited liability",
        "Govt subsidies/grants",
        "Access to credit",
        "Bargaining power",
        "Efficiency & productivity",
        "Better market access",
      ],
    },
    {
      kind: "list",
      title: "Eligibility",
      items: [
        "Min 10 producer individuals or 2 producer institutions",
        "At least 5 directors",
        "Name ending with 'Producer Limited Company'",
        "Registered office in India",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "PAN & Aadhaar for members/directors",
        "Photos",
        "Registered office proof",
        "MOA & AOA",
        "DSCs",
        "NOC from landlord (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "FPO Registration Process",
      ordered: true,
      items: [
        "Talk to Experts",
        "Prepare Documents",
        "File Applications",
        "Get Registered",
      ],
    },
    {
      kind: "faq",
      title: "FAQ's on Producer Company Registration",
      qa: [
        {
          q: "What is an FPO?",
          a: "A farmer producer organisation enabling collective marketing and benefits.",
        },
        {
          q: "Key documents?",
          a: "MOA/AOA, KYC of members, registered office proof, DSCs, etc.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Producer Company Registration"
      subtitle="Error-free producer company incorporation (FPO) with expert guidance."
      gradientFrom="from-emerald-700"
      gradientTo="to-green-700"
      serviceLabel="Producer Company Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="producer"
      heroImage="https://images.pexels.com/photos/27467602/pexels-photo-27467602.jpeg"
      heroImageAlt="Agriculture producers in field"
    />
  );
};

export default ProducerCompanyRegistration;
