import React from "react";
import DSmainmenu from "../DSmainmenu";

const DirectoryServices: React.FC = () => {
  const directoryDetails = [
    "Targeted Industries",
    "Specific Roles in an Industry",
    "Contact Information of Decision Makers and Executives",
    "Complete Data including Address, Company Name, Contact Name, Designation, Email Address, and Direct Phone Number",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const experiencePoints = [
    "26+ years of experience in offering Directory Services",
    "Delivered directories to prestigious institutions such as Boston University, Stanford University, and Yale School of Management",
    "Converted documents in various languages like Portuguese and Swedish into online formats with accents and punctuation",
    "Known for fast, reliable results, integrity in business, and outsourcing expertise across services",
    "Dedicated team delivering exceptional value that sets us apart from competitors",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Directory Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Store, organize, and provide access to directory information efficiently. Ensure your data is updated in real-time and accessible to all stakeholders.
        </p>
        <p className="text-gray-600">
          Our expert team creates directories with complete accuracy to help your business act on leads and make informed decisions.
        </p>
      </section>

      {/* What Are Directory Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What Are Directory Services?
        </h2>
        <p className="text-gray-700 mb-4">
          Directory services store, organize, and provide access to directory information ensuring updated data is accessible to all stakeholders.
        </p>
        <ul className="list-disc pl-5 text-gray-700 grid md:grid-cols-2 gap-2">
          {directoryDetails.map((item, idx) => (
            <li key={idx} className="p-2 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* When Do You Need Directory Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          When Do You Need Directory Services?
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Directory services are essential whenever you need to add, track, and maintain data hierarchies. They help you recognize emerging markets, track prospects, and manage specific business segments efficiently.
        </p>
      </section>

      {/* Why Nimble Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Nimble Directory Services?
        </h2>
        <p className="text-gray-700 mb-4">
          Effective directory management requires detailed data research, cross-referencing, and 100% accuracy. Outsourcing to Nimble Acuity ensures reliable, accurate, and timely directories without burdening your in-house team.
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Experience and Performance
        </h2>
        <ul className="list-disc pl-5 text-gray-700 grid gap-2 max-w-3xl mx-auto">
          {experiencePoints.map((point, idx) => (
            <li key={idx} className="p-2 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-gray-100 transition">
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Customized Directory Services
        </button>
      </section>
    </div>
  );
};

export default DirectoryServices;
