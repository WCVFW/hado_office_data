import React from "react";
import DSmainmenu from "../DSmainmenu";

const MysqlDatabaseDataEntry: React.FC = () => {
  const benefits = [
    {
      title: "The Right Mix of People and Technology",
      desc: "Access trained MySQL data entry specialists and advanced database tools for efficient handling of large volumes of data.",
    },
    {
      title: "Skilled Project Management",
      desc: "Dedicated project managers ensure top-quality results, open communication, and client satisfaction.",
    },
    {
      title: "Superior Results",
      desc: "Rigorous Quality Control (QC) and editorial review guarantee accuracy and contextually correct outputs.",
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
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble MySQL Database Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Ensure fast, accurate, and cost-effective MySQL database maintenance
          with Nimble Acuity. Focus on your core functions while we handle
          your database updates and management seamlessly.
        </p>
      </section>

      {/* Needs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Your MySQL Database Data Entry Needs
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          Most organizations rely on databases to store and manage critical
          information. Routine updates like inserting, deleting, or merging data
          can be costly and time-consuming. Nimble Acuity’s MySQL specialists take this
          burden off your shoulders by maintaining and updating your database
          efficiently.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Nimble Acuity's Solution
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded shadow hover:bg-blue-50 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Best-in-Class Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Best-in-Class Services at the Best Prices
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At Nimble Acuity, we emphasize open communication, seek honest feedback, and
          prioritize your project needs. Our prices are competitive, and our
          services ensure accuracy, efficiency, and unmatched value. Partner
          with us for reliable MySQL database data entry solutions.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for a Free Quote
        </button>
      </section>
    </div>
  );
};

export default MysqlDatabaseDataEntry;
