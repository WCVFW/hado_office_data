import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function DPRService() {
  const pricing: PricingPlan[] = [
    {
      name: "Lite",
      priceLabel: "₹24,999",
      bullets: ["Project outline", "Basic financials", "Draft DPR"],
    },
    {
      name: "Standard",
      priceLabel: "₹49,999",
      highlight: true,
      bullets: ["Everything in Lite", "Detailed assumptions", "Bank-ready DPR"],
    },
    {
      name: "Premium",
      priceLabel: "₹79,999",
      bullets: ["Everything in Standard", "Sensitivity analysis", "Presentation deck"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "DPR stands for Detailed Project Report. It is a comprehensive document outlining all aspects of a proposed project, from conception to completion. DPRs are used by investors, lenders, and government agencies to assess feasibility and viability.",
        "A well-prepared DPR significantly enhances your chances of securing funds for your project. At Vakilsearch, we provide professional DPR drafting to help entrepreneurs, startups, and established businesses secure funding.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Choosing Vakilsearch for Your DPR",
      items: [
        "Higher Loan Approval Chances – Comprehensive and compliant DPRs improve funding success.",
        "Time and Cost Savings – Streamlined DPR preparation saves time and resources.",
        "Professionalism – Well-prepared DPRs demonstrate commitment and credibility.",
        "Customized Solutions – Tailored DPRs for your specific project needs.",
        "Expert Guidance – Insights and recommendations from experienced professionals throughout the process.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Project concept note",
        "Feasibility study",
        "Market research report",
        "Technical specifications",
        "Financial projections",
        "Risk assessment",
        "Legal and regulatory compliance assessment",
        "Executive summary",
        "Business plan",
        "Environmental impact assessment",
        "Social impact assessment",
        "Land acquisition documents",
        "Construction permits",
        "Letters of intent from customers or suppliers",
      ],
    },
    {
      kind: "list",
      title: "Our DPR Service Includes",
      items: [
        "Project Assessment – Understanding scope, objectives, and financial requirements.",
        "Market Research – Analyzing trends, competition, and potential risks.",
        "Financial Projections – Detailed financial assumptions and forecasts.",
        "Technical Details – Complete technical descriptions for projects with engineering aspects.",
        "Risk Analysis – Identification of challenges and mitigation strategies.",
        "Executive Summary – Highlighting key points for lenders to grasp project potential quickly.",
        "Legal and Regulatory Compliance – Ensuring full adherence to legal requirements.",
        "Presentation Support – Assistance in effectively communicating project strengths if needed.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expertise and Experience – Professionals with extensive experience in DPR drafting across industries.",
        "Tailored Solutions – Custom DPRs reflecting the essence of your project.",
        "Compliance and Accuracy – Strict adherence to bank and financial institution standards.",
      ],
    },
    {
      kind: "list",
      title: "Consult an Expert",
      items: [
        "All queries clarified within 30 minutes.",
        "Ongoing support and guidance during project implementation.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on DPR (Detailed Project Report) Service",
      qa: [
        { q: "What is a DPR report?", a: "A comprehensive report that outlines all aspects of a proposed project for stakeholders to assess feasibility." },
        { q: "Why is DPR prepared?", a: "To evaluate project viability and secure funding from banks or investors." },
        { q: "How is DPR prepared?", a: "Through market research, financial projections, technical specifications, and compliance checks." },
        { q: "What is included in a project report for a bank loan?", a: "Concept note, financial projections, feasibility study, risk analysis, compliance documentation, and executive summary." },
        { q: "Why do banks require a DPR for granting loans?", a: "To assess project feasibility, risks, and repayment potential before sanctioning a loan." },
        { q: "How do I create a DPR report tailored for bank loans?", a: "By including financials, market research, technical details, risk analysis, and legal compliance." },
        { q: "What is the format of a project report for bank loans?", a: "It includes structured sections: executive summary, financials, project details, compliance, and supporting documents." },
        { q: "How do you write a project report specifically for a loan purpose?", a: "Focus on clarity, feasibility, and bank compliance; include data, charts, and projections." },
        { q: "Who typically prepares a DPR?", a: "Financial experts, consultants, or professional services like Vakilsearch." },
        { q: "What is the significance of DPR in construction projects seeking bank loans?", a: "It provides lenders with a clear picture of project costs, timelines, and potential returns." },
        { q: "How does the DPR format differ for different types of projects or industries?", a: "Content and sections vary depending on project scale, industry, and funding requirements." },
        { q: "How to create a project report?", a: "Gather all project data, analyze financials, conduct risk assessments, and prepare structured documentation." },
        { q: "Why is this report crucial for your loan?", a: "It increases the chances of loan approval by providing a clear, compliant, and professional overview of the project." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      variant="professional"
      title="DPR (Detailed Project Report) Service"
      subtitle="Professionally crafted DPR to enhance project credibility and attract funding."
      serviceLabel="DPR Service"
      pricing={pricing}
      sections={sections}
      serviceKey="dpr-service"
    />
  );
}
