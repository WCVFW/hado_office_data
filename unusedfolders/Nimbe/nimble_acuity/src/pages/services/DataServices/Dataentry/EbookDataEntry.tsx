import React from "react";
import DSmainmenu from "../DSmainmenu";

const EbookDataEntry: React.FC = () => {
  const services = [
    "eBook Design",
    "eBook Editing",
    "eBook Formatting",
    "eBook Creation",
    "Complex Conversions",
    "ePub and Mobi-Standard / Reflowing",
    "Standard Format",
    "Fixed Layout eBook",
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const process = [
    { step: "Client Briefing", description: "Discussion with client to understand the kind of service required." },
    { step: "Input", description: "Client transfers script, text, or hard copy via email, Dropbox, or FTP." },
    { step: "eBook Data Entry", description: "Editing, formatting, and conversion into the required eBook format." },
    { step: "Final Output", description: "Final eBook delivered in preferred format (Mobi, ePub) via FTP or Dropbox." },
  ];

  const benefits = [
    "Increased Business Focus: Concentrate on core competencies while we handle eBook data entry.",
    "Enhanced Content Usability: eBooks are accessible on notebooks, tablets, mobile, or desktop.",
    "Affordable Prices: Flexible pricing models based on complexity and features required.",
    "Trained Professionals: Skilled experts with proven experience in eBook data entry.",
    "Short Delivery Times: Projects completed on schedule without delays.",
    "Quality Assurance: Proofreaders and editors ensure accuracy and error-free output.",
    "Flexible Input: Works with PDF, Word, printed copies, scanned books.",
    "Flexible Output: Delivery via email, FTP, or Dropbox in various eBook formats.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble eBook Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Professional eBook data entry services for organizations globally. Convert content from electronic or paper sources into professionally formatted eBooks in any language.
        </p>
        <p className="text-gray-600">
          Efficient conversion of documents, brochures, catalogs, books, articles, and more into ready-to-publish eBooks.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our eBook Data Entry Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {services.map((service, idx) => (
            <li key={idx} className="p-3 border-l-4 border-purple-600 bg-purple-50 rounded hover:bg-purple-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-purple-50 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">eBook Data Entry Process</h2>
        <div className="space-y-6">
          {process.map((step, idx) => (
            <div key={idx} className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded hover:bg-purple-100 transition">
              <h3 className="text-xl font-bold mb-2">{step.step}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Benefits of Outsourcing eBook Data Entry Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="p-3 border-l-4 border-purple-600 bg-purple-50 rounded hover:bg-purple-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105">
          Contact Us for eBook Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default EbookDataEntry;
