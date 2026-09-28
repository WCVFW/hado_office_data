import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataGovernanceServices = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Governance Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Secure your data assets with Nimble Auity's data governance consulting services. We deploy sophisticated encryption and masking techniques to ensure confidentiality.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Modern data environments are intricate and often leave organizations grappling with fragmented landscapes and insufficient governance structures. Nimble's Data Governance Services streamline operations by implementing automated classification, tagging systems, and strong data policies. Our solutions reduce risks and help organizations realize the full potential of their data.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-green-600 mb-2">50%</h3>
            <p>Faster Data Integration Through Automated Processes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-green-600 mb-2">25%</h3>
            <p>Increase in Analytic Insights Due to Improved Data Governance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-green-600 mb-2">40%</h3>
            <p>Improvement in User Access Efficiency with Role-Based Controls</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Streamline Your Operations with Integrated Data Governance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Master Data Management",
              description: "Centralizes data for organizational consistency. Integrates disparate sources seamlessly and ensures data roles and stewardship."
            },
            {
              title: "Data Quality Management",
              description: "Analyzes data for accuracy and completeness. Cleanses data, removes duplicates and inaccuracies, and monitors quality metrics."
            },
            {
              title: "Metadata Management Services",
              description: "Organizes metadata for easy access, tracks data lineage across systems, and defines terms in a business glossary."
            },
            {
              title: "Data Security Management",
              description: "Implements access control with permissions, protects data using encryption techniques, and develops policies for compliance."
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

      {/* Tools */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Software We Depend On</h2>
        <p className="text-gray-700 mb-2">
          Collibra, Informatica, Axon, Alation, Talend Data Fabric, Ataccama One
        </p>
        <p className="text-gray-500 text-sm">
          (Disclaimer: We use third-party tools solely for operational purposes. We do not endorse or sponsor these entities.)
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Conversion Services",
            "Data Processing Services",
            "Property Management Back Office Services",
            "Online Catalog Management Services",
          ].map((service) => (
            <div key={service} className="bg-green-100 text-green-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Nimble is Your Ideal Data Governance Partner</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Seamless Integration: Easily integrates with current systems for better departmental communication and decision-making.",
            "Enhanced Data Quality: Cutting-edge validation and cleaning for high-quality, accurate data.",
            "Dynamic Data Cataloging: Improves discoverability and enriches context for rapid retrieval.",
            "Comprehensive Security: Protects sensitive data while adhering to industry standards.",
            "Tailored Governance Policies: Flexible frameworks aligned to your unique business needs.",
            "Proactive Data Stewardship: Training and tools to empower stakeholders and foster accountability.",
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
              title: "Online Data Entry for Kansas-based Online Store",
              description: "Nimble provided professional and accurate data entry services to a leading American client."
            },
            {
              title: "Data Entry Services on a Platform App for Pilots",
              description: "Nimble achieved 99% accuracy delivering data entry services for platform app pilots."
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
              "We were very satisfied with the quality-of-service Nimble Auity provided. They met our requests with professionalism and flexibility."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Spokesperson, Online Health Lessons Company, Canada
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Simplify Your Data Management</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nimble Auity provides scalable data governance systems including compliance monitoring and automatic data quality assessments.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataGovernanceServices;
