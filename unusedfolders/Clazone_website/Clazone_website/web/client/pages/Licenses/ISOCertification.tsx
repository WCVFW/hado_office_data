import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function ISOCertification() {
  const pricing: PricingPlan[] = [
    {
      name: "9001 Basics",
      priceLabel: "₹7,999",
      bullets: ["Gap analysis", "Document templates", "Audit coordination"],
    },
    {
      name: "9001 Standard",
      priceLabel: "₹14,999",
      highlight: true,
      bullets: ["Everything in Basics", "Training (online)", "Stage 1 & 2 support"],
    },
    {
      name: "Integrated",
      priceLabel: "₹29,999",
      bullets: ["9001 + 14001 + 45001 guidance", "Implementation plan", "Surveillance calendar"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "ISO certification is a globally recognized credential that ensures a business adheres to international standards for quality, safety, and efficiency.",
        "Key certifications include ISO 9001 for Quality Management, ISO 14001 for Environmental Management, ISO 45001 for Occupational Health & Safety, ISO 27001 for Information Security, and ISO 13485 for Medical Devices.",
        "The process involves gap analysis, internal audits, external audits by accredited certification bodies, and maintaining compliance through surveillance audits.",
        "ISO certification helps businesses enhance credibility, access new markets, improve operational efficiency, and demonstrate commitment to international standards.",
      ],
    },
    {
      kind: "list",
      title: "Standards Covered",
      items: [
        "ISO 9001:2015 – Quality Management System",
        "ISO 14001 – Environmental Management System",
        "ISO 45001 – Occupational Health & Safety",
        "ISO 27001 – Information Security Management System",
        "ISO 13485 – Medical Devices Quality Management",
      ],
    },
    {
      kind: "list",
      title: "Importance of ISO Certification",
      items: [
        "Enhanced credibility and trust with customers and stakeholders",
        "Access to new markets, including government tenders",
        "Operational efficiency and continuous improvement",
        "Competitive advantage over uncertified competitors",
        "Compliance with legal and industry-specific regulations",
        "Employee safety and environmental responsibility",
        "Marketing and branding leverage",
      ],
    },
    {
      kind: "list",
      title: "Eligibility and Who Can Apply",
      items: [
        "Small and Medium Enterprises (SMEs)",
        "Large Corporations",
        "Non-Governmental Organizations (NGOs)",
        "Educational Institutions",
        "Government Entities",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Business Registration Certificate / Certificate of Incorporation",
        "Quality Manuals or Policy Documents",
        "Organizational Structure & Process Flowcharts",
        "Internal Audit Reports",
        "Records of Previous Audits (if applicable)",
        "Aadhaar, PAN, GST Certificate (for business registration)",
        "Employee Training Records",
      ],
    },
    {
      kind: "list",
      title: "ISO Certification Process (Step-by-Step)",
      ordered: true,
      items: [
        "Select the right ISO standard(s) for your business",
        "Develop a Management System and document processes",
        "Conduct internal audits to verify compliance",
        "Choose an accredited Certification Body (CB)",
        "Submit application and required documents",
        "Undergo certification audit (document review + site visit)",
        "Resolve any non-conformities identified during audit",
        "Receive ISO certificate upon successful completion",
        "Maintain certification through internal and surveillance audits",
        "Renew certificate every 3 years following recertification audit",
      ],
    },
    {
      kind: "list",
      title: "Common Challenges & Solutions",
      items: [
        "Lack of management commitment → Ensure top-level support",
        "Employee reluctance → Provide training and awareness",
        "Insufficient resources → Allocate proper budget and personnel",
        "Non-conformities → Perform root cause analysis and corrective action",
        "Delays in certification → Plan timeline and responsibilities clearly",
      ],
    },
    {
      kind: "list",
      title: "Legal Framework in India",
      items: [
        "Bureau of Indian Standards (BIS) sets and certifies standards",
        "National Accreditation Board for Certification Bodies (NABCB) accredits certification bodies",
        "Quality Council of India (QCI) ensures compliance with global standards",
        "Certification bodies perform audits, not ISO directly",
      ],
    },
    {
      kind: "faq",
      title: "Frequently Asked Questions (ISO Certification)",
      qa: [
        {
          q: "What is ISO certification?",
          a: "ISO certification is an internationally recognized credential awarded to organizations meeting standards set by the International Organization for Standardization (ISO).",
        },
        {
          q: "What are the benefits of obtaining ISO certification?",
          a: "Benefits include enhanced credibility, access to new markets, operational efficiency, customer satisfaction, compliance with regulations, and competitive advantage.",
        },
        {
          q: "Which standards are available for certification?",
          a: "Common standards include ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 13485, and others depending on industry requirements.",
        },
        {
          q: "Who issues ISO certificates?",
          a: "Accredited Certification Bodies (CB) issue ISO certificates; ISO itself does not directly certify organizations.",
        },
        {
          q: "How long does the certification process take?",
          a: "Typically a few weeks to months, depending on organization size, readiness, and standard complexity.",
        },
        {
          q: "Is ISO certification mandatory?",
          a: "ISO certification is voluntary, but highly recommended for credibility, compliance, and market access.",
        },
        {
          q: "How often should ISO certification be renewed?",
          a: "Certificates are usually valid for three years, with surveillance audits annually and recertification at expiry.",
        },
        {
          q: "Can multiple ISO standards be certified simultaneously?",
          a: "Yes, integrated certification covering multiple standards (e.g., ISO 9001 + 14001 + 45001) is possible.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="ISO Certification"
      subtitle="From gap analysis to certification with practical templates and end-to-end audit coordination."
      gradientFrom="from-indigo-700"
      gradientTo="to-cyan-700"
      serviceLabel="ISO Certification"
      pricing={pricing}
      sections={sections}
      serviceKey="iso-certification"
    />
  );
}
