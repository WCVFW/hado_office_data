import React from "react";
import DSmainmenu from "../DSmainmenu";

const BookConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Convert hard copy and soft copy books into digital formats such as ePub, PDF, and HTML. Protect your content, reduce storage costs, and enhance accessibility with professional book conversion services.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Digital information is easy to use, distribute, and store, making it ideal for organizations looking to reduce physical storage and protect content during natural disasters. eBooks are an effective medium for digital content distribution.
        </p>
        <p>
          Nimble Acuity provides expert book conversion services to universities, libraries, colleges, and publishers. We convert both printed and digital content into eBooks and other electronic formats with precision and quality.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Book Conversion Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Expertise in converting printed and electronic formats such as PDF and HTML into eBooks.
          </li>
          <li>
            Customized formatting including margins, page numbers, headings, quotes, footnotes/endnotes, and citations.
          </li>
          <li>
            Presentation of prognostic sample for client approval before project execution.
          </li>
          <li>
            Experienced specialists trained in multiple formatting styles and electronic formats.
          </li>
        </ul>
      </section>

      {/* Unique Aspects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Unique Aspects of Book Conversion
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Mixed Page Content Analysis – Segregate content and graphic sections for optimized processing.
          </li>
          <li>
            Superior Image Processing Techniques – Descreening, Moire Removal, Adaptive Thresholding, and high-quality interpolated rotation for optimal image retention.
          </li>
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

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing Book Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>State-of-the-art book conversion methodology.</li>
          <li>Customized services to meet specific project requirements.</li>
          <li>Flexible pricing packages based on project volume and complexity.</li>
          <li>Quick delivery timelines.</li>
          <li>24/7 customer support for seamless assistance.</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Book Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Experience the next era of digitization. Convert your books efficiently and cost-effectively while ensuring superior quality.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BookConversionServices;
