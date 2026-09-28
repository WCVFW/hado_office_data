import React from "react";
import DSmainmenu from "../DSmainmenu";

const ProductCatalogMaintenance = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-400 to-teal-300 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Product Catalog Maintenance Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Keep your online store updated efficiently with Nimble Auity's expert catalog maintenance services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          If your business has an online store with products that need frequent updates, Nimble Auity's Product Catalog Maintenance Services can help. Paper-to-online catalog conversions, e-commerce data entry, product maintenance, and data extraction from multiple sources are all handled efficiently and cost-effectively.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Product Catalog Maintenance Needs</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nimble's experts can extract any required information from paper catalogs, suppliers’ websites, or other sources and include it in your online product catalog. Our services are fast, reliable, and help reduce operating costs while increasing profits.
        </p>
      </section>

      {/* Solutions */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Nimble Auity's Solution</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Adding new product information</li>
          <li>Updating existing product information</li>
          <li>Product titles and descriptions</li>
          <li>Shipping details</li>
          <li>Product images</li>
          <li>Properly categorizing products</li>
          <li>Store information</li>
          <li>Part numbers</li>
          <li>Pricing details</li>
        </ul>
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
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customized Maintenance */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Customized Product Catalog Maintenance</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-4">
          Nimble Auity provides tailored solutions to manage your online store based on your requirements—daily, weekly, or monthly updates. Our professionals are highly trained in customized product catalog applications and software.
        </p>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Nimble has extensive experience managing diverse product lines including motorbike parts, apparel, property, books, music paraphernalia, electronics, and household items. Trust our team to keep your online storefront updated accurately and efficiently.
        </p>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          {[
            "Cost-effective services",
            "Customized processes for your business",
            "Highly-trained and experienced catalog data entry professionals",
            "Fast, accurate, and efficient online store maintenance",
            "Stringent quality control ensuring accuracy",
            "Latest catalog data entry software",
            "High-end infrastructure and technology"
          ].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Make Nimble Auity Your Catalog Maintenance Partner!</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Achieve a professional online storefront designed to generate traffic and increase profits. Fast, accurate, and cost-efficient—contact Nimble Auity today!
        </p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default ProductCatalogMaintenance;
