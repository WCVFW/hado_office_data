import React from "react";
import { CheckCircle, Database, FileText, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const standardizationServices = [
  {
    title: "Company Name Standardization",
    description:
      "Standardize company names including Pvt., LLC, Ltd., etc., to ensure consistency across datasets.",
  },
  {
    title: "Contact Number Standardization",
    description:
      "Format contact numbers consistently (+1 (333) 123-4567, 333-123-4567, etc.) for better usability.",
  },
  {
    title: "Customer & Personal Data Standardization",
    description:
      "Standardize customer names, DOB, job titles, addresses, emails, and other personal data to eliminate inconsistencies.",
  },
  {
    title: "Product & Financial Data Standardization",
    description:
      "Ensure product IDs, brand names, financial data, and state/country names are standardized for seamless data integration.",
  },
];

const otherServices = [
  "Order Processing Services",
  "Data Cleansing Services",
  "Credit Card Processing Services",
  "Data Mining Services",
];

const benefits = [
  "Cost-efficient Services",
  "High Data Security & Confidentiality",
  "ISO Certified Service Provider",
  "Hassle-free Services",
  "Access to Highly Skilled Professionals",
  "Advanced Technologies",
  "High Quality Services",
  "24/7 Customer Support",
  "Dedicated Account Manager",
  "High Scalability",
  "World-class Infrastructure",
];

const testimonials = [
  {
    quote:
      "Thank you! It has been great working with you. You have always fulfilled your part for the best and you are a good partner to work with.",
    author: "Spokesperson, Travel Guide Company based in Sweden",
  },
];

const DataStandardization: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Nimble Data Standardization Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get a standardized data bank that assures consistency and reliability at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Data Standardization Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {standardizationServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <FileText className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <Database className="text-green-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Why Choose Nimble for Data Standardization?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <CheckCircle className="mx-auto text-green-600 mb-2" size={36} />
              <p className="font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Started with Nimble Auity Today
          </h3>
          <p className="text-white mb-6">
            Partner with us to get accurate, scalable, and cost-effective data standardization services.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default DataStandardization;
