import React from "react";
import { CheckCircle, Database, Truck, CreditCard, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const coreServices = [
  {
    title: "Order Tracking",
    description: "Real-time tracking from order placement to delivery, regular updates on dispatch, transit, and delivery status, resolution of order-related issues.",
  },
  {
    title: "Payment Processing",
    description: "Processing customer payments with round-the-clock support, fraud detection, and swift confirmations for successful transactions.",
  },
  {
    title: "Order Fulfilment",
    description: "Inventory management, product packaging and shipping, delivery confirmation, and handling returns or refunds.",
  },
  {
    title: "Order Entry",
    description: "Recording order details, verification for accuracy, sending confirmations, and supporting customer queries.",
  },
];

const softwareList = ["Salesforce", "Zoho CRM", "HubSpot CRM", "SAP ERP", "Oracle NetSuite", "QuickBooks Commerce"];
const industriesList = ["E-commerce", "Manufacturing", "Healthcare", "Food & Beverage", "Retail", "Telecommunications", "Real Estate", "Logistics & Shipping", "Automotive", "Wholesale & Distribution"];
const additionalServices = [
  "Data Conversion Services",
  "eBook Conversion Services",
  "Data Processing Services",
  "Data Modernization Services",
  "Data Annotation Services",
  "eCommerce Product Data Entry Services",
  "Remote Data Entry Services",
  "DTBook Conversion Services",
];

const OrderProcessingServices: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Order Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Optimize your online retail operations with end-to-end order processing using AI, ML, and blockchain security.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Core Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {coreServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software & Industries */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Software We Leverage</h3>
            <ul className="list-disc list-inside text-gray-700">
              {softwareList.map((software, idx) => (
                <li key={idx}>{software}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Industries We Cater To</h3>
            <ul className="list-disc list-inside text-gray-700">
              {industriesList.map((industry, idx) => (
                <li key={idx}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Nimble Auity</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Experience Optimum Productivity",
            "Swift Order Delivery",
            "Error Reduction",
            "Budget-Friendly Solutions",
            "Exceptional Customer Support",
            "Unmatched Scalability",
            "Cutting-Edge Technology",
            "Proven Expertise",
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <CheckCircle className="mx-auto text-blue-600 mb-2" size={36} />
              <p className="font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Additional Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center">
                <Database className="text-blue-600 mr-4" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Boost Your Order Management Efficiency</h3>
          <p className="text-white mb-6">
            Partner with Nimble Auity for reliable and secure order processing services. Focus on growth while we handle your operations.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default OrderProcessingServices;
