import React from "react";
import DSmainmenu from "../DSmainmenu";

const misconceptions = [
  {
    title: "Data Management is not Difficult",
    content:
      "Although data management is beneficial, it is not easy. To start, understand data management better, involve employees, and evaluate how it benefits the company.",
  },
  {
    title: "The Company is not Ready for Data Management",
    content:
      "Start small when implementing data management. Use one resource initially and gradually ramp up to overcome large-scale implementation concerns.",
  },
  {
    title: "Data Management is about Data Security and Data Management Quality",
    content:
      "Security and quality are important but not the only aspects. A more inclusive approach ensures identification and addressing of all potential data management challenges.",
  },
  {
    title: "There is no Difference between Data Management & Master Data Management (MDM)",
    content:
      "Data management is broader, covering culture and decision-making based on data. MDM is a subset, focused on a single source of organizational data.",
  },
  {
    title: "Data Management is IT Team's Responsibility",
    content:
      "Effective data management requires collaboration between IT and functional teams to ensure transparent processes across the organization.",
  },
  {
    title: "Cloud Storage of Data Compromises the Security",
    content:
      "Cloud storage is more secure than local devices. It uses encryption, firewalls, authentication gateways, and other security measures.",
  },
  {
    title: "Cloud Data Management Software is Expensive",
    content:
      "Modern cloud software is more affordable than traditional tools when considering hardware, storage, licensing, backup, and energy costs.",
  },
  {
    title: "There is no Return on Investment",
    content:
      "Data management provides ROI via improved process efficiency, reduced expenses, and increased sales based on insights from data analysis.",
  },
  {
    title: "The Cloud Data Environment is Difficult to Access",
    content:
      "Cloud storage is easy to access from anywhere with internet connectivity, eliminating past accessibility issues.",
  },
  {
    title: "Cloud Data Software is for Smaller Organizations",
    content:
      "Cloud storage is unlimited and scalable, enabling businesses of any size to work efficiently and in a structured manner.",
  },
];

const stats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "8-24 Hrs", label: "Faster Turnaround" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "350+", label: "Skilled Data Management Experts" },
  { value: "99%", label: "Accuracy" },
  { value: "21", label: "Years Experience" },
];

const DataManagementMisconceptions: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          10 Common Misconceptions about Data Management
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-sm">
          Data is the new business currency. Effective data management can unlock actionable insights and significant ROI. Learn the top 10 misconceptions companies often have and how to overcome them.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Get Started
        </a>
      </section>

      {/* Misconceptions Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Top 10 Data Management Misconceptions
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {misconceptions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-indigo-700 text-white rounded-xl py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Auity: Your Trusted Data Management Partner
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Nimble Auity is a leading provider of data management services in India with 26+ years of experience. We cater to clients globally, delivering efficient, scalable, and cost-effective solutions to handle even large volumes of data.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default DataManagementMisconceptions;
