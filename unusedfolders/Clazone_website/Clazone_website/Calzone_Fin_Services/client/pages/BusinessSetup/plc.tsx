import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function PLC() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "₹999 + Govt. fee",
      bullets: [
        "Expert assisted process",
        "Company name filing 2-4 days",
        "DSC in 4-7 days",
        "SPICe+ filing in 14 days",
        "Incorporation Certificate in 28-35 days",
        "PAN + TAN, DIN for directors",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹1,499 + Govt. fee",
      highlight: true,
      bullets: [
        "Faster name filing 1-2 days",
        "DSC in 3-4 days",
        "SPICe+ filing in 7 days",
        "Incorporation in 14-21 days",
        "PAN + TAN, DIN",
        "Digital welcome kit & post-incorporation checklist",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹3,499 + Govt. fee",
      bullets: [
        "Everything in Standard",
        "MSME registration included",
        "Expedited Trademark application filing",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Private Limited Company (Pvt Ltd) is the most popular structure for startups seeking limited liability, credibility, and fundraising readiness.",
        "We handle name reservation, SPICe+ filing, DSC & DIN, PAN/TAN, and post-incorporation guidance.",
      ],
    },
    {
      kind: "list",
      title: "Key Features",
      items: [
        "Separate legal entity",
        "Limited liability",
        "Easy fundraising & ESOPs",
        "Perpetual succession",
        "Better credibility",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Directors' PAN, Aadhaar, Photo",
        "Address proofs",
        "Registered office proof",
        "MOA & AOA",
        "Utility bill (<= 2 months)",
      ],
    },
    {
      kind: "list",
      title: "Registration Process",
      ordered: true,
      items: [
        "Consultation & planning",
        "Name reservation",
        "DSC & DIN",
        "SPICe+ filing with ROC",
        "Certificate of Incorporation",
        "Post-incorporation compliance",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does it take?",
          a: "Typically 14–21 days depending on RoC timelines and document readiness.",
        },
        {
          q: "Minimum requirements?",
          a: "2 Directors, 2 Shareholders (can be same persons), Registered office in India.",
        },
        {
          q: "Is GST mandatory?",
          a: "Only if turnover crosses threshold or for certain business categories.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Pvt Ltd Company Registration in India"
      subtitle="Fast, expert-assisted incorporation with PAN/TAN, DSC & DIN."
      gradientFrom="from-purple-700"
      gradientTo="to-fuchsia-700"
      serviceLabel="Private Limited Company Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="plc"
      heroImage="https://images.pexels.com/photos/7580751/pexels-photo-7580751.jpeg"
      heroImageAlt="Professionals discussing company registration documents"
    />
  );
}
