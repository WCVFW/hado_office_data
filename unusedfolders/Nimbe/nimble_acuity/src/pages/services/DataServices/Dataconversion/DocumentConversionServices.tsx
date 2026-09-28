import React from "react";
import DSmainmenu from "../DSmainmenu";

const DocumentConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Document Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          If you have high-volume hard copy or electronic documents requiring updates or conversion, Nimble Acuity (Nimble Acuity) can help. With 20+ years of experience, our team efficiently converts documents into electronic formats ready for publishing.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Our trained data management specialists can convert files from one format to another quickly and securely. Using state-of-the-art scanning machines, we process multiple pages simultaneously while ensuring document safety, accuracy, and efficiency.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Document Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>PDF to DOC</li>
          <li>DOC to TIFF</li>
          <li>TIFF to PDF</li>
          <li>Books to HTML / XML / XHTML / PDF / MS Word</li>
          <li>Paper documents and scanned images to MS Word</li>
          <li>Scanned reports and images to electronic formats</li>
          <li>Image files to XHTML</li>
        </ul>

        <p className="mt-4 text-gray-700">
          We also provide additional scanning and imaging services like image editing, document proofing, color correction, graphic art scanning, X-ray scanning, and small/large format scanning.
        </p>
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

      {/* Conversion Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our ISO Quality Document Conversion Process
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li><strong>Scope of Work:</strong> Receive project briefing from client.</li>
          <li><strong>Input:</strong> Client transfers input files via Dropbox or FTP.</li>
          <li><strong>Document Conversion:</strong> Perform conversion using Adobe PDF converter or client-specified tools.</li>
          <li><strong>Final Output:</strong> Deliver converted files in the preferred format via FTP or Dropbox.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Our Professional Document Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>High-quality:</strong> 99% SLA adherence and ISO-compliant processes.</li>
          <li><strong>Support:</strong> Work in your own time zone with 24/6 support.</li>
          <li><strong>Cost Savings:</strong> Up to 70% savings on overhead costs.</li>
          <li><strong>Skilled Team:</strong> Experienced professionals with proven expertise.</li>
          <li><strong>Fast Turnaround:</strong> Swift delivery according to agreed timelines.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Choose Nimble Acuity for Cost-Effective, Accurate Document Conversion
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Get a competitive edge with our document conversion services. With decades of experience, skilled workforce, and affordable pricing models, we deliver high-quality results efficiently.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DocumentConversionServices;
