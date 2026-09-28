import React from "react";
import { CheckCircle, BarChart, Users, Target, ClipboardList, Shield } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const MarketLandscapeAssessment: React.FC = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Nimble Market Landscape and Assessment Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          The pharmaceutical industry is growing rapidly, making market landscape and assessment services
          crucial for strategic decisions. With prices starting at just <span className="font-semibold">$14/hour</span>,
          Nimble Acuity helps pharma companies stay competitive with accurate research and analysis.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Market Sizing & Segmentation",
              desc: "Segregating the market into identifiable segments and creating tailored strategies.",
              icon: BarChart,
            },
            {
              title: "Finding Market Opportunities",
              desc: "Analyzing consumer behavior, preferences, and buying patterns.",
              icon: Target,
            },
            {
              title: "Stakeholder Recognition",
              desc: "Identifying and analyzing ideal stakeholders for successful outcomes.",
              icon: Users,
            },
            {
              title: "Key Driver Characterization",
              desc: "Assessing key factors that impact product placement and performance.",
              icon: ClipboardList,
            },
            {
              title: "Market Entry Analysis",
              desc: "SWOT analysis to assess needs, challenges, and future strategies.",
              icon: CheckCircle,
            },
            {
              title: "Competitor Analysis",
              desc: "Studying competitor strengths, weaknesses, pricing, and positioning.",
              icon: Shield,
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              <service.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process We Follow */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Process We Follow for Pharmaceutical Research</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Define Scope",
            "Outline Objectives",
            "Identify Stakeholders",
            "Select Strategy",
            "Conduct Research",
            "Collate Information",
            "Submit Data",
          ].map((step, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{step}</h3>
                <p className="text-gray-600">
                  Step {idx + 1} of our research process ensures accuracy and actionable insights.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Outsourcing Market Landscape & Assessment to Nimble Acuity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Economical Solutions with high-quality research",
            "Ready availability and quick turnaround",
            "Extensive project support across all stages",
            "Multi-lingual competencies for global markets",
            "In-house research capabilities with advanced tools",
            "Strong pharmaceutical knowledge base",
            "High level of data security and confidentiality",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow border bg-gray-50 hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Acuity for Accurate Market Landscape & Assessment
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of experience in pharmaceutical research, Nimble Acuity provides precise
          and cost-effective market assessment services. Our expertise ensures strategic decisions
          with reliable insights.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default MarketLandscapeAssessment;
