import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function CSR1Filing() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "CSR-1 Registration mechanism was introduced by the Ministry of Corporate Affairs (MCA) to register entities undertaking CSR activities and receive funding from companies.",
        "This mechanism empowers entities to contribute meaningfully to social development by formalizing and regulating CSR efforts in India.",
        "The CSR-1 form shows how CSR funding is managed, CSR activities are organised, and the roles of different entities in this framework.",
      ],
    },
    {
      kind: "list",
      title: "Recent Updates",
      items: [
        "From 1 April 2023, all CSR entities must file annual returns electronically within 60 days after the financial year ends.",
        "This ensures transparency and helps analyse data for monitoring CSR activities.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Must be a Section 8 company, public trust, or society registered under Section 12A and 80G of the Income Tax Act.",
        "Must have a proven track record of at least 3 years in relevant social, environmental, or developmental activities.",
        "Sound governance structure with transparent financial management practices.",
        "Compliant with applicable laws and regulations.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Registration certificate (Section 8 company, trust deed, society memorandum).",
        "PAN card of the entity.",
        "12A and 80G certificates, if applicable.",
        "NGO Darpan ID, if registered on the portal.",
        "Digital Signature Certificate (DSC) of the authorised person.",
        "Resolution authorising the person to sign the form.",
        "Company CSR policy and report (if applicable).",
        "Details of subsidiaries or other entities (if applicable).",
      ],
    },
    {
      kind: "list",
      title: "Types of NGOs Eligible",
      items: [
        "Section 8 Companies with charitable or non-profit objectives.",
        "Public Trusts serving public charitable purposes.",
        "Societies registered under Section 12A and 80G of the Income Tax Act, 1961.",
      ],
    },
    {
      kind: "list",
      title: "How to Register (Form CSR-1 Filing Process)",
      items: [
        "Access the MCA Portal.",
        "Download eForm CSR-1 from 'MCA Services > e-Filing > Company Forms Download'.",
        "Attach required documents: Registration certificate, PAN card, 12A/80G certificates, NGO Darpan ID, DSC, resolution authorising the person.",
        "Fill the form with entity info, registration details, contact info, authorised person details, and subsidiaries if applicable.",
        "Obtain verification from a practising professional (CA, CS, or Cost Accountant).",
        "Upload the verified form to the MCA portal.",
        "Pay applicable filing fees online.",
        "Track the status of your application on the MCA portal.",
      ],
    },
    {
      kind: "list",
      title: "Benefits",
      items: [
        "Access to CSR funds from companies, increasing resources for social impact.",
        "Transparency and accountability in usage of CSR funds.",
        "Enhanced credibility and trustworthiness.",
        "Facilitates collaboration opportunities with companies for CSR projects.",
        "Compliance with MCA regulations and minimising risk of penalties.",
      ],
    },
    {
      kind: "faq",
      title: "CSR-1 Registration FAQs",
      qa: [
        {
          q: "Who needs to file Form CSR-1?",
          a: "All eligible entities seeking CSR funding, such as Section 8 companies, public trusts, and societies registered under Section 12A and 80G, must file Form CSR-1.",
        },
        {
          q: "What happens if a company fails to file Form CSR-1 on time?",
          a: "Failure to file CSR-1 on time may lead to penalties under the Companies Act, 2013, and could affect eligibility for CSR contributions.",
        },
        {
          q: "Can Form CSR-1 be filed electronically?",
          a: "Yes, Form CSR-1 must be filed electronically through the MCA portal.",
        },
        {
          q: "Are there any penalties for errors or inaccuracies in CSR-1 filings?",
          a: "Yes, incorrect or incomplete filings can attract penalties. It is recommended to get the form verified by a practising professional before submission.",
        },
        {
          q: "Is there assistance available for companies unfamiliar with Form CSR-1 filing procedures?",
          a: "Yes, professional legal or accounting support can help companies prepare and file CSR-1 accurately.",
        },
        {
          q: "Can a company amend or update a previously filed CSR-1 form?",
          a: "Yes, companies can update or correct information in a previously filed CSR-1 form as per MCA guidelines.",
        },
        {
          q: "Any industry-specific considerations or exemptions?",
          a: "Some entities may have exemptions depending on their legal structure or CSR policies. Refer to MCA rules for details.",
        },
        {
          q: "When is the deadline for submitting Form CSR-1?",
          a: "The annual return must be filed electronically within 60 days after the end of the financial year.",
        },
        {
          q: "How often is Form CSR-1 required to be filed?",
          a: "Form CSR-1 must be filed annually by all eligible entities.",
        },
        {
          q: "What are the key benefits of ensuring compliance with Form CSR-1 filing requirements?",
          a: "Compliance ensures access to CSR funds, enhances credibility, maintains transparency, and prevents legal penalties.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="CSR-1 Filing"
      subtitle="Register to receive CSR contributions from companies."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="CSR-1 Filing"
      sections={sections}
    />
  );
}
