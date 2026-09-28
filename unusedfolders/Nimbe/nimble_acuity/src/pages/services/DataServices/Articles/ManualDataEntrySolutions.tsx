import React from "react";
import DSmainmenu from "../DSmainmenu";

const ManualDataEntrySolutions: React.FC = () => {
  const solutions = [
    {
      title: "Educate the Employees",
      desc: "Staff awareness on data accuracy and importance reduces errors and improves overall data quality.",
    },
    {
      title: "Reduce Redundant Data",
      desc: "Analyze data before entry to avoid repetition, save time, and minimize errors.",
    },
    {
      title: "Cleanse Data Over Time",
      desc: "Regularly verify and update data to maintain accuracy and list hygiene over the long term.",
    },
    {
      title: "Identify the Data Sources",
      desc: "Understand where data enters your system, prioritize channels, and create a full data workflow.",
    },
    {
      title: "Standardize the Process",
      desc: "A standardized process ensures consistency, reduces errors, and sets the stage for automation.",
    },
    {
      title: "Monitor the Process",
      desc: "Constant monitoring and feedback help prevent repeated mistakes and improve processes.",
    },
    {
      title: "Automate the Data Entry Process",
      desc: "Using OCR, IMR, or automation packages saves time, reduces costs, and ensures data accuracy.",
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

  const reentryTips = [
    {
      title: "Avoid Running Multiple Systems",
      desc: "Do not use interdependent systems simultaneously to prevent duplicate data entry.",
    },
    {
      title: "Allow Employees to Enter their Own Data",
      desc: "Field employees entering their own data reduces handwriting errors and re-entry issues.",
    },
    {
      title: "Avoid Using Excel Spreadsheets",
      desc: "Errors in Excel cells can cascade and require re-entry. Use structured data entry tools instead.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          How to Solve Manual Data Entry Challenges
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Manual data entry is time-consuming and error-prone. Here are effective ways to tackle common challenges and improve efficiency.
        </p>
      </header>

      {/* 7 Ways Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          7 Ways to Address Manual Data Entry Challenges
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{solution.title}</h3>
              <p className="text-gray-700">{solution.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
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

      {/* Data Re-entry Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          How to Avoid the Problem of Data Re-entry
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reentryTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Hire Nimble for Efficient Data Entry
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity is a leading provider of data entry and conversion services with 26+ years of experience. Our top-quality processes are scalable and cost-effective, leveraging advanced tools for accurate and timely delivery.
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto">
          If you are looking for quick, reliable, and efficient data entry services, Nimble is the right choice.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ManualDataEntrySolutions;
