import React from "react";
import { Database, CheckCircle, Layers, Trash2, RefreshCcw } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const dedupeServices = [
  {
    title: "Data Comparison",
    description:
      "Our experts compare existing datasets and identify duplicate records with precision.",
    icon: <Database className="text-blue-600" size={32} />,
  },
  {
    title: "Data Matching",
    description:
      "We match compared datasets to extract the most critical and relevant information.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
  },
  {
    title: "Data Merging",
    description:
      "Merge complementing and related data for efficient storage and avoid scattering.",
    icon: <Layers className="text-blue-600" size={32} />,
  },
  {
    title: "Data Purging",
    description:
      "Remove redundant and unused records to create a clean, clutter-free database.",
    icon: <Trash2 className="text-blue-600" size={32} />,
  },
  {
    title: "Data Integration",
    description:
      "Consolidate and integrate validated data into existing systems seamlessly.",
    icon: <RefreshCcw className="text-blue-600" size={32} />,
  },
  {
    title: "Database Deduping",
    description:
      "Deliver a compact, accurate, and efficient database optimized for performance.",
    icon: <Database className="text-blue-600" size={32} />,
  },
];

const processFlow = [
  { step: "01. Client Briefing", detail: "Understanding your deduplication requirements." },
  { step: "02. Input", detail: "Transfer sample data securely via FTP or Dropbox." },
  { step: "03. Data Deduplication", detail: "Run cleansing and deduplication using advanced tools." },
  { step: "04. Final Output", detail: "Deliver cleaned datasets in your preferred format." },
];

const metrics = [
  "40% Cost Reduction",
  "8-24 Hrs Faster Turnaround",
  "500+ Satisfied Clients",
  "350+ Skilled Data Experts",
  "99% Accuracy",
  "21 Years Experience",
];

const benefits = [
  "Strict Data Confidentiality with NDAs & secure FTP transfer",
  "98% accuracy through rigorous quality checks",
  "Quick turnaround times tailored to project needs",
  "Expert team of 30+ trained professionals",
  "Cost-effective FTE & hourly pricing options",
  "Test our services free before scaling",
];

const DataDeduplication: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Data Deduplication Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Eliminate redundant data, improve system efficiency, and keep your databases clean with Nimble Auity’s world-class data deduplication services.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Our Deduplication Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {dedupeServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Our ISO-Standard Process
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {processFlow.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow flex flex-col"
              >
                <span className="text-blue-600 font-bold text-lg mb-2">
                  {step.step}
                </span>
                <p className="text-gray-700">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-8">Why Nimble Auity?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-blue-600 text-white font-semibold py-6 px-4 rounded-lg shadow"
            >
              {metric}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 text-center mb-8">
            Benefits of Partnering with Nimble
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-1" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-center">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Get Started with Nimble Auity
          </h3>
          <p className="mb-6">
            Our experts are ready to deliver clean, optimized, and deduplicated datasets tailored to your business needs. Contact us today to get your free quote.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default DataDeduplication;
