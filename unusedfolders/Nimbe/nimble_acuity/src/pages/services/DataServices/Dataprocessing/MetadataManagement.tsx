import React from "react";
import { Database, FileText, Layers, CheckCircle, UserCheck, Cpu } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const metadataServices = [
  {
    title: "Data Dictionary Services",
    description:
      "Describing the different data elements from a technical and business perspective. Accurate and error-free data dictionary services help understand each data element and enable correct reusability.",
  },
  {
    title: "Business Glossary Services",
    description:
      "Defining exceptions, variants, terminologies, and explanations for business users. Ensures smooth communication between stakeholders and complete transparency with data.",
  },
  {
    title: "Data Lineage Services",
    description:
      "Tracks every element of the data, its characteristics, and the datasets it has gone through. Superior quality services help track movement, mapping, transformations, and transitions.",
  },
];

const otherServices = [
  "Order Processing Services",
  "Data Cleansing Services",
  "Credit Card Processing Services",
  "Transaction Processing Services",
];

const benefits = [
  "Flexible Pricing Packages",
  "Information Security",
  "State-of-the-art Infrastructure",
  "Skilled Team",
  "Scalable Services",
  "24/7 Support",
  "SPOC (Dedicated Manager)",
  "Quick Turnaround Time",
  "Error-free Services",
];

const testimonials = [
  {
    quote:
      "I am more than pleased with the way the project has turned out, and with the overall experience itself. I have been raving about your company to everyone I know, and I will definitely be sending you more projects in the future.",
    author: "CEO, Top Logistics Company in the US",
  },
];

const MetadataManagement: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Nimble Metadata Management Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get access to an efficient and effective IT environment and maximize your ROI with our superior quality services at just $6/hour.
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
          Metadata Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {metadataServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <Database className="text-green-600 mr-3" size={24} />
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
                <Layers className="text-green-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">
          Why Choose Nimble for Metadata Management?
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
            Partner with us to get accurate, scalable, and cost-effective metadata management services.
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

export default MetadataManagement;
