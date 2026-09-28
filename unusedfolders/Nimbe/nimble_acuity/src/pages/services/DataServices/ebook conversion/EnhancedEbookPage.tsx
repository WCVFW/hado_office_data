import React from "react";
import { FileText, PlayCircle, Users, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const enhancedServices = [
  {
    title: "Enhanced eBook Conversion of Fixed Layout Content",
    description:
      "We use ePUB3 standards to integrate footnotes, popups, and internal/external links for cookbooks, children's books, and more.",
  },
  {
    title: "Reflowable eBook Conversion",
    description:
      "Embed bullet lists, formatted texts, images, and more. Fully compatible across multiple eReading platforms.",
  },
  {
    title: "Animation & Multimedia for eBooks",
    description:
      "Create animated 2D & 3D eBooks with interactive widgets, quizzes, games, and audio, compatible with most eReaders.",
  },
];

const conversionProcess = [
  "Scan and Upload: Receive eBooks and understand client requirements.",
  "Download/Access Files: Preliminary checks on files for usability.",
  "Enhanced eBook Conversion: Start conversion with NDA-signed experts.",
  "Quality Check: QA evaluation and project sign-off after SLA conformity.",
];

const testimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They met our requests with professionalism and flexibility.",
    author: "Spokesperson, Online health lessons company in Canada",
  },
];

const EnhancedEbookPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Enhanced eBook Conversion Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get visually enhanced eBooks with pop-ups, interactive content, and multimedia starting at $6/hour.
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
          Nimble Auity brings 26+ years of experience enhancing eBook content with interactive features, 2D/3D graphics, animations, audio effects, quizzes, and widgets. We create fixed-layout, reflowable, and animated eBooks across ePUB2, ePUB3, and Mobi formats.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Our Enhanced eBook Conversion Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {enhancedServices.map((service, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                <PlayCircle size={36} className="text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Process */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Enhanced eBook Conversion Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            {conversionProcess.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-600 mt-1" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Other Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "ePUB Conversions", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
              { title: "iPad & iPhone Conversions", icon: <Users size={36} className="mx-auto text-blue-600" /> },
              { title: "Kindle Conversions", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
              { title: "Comprehensive Digital Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                {item.icon}
                <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Professional Enhanced eBook Conversions
          </h3>
          <p className="text-white mb-6">
            High-quality, interactive, and cost-effective enhanced eBook conversion services at your fingertips.
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

export default EnhancedEbookPage;
