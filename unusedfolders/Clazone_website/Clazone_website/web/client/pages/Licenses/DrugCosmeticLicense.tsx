import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function DrugCosmeticLicense() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview of Drug & Cosmetic License",
      paragraphs: [
        "The Central Drugs Standard Control Organisation (CDSCO) regulates the import, manufacture, distribution, and sale of drugs and cosmetics in India. This ensures all drugs and cosmetics meet required quality standards.",
        "Drug and Cosmetic licenses are mandatory for businesses involved in manufacturing, selling, or distributing drugs or cosmetics in India. Licenses are issued by the Drugs Controller General of India (DCGI) or CDSCO.",
      ],
    },
    {
      kind: "list",
      title: "Types of Licenses",
      items: [
        "Retail Drug License – Required to run a chemist shop.",
        "Wholesale Drug License – Required to sell drugs to retailers.",
        "Manufacturing Drug License – Required for drug manufacturers.",
        "Import Drug License – Required to import drugs into India.",
        "Multi-Drug License – Required for operating in multiple states.",
        "Loan Drug License – For those using another manufacturer’s facility to produce drugs.",
        "Cosmetic License – Required to manufacture or import cosmetics.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Incorporation certificate of the company",
        "KYC documents of each director, partner, or proprietor",
        "Proof of premises (rent agreement, electricity bill, property tax receipt)",
        "Site plan",
        "KYC details of technical personnel",
        "List of cosmetics with product sheets (composition formula)",
        "Ownership details of cosmetic brand (registered or trademark)",
        "Manufacturing process description with flow diagrams",
        "In-house specifications, where applicable",
        "Method of analysis of products",
        "Copies of BIS certificates, if applicable",
      ],
    },
    {
      kind: "list",
      title: "Classification / Types of Drug Licenses",
      items: [
        "Manufacturing Drug License – Requires adequate premises, GMP compliance, qualified technical staff, and testing arrangements.",
        "Import Drug License – Requires proper storage, invoices for consignments, and declarations for unlicensed drugs.",
        "Multi-Drug License – Separate license for each location in multiple states.",
        "Sale Drug License – For wholesale and retail distribution.",
        "Loan Drug License – Requires agreement with licensed manufacturer and qualified staff.",
      ],
    },
    {
      kind: "list",
      title: "Important Rules and Regulations",
      items: [
        "Drugs and Cosmetics Rules, 1945",
        "Medical Devices Rules, 2017",
        "New Drugs and Clinical Trials Rules, 2019",
        "Cosmetics Rules, 2020",
        "National Pharmaceutical Pricing Policy, 2012",
        "Drugs (Prices Control) Order, 2013",
      ],
    },
    {
      kind: "list",
      title: "Labelling Requirements for Imported Cosmetics",
      items: [
        "Registration certificate number",
        "Name and address of certificate holder",
        "Name and address of manufacturer",
        "Name of the cosmetic",
        "Date of manufacture and expiry",
        "List of ingredients in descending order of weight",
        "Adequate directions for use",
        "Any warning, caution, or special directions",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expert guidance on obtaining drug and cosmetic licenses.",
        "Complete compliance with DCGI/CDSCO regulations.",
        "Streamlined process for documentation and form filing.",
        "Ensures smooth approvals to legally manufacture, distribute, or sell drugs and cosmetics.",
        "Tailored solutions for different types of licenses.",
        "Proven track record of successful license approvals.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Drug & Cosmetic License",
      qa: [
        { q: "What is the form used to apply for a license to manufacture new drugs?", a: "Form 24A or 24B as per the Drugs & Cosmetics Rules." },
        { q: "What is the form used to grant a license to manufacture new drugs?", a: "Form 25 for manufacturing license approval." },
        { q: "Who is the concerned applicant for a license to manufacture new drugs?", a: "The manufacturer or legal entity intending to manufacture drugs." },
        { q: "What is the purpose of a license to manufacture new drugs?", a: "To ensure compliance with DCGI regulations and guarantee drug quality and safety." },
        { q: "What are the other forms used to apply for licenses related to drugs?", a: "Forms include 20B, 21B, 28, 29, and other forms under the Drugs & Cosmetics Act for different purposes." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Drug & Cosmetic License"
      subtitle="Get your Drug & Cosmetic License hassle-free with expert online filing and processing."
      gradientFrom="from-red-600"
      gradientTo="to-pink-500"
      serviceLabel="Drug & Cosmetic License"
      sections={sections}
      serviceKey="drug-cosmetic-license"
    />
  );
}
