import React from "react";
import DSmainmenu from "../DSmainmenu";

const SGMLConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          SGML Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity provides professional SGML conversion services to help companies efficiently manage, store, and deliver complex information products.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          SGML (Standard Generalized Markup Language) is widely used for creating, storing, managing, and delivering information products. With the growing demand for SGML, Nimble Acuity offers comprehensive SGML conversion services tailored to meet diverse business needs.
        </p>
        <p>
          We serve large corporations, government agencies, online information providers, publishers, law firms, and other organizations requiring sophisticated content management solutions.
        </p>
      </section>

      {/* SGML Conversion Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our SGML Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Documenting technical manuscripts</li>
          <li>Conversion of microfilm, microfiche, print, and electronic files to SGML</li>
          <li>Data analysis and DTD/Schema design</li>
          <li>Pagination and composition</li>
          <li>SGML consulting services</li>
          <li>XSLT or XSL-FO development</li>
          <li>Scanning and graphics manipulation</li>
          <li>Advanced multi-engine OCR or IC</li>
          <li>SGML to Excel conversion service</li>
          <li>SGML to HTML for web publishing</li>
          <li>Text to SGML conversion for storage on CD-ROMs or DVDs</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing SGML Conversion
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Access to customized solutions for technical manuscripts, encyclopedias, dictionaries, scientific books, and journals</li>
          <li>Leverage trained personnel for high-volume, deadline-sensitive projects</li>
          <li>Access to sophisticated technology ensuring data integrity and zero data loss</li>
          <li>Assurance of quality through stringent QC processes and validation</li>
          <li>Superior project management with dedicated managers, transparent communication, and timely delivery</li>
        </ul>
      </section>

      {/* Metrics */}
      <section className="mb-12 text-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">40%</p>
          <p>Cost Reduction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">8-24 Hrs</p>
          <p>Faster Turnaround</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">500+</p>
          <p>Satisfied Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">99%</p>
          <p>Accuracy</p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble SGML Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with us for high-quality SGML conversion services tailored to your needs. Benefit from expert professionals, advanced tools, and a commitment to excellence.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SGMLConversionServices;
