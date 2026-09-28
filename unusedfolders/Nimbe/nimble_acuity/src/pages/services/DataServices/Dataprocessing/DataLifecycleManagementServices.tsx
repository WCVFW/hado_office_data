import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataLifecycleManagementServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Lifecycle Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Get access to high-quality and accurate data lifecycle management services to enhance the effectiveness of your data management processes at $6/hour.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Data Lifecycle Management Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Processing Improvement Services",
              desc: "Create a robust data lifecycle management strategy to ensure all data and digital assets are clean, accessible, and usable.",
            },
            {
              title: "Data Protection Services",
              desc: "Define and control how your data is processed, shared, and stored, mitigating data loss, deletion, and breaches.",
            },
            {
              title: "Data Governance and Compliance Services",
              desc: "Comply with industry-specific retention regulations, including local and international standards such as Sarbanes-Oxley.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="font-semibold mb-2 text-teal-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {["Data Processing Services", "Data Entry Services", "Data Conversion Services", "Data Analytics Services"].map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Data Lifecycle Management Services?</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside text-gray-800">
          {[
            "Affordable pricing options for cost-effective data management",
            "ISO-certified high-quality services",
            "Strict data security with ISO/IEC 27001:2022 certification",
            "Short turnaround for critical projects",
            "Structured and streamlined process",
            "State-of-the-art infrastructure for optimal performance",
            "Experienced team with 26+ years of industry expertise",
          ].map((benefit, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300">{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">UK-based Software Firm</h3>
            <p>Delivered scanning and data entry services to optimize workload and improve revenue for a UK software client.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Poland-based Bike Accessories Seller</h3>
            <p>Provided eCommerce data entry services that improved efficiency and ensured cost-effective solutions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-xl shadow-lg text-gray-700 italic">
          “They have been able to learn our procedures quicker than I ever thought possible.”
          <cite className="block mt-4 font-semibold not-italic">General Partner, Manufacturing company in the US</cite>
        </blockquote>
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

export default DataLifecycleManagementServices;
