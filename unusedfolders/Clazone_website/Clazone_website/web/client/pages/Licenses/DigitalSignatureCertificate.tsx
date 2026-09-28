import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function DigitalSignatureCertificate() {
  const pricing: PricingPlan[] = [
    {
      name: "Class 3 (Individual)",
      priceLabel: "₹999",
      bullets: [
        "PAN/Aadhaar based eKYC",
        "USB token optional",
        "1-year validity",
      ],
    },
    {
      name: "Class 3 (Organization)",
      priceLabel: "₹1,499",
      highlight: true,
      bullets: ["Org KYC support", "USB token optional", "2-year validity"],
    },
    {
      name: "DGFT",
      priceLabel: "₹1,999",
      bullets: [
        "Exporter IEC mapping",
        "USB token optional",
        "1 or 2-year validity",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Register your Class 3 Digital Signature Certificate online—fast and secure.",
        "Simple 3-step process with expert consultation and full registration support.",
        "Affordable, hassle-free, and fully online with complete documentation assistance.",
        "A Digital Signature Certificate (DSC) is an electronic equivalent of a physical signature, legally recognized under the Information Technology Act 2000. It is used to securely authenticate identity while signing electronic documents and conducting transactions online. DSC ensures security, legal validity, and data integrity.",
        "DSCs come in different classes: Class 1, Class 2, and Class 3, each suited for various tasks like filing income tax returns, company registration, e-tendering, and e-auctions.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of DSC",
      items: [
        "Enhanced security and data integrity",
        "Legally valid for signing contracts, filing taxes, and ROC filings",
        "Faster, paperless transactions",
        "Trustworthy authentication and digital record of signing",
        "Integration with workflows and e-governance",
      ],
    },
    {
      kind: "list",
      title: "Eligibility",
      items: [
        "Individuals: personal use, professionals like doctors, lawyers, accountants",
        "Organizations: Companies, LLPs, NGOs, proprietorships",
        "Foreign applicants: business transactions and compliance in India",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Government-issued ID (PAN, Aadhaar, Passport, Driving Licence, Voter ID, Bank Passbook)",
        "Address Proof (Aadhaar, Voter ID, Driving Licence, Utility Bills)",
        "Passport-sized photograph",
        "Organization documents for Org DSC (Certificate of Incorporation, Authorization Letter)",
      ],
    },
    {
      kind: "list",
      title: "Procedure",
      ordered: true,
      items: [
        "Visit a licensed Certifying Authority (CA) website",
        "Fill the DSC application form and select class & validity",
        "Upload required documents and e-sign the form",
        "Pay the applicable fee online",
        "Identity verification (physical/video for Class 3)",
        "DSC issuance and download or USB token delivery",
        "Install DSC and store securely for future use",
      ],
    },
    {
      kind: "list",
      title: "DSC Renewal Online",
      ordered: true,
      items: [
        "Select the type of DSC and validity",
        "Pay renewal fees",
        "Submit updated documents",
        "Mobile & video verification",
        "Obtain new USB token",
        "Download and install renewed DSC",
      ],
    },
    {
      kind: "list",
      title: "Security Aspects",
      items: [
        "Public Key Infrastructure (PKI) for encryption & authentication",
        "Encryption & decryption to secure data",
        "Hardware Security Modules (HSM) for key storage",
        "Certificate Revocation List (CRL) for revoked or expired certificates",
      ],
    },
    {
      kind: "list",
      title: "Applications Across Sectors",
      items: [
        "E-filing taxes, GST returns, and regulatory documents",
        "Banking and financial transactions",
        "Loan applications and digital contracts",
        "E-tendering, e-procurement, and e-auctions",
        "Healthcare: e-prescriptions & medical records",
        "Insurance claims and benefits",
        "HR digital processes",
        "Legal contracts and agreements",
        "EPF access and online transactions",
      ],
    },
    {
      kind: "list",
      title: "Legal Framework",
      items: [
        "Information Technology Act, 2000: legal recognition of DSCs",
        "SEAL Act: standards for electronic authentication and digital signatures",
        "Regulation of Certifying Authorities (CAs) and security compliance",
        "Cybercrime and data protection provisions",
      ],
    },
    {
      kind: "list",
      title: "Common Issues & Troubleshooting",
      items: [
        "Wrong information in application form",
        "Link issues in government portals like GST",
        "Browser incompatibility",
        "Expired certificate",
        "USB token or hardware issues",
      ],
    },
    {
      kind: "list",
      title: "Tips to Resolve Issues",
      items: [
        "Validate DSC regularly",
        "Update software and drivers",
        "Install only authorized certificates",
        "Clear browser cache and restart",
      ],
    },
    {
      kind: "list",
      title: "Future Trends",
      items: [
        "Biometric integration for enhanced authentication",
        "AI & ML for security and fraud detection",
        "Blockchain & decentralized verification",
        "Multi-factor authentication (MFA)",
        "Cloud storage & SaaS integration",
        "Mobile-optimized and user-friendly DSC platforms",
        "IoT-enabled digital signing applications",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        { q: "What is a Digital Signature Certificate (DSC)?", a: "A virtual version of a handwritten signature or ID, legally recognized to sign documents online." },
        { q: "Who needs a Digital Signature Certificate?", a: "Directors, managers, secretaries, authorized signatories, and regulatory authorities." },
        { q: "Why is DSC Registration required for MCA Services?", a: "To securely authenticate filings and documents submitted to government portals." },
        { q: "How is the authenticity of a DSC ensured?", a: "Through PKI, verification by licensed Certifying Authorities, and certificate validation mechanisms." },
        { q: "What types of documents can be signed using a DSC?", a: "Contracts, tax filings, e-tender documents, agreements, and digital HR or financial records." },
        { q: "How does DSC protect my personal information?", a: "DSCs use encryption and secure key management to prevent unauthorized access or tampering." },
        { q: "Can a DSC be used for Income Tax e-filing?", a: "Yes, DSCs are legally accepted for ITR and GST filings." },
        { q: "What is the role of a Trust Service Provider in DSC issuance?", a: "They verify applicant identity and issue DSCs binding the identity to a public key." },
        { q: "How long does it take to obtain a DSC?", a: "Typically same day after successful verification, depending on CA and class of DSC." },
        { q: "Can I use a DSC for Foreign Trade purposes?", a: "Yes, DSCs are used for DGFT registrations, IEC mapping, and e-tendering." },
        { q: "What is the importance of a DSC for electronic transactions in India?", a: "It ensures legal validity, security, authenticity, and traceability of digital transactions." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Register Your Digital Signature Certificate (DSC)"
      subtitle="Class 3 and DGFT DSC issuance with eKYC, token setup, and expert support."
      gradientFrom="from-indigo-700"
      gradientTo="to-cyan-700"
      serviceLabel="Digital Signature Certificate"
      pricing={pricing}
      serviceKey="digital-signature-certificate"
      sections={sections}
    />
  );
}
