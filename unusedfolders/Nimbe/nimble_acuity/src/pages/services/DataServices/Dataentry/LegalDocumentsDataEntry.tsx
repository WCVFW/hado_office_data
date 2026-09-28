import React from "react";
import DSmainmenu from "../DSmainmenu";

const LegalDocumentsDataEntry: React.FC = () => {
  const useCases = [
    "Divorce forms",
    "Insurance claim records",
    "Shipping documents",
    "Property related documents",
    "Court forms",
    "Case details data entry",
    "Property documents into online databases",
    "Legislation scans",
    "Bare Act & Citations",
  ];

  const benefits = [
    "Highly accurate data entry services compared to other providers",
    "Customized data entry packages depending on volume and duration",
    "Confirmed discounts on high-volume projects",
    "Superior quality of outputs",
    "Support for a variety of source formats",
    "Quick delivery timeframes",
    "Round-the-clock customer support",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Legal Documents Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
          Legal documents require specialized handling due to confidentiality and complex terminology. Nimble Acuity provides secure and accurate legal data entry services at affordable costs.
        </p>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why Nimble to Nimble Acuity?</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Our highly knowledgeable data entry operators provide manual and automated data entry solutions from paper, image, and electronic sources. Accuracy exceeds 98%, and projects are handled with speed and efficiency.
        </p>
      </section>

      {/* Use Cases Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Common Legal Data Entry Use Cases</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 max-w-2xl mx-auto text-center md:text-left">
          {useCases.map((item, idx) => (
            <li key={idx} className="hover:text-blue-600 transition">{item}</li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-5 gap-6 text-center mb-16">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">40%</h3>
          <p className="text-gray-600">Cost Reduction</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">8-24 Hrs</h3>
          <p className="text-gray-600">Faster Turnaround</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">350+</h3>
          <p className="text-gray-600">Skilled Data Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Outsourcing Legal Data Entry</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 max-w-3xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Legal Documents Data Entry
        </button>
      </section>
    </div>
  );
};

export default LegalDocumentsDataEntry;
