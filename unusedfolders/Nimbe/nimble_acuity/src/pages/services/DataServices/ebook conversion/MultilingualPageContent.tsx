import React from "react";
import { Globe, FileText, Users, CheckCircle, Video } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const multilingualServices = [
  {
    title: "Multilingual Translation",
    description:
      "We translate eBooks to and from 200+ languages, ensuring professional and accurate localization.",
  },
  {
    title: "Use of Attractive Images",
    description:
      "All icons, images, and elements are contextually and culturally appropriate.",
  },
  {
    title: "High-quality Graphics",
    description:
      "Complex elements like tables and charts are simplified into high-quality, engaging graphics.",
  },
  {
    title: "HTML5 & CSS3 Expertise",
    description:
      "Design and convert eBooks in multilingual ePub, KF8, and fixed-layout formats compatible with Kindle, Kobo, Nook, Apple, and more.",
  },
  {
    title: "Embedding Rich Media & Cross-references",
    description:
      "Add animations, audio, video, interactive elements, annotations, and external links to enhance the eBook.",
  },
  {
    title: "Proofreading & Editing",
    description:
      "Ensure error-free, polished content with smooth flow, verified by professional editors.",
  },
  {
    title: "Embedded Image Descriptions",
    description:
      "Add descriptions to images and charts for accessibility and read-aloud features.",
  },
];

const testimonials = [
  {
    quote:
      "They are a great team and have learned all our procedures quicker than I ever thought possible.",
    author: "General Partner, Manufacturing company in the US",
  },
];

const MultilingualPageContent: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-green-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Nimble Multilingual eBook Conversion Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Expand the reach of your digital publications and eBooks with multilingual conversion services starting at $0.25/page.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-gray-700 text-lg">
        <p className="mb-6">
          Nimble Auity helps authors, publishers, and corporations expand their digital content across multiple languages while maintaining a professional, polished look.
        </p>
        <p>
          Our team of developers, programmers, translators, and conversion specialists ensures your multilingual eBook reaches readers around the globe with ease.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Our Multilingual eBook Conversion Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {multilingualServices.map((service, i) => (
              <div key={i} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={36} className="text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-8">Other Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "ePUB Conversions", icon: <FileText size={36} className="mx-auto text-green-600" /> },
              { title: "Kindle Conversions", icon: <Users size={36} className="mx-auto text-green-600" /> },
              { title: "Comprehensive Digital Services", icon: <Globe size={36} className="mx-auto text-green-600" /> },
              { title: "eBook Conversion Services", icon: <FileText size={36} className="mx-auto text-green-600" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                {item.icon}
                <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-8">
            Client Testimonials
          </h3>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Professional Multilingual eBook Conversions
          </h3>
          <p className="text-white mb-6">
            If you want high-quality, cost-effective multilingual eBook conversion services, get in touch with us today!
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

export default MultilingualPageContent;
