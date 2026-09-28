import React from "react";
import { Database, Users, CheckCircle, Layers, BarChart2 } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const mdmServices = [
  "Multidomain Management of Master Data",
  "Identity Resolution Services",
  "Data Management Accelerators",
  "Customer Insights",
];

const otherServices = [
  "Data Cleansing Services",
  "Order Processing Services",
  "Transaction Processing Services",
  "Credit Card Processing Services",
];

const reasons = [
  "Data Security",
  "Affordable Pricing Options",
  "Experienced Team",
  "Dedicated Manager",
  "World-class Infrastructure",
];

const testimonials = [
  {
    quote:
      "Thank you! It has been great working with you. You have always fulfilled your part for the best and you are a good partner to work with.",
    author: "Spokesperson, Travel guide company based in Sweden",
  },
];

const MasterDataManagementPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Master Data Management Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get access to modular, flexible, and comprehensive data management services from a skilled team at prices starting at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* MDM Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Master Data Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mdmServices.map((service, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3">
                <Database className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <Users className="text-blue-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Nimble Master Data Management Services?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <CheckCircle className="mx-auto text-blue-600 mb-2" size={36} />
              <p className="font-semibold">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Get Started with Nimble Auity Today</h3>
          <p className="text-white mb-6">
            Partner with us to efficiently manage, clean, and organize your master data using expert services from Nimble Auity.
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
    </>
  );
};

export default MasterDataManagementPage;
