import React from "react";
import DSmainmenu from "../DSmainmenu";

const DocumentDataEntry: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const benefits = [
    "Leverage an optimum mix of people and technology: Access trained data entry operators and superior infrastructure for best results.",
    "Get access to skilled project managers: Dedicated managers work to understand your business process, expectations, and ensure best service possible.",
    "Get superior results: Skilled partners using rigorous Quality Control (QC) processes for error-free output.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Document Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Focus on your core business while we handle all non-core document data entry work efficiently and accurately.
        </p>
        <p className="text-gray-600">
          With the right mix of trained personnel and technology, Nimble Acuity delivers best-in-class document data entry solutions globally.
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-purple-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Benefits of Outsourcing Document Data Entry</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="p-3 border-l-4 border-purple-600 bg-purple-50 rounded hover:bg-purple-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Nimble Acuity?</h2>
        <p className="text-gray-700 mb-4">
          Nimble Acuity is committed to providing exceptional document data entry services. From understanding your business processes to offering creative solutions tailored to your requirements, we ensure that you deliver great value to your customers.
        </p>
        <p className="text-gray-700">
          Our team combines years of experience, technical expertise, and rigorous quality control to manage large volumes of document data entry work accurately and efficiently.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105">
          Contact Us to Nimble Document Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default DocumentDataEntry;
