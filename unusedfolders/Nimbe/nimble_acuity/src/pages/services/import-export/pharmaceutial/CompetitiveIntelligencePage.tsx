import React from "react";
import { CheckCircle, Target, Globe, Shield, Clock, BarChart3 } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const CompetitiveIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Competitive Intelligence Research Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Stay ahead in the pharmaceutical industry with data-driven competitor insights, R&D analysis, and market strategies designed to give your business the competitive edge.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Competitive Intelligence Matters</h2>
          <p className="mb-4">
            Competitive intelligence research is critical in the pharmaceutical industry to identify competitors' terrain, development direction, pricing strategy, targets, and more. Nimble Acuity empowers pharmaceutical companies and biotech startups to make informed business decisions with ISO-certified processes and advanced insights.
          </p>
          <p>
            By outsourcing to us, you can capitalize on opportunities, mitigate risks, and navigate complex markets with confidence.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-3">Key Offerings</h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "Competitor R&D Strategy",
              "Product Pipeline & Lifecycle Management",
              "Sales Force & Distribution Analysis",
              "Competitor Product Launch Timelines",
              "Key Messaging & Target Identification"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Our Competitive Intelligence Research Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Define Project", desc: "Explore and map requirements with clients", icon: Target },
              { title: "Set Objectives", desc: "Gather competition info and outline goals", icon: BarChart3 },
              { title: "Research & Collect", desc: "Implement strategies, gather and collate data", icon: Globe },
              { title: "Analyze & Compile", desc: "Thorough analysis and structured reporting", icon: Shield },
              { title: "Deliver Reports", desc: "Actionable insights for better decisions", icon: Clock }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <step.icon className="w-10 h-10 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Nimble Competitive Intelligence to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Inexpensive Solutions", desc: "Detailed, comprehensive research at a fraction of in-house costs." },
            { title: "Elaborate Infrastructure", desc: "Advanced tools and methodologies for global research." },
            { title: "Unmatched Quality", desc: "Accurate, high-quality, and actionable data you can trust." },
            { title: "Data Security", desc: "Strict confidentiality agreements and robust policies." },
            { title: "Prompt Service", desc: "Scalable teams delivering within stipulated timelines." },
            { title: "Worldwide Reach", desc: "Global workforce with multilingual expertise." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Gain the Edge with Nimble Acuity's Competitive Intelligence Research
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Partner with Nimble Acuity and leverage 26+ years of expertise to stay ahead of your competition. Get accurate, reliable, and actionable insights that drive your business forward.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default CompetitiveIntelligencePage;
