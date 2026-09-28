import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const EcommerceDataEntryServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          eCommerce Product Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Build and manage informative catalogs that inspire consumers with Nimble Auity.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          It's vital to keep your eCommerce website updated with accurate product data. From specifications to images and reviews, Nimble ensures that every detail is precise, helping your business stay competitive.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">eCommerce Product Data Entry Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Magento Product Data Entry Services",
            "Shopify Product Data Entry Services",
            "BigCommerce Product Data Entry Services",
            "WooCommerce Product Data Entry Services"
          ].map((service) => (
            <motion.div
              key={service}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700 font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Data Management Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Healthcare", "Automotive", "Insurance", "Customs Brokerage",
            "Education", "Energy & Utilities", "Textiles", "Real Estate",
            "Logistics", "Telecommunication", "Media & Entertainment", "Retail"
          ].map((industry) => (
            <div key={industry} className="bg-white p-4 rounded-xl shadow-md text-center font-medium text-gray-700">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Platforms We Work On</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-center">
          osCommerce, 3dcart, Amazon, Magento, PrestaShop, Shopify, Volusion, WooCommerce, XCART, Zen Cart, eBay, BigCommerce
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          {[
            "Talented Team: Skilled individuals trained to handle any data entry requests.",
            "Information Security: Strict data security policies ensure full confidentiality.",
            "Easily Scalable: Resources can be scaled up or down based on workload.",
            "Best Infrastructure: State-of-the-art facilities for high-quality service.",
            "Quick Turnaround: Projects completed on schedule.",
            "High Accuracy: All tasks completed with top-level accuracy.",
            "Streamlined Workflow: Systematic and stable processes followed.",
            "Cost-effective Pricing: Affordable services with bulk order discounts."
          ].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Data Entry Services",
            "Data Processing Services",
            "OCR Services",
            "Data Conversion Services",
            "eBook Conversion Services",
            "Catalog Processing Service"
          ].map((service) => (
            <div key={service} className="bg-white p-6 rounded-xl shadow-md text-center font-medium text-gray-700">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Success Stories</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-gray-700">
          {[
            "Provided Data Entry and Image Tagging Services to an Irish Sports Analytics Firm",
            "Data Entry for Analytics and Optimization Services Provider – 9-month high-volume project completed successfully"
          ].map((story, index) => (
            <li key={index} className="font-medium">• {story}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          "I am more than pleased with the way the project has turned out, and with the overall experience itself. I have been raving about Nimble Auity to everyone I know, and I will be sending you more projects in the future."  
          <br/><strong>CEO, Top Logistics Company in the US</strong>
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default EcommerceDataEntryServices;
