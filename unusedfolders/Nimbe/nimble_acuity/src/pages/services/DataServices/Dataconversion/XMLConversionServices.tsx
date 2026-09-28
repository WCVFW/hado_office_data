import React from "react";
import DSmainmenu from "../DSmainmenu";

const XMLConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          XML Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity provides professional XML conversion services at competitive costs, converting your data from formats like TEXT, HTML, PDF, JPEG, and more into accurate XML files.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Partnering with Nimble Acuity reduces data errors, operational costs, and efforts associated with in-house conversion. Test our service quality completely free and work with skilled operators in your own time zone.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          XML Conversion Services We Provide
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>HTML to XML</li>
          <li>MS Word to XML</li>
          <li>PDF to XML</li>
          <li>XML to Excel / CSV / PDF / HTML / Web Page</li>
          <li>MS Excel to XML</li>
          <li>RTF/Text to XML</li>
          <li>XML Tagging Services</li>
          <li>Any storage media to XML</li>
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

      {/* Why Choose Nimble Acuity */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Nimble Acuity for XML Conversion Services?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Support for all XML versions including DTD and XSD.</li>
          <li>High scalability and flexible pricing structure.</li>
          <li>Up to 60% reduction in operational costs.</li>
          <li>98+% output accuracy regardless of input format.</li>
          <li>Qualified team of 150+ data entry operators.</li>
          <li>ISO quality processes with SLA adherence.</li>
          <li>24/7 support with dedicated account manager.</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          XML Conversion Process Flow
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Input: Text, PDF/Image PDF, Paper, RTF/Word, Book for scanning.</li>
          <li>Preprocess: Conversion and XML Tagging.</li>
          <li>Self Quality Check: Text compare and view.</li>
          <li>Validation: QA checklist and verification.</li>
          <li>Upload: Deliver converted files to client.</li>
        </ol>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Case Studies
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Conversion of Hard Copy Books:</strong> Converted 3 books of a London-based publisher into MOBI and ePub format.</li>
          <li><strong>Business Journal Catalog Indexing:</strong> Indexed existing journal archives for a US-based company, improving access speed.</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Testimonials
        </h2>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
          “We are most pleased & satisfied with our team at Nimble Acuity. They have proven that a small business such as ours can take advantage of the great benefits of outsourcing.”
          <footer className="mt-2 font-semibold">– Project Manager, US Insurance Company</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble XML Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Fast, accurate, and affordable XML conversion services for businesses worldwide. Contact us today for a free quote within one business day.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default XMLConversionServices;
