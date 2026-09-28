import React from "react";
import DSmainmenu from "../DSmainmenu";

const bigDataChanges = [
  {
    title: "Chief Data Officers (CDO) will Move to the Foreground",
    content:
      "This is going to be one of the key trends of big data. Chief Data Officers will have greater authority within enterprises, connecting corporate data assets with line-of-business users, and leading data monetization efforts.",
  },
  {
    title: "Preparing a Robust Data Governance Strategy Will Become Inevitable",
    content:
      "To use Big Data securely and effectively, businesses need a governance framework that ensures provenance, democratization, and accessibility. GDPR and other regulations make governance a crucial factor.",
  },
  {
    title: "Finally, the Light will Descend on the Dark Data",
    content:
      "Dark Data refers to data stored but unused beyond regulatory compliance. By 2020, 93% of all data falls under this category. Effective analysis can turn unstructured data into a goldmine of insights.",
  },
  {
    title: "Quantum Computing will Raise its Head",
    content:
      "Quantum computing will push the limits of traditional computing, enabling analytics of previously unthinkable proportions and transforming big data processing.",
  },
  {
    title: "Honeymoon Period with Data Lakes May Fizzle Out",
    content:
      "Data lakes promise centralized storage but face quality, consistency, and governance challenges. Enterprises need better strategies to leverage actionable insights.",
  },
  {
    title: "Artificial Intelligence (AI) and Machine Learning (ML) Will Proliferate",
    content:
      "AI and ML will enhance big data processing via applications like video analytics, pattern recognition, churn modeling, dynamic pricing, and fraud detection. Spending on AI/ML is expected to grow significantly.",
  },
  {
    title: "Edge Analytics will Gain Increased Traction",
    content:
      "Edge analytics processes data at the capture point, reducing bandwidth, latency, and load spikes. The market for edge analytics is expected to grow at 27.6% CAGR to $25B by 2025.",
  },
];

const bigDataStats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "8-24 Hrs", label: "Faster Turnaround" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "350+", label: "Skilled Data Management Experts" },
  { value: "99%", label: "Accuracy" },
  { value: "21", label: "Years Experience" },
];

const bigDataChallenges = [
  "Challenge of volume: Companies face space crunch to store and analyze exploding data, especially unstructured data.",
  "Timely insights: Enterprises cannot let big data sit idle in repositories.",
  "Skill gap: Shortage of qualified big data professionals versus demand.",
  "Data integration: Combining diverse data sources is complex.",
  "Data security & privacy: Threats like breaches demand robust handling of sensitive information.",
];

const BigData2020: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Big Data in 2020: Future, Growth, and Challenges
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
          Big data is no longer hype; it’s a key enterprise technology delivering insights. Discover the trends, growth opportunities, and challenges in the big data world, and learn how Nimble Auity can help manage your data efficiently.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Get Started
        </a>
      </section>

      {/* Changes Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Key Changes and Trends in Big Data
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {bigDataChanges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {bigDataStats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Top 5 Big Data Challenges
        </h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside text-gray-700 space-y-4 text-lg">
          {bigDataChallenges.map((challenge, idx) => (
            <li key={idx}>{challenge}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-blue-600 text-white rounded-xl py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Auity: Big Data Management & Analytics Partner
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Nimble Auity stays ahead in the ever-evolving big data landscape. With 26+ years of experience in data management and analytics, we provide cost-effective solutions to help you extract maximum insights from your data and drive better business decisions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default BigData2020;
