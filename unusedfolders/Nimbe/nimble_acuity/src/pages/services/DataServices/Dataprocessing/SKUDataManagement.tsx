import React from "react";
import DSmainmenu from "../DSmainmenu";

const SKUDataManagement: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SKU Data Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Avail the best SKU Data Management services for hassle-free results starting at $6/hour. Nimble Auity ensures accurate, reliable, and efficient data handling for your business.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our SKU Data Management Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Cleansing & Enrichment",
              desc: "Our expert teams clean and standardize your data for accuracy, consistency, and usability.",
            },
            {
              title: "Indexing / Scanning Services",
              desc: "Digitize documents like invoices and purchase orders accurately using our advanced scanning solutions.",
            },
            {
              title: "List Building & Data Mining",
              desc: "Collect, organize, and optimize customer and product data for actionable insights.",
            },
            {
              title: "Data Abstraction Services",
              desc: "Extract key facts and actionable insights from databases to improve business intelligence.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold mb-2 text-green-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">SKU Data Management Process</h2>
        <ol className="space-y-6 text-gray-700 text-lg list-decimal list-inside">
          <li>Calculate the SKU Ratio: Create spreadsheets with selling price, cost, and gross profit per product.</li>
          <li>Calculate the Sales Ratio: Record number of units sold per SKU range and update in the database.</li>
          <li>Understand the Findings: Analyze SKU vs sales ratio to identify top-performing and underperforming SKUs.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Choosing Nimble</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Optimize inventory levels and stock visibility",
            "Increase gross margins and revenue",
            "Enhanced efficiency in picking, packing, and shipping",
            "Cost-effective services at pocket-friendly rates",
            "Secure, ISO/ISMS-compliant data management",
            "Quick turnaround and scalable solutions",
            "Highly experienced and trained workforce",
            "Round-the-clock support and single-point contact",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-green-600">26+</p>
            <p className="text-gray-700 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">500+</p>
            <p className="text-gray-700 mt-1">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">99%</p>
            <p className="text-gray-700 mt-1">Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">8-24 Hrs</p>
            <p className="text-gray-700 mt-1">Faster Turnaround</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">40%</p>
            <p className="text-gray-700 mt-1">Cost Reduction</p>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">UK-based Land & Water Management Company</h3>
            <p>Processed 80,000+ invoices/month with 98% accuracy using Nimble SKU Data Management services.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Leading Online Platform Builder</h3>
            <p>Data entry and CRM refresh completed efficiently with minimal turnaround time by Nimble experts.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble Auity
        </a>
      </section>
    </div>
  );
};

export default SKUDataManagement;
