import React from "react";
import DSmainmenu from "../DSmainmenu";

const CatalogBuildingIndexing = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catalog Building and Indexing Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Build high-quality catalogs and improve product discovery on your eCommerce site with Nimble Auity. Services start at $6/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          If your eCommerce products are not easily discoverable, it frustrates buyers and leads to abandoned carts. Nimble's catalog building and indexing services ensure your products are easily found and help you achieve higher conversions without hiring full-time staff.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Services We Offer</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg list-disc list-inside">
          <li>
            <strong>Catalog Building:</strong> Transform paper catalogs into digital catalogs. Data is entered into a CMS with product photos, descriptions, and pricing to make the catalog visually appealing and user-friendly.
          </li>
          <li>
            <strong>Catalog Indexing:</strong> Properly categorize products so shoppers can quickly filter and find items. We create structured categories to improve product discovery and enhance user experience.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Catalog Building and Indexing Process</h2>
        <ol className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg list-decimal list-inside">
          <li><strong>Scan and Upload:</strong> Send your catalog in PDF, TXT, DOC, JPEG, or other formats via SFTP or email.</li>
          <li><strong>Download/Access Files:</strong> Files are checked for errors and completeness.</li>
          <li><strong>Building Catalog:</strong> Documents are converted into digital catalogs using OCR tools and manual methods.</li>
          <li><strong>Indexing and Sorting:</strong> Products are indexed and sorted to improve search efficiency.</li>
          <li><strong>Quality Check:</strong> Final catalogs undergo quality checks before project reports are delivered.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          {[
            "Data Entry Services",
            "Offline Data Entry Services",
            "Real Estate Appraisal Data Entry",
            "Image Data Entry Services"
          ].map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Nimble */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          {[
            "Friendly Rates tailored to budget and business needs",
            "100% Data Security (ISO/IEC 27001:2022 compliant)",
            "Multiple Data Formats supported",
            "High-quality catalog building and indexing services",
            "Quick Turnaround Time",
            "ISO 9001:2015 certified service provider",
            "Scalable Services to meet demand",
            "Experienced Catalog Building and Indexing Professionals",
            "24/7 Global Support"
          ].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
          <div>
            <strong>Nimble Provided Scanning & Data Entry to a UK-based Software Firm:</strong> A software enterprise in Berkshire offshored scanning and data entry to Nimble, which provided a customized solution quickly.
          </div>
          <div>
            <strong>Nimble Provided eCommerce Data Entry to a Bike Accessories Seller:</strong> A parts retailer in Poland outsourced data mining and eCommerce entry to Nimble, completing the project on budget and on time.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg italic mb-4">
          "We were very satisfied with the quality of service Nimble Auity provided. They met our requests with great professionalism and flexibility."
        </p>
        <p className="text-gray-700 font-semibold">Spokesperson, Online health lessons company in Canada</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner with Nimble Auity!</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Get a free quote in 24 hours for catalog building and indexing services. Nimble Auity ensures on-time, accurate data entry that fits your budget.
        </p>
        <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default CatalogBuildingIndexing;
