import React from "react";
import DSmainmenu from "../DSmainmenu";

const CatalogContentManagement = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catalog Content Management Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Present critical marketing information to your target groups efficiently with Nimble Auity.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Investing in catalog content management solutions allows you to present marketing information to different audiences in a customized manner. If catalog content management is not a core business, Nimble can handle it expertly.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Nimble Auity Catalog Content Management Services</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg list-disc list-inside">
          <li>
            <strong>Web Catalog Content Management:</strong> Display your catalog on the web tailored to your content, customer profiles, and company objectives. Nimble can help you integrate and manage web catalogs efficiently.
          </li>
          <li>
            <strong>Print Catalog Content Management:</strong> Create print-ready catalogs by integrating your product data into publishing applications using Nimble's custom solutions.
          </li>
          <li>
            <strong>CD/DVD Catalog Content Management:</strong> For customers preferring offline access, Nimble can publish catalogs to CD/DVD using an integrated content management tool.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Content Management Process</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nimble develops content management solutions following Enterprise Content Management (ECM) practices. ECM covers content creation, management, and delivery, centralizing diverse content into a single source. Our systems support multiple publications and output channels, speeding up content management efficiently.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Data Management Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          {[
            "Customize stored data for easy search and retrieval",
            "Automate workflow: content creation, editing, and publishing",
            "Deliver content from your storehouse to web, print, or CD/DVD",
            "Standardize content for reuse across channels",
            "Access professional services at cost-effective prices",
            "Improve data accuracy",
            "Streamline content maintenance processes"
          ].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Partner with Nimble Auity!</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Get access to top-tier catalog content management services that simplify your workflow, improve accuracy, and ensure your content reaches the right audience in the right format.
        </p>
        <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default CatalogContentManagement;
