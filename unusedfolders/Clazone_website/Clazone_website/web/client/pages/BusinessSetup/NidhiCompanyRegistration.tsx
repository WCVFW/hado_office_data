import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const NidhiCompanyRegistration: React.FC = () => {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "Custom",
      bullets: [
        "Expert assisted process",
        "DSC & DIN",
        "SPICe+ filing",
        "Certificate of Incorporation",
      ],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["End-to-end filing", "Compliance guidance", "Welcome kit"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Annual compliance support"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Nidhi Companies promote savings and lending among members under the Companies Act, 2013 and Nidhi Rules, 2014.",
        "We handle name approval, DSC/DIN, MOA/AOA drafting, SPICe+ filing and post-registration compliance.",
      ],
    },
    {
      kind: "list",
      title: "What is a Nidhi Company?",
      items: [
        "Member-based NBFC-like entity",
        "Regulated under Companies Act & MCA",
        "Accepts deposits and lends to members",
      ],
    },
    {
      kind: "list",
      title: "Importance",
      items: [
        "Financial inclusion",
        "Access to affordable loans",
        "Regulatory compliance",
      ],
    },
    {
      kind: "list",
      title: "Requirements & Structure",
      items: [
        "DSC & DIN for directors",
        "Name approval and incorporation via SPICe+",
        "7 members initially; 200 within 1 year",
        "Documents: ID/address proof, registered office, MOA & AOA",
      ],
    },
    {
      kind: "list",
      title: "Operation",
      ordered: true,
      items: [
        "Membership acquisition",
        "Deposits by members",
        "Loans to members",
        "Comply with Nidhi Rules & Companies Act",
        "Distribute profits",
        "Governance by board",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Min 7 members initially; 200 within 1 year",
        "Min 3 directors (1 resident)",
        "DSC & DIN for all directors",
        "Adequate net-owned funds",
      ],
    },
    {
      kind: "list",
      title: "Step-by-Step Registration",
      ordered: true,
      items: [
        "Obtain DSC",
        "Obtain DIN",
        "Name approval",
        "File SPICe+ with MOA & AOA",
        "Receive Certificate of Incorporation",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does registration take?",
          a: "Typically 2–4 weeks after document readiness.",
        },
        {
          q: "Can deposits be accepted from public?",
          a: "No, only from members as per Nidhi Rules.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Nidhi Company Registration"
      subtitle="End-to-end assistance with compliance under Companies Act & Nidhi Rules."
      gradientFrom="from-blue-700"
      gradientTo="to-sky-700"
      serviceLabel="Nidhi Company Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="nidhi"
      heroImage="https://images.pexels.com/photos/7414278/pexels-photo-7414278.jpeg"
      heroImageAlt="Finance savings group meeting"
    />
  );
};

export default NidhiCompanyRegistration;
