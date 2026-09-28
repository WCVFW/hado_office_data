import React from "react";
import DSmainmenu from "../DSmainmenu";

const ePubServices = [
  {
    title: "Conversion Services",
    description:
      "We can convert your PDFs or hard copies to ePub in the most cost-effective manner with expertise in coding, CSS, and DTDs.",
  },
  {
    title: "iPad and iPhone Conversion Services",
    description:
      "We ensure all iPhone and iPad conversions meet industry standard guidelines and are compatible with all screen sizes.",
  },
  {
    title: "Kindle Conversion Services",
    description:
      "High-quality Kindle conversions for books, journals, manuscripts, and magazines with expert coders and converters.",
  },
  {
    title: "Comprehensive Digital Services",
    description:
      "We provide authors and publishers complete digital services, including book, magazine, and journal conversions, copyediting, and proofreading.",
  },
  {
    title: "eBook Conversion Services",
    description:
      "Convert from PDF, Quark, InDesign, Word, etc., into eBooks compatible with modern devices.",
  },
  {
    title: "Reflowable eBook Conversion Services",
    description:
      "We create reflowable eBooks that allow readers to control text display, using latest software and techniques.",
  },
  {
    title: "Fixed Layout ePub Conversion Services",
    description:
      "High-quality fixed layout ePubs that closely resemble the source material, error-free and device-compatible.",
  },
  {
    title: "Multilingual eBook Conversion Services",
    description:
      "We provide multilingual eBook conversions in over 200 languages, expanding your reach globally.",
  },
  {
    title: "Enhanced eBook Conversion Services",
    description:
      "Enhanced multimedia eBooks for comic books, cookbooks, children's books, and technical publications in ePUB2, fixed-layout ePUB3, and Mobi formats.",
  },
  {
    title: "Web Accessible eBook Development",
    description:
      "Improve eBook accessibility for visually impaired users and provide web/mobile compatible eBooks.",
  },
  {
    title: "Interactive eBook Conversion Services",
    description:
      "Convert interactive eBooks to Word, PDF, HTML, and PPT for offline or print usage.",
  },
  {
    title: "DocBook XML Conversion Services",
    description:
      "Convert existing publications to DocBook XML or vice versa, with quality validation from our expert team.",
  },
];

const ePubStats = [
  { label: "Cost Reduction", value: "40%" },
  { label: "Faster Turnaround", value: "8-24 Hrs" },
  { label: "Satisfied Clients", value: "500+" },
  { label: "Skilled Data Management Experts", value: "350+" },
  { label: "Accuracy", value: "99%" },
  { label: "Years Experience", value: "21" },
];

const EPubServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Nimble Auity ePub Solutions
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          ePub is one of the most widely used standards in today's publishing world. It
          works across smartphones, tablets, computers, and other electronic reading
          devices, reducing costs and making content accessible on multiple channels.
        </p>
      </header>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {ePubServices.map((service, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose Nimble ePub Solutions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {ePubStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-700 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get Quick & Efficient ePub Solutions
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Nimble Auity provides reliable, professional, and affordable ePub services.
          Save time and costs while ensuring high-quality, error-free outputs.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default EPubServicesPage;
