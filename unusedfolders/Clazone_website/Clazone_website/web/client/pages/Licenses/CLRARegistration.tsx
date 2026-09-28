import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function CLRARegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview - CLRA Registration & Licensing",
      paragraphs: [
        "The Contract Labour (Regulation and Abolition) Act, 1970 (CLRA Act) was enacted to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
        "The Act applies to establishments that employ 20 or more contract labourers on any day of the financial year. Principal employers of such establishments and contractors who employ 20 or more contract labourers are required to register under the Act.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of CLRA Registration & Licensing",
      items: [
        "Compliance with the law and avoidance of penalties.",
        "Protection of contract workers' rights such as fair wages, rest, and safety.",
        "Access to government benefits and schemes for registered establishments.",
        "Reduced risk of penalties for non-compliance.",
        "Improved brand image and credibility.",
        "Increased operational efficiency via proper record-keeping.",
        "Reduced liability in case of accidents or injuries to contract workers.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility",
      items: [
        "The establishment must employ 20 or more contract labourers on any day of the financial year.",
        "The establishment must be located in India.",
        "The establishment must be engaged in any industry, manufacture, occupation, trade, or business listed in the CLRA Act Schedule.",
        "The establishment must not be a government establishment.",
      ],
    },
    {
      kind: "list",
      title: "Exempt From CLRA Registration & Licensing",
      items: [
        "Employ contract labourers for less than 15 days in a calendar year.",
        "Employ contract labourers for work incidental to main work of the establishment.",
        "Employ contract labourers for seasonal work.",
        "Establishments located in a Special Economic Zone (SEZ).",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Trade license",
        "AOA and MOA or Partnership Deed",
        "Factory License",
        "Other registration certificates for entities other than company, proprietorship, or partnership firm",
        "Proof of address",
        "Proof of identity",
        "Proof of employment of contract labourers",
      ],
    },
    {
      kind: "list",
      title: "Principal Employer Responsibilities",
      items: [
        "Register with the appropriate government authority.",
        "Provide amenities to contract workers (canteens, restrooms, creches).",
        "Pay fair wages and overtime to contract workers.",
        "Ensure the safety and health of contract workers.",
        "Maintain records and comply with other CLRA Act requirements.",
      ],
    },
    {
      kind: "list",
      title: "Compliances Related to CLRA Registration",
      items: [
        "Registration with the appropriate government authority online or offline.",
        "Provision of amenities to contract workers based on workforce size.",
        "Payment of minimum wages and overtime as prescribed by the government.",
        "Ensuring safety and health via proper equipment, training, and safe environment.",
        "Maintain registers and records, submit returns as required under the Act.",
      ],
    },
    {
      kind: "list",
      title: "When to Apply",
      items: [
        "Apply as soon as the principal employer starts employing contract labour.",
        "Failure to obtain registration and license may result in penalties, fines, or imprisonment.",
      ],
    },
    {
      kind: "list",
      title: "Cases Where CLRA Is Not Applicable",
      items: [
        "Casual or intermittent work not exceeding 120 days in 12 months.",
        "Seasonal work not exceeding 60 days in a year.",
        "Work performed by family members of employer or contractor.",
        "Work by apprentices under the Apprentices Act 1961.",
        "Construction or civil engineering work if number of employed persons ≤ 20.",
        "Plantation work with ≤ 20 employed persons.",
        "Operation of machinery or engines for electricity generation if ≤ 20 employed persons.",
      ],
    },
    {
      kind: "list",
      title: "Penalties and Violations",
      items: [
        "Failure to obtain registration or license: imprisonment up to 3 months, fine up to ₹1,000, or both.",
        "Employing contract labour in prohibited establishments: imprisonment up to 6 months, fine up to ₹2,000, or both.",
        "Contravention of registration/license conditions: imprisonment up to 3 months, fine up to ₹1,000, or both.",
        "Wilful neglect of CLRA provisions: imprisonment up to 6 months, fine up to ₹2,000, or both.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expertise in CLRA compliance and labour laws.",
        "Efficient handling of documentation and regulatory requirements.",
        "Customised solutions for each business.",
        "End-to-end guidance from registration to ongoing adherence.",
        "Risk mitigation with proactive compliance support.",
        "Transparent pricing and clear cost breakdown.",
        "Dedicated customer support for prompt assistance.",
        "Proven track record of helping businesses achieve CLRA compliance.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on CLRA Registration & Licensing",
      qa: [
        { q: "What is the Contract Labour (Regulation and Abolition) Act 1970?", a: "It is a labour law regulating contract labour employment in India." },
        { q: "When does the CLRA Act apply?", a: "It applies to establishments employing 20 or more contract labourers on any day of the financial year." },
        { q: "What is contract labour?", a: "Contract labour refers to workers employed by a contractor to perform work for a principal employer." },
        { q: "Who are the principal employers and contractors?", a: "Principal employers engage contract labour, and contractors employ workers to provide services to the principal employer." },
        { q: "What are the registration and licensing requirements under the CLRA Act?", a: "Principal employers and contractors must register with the government and maintain records, amenities, wages, and compliance as per CLRA regulations." },
        { q: "What are the penalties for violations of the CLRA Act?", a: "Penalties include imprisonment, fines, or both for failing to register, contravening conditions, or wilfully neglecting provisions of the Act." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="CLRA Registration & Licensing"
      subtitle="Legalise your contract employment with expert CLRA registration & licensing."
      gradientFrom="from-indigo-600"
      gradientTo="to-blue-500"
      serviceLabel="CLRA Registration & Licensing"
      sections={sections}
      serviceKey="clra-registration"
    />
  );
}
