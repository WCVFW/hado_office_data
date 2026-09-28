import React from "react";
import NavigationMenu from "../MegaMenu";

const CrossTabulationAnalysis: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Cross Tabulation Analysis Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to clean and reliable data that is easy to interpret to
          improve your decision-making process. Prices start at{" "}
          <span className="font-semibold">$14/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="text-gray-700 mb-6">
          Cross tabulation analysis is a quantitative research method for
          understanding relationships between variables. It enables comparisons
          between groups and sub-groups, offering clarity where raw survey data
          may otherwise be difficult to interpret.
        </p>
        <p className="text-gray-700">
          With over <strong>26+ years of experience</strong>, Nimble Acuity
          provides precise, clean, and reliable cross-tabulation analysis,
          helping organizations make smarter business decisions.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Cross Tabulation Analysis Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cross-Tab Analysis for Single Variable",
              desc: "We arrange univariate tables into groups by designations and values, then rank them for structured insights.",
            },
            {
              title: "Cross-Tab Analysis for Multiple Variables",
              desc: "Joint contingency (bivariate) tables compare variables, e.g. how citizens from different countries select products.",
            },
            {
              title: "Cross-Tab Analysis for Frequency Distributions",
              desc: "Visually compare features such as center, spread, shape, and irregularities to interpret data patterns.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Importance */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Importance of Cross Tabulation Analysis for Businesses
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>✔️ Provides deeper research results and robust conclusions.</li>
          <li>✔️ Eliminates errors by grouping variables simply and clearly.</li>
          <li>✔️ Helps interpret subtle and complex relationships in data.</li>
          <li>
            ✔️ Standardizes data presentation across an organization for
            easy understanding.
          </li>
        </ul>
      </section>

      {/* Common Uses */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Common Uses of Cross Tabulation Analysis
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "HR Managers & Directors",
              desc: "Analyze employee surveys to identify satisfaction issues and improve engagement.",
            },
            {
              title: "Market/Product Researchers",
              desc: "Map data against buyer groups to derive actionable insights from surveys.",
            },
            {
              title: "Market & Sales Researchers",
              desc: "Evaluate customer satisfaction differences and identify areas for improvement.",
            },
            {
              title: "Teachers & Academic Coordinators",
              desc: "Identify student strengths/weaknesses across subjects to improve performance.",
            },
          ].map((use, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{use.title}</h3>
              <p className="text-gray-600">{use.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Cross-Tabulation Analysis Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Creating Tables",
              desc: "Build tables for cross-analysis with proper numbering and titles.",
            },
            {
              step: "02",
              title: "Key in Data",
              desc: "Parse and input data, cross-check for accuracy, and add explanatory notes.",
            },
            {
              step: "03",
              title: "Cross Tabulation",
              desc: "Map and subgroup data to establish relationships and interpretations.",
            },
            {
              step: "04",
              title: "Quality Analysis",
              desc: "Review results, flag inconsistencies, and share validated insights.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 rounded-2xl text-center hover:bg-blue-100 transition"
            >
              <div className="text-2xl font-bold text-blue-600 mb-3">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Business Research Services",
            "Market Research Services",
            "Financial Research Report Services",
            "Research Reports Services",
          ].map((srv, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-md transition"
            >
              <p className="font-semibold">{srv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Outsourcing Cross Tabulation Analysis Services
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>✔️ Access to a team of experienced experts.</li>
          <li>✔️ Robust processes that minimize errors.</li>
          <li>✔️ Easy-to-digest presentation of complex data.</li>
          <li>✔️ Reveal important insights for smarter decisions.</li>
          <li>✔️ Support in driving results and identifying business patterns.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title:
                "Primary Research Services for Leading Chinese Trade Consultants",
              desc: "Delivered cost-effective and reliable primary research services for a leading Chinese client.",
            },
            {
              title:
                "Secondary Research Services for a Swiss Hospitality Company",
              desc: "Provided high-quality secondary research services quickly and accurately.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-2xl hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Cross Tabulation Analysis Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 26+ years of experience, Nimble Acuity provides customized, reliable, and
          precise cross-tabulation services. Partner with us to gain actionable
          insights and improve your decision-making process.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default CrossTabulationAnalysis;
