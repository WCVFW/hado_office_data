import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function DarpanRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "NITI Aayog Darpan Registration allows NGOs, trusts, and societies to get officially listed on the Darpan portal to access government schemes and funding.",
        "We help with document verification, portal mapping, and complete registration guidance to ensure eligibility and approval.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "The organisation must be a registered NGO, trust, society, or Section 8 Company.",
        "Must have been operational for at least 3 years.",
        "Provide audited financial statements of the last 3 years.",
        "Must have PAN, registration certificate, and verified activity reports.",
        "Organisation should have objectives aligned with social, cultural, educational, or charitable activities.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Darpan Registration",
      items: [
        "Official recognition on NITI Aayog portal.",
        "Eligibility to apply for government schemes, grants, and CSR funding.",
        "Enhanced credibility among donors and stakeholders.",
        "Simplified process for reporting and compliance to the government.",
        "Better visibility for collaboration with central and state government initiatives.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "PAN of the organisation.",
        "Registration certificate of trust/society/Section 8 Company.",
        "Audited financial statements of last 3 years.",
        "Activity report and annual report.",
        "Board resolution approving the registration.",
        "List of key functionaries with ID proofs.",
      ],
    },
    {
      kind: "list",
      title: "Darpan Registration Process",
      items: [
        "Step 1: Prepare all required documents and financial statements.",
        "Step 2: Create an account on the NITI Aayog Darpan portal.",
        "Step 3: Fill the online application form with organisation details.",
        "Step 4: Upload required documents for verification.",
        "Step 5: Submit application and track approval status on the portal.",
        "Step 6: Upon approval, organisation receives a unique Darpan ID for future applications and reporting.",
      ],
    },
    {
      kind: "list",
      title: "Darpan Portal Advantages",
      items: [
        "Centralised platform for NGOs and government scheme access.",
        "Transparency in government fund allocation.",
        "Easy reporting and monitoring of funded projects.",
        "Facilitates CSR and international collaborations.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Darpan Registration",
      qa: [
        { q: "What is NITI Aayog Darpan?", a: "It is a portal managed by NITI Aayog to register NGOs, societies, and trusts to access government schemes, CSR funds, and grants." },
        { q: "Who is eligible for Darpan registration?", a: "NGOs, societies, trusts, and Section 8 Companies that are operational for at least 3 years and have valid registration documents are eligible." },
        { q: "What documents are required for registration?", a: "PAN, registration certificate, audited financial statements, activity reports, board resolutions, and ID proofs of key functionaries." },
        { q: "How long does Darpan registration take?", a: "It typically takes 2–4 weeks depending on document verification and portal processing." },
        { q: "Can an organisation update its details after registration?", a: "Yes, organisations can update their profile, add new projects, and submit annual reports on the portal." },
        { q: "Is Darpan registration mandatory for receiving government grants?", a: "While not mandatory for all grants, Darpan registration increases eligibility and ease of applying for central and state government schemes." },
        { q: "What is a Darpan ID?", a: "It is a unique identifier issued to an NGO or trust upon successful registration, used for applications and reporting on the portal." },
        { q: "Can foreign-funded NGOs register on Darpan?", a: "Yes, foreign-funded NGOs must provide additional FCRA documentation along with standard Darpan registration documents." },
        { q: "Does Darpan registration expire?", a: "No, the Darpan registration is valid indefinitely, but organisations need to submit annual reports and maintain active compliance." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Darpan Registration"
      subtitle="Get listed with NITI Aayog Darpan portal to access government schemes."
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="Darpan Registration"
      sections={sections}
    />
  );
}
