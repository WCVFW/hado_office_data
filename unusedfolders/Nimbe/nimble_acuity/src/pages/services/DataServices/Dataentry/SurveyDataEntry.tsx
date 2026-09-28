import React from "react";
import DSmainmenu from "../DSmainmenu";

const SurveyDataEntry: React.FC = () => {
  const services = [
    "Survey Scanning Services – using OMR, OCR, and ICR for paper-based surveys",
    "Survey Data Entry – online entry in XML, Excel, Tab Delimited (TXT), SPSS (SPV)",
  ];

  const benefits = [
    "Customized Solutions – tailored to fit client requirements",
    "Accuracy – single or double layer data entry conforming to international quality standards",
    "Flexible Output – FTP, email, or hard copy delivery",
    "Trained Team – skilled data entry specialists with prior survey experience",
    "Quality Control – stringent QC with proofreading and editing",
    "Cost-effective Pricing – 40-60% less than in-house team",
    "Fast Turnarounds – projects completed ahead of schedule",
    "24/6 Support – customer service when you need it",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Survey Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Handle large volumes of survey data entry with precision and efficiency. 
          Nimble Acuity provides customized survey data entry solutions for universities, market research agencies, franchises, banks, and the public sector.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Survey Data Entry Services We Offer
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 md:text-left text-center">
          {services.map((service, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Survey Data Entry Process Flow</h2>
        <ol className="list-decimal pl-5 space-y-3 text-gray-700 md:text-left text-center">
          <li><strong>Client Briefing:</strong> Receive briefing on required services</li>
          <li><strong>Input:</strong> Transfer survey samples (JPEG, paper, or electronic) via FTP or Dropbox</li>
          <li><strong>Survey Data Entry:</strong> Enter data into client’s preferred application</li>
          <li><strong>Edits:</strong> Send first draft to client and apply edits if needed</li>
          <li><strong>Final Output:</strong> Deliver final output via FTP or Dropbox</li>
        </ol>
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
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Using Our Survey Data Entry Services</h2>
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
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Nimble Acuity for Survey Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default SurveyDataEntry;
