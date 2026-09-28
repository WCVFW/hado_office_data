import React from "react";
import NavigationMenu from "../MegaMenu";

const MarketFeasibility: React.FC = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nimble Market Feasibility Analysis</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity helps clients investigate business options and document findings 
          to ensure they choose the right markets. Our high-quality feasibility assessment 
          supports your decision to launch products or expand into new markets, minimizing risks.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Market Feasibility Analysis We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Executive Summary",
              desc: "Concise descriptions of scenarios to give you a clear overview.",
            },
            {
              title: "Market Feasibility",
              desc: "Analysis of future market potential, sales estimations, buyers, and competitors.",
            },
            {
              title: "Technical Feasibility",
              desc: "Assessment of technical needs, trends, compliance, and labor considerations.",
            },
            {
              title: "Financial Feasibility",
              desc: "Projections of capital requirements, returns, and overall financial outlook.",
            },
            {
              title: "Organizational Feasibility",
              desc: "Evaluation of organizational resources, skills, and maturity levels for revenue generation.",
            },
          ].map((service, i) => (
            <div key={i} className="p-4 border rounded-xl shadow-sm">
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Questions Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          6 Key Pointers that Define Our Business Feasibility Studies
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Market overview with socio-economic reporting.</li>
          <li>Key drivers and industry forces shaping the market.</li>
          <li>Customer and end-user expectations for solutions.</li>
          <li>Competitor analysis – enterprises, models, and market share.</li>
          <li>Future potential, trends, and degree of market saturation.</li>
          <li>Categorization of opportunities with revenue forecasts.</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Market Feasibility Analysis Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Analyze the market</li>
          <li>Feasibility analysis</li>
          <li>Identify key issues and areas</li>
          <li>Check technical feasibility</li>
          <li>Develop market strategy</li>
          <li>Plan in-depth study</li>
          <li>Approve preliminary study</li>
          <li>Demand analysis</li>
          <li>Funding sources and cashflow analysis</li>
          <li>Devise investment strategy</li>
          <li>Prepare final report</li>
          <li>Growth planning with recommendations and risk assessment</li>
        </ol>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Define the Future of Your Venture with Market Feasibility Analysis
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          With 26+ years of experience, Nimble Acuity provides end-to-end market feasibility 
          analysis powered by global research expertise. Our analysts from top institutions 
          ensure high-quality insights to help you launch products, diversify markets, and 
          expand strategically.
        </p>
        <p className="text-lg font-medium text-blue-600">
          Contact us today to Nimble market feasibility analysis and make informed decisions!
        </p>
      </section>
    </div>
  );
};

export default MarketFeasibility;
