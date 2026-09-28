import React from "react";
import DSmainmenu from "../DSmainmenu";

const KindleConversionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nimble Kindle Conversion Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nimble Auity provides expert Kindle conversion services from any format (hard copy, PDF, Word, InDesign, Quark etc.) to Kindle and Mobipocket formats (.prc and .mobi). Get error-free and cost-effective e-book conversions.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Advantages of Kindle Format
        </h2>
        <p className="text-gray-600 mb-4">
          Kindle from Amazon is a very popular e-reader device with a fast-growing user base. Excellent reading experience, affordability, and ease of access make Kindle a preferred choice. Authors can easily upload e-books, set prices, and reach potential readers worldwide.
        </p>
        <p className="text-gray-600 mb-4">
          Kindle for PC and Mac is also available for users who don’t want the device but still want digital access to books from the Amazon store.
        </p>
      </section>

      {/* Input Formats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Input Formats
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {[
              "Hard copy",
              "Scanned copy",
              "Microsoft Word",
              "PDF",
              "Adobe InDesign",
              "HTML",
              "Text files",
              "XML",
              "QuarkXPress",
            ].map((format) => (
              <li
                key={format}
                className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-50 transition"
              >
                {format}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">40%</h3>
            <p className="text-gray-600 text-sm">Cost Reduction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">8-24 Hrs</h3>
            <p className="text-gray-600 text-sm">Faster Turnaround</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 text-sm">Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">350+</h3>
            <p className="text-gray-600 text-sm">Skilled Data Experts</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99%</h3>
            <p className="text-gray-600 text-sm">Accuracy</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">21</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Kindle Conversions by Nimble
          </h2>
          <p className="text-gray-600 mb-4">
            Our skilled team of e-book conversion experts can convert from any file format to Kindle format, handling even complex conversions while guaranteeing error-free output.
          </p>
          <p className="text-gray-600 mb-4">
            We scale up operations to handle large volumes, and our QA team ensures that your Kindle e-books meet all standards, providing a flawless reading experience.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Get Your Kindle e-Book Conversion Now
        </h2>
        <p className="mb-6">
          Nimble Auity delivers cost-effective, professional, and high-quality Kindle conversion services for publishers and authors worldwide.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default KindleConversionPage;
