import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function HallmarkRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Hallmark Registration - Overview",
      paragraphs: [
        "Hallmark registration in India, managed by the Bureau of Indian Standards (BIS), certifies the quality and purity of precious metals like gold, silver, and platinum. BIS certified jewellers can offer hallmark-certified articles that meet high purity standards.",
        "Each certified piece includes a Jeweller Mark and the Hallmarking Centre’s Mark, ensuring accurate determination of purity. Jewellers must provide documentation like GST certificate, address proof, and comply with the Gold Hallmarking Scheme. Approved jewellers receive a hallmark license to mark their products.",
        "From 1 April 2023, a new 6-digit Hallmark Unique Identification Number (HUID) is mandatory for all gold jewellery sold or purchased in India."
      ],
    },
    {
      kind: "list",
      title: "Purpose of Hallmarking",
      items: [
        "Confirms the purity and fineness of precious metals.",
        "Prevents fraud by guaranteeing genuine metal quality.",
        "Applies to gold, silver, and platinum jewellery."
      ],
    },
    {
      kind: "list",
      title: "Types of Precious Metals Covered",
      items: [
        "Gold: 999 (24K, 99.9%), 22K (91.6%), 21K (87.5%), 18K (75%).",
        "Silver: 925 (92.5%), with maker’s mark, town mark, and lion passant.",
        "Platinum: 99.9% pure, 95% purity with diamond shape and balance scale hallmarks."
      ],
    },
    {
      kind: "list",
      title: "Role of BIS in Hallmarking",
      items: [
        "Sets quality standards and rules for hallmarking.",
        "Runs the hallmarking scheme and certifies jewellers.",
        "Audits hallmarking centres to ensure compliance.",
        "Handles consumer complaints and assists manufacturers."
      ],
    },
    {
      kind: "list",
      title: "Benefits of Hallmark Registration for Jewellers",
      items: [
        "Boosts credibility and consumer trust.",
        "Ensures legal protection and compliance.",
        "Quality assurance and transparency.",
        "Enhances jewellery value and customer confidence."
      ],
    },
    {
      kind: "list",
      title: "Eligibility for Hallmark Registration",
      items: [
        "Jewellers and retailers selling gold or precious metals.",
        "Jewellery manufacturers producing gold, silver, or platinum items.",
        "Exporters and importers of precious metals complying with BIS standards.",
        "Not eligible: Those with cancelled registration or recent convictions under BIS Act."
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "ROC registration certificate with MOA for companies",
        "Registered partnership deed for partnership firms",
        "CA certificate for proprietorship or turnover > ₹40 lakhs",
        "GST registration certificate",
        "Sale/lease deed, income tax assessment order, property tax receipt",
        "Identity proof: Aadhaar, PAN, Passport, or voter ID",
        "Location map of premises",
        "GST returns of previous financial year or expected turnover for new firms"
      ],
    },
    {
      kind: "list",
      title: "Hallmarking Procedure",
      items: [
        "Consultation to understand requirements and fees.",
        "Documentation and application submission to BIS.",
        "Inspection and testing at BIS Assaying & Hallmarking Centres.",
        "Issuance of Hallmark Registration Certificate with HUID.",
        "Annual renewal to maintain hallmark license.",
      ],
    },
    {
      kind: "list",
      title: "Post-Registration Compliance",
      items: [
        "All metals tested at BIS-approved centres before sale.",
        "Maintain records of tested metals and certificates.",
        "Regular audits by BIS officials.",
        "Timely renewal to avoid fines, suspension, or legal action."
      ],
    },
    {
      kind: "faq",
      title: "Hallmark Registration - FAQs",
      qa: [
        { q: "What is the difference between Hallmarking and Assaying?", a: "Assaying measures the metal purity, while Hallmarking certifies and marks it." },
        { q: "How can I identify hallmarked jewellery?", a: "Look for BIS hallmark, purity grade, jeweller's ID mark, and year of hallmarking." },
        { q: "Is hallmarking mandatory for gold?", a: "Yes, all gold jewellery must have BIS hallmark and HUID." },
        { q: "Can hallmark registration be transferred?", a: "No, it is specific to the registered entity." },
        { q: "What metals are covered under BIS hallmarking?", a: "Gold, silver, and platinum." },
        { q: "How long does hallmark registration take?", a: "Typically 30-45 days depending on document submission and testing." },
        { q: "Who issues the Hallmark Registration Certificate?", a: "The Bureau of Indian Standards (BIS) issues it after approval." },
        { q: "What is HUID?", a: "Hallmark Unique Identification Number – a 6-digit code mandatory on gold jewellery." }
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Hallmark Registration Services"
      subtitle="Get BIS hallmark certification for gold, silver, and platinum with expert guidance."
      gradientFrom="from-yellow-600"
      gradientTo="to-orange-600"
      serviceLabel="Hallmark Registration"
      sections={sections}
      serviceKey="hallmark-registration"
    />
  );
}
