import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataAccuracy: React.FC = () => {
  const methods = [
    {
      title: "Inaccurate Data Sources",
      desc: "Identify correct internal and external data sources. Fix issues arising from database migration, incorrect values, or time-sensitive changes to improve overall data quality.",
    },
    {
      title: "Set Data Quality Goals",
      desc: "Top management should define realistic goals to address data accuracy problems. Goals must focus on efficient capturing, error-free entry, and effective coding.",
    },
    {
      title: "Avoid Overloading",
      desc: "Overworked data entry specialists are prone to errors. Delegate workloads or spread tasks across weeks to ensure accuracy is maintained.",
    },
    {
      title: "Review the Data",
      desc: "Double-checking data through reviews or employing QA teams ensures reduced errors. Reviewing builds a culture of accuracy across the organization.",
    },
    {
      title: "Automate Error Reports",
      desc: "Leverage modern tools to generate automated error reports, especially useful for repetitive data entry tasks. This accelerates correction and reduces human oversight.",
    },
    {
      title: "Adopt Accuracy Standards",
      desc: "Implement standards like geo-coding, monitoring, profiling, and linking. Robust frameworks enforce consistency and improve long-term accuracy.",
    },
    {
      title: "Have a Good Work Environment",
      desc: "A healthy, supportive work environment enhances focus and reduces mistakes, directly improving accuracy rates.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
          7 Top Ways to Improve Data Accuracy
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In today’s digital-first world, accurate data is the foundation of sound business decisions. Poor data quality impacts revenues, operations, and strategy. Here’s how you can maintain exceptional accuracy in data entry.
        </p>
      </header>

      {/* Methods */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Improve Data Accuracy?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((m) => (
            <article
              key={m.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 border border-gray-50"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{m.title}</h3>
              <p className="text-gray-600 leading-relaxed">{m.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 grid sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{s.value}</div>
            <div className="text-gray-600 text-sm">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Related Services */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Related Services</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Online Data Entry Services</li>
          <li>Data Mining Services</li>
          <li>Internet Data Input Services</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 shadow-md text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Nimble Auity Helps You Focus on Data Quality
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          Nimble Auity has been delivering exceptional data accuracy and entry services for over 26 years. Our expertise ensures timely delivery of complex projects while staying cost-efficient and secure.
        </p>
        <p className="text-gray-600 mb-4">
          If you need a reliable partner to validate your data for completeness and accuracy, talk to one of our experts today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-indigo-600 transition">
            Contact Us
          </button>
          <button className="border border-gray-200 px-5 py-2 rounded-md hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataAccuracy;
