import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const PartnershipFirmRegistration: React.FC = () => {
  const pricing: PricingPlan[] = [
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
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "A partnership firm is formed by two or more persons as per a Partnership Deed under the Indian Partnership Act, 1932.",
      ],
    },
    {
      kind: "list",
      title: "Key Characteristics",
      items: [
        "Formed by two or more people",
        "Operates under Partnership Deed",
        "Partners share profits and liabilities",
        "Minimal compliance",
      ],
    },
    {
      kind: "list",
      title: "Importance of Registration",
      items: [
        "Ability to sue third parties",
        "Increased credibility",
        "Proof of existence for contracts",
        "Access to schemes",
      ],
    },
    {
      kind: "list",
      title: "Types of Partnership Firms",
      items: ["Registered Partnership Firm", "Unregistered Partnership Firm"],
    },
    {
      kind: "list",
      title: "Registration Process",
      ordered: true,
      items: [
        "Choose a unique name",
        "Draft Partnership Deed",
        "Execute & sign",
        "File with Registrar of Firms",
        "Receive Certificate of Registration",
      ],
    },
    {
      kind: "list",
      title: "Compliance Requirements",
      items: [
        "Maintain books of accounts",
        "File ITR annually",
        "Register GST if applicable",
        "Deduct/file TDS if applicable",
      ],
    },
    {
      kind: "faq",
      title: "FAQ's on Partnership Registration",
      qa: [
        {
          q: "Is registration mandatory?",
          a: "Not mandatory but highly beneficial for legal enforceability and credibility.",
        },
        {
          q: "Docs required?",
          a: "KYC of partners, deed, address proof, and application to Registrar of Firms.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Partnership Firm Registration"
      subtitle="Fast-track partnership registration with expert legal assistance."
      gradientFrom="from-yellow-600"
      gradientTo="to-amber-700"
      serviceLabel="Partnership Firm Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="partnership"
      heroImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      heroImageAlt="Business partners handshake"
    />
  );
};

export default PartnershipFirmRegistration;
