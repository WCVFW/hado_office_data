import React from "react";
import DSmainmenu from "../DSmainmenu";

const PurchaseOrderProcessing: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-4 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Purchase Order Processing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Nimble Auity accurately processes purchase orders, tracking requirements, outbound payments, and maintaining records for audits efficiently at rates starting at $7/hour.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Get a Free Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Purchase Order Management",
              desc: "Our experienced team manages your purchase orders with highest efficiency and accuracy.",
            },
            {
              title: "Email Follow-Ups",
              desc: "Timely follow-ups via email to ensure orders are submitted and processed without delays.",
            },
            {
              title: "Multiple Shipping & Payment Options",
              desc: "Handle diverse purchase orders across global vendors efficiently and accurately.",
            },
            {
              title: "Order Fulfilment & Status Checks",
              desc: "Update order status and inventory across multiple sales platforms in real-time.",
            },
            {
              title: "Vendors Database Management",
              desc: "Maintain accurate vendor information, orders, and fulfillment records with zero errors.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <ol className="space-y-6 text-gray-700 text-lg list-decimal list-inside">
          <li>Diverting Purchase Orders: Securely send orders via email or encrypted FTP.</li>
          <li>Sorting & Scanning: Orders are sorted and digitized for further processing.</li>
          <li>Extract Key Information: Capture essential order details using intelligent software.</li>
          <li>Quality Check: Multiple QA checks to ensure accuracy of extracted data.</li>
          <li>Upload & Routing: Orders uploaded to cloud in desired format and routed to departments.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Cost-effective services tailored to your requirements",
            "Fast turnaround times without compromising quality",
            "High-quality services with experienced professionals",
            "Secure data handling and transfer with advanced protocols",
            "Dedicated team for your project with single point of contact",
            "Scalable solutions to meet business growth and demand",
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <p className="text-gray-800 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-600">20+</p>
            <p className="text-gray-700 mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">500+</p>
            <p className="text-gray-700 mt-1">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">99%</p>
            <p className="text-gray-700 mt-1">Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">8-24 Hrs</p>
            <p className="text-gray-700 mt-1">Faster Turnaround</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">40%</p>
            <p className="text-gray-700 mt-1">Cost Reduction</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">UK-based Land & Water Management Company</h3>
            <p>Processed 80,000+ invoices/month with 98% accuracy using Nimble's purchase order processing services.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold mb-2">Leading Online Platform Builder</h3>
            <p>Data entry and CRM refresh completed efficiently with minimal turnaround time.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16">
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          Contact Nimble
        </a>
      </section>
    </div>
  );
};

export default PurchaseOrderProcessing;
