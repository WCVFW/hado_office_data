import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function Sec80G12A() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "A non-governmental organisation (NGO), such as a Section 8 Company or a charity trust, can obtain an 80G certificate which allows donors to claim tax exemption for their donations.",
        "NGOs are groups that engage in charitable and nonprofit endeavours. If they are not registered under Section 12A of the Income Tax Act, they must pay tax on their income. Section 12A registration provides a one-time tax exemption for eligible NGOs, trusts, and Section 8 companies.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Section 80G-12A Registration",
      items: [
        "Tax Exemption: NGOs or societies are exempt from paying taxes by claiming this exemption using the 12A certificate.",
        "Proof of Existence: Legally declares the registered status of the entity and allows access to loans or government grants.",
        "More Contributors: Enhances NGO credibility and attracts more donors.",
        "Donors May Use This Certificate: Helps donors reduce tax obligations.",
        "Government Support: Increases chances of receiving grants and funding from the government.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for 80G Registration",
      items: [
        "Trust deed (for trusts).",
        "Memorandum of Association (MOA).",
        "Registration certificate (for Section 8 companies or societies).",
        "Certificate of no objection from the property owner.",
        "Form 10G.",
        "NGO PAN card.",
        "Utility bill or property tax receipt.",
        "Donor details: names, addresses, PAN.",
        "Last three years’ books of accounts and tax returns.",
        "List of welfare initiatives with a three-year progress report.",
        "Latest business documents.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for 12A Registration",
      items: [
        "Certificate of incorporation (for Section 8 companies) with MOA.",
        "Articles of Association (AOA).",
        "Legal ID proof of the Trust/NGO.",
        "Trust deed.",
        "Registration certificate.",
        "Memorandum of Association (MOA).",
        "Three-year bank account statements of the Trust.",
        "PAN of the firm.",
      ],
    },
    {
      kind: "list",
      title: "Procedure for 80G Registration",
      items: [
        "Submit essential paperwork and application to the Commissioner of Income Tax (Exemption).",
        "Income Tax department conducts on-site verification.",
        "Additional documents may be requested if required.",
        "Commissioner issues the 80G certificate after verification.",
      ],
    },
    {
      kind: "list",
      title: "Procedure for 12A Registration",
      items: [
        "File an application in Form 10A as per jurisdictional Income Tax Commissioner guidelines.",
        "Submit required documents for verification.",
        "Commissioner verifies the legitimacy of the organisation's activities.",
        "Additional documents may be requested.",
        "Commissioner issues a written declaration granting 12A registration.",
        "Applicant has the right to be heard if application is rejected.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expert guidance for Section 80G and 12A registration.",
        "Accurate documentation and filing without errors.",
        "Professional support for Section 8 company registration and compliance.",
        "Quick approval process with legal assistance.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Section 80G-12A Registration",
      qa: [
        {
          q: "What is an 80G certificate?",
          a: "An 80G certificate allows donors to claim tax exemption for donations made to the NGO or trust. It requires proper documentation and receipts to authorize the exemption.",
        },
        {
          q: "Why is 12A registration necessary?",
          a: "12A registration exempts the NGO or trust from paying income tax on its income, ensuring that it can utilise its funds entirely for charitable purposes.",
        },
        {
          q: "Can we combine 12A and 80G applications?",
          a: "Yes, NGOs can apply for both registrations simultaneously, but each form requires specific documentation and procedures.",
        },
        {
          q: "Are 12A and 80G the same?",
          a: "No. 12A provides income tax exemption for the NGO’s earnings, while 80G allows donors to claim tax deductions for contributions made to the NGO.",
        },
        {
          q: "Who is qualified to register under 12A?",
          a: "Trusts, Section 8 companies, and societies engaging in charitable or non-profit activities are eligible to apply for 12A registration.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Sec. 80G & Sec. 12A Registration"
      subtitle="Secure tax exemptions and enable donor deductions for your NGO."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="80G & 12A"
      sections={sections}
    />
  );
}
