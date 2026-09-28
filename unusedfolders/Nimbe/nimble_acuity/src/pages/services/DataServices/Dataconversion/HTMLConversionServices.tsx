import React from "react";
import DSmainmenu from "../DSmainmenu";

const HTMLConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          HTML Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Convert your content into HTML format for easy distribution, accessibility, and compatibility across platforms. Reach more customers online with accurate HTML conversion services.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          HTML (Hyper Text Markup Language) is a widely used markup language for creating web pages. As digital content continues to grow, HTML conversion has become essential for delivering information efficiently and consistently.
        </p>
        <p>
          Nimble Acuity provides professional HTML conversion services, converting documents from any source—paper, microfilm, electronic files—into well-structured HTML files.
        </p>
      </section>

      {/* HTML Conversion Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our HTML Conversion Services
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>MS Word to HTML conversion</li>
          <li>Paper to HTML conversion</li>
          <li>Microfilm, microfiche, print originals, or electronic files to HTML</li>
          <li>HTML pages to ASCII text</li>
          <li>HTML to MS Word, Excel, DOC, PDF, XML, TIFF, JPEG, GIF, PNG, XHTML, RTF, PowerPoint</li>
          <li>HTML color conversion</li>
        </ul>
      </section>

      {/* Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Expertise in HTML Conversion
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Convert unstructured data into structured HTML format.</li>
          <li>Convert both hard copy and soft copy publications into HTML files.</li>
          <li>Recognize layouts, headings, lists, tables, code samples, special effects, and images for proper tagging.</li>
          <li>Add titles, colors, standard headers, footers, and style sheets for polished pages.</li>
          <li>Include hyperlinks, cross-links, bookmarks, URLs, email addresses, document metadata, and PowerPoint slide titles if required.</li>
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
          Nimble HTML Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Our team of experts handles large and complex HTML conversion projects efficiently while ensuring high-quality results at cost-effective rates.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HTMLConversionServices;
