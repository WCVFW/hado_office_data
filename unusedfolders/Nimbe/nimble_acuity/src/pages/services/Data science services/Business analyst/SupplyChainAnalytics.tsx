import React from "react";
import DSMainMenu from "../mainmenu";

const SupplyChainAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Supply Chain Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Reduce operational costs, increase customer satisfaction, sustain
          business challenges, and augment profit with Nimble Acuity’s supply
          chain analytics services.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          We help you understand and use supply chain analytics to improve your
          overall business efficiency. Be it technology, people, infrastructure, or
          processes, our analytics have helped hundreds of clients reap benefits
          from their data to build smarter supply chains.
        </p>
        <p>
          As your offsite supply chain analytics partner, we provide integrated
          views and actionable insights that enable organizations to take
          data-driven decisions, achieve growth, and enhance profitability.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Supply Chain Analytics Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Data Assembly",
              desc: "We log, check, and cleanse necessary data before applying supply chain analysis.",
            },
            {
              title: "Create Decision Diagrams",
              desc: "We create decision trees or diagrams for fast, effective supply chain decisions.",
            },
            {
              title: "Pattern Recognition",
              desc: "We analyze industry data to build models for optimizing your supply chain.",
            },
            {
              title: "Principle Component Analysis",
              desc: "We determine the key factors that govern business and supply chain processes.",
            },
            {
              title: "Data Segmentation",
              desc: "We segregate data into relevant sections and correlate them with your industry.",
            },
            {
              title: "Client Analytics",
              desc: "We analyze client-related data to optimize processes and improve satisfaction.",
            },
            {
              title: "Trend Analysis",
              desc: "We conduct detailed trend analysis to enable key business decisions.",
            },
            {
              title: "Client Intelligence",
              desc: "We gather demographic data, extracting key intelligence for deeper insights.",
            },
            {
              title: "Quality Analysis",
              desc: "We cleanse and validate all data to ensure high-quality analysis.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us for Supply Chain Analytics?
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            ✅ Expertise in predictive risk modeling, stress testing, model
            validation, and maintenance.
          </li>
          <li>
            ✅ Flexible operations model that adapts to varying market scenarios.
          </li>
          <li>
            ✅ Cost-effective services that save time and money.
          </li>
          <li>
            ✅ Large pool of talented resources with unique supply chain
            knowledge.
          </li>
          <li>
            ✅ Strong expertise in Big Data technology for integrated solutions.
          </li>
          <li>
            ✅ Skilled in cluster analysis, time series analysis, chi-square,
            ANOVA, logistic regressions, and more.
          </li>
          <li>
            ✅ Data security ensured with NDAs and workstation security policies.
          </li>
          <li>
            ✅ ISO-certified processes that guarantee high-quality results.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Supply Chain Analytics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With over two decades of experience, state-of-the-art infrastructure,
          and flexible pricing models, we are your trusted partner for supply
          chain analytics services.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SupplyChainAnalytics;
