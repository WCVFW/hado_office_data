import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function StartupIndiaRegistration() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "1",
      bullets: ["Eligibility assessment", "Documentation", "Portal filing"],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["Complete filing", "Post-approval guidance"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Add-on compliance pack"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Why Startup India Recognition",
      paragraphs: [
        "DPIIT recognition unlocks tax benefits, faster IP, tender access, and investor confidence. We handle end-to-end.",
      ],
    },
    {
      kind: "list",
      title: "Includes",
      items: [
        "Eligibility assessment",
        "Document preparation & drafting",
        "Portal filing",
        "Post-approval guidance",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "Who is eligible?",
          a: "Innovative entities meeting DPIIT criteria on incorporation age and turnover.",
        },
        {
          q: "Timeline?",
          a: "Typically 2–4 weeks depending on review timelines.",
        },
        {
          q: "Docs required?",
          a: "COI, PAN, director details, innovation brief, website/app links if any.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Startup India Registration"
      subtitle="Fast-track DPIIT recognition with expert documentation and filing."
      gradientFrom="from-emerald-700"
      gradientTo="to-teal-700"
      serviceLabel="Startup India Registration"
      pricing={pricing}
      sections={sections}
      formType="onboarding"
      serviceKey="startup"
      heroImage="https://images.pexels.com/photos/7414207/pexels-photo-7414207.jpeg"
      heroImageAlt="Founders brainstorming in office"
    />
  );
}
