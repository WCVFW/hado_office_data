import React from "react";
import { Database, Settings, CheckCircle, Users, Layers } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const transformationServices = [
  "Bucketing/Binning",
  "Data Aggregation",
  "Data Cleansing",
  "Data Deduplication",
  "Data Derivation",
  "Data Filtering",
  "Data Integration",
  "Data Joining",
  "Data Splitting",
  "Data Summarization",
  "Data Validation",
  "Format Revision",
];

const processSteps = [
  "Understanding and Mapping Data",
  "Transforming Data",
];

const tools = ["Scripting (Python/SQL)", "On-Premise ETL Tools", "Cloud-Based ETL Tools"];

const benefits = [
  "Expert Team and Tools",
  "Time-Bound Process",
  "Cost & Time Efficient Process",
];

const testimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility.",
    author: "Spokesperson, Online health lessons company in Canada",
  },
];

const DataTransformationPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Nimble Data Transformation Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Organize and streamline your data efficiently with our expert transformation services, starting at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Data Transformation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {transformationServices.map((service, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3">
                <Database className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Our Data Transformation Process</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-left">
            {processSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <CheckCircle className="text-green-600 mt-1" size={24} />
                <span className="font-medium">{`${idx + 1}. ${step}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Data Transformation Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <Settings className="mx-auto text-green-600 mb-2" size={36} />
              <p className="font-semibold">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">Benefits of Choosing Nimble Data Transformation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <Layers className="mx-auto text-green-600 mb-2" size={36} />
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
          <h3 className="text-3xl font-bold text-white mb-4">Start Transforming Your Data Today</h3>
          <p className="text-white mb-6">
            Contact us to streamline, cleanse, and structure your data with expert services from Nimble Auity.
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

export default DataTransformationPage;
