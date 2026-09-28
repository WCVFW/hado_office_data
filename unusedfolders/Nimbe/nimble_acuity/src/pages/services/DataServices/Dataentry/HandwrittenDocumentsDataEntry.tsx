import React from "react";
import DSmainmenu from "../DSmainmenu";

const HandwrittenDocumentsDataEntry: React.FC = () => {
  const processFlow = [
    { step: "Briefing", description: "Nimble Acuity Business Development Manager assesses client requirement" },
    { step: "Team Allocation", description: "Trained data entry professionals assigned to the project according to client requirement" },
    { step: "Input", description: "Client transfers printed/handwritten documents via FTP or Dropbox, in various formats" },
    { step: "Data Entry", description: "Qualified data entry professionals perform data entry services manually" },
    { step: "Review", description: "First draft reviewed and edits/modifications completed if any" },
    { step: "Output", description: "Final output transferred via FTP, Dropbox etc., in client preferred format - MS Word, PDF etc." },
  ];

  const benefits = [
    "100% accuracy through manual checking and proofreading",
    "Cost savings of 60+%",
    "Reduced time and effort for handling large volumes of data",
    "Skilled team of 400+ data entry operators, QAs, and project managers",
    "High-quality processes adhering to ISO document management standards",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Handwritten / Printed Documents Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
          Convert your handwritten or printed documents into digital files efficiently and securely with Nimble Acuity's data entry services. Over two decades of experience ensure accuracy, fast turnarounds, and cost savings.
        </p>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Data Entry Services</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Nimble Acuity provides digitization of all types of documents, including birth records, municipal records, town records, legal documents, scientific books, journals, and newsletters. Using manual and OCR-assisted data entry, we ensure precise, error-free results.
        </p>
      </section>

      {/* Process Flow Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Process Flow</h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          {processFlow.map((item, idx) => (
            <li key={idx} className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded hover:bg-blue-50 transition">
              <h3 className="font-bold text-lg">{`${item.step}`}</h3>
              <p className="text-gray-700">{item.description}</p>
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
        <ul className="list-disc pl-5 space-y-3 max-w-3xl mx-auto text-gray-700">
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
          Contact Nimble Acuity for Handwritten Documents Data Entry
        </button>
      </section>
    </div>
  );
};

export default HandwrittenDocumentsDataEntry;
