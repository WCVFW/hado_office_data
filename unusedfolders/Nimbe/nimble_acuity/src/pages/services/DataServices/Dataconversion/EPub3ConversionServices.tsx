import React from "react";
import DSmainmenu from "../DSmainmenu";

const EPub3ConversionServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ePub3 Conversion Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Convert your eBooks and documents to the latest ePub3 format with interactive multimedia elements for a seamless reading experience across devices. Prices start at just $6/hour.
        </p>
      </section>

      {/* Overview */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          With ePub3, your books become adaptable, accessible, and interactive. Nimble Acuity (Nimble Acuity) helps you deliver immersive content, giving your readers the best experience on modern devices.
        </p>
      </section>

      {/* ePub3 Conversion Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          ePub3 Conversion Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Design and Implementation:</strong> Plan and execute the conversion process using the latest ePub3 tools.</li>
          <li><strong>ePub Conversion:</strong> Convert files into ePub3, offering guidance on fixed layout or reflowable formats.</li>
          <li><strong>Review:</strong> QA team checks for accuracy, resolves inconsistencies, and ensures quality output.</li>
          <li><strong>Supported Formats:</strong> Word, PDF, HTML, MOBI, XHTML, and more.</li>
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
          Why Choose Nimble Acuity For ePub3 Conversion Services?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Affordable Services:</strong> Transparent pricing and customized solutions for all business sizes.</li>
          <li><strong>Experienced Team:</strong> Skilled professionals trained in the latest ePub3 tools and standards.</li>
          <li><strong>Use of Latest Tools:</strong> Access to agile software for accurate and timely conversion.</li>
          <li><strong>ISO Compliant Services:</strong> ISO 9001:2015 certified with planned and standardized processes.</li>
          <li><strong>Single Point of Contact:</strong> Dedicated project manager ensures smooth communication and updates.</li>
          <li><strong>Quick Turnaround:</strong> Timely delivery ensured by skilled professionals and optimized processes.</li>
          <li><strong>Scalable Solutions:</strong> Capability to scale resources for large projects without compromising quality.</li>
          <li><strong>Round-the-Clock Support:</strong> 24/7 support for any service-related queries.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>XML Conversion:</strong> Norwegian academic literature publisher received quick and accurate conversion services.</li>
          <li><strong>PDF to Excel Conversion:</strong> Florida-based professor benefited from cost-effective and timely conversion services.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble ePub3 Conversion Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Ensure your eBooks offer a complete and interactive experience with our ePub3 conversion services. We deliver precision, accuracy, and transparent processes at budget-friendly rates.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EPub3ConversionServices;
