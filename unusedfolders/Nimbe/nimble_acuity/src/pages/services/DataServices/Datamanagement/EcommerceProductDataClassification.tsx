import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const EcommerceProductDataClassification = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          eCommerce Product Data Classification Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Meticulously classifying product data can be tedious. Let Nimble make the task efficient at just $6 per hour.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Success in eCommerce depends on precise product data classification. Nimble Auity combines 26+ years of experience, technology, and skilled personnel to streamline product classification, improving sales traction and customer satisfaction. Outsource your eCommerce product data classification services to us for speed, accuracy, and efficiency.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our eCommerce Product Data Classification Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Collection",
              description:
                "We aggregate product data from vendors and manufacturers and build a clean, query-ready list for classification.",
            },
            {
              title: "Data Analysis",
              description:
                "Our team analyzes large volumes of data to validate accuracy, consistency, and bring order to unsegmented lists.",
            },
            {
              title: "Product Classification",
              description:
                "Using multi-standard classification systems, we assign exact taxonomic codes and build search-friendly schemas.",
            },
            {
              title: "Data Cleansing",
              description:
                "We remove duplicates and redundant data to declutter databases and minimize errors.",
            },
            {
              title: "Development of Attributes",
              description:
                "We provide complete attribute data in your preferred format for ERP, PIM, and other eCommerce platforms.",
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

      {/* Process Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our eCommerce Product Data Classification Process
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
          <li>
            <strong>Requirement Gathering:</strong> Understanding client needs to design a unique classification system.
          </li>
          <li>
            <strong>Extract:</strong> Gather data from vendors and manufacturers to update catalog lists.
          </li>
          <li>
            <strong>Transform:</strong> Develop a product tree or taxonomy to streamline the catalog structure.
          </li>
          <li>
            <strong>Load:</strong> Upload classified data into your database to reflect on your eCommerce site.
          </li>
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Conversion Services",
            "Data Analytics Services",
            "ePUB Solutions",
            "Optical Character Recognition",
          ].map((service) => (
            <div
              key={service}
              className="bg-blue-100 text-blue-800 py-6 rounded-lg font-medium shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Nimble Auity?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
          <li>Save money with custom, cost-effective rates.</li>
          <li>Boost productivity with streamlined classification services.</li>
          <li>Optimized transparency across users for peace of mind.</li>
          <li>Data security ensured with high-level protection protocols.</li>
          <li>Domain experts provide accurate and high-quality results.</li>
          <li>Easily scalable to meet your business demand.</li>
          <li>ISO 9001:2015 compliance and global standards assurance.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Scanning & Data Entry for UK Software Firm",
              description:
                "A software client from Berkshire outsourced scanning & data entry needs. Nimble devised a custom data management service to streamline workload and revenue.",
            },
            {
              title: "eCommerce Data Entry for Bike Accessories Seller",
              description:
                "A Poland-based parts dealer delegated data mining & data entry needs to Nimble. We offered eCommerce data entry services at an expected budget.",
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
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              quote:
                "We were very satisfied with the quality of service Nimble provided. They met our requests with professionalism and flexibility.",
              author: "Spokesperson, Online health lessons company in Canada",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Outsource eCommerce Product Data Classification Services to Nimble
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Choose Nimble Auity for accurate, efficient, and cost-effective product data classification services. Contact our experts today!
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EcommerceProductDataClassification;
