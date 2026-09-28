import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function FCRARegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "The Foreign Contribution Regulation Act (FCRA) Registration allows organisations engaged in cultural, economic, educational, religious, or social activities to legally accept foreign contributions. Managed by the Ministry of Home Affairs, this ensures foreign donations are regulated and utilised for intended purposes.",
        "We guide eligibility, SBI-NDMB FCRA bank account setup, FC-3A filings, renewal, and annual return processes.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for FCRA Registration",
      items: [
        "Be a registered society under the Societies Registration Act, 1860, a trust under the Indian Trusts Act, 1882, or a Section 8 Company under the Companies Act, 2013.",
        "Organisation must have been in existence for at least three years.",
        "The entity should have spent at least ₹10,00,000/- over the last three years on its aims and objectives, excluding administrative expenditure.",
        "Provide audited statements of income and expenditure for the past three years.",
        "Activities and objectives must align with permissible purposes for receiving foreign contributions.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of FCRA Registration",
      items: [
        "Access to foreign funding for projects and initiatives.",
        "Increased credibility and trustworthiness among international donors.",
        "Enhanced transparency and accountability of funds utilisation.",
        "Support for cultural, social, economic, educational, or religious programs.",
        "Compliance with legal requirements, avoiding penalties.",
      ],
    },
    {
      kind: "list",
      title: "Checklist for FCRA Registration",
      items: [
        "Ensure your organization is a trust, society, or Section 8 Company operational for at least three years.",
        "Form FC-3A to apply for registration.",
        "Registration certificate / Trust deed.",
        "Memorandum of Association / Articles of Association.",
        "Activity report and audited financial statements.",
      ],
    },
    {
      kind: "list",
      title: "Types of FCRA Registration",
      items: [
        "Prior Permission Certificate (PPC): Temporary registration granted for one year, suitable for new NGOs or specific projects.",
        "Permanent Registration Certificate (PRC): Valid for 5 years, requires a minimum 3-year track record demonstrating responsible utilisation of foreign contributions.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for FCRA Registration",
      items: [
        "Registration Certificate of Association (1 MB PDF).",
        "Memorandum of Association / Trust deed (5 MB PDF).",
        "Activity report for the last 3 years (3 MB PDF).",
        "Audited statement of accounts for the last 3 years (5 MB PDF).",
        "Affidavit of each key functionary (1 MB PDF).",
        "Chief Functionary signature (140x60 px, 50 KB).",
        "Seal of the Association (140x60 px, 100 KB).",
      ],
    },
    {
      kind: "list",
      title: "FCRA Registration Process",
      items: [
        "Step 1: Set up an account on the official FCRA website.",
        "Step 2: Fill out online application form (FC-3A) and upload documents.",
        "Step 3: Pay registration fee online.",
        "Step 4: Await review by FCRA department and provide additional information if requested.",
        "Step 5: Upon approval, receive FCRA registration certificate electronically (valid for 5 years).",
      ],
    },
    {
      kind: "list",
      title: "FCRA Bank Account",
      items: [
        "Open FCRA account in State Bank of India, Main Branch, 11, Sansad Marg, New Delhi-110001.",
        "This account must be used exclusively for foreign contributions.",
      ],
    },
    {
      kind: "list",
      title: "FCRA Renewal & Annual Return",
      items: [
        "FCRA registration is valid for 5 years; renewal (FC-3C) must be applied six months before expiry.",
        "Annual return (FC-4) must be filed within 9 months of fiscal year end (December 31) if foreign contributions exceed Rs. 1 crore.",
        "Returns include audited accounts and receipts from foreign sources.",
      ],
    },
    {
      kind: "list",
      title: "Prohibitions & Exceptions",
      items: [
        "Prohibited: Fictitious entities, religious conversion activities, involvement in communal tension, foreign funds for journalists, politicians, or political organisations.",
        "Exceptions: Certain government entities engaged in international cooperation, diplomatic activities, or aid programs.",
      ],
    },
    {
      kind: "list",
      title: "Penalties for Violation",
      items: [
        "Penalties up to three times the amount of foreign contributions received illegally.",
        "Suspension or cancellation for providing false information.",
        "Imprisonment, fines, or seizure of contributions for misrepresentation.",
        "Confiscation of accounts for non-compliance.",
      ],
    },
    {
      kind: "list",
      title: "FCRA Registration Fees",
      items: [
        "Prior Permission: ₹5000/-*",
        "Permanent Registration: ₹10,000/-*",
        "*Fee structure subject to change",
      ],
    },
    {
      kind: "list",
      title: "How Vakilsearch Helps",
      items: [
        "Expert guidance on eligibility and documentation.",
        "Document preparation and review for compliance.",
        "Application filing (FC-3A) with MHA.",
        "Continuous follow-up and query handling.",
        "Ongoing compliance support for renewal and annual returns.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs for FCRA Registration",
      qa: [
        {q: "What is FCRA full form?", a: "FCRA stands for Foreign Contribution Regulation Act." },
        {q: "Can an organisation receive foreign contributions without FCRA registration?", a: "No, organisations must have valid FCRA registration or prior permission to legally accept foreign funds." },
        {q: "How long does it take to obtain FCRA registration?", a: "It generally takes a few months depending on verification and documentation compliance." },
        {q: "What are the penalties for late filing of annual returns under FCRA?", a: "Late filing may lead to fines, suspension, or cancellation of FCRA registration." },
        {q: "Can FCRA registration be suspended or cancelled?", a: "Yes, the government may suspend or cancel registration for violations or non-compliance." },
        {q: "What should an organisation do if there are changes in its executive committee or key functionaries?", a: "Inform the FCRA department promptly and submit the necessary updated documents." },
        {q: "Is it mandatory to have a designated FCRA bank account?", a: "Yes, FCRA funds must be received only through the designated SBI-NDMB account." },
        {q: "What types of foreign contributions are prohibited under FCRA?", a: "Contributions for political purposes, religious conversion, or entities with criminal background are prohibited." },
        {q: "Can foreign contributions be transferred to another organisation?", a: "No, foreign contributions cannot be transferred without proper government approval." },
        {q: "What is the process for surrendering FCRA registration?", a: "Submit an application on the FCRA portal and follow the prescribed procedures for cancellation." },
        {q: "How can an organisation ensure compliance with FCRA regulations?", a: "Maintain proper accounts, file annual returns timely, and adhere to permitted purposes of foreign contributions." },
        {q: "What are speculative investments, and are they allowed under FCRA?", a: "Speculative investments are high-risk investments; FCRA restricts using foreign funds for speculative purposes." },
        {q: "What role does the Ministry of Home Affairs play in FCRA registration?", a: "The MHA administers FCRA registrations, monitors compliance, and approves or rejects applications." },
        {q: "Are there any exemptions under FCRA for certain organisations or activities?", a: "Yes, some government entities and approved activities are exempted." },
        {q: "What happens if an organisation fails to renew its FCRA registration on time?", a: "Failure to renew may lead to suspension or cancellation of registration and inability to legally receive foreign contributions." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="FCRA Registration"
      subtitle="Foreign contribution approval with banking and filings guidance."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="FCRA Registration"
      sections={sections}
    />
  );
}
