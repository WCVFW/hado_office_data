import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const CatalogProcessingServices = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catalog Processing Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Bring your online storefront to life with Nimble Auity's catalog processing expertise.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          If you're considering an online store for your business, you need Nimble Auity's Catalog Processing services. An online catalog can reach hundreds, even thousands of potential customers, helping you grow profits efficiently.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Catalog Processing Needs</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nimble's Catalog Processing Services will convert your existing hard copy catalogs into online catalogs and update your products regularly. Our experts can add products from paper catalogs, scanned images, or any other source, and help perfect your web catalog.
        </p>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Nimble Auity's Solutions</h2>
        <div className="space-y-12 max-w-5xl mx-auto">

          {/* Product Image Processing */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Processing Product Images</h3>
            <p className="text-gray-700 mb-4">
              Bright, colorful images are essential to attract customers. Nimble transforms pictures of your products into clear, crisp images.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Retouching and resizing product images</li>
              <li>Adding borders and background colors</li>
              <li>Removing distracting backgrounds</li>
              <li>Effective image titles</li>
            </ul>
          </div>

          {/* Product Categorization */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Categorizing Products</h3>
            <p className="text-gray-700">
              Proper categorization ensures products are easily searchable. Nimble's experts study your products and place them strategically to enhance customer experience.
            </p>
          </div>

          {/* Updating Products & Pricing */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Updating Products and Pricing</h3>
            <p className="text-gray-700">
              Nimble ensures your online store is always current, adding or removing products, updating descriptions, images, and revising prices quickly and accurately.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {[
            { value: "40%", label: "Cost Reduction" },
            { value: "8-24 Hrs", label: "Faster Turnaround" },
            { value: "500+", label: "Satisfied Clients" },
            { value: "350+", label: "Skilled Data Management Experts" },
            { value: "99%", label: "Accuracy" },
            { value: "21", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          {[
            "Cost effectiveness – save over 65% on operating costs",
            "Accurate, efficient catalog conversion services",
            "Top-of-the-line catalog processing software",
            "Well-trained, experienced staff of catalog processing professionals",
            "Strict quality control ensuring high accuracy",
            "24/7 communication and support",
            "Fast turnaround times",
            "Secure FTP access for data transfer"
          ].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Make Nimble Auity Your Catalog Processing Solution!</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Let Nimble's Catalog Processing services bring your online storefront to life. Gain more exposure and larger profits with our expert solutions.
        </p>
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default CatalogProcessingServices;
