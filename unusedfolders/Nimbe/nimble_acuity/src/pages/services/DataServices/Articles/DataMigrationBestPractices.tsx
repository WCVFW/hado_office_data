import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataMigrationBestPractices: React.FC = () => {
  const practices = [
    {
      title: "Examine the Data Complexity",
      desc: "Evaluate the complexity of the data and the resources available. The complexity of data strings can greatly impact the migration and integration process.",
    },
    {
      title: "Set Up Data Standards",
      desc: "Establish clear data standards during migration to ensure efficiency and consistent usage of data in the future.",
    },
    {
      title: "Clearly Define Future and Current Business Rules",
      desc: "Define rules for current and future data usage, ensuring compatibility with validation and business regulations.",
    },
    {
      title: "Outline Data Governance Roles",
      desc: "Clearly assign responsibilities for managing, maintaining accuracy, and accessing organizational data.",
    },
    {
      title: "Assess Data Quality",
      desc: "Conduct a data quality check to remove duplicates, irrelevant files, and create a clean master dataset before migration.",
    },
    {
      title: "Shortlist Migration Requirements",
      desc: "Analyze how company data will be used, by whom, and how it will evolve to finalize migration requirements.",
    },
    {
      title: "Identify the Best Tool",
      desc: "Choose a migration tool that supports customization, aligns with company needs, and is recommended by industry experts.",
    },
    {
      title: "Have a Risk Management System in Place",
      desc: "Ensure compliance with audits and regulations by establishing an efficient risk management framework.",
    },
    {
      title: "Manage Organizational Changes",
      desc: "Educate users, vendors, partners, and customers about the new system to ensure smooth adoption.",
    },
    {
      title: "Perform Migration Testing",
      desc: "Test migration continuously throughout the process to detect and fix issues early, and conduct extensive post-migration testing.",
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
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-600">
          10 Best Practices for Successful Data Migration
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Data migration is crucial for ensuring data integrity and minimizing disruption in business operations. These best practices simplify migration and ensure smooth transitions.
        </p>
      </header>

      {/* Best Practices */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Key Data Migration Tips
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-indigo-50 to-green-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-green-600">
          Avail Efficient Data Migration Services at Nimble Auity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity provides comprehensive, custom data migration services with state-of-the-art tools, proven processes, and expert teams. Our project managers ensure regular updates, compliance, and fast turnaround times.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default DataMigrationBestPractices;
