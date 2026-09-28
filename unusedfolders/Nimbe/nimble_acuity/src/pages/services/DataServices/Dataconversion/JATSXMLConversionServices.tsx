import React from "react";
import DSmainmenu from "../DSmainmenu";

const JATSXMLConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JATS XML Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          If you are looking for a company that can help you convert all journals to JATS XML with accuracy, look no further. Nimble Acuity provides offshore JATS XML conversion services with guaranteed accuracy and fast turnaround.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity converts printed material, digital content, or typed documents to JATS (Journal Article Tag Suite) XML format, including NLM JATS DTD and Bookshelf XML formats. Our services make your data standardized, accessible across platforms, and flexible for various uses.
        </p>
        <p>
          We have successfully handled articles, journals, manuscripts, books, and knowledge repositories for global clients, ensuring 99.99% accuracy.
        </p>
      </section>

      {/* Conversion Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our JATS XML Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>ASCII</li>
          <li>EPUB</li>
          <li>HTML</li>
          <li>InDesign</li>
          <li>MS Word</li>
          <li>PDF</li>
          <li>Plain Text</li>
          <li>RTF</li>
        </ul>

        <p className="mt-4 text-gray-700">
          We provide conversion to NIH's PubMed Central NLM JATS DTD and Bookshelf XML for domains such as Media & Publishing, Medicine & Healthcare, Science & Technology, Social Sciences & Humanities, and Academic Journals.
        </p>
      </section>

      {/* Conversion Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          JATS XML Conversion Process We Follow
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li><strong>Requirement Analysis:</strong> Understand client requirements and create schema and project plan.</li>
          <li><strong>Conversion Script:</strong> Create conversion scripts per NCBI and JATS standards.</li>
          <li><strong>Tagging:</strong> Tag all content based on the schema.</li>
          <li><strong>JATS XML Conversion:</strong> Convert content to JATS XML using cutting-edge technology.</li>
          <li><strong>Quality Check:</strong> QA team ensures error-free, high-quality conversion.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing JATS XML Conversion Services to Nimble Acuity
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Superior Infrastructure – Access to state-of-the-art tools for high-volume conversions.</li>
          <li>Faster Turnaround – Well-defined processes and experienced team ensure quick delivery.</li>
          <li>Complex Conversions – Handles technical documents with images, tables, formulas, and more.</li>
          <li>Dedicated Team – Over 1000 trained professionals ready for large and complex projects.</li>
          <li>Quality Guarantee – 99.99% accuracy with committed QA team.</li>
          <li>24/7 Availability – Round-the-clock services across different time zones.</li>
          <li>Project Manager – Dedicated manager for transparent communication and project management.</li>
          <li>Data Security – Secure cloud storage, VPN connections, and confidentiality ensured.</li>
          <li>Affordable Pricing – Competitive rates depending on volume and complexity.</li>
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

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Client Success Stories</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>PDF to Excel Conversion for Florida-based Professor:</strong> Delivered cost-effective services with high accuracy.
          </li>
          <li>
            <strong>Hard Copy Books to Digital Formats:</strong> Converted three books into MOBI and ePub within 20 days for a UK publisher.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble JATS XML Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          ISO certified and with 26+ years of experience, Nimble Acuity ensures accurate, fast, and secure JATS XML conversions for global clients.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default JATSXMLConversionServices;
