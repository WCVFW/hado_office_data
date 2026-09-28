import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function NGORegistration() {
  // Sections for RegistrationTemplate
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Non-Governmental Organisation (NGO) registration in India involves various legal structures depending on the nature and objectives of the organisation.",
        "You can register your NGO as a Society, Trust, or Section 8 Company with expert assistance.",
        "NGOs aiming for national and international recognition often register with the NGO-Darpan Portal, managed by NITI Aayog for transparency and foreign funding eligibility.",
        "Trademark registration, GST registration, and compliance filings are also assisted to establish a robust NGO identity.",
      ],
    },
    {
      kind: "list",
      title: "Role of NGOs in India",
      items: [
        "Advocacy: NGOs advocate for policy changes and raise awareness about critical social issues.",
        "Service Delivery: They provide essential services like healthcare, education, and disaster relief.",
        "Community Development: NGOs work on grassroots levels to empower local communities and improve their quality of life.",
        "Research and Innovation: They conduct research to develop innovative solutions for social problems.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria to Start an NGO",
      items: [
        "Minimum Members: A minimum of three members is required to start an NGO.",
        "Age: All founding members must be at least 18 years old.",
        "Purpose: The NGO must have a clear and specific purpose, focusing on social, environmental, or economic issues.",
        "Documentation: Founders must provide valid identification documents, including PAN cards and address proofs.",
        "Compliance: The NGO must comply with the regulations outlined in the Societies Registration Act of 1860, the Indian Trusts Act of 1882, or the Companies Act of 2013, depending on the type of registration chosen.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for NGO Registration in India",
      items: [
        "Memorandum of Association (MOA): Outlines the NGO's objectives and governing structure.",
        "Articles of Association (AOA): Defines the rules and regulations for internal management.",
        "Identity Proof: PAN, Aadhar, Voter ID, Passport of all founding members.",
        "Address Proof: Proof of registered office like utility bill or rental agreement.",
        "Passport Size Photographs: Recent photographs of all founding members.",
        "Registration Fee: Applicable fees under chosen Act.",
      ],
    },
    {
      kind: "list",
      title: "Acts Governing NGO Registration",
      items: [
        "Societies Registration Act, 1860 – Societies engaged in charitable activities.",
        "Indian Trusts Act, 1882 – Public charitable trusts.",
        "Companies Act, 2013 – Section 8 Companies promoting charitable objectives.",
      ],
    },
    {
      kind: "list",
      title: "NGO Classification",
      items: [
        "Human Rights NGOs – Advocating for human rights and freedoms.",
        "Environmental NGOs – Working towards conservation and combating climate change.",
        "Health NGOs – Improving healthcare access and public health.",
        "Education NGOs – Promoting literacy and skills development.",
        "Women's Rights NGOs – Gender equality and empowerment.",
      ],
    },
    {
      kind: "list",
      title: "NGO Registration Process",
      items: [
        "Choose the Type: Society, Trust, or Section 8 company.",
        "Prepare Documents: MOA, AOA, ID proofs, Address proofs.",
        "Apply for Registration: Submit applications to respective registrar.",
        "Verification and Approval: Registrar verifies and issues registration certificate.",
        "Compliance: Maintain annual filings, proper accounts, and regulatory adherence.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of NGO Registration",
      items: [
        "Legal Recognition: Gain legal status and recognition.",
        "Tax Benefits: Exemptions under sections 12A and 80G.",
        "Credibility: Enhance trust among donors and stakeholders.",
        "Access to Grants: Qualify for government and private funding.",
        "Operational Sustainability: Ensure long-term governance, transparency, and accountability.",
      ],
    },
    {
      kind: "list",
      title: "Ways to Raise Funds for NGOs",
      items: [
        "Donations from individuals, businesses, and philanthropic organisations.",
        "Access to Grants and Funding Opportunities.",
        "Fundraising Events: Charity galas, marathons, concerts.",
        "Corporate Partnerships through CSR initiatives.",
        "Online Campaigns via crowdfunding platforms.",
        "Membership Programs with regular contributions.",
        "Legacy Giving through wills or estate plans.",
      ],
    },
    {
      kind: "faq",
      title: "NGO Registration FAQs",
      qa: [
        {
          q: "What is the main purpose of an NGO?",
          a: "NGOs address social, environmental, educational, and charitable objectives, independent of government control.",
        },
        {
          q: "Is GST applicable for NGOs?",
          a: "Yes, if the NGO's turnover exceeds the threshold or if engaged in taxable services.",
        },
        {
          q: "Who regulates NGOs in India?",
          a: "Societies: Societies Act, 1860; Trusts: Indian Trusts Act, 1882; Section 8 Companies: Companies Act, 2013.",
        },
        {
          q: "What are the eligibility criteria to start an NGO?",
          a: "Minimum 3 members, all above 18, clear objectives, valid ID proofs, and compliance with the respective Act.",
        },
        {
          q: "Can an NGO work in multiple states?",
          a: "Yes, but state-specific approvals may be required.",
        },
        {
          q: "What is the process to apply for FCRA registration?",
          a: "Apply online via Ministry of Home Affairs portal after 3 years of registration under the appropriate Act.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="NGO Registration"
      subtitle="Register your NGO with expert guidance in India."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="NGO Registration"
      sections={sections}
    />
  );
}
