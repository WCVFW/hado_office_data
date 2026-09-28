import React from "react";
import { CheckCircle, Database, RefreshCw, Layers, Zap } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const dataCleansingServices = [
  {
    title: "Data Scrubbing",
    description:
      "Modify and remove redundant, incorrect, incomplete, and inaccurate data to create high-quality datasets.",
    icon: <RefreshCw className="text-blue-600" size={32} />,
  },
  {
    title: "Data Verification",
    description:
      "Remove incomplete and invalid data to keep your database clean and reap maximum benefits.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
  },
  {
    title: "Data Removal",
    description:
      "Remove old, discontinued, or inconsistent business and contact data to maintain accuracy.",
    icon: <Zap className="text-blue-600" size={32} />,
  },
  {
    title: "Data Merging",
    description:
      "Combine multiple datasets to rebuild databases while retaining all relevant information.",
    icon: <Layers className="text-blue-600" size={32} />,
  },
  {
    title: "Database Management",
    description:
      "Clean your database by removing fake, invalid, or bounced emails to improve email metrics.",
    icon: <Database className="text-blue-600" size={32} />,
  },
  {
    title: "Data Enhancement",
    description:
      "Add validated external records to your data to maximize quality and derive better insights.",
    icon: <RefreshCw className="text-blue-600" size={32} />,
  },
];

const additionalServices = [
  "Data Entry Services",
  "Data Conversion Services",
  "Data Processing Services",
  "OCR Services",
  "Catalog Processing Service",
  "eBook Conversion Services",
];

const DataCleansing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Data Cleansing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Validate the relevance of your data, remove duplicates, and minimize compliance risks with our expert services.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Core Data Cleansing Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Data Cleansing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataCleansingServices.map((service, idx) => (
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Why Choose Nimble Auity
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Affordable Rates",
              "Complete Data Security",
              "Quick Turnaround",
              "Increased Scalability",
              "Skilled Resources",
              "ISO-certified Processes",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-center"
              >
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Additional Services
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {additionalServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center"
            >
              <Database className="text-blue-600 mr-4" size={32} />
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Boost Your Database Accuracy
          </h3>
          <p className="text-white mb-6">
            Partner with Nimble Auity to clean, validate, and enhance your datasets efficiently. Focus on strategic growth while we handle your data hygiene needs.
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

export default DataCleansing;
