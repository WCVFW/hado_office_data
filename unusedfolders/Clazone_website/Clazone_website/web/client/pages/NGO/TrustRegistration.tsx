import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function TrustRegistration() {
  // Pricing plans
  const pricing: PricingPlan[] = [
    {
      name: "Basic Plan",
      priceLabel: "₹4,999 + GST",
      bullets: [
        "Legal consultation on trust type",
        "Drafting MOA & trust deed",
        "Document preparation",
      ],
    },
    {
      name: "Premium Plan",
      priceLabel: "₹9,999 + GST",
      highlight: true,
      bullets: [
        "Everything in Basic Plan",
        "Filing & submission of application",
        "80G/12A guidance & compliance support",
        "Trust registration certificate issuance",
      ],
    },
  ];

  // Sections
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Trust registration online in India refers to the formal process of legally establishing a trust under the Indian Trusts Act.",
        "A trust is a legal arrangement where a person creating the trust (settlor) transfers property to trustees, who manage it for the benefit of designated beneficiaries.",
        "While trust registration is not mandatory under Indian law, registering a trust provides legal recognition, enhances public credibility, and enables eligibility for tax exemptions and government benefits under the Income Tax Act.",
        "Vakilsearch simplifies the entire process—from drafting the trust deed to preparing documents, submitting them, and obtaining the trust registration certificate—ensuring a compliant and stress-free experience.",
      ],
    },
    {
      kind: "list",
      title: "What is a Trust Registration in India?",
      items: [
        "Trust registration is the legal process of formally creating a trust under Indian law.",
        "Trusts can be formed for charitable purposes, private purposes, religious purposes, or public purposes.",
        "Trusts are governed by multiple acts: Indian Trusts Act, 1882; Charitable and Religious Trusts Act, 1920; Income Tax Act, 1961; Registration Act, 1908; Societies Registration Act, 1860.",
      ],
    },
    {
      kind: "list",
      title: "Types of Trusts in India",
      items: [
        "Charitable Trusts: Established for the benefit of the public (education, healthcare, poverty relief).",
        "Private Trusts: Created for specific individuals or family members, typically for estate planning.",
        "Public Trusts: Operate for public welfare, funded by donations and monitored by charity commissioner.",
        "Religious Trusts: For promoting religion or managing temples.",
        "Revocable & Irrevocable Trusts: Revocable can be modified; irrevocable cannot be altered.",
        "Testamentary Trusts: Created through a will and effective after settlor's death.",
      ],
    },
    {
      kind: "list",
      title: "Why Register a Trust?",
      items: [
        "Legal Protection: Ensures legal rights over trust property.",
        "Tax Benefits: Registered charitable trusts are eligible for 80G and 12A exemptions.",
        "Public Credibility: Increases donor confidence and transparency.",
        "Access Government Benefits: Required for some state and central schemes.",
        "Proper Administration: Roles and responsibilities defined in trust deed.",
        "Financial Advantages: Easier to open bank account, receive donations, and manage funds.",
      ],
    },
    {
      kind: "list",
      title: "Who Should Register a Trust?",
      items: [
        "NGO Founders: Running public welfare projects.",
        "Individuals & Families: Managing ancestral wealth or property.",
        "Religious Groups: Establishing religious trusts.",
        "Philanthropists: Setting up charitable trusts for education, health, or public service.",
        "Settlor/Trustees: Anyone wanting a legally structured arrangement to transfer assets.",
      ],
    },
    {
      kind: "list",
      title: "Trust Deed in India: Key Clauses",
      items: [
        "Name Clause: Legal name under which the trust operates.",
        "Objective Clause: Specifies main objective of the trust.",
        "Trustees Clause: Responsibilities and powers of trustees.",
        "Beneficiaries Clause: Rights of beneficiaries.",
        "Property Clause: Description of trust property.",
        "Dissolution Clause: Terms under which trust may be dissolved.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Trust Registration Online",
      items: [
        "Trust deed on non-judicial stamp paper",
        "ID proof (Aadhar/PAN/Passport) of settlor and trustees",
        "Address proof of settlor and trustees",
        "PAN card of the trust",
        "Passport-size photographs",
        "No-objection certificate (if renting a physical office address)",
        "Utility bill of trust property",
        "Signature of settlor and trustees",
      ],
    },
    {
      kind: "list",
      title: "Key Parties Involved",
      items: [
        "Settlor: Forms the trust by transferring property.",
        "Trustee(s): Manage the trust per the trust deed (minimum 2 required).",
        "Beneficiaries: Receive trust benefits.",
        "Registrar: Approves registration under the Registration Act.",
        "Charity Commissioner: Oversees public charitable and religious trusts.",
      ],
    },
    {
      kind: "list",
      title: "Step-by-Step Trust Registration Process",
      items: [
        "Choose Name: Must be distinct and comply with Emblems and Names Act.",
        "Select Settlor and Trustees: Must be Indian residents; minimum two trustees.",
        "Draft MOA: Describes trust’s main objective.",
        "Draft Trust Deed: On non-judicial stamp paper with all necessary clauses.",
        "Submit to Registrar: Along with PAN, address proof, ID proof, etc.",
        "Obtain Trust Registration Certificate: Once approved, download certificate.",
        "Open Bank Account: In the name of registered trust.",
      ],
    },
    {
      kind: "list",
      title: "Trust Registration Cost in India",
      items: [
        "Stamp duty: INR 100 – 1,000 depending on state.",
        "Vakilsearch fees: Starting from INR 4,999 + GST.",
        "Registration fees: Varies by state and trust type.",
        "All-inclusive pricing with no hidden charges.",
      ],
    },
    {
      kind: "list",
      title: "Common Mistakes to Avoid",
      items: [
        "Invalid Trust Deed – missing or vague clauses.",
        "Incomplete Documents – missing PAN or address proof.",
        "Wrong Trust Type – choosing private when public is needed.",
        "Improper Trustee Roles – conflicting responsibilities.",
        "Not Registering the Deed – trust lacks legal validity without registration.",
      ],
    },
    {
      kind: "list",
      title: "How Vakilsearch Simplifies the Process",
      items: [
        "Legal Consultation: Expert advice on trust type and deed.",
        "Document Preparation: Drafting MOA, trust deed, and application forms.",
        "Filing & Submission: Complete end-to-end registration support.",
        "Certificate Issuance: Receive your trust registration certificate quickly.",
      ],
    },
    {
      kind: "faq",
      title: "Trust Registration FAQs",
      qa: [
        { q: "How can a trust be registered?", a: "By drafting trust deed, submitting required documents to registrar, and obtaining registration certificate." },
        { q: "Is trust registration mandatory?", a: "Not mandatory for private trusts, but recommended for legal recognition and tax benefits." },
        { q: "What are the documents required?", a: "Trust deed, ID proof, address proof, PAN card, photographs, utility bills, etc." },
        { q: "Is it compulsory to register a trust?", a: "No, but registration provides legal protection and tax exemptions." },
        { q: "Can a trust be registered online?", a: "Yes, via platforms like Vakilsearch which assist in filing and submission." },
        { q: "How to get a trust certificate?", a: "After approval from registrar, download certificate from official portal or receive from service provider." },
        { q: "How many types of trusts are there?", a: "Charitable, Private, Public, Religious, Revocable, Irrevocable, and Testamentary trusts." },
        { q: "How many members are required?", a: "Minimum two trustees." },
        { q: "What are the benefits?", a: "Legal recognition, tax exemptions, public credibility, access to grants, and financial management." },
        { q: "What type of trust is best?", a: "Depends on purpose: charitable for public welfare, private for family estate planning." },
        { q: "Is a physical office address necessary?", a: "Required for certain registrations; some private trusts may not need it." },
        { q: "How long does registration take?", a: "Typically 15–30 days depending on state and completeness of documents." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Trust Registration"
      subtitle="Expert-assisted 100% online trust registration process in India"
      gradientFrom="from-teal-700"
      gradientTo="to-emerald-700"
      serviceLabel="Trust Registration"
      pricing={pricing}
      sections={sections}
    />
  );
}
