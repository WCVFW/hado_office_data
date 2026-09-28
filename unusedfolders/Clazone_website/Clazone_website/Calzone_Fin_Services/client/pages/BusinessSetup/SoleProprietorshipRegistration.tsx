import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const SoleProprietorship: React.FC = () => {
  const pricing: PricingPlan[] = [
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
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Sole proprietorship is the simplest structure for individual entrepreneurs with full control and low compliance.",
      ],
    },
    {
      kind: "list",
      title: "Advantages",
      items: [
        "Easy to start",
        "Full control",
        "Tax benefits",
        "Direct customer relationships",
        "Flexible hiring",
      ],
    },
    {
      kind: "list",
      title: "Checklist",
      items: [
        "Choose business name",
        "Open bank account",
        "MSME/Udyam registration",
        "Obtain licenses (FSSAI, Shop & Establishment)",
        "GST registration if applicable",
      ],
    },
    {
      kind: "list",
      title: "Eligibility",
      items: [
        "Applicant 18+ years",
        "Indian citizen",
        "Legal capacity",
        "Lawful business",
        "Unique name",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Aadhaar & PAN",
        "Bank account details",
        "Business address proof",
        "Udyam certificate",
        "GST (if applicable)",
        "Shop & Establishment license",
      ],
    },
    {
      kind: "list",
      title: "Registration Process",
      ordered: true,
      items: [
        "Register business name",
        "Get PAN/GST/MSME",
        "Obtain Shop & Establishment license",
        "Open current account",
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Sole Proprietorship Registration Online"
      subtitle="Complete registration with GST/MSME support and documentation."
      gradientFrom="from-blue-700"
      gradientTo="to-cyan-700"
      serviceLabel="Sole Proprietorship Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="sp"
      heroImage="https://images.pexels.com/photos/4473496/pexels-photo-4473496.jpeg"
      heroImageAlt="Small business owner at desk"
    />
  );
};

export default SoleProprietorship;
