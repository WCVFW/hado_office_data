import React from "react";
import NavigationMenu from "../MegaMenu";

const FinancialRiskAnalysis: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <NavigationMenu/>
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Financial Risk Analysis Services
        </h1>
        <p className="text-lg text-gray-600">
          Get access to expert financial risk analysis services provided by
          veteran finance professionals at rates starting at just{" "}
          <span className="font-semibold text-blue-600">$14/hour</span>
        </p>
      </header>

      {/* Intro */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
        <p>
          Are you looking for ways to derive critical insights that help you
          evaluate and prepare for potential financial risks in the market? Are
          you looking for frameworks in financial risk analytics and accurate
          risk management solutions that help you take timely actions against
          any activity that might pose a threat to your financial stability? If
          so, outsourcing financial risk analysis services to an experienced and
          reliable financial risk analysis service provider like us may be a
          good idea.
        </p>
        <p>
          <span className="font-semibold text-blue-600">Nimble Acuity (Nimble Acuity)</span> is a leading provider of financial risk
          analysis services in India and abroad and has helped numerous clients
          with expert financial risk analysis solutions. Our accurate
          forecasting abilities and customized approach toward risk analytics
          can serve as a firm foundation for coming up with effective and
          strategic financial risk management solutions.
        </p>
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Financial Risk Analysis Services We Offer
        </h2>
        <p className="text-gray-700 mb-8">
          Nimble Acuity is a leading financial risk analysis service providing
          company and offers a gamut of financial risk analysis services.
          Offshore financial risk analysis services to us to better manage your
          financial risk.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Assessing Portfolio Performance",
              desc: "Accurately assess the composition and performance of your investment portfolio to manage risks and create sound business strategies.",
            },
            {
              title: "Operational Risk Analysis Services",
              desc: "Get insights on model risk and fraud risk to handle issues related to lack of internal controls or technical failures.",
            },
            {
              title: "Monitoring Credit Risk",
              desc: "Manage and monitor your exposure to credit risk in critical portfolio segments to reduce vulnerabilities.",
            },
            {
              title: "Market Risk Analysis Services",
              desc: "Perform directional (interest rates, market, stock prices) and non-directional (volatility) risk analysis.",
            },
            {
              title: "Loan Performance Services",
              desc: "Relate your loan performance to industry-wide portfolio segments for more accurate insights.",
            },
            {
              title: "Liquidity Risk Analysis Services",
              desc: "Evaluate funding and asset liquidity risk to determine loss likelihood from insufficient buyers or sellers.",
            },
            {
              title: "Improving Strategic Intelligence",
              desc: "Enhance your strategic intelligence based on geography and line of business growth opportunities.",
            },
            {
              title: "Credit Risk Analysis Services",
              desc: "Gain insights with sovereign risk and settlement risk analysis on monetary obligations and FX policies.",
            },
            {
              title: "Compliance and Benchmarking",
              desc: "Support compliance requirements and benchmark risk rating parameters against market data.",
            },
            {
              title: "Legal Risk Analysis Services",
              desc: "Identify risks from legal proceedings, lawsuits, and other compliance-related issues.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialRiskAnalysis;
