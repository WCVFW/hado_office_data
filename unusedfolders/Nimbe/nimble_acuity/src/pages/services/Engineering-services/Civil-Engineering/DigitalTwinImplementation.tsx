import React from "react";
import ESmainmenu from "../ESmainmenu";

const DigitalTwinImplementation: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nimble Auity Digital Twin Implementation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Harness the power of point cloud data and IoT sensors with Nimble
          Auity's digital twin implementation services and virtualize your
          product environment at rates starting at <strong>$11/hour</strong>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-700">
          Why Choose Digital Twin Implementation?
        </h2>
        <p className="text-lg leading-relaxed">
          Transform your business and processes with Nimble Auity's digital twin
          services. Our solutions provide dynamic digital representations of
          your products, processes, and services, enabling you to analyze,
          predict, and resolve problems before they disrupt operations.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Benefits of Digital Twin Implementation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Streamline operations",
            "Improve asset performance",
            "Boost real-time monitoring and data processing",
            "Reduce wastage of products and raw materials",
            "Cut down maintenance and operational costs",
            "Make your organization future-ready",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-lg border bg-gray-50 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-700">
          Digital Twin Implementation Services by Nimble Auity
        </h2>
        <p className="text-lg">
          Nimble Auity leverages point cloud data and IoT to build powerful CAD
          models, predictive simulations, and seamless asset management
          solutions across industries.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Product Design & Development</li>
          <li>Pre-Production Support</li>
          <li>BIM Through Point Cloud Data</li>
          <li>After-Sales Support & Marketing</li>
          <li>Building & Construction Solutions</li>
        </ul>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Our Digital Twin Implementation Process
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            "Team Meet – Understand business needs and evaluate challenges",
            "Product Development – Create 3D digital twins using IoT & analytics",
            "Implementation – Integrate simulations and CAD models",
            "Testing – Ensure full optimization",
            "Optimization – Update with evolving processes",
          ].map((step, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow border hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-indigo-600">
                Step {i + 1}
              </h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nimble */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-indigo-700">
          Why Nimble Auity?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Cost-effective and customizable pricing</li>
          <li>Access to superior digital twin technologies</li>
          <li>Certified and experienced engineers</li>
          <li>Global delivery centers for fast service</li>
          <li>Complete data protection and security</li>
          <li>24/7 help and support</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Digital twin services are the future of productivity and efficiency.
          Let Nimble Auity help you connect your assets, processes, and systems
          for enhanced outcomes.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default DigitalTwinImplementation;
