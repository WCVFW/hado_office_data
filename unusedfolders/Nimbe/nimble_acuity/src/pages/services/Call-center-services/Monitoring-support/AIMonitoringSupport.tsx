import React from "react";
import CCmainmenu from "../CCmainmenu";

const AIMonitoringSupport: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          AI Monitoring Support Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Optimize your customer support with{" "}
          <span className="font-semibold">Nimble Auity’s</span> cutting-edge AI
          monitoring solutions for call centers. Ensure compliance, reduce risk,
          and scale quality monitoring to 100% of calls.
        </p>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why Choose AI Monitoring?
        </h2>
        <p className="text-center max-w-4xl mx-auto mb-8">
          Do you risk non-compliance and inconsistent service by analyzing fewer
          than 5% of interactions? Our AI-driven solutions provide{" "}
          <strong>real-time process intelligence</strong>, instant agent
          feedback, regulatory compliance, and deep insights to enhance customer
          satisfaction.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Agent Monitoring",
              desc: "AI-powered real-time monitoring for objective evaluations, accountability, and performance improvements using voice recognition.",
            },
            {
              title: "Performance Monitoring",
              desc: "Track conversions, satisfaction, resolution rates, sentiment, and more via insightful dashboards.",
            },
            {
              title: "Live Analysis & Feedback",
              desc: "Real-time sentiment, context, and speech analytics with instant feedback loops for agents.",
            },
            {
              title: "Alerts & Reports",
              desc: "Instant alerts for compliance issues, missed opportunities, or protocol breaches.",
            },
            {
              title: "A/B Testing",
              desc: "Test greetings, words, and scripts to find what generates the best customer outcomes.",
            },
            {
              title: "Compliance Monitoring",
              desc: "Ensure industry regulations are followed with redaction methods and Poka-Yoke safeguards.",
            },
            {
              title: "Sensitive Information Monitoring",
              desc: "Automatically redact account numbers, SSNs, and other sensitive data for confidentiality.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our AI Monitoring Process
        </h2>
        <ol className="max-w-5xl mx-auto space-y-6 text-gray-700">
          {[
            "Requirement Discovery – Understand client needs & challenges.",
            "Analysis of Requirements – Identify optimization areas.",
            "Pilot Project – Experience AI-powered monitoring.",
            "Onboarding Agents – Train & equip agents with AI tools.",
            "AI Monitoring Execution – Begin full-scale monitoring.",
            "Quality Control – Validate accuracy & compliance.",
            "Reporting & Project Closure – Deliver insights & results.",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow"
            >
              <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                {idx + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Benefits of Nimble Auity’s AI Monitoring
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Boost agent accountability with real-time reviews.",
            "Assess customer & agent sentiment via AI.",
            "Identify & recover missed opportunities.",
            "Provide live feedback to agents.",
            "Ensure compliance & protect sensitive data.",
            "Guide agents for better sales & upselling.",
            "Enhance customer engagement & satisfaction.",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Call Quality Monitoring to a Tech Firm
            </h3>
            <p>
              A leading tech company was unhappy with their old provider. Nimble
              Auity helped them achieve their goals with improved monitoring and
              efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Case Study: Live Video, Audio & Text Monitoring
            </h3>
            <p>
              A major internet company in Singapore improved security and
              reduced costs with Nimble’s AI-powered monitoring services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “We only use Nimble Auity for marketing and monitoring services
          because of their professionalism and clear communication. They are
          unmatched globally.”
        </blockquote>
        <p className="mt-4 font-semibold">
          — Marketing Director, UK Spray Foam Insulation Company
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Transform Your Call Center with AI
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Auity’s AI monitoring solutions help you streamline operations,
          ensure compliance, and improve customer satisfaction.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default AIMonitoringSupport;
