import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function SpiceBoard() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹1,999",
      bullets: [
        "CRES registration",
        "Document assistance",
        "Certificate download",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹2,999",
      highlight: true,
      bullets: [
        "Everything in Basic",
        "Compliance support",
        "Expert consultation",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹4,499",
      bullets: [
        "Everything in Standard",
        "International trade guidance",
        "Corrections handling",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "The Spice Board of India promotes and regulates the Indian spice industry and facilitates spice exports.",
        "Spice Board Registration (CRES) is mandatory for every producer or exporter dealing with Indian spices.",
        "Vakilsearch guides you through the online registration process, ensuring compliance and certificate issuance.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility",
      items: [
        "Registered entity under Companies Act 1956 or Partnership Act 1932",
        "Valid Import-Export (IE) Code",
        "Minimum turnover of ₹2.5 lakhs in previous financial year",
        "Permanent business location with adequate storage facilities",
        "Technical know-how and quality control systems",
        "Compliance with food safety and Spice Board standards",
        "Agreement to follow Spice Board export/manufacturing guidelines",
      ],
    },
    {
      kind: "list",
      title: "Benefits",
      items: [
        "Access to comprehensive importer/exporter databases",
        "Facilitates international business relationships",
        "Participation in international exhibitions and trade events",
        "Expert support in documentation and compliance",
        "Quality assurance and recognition in global markets",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Import-Export Code (IEC)",
        "Bank confidential report in required format",
        "Certificate for CGST",
        "PAN card & SSI or Industries Department certificate for manufacturers",
      ],
    },
    {
      kind: "list",
      title: "Function of Spice Board",
      items: [
        "Development of small and large cardamom cultivation",
        "Promotion and development of the spice industry",
        "Regulation of spice exports",
        "Quality control for export spices",
        "Research and development for innovation",
        "Farmer training and capacity building",
        "Market intelligence and infrastructure development",
        "Regulatory compliance and policy advocacy",
      ],
    },
    {
      kind: "list",
      title: "List of Spices",
      items: [
        "Cardamom",
        "Pepper",
        "Chilly",
        "Ginger",
        "Turmeric",
        "Cumin",
        "Fennel",
        "Fenugreek",
        "Celery",
        "Aniseed",
        "Bishops weed",
        "Caraway",
        "Dill",
        "Cinnamon",
        "Cassia",
        "Curry Leaf",
        "Kokam",
        "Mint",
        "Mustard",
        "Parsley",
        "Pomegranate Seed",
        "Saffron",
        "Vanilla",
        "Tej Patta",
        "Pepper Long",
        "Star Anise",
        "Sweet Flag",
        "Greater Galanga",
        "Horse-Radish",
        "Caper",
        "Clove",
        "Asafetida",
        "Cambodge",
        "Hyssop",
        "Juniper Berry",
        "Bay leaf",
        "Lovage",
        "Marjoram",
        "Nutmeg",
        "Mace",
        "Basil",
        "Poppy Seed",
        "All-Spice",
        "Rosemary",
        "Sage",
        "Coriander",
        "Savory",
        "Thyme",
        "Oregano",
        "Tarragon",
        "Tamarind",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "What are the penalties applicable for violating the provisions set by the Spice Board?",
          a: "Penalties include fines, suspension or cancellation of certificate, blacklisting, and legal action.",
        },
        {
          q: "When was the Spice Board enacted?",
          a: "The Spice Board of India was established under the Spices Board Act of 1986.",
        },
        {
          q: "How to pay the fee for Spice Board registration?",
          a: "The fee can be paid online during the registration process via the official Spice Board portal.",
        },
        {
          q: "Is the certificate of Spice Board registration cancelled?",
          a: "The certificate may be cancelled if no exports are conducted within the block year or if compliance rules are violated.",
        },
        {
          q: "Are CRES and Spice Board registration the same?",
          a: "Yes, CRES (Certificate of Registration as Exporter of Spices) is issued by the Spice Board and represents the registration.",
        },
        {
          q: "After having IEC and Spice Board Registration, can we start exporting spices?",
          a: "Yes, once IEC and CRES are obtained, businesses can legally export spices from India.",
        },
        {
          q: "How do I register with the Spice Board?",
          a: "Register online via the Spice Board portal, submit required documents, and receive the CRES certificate.",
        },
        {
          q: "What is a certificate from the Masala/Spice Board?",
          a: "It is a legal certificate authorizing a business to export spices in compliance with Indian regulations.",
        },
        {
          q: "What purpose does the Spice Board of India serve?",
          a: "It promotes Indian spices globally, regulates exports, ensures quality standards, and supports spice industry growth.",
        },
        {
          q: "Is registration with the Masala/Spice Board mandatory?",
          a: "Yes, for all exporters and manufacturers dealing with spices covered under the Spice Board Act.",
        },
        {
          q: "What documents are necessary for the export of spices?",
          a: "IEC, PAN card, bank certificate, CGST certificate, and manufacturer registration certificates (if applicable).",
        },
        {
          q: "What is the Spice Board registration fee?",
          a: "The registration fee is specified on the official Spice Board portal; consult experts for the latest charges.",
        },
        {
          q: "Where can I find the certificate from the Spice Board?",
          a: "The CRES certificate can be downloaded from the official Spice Board website after registration.",
        },
        {
          q: "What is the validity of the Spice Board registration certificate?",
          a: "Typically valid for a three-year block period, after which renewal is required.",
        },
        {
          q: "What is the procedure for Spice Board registration renewal?",
          a: "Submit renewal application two months before expiry with required documents and applicable fee.",
        },
        {
          q: "How to import spices from India?",
          a: "Importers can source spices from registered exporters with CRES certificate; international trade rules apply.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Masala Board / Spice Board Registration"
      subtitle="Online CRES registration for spice exporters with full compliance support."
      gradientFrom="from-yellow-700"
      gradientTo="to-red-600"
      serviceLabel="Spice Board Registration"
      pricing={pricing}
      sections={sections}
      serviceKey="spice-board"
    />
  );
}
