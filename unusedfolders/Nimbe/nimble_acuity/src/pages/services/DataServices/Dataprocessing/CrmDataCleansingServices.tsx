import React from "react";
import DSmainmenu from "../DSmainmenu";

const CrmDataCleansingServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CRM Data Cleansing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Weed out obsolete data, deduplicate values, and update your customer database with Nimble Auity’s CRM data cleansing services.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">CRM Data Cleansing Services We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Verification Services",
              desc: "Cross-check and validate millions of CRM records including name, address, contact, and email.",
            },
            {
              title: "Data Scrubbing Services",
              desc: "Regularly scrub and update your CRM database to keep it accurate and demographically aligned.",
            },
            {
              title: "Data Standardization Services",
              desc: "Standardize and track the data entered by your sales team for consistent CRM entries.",
            },
            {
              title: "Data Deduplication Services",
              desc: "Eliminate duplicate values and optimize storage with accurate deduplication solutions.",
            },
            {
              title: "Data Enrichment Services",
              desc: "Append additional data points and enhance your CRM with actionable sales intelligence.",
            },
            {
              title: "Mailing List Cleansing Services",
              desc: "Filter and clean customer email lists for targeted campaigns with higher click-through rates.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Diverse Sectors We Serve</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            "Consulting Firms",
            "Accounting Firms",
            "Investment Banking",
            "Law Firms",
          ].map((sector, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{`CRM Data Cleansing for ${sector}`}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Complete Data Security with encrypted servers",
            "High-quality services validated by QA controllers",
            "150+ skilled data cleansing experts",
            "Latest tools and techniques for efficient cleansing",
            "Multi-lingual support for global clients",
            "Global delivery centers for fast turnaround",
            "Flexible and competitive pricing",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Cleansing Services", "Data Modernization Services", "Data Mining Services", "Data Monitoring Services"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-xl shadow-lg text-gray-700 italic">
          “We were very satisfied with the quality-of-service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility. We look forward to having your team fulfill future projects for us.”
          <cite className="block mt-4 font-semibold not-italic">Spokesperson, Online Health Lessons Company, Canada</cite>
        </blockquote>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Business Acquisition Entrepreneur</h3>
            <p>Provided data enrichment and cleansing services with quick turnaround to optimize CRM efficiency and accuracy.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">UK-based Software Firm</h3>
            <p>Delivered scanning and data entry services with customized data management solutions to streamline workflow and revenue.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default CrmDataCleansingServices;
