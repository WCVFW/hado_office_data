import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const EcommerceDataCleansing = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          e-Commerce Product Data Cleansing Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Get access to a complete range of e-commerce product data cleansing services and unlock the full potential of your data. Prices start at just $6/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          E-commerce product data quality is a key differentiator for online success. Nimble Auity provides top-notch e-commerce product data cleansing solutions with 26+ years of experience, helping clients worldwide to improve data quality, boost search rankings, enhance conversion rates, and draw visitors globally.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our e-Commerce Product Data Cleansing Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Data Analysis",
              description:
                "Analyze product data for personalized recommendations, market basket analysis, price optimization, demand forecasting, and other specific business requirements.",
            },
            {
              title: "Data Deduplication",
              description:
                "Ensure consistent, unique data by merging and comparing duplicates from multiple sources to prevent confusion, missed sales, and unnecessary inventory costs.",
            },
            {
              title: "Data Standardization",
              description:
                "Convert data from multiple sources into a uniform format, standardizing URLs, abbreviations, meta-tags, attribute tags, pricing, and product dimensions for hassle-free analysis.",
            },
            {
              title: "Data Normalization",
              description:
                "Optimize existing client data into correct fields and formats, ensuring consistent, reliable data across e-commerce platforms and smooth analysis for decision-making.",
            },
            {
              title: "Data Validation & Quality Assurance",
              description:
                "Validate data with advanced tools and real-time inputs to ensure accuracy, consistency, and compliance with business rules, removing conflicts for smooth delivery.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Importance of e-Commerce Product Data Cleansing</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Accurate product data ensures streamlined operations, reduces returns, improves profitability, and enhances sales. Deduplication and standardization help retailers place optimum orders and provide a consistent experience to customers.
        </p>
      </section>

      {/* Characteristics Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Characteristics of High-Quality E-commerce Product Data</h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          {[
            "Accuracy: Data must be close to true values.",
            "Validity: Data should conform to defined business rules.",
            "Completeness: Data must be whole and collected within a specified period.",
            "Consistency: Attributes must be consistent across datasets.",
            "Uniformity: Units of measure must be standardized.",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Processing Services",
            "Data Entry Services",
            "ePUB Solutions",
            "Data Conversion Services",
          ].map((service) => (
            <div key={service} className="bg-green-100 text-green-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for e-Commerce Product Data Cleansing?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Significant Cost Savings: Reduce time and cost by leveraging our expertise.",
            "End-to-End Data Quality Services: Ensure accurate page titles, headers, meta-tags, image titles, and more.",
            "Expert Team: Specialists in data cleansing, merging, and reporting.",
            "Increased Sales Revenue: Accurate data improves marketing and sales efficiency.",
            "Enhanced Marketing Accuracy: Eliminate inconsistencies for reliable targeting.",
            "Improved Lead Quality: Filter leads to boost conversions.",
            "Scalability & Flexibility: Adaptable services to meet market demands.",
            "Advanced Automation Tools: Use cutting-edge solutions for precise data cleansing.",
            "Round-the-Clock Services: Global centers ensure timely service delivery.",
            "Higher Customer Satisfaction: Accurate data improves product discovery and promotions.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
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
              description:
                "A renowned American client required highly professional and reliable online data entry activities. Nimble provided the highest quality services promptly.",
            },
            {
              title: "Data Research and Extraction for Legal Consultants",
              description:
                "A Florida-based legal services provider required precise and professional data extraction services. Nimble delivered exceptional services at affordable prices.",
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
              "Nimble Auity will have a positive effect on any business processes. I do not doubt that."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Marketing Director, Insulation Company, UK
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Outsource e-Commerce Product Data Cleansing Services to Nimble Auity
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nimble Auity delivers professional e-commerce product data cleansing services with accuracy, reliability, and actionable insights. Contact us today for a customized service plan.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EcommerceDataCleansing;
