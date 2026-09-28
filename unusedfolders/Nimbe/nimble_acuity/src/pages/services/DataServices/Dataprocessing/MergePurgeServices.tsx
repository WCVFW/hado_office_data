import React from "react";
import { Database, CheckCircle, Users, FileText } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const mergePurgeServicesList = [
  {
    title: "Online Database Merging",
    description:
      "Combine multiple online databases using the latest tools to ensure seamless integration without data loss.",
  },
  {
    title: "Online Database Purging",
    description:
      "Remove obsolete or redundant records efficiently, ensuring a clean and accurate database for operations.",
  },
  {
    title: "Database Validation & Verification",
    description:
      "Validate and verify datasets for accuracy, completeness, and consistency, ensuring reliable data processing.",
  },
  {
    title: "Database De-duplication",
    description:
      "Identify and remove duplicate entries to optimize storage and maintain data integrity.",
  },
  {
    title: "Master Database Creation",
    description:
      "Create a centralized master database integrating all data sources for easy access and management.",
  },
];

const otherServices = [
  "Order Processing Services",
  "Data Cleansing Services",
  "Credit Card Processing Services",
  "Transaction Processing Services",
];

const benefits = [
  "Flexible Pricing Options",
  "Data Security",
  "Skilled Team",
  "Superior Quality Services",
  "State-of-the-art Infrastructure",
  "24/7 Customer Support",
  "Dedicated SPOC",
  "Quick Turnaround Times",
  "Highly Scalable Services",
];

const testimonials = [
  {
    quote:
      "Thank you! It has been great working with you. You have always fulfilled your part for the best and you are a good partner to work with.",
    author: "Spokesperson, Online Travel Guide Company, Sweden",
  },
];

const MergePurgeServices: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Merge Purge Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Combine multiple databases and enhance your data collection process at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Merge Purge Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Merge Purge Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mergePurgeServicesList.map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <Database className="text-blue-600 mr-3" size={24} />
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
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <FileText className="text-blue-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Why Choose Nimble for Merge Purge Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <CheckCircle className="mx-auto text-blue-600 mb-2" size={36} />
              <p className="font-semibold">{benefit}</p>
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
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Started with Nimble Auity Today
          </h3>
          <p className="text-white mb-6">
            Partner with us to get error-free, scalable, and cost-effective merge purge services.
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

export default MergePurgeServices;
