import React from "react";
import ESmainmenu from "../ESmainmenu";

const VLSIDesignServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble VLSI Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Advanced VLSI circuits designed with high accuracy and precision by Nimble Acuity's expert engineers, starting at just $9/hour.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Nimble Acuity?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Electronics is fast-paced. Nimble Acuity provides futuristic, cost-effective, and high-performance VLSI design solutions to help you stay ahead of the competition.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With over 26+ years of experience, our engineers offer complete 'concept-to-chip' turnkey solutions, leveraging the latest tools and technologies.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our VLSI Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ASIC and FPGA Design",
              description: "High-performance architecture, RTL coding, verification, and prototype design for state-of-the-art electronic products."
            },
            {
              title: "VLSI Design Verification",
              description: "Analog, digital, and mixed-signal verification, SoC, ASIC, FPGA, and IP-level verification ensuring market-ready products."
            },
            {
              title: "Analog Circuit Design",
              description: "State-of-the-art analog circuit design using latest technology tools and proven methodologies."
            },
            {
              title: "Silicon Validation",
              description: "Comprehensive testing of chips to detect interface, performance, functional, and manufacturing defects."
            },
            {
              title: "VLSI Design Staffing",
              description: "Augment your in-house design team to speed up product design cycles and achieve critical milestones efficiently."
            },
            {
              title: "Turnkey Solutions",
              description: "End-to-end customized VLSI system design services for ASIC, FPGA, and SoC to match your IP requirements."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VLSI Process Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our VLSI Design Process
        </h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Team Meet:</strong> Understand product needs, system requirements, and budget for optimal design planning.</li>
          <li><strong>Designing the Prototype:</strong> Create effective chip prototype frameworks for actual execution and futuristic solutions.</li>
          <li><strong>Designing the Final Product:</strong> Fully qualified silicon created with advanced technologies after testing and review.</li>
          <li><strong>Testing:</strong> Validate VLSI physical design in advanced labs for extreme accuracy and performance.</li>
          <li><strong>Client Feedback & Design Optimization:</strong> Incorporate feedback for the final product creation.</li>
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Civil Engineering Services",
            "Electrical Systems Design",
            "Architectural Services",
            "Structural Design"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Partner with Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Competitive Prices:</strong> Highly affordable, customized VLSI design solutions.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified for complete safety.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Latest design software, uninterrupted network, and world-class office spaces.</li>
          <li><strong>Innovative Designs:</strong> Expert IP development services for a competitive edge.</li>
          <li><strong>Customized Services:</strong> Tailored solutions aligned with your product needs.</li>
          <li><strong>Scalable Products:</strong> Reliable, feasible, and easily scalable from chip design to final production.</li>
          <li><strong>Shortest Delivery Cycles:</strong> Efficient, integrated ASIC/SoC solutions delivered fast.</li>
          <li><strong>Round-the-clock Support:</strong> 24/7 support from global delivery centers.</li>
        </ul>
      </section>

      {/* Client Success Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "CAD Models for a US Architectural Firm", description: "Cost-effective CAD modeling solutions delivered accurately and on time." },
            { title: "Architectural Rendering for a Wisconsin Civil Engineering Client", description: "World-class rendering support delivered within SLA and quick TAT." }
          ].map((story, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Develop Next-Gen VLSI Circuits?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for precise, innovative, and scalable VLSI design services tailored to your needs.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default VLSIDesignServices;
