import RegistrationTemplate, {
  Section,
} from "@/components/RegistrationTemplate";

export default function LegalMetrologyRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Legal Metrology - Overview",
      paragraphs: [
        "Weights and measurement standards are established under the Legal Metrology Registration Act. The Act mandates registration for packers, dealers, and eCommerce businesses dealing with packaged goods.",
        "It sets regulations for product packaging, maximum sizes and weights, disclosure, conditions, and methods. The department of legal metrology under the Department of Consumer Affairs administers the Act in each state.",
      ],
    },
    {
      kind: "list",
      title: "Mandatory Information on Packaged Goods",
      items: [
        "Manufacturer, Importer, and Packer information must be listed on packaged goods",
        "Generic name of the product must be displayed",
        "Maximum retail price (inclusive of taxes)",
        "Date of manufacturing, packaging, or import (month/year)",
        "Date of expiry (month/year) and best-before period",
        "Commodity quantity, ingredients, and customer care helpline",
      ],
    },
    {
      kind: "list",
      title: "Prohibitions Under Legal Metrology Act",
      items: [
        "LMPC certificate required for manufacture, repair, or sale of weights/measures",
        "Certain exemptions for manufacturers fixing weights/measures outside their state",
        "Central and State Legal Metrology Acts regulate standards, approvals, and enforcement",
      ],
    },
    {
      kind: "list",
      title: "Legal Provisions of Legal Metrology Act",
      items: [
        "Section 19: Registration required before importing weights/measures",
        "Section 38: Fine up to ₹25,000 and imprisonment up to six months for non-compliance",
      ],
    },
    {
      kind: "list",
      title: "Rules Under Legal Metrology Act, 2009",
      items: [
        "General Rules, 2011 – Covers ~40 weighing/measuring devices",
        "Packaged Commodities Rules, 2011 – Labelling requirements",
        "Approval of Models Rules, 2011 – Standard measures and affirmations",
        "National Standards Rules, 2011 – Base unit specifications",
        "Numeration Rules, 2011 – Number writing regulations",
        "Government Approved Test Centre Rules, 2013 – Verification procedures",
        "Indian Institute of Legal Metrology Rules, 2011 – Training for officers",
      ],
    },
    {
      kind: "list",
      title: "Benefits of LMPC Certificate",
      items: [
        "Reduces transaction costs by ensuring proper measurement",
        "Supports legal trade and compliance",
        "Ensures fair government revenue collection",
        "Lowers trade-related technical barriers and improves confidence",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for Legal Metrology Registration",
      items: [
        "Goods must adhere to Legal Metrology Packaged Commodities rules",
        "All required documents must be submitted",
        "Any additional business licenses must be provided",
        "Fully completed application",
        "Provide required information for package display window",
      ],
    },
    {
      kind: "list",
      title: "Important Guidelines for LMPC Certificate",
      items: [
        "₹100 application fee payable to 'Pay and Accounts Official', D/o Consumer Affairs, New Delhi",
        "Registration required for items defined under LMPC Act",
        "Incomplete applications returned within 7 days",
        "LMPC certificate issued within 10 days if application is complete",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Legal Metrology Registration",
      items: [
        "Application form",
        "Payment receipt for registration fee",
        "Product sample (if required)",
        "Supporting business documents",
        "Identity proof of directors/partners",
        "GSTIN and other statutory licenses",
      ],
    },
    {
      kind: "list",
      title: "LMPC Certificate Exemptions",
      items: [
        "Goods ≤ 10g or 10ml",
        "Agricultural produce > 50 kg",
        "Fast food packed by restaurants/hotels",
        "Formulations under Drugs (Price Control) Order, 1995",
        "Industrial/institutional packaged goods",
        "Goods imported by Government, embassies, for personal/research/educational/exhibition use",
      ],
    },
    {
      kind: "list",
      title: "Legal Metrology Registration Procedure",
      items: [
        "Step 1: Application – Gather data and create application",
        "Step 2: Zonal officer reviews application for objections",
        "Step 3: Inspection of premises by inspector",
        "Step 4: Recommendation by inspector",
        "Step 5: Acceptance or rejection by assistant controller",
        "Step 6: Ensure compliance with LM Act and Rules",
        "Step 7: Respond to regulatory actions",
        "Application tracking: Visit state LM portal → provide details → acknowledgment → captcha → submit → track status",
      ],
    },
    {
      kind: "list",
      title: "Who Needs to Register for LMPC Certificate?",
      items: [
        "Importers, producers, and packers of packaged goods (Rule 27, LMPC Rules 2011)",
        "Importing weights and measures (Section 19 & 38, LM Act 2009)",
      ],
    },
    {
      kind: "list",
      title: "Our Assistance",
      items: [
        "Support throughout the application process",
        "Address objections promptly",
        "Collect product samples if needed",
        "Submit application and documents to the department",
        "Provide regular status updates",
      ],
    },
    {
      kind: "list",
      title: "Why Choose Vakilsearch?",
      items: [
        "Work with recognised specialists",
        "Hassle-free interaction with government authorities",
        "Transparent application process",
        "Regular updates via online platform",
      ],
    },
    {
      kind: "faq",
      title: "Legal Metrology Online Services - FAQs",
      qa: [
        {
          q: "Is it necessary to display the certificate of verification?",
          a: "Yes, it ensures compliance with Legal Metrology regulations.",
        },
        {
          q: "What is the eligibility for an LMPC certificate?",
          a: "Any manufacturer, importer, or packer of packaged goods adhering to LMPC rules.",
        },
        {
          q: "Why is LMPC certificate from Legal Metrology necessary?",
          a: "To legally manufacture, import, or sell weights and measures in India.",
        },
        {
          q: "Is the LMPC license transferable?",
          a: "No, it is non-transferable and specific to the registered entity.",
        },
        {
          q: "What is the work of the Legal Metrology Department?",
          a: "Enforces compliance with standards for weights, measures, and packaged goods.",
        },
        {
          q: "What is the Legal Metrology Act?",
          a: "The Act regulates weights, measures, and packaged goods in India.",
        },
        {
          q: "What is the process to get a legal metrology certificate online?",
          a: "Submit application online, inspection if needed, compliance verification, and certificate issuance.",
        },
        {
          q: "What is an LMPC Certificate?",
          a: "It certifies that your packaged goods comply with Legal Metrology regulations.",
        },
        {
          q: "When did the Legal Metrology Act 2009 come into force?",
          a: "It came into force in 2009 and is implemented by states with or without modifications.",
        },
        {
          q: "Is Legal Metrology registration mandatory?",
          a: "Yes, for all manufacturers, importers, and packers of certain packaged goods.",
        },
        {
          q: "Who issues the legal metrology license?",
          a: "State Controllers of Legal Metrology or Director of Legal Metrology (Central Government).",
        },
        {
          q: "What are the list of documents a dealer needs in weights and measures?",
          a: "Application, payment receipt, product sample, identity proof, GSTIN, and statutory licenses.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Legal Metrology Online Services"
      subtitle="Complete your LMPC registration to ensure product compliance with top experts online."
      gradientFrom="from-green-600"
      gradientTo="to-teal-600"
      serviceLabel="Legal Metrology Registration"
      sections={sections}
      serviceKey="legal-metrology"
    />
  );
}
