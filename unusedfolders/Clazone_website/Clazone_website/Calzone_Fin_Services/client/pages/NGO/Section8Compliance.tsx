import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function Section8Compliance() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹7,999 + Govt. Fee",
      bullets: [
        "Annual compliance support",
        "Timely filings and documentation",
        "Audit readiness guidance",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹12,999 + Govt. Fee",
      highlight: true,
      bullets: [
        "Everything in Basic",
        "Full statutory filings (MGT-7, AOC-4, ADT-1)",
        "Financial statements & ITR filing support",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹18,999 + Govt. Fee",
      bullets: [
        "Everything in Standard",
        "Tax exemption guidance (12AA & 80G)",
        "Post-incorporation compliance assistance",
        "Event-based compliance tracking",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview of Section 8 Company Compliance",
      paragraphs: [
        "Section 8 companies in India are non-profit organizations formed under the Companies Act, 2013. They promote social welfare, education, art, science, religion, research, or similar objectives.",
        "Unlike traditional companies, Section 8 companies cannot distribute profits to their members and cannot use the words 'Limited' or 'Private Limited' in their names.",
        "Our compliance services include timely filings, accurate documentation, audit readiness, and consultation with professionals to ensure full regulatory compliance.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Section 8 Company Compliance",
      items: [
        "Charitable Objectives: Promote education, social welfare, religion, and charity.",
        "Limited Liability: Protects members’ personal assets.",
        "No Minimum Capital Requirement: Easy access for non-profit initiatives.",
        "Tax Exemptions: Receive exemptions and benefits under Income Tax Act.",
        "Perpetual Succession: Continuity of the organization despite membership changes.",
        "Ease of Funding: Obtain funds from individuals, government, and organizations.",
        "Recognition and Trust: Builds credibility among stakeholders and donors.",
        "Corporate Structure: Enables efficient management and decision-making.",
        "Social Impact: Tangible impact on community and charitable causes.",
        "Compliance Framework: Ensures transparency, accountability, and legal recognition.",
        "Access to Grants and Funding: Eligibility for government and NGO grants.",
        "Ease of Registration: Simplified registration process for non-profits.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Section 8 Company Compliance",
      items: [
        "Memorandum of Association (MoA)",
        "Articles of Association (AoA)",
        "Certificate of Incorporation",
        "Digital Signature Certificate (DSC)",
        "Financial Statements audited by CA",
        "Auditor's Report",
        "Income Tax Return (ITR-7)",
        "Annual Return (Form MGT-7)",
        "Form AOC-4 (financial statements)",
        "Form ADT-1 (auditor appointment)",
        "Section 12AA Registration (if applicable)",
        "Section 80G Registration (if applicable)",
        "Board resolutions",
        "Minutes of meetings",
        "Statutory registers",
      ],
    },
    {
      kind: "list",
      title: "Compliance Timelines",
      items: [
        "Annual Return (Form MGT-7): Within 60 days of AGM",
        "Financial Statements: Within 30 days of AGM",
        "Income Tax Return (ITR-7): On or before 30th September of following financial year",
      ],
    },
    {
      kind: "list",
      title: "Checklist for Section 8 Company Compliance",
      items: [
        "Obtain Digital Signature Certificates (DSC) for directors and members",
        "Apply for Director Identification Number (DIN) for directors",
        "Reserve a unique name for the Section 8 Company",
        "File incorporation application with MCA",
        "Submit MoA and AoA to MCA",
        "Obtain license from Central Government",
        "Apply for PAN and TAN",
        "Conduct first Board Meeting and AGM",
        "Maintain accounting standards and books of accounts",
        "File annual returns and financial statements with ROC",
        "Comply with tax regulations and income utilization",
        "Obtain approval for changes in MoA and AoA",
        "Prepare annual report",
        "Conduct internal compliance reviews",
      ],
    },
    {
      kind: "list",
      title: "Event-based Annual Compliances",
      items: [
        "Annual General Meeting (AGM) within 6 months of financial year-end",
        "Income Tax Return (ITR) filing by specified due date",
        "Preparation of financial statements within 30 days of AGM",
        "Filing of Annual Return with ROC within 60 days of AGM",
        "At least 4 Board Meetings per calendar year",
        "Intimation to ROC for changes in Board of Directors or registered office",
        "FCRA annual report for foreign contributions (if applicable)",
        "GST compliance and return filing (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "Annual Compliances for Section 8 Company",
      items: [
        "Appointment of Auditor (Form ADT-1)",
        "Maintenance of books of accounts",
        "Conduct AGM and Board Meetings",
        "Prepare and file Financial Statements",
        "File Income Tax Return (ITR-7)",
        "File Annual Return (Form MGT-7)",
        "Compliance under MSME Act, Companies (Acceptance of Deposits) Rules, FCRA (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "Tax Compliance for Section 8 Companies",
      items: [
        "Income Tax exemptions under Sections 11 & 12",
        "12A Registration for tax exemption",
        "80G Registration for donor tax deductions",
        "TDS compliance on payments",
        "GST compliance if applicable",
        "FCRA compliance for foreign contributions",
        "Form 10BB filing with Income Tax Department",
        "Annual audit by qualified CA",
      ],
    },
    {
      kind: "list",
      title: "Process of Section 8 Company Registration",
      items: [
        "Obtain Digital Signature Certificate (DSC)",
        "Apply for Director Identification Number (DIN)",
        "Reserve a unique company name using Form INC-1",
        "Apply for Section 8 License (Form INC-12, approval Form INC-16)",
        "File incorporation forms using SPICe+ (INC-32) with e-MoA (INC-33) & e-AoA (INC-34)",
        "Obtain Certificate of Incorporation from ROC",
        "Post-Incorporation Compliances: PAN, TAN, bank account, Form ADT-1, annual returns, financial statements, 12AA & 80G (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "Penalties in Case of Non-Compliance",
      items: [
        "Firm non-compliance under Section 187: Fine ₹5 lakh",
        "Each officer failure: Fine ₹50,000",
      ],
    },
    {
      kind: "list",
      title: "Due Dates for Section 8 Company Compliances",
      items: [
        "Form AOC-4 (Directors Report): Within 30 days of AGM",
        "Form MGT-7 (Annual Returns): Within 60 days of AGM",
        "Form ITR-6 (Income Tax Returns): 30 September",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Reliable and expert guidance for Section 8 company compliances",
        "Drafting and filing support for documents and approvals",
        "Specialised assistance for smooth functioning of non-profits",
        "Timely updates on regulatory changes",
        "Focus on core objectives while we manage compliance responsibilities",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Section 8 Company Compliance",
      qa: [
        { q: "What are the event-based compliance requirements?", a: "AGM, Board Meetings, financial statements, annual returns, FCRA & GST (if applicable)" },
        { q: "What are the reporting requirements?", a: "Filing financial statements, MGT-7, ITR-7, Form 10BB, and event-based filings with ROC and IT Dept." },
        { q: "What are the record-keeping requirements?", a: "Maintain books of accounts, minutes, statutory registers, and financial documents" },
        { q: "What are the consequences of non-compliance?", a: "Penalties, fines, legal complications, and reputational damage" },
        { q: "Can Section 8 companies claim full tax exemption?", a: "Yes, if 12A registration is obtained and income is applied to charitable objectives" },
        { q: "What happens if I don’t file my annual returns?", a: "Attracts penalties and legal consequences under Companies Act" },
        { q: "Is GST applicable to a Section 8 company?", a: "Yes, if turnover exceeds threshold limit; compliance includes registration and filing returns" },
        { q: "What is the annual compliance charge for a Section 8 company?", a: "Depends on package; typically covers auditor fees, filing fees, and professional assistance" },
        { q: "What are the annual compliance requirements?", a: "AGM, Board Meetings, Annual Return, Financial Statements, ITR, auditor appointment" },
        { q: "What is the limit of Section 8 company audit?", a: "All Section 8 companies require audit regardless of turnover" },
        { q: "What is the exemption for Section 8 companies?", a: "Exemption under Sections 11 & 12 of Income Tax Act for charitable purposes" },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Section 8 Company Compliance"
      subtitle="Expert support to manage all legal and compliance for your Section 8 company"
      gradientFrom="from-purple-700"
      gradientTo="to-pink-700"
      serviceLabel="Section 8 Compliance"
      pricing={pricing}
      sections={sections}
    />
  );
}
