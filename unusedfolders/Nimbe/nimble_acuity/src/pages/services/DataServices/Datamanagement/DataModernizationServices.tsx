import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataModernizationServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Modernization Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Build a scalable, adaptable, and reliable data infrastructure to react to market needs in real-time!
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Enterprises must transform massive incoming data into actionable insights. Nimble Auity helps you modernize your databases, enabling real-time analytics, AI/ML-powered predictive insights, and data-driven decisions that accelerate business growth.
        </p>
      </section>

      {/* Data Modernization Solutions */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Data Modernization Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Warehouse Modernization Services",
              description: "Transform outdated data warehouses to enhance productivity, customer engagement, and business resilience."
            },
            {
              title: "Data Center Modernization Services",
              description: "Upgrade data centers for operational efficiency and prepare for future digital challenges."
            },
            {
              title: "Data Platform Modernization",
              description: "Redesign and migrate data platforms to cloud-based systems capable of handling structured and unstructured data."
            },
          ].map((solution) => (
            <motion.div
              key={solution.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Data Modernization?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Quality Assurance: Decades of experience in data processing, cloud migration, and modernization.",
            "Assured Data Security: ISO/IEC 27001:2022 certified, with end-to-end encryption and regular backups.",
            "Unparalleled Support: Complete backup solutions with 24x7 assistance.",
            "Cost-effective Services: Custom pricing plans tailored to client requirements and budgets."
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Cleansing Services",
            "Data Virtualization Services",
            "Data Mining Services",
            "Data Extraction Services"
          ].map((service) => (
            <div key={service} className="bg-green-100 text-green-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Efficient Data Entry Services for US-based Client",
              description: "Nimble provided highly accurate online data entry resources that delivered top-quality services promptly."
            },
            {
              title: "Professional Data Extraction for Florida Legal Service Provider",
              description: "Nimble delivered precise and reliable data extraction solutions at affordable rates."
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
              "Working with Nimble Auity has been a great experience. They are reliable and a wonderful partner."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Spokesperson, US itrueque.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Modernize Your Data with Nimble</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Turn your unstructured data into a valuable digital asset. Contact Nimble Auity for a tailored data modernization solution today.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default DataModernizationServices;
