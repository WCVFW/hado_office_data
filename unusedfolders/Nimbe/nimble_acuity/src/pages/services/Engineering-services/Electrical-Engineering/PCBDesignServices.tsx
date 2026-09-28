import React from "react";
import ESmainmenu from "../ESmainmenu";

const PCBDesignServices: React.FC = () => {
  const pcbTools = [
    "Cadence OrCAD",
    "Cadence Allegro",
    "CADSoft Altium Designer",
    "PADS DxDesigner",
    "Valor Genesis 2000®",
    "HyperLynx",
  ];

  const pcbProcess = [
    {
      step: "Plan & Cost Requirements",
      desc: "Collect all requirements from clients, define standards, certifications, test plans, and cost requirements.",
    },
    {
      step: "Critical PCB Layout Design",
      desc: "Conduct preliminary design review followed by critical PCB layout design review.",
    },
    {
      step: "Alpha PCB Prototype",
      desc: "Demonstrate a lab PCB test unit to the client.",
    },
    {
      step: "Risk Assessment",
      desc: "Beta prototype phase includes PCB design clean-up, pricing, and risk assessment.",
    },
    {
      step: "Product Delivered",
      desc: "Final product delivered after client approval.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Acuity PCB Design & Layout Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Take your electrical designs to the next level with Nimble's expertise in high-speed, mixed signal, and analog power board PCB design. Custom scripts, efficient tools, and quality-focused workflow ensure the best results.
        </p>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Nimble's PCB Design & Layout Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">High-Speed PCB Design</h3>
            <p className="text-gray-700">Delivering high-speed PCB designs with unmatched quality for single-sided and multi-layered boards.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">Custom Component Placement</h3>
            <p className="text-gray-700">Components placed exactly as per customer specifications ensuring optimal performance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">Quality Checks & Testing</h3>
            <p className="text-gray-700">Multiple tests applied to avoid manufacturing issues and ensure high reliability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">Footprints & Routing</h3>
            <p className="text-gray-700">Creating footprints for special packages and extreme care on route trace.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">Prototyping Services</h3>
            <p className="text-gray-700">Layout services for new PCBs and modifications for existing boards with alpha/beta prototypes.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-bold text-xl mb-2 text-blue-600">Industrial Applications</h3>
            <p className="text-gray-700">PCB designs for electronics including TVs, computers, printers, cell phones, and industrial appliances.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Our PCB Design Process</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {pcbProcess.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="text-blue-600 font-bold text-xl sm:w-56">{index + 1}. {item.step}</div>
              <p className="text-gray-700 sm:ml-6 mt-2 sm:mt-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">Tools for PCB Design and Layout</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pcbTools.map((tool, idx) => (
            <div key={idx} className="bg-blue-50 text-blue-700 font-medium rounded-lg p-5 text-center shadow hover:bg-blue-100 transition duration-300">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Today</h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Efficient offsite PCB design services for telecom, military, medical, aerospace, industrial, electronics, and automotive sectors. Let’s extend the life of your electrical equipment together.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default PCBDesignServices;
