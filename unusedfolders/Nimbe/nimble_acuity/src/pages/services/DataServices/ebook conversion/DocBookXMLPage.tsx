import React from "react";
import { FileText, Layers, CheckCircle, Users } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const docbookServices = [
  "DocBook Document Type Definition",
  "DocBook Stylesheets",
  "XML Writing",
];

const conversionProcess = [
  "Create XML doctype with root element, declaration, internal subset, and DTD",
  "Segment the document type into files, chapters, and sections",
  "Include modalities within elements (divisions, sections, block elements, meta, book collections)",
  "Validate the XML conversion for quality assessment",
  "Compile an all-inclusive report",
];

const otherServices = [
  { title: "Data Conversion Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "Data Analytics Services", icon: <Layers size={36} className="mx-auto text-blue-600" /> },
  { title: "ePUB Solutions", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "Optical Character Recognition", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
];

const testimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They met our requests with great professionalism and flexibility.",
    author: "Spokesperson, Online health lessons company in Canada",
  },
];

const DocBookXMLPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble DocBook XML Conversion Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Fast and accurate DocBook XML conversion handled by certified experts starting at $0.25 per page.
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
          Nimble Auity provides expert DocBook XML conversion services for businesses of all sizes. We convert content from and to DocBook XML format, ensuring precision, speed, and full compliance with industry standards. Our certified experts leverage the latest tools and manual methods to deliver accurate and cost-effective results.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Our DocBook XML Conversion Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {docbookServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={24} className="text-blue-600 mt-1" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Process */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            DocBook XML Conversion Process
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-4">
            {conversionProcess.map((step, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                {step}
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
            {otherServices.map((service, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                {service.icon}
                <h4 className="mt-4 font-semibold text-lg">{service.title}</h4>
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

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Your DocBook XML Converted Today
          </h3>
          <p className="text-white mb-6">
            Experience precise, scalable, and fast DocBook XML conversion with Nimble.
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

export default DocBookXMLPage;
