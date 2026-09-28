import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const EmbroideryServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white px-6 md:px-16 py-16">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Advanced Embroidery Digitizing Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Precision in Every Stitch - Unparalleled Embroidery Digitizing Services!
        </p>
        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 transition">
          Start Your Project
        </button>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700 mb-16">
        <p>
          Crafting Excellence Stitch by Stitch! Nimble Audity leverages advanced technology
          to convert your artwork into machine-readable files, ensuring precision and a
          seamless digitization process.
        </p>
        <p>
          Our skilled digitizers translate your designs into a digital language understood
          by embroidery machines, offering a variety of stitch types including running,
          satin, and fill stitches.
        </p>
        <p>
          From hooping and underlay stitching to push/pull compensation, we manage every
          detail. Each design is carefully trimmed to give you a polished, flawless product.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Magazine Digitization",
            desc: "Transform physical magazines into digital formats for storage, accessibility, and search.",
          },
          {
            title: "Book Layout Design",
            desc: "Turn manuscripts into professional, visually appealing books with InDesign & QuarkXPress.",
          },
          {
            title: "2D Art Services",
            desc: "Create appealing and consistent designs, backgrounds, and animations using Adobe Illustrator and Photoshop.",
          },
          {
            title: "Desktop Publishing",
            desc: "Produce high-quality print and digital materials with perfect layout, typography, and color management.",
          },
          {
            title: "Animation Services",
            desc: "Dynamic animations for advertising, education, or entertainment using After Effects & Maya.",
          },
          {
            title: "Video Editing Services",
            desc: "Polish raw footage with transitions, effects, and sound for high-quality results.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <h3 className="text-xl font-bold text-green-700 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Process Flow */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Our Meticulous Process</h2>
        <ul className="space-y-4">
          {[
            "Submitting the Design to the Digitizing Software",
            "Specifying the Dimensions of the Design",
            "Choosing the Appropriate Stitch Type",
            "Defining the Stitching Direction",
            "Selecting the Thread Colors",
            "Exporting the Digitized File to the Embroidery Machine",
            "Preparing the Machine for the Embroidery Process",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-green-700">Why Choose Nimble?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Swift delivery, unmatched quality, hassle-free ordering, instant access to files,
            exceptional customer support, and minimal edits make Nimble the trusted choice
            for embroidery digitization.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              "Swift Delivery",
              "Uncompromising Quality",
              "Hassle-Free Process",
              "Immediate Access",
              "Exceptional Support",
              "Minimal Edits",
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition">
                <h3 className="font-bold text-green-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Ready to Elevate Your Embroidery?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Partner with Nimble Audity for top-notch embroidery digitizing services and
          transform your designs into flawless embroidered masterpieces.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-800 transition">
          Contact Nimble Now
        </button>
      </div>
    </section>
  );
};

export default EmbroideryServices;
