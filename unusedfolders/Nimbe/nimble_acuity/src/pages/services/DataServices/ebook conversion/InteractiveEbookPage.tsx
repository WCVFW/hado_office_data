import React from "react";
import { BookOpen, CheckCircle, Video, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const interactiveFeatures = [
  "Tagging and Linking Table of Contents",
  "Proof of Images",
  "PDF Conversion Services",
  "Re-pagination",
  "Cleaning-up Page Numbers and Page Headers",
  "Children's Story Book / Comic Book Conversion",
  "Educational or Medical Health Related Books",
  "Travel Guides",
  "Edutainment Books",
  "Support for SVG & MathML",
  "Finger Painting / Canvas interaction",
  "Embedding videos and audio without plugins",
  "Use of CSS for animations, text effects",
  "Enhanced eBook presentation and style",
  "HTML5 & CSS3 compatibility for apps",
];

const clientTestimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They met our requests with great professionalism and flexibility.",
    author: "Spokesperson, Online health lessons company in Canada",
  },
];

const otherServices = [
  { title: "ePUB Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "iPad & iPhone Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "Kindle Conversion Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
  { title: "Comprehensive Digital Services", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
];

const InteractiveEbookPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Interactive eBook Conversion Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            High-quality interactive eBook conversion starting at $0.25 per page.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-gray-700 text-lg">
        <p className="mb-6">
          Nimble Auity provides expert interactive eBook conversion services for authors, universities, corporations, and publishers. We convert PDF, MS Word, and other formats into interactive eBooks for tablets, iPads, Kindles, and smartphones, incorporating multimedia elements like audio, video, 2D/3D animations, annotations, and cross-references.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Interactive eBook Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interactiveFeatures.map((feature, i) => (
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

      {/* Client Testimonials */}
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
            Get Interactive eBooks Today
          </h3>
          <p className="text-white mb-6">
            Experience immersive, interactive, and engaging eBooks with Nimble.
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

export default InteractiveEbookPage;
