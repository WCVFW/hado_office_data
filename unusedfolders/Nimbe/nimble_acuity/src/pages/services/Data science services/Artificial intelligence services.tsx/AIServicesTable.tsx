import React from "react";
import DSMainMenu from "../mainmenu";

const AIServicesTable: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Artificial Intelligence Services
        </h1>
        <p className="text-lg max-w-4xl mx-auto">
          Create the biggest impact in your industry by leveraging our
          cutting-edge artificial intelligence services provided by seasoned
          data scientists.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto py-10 px-6 text-gray-700">
        <p className="mb-6">
          Nimble Acuity has been a pioneer in providing quality AI services
          to organizations around the globe. Our team leverages advanced
          programming and AI techniques like cognitive learning, machine
          learning, and pattern recognition to build smart systems.
        </p>
      </section>

      {/* Services Table */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          AI Services We Offer
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  title: "Machine Learning Services",
                  desc: "Identify patterns, make automated decisions, and solve complex business challenges.",
                },
                {
                  title: "Deep Learning Services",
                  desc: "Simulate the brain to perform advanced recognition tasks with high accuracy.",
                },
                {
                  title: "Predictive Analytics Services",
                  desc: "Enhance forecasting for marketing, sales, financial trends, and more.",
                },
                {
                  title: "AI Development Services",
                  desc: "Customized AI solutions built to meet your specific business needs.",
                },
                {
                  title: "AI Enterprise Solutions",
                  desc: "Streamline enterprise processes and automate repetitive workflows.",
                },
                {
                  title: "Cognitive Process Automation",
                  desc: "Automate unstructured and rule-based tasks with cognitive AI.",
                },
                {
                  title: "Computer Vision Services",
                  desc: "Use vision-based AI for inspections, automation, and analysis.",
                },
                {
                  title: "Natural Language Processing (NLP)",
                  desc: "Comprehensive NLP services using linguistics and AI for smarter systems.",
                },
                {
                  title: "Automated Visual Inspection",
                  desc: "Deploy AI-based inspection for product quality control.",
                },
                {
                  title: "Conversational AI Services",
                  desc: "Enhance chatbots and AI assistants with deep learning and NLP.",
                },
              ].map((service, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-5 font-semibold text-gray-900 w-1/3 border-r border-gray-200">
                    {service.title}
                  </td>
                  <td className="p-5 text-gray-700">{service.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our AI Solutions Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Requirement Analysis",
            "Identify Stakeholders",
            "Design Enrichment",
            "Implementation",
            "System Integration",
            "Software Testing",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border shadow hover:shadow-md text-center"
            >
              <div className="text-4xl font-bold text-indigo-700 mb-3">
                {idx + 1}
              </div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Are We the Preferred AI Company?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Flexible Pricing",
            "ISO/IEC 27001:2022 Certified Security",
            "High-quality AI Services",
            "Best Infrastructure",
            "Experienced Data Scientists",
            "Single Point of Contact",
            "24/7 Availability",
            "Ease of Scalability",
            "Quick Turnaround",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-lg border hover:bg-gray-200 transition"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-blue-50 py-14 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Data Engineering Services",
            "Data Analytics Services",
            "Business Analytics Services",
            "Business Intelligence Services",
          ].map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border hover:shadow-md transition"
            >
              {srv}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble AI Services to Us – The Industry Leaders
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With over a decade of expertise, Nimble Acuity delivers scalable,
          reliable, and intelligent AI solutions worldwide. Partner with us to
          unlock growth powered by Artificial Intelligence.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default AIServicesTable;
