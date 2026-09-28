import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function FSSAI() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic Registration",
      priceLabel: "₹1,299 + Govt. Fee",
      bullets: [
        "Basic FSSAI registration",
        "Application drafting",
        "Certificate download",
      ],
    },
    {
      name: "State License",
      priceLabel: "₹3,999 + Govt. Fee",
      highlight: true,
      bullets: [
        "Everything in Basic Registration",
        "Documentation support",
        "Inspections guidance",
      ],
    },
    {
      name: "Central License",
      priceLabel: "₹7,999 + Govt. Fee",
      bullets: [
        "Everything in State License",
        "Plant layout guidance",
        "Hygiene plan support",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Every food business in India, whether a small vendor or a large manufacturer, is legally required to complete FSSAI Registration online and obtain a food license to ensure food safety and consumer trust.",
        "FSSAI registration is mandatory for anyone involved in production, processing, packaging, distribution, or sale of food. Non-compliance can lead to penalties or business closure.",
      ],
    },
    {
      kind: "overview",
      title: "What is FSSAI Registration?",
      paragraphs: [
        "FSSAI registration is a basic license requirement set by the Food Safety and Standards Authority of India for food business operators (FBOs).",
        "It monitors the quality of food products, health supplements, proprietary foods, and food ingredients, ensuring compliance with safety standards.",
        "After registration, FBOs receive an FSSAI license, which guarantees safe and hygienic food production, storage, and distribution.",
      ],
    },
    {
      kind: "overview",
      title: "The Food Safety and Standards Act, 2006",
      paragraphs: [
        "This act establishes FSSAI and regulates food safety and standards in India. It mandates registration for businesses involved in manufacturing, processing, packaging, storage, distribution, and sale of food items.",
      ],
    },
    {
      kind: "list",
      title: "Who Needs FSSAI Registration?",
      items: [
        "Petty retailers",
        "Dairy units",
        "Vegetable oil processing units",
        "Pulses milling units",
        "Medical stores selling food items or supplements",
        "Merchant exporters of food",
        "Temporary stall holders",
        "Foot or movable carts",
        "Fixed stalls",
        "Food vending agencies",
        "Large-scale food businesses",
        "Food businesses operating from food premises",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Basic Registration: Small-scale/home-based vendors (Turnover ≤ ₹12 Lakh/year)",
        "State License: Medium-sized businesses within one state (Turnover ₹12 Lakh – ₹20 Cr/year)",
        "Central License: Large/multi-state businesses, import/export operators (Turnover > ₹20 Cr/year)",
      ],
    },
    {
      kind: "list",
      title: "FSSAI Registration Checklist",
      items: [
        "Valid Documents: ID proof, business address proof, passport photos of applicant/key personnel",
        "Food Business Type: Manufacturing, retail, catering, storage, distribution, or home-based",
        "Turnover Bracket: Determine whether Basic, State, or Central License is required",
        "Business Address: Fixed and verifiable location",
        "FSSAI Compliance Practices: Follow hygiene and safety guidelines",
      ],
    },
    {
      kind: "list",
      title: "Benefits of FSSAI Registration",
      items: [
        "Legal recognition to operate",
        "Facilitates business expansion",
        "Use of FSSAI logo on products",
        "Builds consumer trust",
        "Easier access to finance and investors",
      ],
    },
    {
      kind: "list",
      title: "Types of FSSAI Licenses",
      items: [
        "Basic Registration: Up to ₹12 Lakh/year, small-scale businesses, issued by Local/State Food Safety Dept.",
        "State License: ₹12 Lakh – ₹20 Cr/year, medium-scale, issued by State Food Safety Authority",
        "Central License: Above ₹20 Cr/year or multi-state, large manufacturers, importers/exporters, issued by Central Food Safety Authority",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Photo ID Proof (Aadhaar, PAN, Passport, Voter ID)",
        "Business Registration Proof (Incorporation certificate, partnership deed, etc.)",
        "Address Proof (Rent agreement, utility bills, ownership documents)",
        "Food Safety Plan (if applicable)",
        "Supporting documents: Declaration forms, list of food products, NOC from municipal corporation, annual return for manufacturers",
      ],
    },
    {
      kind: "list",
      title: "FSSAI Registration Process",
      ordered: true,
      items: [
        "Choose appropriate license type (Basic, State, Central)",
        "Prepare required documents",
        "Submit application (Form A for Basic, Form B for State/Central)",
        "Pay government fees online",
        "Verification & inspection (if applicable)",
        "Receive FSSAI registration certificate digitally",
      ],
    },
    {
      kind: "list",
      title: "FSSAI Registration Fees",
      items: [
        "Basic Registration: ₹100 per year (1–5 years validity)",
        "State License: ₹2,000 per year (1–5 years validity)",
        "Central License: ₹7,500 per year (1–5 years validity)",
      ],
    },
    {
      kind: "list",
      title: "Validity and Renewal",
      items: [
        "Renew at least 30 days before expiry",
        "Late renewal incurs penalties",
        "Maintains continuity of business",
        "Avoid fines and legal issues",
        "Maintains customer trust",
      ],
    },
    {
      kind: "list",
      title: "Legal Penalties",
      items: [
        "Food quality not up to standards: ₹2 Lakh (Petty manufacturer – ₹25,000)",
        "Sub-standard food: ₹5 Lakh",
        "Misbranded food: ₹3 Lakh",
        "False description/deceptive advertising: ₹10 Lakh",
        "Extraneous matter in food: ₹1 Lakh",
        "Disregard food safety officer instructions: ₹2 Lakh",
        "Unhygienic processing/manufacture: ₹1 Lakh",
      ],
    },
    {
      kind: "overview",
      title: "Why Choose Vakilsearch?",
      paragraphs: [
        "End-to-end support from document preparation to license delivery",
        "Expert guidance from experienced FSSAI consultants",
        "Quick turnaround and affordable pricing",
        "Proven credibility with 18,000+ real reviews across India",
      ],
    },
    {
      kind: "faq",
      title: "FSSAI Registration FAQs",
      qa: [
        {
          q: "What is FSSAI Registration?",
          a: "FSSAI Registration is a mandatory license for all food business operators in India to ensure food safety and compliance with the Food Safety and Standards Act."
        },
        {
          q: "Is FSSAI registration mandatory?",
          a: "Yes, all food business operators, including small vendors and large manufacturers, must obtain FSSAI registration or license to legally operate."
        },
        {
          q: "Can I apply for a food license online?",
          a: "Yes, FSSAI registration can be completed online through the FSSAI portal or via legal service providers."
        },
        {
          q: "What is the income limit for FSSAI?",
          a: "Income/turnover determines the license type: Basic (upto ₹12 Lakhs/year), State License (₹12 Lakhs – ₹20 Crores/year), Central License (above ₹20 Crores/year)."
        },
        {
          q: "How to do FSSAI registration online?",
          a: "Prepare the required documents, select the appropriate license type, fill Form A or B, pay the fees online, and submit the application for approval."
        },
        {
          q: "Is GST compulsory for a FSSAI license?",
          a: "GST is not mandatory for obtaining FSSAI registration, but it may be required for your business separately as per GST rules."
        },
        {
          q: "How much does a FSSAI certificate cost?",
          a: "Fees depend on license type: Basic – ₹100/year, State – ₹2,000/year, Central – ₹7,500/year (excluding professional service fees)."
        },
        {
          q: "Which are the three types of FSSAI license?",
          a: "The three types are: Basic Registration, State License, and Central License, depending on turnover and scale of operations."
        },
        {
          q: "What is the turnover limit for a food license?",
          a: "Turnover limits: Basic – ≤ ₹12 Lakhs/year, State – ₹12 Lakhs to ₹20 Crores/year, Central – > ₹20 Crores/year or multi-state operations."
        },
        {
          q: "What documents are required for a FSSAI licence?",
          a: "Required documents include: Photo ID, business registration proof, address proof, food safety plan, list of products, municipal NOC, and supporting declaration forms."
        },
      ],
    },
    {
      kind: "list",
      title: "FSSAI Registration Customized by States and Cities",
      items: [
        "Jharkhand",
        "Karnataka",
        "West Bengal",
        "Andhra Pradesh",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="FSSAI (Food License)"
      subtitle="Apply for FSSAI registration or license for your food business online."
      gradientFrom="from-indigo-700"
      gradientTo="to-cyan-700"
      serviceLabel="FSSAI License"
      pricing={pricing}
      sections={sections}
      serviceKey="fssai-license"
    />
  );
}
