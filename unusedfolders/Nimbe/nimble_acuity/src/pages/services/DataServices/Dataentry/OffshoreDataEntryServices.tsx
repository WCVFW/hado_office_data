import React from "react";
import DSmainmenu from "../DSmainmenu";

const OffshoreDataEntryServices: React.FC = () => {
  const services = [
    "Data Aggregation Services",
    "Data Validation Services",
    "Data Tabulation Services",
    "Data Analysis Services",
    "Document Indexing Services",
    "Market Research and Analysis Services",
    "Web Research Services",
  ];

  const benefits = [
    "Affordable rates - Clean, consistent, and updated databases at highly affordable rates",
    "Complete Data Security - ISO-compliant measures to prevent unauthorized access",
    "Quick Turnaround - 24/7 team ensures timely project completion",
    "Increased Scalability - Handle small or large data sets efficiently",
    "Skilled Resources - Multi-tier quality checks for 100% data accuracy",
  ];

  const additionalServices = [
    "Data Entry Services - Reduce operational costs and bulk paperwork",
    "Data Processing Services - Data mining, cleansing, deduplication, extraction",
    "Data Conversion Services - Text, image, book, HTML, and PDF conversion",
    "OCR Services - Make documents editable for better accuracy",
    "Catalog Processing Service - Improve processes and reduce costs",
    "eBook Conversion Services - Quality outputs at optimized costs",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Offshore Data Entry Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          Improve your business competency and core proficiency with 100% accurate offshore data entry services. Cut costs by up to 60% with scalable, reliable solutions.
        </p>
        <p className="text-gray-600">
          ISO-certified with clients in 160+ countries, Nimble Acuity offers round-the-clock support and customized services across multiple domains.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Offshore Data Entry Services</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-center md:text-left">
          {services.map((service, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          {additionalServices.map((service, idx) => (
            <li key={idx} className="bg-green-50 p-3 rounded border-l-4 border-green-600 hover:bg-green-100 transition">
              {service}
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
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105">
          Contact Us for Offshore Data Entry Services
        </button>
      </section>
    </div>
  );
};

export default OffshoreDataEntryServices;
