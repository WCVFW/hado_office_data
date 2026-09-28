import React from "react";
import { Eye, BookOpen, CheckCircle, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const accessibilityFeatures = [
  "Structurally tag the content",
  "Incorporate text-to-speech capability",
  "Provide detailed & navigable table of contents",
  "Ensure alternative text descriptions for images, illustrations, diagrams",
  "Options for changing background color",
  "Controllable line spacing",
  "WCAG 2.0 compliance",
  "Create section breaks",
  "Ensure optimum color contrast",
  "Add metadata",
  "Embed audio and video content",
  "Proper document structure in tags",
  "Content reflows for reflowable eBooks",
  "Testing at 200% magnification",
  "Handle images & alt text properly",
  "Tagging & labeling of form fields",
  "Correct link text structure",
  "Correct tab order in forms",
  "Proper tagging of lists, links, tables",
  "Screen reader compatibility",
  "Overlays of media, pronunciation styles, MathML",
];

const clientTestimonials = [
  {
    quote:
      "They are an excellent team and have learned all our methods quicker than I ever thought possible.",
    author: "General Partner, Manufacturing company in the US",
  },
];

const otherServices = [
  { title: "Kindle Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "ePUB Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "eBook Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "Reflowable eBook Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
];

const WebAccessibleEbookPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Web Accessible eBook Development Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Make your eBooks more accessible to those with special needs, starting at $0.25/page.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-gray-700 text-lg">
        <p className="mb-6">
          Nimble Auity helps authors, publishers, and corporations create eBooks that are perceivable, operable, and understandable for readers with special needs. We develop WCAG 2.0-compliant eBooks in PDF, ePub, and ePub3 formats compatible with eReaders, tablets, and smartphones.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Key Web Accessible Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accessibilityFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={24} className="text-blue-600 mt-1" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Other Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {otherServices.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                {service.icon}
                <h4 className="mt-4 font-semibold text-lg">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {clientTestimonials.map((t, i) => (
            <blockquote key={i} className="mb-6 text-gray-700 italic">
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
            Get Web Accessible eBooks Today
          </h3>
          <p className="text-white mb-6">
            Make your eBooks more inclusive, accessible, and engaging for all readers.
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

export default WebAccessibleEbookPage;
