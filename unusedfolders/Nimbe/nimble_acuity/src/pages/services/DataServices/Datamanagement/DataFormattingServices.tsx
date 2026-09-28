import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataFormattingServices = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Data Formatting Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Ensure data integrity and standardization of your databases with our expert data formatting services at just $6/hour.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Are you looking for data formatting and cleaning services to validate the relevance and accuracy of your data, boost productivity, and facilitate enhanced ROI? Nimble Auity can help you index, process, and analyze your data according to your business's requirements. Our team ensures your database is clean, coherent, and standardized, allowing actionable insights and improved decision-making.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Formatting Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Cleansing Services",
              description:
                "Format information according to requirements, convert data between formats, and deliver output in database extracts, Excel, PDFs, HTML, emails, and more.",
            },
            {
              title: "Data Integrity Auditing",
              description:
                "Audit the integrity of data from multiple sources, perform content hygiene, document harmonization, and bulk conversions.",
            },
            {
              title: "Database Standardization Services",
              description:
                "Ensure uniformity, correct errors, remove duplicates, and format data according to your specifications, including missing fields like emails and postal codes.",
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

      {/* Other Services Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Entry Services",
            "Data Conversion Services",
            "Data Analytics Services",
            "Data Processing Services",
          ].map((service) => (
            <div
              key={service}
              className="bg-green-100 text-green-800 py-6 rounded-lg font-medium shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Data Formatting Services?</h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
          <li>Affordable pricing options for cost-effective, high-quality services.</li>
          <li>ISO-certified, industry-best practices ensure top-notch service.</li>
          <li>Data security protocols safeguard sensitive information.</li>
          <li>Short turnaround times respecting critical project deadlines.</li>
          <li>Advanced infrastructure and skilled team provide consistent service.</li>
          <li>Experienced team with 26+ years in data formatting and cleansing.</li>
          <li>Use of modern tools and technologies for accurate data formatting.</li>
          <li>Structured process ensures robust and reliable delivery.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Invoice Factoring Services for UK Land & Water Management Company",
              description:
                "Captured dates from invoice records and entered into CRM, processing 80,000+ invoices per month with utmost accuracy.",
            },
            {
              title: "Data Entry Services for Leading Online Platform Builder",
              description:
                "Cleansed CRM and performed accurate data entry within tight TAT for an online platform service provider.",
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
          {[
            {
              quote:
                "They have been able to learn our procedures quicker than I ever thought possible.",
              author: "General Partner, Manufacturing company in the US",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Outsource Data Formatting Services to Nimble
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Choose Nimble Auity for accurate, efficient, and cost-effective data formatting services. Get in touch with our experts today!
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataFormattingServices;
