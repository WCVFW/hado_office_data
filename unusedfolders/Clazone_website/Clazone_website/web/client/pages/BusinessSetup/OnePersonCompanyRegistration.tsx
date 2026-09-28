import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const OPCRegistrationPage: React.FC = () => {
  const pricing: PricingPlan[] = [
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
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "One Person Company (OPC) Registration - Overview",
      paragraphs: [
        "OPC suits solo founders seeking limited liability with single ownership.",
        "We manage name approval, MoA & AoA, office proof, and Certificate of Incorporation.",
      ],
    },
    {
      kind: "list",
      title: "Features & Benefits",
      items: [
        "Single Ownership",
        "Limited Liability",
        "Perpetual Succession",
        "Separate Legal Entity",
        "Minimum Compliance",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Indian citizen & resident",
        "Nominee director required",
        "Not a minor",
        "Min authorised capital ₹1 lakh",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Director PAN & Aadhaar",
        "Address proof",
        "Registered office proof",
        "MoA & AoA",
      ],
    },
    {
      kind: "list",
      title: "OPC Registration Process",
      ordered: true,
      items: [
        "Consultation",
        "Documentation & DSC/DIN",
        "Name Approval",
        "MOA & AOA Drafting",
        "ROC Filing",
        "Certificate of Incorporation",
        "PAN & TAN",
        "Post-incorporation support",
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Register Your One Person Company (OPC)"
      subtitle="Affordable, expert-assisted OPC incorporation for solo founders."
      gradientFrom="from-indigo-700"
      gradientTo="to-purple-700"
      serviceLabel="One Person Company Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="opc"
      heroImage="https://images.pexels.com/photos/7550397/pexels-photo-7550397.jpeg"
      heroImageAlt="Entrepreneur working on OPC setup"
    />
  );
};

export default OPCRegistrationPage;
