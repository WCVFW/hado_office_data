import React from "react";
import { FileText, Users, Clock, Shield, DollarSign, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const formsProcessingStats = [
  { label: "Cost Reduction", value: "40%", icon: DollarSign },
  { label: "Faster Turnaround", value: "8-24 Hrs", icon: Clock },
  { label: "Satisfied Clients", value: "500+", icon: Users },
  { label: "Skilled Data Management Experts", value: "350+", icon: Users },
  { label: "Accuracy", value: "99%", icon: CheckCircle },
  { label: "Years Experience", value: "21", icon: FileText },
];

const formsProcessingAreas = [
  "Payroll Processing",
  "Warranty Cards",
  "Survey/Market Research",
  "Medical Forms",
  "Resume Processing",
  "Application Forms",
  "Accounts, Tax, and Legal Forms",
  "Online Form Processing",
  "Order Fulfillment",
  "Catalog Forms",
  "Data Conversion",
  "Census Forms",
  "Insurance Claims",
  "Shipping Forms",
  "Student and Immigration Forms",
];

const benefits = [
  "High-quality and Accuracy",
  "Affordable Pricing",
  "Quick and Convenient Delivery Timeframes",
  "Data Security",
  "Skilled and Trained Workforce",
];

const FormsProcessingServices: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Forms Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Efficient and error-free forms processing services to automate your data collection and management.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Areas */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Forms Processing Areas We Cover
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {formsProcessingAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <FileText className="text-blue-600 mb-2" size={32} />
              <p className="font-semibold text-gray-700">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formsProcessingStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <stat.icon className="text-blue-600 mb-2 mx-auto" size={36} />
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Why Choose Nimble for Forms Processing Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
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

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Started with Nimble Auity Today
          </h3>
          <p className="text-white mb-6">
            Partner with us to get fast, accurate, and scalable forms processing services.
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

export default FormsProcessingServices;
