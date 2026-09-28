import React from "react";
import CCmainmenu from "../CCmainmenu";

const DebtCollection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <div className="relative bg-gradient-to-r from-red-600 to-pink-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Nimble Acuity – Debt Collection Services
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl">
          Reduce recovery cycles, streamline operations, and enhance cash flow
          with our Lean Six Sigma-driven debt collection services.
        </p>
      </div>

      {/* About */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p>
          In times of economic instability, companies continue to struggle with
          the management of past-due accounts. You can concentrate on growth
          while our debt collection services streamline operations and match each
          initiative with Critical-to-Quality (CTQ) indicators.
        </p>
        <p>
          By outsourcing debt collection to professionals like us, you can
          enhance your efficiency, reduce recovery cycles, and maintain your
          brand image. Our courteous team of debt collection agents ensures you
          reduce bad debt, improve cash flow, and achieve profitability.
        </p>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Debt Collection Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            {
              title: "Customer Tracking & Data Validation",
              desc: "We use VoC-to-CTQ mapping and statistical analysis to track hard-to-reach debtors and improve reach rates.",
            },
            {
              title: "Early & Late-stage Debt Collections",
              desc: "We focus resources on debtors most likely to default, leveraging analytics to maximize recovery.",
            },
            {
              title: "Debt Dispute Management",
              desc: "Our agents are trained in dispute management to avoid inaccurate collection attempts and ensure fair handling.",
            },
            {
              title: "Debt Collection Call Center Services",
              desc: "Agents follow Lean Six Sigma-driven scripts and escalation processes, safeguarding your brand reputation.",
            },
            {
              title: "Debt Portfolio Management",
              desc: "We automate decision-making, identify high-risk accounts, and provide insights to optimize recovery.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-700 font-medium">
          Our debt collection services are ideal for Commercial Accounts,
          Healthcare Organizations, Banks, Dentists, Veterinarians,
          Chiropractors, Landlords, County Clerks, and Utility Companies.
        </p>
      </div>

      {/* Checklist */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Debt Collection Checklist We Adhere To
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Looking Out for Warning Signs",
              desc: "We monitor late payments, financial struggles, and other red flags to prepare for insolvency.",
            },
            {
              title: "Chart a Debt Recovery Plan",
              desc: "We collect customer details and quickly initiate letters, calls, or new repayment plans.",
            },
            {
              title: "Plan Execution",
              desc: "We reduce drop-offs with validated strategies, follow-ups, and empathetic communication.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Benefits of Outsourcing Debt Collection to Nimble Acuity
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {[
            "40-50% reduction in delinquency rate",
            "Higher liquidation ratios",
            "Customized recovery plans",
            "Better cost savings and profitability",
            "Multi-channel support lines",
            "Processes driven by best-in-class analytics",
          ].map((benefit, idx) => (
            <li
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              ✅ {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials / CTA */}
      <div className="bg-gradient-to-r from-pink-700 to-red-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Outsource Debt Collection Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity's debt recovery solutions help you reduce costs, track
          debtors, and regain cash flow—all while ensuring your brand value is
          never compromised.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-red-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Get in Touch with Us
        </button>
      </div>
    </section>
  );
};

export default DebtCollection;
