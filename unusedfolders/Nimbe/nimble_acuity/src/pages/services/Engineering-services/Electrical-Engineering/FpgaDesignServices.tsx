import React from "react";
import ESmainmenu from "../ESmainmenu";

const FpgaDesignServices = () => {
  const services = [
    { title: "Logic Design Services", description: "Digital Signal Processing, ASIC Prototyping, RTL coding in Verilog and VHDL, High-level Synthesis, FPGA Area & Timing Optimization, Power-efficient designs, Multi-Million Gate 3D FPGA Designs." },
    { title: "Video Capture Services", description: "BT656 & BT1120 Data Handling, Format Conversion, Feature Detection, SD/HD/3G HD Capture Interfaces, Video Frame Grabbers, Image Enhancement & 2D FFT Services." },
    { title: "DSP Algorithm Development", description: "Digital Signal Processing for RADAR, Sonar Signal Processing, Direction Finding Algorithms." },
    { title: "Verification Services", description: "Verifying SV-UVM, Coverage & Assertion, SoC Functional, IP Block Functional, Randomized & Constrained Testing, Hardware & Software Verification." },
    { title: "ASIC Services", description: "ASIC Prototyping on FPGA, Silicon Validation, IP Validation on FPGA, Memory Pattern Testing." },
  ];

  const benefits = [
    "Cost-effective Pricing Options: Excellent value for money.",
    "Superb Infrastructure: Advanced resources for FPGA services.",
    "High-quality Services: ISO-certified with stringent quality controls.",
    "Tools and Technologies: Cutting-edge FPGA tools for advanced solutions.",
    "Structured Process: Well-defined and consistent delivery process.",
    "Experienced Team: 26+ years of FPGA design expertise.",
    "Data Security: Full compliance with GDPR for secure handling.",
    "Quick Turnaround Time: Timely delivery within deadlines.",
  ];

  const clients = [
    "Oil and Gas Companies",
    "Steel Fabrication Firms",
    "Automotive and Aerospace Industries",
    "Semiconductor Manufacturers",
    "Research and Development Centers",
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble FPGA Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get access to a diversely skilled FPGA design team with broad development expertise at prices starting at $9/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity offers comprehensive FPGA design solutions covering design/development, test suite development, coding, testing & verification, RTL coding, bus interfaces, mobile security, data acquisition, video processing, and multi-million gate complexes. Our FPGA expertise ensures proof-of-concept validation on target platforms and provides FPGA IP cores for licensing.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          FPGA Design Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Why Choose Nimble for FPGA Design Services?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Clients We Cater To
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {clients.map((client, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{client}</li>
          ))}
        </ul>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-purple-700">Product Design Support to Oil & Gas Giant</h3>
            <p>Nimble Acuity provided accurate FPGA product design support services to a leading Australian oil and gas firm within the required timeline.</p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-700">3D Modeling for Steel Fabrication Provider</h3>
            <p>We delivered high-quality 3D modeling services to a top steel fabrication firm in the USA within the stipulated timeframe.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-purple-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for FPGA Design
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Nimble Acuity is your professional and cost-effective provider of FPGA design services. Get access to our highly skilled team and advanced FPGA tools to deliver cutting-edge solutions.
        </p>
        <a href="#contact" className="inline-block bg-purple-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-purple-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default FpgaDesignServices;
