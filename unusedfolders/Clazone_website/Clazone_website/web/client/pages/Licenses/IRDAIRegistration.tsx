import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function IRDAIRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview of IRDA Insurance License",
      paragraphs: [
        "The Insurance Regulatory and Development Authority of India (IRDAI) is the regulator for the insurance industry in India. It issues licenses and registers entities that want to operate in the insurance sector.",
        "An IRDA license is required for any entity that wants to sell, distribute, or advise on insurance products in India. The license ensures that the entity is financially sound and has the necessary expertise to provide insurance services.",
      ],
    },
    {
      kind: "list",
      title: "Purpose of Securing an IRDA License",
      items: [
        "Comply with the Insurance Act of 1938.",
        "Build trust with customers and attract new business.",
        "Access capital from banks and financial institutions.",
        "Gain access to regulated markets, including government sector opportunities.",
      ],
    },
    {
      kind: "list",
      title: "Entities Required to Obtain an IRDA License",
      items: [
        "Life insurance companies",
        "General insurance companies",
        "Reinsurance companies",
        "Insurance intermediaries (brokers, agents, surveyors)",
        "Insurance marketing firms",
        "Pension fund managers",
        "Health insurance companies",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Minimum net worth as prescribed by IRDAI",
        "Experience in the insurance sector",
        "Adequate infrastructure",
        "Compliance with regulatory requirements",
      ],
    },
    {
      kind: "list",
      title: "Different Types of Insurance Businesses Requiring IRDA License",
      items: [
        "Life insurance business",
        "General insurance business",
        "Reinsurance business",
        "Insurance intermediary business",
        "Insurance marketing firm business",
        "Pension fund management business",
        "Health insurance business",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for IRDA License",
      items: [
        "Application form",
        "Memorandum of Association (MOA)",
        "Articles of Association (AOA)",
        "Certificate of Incorporation",
        "Net worth certificate",
        "Experience certificate",
        "Infrastructure details",
        "Compliance certificate",
      ],
    },
    {
      kind: "list",
      title: "Validity and Renewal of IRDA License",
      items: [
        "The IRDA license is valid for three years.",
        "It can be renewed for another three years on payment of prescribed fees.",
        "Renewal requires submission of application and any additional information requested by IRDAI.",
      ],
    },
    {
      kind: "list",
      title: "Duplicate Certificate",
      items: [
        "Submit an application for duplicate certificate to IRDAI.",
        "Provide a copy of your lost license.",
        "Pay the prescribed fee to obtain the duplicate license.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expertise and experience in legal and regulatory compliance.",
        "Comprehensive end-to-end services for IRDA registration and license procurement.",
        "Tailored guidance for unique business requirements.",
        "Efficient and timely processing to reduce delays.",
        "Transparency in pricing and processes.",
        "Dedicated customer support for queries and assistance.",
        "Proven track record of helping businesses navigate legal and regulatory challenges.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on IRDAI Registration",
      qa: [
        { q: "What are the benefits of having an IRDA license?", a: "An IRDA license ensures legal compliance, builds customer trust, allows access to capital, and enables entry into regulated markets." },
        { q: "What are the requirements for obtaining an IRDA license?", a: "Requirements include minimum net worth, experience in insurance, adequate infrastructure, and compliance with IRDA regulations." },
        { q: "What are the documents required for obtaining an IRDA license?", a: "Common documents include application form, MOA, AOA, certificate of incorporation, net worth certificate, experience certificate, infrastructure details, and compliance certificate." },
        { q: "What is the fee for an IRDA license?", a: "The prescribed fee varies depending on the type of insurance entity; it must be paid during application and renewal." },
        { q: "How long does it take to process an IRDA license application?", a: "Processing times vary, but IRDAI reviews the application and may request additional information before approval." },
        { q: "What are the penalties for operating an insurance business without an IRDA license?", a: "Operating without a license is illegal and may result in fines, legal action, or closure of the business." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="IRDAI Registration"
      subtitle="Start your insurance company seamlessly with expert legal support for IRDAI registration."
      gradientFrom="from-blue-600"
      gradientTo="to-green-500"
      serviceLabel="IRDAI Registration"
      sections={sections}
      serviceKey="irdai-registration"
    />
  );
}
