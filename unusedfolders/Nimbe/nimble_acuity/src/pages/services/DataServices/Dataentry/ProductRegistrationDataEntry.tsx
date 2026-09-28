import React from "react";
import DSmainmenu from "../DSmainmenu";

const ProductRegistrationDataEntry: React.FC = () => {
  const benefits = [
    "Access to trained professionals for processing huge volumes of data quickly",
    "Leverage state-of-the-art technology for superior results",
    "Dedicated project managers ensuring deadlines and quality",
    "Secure services with encrypted file transfers and FTP uploads",
    "Stringent QA process ensuring grammatical and contextual accuracy",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Product Registration Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Ensure efficient processing of warranty and product registration data. Nimble Acuity helps businesses manage registrations accurately while reducing costs and saving time.
        </p>
      </section>

      {/* Why Nimble Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Nimble Warranty Registration Data Entry Services?
        </h2>
        <p className="text-gray-700 mb-4">
          Efficient handling of customer warranty and product registration data is essential for protecting customer interests and improving service quality. Outsourcing ensures your team can focus on core business functions while receiving accurate, timely, and secure data entry services.
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
          Benefits of Outsourcing Product Registration Data Entry
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
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Product Registration Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default ProductRegistrationDataEntry;
