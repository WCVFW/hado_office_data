import React from "react";
import DSMainMenu from "../mainmenu";

const TextAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Text Analytics Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Affordable, high-quality text analytics services to help enterprises
          understand their market, competition, and customers better. At
          Nimble Acuity, we turn scattered heaps of information into insights
          that drive quicker and smarter decisions.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Understanding the potential of data analytics, Nimble Acuity offers
          highly accurate text analytics services to Fortune 1000 companies. Our
          robust processes deliver relevant and actionable business insights so
          you can make confident, data-driven decisions.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Text Analytics Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Text Data Collection",
              desc: "We mine and organize data into structured databases, enabling detailed analysis and better results.",
            },
            {
              title: "Text Data Pattern Recognition",
              desc: "We conduct advanced pattern recognition to identify hidden insights and recommend improvements.",
            },
            {
              title: "Principle Component Analysis",
              desc: "We separate key components of your data using factor analysis to highlight areas for optimization.",
            },
            {
              title: "Sentiment Analysis",
              desc: "We extract insights from voice and text data to understand customer sentiment toward your brand.",
            },
            {
              title: "Client Analytics",
              desc: "We uncover behavioral data to help you understand client habits and improve service delivery.",
            },
            {
              title: "Trend Analysis",
              desc: "We use statistical tools to identify the latest trends that guide better decision-making.",
            },
            {
              title: "Text Data Quality Analysis",
              desc: "We cleanse and validate collected data to ensure consistency and optimal accuracy in analysis.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          6 Reasons to Choose Nimble Acuity for Text Analytics Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Skilled Team:</strong> Experts trained in affinity analysis,
            sentiment analysis, and pattern recognition.
          </li>
          <li>
            <strong>Use of Latest Tools:</strong> Proficient in SPSS, SAS, R,
            text mining, and speech mining technologies.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> Flexible pricing models for
            cost-effective solutions.
          </li>
          <li>
            <strong>Quick Turnaround Time:</strong> Global delivery centers
            ensure faster results.
          </li>
          <li>
            <strong>Data Security:</strong> Strict confidentiality and security
            policies safeguard your information.
          </li>
          <li>
            <strong>ISO Certified Processes:</strong> Guaranteed high-quality,
            error-free results you can trust.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Text Analytics Services to Us
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With two decades of expertise, we provide exhaustive text analytics
          services across industries. From sentiment and trend analysis to data
          quality checks, we help businesses transform data into actionable
          insights while cutting down costs.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default TextAnalytics;
