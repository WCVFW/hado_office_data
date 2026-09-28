import React from "react";

const NidhiCompanyRegistration: React.FC = () => {
  const pricing = [
    {
      name: "Basic",
      priceLabel: "Custom",
      bullets: [
        "Expert assisted process",
        "DSC & DIN",
        "SPICe+ filing",
        "Certificate of Incorporation",
      ],
    },
    {
      name: "Standard",
      priceLabel: "Custom",
      highlight: true,
      bullets: ["End-to-end filing", "Compliance guidance", "Welcome kit"],
    },
    {
      name: "Premium",
      priceLabel: "Custom",
      bullets: ["Priority processing", "Annual compliance support"],
    },
  ];

  const sections = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "Nidhi Companies promote savings and lending among members under the Companies Act, 2013 and Nidhi Rules, 2014.",
        "We handle name approval, DSC/DIN, MOA/AOA drafting, SPICe+ filing and post-registration compliance.",
      ],
    },
    {
      kind: "list",
      title: "What is a Nidhi Company?",
      items: [
        "Member-based NBFC-like entity",
        "Regulated under Companies Act & MCA",
        "Accepts deposits and lends to members",
      ],
    },
    {
      kind: "list",
      title: "Importance",
      items: [
        "Financial inclusion",
        "Access to affordable loans",
        "Regulatory compliance",
      ],
    },
    {
      kind: "list",
      title: "Requirements & Structure",
      items: [
        "DSC & DIN for directors",
        "Name approval and incorporation via SPICe+",
        "7 members initially; 200 within 1 year",
        "Documents: ID/address proof, registered office, MOA & AOA",
      ],
    },
    {
      kind: "list",
      title: "Operation",
      ordered: true,
      items: [
        "Membership acquisition",
        "Deposits by members",
        "Loans to members",
        "Comply with Nidhi Rules & Companies Act",
        "Distribute profits",
        "Governance by board",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria",
      items: [
        "Min 7 members initially; 200 within 1 year",
        "Min 3 directors (1 resident)",
        "DSC & DIN for all directors",
        "Adequate net-owned funds",
      ],
    },
    {
      kind: "list",
      title: "Step-by-Step Registration",
      ordered: true,
      items: [
        "Obtain DSC",
        "Obtain DIN",
        "Name approval",
        "File SPICe+ with MOA & AOA",
        "Receive Certificate of Incorporation",
      ],
    },
    {
      kind: "faq",
      title: "FAQs",
      qa: [
        {
          q: "How long does registration take?",
          a: "Typically 2–4 weeks after document readiness.",
        },
        {
          q: "Can deposits be accepted from public?",
          a: "No, only from members as per Nidhi Rules.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Nidhi Company Registration
        </h1>
        <p className="text-gray-700">
          End-to-end assistance with compliance under Companies Act & Nidhi
          Rules.
        </p>
        <img
          src="https://images.pexels.com/photos/7414278/pexels-photo-7414278.jpeg"
          alt="Finance savings group meeting"
          className="w-full h-56 object-cover rounded-lg mt-4"
        />
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricing.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg p-4 ${plan.highlight ? "border-blue-700 bg-blue-50" : "border-gray-200"}`}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <div className="text-lg font-bold mb-2">{plan.priceLabel}</div>
            <ul className="list-disc pl-5 text-gray-700">
              {plan.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{section.title}</h3>
          {section.kind === "overview" && (
            <div>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-2 text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.kind === "list" && (
            <ul
              className={`pl-5 ${section.ordered ? "list-decimal" : "list-disc"} text-gray-700`}
            >
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.kind === "faq" && (
            <div>
              {section.qa.map((faq, i) => (
                <div key={i} className="mb-4">
                  <div className="font-semibold text-blue-700">{faq.q}</div>
                  <div className="text-gray-700">{faq.a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Example onboarding form */}
      <form className="bg-gray-50 p-6 rounded-lg shadow mt-8">
        <h4 className="text-lg font-bold mb-4">Get Started</h4>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter your phone number"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default NidhiCompanyRegistration;
