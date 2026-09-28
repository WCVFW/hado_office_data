import React from "react";
import DSmainmenu from "../DSmainmenu";

const TextNumericDataEntry: React.FC = () => {
  const features = [
    "Guaranteed accuracy, speed, and high-quality output",
    "State-of-the-art software and technology to automate data",
    "Pre-defined, tested, and proven data entry and management process",
    "Manual and automatic text & numeric data entry capabilities",
    "Comprehensive data entry and management services",
    "Expert operators handling your project",
    "Customized service according to project scope and requirements",
  ];

  const benefits = [
    "98% accuracy on single key, 99.5% on double key",
    "Quick turnaround time for projects",
    "Save almost 60% on operational costs",
    "Rigorous data security and confidentiality",
    "Automated, organized, and structured data for efficient utilization",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Text & Numeric Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          At Nimble Acuity, we handle both manual and automated text & numeric data entry with high accuracy, speed, and efficiency.  
          We process data from hard copies, OCR, ICR, and handwriting recognition, making it digitally organized and ready for your business use.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Services?</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {features.map((feature, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {feature}
            </li>
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Outsourcing to Nimble Acuity</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
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
          Contact Nimble Acuity for Text & Numeric Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default TextNumericDataEntry;
