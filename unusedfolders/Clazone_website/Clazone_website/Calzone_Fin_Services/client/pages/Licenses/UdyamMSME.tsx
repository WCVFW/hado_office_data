import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function UdyamMSME() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹499",
      bullets: ["Application filing", "Certificate download", "Advisory"],
    },
    {
      name: "Standard",
      priceLabel: "₹899",
      highlight: true,
      bullets: [
        "Everything in Basic",
        "Corrections support",
        "Bank letter format",
      ],
    },
    {
      name: "Pro",
      priceLabel: "₹1,499",
      bullets: [
        "Everything in Standard",
        "GST/PAN linking guidance",
        "Compliance reminders",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Udyam Registration is a free and paperless process for registering Micro, Small, and Medium Enterprises (MSMEs) in India through the official Udyam portal. It is mandatory for all MSMEs as of 1 July 2020.",
        "Upon successful registration, businesses receive a permanent identification number, called the Udyam Registration Number (UAM). The Udyam Registration Certificate is sent directly to the registered email ID.",
        "We file quickly with correct classification and details, helping you access government schemes, financial assistance, and other MSME benefits.",
      ],
    },
    {
      kind: "list",
      title: "MSME Udyam Registration Benefits",
      items: [
        "Access to Government Schemes (Credit Linked Capital Subsidy, Credit Guarantee, Public Procurement Policy).",
        "Financial Assistance: Cheaper Loans, Subsidies, Tax Benefits, Discounts on trademark and patent registration.",
        "Seamless Integration with Income Tax, GST systems, and Government e-Marketplace.",
        "Priority Sector Lending recognition for favourable credit terms.",
        "Extended MAT Credit for 15 years.",
        "Free ISO Certification eligibility.",
        "Waiver of Security Deposits.",
        "Protection Against Delayed Payments.",
        "Global Exposure via trade fairs and international markets.",
        "Simplified Licensing for MSMEs.",
      ],
    },
    {
      kind: "list",
      title: "Who Can Apply",
      items: [
        "Proprietorships",
        "Hindu Undivided Family (HUF)",
        "Partnership Firms",
        "One-Person Companies (OPCs)",
        "Private Limited Companies",
        "Limited Companies",
        "Producer Companies",
        "Limited Liability Partnerships (LLPs)",
        "Any association of persons",
        "Cooperative societies",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Business must fall under Micro, Small, or Medium category based on investment in plant/machinery and annual turnover.",
        "Manufacturing & Services Investment and Turnover Limits: Micro, Small, Medium.",
        "Business must be registered and operating in India.",
        "Business should not be formed by splitting/reconstructing existing business.",
        "Manufacturers must have GSTIN. Start-ups recognised by DPIIT are eligible.",
        "Special GST registration provisions for MSME sector.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "PAN Card of enterprise",
        "Aadhaar Number of Proprietor / Partner / Karta / Authorised Signatory",
        "GST Number (if applicable)",
        "Bank details",
      ],
    },
    {
      kind: "list",
      title: "Process for New Entrepreneurs",
      ordered: true,
      items: [
        "Login to Udyam Registration Portal",
        "Click 'For New Entrepreneurs who have not yet registered as MSME or having EM-II'",
        "Provide Aadhaar Number & Name of Entrepreneur → Validate & Generate OTP",
        "Enter OTP → Validate → PAN validation → Enter Type of Organisation & PAN number",
        "Fill mandatory details: Mobile number, Enterprise Name, Location, Bank details, NIC code, Employees count",
        "Enter Plant and Machinery & Turnover details → Submit Declaration → Enter Final OTP",
        "Certificate is issued digitally",
      ],
    },
    {
      kind: "list",
      title: "Process for Existing Enterprises",
      ordered: true,
      items: [
        "Re-register on Udyam portal if previously under EM-II or UAM",
        "Update registration as per new notifications",
        "Renew annually with ITR and GST information",
        "Download updated certificate from portal",
      ],
    },
    {
      kind: "list",
      title: "Government Schemes for Registered Firms",
      items: [
        "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
        "Prime Minister Employment Generation Programme (PMEGP)",
        "Raising and Accelerating MSME Performance (RAMP)",
      ],
    },
    {
      kind: "list",
      title: "Key Features of Udyam Registration",
      items: [
        "Free, paperless, fully online registration",
        "Only Aadhaar required; PAN & GST linked details auto-fetched",
        "Integrated with Income Tax and GSTIN systems",
        "PAN & GST mandatory from 1 April 2021",
        "Only one Udyam Registration per enterprise",
      ],
    },
    {
      kind: "list",
      title: "Certificate & Number Details",
      items: [
        "Udyam Registration Certificate: Proof of MSME recognition",
        "Udyam Registration Number (URN): 19-digit unique identifier",
        "Udyog Aadhaar Number: 12-digit number previously issued",
        "Download & verify certificate via portal",
        "Update or cancel registration online if needed",
      ],
    },
    {
      kind: "list",
      title: "Case Study & Comparative Analysis",
      items: [
        "Surge in UDYAM-registered micro businesses (FY22 vs FY20)",
        "Micro Business Growth, Small & Medium Enterprises trends, financing shifts, employment generation",
        "Global comparison: India, Australia, Japan, USA – contribution to employment, GDP, exports",
        "Key observations: India's MSMEs are large employers but have lower GDP & export share than Australia & Japan",
      ],
    },
    {
      kind: "faq",
      title: "Frequently Asked qs",
      qa: [
        {
          q: "How to Register for Udyam Registration Online?",
          a: "Visit the official Udyam Registration portal, provide your Aadhaar number and enterprise details, validate OTPs, fill PAN and GST information, submit declaration, and download the certificate.",
        },
        {
          q: "How to Update an Udyam Registration Certificate?",
          a: "Log in to the Udyam portal with your URN, choose 'Update/Cancel Registration', verify OTP, update required fields, submit, and download the updated certificate.",
        },
        {
          q: "What is the Udyam Registration Number?",
          a: "The Udyam Registration Number (URN) is a unique 19-digit identifier assigned to each MSME upon successful registration, used to access government schemes and benefits.",
        },
        {
          q: "What is the Difference Between Udyam and Udyog Aadhaar?",
          a: "Udyam is the new, free online MSME registration launched in 2020, whereas Udyog Aadhaar was the earlier identification system replaced by Udyam.",
        },
        {
          q: "Which Kind of Company Should I Register in MSME?",
          a: "Micro, Small, or Medium Enterprises including Proprietorships, Partnerships, OPCs, Pvt Ltd, LLPs, and Cooperative Societies can register as MSME under Udyam.",
        },
        {
          q: "Is Udyog Aadhaar sufficient for running a business?",
          a: "No, Udyog Aadhaar is replaced by Udyam Registration and MSMEs should get registered under Udyam to access government schemes and benefits.",
        },
        {
          q: "What is the Fee for MSME Registration?",
          a: "Registration on the official Udyam portal is free. Professional assistance may incur a fee depending on the service provider.",
        },
        {
          q: "Eligibility Criteria for MSME Registration?",
          a: "Businesses must fall under Micro, Small, or Medium category based on investment and turnover, be registered in India, not split from existing businesses, and have PAN/GST details if applicable.",
        },
        {
          q: "Which Company Provides MSME Company Registration Online?",
          a: "Any authorized service provider like Vakilsearch or others can assist, but registration can also be done directly via the official Udyam portal.",
        },
        {
          q: "Can We Register a Diagnostic Centre Under MSME?",
          a: "Yes, service-oriented businesses like diagnostic centres can apply for Udyam registration if they meet the investment and turnover criteria.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Udyam / MSME Registration"
      subtitle="Get recognized as MSME for benefits and credit access."
      gradientFrom="from-indigo-700"
      gradientTo="to-cyan-700"
      serviceLabel="Udyam / MSME"
      pricing={pricing}
      sections={sections}
      serviceKey="udyam-msme"
    />
  );
}
