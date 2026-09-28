import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function BusinessLoan() {
  const pricing: PricingPlan[] = [
    {
      name: "Application",
      priceLabel: "₹9,999",
      bullets: ["Eligibility assessment", "Documentation", "Application filing"],
    },
    {
      name: "Term Loan",
      priceLabel: "₹19,999",
      highlight: true,
      bullets: ["Everything in Application", "Lender matching", "Negotiation guidance"],
    },
    {
      name: "Working Capital",
      priceLabel: "₹24,999",
      bullets: ["Everything in Term", "Limit optimization", "Covenant planning"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Business loans are lending agreements established between business owners and financial institutions or private lenders. These loans provide funding to entrepreneurs and business owners to invest or manage working capital for expansion and operations.",
        "Business loans may differ from regular loans in terms of formalities, risks, and specific terms and conditions. Vakilsearch partners with India’s top lenders to provide hassle-free, collateral-free business loans.",
      ],
    },
    {
      kind: "list",
      title: "Types of Business Loans",
      items: [
        "Bank Overdraft/Credit Line – Withdraw funds up to a predetermined credit limit, repay with applicable interest.",
        "Equity Funding – Investors receive ownership stakes; owners can repurchase shares later.",
        "Short-term Loans – Working capital and limited capital investment with short repayment periods.",
        "Equipment Finance – Loans secured by purchased instruments or equipment.",
        "Loan on Accounts Receivables – Short-term credit for SMEs based on commercial customer invoices.",
        "Factoring/Advances – Partial advance payments by factoring companies against accounts receivable.",
        "Trade Credit – Short-term credit extended by suppliers for goods/services.",
      ],
    },
    {
      kind: "list",
      title: "Business Loan EMI and Calculation",
      items: [
        "EMI is the monthly installment of the loan amount, useful for small and medium businesses.",
        "Formula: E = P × r × (1+r)^n / ((1+r)^n - 1), where P = principal, r = monthly interest rate, n = duration.",
        "Use online EMI calculators for quick estimates of monthly installments and total payable amount.",
      ],
    },
    {
      kind: "list",
      title: "Features of Business Loan",
      items: [
        "Loans up to ₹2–₹75 lakhs for eligible SMEs.",
        "Minimal documentation required (PAN, Aadhaar, Bank Statement, Business registration).",
        "Superfast processing – approval in just 72 hours.",
        "No collateral required.",
        "Flexible tenures from 12 to 36 months.",
        "Transparent costs with zero hidden charges.",
        "Monthly EMI repayment options.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Business Loan",
      items: [
        "Faster Processing – Loans provided in just 72 hours.",
        "Preserving Your Ownership – Collateral-free financing.",
        "Streamlining Cash Flow – Timely funding enhances business cash management.",
        "Boost Credit Score – Timely repayments improve CIBIL and business credit scores.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Business Loan",
      items: [
        "Bank statement (12 months)",
        "Business registration proof",
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Partnership Deed Copy",
        "Company PAN Card Copy",
        "Additional registration proofs: GST filing, Gumastadhara, Trade License, Drug License, TIN, VAT registration",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for Business Loan",
      items: [
        "Established business – operating for at least 6 months.",
        "Minimum turnover – ₹5 lakhs in preceding 6 months.",
        "No blacklisted/excluded status for SBA finance.",
        "Pan-India availability.",
      ],
    },
    {
      kind: "list",
      title: "Why Choose Vakilsearch?",
      items: [
        "Trusted by 5,00,000+ businesses for compliance and tax needs.",
        "Completely online process.",
        "Minimal documentation.",
        "Lowest interest rates.",
        "Loan approval in 72 hours.",
        "Low service fees.",
        "Flexible loan amounts and tenure.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Business Loan",
      qa: [
        { q: "How can I get a business loan quickly?", a: "Submit required documents and use our online application to get a quick review." },
        { q: "What is the business loan interest rate?", a: "Interest rates vary by lender and loan type; our experts guide you through the best options." },
        { q: "What is the maximum amount of a business loan?", a: "Loans up to ₹30 lakhs are approved, depending on eligibility and lender criteria." },
        { q: "How to get a business loan without a salary slip?", a: "Provide alternative income proof and maintain a good CIBIL score." },
        { q: "What is the minimum ITR required for a business loan?", a: "Typically 1–2 years of ITR for eligibility; varies by lender." },
        { q: "Can I get a business loan with ITR?", a: "Yes, ITR helps establish business income and credibility." },
        { q: "Who is eligible for a startup loan?", a: "Startups with proper registration, business plan, and financial proof can apply." },
        { q: "How much EMI do I need to pay?", a: "EMI depends on loan amount, tenure, and interest rate; use our EMI calculator for estimates." },
        { q: "What are the requirements to get a business loan?", a: "Basic documents like PAN, Aadhaar, bank statements, and business registration proofs." },
        { q: "Who can apply for a business loan?", a: "Business owners meeting eligibility criteria can apply." },
        { q: "What is the time period of a business loan?", a: "Tenure ranges from 12 to 36 months." },
        { q: "What are the loan schemes initiated by the Government of India?", a: "Schemes like CGTMSE, Mudra Loan, and Startup India loans may apply." },
        { q: "What is the minimum CIBIL score needed for a business loan?", a: "Typically 650+, subject to lender discretion." },
        { q: "How can I get a 15 lakh business loan immediately?", a: "Submit all documents online and consult our experts for quick processing." },
        { q: "How can I get a 4 lakh business loan immediately?", a: "Provide required documentation and eligibility proof for fast approval." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      variant="professional"
      title="Business Loans: No Collateral, More Growth"
      subtitle="Get up to ₹30 lakhs approved within 72 hours with 100% online processing."
      serviceLabel="Business Loan"
      pricing={pricing}
      serviceKey="business-loan"
      sections={sections}
    />
  );
}
