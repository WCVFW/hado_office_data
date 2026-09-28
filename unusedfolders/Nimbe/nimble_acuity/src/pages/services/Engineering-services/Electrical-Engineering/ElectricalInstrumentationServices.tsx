import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalInstrumentationServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Instrumentation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Delivering professional, safe, versatile, and high-quality electrical instrumentation services to industries worldwide.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">
          Comprehensive Instrumentation Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nimble Acuity offers integrated electrical instrumentation solutions including analysis, planning, design, engineering, installation, procurement, testing, commissioning, and ongoing maintenance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our expertise spans multiple industries such as steel, chemical, petrochemical, oil & gas, pharmaceutical, heavy manufacturing, and power generation.
        </p>
      </section>

      {/* Key Services */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          Electrical Instrumentation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Installations",
              description: "E&I Skid Installations, Project Installations, HV/MV Power Installation"
            },
            {
              title: "Calibration",
              description: "Process Instrument Calibration and Test Instrument Calibration services"
            },
            {
              title: "Procurement",
              description: "Technical and Material Procurement with optimum specifications"
            },
            {
              title: "Report Preparation",
              description: "Test, Pre-commissioning, Consultation, Project Reports and Detailed Cost Implication Reports"
            },
            {
              title: "Instrumentation & Control",
              description: "Optimum design suggestions, electrical inspection, testing, and all kinds of lighting & communication systems"
            },
            {
              title: "Industrial Instrumentation Services",
              description: "SCADA, DCS, PLC systems, process indicators, transmitters, controllers, installation, removal, and maintenance programs"
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10 text-center">
          Why Choose Nimble?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li>Adherence to engineering and quality accreditations</li>
          <li>Improved operational continuity and safety</li>
          <li>Minimized downtime and extended instrument lifetime</li>
          <li>Presence of trained and experienced staff</li>
          <li>Proven track-record and domain expertise</li>
          <li>Reasonable pricing without compromising quality</li>
          <li>Integrated work approach with complete accountability</li>
          <li>Energy efficiency and carbon footprint reduction</li>
        </ul>
      </section>

      {/* Process & Capabilities */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Our Approach & Capabilities
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nimble Acuity's experts review plant loads, update relay protection schemes, provide load-shedding plans, and commission power generation equipment. We integrate multi-vendor systems seamlessly using advanced 2D/3D modeling software, ensuring optimal performance even with legacy systems.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our automation and integrator experience allows us to design ideal instrumentation packages, implement complete maintenance programs, and handle all project phases efficiently.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Electrical Instrumentation?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for professional, reliable, and scalable electrical instrumentation services tailored to your industry needs.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectricalInstrumentationServices;
