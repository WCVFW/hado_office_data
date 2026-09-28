import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const CatalogConversionServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catalog Conversion Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Make your e-commerce catalogs accessible, visually appealing, and accurate with Nimble Auity.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          If your organization is planning to establish or update your e-commerce site, Nimble can help you stand out. Our experts have in-depth knowledge of product categories, ensuring proper placement and visually appealing images. We also convert your product data from multiple formats like Excel, paper, databases, scanned PDFs, or emails into a standardized digital format ready for online use.
        </p>
      </section>

      {/* Customized Catalog Conversion Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Customized Catalog Conversion Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Word processing and document warehousing",
            "Capturing and keying images",
            "Implementing changes in product catalogs",
            "Deleting old products and services",
            "Converting any digital format into text and symbols",
            "Updating your product catalogs regularly",
            "Creating new catalogs",
            "Revising prices",
            "Uploading all your catalog information",
            "Gathering information from drawings, maps, etc.",
            "Managing document workflow",
            "Optical mark recognition (OMR)",
            "Optical character recognition (OCR) scanning",
            "Intelligent character recognition (ICR)"
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
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
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
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog Conversion Process */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Catalog Conversion Process at Nimble Auity</h2>
        <ol className="max-w-3xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
          {[
            "Customers send paper product catalogs to Nimble Auity",
            "The paper catalogs are analyzed & documented",
            "Online catalogs or web-based catalogs are designed",
            "The user interface of the website is designed",
            "Image editing experts edit & enhance the images of products",
            "Quality assurance experts check the final outcome for accuracy",
            "The online catalogs are updated on a regular basis"
          ].map((step, index) => (
            <li key={index} className="font-medium">{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Advantages of Outsourcing Catalog Conversion</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          <li><strong>Increased site visitors:</strong> Launching a digital catalog substantially increases site traffic.</li>
          <li><strong>Higher online revenue:</strong> Boost in the number of average orders on your e-commerce website.</li>
          <li><strong>Prolonged visitor attention:</strong> Longer average time spent on your website.</li>
          <li><strong>Affordable:</strong> Cost-effective and targeted content management.</li>
          <li><strong>Eco-friendly campaign:</strong> Online solutions that are environmentally friendly.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get Your Catalogs Converted Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact Nimble Auity with your catalog conversion requirements. Our team of experts will ensure accurate, visually appealing, and up-to-date online catalogs.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default CatalogConversionServices;
