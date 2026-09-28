import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function IEC() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹1,499",
      bullets: ["IEC application", "Digital signing", "Certificate download"],
    },
    {
      name: "Standard",
      priceLabel: "₹2,499",
      highlight: true,
      bullets: ["Everything in Basic", "AD code advisory", "Bank letter format"],
    },
    {
      name: "Pro",
      priceLabel: "₹3,499",
      bullets: ["Everything in Standard", "DGFT portal support", "Corrections handling"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Import-Export Code (IEC) is mandatory for every person and organization engaged in importing and exporting from India.",
        "This 10-digit code issued by DGFT enables customs clearance, export benefits, and expansion in international markets.",
        "IEC can be applied by Proprietorships, Partnerships, LLPs, and Companies.",
        "The entire process is online, requiring documents like PAN card, Aadhar card, bank certificate, address proof, and sometimes Digital Signature Certificate (DSC).",
        "IEC is valid for life and doesn’t require annual renewal.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for IEC Registration",
      items: [
        "PAN Card",
        "Identity Proof (Aadhaar, Passport, Voter ID)",
        "Address Proof (Electricity bill, Rent agreement, Property papers)",
        "Bank Certificate or Canceled Cheque",
        "Digital Signature Certificate (DSC) if applying online",
        "Passport-sized Photograph",
        "Certificate of Incorporation / Partnership Deed (if applicable)",
      ],
    },
    {
      kind: "list",
      title: "Who Needs an IEC?",
      items: [
        "Individuals involved in international trade",
        "Companies exporting or importing goods/services",
        "Organizations like Partnerships, Trusts, and Cooperatives trading internationally",
      ],
    },
    {
      kind: "overview",
      title: "Benefits of IEC",
      paragraphs: [
        "Facilitates global trade and customs clearance",
        "Access to government export incentives",
        "Opportunities for business expansion",
        "Lifetime validity without yearly renewal",
      ],
    },
    {
      kind: "overview",
      title: "Step-by-Step IEC Registration Process",
      paragraphs: [
        "Step 1: Online Application on DGFT Website",
        "Step 2: Upload Required Documents",
        "Step 3: Payment of Application Fees",
        "Step 4: Verification and Approval by DGFT",
        "Step 5: Download IEC Certificate",
      ],
    },
    {
      kind: "overview",
      title: "Post-Registration Compliance",
      paragraphs: [
        "Update IEC details if business information changes",
        "Comply with Foreign Trade Policy requirements",
        "Maintain records and file annual returns as required",
        "Cancel or surrender IEC if discontinuing trade",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does IEC registration take?",
          a: "IEC registration is usually completed within 2–5 business days after submission of documents and payment."
        },
        {
          q: "What are the costs involved in IEC registration?",
          a: "The basic registration fee is ₹1,499. Additional services like AD code advisory or corrections may have extra charges."
        },
        {
          q: "Can I use a single IEC for multiple businesses?",
          a: "No, an IEC is issued per PAN. Each business entity requires its own IEC."
        },
        {
          q: "Is IEC mandatory for service exporters?",
          a: "Yes, any entity exporting services from India must have an IEC to comply with DGFT regulations."
        },
        {
          q: "How to check the status of my IEC application?",
          a: "You can check the status by logging into the DGFT portal using your application credentials."
        },
      ],
    }

  ];

  return (
    <RegistrationTemplate
      title="Import/Export Code (IEC) Registration"
      subtitle="DGFT IEC with e-signing and AD code advisory."
      gradientFrom="from-indigo-700"
      gradientTo="to-cyan-700"
      serviceLabel="IEC Registration"
      pricing={pricing}
      sections={sections}
    />
  );
}
