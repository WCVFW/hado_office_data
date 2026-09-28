import React from "react";
import { FileText, Video, Music, Users, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const fixedLayoutServices = [
  {
    title: "Reproducing Print Elements",
    description: "We faithfully replicate your printed material in digital fixed layout ePub format.",
  },
  {
    title: "Improving Accessibility",
    description: "Using semantic tagging to improve accessibility for all readers.",
  },
  {
    title: "Audio and Video Embedding",
    description: "Embed audio, video, and narration overlays for enhanced interactivity.",
  },
  {
    title: "Use of SVG",
    description: "Dynamic resizing of images to maintain clarity and definition.",
  },
  {
    title: "Adding Cross-references",
    description: "Include annotations, footnotes, links to external websites and more.",
  },
  {
    title: "Embedded Image Descriptions",
    description: "Provide descriptions for illustrations and charts to improve accessibility.",
  },
  {
    title: "Using CSS & JavaScript",
    description: "Add interactive elements and animations for quizzes, games, and multiple-choice content.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Nimble has been a wonderful experience. They quickly learned our business processes, adapted to all our requirements, and consistently performed well.",
    author: "Spokesperson, Executive recruitment firm in the US",
  },
];

const FixedLayoutPageContent: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-purple-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Nimble Fixed Layout ePub Conversion Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Create high-quality fixed layout ePubs and reach a wider audience with prices starting at $0.25/page.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-gray-700 text-lg">
        <p className="mb-6">
          Are you struggling to convert your book into the fixed layout ePub format? Nimble Auity helps authors and publishers create fixed layout ePubs with interactive features such as animations, backgrounds, audio, video, read-aloud, pop-ups, and slide navigation.
        </p>
        <p>
          We specialize in children's books, graphic novels, academic publications, cookbooks, travel guides, and more, ensuring your ePub preserves the printed format with complex graphical elements.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-700 mb-8 text-center">
            Our Fixed Layout ePub Conversion Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fixedLayoutServices.map((service, i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={36} className="text-purple-600 mb-4" />
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
          <h3 className="text-3xl font-bold text-purple-700 mb-8">Other Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "ePUB Conversions", icon: <FileText size={36} className="mx-auto text-purple-600" /> },
              { title: "Kindle Conversions", icon: <Users size={36} className="mx-auto text-purple-600" /> },
              { title: "Comprehensive Digital Services", icon: <Video size={36} className="mx-auto text-purple-600" /> },
              { title: "eBook Conversion Services", icon: <FileText size={36} className="mx-auto text-purple-600" /> },
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
          <h3 className="text-3xl font-bold text-purple-700 mb-8">
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
      <section className="bg-purple-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Professional Fixed Layout ePub Conversions
          </h3>
          <p className="text-white mb-6">
            If you are looking for professional, high-quality, and cost-effective fixed layout ePub conversion services, get in touch with us today!
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default FixedLayoutPageContent;
