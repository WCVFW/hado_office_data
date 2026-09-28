import React from "react";
import DSmainmenu from "../DSmainmenu";

const InternetDataInput: React.FC = () => {
  const benefits = [
    "Access to trained personnel and sophisticated technology",
    "Access to professional project managers for superior delivery",
    "Assurance of superior services with rigorous QA & QC",
    "Faster turnaround times and efficient handling of large data volumes",
    "End-to-end services including data keying and validation",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Internet Data Input Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Focus on your core business while Nimble Acuity handles your internet data input projects. We provide accurate, cost-effective, and timely solutions for web-based or remote data entry requirements.
        </p>
      </section>

      {/* Why Nimble Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Nimble Internet Data Input to Nimble Acuity?
        </h2>
        <p className="text-gray-700 md:text-left text-center">
          Internet data input projects often require manual keying into online applications or remote software systems. Without proper quality control, errors can creep in. Nimble Acuity brings trained personnel, sophisticated technology, and a rigorous QA process to ensure error-free and reliable output every time.
        </p>
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
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Internet Data Input
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Internet Data Input Services
        </button>
      </section>
    </div>
  );
};

export default InternetDataInput;
