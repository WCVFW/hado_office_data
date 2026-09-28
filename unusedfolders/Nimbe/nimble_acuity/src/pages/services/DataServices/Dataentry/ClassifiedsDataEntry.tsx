import React from "react";
import DSmainmenu from "../DSmainmenu";

const ClassifiedsDataEntry: React.FC = () => {
  const benefits = [
    "Maximum accuracy guaranteed through multiple rounds of quality testing",
    "Highly knowledgeable and trained data entry workforce",
    "Complete confidentiality of your database information",
    "Highly customized pricing schemes dependent on job complexity",
    "Small delivery timeframes",
    "Cost-effective pricing schemes",
    "All-round customer support",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Classifieds Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Classifieds and advertisements are reliable tools for promotions, but managing them across multiple channels can be tedious and resource-intensive. Outsourcing classifieds data entry ensures accuracy, efficiency, and cost-effectiveness.
        </p>
      </section>

      {/* Challenges Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Hiccups in Classifieds Data Entry</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Classifieds data entry requires repetition, precision, and efficiency. Handling it in-house can be time-consuming and costly, making outsourcing the preferred option for realtors, organizations, and marketing professionals.
        </p>
      </section>

      {/* Why Nimble Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Why Nimble to India?</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Outsourcing classifieds data entry to India saves time and money while ensuring high accuracy and quick turnaround. Nimble Acuity has the infrastructure and trained workforce to handle any volume of classifieds data efficiently.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 max-w-2xl mx-auto">
          <li>You are struggling to post classifieds in all important dailies</li>
          <li>You are losing out on business due to poorly managed classifieds</li>
          <li>You need hundreds of classifieds posted for your real estate brokerage</li>
          <li>You want to be part of a larger national advertising campaign</li>
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
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center max-w-3xl mx-auto">
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
          Contact Nimble Acuity for Classifieds Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default ClassifiedsDataEntry;
