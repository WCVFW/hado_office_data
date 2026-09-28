import React from "react";
import DSmainmenu from "../DSmainmenu";

const DatabaseDataEntry: React.FC = () => {
  const benefits = [
    "Save up to 60% on operational costs",
    "Experienced team to manage your database entry project",
    "Dedicated project manager to ensure smooth execution",
    "Stringent information security policies to protect your data",
    "End-to-end database development, management, and migration services",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Database Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          At Nimble Acuity, we ensure high-quality database data entry services that enhance operational efficiency and accuracy. Focus on your core business while we handle your database management needs.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity for Database Data Entry?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          <li>Proficiency in multiple database platforms</li>
          <li>Proven accuracy levels as high as 98%</li>
          <li>Best practices ensuring quick retrieval and operational efficiency</li>
          <li>Customized services tailored to your project requirements</li>
          <li>Fast project turnaround without compromising quality</li>
          <li>Seamless integration with your core business processes</li>
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
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Database Entry to Nimble Acuity
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
          Contact Nimble Acuity for Database Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default DatabaseDataEntry;
