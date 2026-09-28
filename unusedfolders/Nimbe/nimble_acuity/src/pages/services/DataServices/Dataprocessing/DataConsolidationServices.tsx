import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataConsolidationServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Consolidation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Unlock the true potential of your business data with Nimble Auity. Manage, secure, and consolidate all your business data in one centralized location for smarter decision-making.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Consolidation Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Capturing",
              desc: "Capture business data from all scattered locations, remote and branch offices, and consolidate it at a centralized location for seamless utilization.",
            },
            {
              title: "Data Mapping and Migration",
              desc: "Map and migrate your applications, servers, and databases to a centralized system while addressing redundancies and inconsistencies.",
            },
            {
              title: "Data Structuring and Cleaning",
              desc: "Organize and clean your data by removing duplicates, redundancies, and errors to make it business-ready.",
            },
            {
              title: "Data Auditing",
              desc: "Conduct rigorous data audits to identify, fill, and correct missing or incorrect information for consistent, reliable datasets.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-teal-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Data Consolidation Process We Follow</h2>
        <div className="space-y-8">
          {[
            "Understanding Customer Requirement: We meet clients to understand their data consolidation needs and existing databases.",
            "Creating a Data Consolidation Plan: Tailored plan for maximum data visibility and business profitability.",
            "Process Implementation: Architecting new or merging existing data centers across teams and technologies.",
            "Data Migration and Structuring: Migrate, structure, clean, and audit your business data for optimal use.",
            "Delivery: Host newly consolidated database with quality-checked, structured data.",
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold mb-2 text-green-600">{`Step ${index + 1}`}</h3>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Data Consolidation</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-gray-800">
          {[
            "Centralized storage and management of IT assets",
            "Accelerated processes and improved decision-making",
            "Reduced redundancies and complexities",
            "Improved data visibility for faster decisions",
            "Higher availability of data across channels and locations",
            "Streamlined data center transformation",
            "Reduced data storage costs and IT man-hours",
            "Unmatched safety and data security",
          ].map((benefit, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300">{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Conversion Services", "Data Analytics Services", "ePUB Solutions", "Optical Character Recognition"].map((service, index) => (
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
            <h3 className="font-semibold mb-2">UK-based Software Firm</h3>
            <p>Scanning & data entry services with customized data management to optimize workload and revenue.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Bike Accessories Seller</h3>
            <p>eCommerce data entry and consolidation services delivered at cost-effective rates to improve efficiency.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default DataConsolidationServices;
