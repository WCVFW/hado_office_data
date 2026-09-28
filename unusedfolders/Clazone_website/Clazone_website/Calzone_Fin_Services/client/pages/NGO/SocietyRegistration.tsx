import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function SocietyRegistration() {
  // Pricing plans (example)
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "₹6,999 + Govt. Fee",
      bullets: [
        "Drafting Memorandum of Association (MOA)",
        "Filing and submission",
        "Document verification",
      ],
    },
    {
      name: "Standard",
      priceLabel: "₹9,999 + Govt. Fee",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "PAN & bank account guidance",
        "Post-registration compliance support",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹14,999 + Govt. Fee",
      bullets: [
        "Everything in Standard",
        "Tax-saving guidance",
        "Annual compliance & advisory",
      ],
    },
  ];

  // Sections with full content
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "A Society is an association of multiple individuals with a common interest, focusing on governance and achieving a common goal.",
        "The Societies Registration Act, 1860 governs the registration and functioning of societies in India.",
        "Societies are typically registered to advance humanities, sciences, literature, or knowledge exchange for a good cause.",
        "Registration ensures legal recognition and allows the society to function effectively.",
      ],
    },
    {
      kind: "list",
      title: "Reasons for Society Registration",
      items: [
        "To support arts",
        "Political education dissemination",
        "To make a donation to a charitable trust",
        "Promotion of literature and science",
        "Establishing funds for military orphans",
        "Building public museums",
        "Construction of public galleries",
        "Establishing libraries",
        "Promotion, dissemination, or instruction of useful knowledge",
        "Natural history museum collections",
        "Assemblages of mechanical and philosophical designs, creations, or tools",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Online Society Registration",
      items: [
        "PAN cards of all members",
        "Account statement",
        "Utility bill, driving license, Aadhaar card",
        "Passport",
        "Articles of Association (AoA)",
        "Terms and conditions of the society",
        "Guidelines to join the society",
        "Address proof",
        "Information of all participants",
      ],
    },
    {
      kind: "list",
      title: "Purpose of Society Registration",
      items: [
        "Gives the society a legal personality to own property, enter into contracts, and sue or be sued",
        "Provides framework for operations: rules, member rights, and election processes",
        "Protects interests of members by defining rights and responsibilities",
        "Facilitates obtaining funding and other resources",
      ],
    },
    {
      kind: "list",
      title: "Memorandum of Association (MOA)",
      items: [
        "Name of the society",
        "Purpose of the society",
        "Address of registered office",
        "Names and addresses of founding members",
        "Rules and regulations of the society",
        "Any amendment must be filed with the Registrar of Societies",
      ],
    },
    {
      kind: "list",
      title: "Online Society Registration Process",
      items: [
        "Members: Minimum 7 members per state, 8 members from 8 distinct states (including Delhi)",
        "Jurisdiction: Registrar of Societies in the state of the registered office",
        "Regulating Act: Societies Registration Act of 1860 governs registration",
        "Property Management: Society owns property and may sell per byelaws",
        "Dissolution: Debts/liabilities settled, remaining funds donated to similar societies",
        "Executive Committee: President, Secretary, Treasurer, Vice President",
        "Annual Compliance: Submit list of managing committee members to Registrar annually",
      ],
    },
    {
      kind: "list",
      title: "Post-Registration Compliance",
      items: [
        "Acquire a PAN card",
        "Establish a bank account",
        "Accounting and bookkeeping",
        "Yearly IT filings",
        "GST registration if applicable",
        "Professional tax registration if required",
        "Observe Registrar of Firm's requirements: AGM resolution, financial info, member list",
      ],
    },
    {
      kind: "list",
      title: "Tax Exemption Applicability",
      items: [
        "Societies must pay taxes like any legitimate enterprise",
        "Exemptions under Section 12A, 80G require completion certificate from Income Tax officials",
      ],
    },
    {
      kind: "list",
      title: "Society Registration Renewal Online",
      items: [
        "Check renewal deadline (annually or bi-annually)",
        "Gather documents: original registration certificate, bylaws, AGM minutes, list of office bearers",
        "Log in to online registration portal",
        "Provide required details: name, registration number, office details",
        "Submit documents in correct format and size",
        "Pay renewal fee online",
        "Review and submit application",
        "Track application status online",
        "Start renewal process well before deadline to avoid delays",
      ],
    },
    {
      kind: "list",
      title: "Recent Updates",
      items: [
        "Societies (Amendment) Act, 2021: Anyone sentenced to 2+ years cannot serve as member or office holder",
        "Amended law enacted by UP Assembly in 2021, notified July 18, 2021",
        "Applies to literary, scientific, benevolent societies, NGOs, and educational societies in UP (~3.5 lakh societies)",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Provides thorough consultation for society registration needs",
        "Handles all paperwork online; attorneys submit application on your behalf",
        "Post-registration expert guidance and compliance support",
        "Data and process secured throughout registration journey",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Online Society Registration",
      qa: [
        { q: "Who is eligible for society registration?", a: "Any group of at least seven members coming together for a common purpose." },
        { q: "What are the main components of a memorandum of association of a society?", a: "Name, purpose, registered office, founding members, rules and regulations." },
        { q: "What will be the rights of the members of the society?", a: "Defined in the MOA, including voting, participation, and benefits." },
        { q: "How can I change the name of my society?", a: "By filing an amendment with the Registrar of Societies following legal procedures." },
        { q: "Can members of society receive profits?", a: "No, societies are non-profit organizations; profits are used for objectives." },
        { q: "How do I register my educational society?", a: "Follow the online registration process with MOA, required documents, and submit to Registrar." },
        { q: "How to register a society?", a: "Draft MOA, collect member details, submit online or offline application to Registrar of Societies." },
        { q: "What is the stamp duty for settlement deeds in Tamil Nadu?", a: "Varies by state; must check state regulations." },
        { q: "Are members of a family allowed to join society?", a: "Yes, but the society must meet the minimum member criteria." },
        { q: "Is society or trust preferable?", a: "Depends on objectives: society for public activities, trust for charitable/private management." },
        { q: "Describe registered societies?", a: "Voluntary associations of individuals with a common objective, legally recognized." },
        { q: "Does society have legal status?", a: "Yes, once registered, a society has legal personality." },
        { q: "Are directors present in registered societies?", a: "Societies have an executive committee, not directors." },
        { q: "What is the Fee for Registration of Society?", a: "Varies by state and service provider; example packages shown above." },
        { q: "For what purpose a Society or an Association is Formed?", a: "To promote education, science, arts, public welfare, or charitable activities." },
        { q: "What is the Minimum number of people required to form a Society?", a: "Minimum seven members are required." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Society Registration"
      subtitle="Register your society online with ease and expert guidance"
      gradientFrom="from-blue-700"
      gradientTo="to-cyan-700"
      serviceLabel="Society Registration"
      pricing={pricing}
      sections={sections}
    />
  );
}
