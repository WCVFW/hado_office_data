import React from "react";
import DSMainMenu from "../mainmenu";

const PredictiveModeling: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Predictive Modeling and its Applications
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Harness the power of predictive modeling to analyze historical and
          current data, forecast outcomes, and drive smarter decisions across
          industries.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Customer Relationship Management (CRM) solutions often require the
          creation of customer-level models that accurately predict buying
          patterns based on historical and current data. Predictive Modeling
          enables businesses to estimate the probability of customer actions,
          such as purchasing a product at a given price point.
        </p>
        <p>
          In essence, predictive modeling is a statistical technique that
          analyzes historical and current data to predict future outcomes,
          making it invaluable for decision-making across industries.
        </p>
      </section>

      {/* Types of Predictive Modeling */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Types of Predictive Modeling
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-gray-700 max-w-4xl mx-auto">
          {[
            "K-nearest Neighbor algorithm",
            "Majority Classifier",
            "Naïve Bayes",
            "Uplift Modeling",
            "Group Method Data Handling",
            "Logistic Regression",
          ].map((type, idx) => (
            <li key={idx}>{type}</li>
          ))}
        </ul>
      </section>

      {/* Applications */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Popular Applications of Predictive Modeling
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Auto Insurance",
              desc: "Determine accident risk levels for policy holders.",
            },
            {
              title: "Fraud Detection",
              desc: "Identify high-risk transactions and customers.",
            },
            {
              title: "Customer Retention",
              desc: "Predict the probability of customer churn and take proactive steps to retain them.",
            },
            {
              title: "Direct Marketing & CRM",
              desc: "Analyze customer behaviors to optimize marketing campaigns and improve ROI.",
            },
          ].map((app, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-600">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Applications */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">
          The Use of Predictive Modeling in Social Media
        </h2>
        <p className="max-w-4xl mx-auto mb-6 text-gray-700 text-center">
          Predictive modeling is extremely useful in Big Data scenarios such as
          social media, where unstructured data reveals powerful insights into
          customer behavior.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 max-w-4xl mx-auto">
          <li>
            Predict whether a user will buy a product advertised online based on
            their interactions.
          </li>
          <li>
            Evaluate decision influencers like peer opinions and reviews.
          </li>
          <li>
            Analyze the correlation between Facebook “likes” and sales to
            optimize marketing budgets.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Choose the Right Predictive Model with Nimble Acuity
        </h2>
        <p className="mb-4 text-gray-700">
          While many predictive models exist, choosing the most appropriate one
          for your business is often a challenge. Our expert analysts at
          Nimble Acuity follow a structured process:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Conduct a data audit to sanitize and prepare your data.</li>
          <li>
            Perform data analysis to establish correlations and build models.
          </li>
          <li>
            Create linear/non-linear mathematical models for deeper insights.
          </li>
          <li>
            Use simulation models to help you understand possible outcomes and
            scenarios.
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Unlock the Power of Predictive Modeling
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Transform your decision-making with predictive modeling and
          applications tailored to your business needs. Partner with us today to
          leverage data-driven strategies that deliver measurable results.
        </p>
        <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PredictiveModeling;
