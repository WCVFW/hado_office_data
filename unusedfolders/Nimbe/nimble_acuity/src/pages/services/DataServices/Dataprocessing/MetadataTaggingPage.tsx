import React from "react";
import { Tag, FileText, CheckCircle, Users, Layers } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const taggingServices = [
  {
    title: "Descriptive Tagging",
    description:
      "Add crucial information about content like file name, keywords, upload date, author name, etc., to help organizations identify and differentiate digital assets.",
  },
  {
    title: "Structural Tagging",
    description:
      "Arrange similar topics or pages to structure digital information, enhancing visibility and improving recommendations and conversion rates.",
  },
  {
    title: "Administrative Tagging",
    description:
      "Organize files by type, genre, or other criteria for easier access and better searchability. We use advanced tools to make this process error-free.",
  },
  {
    title: "SEO Tagging",
    description:
      "Make content search engine friendly by creating SEO titles, meta descriptions, and precise metadata tags for better indexing and ranking.",
  },
];

const processSteps = [
  "Gather Requirements",
  "Asset Collection",
  "Team Creation",
  "Quality Check",
];

const benefits = [
  "Cost-Effective Services",
  "Wide Experience",
  "Expert Team",
  "Established Process",
  "Time Zone Advantage",
];

const testimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility.",
    author: "Spokesperson, Online health lessons company in Canada",
  },
];

const MetadataTaggingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Metadata Tagging Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get your digital content to the right audience at the right time with our expert metadata tagging services, starting at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Metadata Tagging Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {taggingServices.map((service, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3">
                <Tag className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Metadata Tagging Process</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-left">
            {processSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                <CheckCircle className="text-blue-600 mt-1" size={24} />
                <span className="font-medium">{`${idx + 1}. ${step}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Benefits of Choosing Nimble Metadata Tagging</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <Layers className="mx-auto text-blue-600 mb-2" size={36} />
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
          <h3 className="text-3xl font-bold text-white mb-4">Get Started with Nimble Metadata Services</h3>
          <p className="text-white mb-6">Contact us today to streamline your digital content with expert tagging.</p>
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

export default MetadataTaggingPage;
