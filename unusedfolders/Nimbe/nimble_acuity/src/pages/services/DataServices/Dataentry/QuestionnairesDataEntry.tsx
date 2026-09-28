import React from "react";
import DSmainmenu from "../DSmainmenu";

const QuestionnairesDataEntry: React.FC = () => {
  const benefits = [
    "Increased focus on core competencies – frees you to concentrate on value creation",
    "Access to trained professionals and state-of-the-art technology for superior results",
    "Enhanced usability of information – electronic data makes analysis and decision-making easier",
    "Assurance of quality through stringent QC and proofreading by experts",
    "Flexibility – deliverables in multiple formats (MS Word, Excel, Access, PDF, HTML) and delivery options (disk, CD, email, FTP)",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Questionnaires Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Efficiently capture, process, and analyze data from questionnaires
          using Nimble Acuity’s expert data entry solutions. Focus on your core
          business while we handle your survey data accurately and securely.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Questionnaires Data Entry Services
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition"
            >
              {benefit}
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

      {/* CTA Section */}
      <section className="text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Us for Questionnaire Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default QuestionnairesDataEntry;
