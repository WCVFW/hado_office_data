import React from "react";
import DSMainMenu from "../mainmenu";

const PredictiveAnalytics: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Predictive Analytics Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our advanced algorithms enable more strategic decisions by anticipating
          future trends, market shifts, and sales while assessing risks.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { value: "19+", label: "Outsourcing Experience" },
            { value: "100+", label: "Global Partnerships" },
            { value: "60+", label: "International Clients" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          At our company, we specialize in providing predictive analytics services
          that help businesses innovate and strive for growth. We integrate
          sophisticated machine-learning techniques with domain expertise to uncover
          hidden patterns and opportunities for innovation.
        </p>
        <p>
          Beyond forecasting market shifts and operational demands, we empower
          businesses to optimize customer interactions, address challenges, and drive
          sustainable success in an ever-evolving world.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Comprehensive Predictive Analytics Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Demand Forecasting",
              points: [
                "Predict future demand with AI models.",
                "Enhance inventory management efficiency.",
                "Optimize production planning decisions.",
              ],
            },
            {
              title: "Customer Segmentation",
              points: [
                "Identify distinct customer groupings accurately.",
                "Enable targeted marketing campaigns.",
                "Personalize customer engagement strategies.",
              ],
            },
            {
              title: "Risk Assessment",
              points: [
                "Quantify financial and operational risks.",
                "Develop robust risk mitigation plans.",
                "Ensure strategic resilience and security.",
              ],
            },
            {
              title: "Sales Prediction",
              points: [
                "Forecast revenue growth with precision.",
                "Optimize sales strategies effectively.",
                "Identify market opportunities proactively.",
              ],
            },
            {
              title: "Churn Analysis",
              points: [
                "Detect early signs of customer churn.",
                "Implement targeted retention interventions.",
                "Improve overall customer loyalty.",
              ],
            },
            {
              title: "Price Optimization",
              points: [
                "Adjust pricing dynamically with market trends.",
                "Maximize profit margins and competitiveness.",
                "Balance demand and pricing effectively.",
              ],
            },
            {
              title: "Fraud Detection",
              points: [
                "Identify fraudulent activities in real-time.",
                "Enhance security measures continuously.",
                "Minimize financial loss and risk.",
              ],
            },
            {
              title: "Supply Chain Optimization",
              points: [
                "Streamline logistics for efficiency gains.",
                "Reduce supply chain costs significantly.",
                "Improve service levels and agility.",
              ],
            },
          ].map((solution, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {solution.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Predictive Analytics Platforms Our Professionals Specialize In
        </h2>
        <p className="text-center mb-8 text-gray-700">
          We leverage leading tools and technologies to deliver robust predictive
          analytics solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "IBM SPSS Modeler",
            "SAS Advanced Analytics",
            "Rapid Miner",
            "Python",
            "Tableau",
            "Alteryx",
            "Tibco Statistica",
          ].map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Services We Provide
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Artificial Intelligence Services",
              desc: "Integrate AI to automate tasks, improve efficiency, and streamline decision-making.",
            },
            {
              title: "Data Engineering Services",
              desc: "Design scalable architectures for storage, processing, and accessibility.",
            },
            {
              title: "Data Analytics Services",
              desc: "Identify trends, patterns, and actionable insights with advanced analytics.",
            },
            {
              title: "Data Science Consulting Services",
              desc: "Specialized consultation for predictive modeling and advanced analysis.",
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
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Our Predictive Data Analytics Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Precision Customer Profiling",
              desc: "Go beyond demographics by including psychographics to boost campaign success.",
            },
            {
              title: "Holistic Risk Insights",
              desc: "Combine scenario planning with real-time data for comprehensive risk management.",
            },
            {
              title: "Sales Optimization Techniques",
              desc: "Enhance sales cycles with bespoke predictive models and smarter targeting.",
            },
            {
              title: "Adaptive Supply Chain Solutions",
              desc: "Utilize predictive analytics to cut lead times and optimize service delivery.",
            },
            {
              title: "Real-Time Fraud Protection",
              desc: "Deploy advanced fraud detection systems that act instantly against breaches.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Collaborate with Our Predictive Analytics Experts
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with us for risk management, fraud detection, customer
          engagement, and data-driven decision-making. Unlock new growth and
          innovation opportunities.
        </p>
        <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PredictiveAnalytics;
