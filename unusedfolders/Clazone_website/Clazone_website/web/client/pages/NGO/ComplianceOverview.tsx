import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function NGOCompliance() {
  // Pricing plans (example)
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹5,999 + Govt. Fee",
      bullets: [
        "Document preparation & filing guidance",
        "Annual compliance support",
        "Regular consultation",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹9,999 + Govt. Fee",
      highlight: true,
      bullets: [
        "Everything in Basic",
        "Darpan registration assistance",
        "Section 80G & 12A guidance",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹14,999 + Govt. Fee",
      bullets: [
        "Everything in Standard",
        "CSR-1 registration support",
        "Form 10BD & 10BE filing",
        "Complete audit-ready compliance",
      ],
    },
  ];

  // Sections with full content
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "NGO Compliance ensures your organisation meets all regulatory requirements with expert legal assistance.",
        "Our services include documentation, return filing, and ongoing compliance support to keep your NGO audit-ready.",
        "NGO Darpan registration is mandatory for credibility and reporting, while CSR-1 and Section 80G/12A registrations help with donations and tax exemptions.",
      ],
    },
    {
      kind: "list",
      title: "NGO Darpan Registration Overview",
      items: [
        "NGO Darpan is a portal by the Ministry of Rural Development for registration and reporting of NGOs receiving government funding.",
        "It allows NGOs to update information and file reports on fund utilization and activities.",
        "Eligibility criteria include being a non-profit working in rural development or poverty alleviation.",
        "Completion of NGO Darpan registration is mandatory for credibility and tax registration.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for NGO Darpan Registration",
      items: [
        "Copy of registration certificate (PDF/JPG)",
        "PAN card of NGO",
        "PAN & Aadhaar copies of 3 executive committee members",
        "NGO name and address",
        "Registration number and date",
        "Details of 3 executive committee members",
        "Details of government funding and chief area of working",
      ],
    },
    {
      kind: "list",
      title: "NGO Registration / Revalidation Under Section 80G & 12A",
      items: [
        "80G registration: allows donation exemption certificates for donors",
        "12A registration: exempts NGO excess income from tax",
        "Revalidation every 5 years is mandatory",
        "Applications must be made within 1 week of document submission",
        "Recent changes mandate re-validation for already registered NGOs",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for 80G & 12A Registration",
      items: [
        "PAN Card of NGO",
        "NGO address",
        "Registration number & date",
        "PAN & Aadhaar of 3 executive committee members",
        "NGO name / VO",
        "Details of executive committee members",
        "Funding details and chief area of working",
      ],
    },
    {
      kind: "list",
      title: "CSR-1 Registration Overview",
      items: [
        "Mandatory for NGOs receiving CSR funds from companies with net worth > ₹500 Cr, turnover > ₹1,000 Cr, or net profit > ₹5 Cr",
        "Filed with Ministry of Corporate Affairs via Form CSR-1",
        "Provides information on NGO activities, finances, and governance",
        "Approval allows NGO to receive CSR funding",
        "Typical registration timeline: within 1 week after submitting all documents",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for CSR-1 Registration",
      items: [
        "PAN card of NGO registration",
        "Mail ID & mobile number",
        "Details of Governing Body Members",
        "Copy of registration certificate",
        "NGO Darpan ID",
        "Digital Signature of authorised person with PAN",
      ],
    },
    {
      kind: "list",
      title: "Section 8 Companies Annual Compliances",
      items: [
        "Appointment of an auditor",
        "Maintenance of a register",
        "Convening statutory meetings",
        "Report by directors",
        "Financial statements of the company",
        "Tax returns",
        "Filing of financial statements and returns",
      ],
    },
    {
      kind: "list",
      title: "Form 10BD & 10BE",
      items: [
        "10BD: Statement of donations received; filed electronically",
        "Requires digital signature or EVC of authorised person",
        "Includes donor name, address, amount, and payment method",
        "10BE: Certificate containing NGO name, PAN, address, approval number under 80G & 35(1), and donor info",
        "Correction possible by refiling 10BD with corrections",
        "Non-filing consequences: ₹200/day delay fee (Section 234G) and ₹10,000–₹1,00,000 penalty (Section 271K)",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expert lawyers & chartered accountants handle complete NGO compliance",
        "Transparent process with timely updates",
        "CSR-1 registration handled on your behalf",
        "Affordable, hassle-free legal services",
        "Guidance and support throughout the entire compliance process",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Complications in NGO Compliance",
      qa: [
        { q: "What are some common complications in NGO compliance?", a: "Issues include delays in Darpan registration, non-filing of annual returns, missing audit documentation, or non-revalidation of 80G/12A." },
        { q: "How can NGOs ensure ongoing compliance?", a: "Regular consultations, timely filings, proper record-keeping, and expert legal assistance." },
        { q: "What are the consequences of non-compliance for NGOs?", a: "Penalties, suspension of tax exemptions, inability to receive government or CSR funds, and legal notices." },
        { q: "How can NGOs mitigate the risks of non-compliance?", a: "Maintain proper documentation, follow timelines, seek professional guidance, and audit accounts annually." },
        { q: "Can non-compliance result in legal consequences for NGOs?", a: "Yes, including fines, penalties, or legal actions from regulatory authorities." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="NGO Compliance"
      subtitle="Ensure your NGO meets all regulatory requirements with expert guidance"
      gradientFrom="from-purple-700"
      gradientTo="to-pink-700"
      serviceLabel="NGO Compliance"
      pricing={pricing}
      sections={sections}
    />
  );
}
