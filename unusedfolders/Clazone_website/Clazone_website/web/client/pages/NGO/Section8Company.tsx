import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function Section8Company() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "₹999 + Govt. Fee",
      bullets: [
        "Expert assisted process",
        "Guidance on choosing right NGO structure",
        "Name suggestion & approval within 7 working days",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹2,999 + Govt. Fee",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "DSC in 24 hours",
        "DIN for directors",
        "Company name reserved in 5 days",
        "SPICe+ form filing in 7 days*",
        "Incorporation Certificate",
        "Company PAN+TAN",
        "Zero balance current account",
        "DARPAN Registration Free 🎉",
      ],
    },
    {
      name: "Premium",
      priceLabel: "₹14,999 + Govt. Fee",
      bullets: [
        "Everything in Standard",
        "Dedicated account manager",
        "Section 12A & 80G in 14 days",
        "e-ANUDAAN registration",
        "Accounting & auditing (0-300 transactions)",
        "ITR filing for 1 year",
        "Professional tax advisory",
        "Accounting software license (1-year)",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Section 8 Company Overview",
      paragraphs: [
        "A Section 8 Company is a non-profit organization incorporated under the Companies Act, 2013 in India. It is established to promote objectives such as charity, education, science, arts, social welfare, environmental protection, and religious activities.",
        "A Section 8 Company does not distribute profits as dividends. All profits are reinvested to achieve the company’s objectives.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of a Section 8 Company",
      items: [
        "Legal recognition under Companies Act, 2013",
        "Tax exemptions under Sections 12A & 80G",
        "Limited liability for members and directors",
        "No minimum capital requirement",
        "Distinct legal entity capable of owning property, opening bank accounts, entering contracts",
        "Exemption from stamp duty on incorporation",
        "High credibility with donors and government agencies",
        "Perpetual succession ensuring long-term operations",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Objective must be charitable/social welfare/education/science/arts/religion/environmental protection",
        "Minimum 2 members for private, 3 members for public Section 8 Company",
        "Directors must hold DIN (Indian or foreign nationals allowed with compliance)",
        "Sufficient declared capital to achieve objectives",
        "Approval from ROC & compliance with Income Tax Act for exemptions",
        "No profit distribution; all income reinvested for objectives",
      ],
    },
    {
      kind: "list",
      title: "Required Documents",
      items: [
        "Memorandum of Association (MOA) & Articles of Association (AOA)",
        "Directors' KYC: PAN, Aadhaar, Passport (if foreign national), address proof, residential proof, photo",
        "Digital Signature Certificate (DSC) for directors",
        "Registered office proof: rent agreement, utility bill, NOC",
        "Draft license application under Section 8",
        "List of directors & subscribers",
      ],
    },
    {
      kind: "list",
      title: "Step-by-Step Registration Process",
      items: [
        "Obtain DSC for all directors",
        "Acquire DIN for directors",
        "Reserve company name using RUN form",
        "Draft MOA & AOA",
        "Submit INC-12 form for Section 8 license",
        "Receive Certificate of Incorporation & Section 8 license",
      ],
    },
    {
      kind: "list",
      title: "Types of Section 8 Company",
      items: [
        "Limited by Shares: liability limited to unpaid shares",
        "Limited by Guarantee: liability limited to pledged amount",
        "Unlimited Company: unlimited liability for members (rare)",
      ],
    },
    {
      kind: "list",
      title: "Annual Compliance Requirements",
      items: [
        "Conduct board meetings (2 private, 4 public)",
        "Prepare & file audited financial statements (Form AOC-4)",
        "Annual General Meeting for public companies",
        "Submit annual return (Form MGT-7)",
        "File Income Tax Return to claim 12A/80G exemptions",
        "Tax audit if annual income exceeds ₹2 crore",
        "CSR report if applicable",
      ],
    },
    {
      kind: "list",
      title: "Penalties for Non-Compliance",
      items: [
        "Violation of objectives: Company ₹10L–₹1Cr, Directors up to 3 years imprisonment + fine",
        "Late filing of returns: ₹100/day + additional fines",
        "Non-maintenance of books: ₹50,000 + ₹1,000/day",
        "Non-holding board meetings: Company ₹25,000, Directors ₹5,000 each",
        "Misuse of funds: heavy fines + prosecution under Section 447",
      ],
    },
    {
      kind: "faq",
      title: "FAQ - Common Questions",
      qa: [
        {
          q: "What is the difference between Section 8 Company registration and registering a Trust or Society?",
          a: "A Section 8 Company operates under the Companies Act, 2013, offering better credibility, structured compliance, and tax benefits. Trusts and Societies, on the other hand, are governed by respective state laws and may not provide the same level of transparency and governance.",
        },
        {
          q: "How to get a registration number for a Section 8 Company?",
          a: "To obtain a registration number, you must:\n- Apply online via the MCA portal.\n- Complete the SPICe+ (Simplified Proforma for Incorporating a Company Electronically Plus) form.\n- Obtain approval from the Regional Director (RD) after verifying your company’s objectives align with non-profit purposes.\n- Upon approval, the company is issued a Certificate of Incorporation along with a unique Corporate Identification Number (CIN).",
        },
        {
          q: "How long does it take to complete Section 8 Company registration online?",
          a: "The process typically takes 15 to 30 days, depending on the completeness of the documentation and the approval timelines from the Regional Director and Registrar of Companies (ROC).",
        },
        {
          q: "How should I choose the name for my Section 8 Company?",
          a: "The name should:\n- Reflect the non-profit objectives.\n- Comply with MCA Name Approval Guidelines.\n- Not resemble an existing company name.\n- Avoid words suggesting profit-making activities.\n- A trademark search can help avoid conflicts.",
        },
        {
          q: "How many directors are required for a Section 8 Company?",
          a: "- Private Limited Company: Minimum of 2 directors.\n- Public Limited Company: Minimum of 3 directors.\n- Maximum Directors: 15 (can be increased with MCA approval).",
        },
        {
          q: "What is the role of the Regional Director (RD) in Section 8 Company registration?",
          a: "The RD verifies that the company’s objectives are aligned with non-profit purposes under the Companies Act, 2013, and grants approval for incorporation.",
        },
        {
          q: "How can I check if my Section 8 Company is registered or not?",
          a: "Visit the official MCA portal and use the 'View Company/LLP Master Data' feature to search by company name or CIN.",
        },
        {
          q: "Do Section 8 Companies need to register under GST?",
          a: "Yes, if their turnover exceeds the prescribed threshold or if they are engaged in taxable services, irrespective of their non-profit status.",
        },
        {
          q: "Is Foreign Direct Investment allowed in a Section 8 Company?",
          a: "Yes, FDI is allowed under the automatic route, provided funds are used for non-profit purposes. Compliance with the Foreign Contribution Regulation Act (FCRA) is mandatory for foreign contributions.",
        },
        {
          q: "Can Section 8 Companies collaborate with international organisations?",
          a: "Yes, collaborations are allowed, but compliance with FCRA regulations is required when receiving foreign funding or grants.",
        },
        {
          q: "Can a Section 8 Company be converted into any other company?",
          a: "Yes, with RD approval. Conversion requires relinquishing the non-profit status and adhering to the compliance requirements of the new structure.",
        },
        {
          q: "Can a Section 8 Company own property?",
          a: "Yes, the company can own property in its name, but it must be used for non-profit objectives.",
        },
        {
          q: "What happens to the assets of a Section 8 Company if it is dissolved?",
          a: "Assets must be transferred to another Section 8 Company or similar non-profit entity, as per the Companies Act, 2013.",
        },
        {
          q: "How can I raise funds for my Section 8 Company?",
          a: "Funds can be raised through donations, grants, CSR funding, membership fees, government schemes, and foreign contributions (with FCRA compliance).",
        },
        {
          q: "Are Section 8 Companies eligible for CSR funding from other companies?",
          a: "Yes, provided their activities align with the CSR mandate under the Companies Act, 2013.",
        },
        {
          q: "Which companies are Section 8 registered in India?",
          a: "Notable examples include Teach for India, Goonj, and Make A Difference, which focus on education, healthcare, and social welfare.",
        },
        {
          q: "Can a Section 8 Company be a startup?",
          a: "Yes, it can qualify under the Startup India Scheme if it emphasizes innovation, scalability, and employment generation, while adhering to non-profit objectives.",
        },
        {
          q: "Is Section 8 Company tax-free?",
          a: "Tax exemptions under Section 12A and Section 80G of the Income Tax Act are available if the company meets specific registration and compliance requirements.",
        },
        {
          q: "Can foreign nationals or NRIs become directors of a Section 8 Company in India?",
          a: "Yes, they can, provided they obtain a Director Identification Number (DIN) and meet legal requirements under the Companies Act, 2013.",
        },
        {
          q: "What are the conditions for obtaining tax exemptions for a Section 8 Company?",
          a: "- Register under Section 12A and 80G of the Income Tax Act.\n- Maintain accurate financial records.\n- Ensure timely compliance filings.",
        },
        {
          q: "What happens if a Section 8 Company fails to comply with annual filing requirements?",
          a: "Non-compliance can lead to penalties for the company and its directors, and repeated failures may result in cancellation of the company’s registration.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Section 8 Company Registration"
      subtitle="Non-profit company with limited liability and clear governance."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="Section 8 Company"
      pricing={pricing}
      sections={sections}
    />

  );
}
