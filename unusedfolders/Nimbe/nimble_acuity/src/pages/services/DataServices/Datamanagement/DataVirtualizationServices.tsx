import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataVirtualizationServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Virtualization Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Get a single virtual view of real-time data by connecting disparate sources in one interface. Prices start at just $15/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Do you have data in multiple sources and want to view it in a consolidated interface? Nimble Auity provides robust virtualization services to display data from various formats efficiently. With over 26+ years of experience, we design virtualization architectures that make your data accessible for real-time analysis, including cloud-based data integration and advanced manipulation.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Data Virtualization Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Application Development Services",
              description: "Enable developers to efficiently create applications delivering real-time business data. Reduce coding requirements and scale quickly."
            },
            {
              title: "Business Intelligence and Analytics Services",
              description: "Combine datasets from multiple formats into a single view using virtualization tools. Implement SQL queries for seamless data retrieval."
            },
            {
              title: "Self-service Tools",
              description: "Provide business users access to create reports, analyze data, and assess performance, accelerating product development and reducing IT overhead."
            },
            {
              title: "Data Warehousing Services",
              description: "Ensure your data warehouse contains up-to-date information from all sources. Unlock full potential of cloud data warehouses and replicate business data efficiently."
            }
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

      {/* Other Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Entry Services",
            "Data Conversion Services",
            "Data Analytics Services",
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
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Data Virtualization?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Affordable Pricing Options: Hourly and FTE pricing to fit your budget.",
            "High-quality Services: ISO-certified and committed to excellence.",
            "Advanced Tools and Technologies: Use the latest virtualization tools.",
            "World-class Infrastructure: Optimized environments for our engineers.",
            "Enhanced Profitability: Maximize your virtualization investment cost-effectively.",
            "Experienced Team: Decades of expertise in data solutions.",
            "Short Turnaround: Services delivered promptly to meet deadlines."
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
              description: "Nimble provided accurate and timely data extraction services for a leading New Zealand consulting company."
            },
            {
              title: "Online Data Entry for Kansas-based Online Store",
              description: "Nimble delivered high-quality, timely, and reliable data entry services to a US-based clothing retailer."
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
              "They were able to learn our procedures quicker than I ever thought possible."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              General Partner, Manufacturing Company, US
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get Professional Data Virtualization Services</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nimble Auity offers cost-effective, professional virtualization services leveraging modern tools and technologies for real-time insights.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default DataVirtualizationServices;
