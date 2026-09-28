import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataQualityManagementServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Quality Management Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Our data management services ensure that you have the highest quality data at your fingertips while making sound business decisions.
        </p>
        <p className="mt-4 text-sm md:text-base">Prices start at just $6/hour</p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Handling large datasets can be challenging. Nimble Auity helps you identify incorrect or incomplete data and cleans your data set to ensure reliable insights for informed decision-making.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Quality Management Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Quality Assessment",
              description: "Detect inconsistencies in master data with preset data rules and customized solutions tailored to your business."
            },
            {
              title: "Data Enrichment and Cleansing",
              description: "Identify and eliminate low-quality or inconsistent data using automated systems, with easy ERP integration."
            },
            {
              title: "Risk and Compliance Services",
              description: "Ensure regulatory compliance through in-depth analysis of violations using multiple data sources."
            },
            {
              title: "Data Standardization",
              description: "Establish a single standardized format for all datasets to ensure easy access, analysis, and uniformity."
            },
            {
              title: "Data De-Duplication",
              description: "Eliminate duplicate data using matching, deletion, and merging techniques to access only original, reliable data."
            },
            {
              title: "Data Verification",
              description: "Verify customer contact details such as email, phone, and addresses to ensure reliable and accurate information."
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Entry Services",
            "Data Conversion Services",
            "ePUB Solutions",
            "Data Processing Services"
          ].map((service) => (
            <div key={service} className="bg-indigo-100 text-indigo-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Data Management Services?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Affordable Prices: Accessible solutions for companies of all sizes.",
            "Data Security: ISO-certified processes with strict security protocols.",
            "Latest Tools: Cutting-edge technology ensures flawless solutions.",
            "24/7 Availability: Customer support executives are always available.",
            "SPOC: Dedicated project manager for all queries and reports.",
            "Quick TAT: Scalable services with rapid turnaround times."
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Efficient Data Entry Services for US-based Client",
              description: "Nimble provided high-quality online data entry services with accuracy and timeliness."
            },
            {
              title: "Professional Data Extraction for Florida Legal Service Provider",
              description: "Nimble delivered accurate and reliable data extraction services at affordable prices."
            },
          ].map((story) => (
            <motion.div
              key={story.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.02 }}>
            <p className="italic text-gray-700">
              "Nimble Auity positively impacted our business processes with professionalism and transparency."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Marketing Director, Insulation Company, UK
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started with Nimble Data Quality Management Services</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Leverage Nimble Auity’s expertise to maintain accurate, reliable, and compliant datasets for better business decisions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default DataQualityManagementServices;
