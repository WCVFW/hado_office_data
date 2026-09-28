import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const MagentoDataEntryServices = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Magento Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Achieve flawless product uploads, strong inventory control, and strategic data optimization.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Managing a Magento store requires strategic data management and familiarity with the platform's complex architecture. Nimble Auity provides precise solutions focusing on configurable products, SEO-optimized descriptions, tier pricing, real-time inventory sync, API-based integration, and multilingual support to expand globally. Utilize our Magento data entry services to improve eCommerce operations, expedite product launches, and ensure industry-standard compliance.
        </p>
      </section>

      {/* Professional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Professional Magento Product Data Entry Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Catalog Data Entry Services",
              description:
                "Optimize product listings with detailed attributes, enhance and upload high-quality images, and regularly update pricing & inventory.",
            },
            {
              title: "SKU Data Entry Services",
              description:
                "Develop unique SKUs for inventory tracking, standardize formats, and assign detailed product attributes.",
            },
            {
              title: "Product Registration Data Entry",
              description:
                "Capture consumer data for warranty activation, maintain accurate databases, and ensure registration compliance.",
            },
            {
              title: "eCommerce Product Data Classification Services",
              description:
                "Tag products with relevant attributes, develop structured taxonomy, and standardize metadata for discoverability.",
            },
            {
              title: "ERP Data Entry Services",
              description:
                "Integrate data seamlessly into ERP systems, ensure validation, and generate analytical reports.",
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

      {/* Software Tools */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Software We Depend On
        </h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
          {["Mag-manager", "Unirgy uRapidFlow", "LitExtension", "Cart2Cart Magento Migration"].map((tool) => (
            <div key={tool} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
              {tool}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Disclaimer: We use third-party tools solely for operational purposes and do not endorse or affiliate with them.
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Data Management Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white text-purple-600 rounded-xl p-6 shadow-md">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Our Magento Product Upload Services Are the Best Choice
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Enhanced Product Display with high-quality images and faster load times",
            "Dynamic Pricing and Inventory Updates in real-time",
            "Multi-Store Management with synchronized data across locations",
            "Custom Reporting and Analytics for sales, consumer behavior, and inventory insights",
            "Localized Content for Global Reach with region-specific customization",
            "Continuous Support and Optimization for peak store performance",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Online Data Entry Services",
            "Data Management Typing Services",
            "Optical Character Recognition (OCR) Services",
            "Data Processing Services",
          ].map((service) => (
            <div key={service} className="bg-indigo-100 text-indigo-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Scanning & Data Entry for UK Software Firm",
              description:
                "A software client from Berkshire outsourced scanning & data entry needs. Nimble's team devised a custom data management service to streamline workload and revenue.",
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
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.02 }}>
            <p className="italic text-gray-700">
              "I am more than pleased with the way the project has turned out, and with the overall experience itself. Nimble met our requests with great professionalism and flexibility."
            </p>
            <p className="mt-4 font-semibold text-gray-900">CEO, Top Logistics Company in the US</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Outsource Magento Data Entry Services to Nimble Auity
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nimble Auity provides professional and efficient Magento data entry services with accurate, insightful data feeds and tailored reports. Contact us today for a customized service plan.
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MagentoDataEntryServices;
