import React from "react";
import NavigationMenu from "../MegaMenu";

const FinancialResearchReport: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Financial Research Report Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Boost efficiency, improve income, and retain cash flow with expert
          financial modeling, DCF analysis, IPO analysis, technical analysis,
          credit research, and more.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <p className="text-lg leading-relaxed">
          Nimble Acuity provides comprehensive financial research reports
          tailored to your needs, enabling smarter and more profitable decision
          making. With a team of highly qualified financial analysts, we deliver
          exhaustive regular and periodic financial reports for companies across
          industries, including Fortune 1000 firms.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Financial Research Reports Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Financial Modeling",
              desc: "Smart financial modeling solutions that assess expenditures, forecast budgets, and optimize financial decision-making while saving costs.",
            },
            {
              title: "Discounted Cash Flow (DCF) Analysis",
              desc: "Accurate valuation of assets, projects, or companies by estimating future cash flows and discounting them to present value.",
            },
            {
              title: "IPO Analysis",
              desc: "Detailed IPO analysis to track stock movement, competitors, and market performance insights for strategic decisions.",
            },
            {
              title: "Credit Research",
              desc: "Specialized reports on capital structure, debt maturity, risk profiles, covenant analysis, and balance sheet exposures.",
            },
            {
              title: "Technical Analysis",
              desc: "Forecast future pricing trends by studying past price and volume data for improved financial planning.",
            },
            {
              title: "Business & Investment Environment Assessment",
              desc: "Exclusive scanning of business environments to guide investment, divestment, product launches, and competitive positioning.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Higher Cost Savings",
              desc: "Efficient processes and cost-effective services tailored to your budget.",
            },
            {
              title: "Experienced Analysts",
              desc: "A talented team capable of handling complex financial research requests.",
            },
            {
              title: "Assured Data Security",
              desc: "Strict confidentiality agreements and robust security measures to protect your data.",
            },
            {
              title: "Live Market Data",
              desc: "Real-time market insights to help you make informed business decisions.",
            },
            {
              title: "Smart Communication Framework",
              desc: "Seamless communication and project tracking for transparency and efficiency.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Financial Research Report Services to Us
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get access to reliable, efficient, and cost-effective financial
          research outsourcing services with Nimble Acuity. Let our experts
          provide insights that can transform your business.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default FinancialResearchReport;
