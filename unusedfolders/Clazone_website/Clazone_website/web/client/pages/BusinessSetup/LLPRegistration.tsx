import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

const LLPRegistration = () => {
  const pricing: PricingPlan[] = [
    {
      name: "Standard",
      priceLabel: "₹1,499 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Name reservation 2–4 days",
        "DSC in 4–7 days",
        "LLP incorporation filing in 21 days*",
        "Incorporation Certificate",
        "LLP agreement filing (post incorporation)",
        "PAN + TAN, DIN for partners",
      ],
    },
    {
      name: "Fastrack",
      priceLabel: "₹2,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Name reserved in 24 hours*",
        "DSC in 24 hours*",
        "Incorporation filing in 14 days*",
        "LLP agreement in 7 days (post incorporation)",
        "Digital welcome kit with compliance checklist",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹10,999 + Govt. fee",
      bullets: [
        "Includes Standard benefits",
        "Form 8 & 11 filing (1 year)",
        "DIR 3 KYC (for 2 partners)",
        "One year Income Tax filing (upto turnover 20 lakhs)",
        "Accounting & Bookkeeping (upto 100 txns)",
        "Financial statements + software (1-year license)",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Limited Liability Partnership (LLP) blends partnership flexibility with limited liability and lower compliance.",
        "We handle RUN-LLP, DSC, DPIN/DIN, agreement drafting and ROC filings end-to-end.",
      ],
    },
    {
      kind: "list",
      title: "Key Features",
      items: [
        "Separate legal entity",
        "Limited liability for partners",
        "Flexible internal management",
        "Perpetual succession",
        "Taxed as partnership",
        "Minimum compliance",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "PAN/Aadhaar/Passport for partners",
        "Address proofs",
        "Registered office proof",
        "LLP Agreement",
        "DSC for all partners",
      ],
    },
    {
      kind: "list",
      title: "LLP Registration Process",
      ordered: true,
      items: [
        "Consultation & planning",
        "Name reservation & RUN-LLP",
        "Document preparation + Agreement",
        "DSC issuance",
        "Form 2 filing with ROC",
        "Verification & Approval",
        "Certificate of Incorporation",
        "Post-incorporation compliance",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does LLP take?",
          a: "Usually 14–21 business days depending on readiness and ROC timelines.",
        },
        { q: "Minimum partners?", a: "Minimum two partners; no upper limit." },
        { q: "Capital requirement?", a: "No minimum capital mandated." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="LLP Registration Online"
      subtitle="Complete LLP registration in just 14 business days with expert assistance."
      gradientFrom="from-blue-700"
      gradientTo="to-indigo-700"
      serviceLabel="LLP Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="llp"
      heroImage="https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg"
      heroImageAlt="Meeting discussing LLP agreements"
    />
  );
};

export default LLPRegistration;
