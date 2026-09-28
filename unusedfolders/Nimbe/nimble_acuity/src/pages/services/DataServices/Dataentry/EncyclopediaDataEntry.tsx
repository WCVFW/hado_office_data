import React from "react";
import DSmainmenu from "../DSmainmenu";

const EncyclopediaDataEntry: React.FC = () => {
  const outputFormats = [".dbf (Database)", ".doc (Word)", ".xls (Excel)", ".mdb (Access)", ".html (HTML)", ".pdf (Adobe)"];
  const deliveryMethods = ["Direct modem transfer", "CD-ROM", "E-mail", "FTP download", "Fax"];
  const benefits = [
    "Stringent data entry processes",
    "Experienced data entry operators to key in your vital information",
    "Skilled information search specialists to instruct operators on data to be keyed in",
    "Customized pricing packages depending on the complexity and volume of data entry",
    "Petite delivery time frames",
    "Output delivery in a variety of formats and delivery modes",
    "Helpful customer support available round-the-clock",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Data Entry from Encyclopedias, Manuals & Dictionaries
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Enter data from dictionaries, manuals, or encyclopedias into an online database with accuracy and speed. Nimble Acuity provides reliable services, ensuring timely delivery.
        </p>
        <p className="text-gray-600">
          Get access to professional data entry services delivered ahead of schedule, with stringent quality assurance and versatile output formats.
        </p>
      </section>

      {/* Output Formats */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Output Formats We Provide</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-center md:text-left">
          {outputFormats.map((format, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {format}
            </li>
          ))}
        </ul>
      </section>

      {/* Delivery Methods */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Delivery Methods</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-center md:text-left">
          {deliveryMethods.map((method, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
              {method}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Benefits of Outsourcing Data Entry</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-blue-50 p-3 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
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
          <p className="text-gray-600">Skilled Experts</p>
        </div>
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-2xl font-bold">99%</h3>
          <p className="text-gray-600">Accuracy</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Encyclopedia & Manual Data Entry
        </button>
      </section>
    </div>
  );
};

export default EncyclopediaDataEntry;
