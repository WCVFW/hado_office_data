import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const FinancialDataProcessingServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Financial Data Processing Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Implement AI-based risk assessments, strong cybersecurity features, and achieve seamless interoperability with our proficient financial data processing services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Accuracy and operational efficiency are critical in today’s financial sector. Nimble Auity provides AI-powered financial data processing solutions for international clients, including automated reconciliation, data normalization, and high-frequency processing. Our services comply with IFRS, GAAP, and other international regulations, with encryption and multi-factor authentication ensuring secure financial information management.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Secure Financial Data Processing Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Financial Controller Services",
              description: "Use financial software for accurate budgeting, maximize cash flow with predictive analytics, and support real-time financial reporting."
            },
            {
              title: "Financial Budgeting Services",
              description: "Perform scenario analysis for strategic resource planning, apply dynamic forecasting models, and align budgeting with organizational goals."
            },
            {
              title: "Finance Transformation Services",
              description: "Simplify operations through digitalization, leverage AI-powered analytics, and manage financial complexities with accuracy."
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

      {/* Software We Depend On */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Software We Depend On</h2>
        <div className="flex flex-wrap justify-center gap-6 text-green-800 font-medium">
          {["SAP Financial Accounting", "Tableau", "Xero", "Alteryx"].map((tool) => (
            <div key={tool} className="bg-green-100 px-4 py-2 rounded-lg shadow-sm">{tool}</div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Banking Financial Analysis Services",
            "Financial Investigations Services",
            "Accounts Payable Services",
            "Accounts Receivable Services"
          ].map((service) => (
            <div key={service} className="bg-teal-100 text-teal-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Financial Data Processing?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Data Accuracy and Consistency: Maintain high accuracy and remove discrepancies for reliable financial reporting.",
            "Scalable Cloud-Based Solutions: Manage growing data without impacting performance.",
            "Proactive Risk Management: Predict potential financial risks and safeguard continuity.",
            "Expert Consulting and Support: Strategic guidance and technical support for financial operations.",
            "Cost Efficiency: Streamline processes to reduce operational expenses.",
            "Improved Decision-Making: Get actionable insights from detailed financial analysis."
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
              title: "Data Extraction Services for NZ Consulting Firm",
              description: "Nimble provided accurate and reliable data extraction services to a leading New Zealand consulting firm."
            },
            {
              title: "Online Data Entry for Kansas-based Online Store",
              description: "Nimble delivered high-quality and timely data entry services to a US-based retailer."
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
              "In undertaking a three-year Soil Survey for Abu Dhabi, Nimble Auity provided custom software and data services competently, responding positively and often exceeding expectations."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Project Manager, International Development Management Company
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Streamline Your Financial Operations</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Leverage Nimble Auity's predictive analytics and AI-powered insights to achieve secure, accurate, and efficient financial data processing.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default FinancialDataProcessingServices;
