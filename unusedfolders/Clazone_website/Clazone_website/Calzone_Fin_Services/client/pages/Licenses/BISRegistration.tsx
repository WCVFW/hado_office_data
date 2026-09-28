import RegistrationTemplate, {
  Section,
} from "@/components/RegistrationTemplate";

export default function BISRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "BIS Registration - Overview",
      paragraphs: [
        "The Bureau of Indian Standards (BIS) is the national standards body of India, established under the BIS Act, 2016. It functions under the Ministry of Consumer Affairs, Food & Public Distribution, Government of India. BIS formulates and implements standards across various sectors to ensure the quality, safety, and reliability of products and services.",
        "The BIS Act, 2016 replaced the earlier BIS Act of 1986 to strengthen the regulatory framework governing standards and certifications in India. BIS establishes benchmarks for goods, services, and systems, enhancing consumer protection and promoting Indian products in domestic and international markets.",
        "BIS plays a crucial role in quality assurance, consumer protection, and market competitiveness by formulating standards, certifying products, assessing conformity, and promoting a quality culture across industries.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of BIS Certification",
      items: [
        "Framework for Total Quality Management (TQM) and consistent product quality",
        "Resource optimization and cost reduction",
        "Global market access and export opportunities",
        "Assurance of product quality, reliability, and safety",
        "Customized quality management systems",
        "Enhanced market reputation and consumer trust",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for BIS Certification",
      items: [
        "Application form with product and manufacturing details",
        "Product test reports from BIS-recognized laboratories",
        "Factory production control plan for quality assurance",
        "Certifies product performance and safety characteristics",
        "Trademark/logo authorization (if applicable)",
        "Proof of manufacturer’s address",
        "Proof of payment for application and testing fees",
        "Previous BIS certificates for renewals or modifications (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "Products Covered Under BIS Certification",
      items: [
        "Electronics and IT Goods",
        "Automobile Components",
        "Cement and Building Materials",
        "Household and Electrical Appliances",
        "Food and Edible Products",
        "Medical Devices",
        "Steel Products",
        "Toys and Educational Items",
      ],
    },
    {
      kind: "list",
      title: "Types of BIS Certification",
      items: [
        "Mandatory Certification – Required for certain products before selling in India",
        "Voluntary Certification – For products not under mandatory certification but wish to demonstrate adherence to standards",
      ],
    },
    {
      kind: "list",
      title: "BIS Registration Process",
      items: [
        "Product Identification: Determine if your product falls under mandatory BIS registration.",
        "Application Submission: Submit application forms with required documents.",
        "Document Verification: BIS reviews documents for completeness and accuracy.",
        "Factory Inspection: BIS inspector visits manufacturing facility to assess compliance.",
        "Product Testing: Samples tested in accredited laboratories.",
        "Certification Issuance: BIS issues license and allows BIS mark usage.",
        "Surveillance: Regular inspections and product testing to ensure ongoing compliance.",
      ],
    },
    {
      kind: "list",
      title: "Validity and Renewal of BIS Certification",
      items: [
        "Validity varies by product and sector; typically 1–5 years.",
        "Renewal required before expiry to maintain compliance.",
        "Submit updated test reports and documentation during renewal.",
        "Renewal process includes review, testing, and certificate issuance for the extended period.",
      ],
    },
    {
      kind: "faq",
      title: "BIS Registration - FAQs",
      qa: [
        {
          q: "What is BIS registration?",
          a: "BIS registration certifies products meet Indian quality standards and regulations.",
        },
        {
          q: "What is the Compulsory Registration Scheme (CRS)?",
          a: "CRS mandates certain electronic products to obtain BIS certification before sale.",
        },
        {
          q: "How much does BIS certification cost?",
          a: "The cost depends on product type, testing, and scheme applied; starting at ₹4,500.",
        },
        {
          q: "How to check if a product is BIS-certified?",
          a: "Check for the BIS Standard Mark or verify on BIS official website using license or HUID.",
        },
        {
          q: "What are the requirements for BIS marking?",
          a: "Product must comply with relevant IS standards, pass testing, and come from a BIS-certified manufacturer.",
        },
        {
          q: "How to get a BIS license number?",
          a: "Apply to BIS, complete testing and inspections; license number is provided upon approval.",
        },
        {
          q: "What is the validity of a BIS certificate?",
          a: "Typically 1–5 years depending on product type, with mandatory renewal for continued compliance.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="BIS Registration & Certification Services"
      subtitle="Boost your product credibility with BIS ISI Certification and expert guidance starting at ₹4,500."
      gradientFrom="from-yellow-500"
      gradientTo="to-orange-500"
      serviceLabel="BIS Registration"
      sections={sections}
      serviceKey="bis-registration"
    />
  );
}
