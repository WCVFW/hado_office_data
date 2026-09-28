import React from "react";

interface Section {
  kind?: "overview" | "list" | "faq" | "table";
  title?: string;
  paragraphs?: string[];
  items?: string[];
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

const sections: Section[] = [
  {
    kind: "overview",
    title: "MSME - Overview",
    paragraphs: [
      "In India, the government extends a valuable opportunity to Micro, Small, and Medium Enterprises (MSMEs) through the provision of MSME registration. This special registration serves as a gateway to a domain of benefits carefully curated by the government to foster the establishment and growth of these vital sectors. Often regarded as the backbone of the nation's economy, MSMEs are affectionately known as Small Scale Industries (SSIs).",
      "The 'MSME Registration Form' refers to the official document or online application used by Micro, Small, and Medium Enterprises (MSMEs) in India to apply for registration under the MSME category. This registration offers businesses recognition and access to various benefits and support provided by the government to promote their growth and development.",
    ],
  },
  {
    kind: "list",
    title: "MSME Registration Form - Key Details",
    items: [
      "Business Information: Legal name, type, and communication address.",
      "Specify the main economic activity: Manufacturing, services, trading.",
      "Investment in Plant & Machinery or Equipment: Total value invested.",
      "Annual Turnover",
      "Employment Details: Number of people employed, skilled and unskilled.",
      "Aadhaar Number: Of business owner or authorized signatory.",
      "PAN: Permanent Account Number of the business entity.",
      "Bank Account Details: Account number and IFSC code.",
      "Contact Details: Email address and phone number.",
      "Social Category: SC/ST/OBC/General.",
      "Location of Business: District and state.",
      "Date of Commencement: Business start date.",
    ],
  },
  {
    kind: "table",
    title: "MSME Classification",
    table: {
      headers: ["Category", "Investment in Plant & Machinery/Equipment", "Annual Turnover"],
      rows: [
        ["Micro", "Up to Rs. 1 crore", "Up to Rs. 5 crore"],
        ["Small", "Up to Rs. 10 crore", "Up to Rs. 50 crore"],
        ["Medium", "Up to Rs. 20 crore", "Up to Rs. 250 crore"],
      ],
    },
  },
  {
    kind: "list",
    title: "Documents Required for MSME Registration",
    items: [
      "Address of the business",
      "Basic business activity",
      "NIC 2 digit code",
      "Investment details (Plant/equipment)",
      "Turnover details",
      "Aadhar number",
      "PAN number",
      "Bank account number",
      "Partnership deed",
      "Sales and purchase bill copies",
      "Copies of licenses and bills of purchased machinery",
    ],
  },
  {
    kind: "list",
    title: "Benefits of MSME Registration",
    items: [
      "Access to government schemes and subsidies",
      "Easier access to credit",
      "Protection of intellectual property rights (IPR)",
      "Facilitating exports",
      "Participation in government tenders and contracts",
      "Dispute resolution mechanisms",
    ],
  },
  {
    kind: "list",
    title: "Who can Apply for Udyam Registration?",
    items: [
      "Any enterprise, existing or new, meeting MSME classification criteria",
      "Simple process with minimal documentation",
    ],
  },
  {
    kind: "table",
    title: "Benefits by Company Type",
    table: {
      headers: [
        "Benefits",
        "Proprietorship",
        "Partnership",
        "Public Limited",
        "Others",
      ],
      rows: [
        ["Access to Credit", "Yes", "Yes", "Yes", "Yes"],
        ["Collateral-free Loans", "Yes", "Yes", "Yes", "Yes"],
        ["Financial Support Schemes", "Yes", "Yes", "Yes", "Yes"],
        ["Priority for Government Tenders", "Yes", "Yes", "Yes", "Yes"],
        ["Subsidies for Technology Upgradation", "Yes", "Yes", "Yes", "Yes"],
        ["Lower Interest Rates on Loans", "Yes", "Yes", "Yes", "Yes"],
        ["Protection Against Delayed Payments", "Yes", "Yes", "Yes", "Yes"],
        ["Eligibility for Government Incentives", "Yes", "Yes", "Yes", "Yes"],
        ["Benefits under Government Schemes", "Yes", "Yes", "Yes", "Yes"],
        ["Reduced Registration Fees", "Yes", "Yes", "Yes", "Yes"],
        ["Market Promotion and Assistance", "Yes", "Yes", "Yes", "Yes"],
      ],
    },
  },
  {
    kind: "list",
    title: "Salient Features of Udyam Registration",
    items: [
      "Easy Access: Available online for all enterprises",
      "Digital Process: Fully paperless registration",
      "No Document Upload required",
      "Free of Cost",
      "Instant e-certificate with dynamic QR code",
      "Integration with Income Tax and GSTIN systems",
      "Single Registration per enterprise",
      "Permanent registration",
      "Multiple business activities allowed",
      "Priority sector benefits",
      "Enhanced credibility and access to government tenders",
    ],
  },
  {
    kind: "list",
    title: "MSME Registration Process",
    items: [
      "Access the Udyam Registration Portal",
      "Self-Declaration of enterprise details",
      "Aadhaar Verification via OTP",
      "PAN & GSTIN submission if applicable",
      "Classification & Turnover assignment",
      "Dynamic QR Code e-certificate issuance",
      "No Renewal Required",
      "Integration with Tax Systems for verification",
      "Additional business activities allowed",
      "Re-registration for existing EM-II or UAM registrants",
      "Support & Assistance via DICs and control rooms",
      "Cost-Free Process",
    ],
  },
  {
    kind: "faq",
    title: "FAQs on MSME Registration",
    faqs: [
      {
        question: "What is the role of the Ministry of MSME?",
        answer: "The Ministry of MSME formulates policies, provides support, and promotes MSME development nationwide.",
      },
      {
        question: "Can you explain Udyog Aadhaar?",
        answer: "Udyog Aadhaar was the previous MSME identification system replaced by Udyam registration in 2020.",
      },
      {
        question: "Why is the term 'Micro' used in MSME?",
        answer: "It denotes the smallest enterprises under MSME classification based on investment and turnover.",
      },
      {
        question: "I came across 'fees for Udyam registration file.' Is there a charge?",
        answer: "No, Udyam registration is completely free of cost; only professional assistance may involve fees.",
      },
      {
        question: "Are documents required for self-declaration during Udyam Registration?",
        answer: "No, Udyam registration relies on self-declaration; documents may be needed for verification later.",
      },
      {
        question: "Who can apply for Udyam Registration?",
        answer: "Any enterprise meeting MSME classification criteria can apply online using Aadhaar.",
      },
      {
        question: "Is the Aadhar card compulsory for Udyam Registration?",
        answer: "Yes, Aadhaar of the entrepreneur or authorized signatory is mandatory.",
      },
      {
        question: "How long does it take to obtain Udyam Registration?",
        answer: "The process is instant; the e-certificate is issued online immediately after successful submission.",
      },
    ],
  },
];

export default function UdyamMSME() {
  return (
    <main className="bg-white text-gray-800">
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <img src="/badge.png" alt="Badge" className="mx-auto w-24 h-24" />
          <h1 className="text-3xl font-bold mt-4">MSME Registration</h1>
          <p className="mt-2 text-gray-600">
            Give your startup official government recognition through MSME registration. T&C*
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.title && <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>}

              {section.paragraphs &&
                section.paragraphs.map((p, i) => (
                  <p key={i} className="mb-2">{p}</p>
                ))}

              {section.items &&
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              }

              {section.table &&
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="px-4 py-2 border">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {row.map((cell, j) => <td key={j} className="px-4 py-2 border">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }

              {section.faqs &&
                <div className="space-y-4 mt-4">
                  {section.faqs.map((faq, i) => (
                    <details key={i} className="border rounded-lg p-4 bg-gray-50">
                      <summary className="font-medium cursor-pointer">{faq.question}</summary>
                      <p className="mt-2 text-gray-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
