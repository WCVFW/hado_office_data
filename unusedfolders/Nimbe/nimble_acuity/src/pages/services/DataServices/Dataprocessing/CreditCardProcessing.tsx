import React from "react";
import { CreditCard, UserCheck, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const services = [
  {
    title: "Cardholder Management",
    description:
      "Manage consumer and commercial credit accounts efficiently, ensuring accurate and timely updates for all cardholders.",
    icon: <UserCheck className="text-blue-600" size={32} />,
  },
  {
    title: "Billing Services",
    description:
      "Generate precise bills, statements, and invoices while handling reconciliations and payment tracking.",
    icon: <CreditCard className="text-blue-600" size={32} />,
  },
  {
    title: "Fraud Detection & Management",
    description:
      "Advanced fraud detection systems monitor suspicious transactions to protect your customers and minimize risk.",
    icon: <ShieldCheck className="text-blue-600" size={32} />,
  },
  {
    title: "Timely Processing",
    description:
      "Our team ensures fast and accurate processing of online credit card transactions, checks, and cash management.",
    icon: <Clock className="text-blue-600" size={32} />,
  },
];

const CreditCardProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Credit Card Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Simplify your credit card processing with Nimble Auity. Our trained specialists and cutting-edge technology ensure accurate, timely, and secure transactions for your customers.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Credit Card Processing Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Nimble Auity?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "40% Cost Reduction",
              "8-24 Hrs Faster Turnaround",
              "500+ Satisfied Clients",
              "350+ Skilled Data Management Experts",
              "99% Accuracy",
              "21 Years Experience",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-center font-semibold text-gray-800"
              >
                <CheckCircle className="text-blue-600 mr-2" size={24} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Simplify Your Credit Card Transactions</h3>
          <p className="text-white mb-6">
            Partner with Nimble Auity for reliable, fast, and secure credit card processing. Focus on growing your business while we handle your transaction needs.
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

export default CreditCardProcessing;
