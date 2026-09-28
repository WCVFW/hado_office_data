import React from "react";
import DSmainmenu from "../DSmainmenu";

const PDFConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          PDF Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Transform your PDF content into universally compatible, secure, and easily accessible digital formats with our professional PDF conversion services.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          We help global businesses convert their files from any format into high-quality PDF files for electronic information exchange across multiple platforms, with speed and accuracy.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          PDF Conversion Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>XML PDFs – Extract and convert scanned documents into structured XML formats.</li>
          <li>Static PDFs – Convert files with fixed layouts for multi-device compatibility.</li>
          <li>Dynamic PDFs – Convert runtime-layout PDFs into mobile-friendly, editable formats.</li>
          <li>Conversion from Other Formats into PDF – Convert books, reports, brochures, journals, RTF, MS Excel, MS Word, GIF, TIFF, and more into PDF.</li>
          <li>Conversion from PDF into Other Formats – Convert PDFs into PNG, GIF, TIFF, JPG, BMP, IMG, RTF, TXT, ePub, XML, XHTML, HTML, MS Word, Excel, Access, and PowerPoint.</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          PDF Conversion Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Client Briefing – Understand the project requirements.</li>
          <li>Input – Client transfers files via Dropbox or FTP.</li>
          <li>PDF Conversion – Experts carry out conversions using appropriate tools.</li>
          <li>Final Output – Deliver converted files securely via FTP or Dropbox.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Our PDF Conversion Services?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fast Delivery – Quick and accurate conversions within agreed timelines.</li>
          <li>High-quality – Adherence to international quality standards.</li>
          <li>Data Security – NDA, VPN, and GDPR compliant.</li>
          <li>Multiple Input Formats – Convert files from any format accurately.</li>
          <li>Skilled Team – Experienced resources in PDF conversion.</li>
          <li>Timely Project Updates – Regular progress reports.</li>
          <li>Flexible Pricing – Only pay for resources and tools used.</li>
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Customer Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>PDF to Excel for Florida Professor:</strong> Converted academic data cost-effectively.
          </li>
          <li>
            <strong>730 PDFs to Excel in 3 Days:</strong> Aluminum industry client received timely and accurate results.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Testimonials
        </h2>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
          “I am more than pleased with the way the project has turned out, & with the overall experience itself.”
          <footer className="mt-2 font-semibold">– CEO, Top Logistics Company in the US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble PDF Conversion Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Convert your files into high-quality, searchable, and usable digital formats. Get expert support, reduce operational overhead, and meet your unique conversion needs.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PDFConversionServices;
