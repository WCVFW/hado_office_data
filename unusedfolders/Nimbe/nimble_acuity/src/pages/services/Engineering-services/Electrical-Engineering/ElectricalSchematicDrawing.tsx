import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalSchematicDrawing = () => {
  const services = [
    "Basic Schematic Circuit Designs",
    "Technically Detailed Schematic Designs",
    "Wiring Diagrams",
    "As-built Electrical Schematic Drawings",
    "Light and Access Control System Schematics",
    "Schematics for Closed Systems",
    "Detailed Diagrams for Electrical Product Engineering",
    "Schematic Drawings for Site Electrical Development",
  ];

  const sectors = [
    "Industrial Plants / Power Stations",
    "Commercial Establishments",
    "Residential Buildings",
    "Bungalows / Apartments",
    "Public Spaces",
    "Shopping Complexes",
    "Sports Grounds",
    "Electrical Products",
  ];

  const software = [
    "AutoCAD",
    "SOLIDWORKS",
    "eDrawMax",
    "ETAP",
    "Electra E8",
    "SmartDraw",
    "ProfiCAD",
  ];

  const processSteps = [
    "Analyzing the client's needs: Identifying all needs and KPIs for the project.",
    "Gathering pre-existing data: Reviewing 'as-installed' sketches and design data.",
    "Sample design draft: First draft sent to client for validation and feedback.",
    "Final design creation: Making changes based on client feedback.",
    "Quality check: Internal multi-level review before client validation.",
    "Project submission: Delivering final schematic drawings securely in the desired format.",
  ];

  const benefits = [
    "High quality, hassle-free services with minimal to-and-fro communication.",
    "Cost-effective pricing at affordable hourly rates.",
    "Bulk design handling capacity for large-scale projects without quality compromise.",
    "Dedicated and passionate design team delivering top-notch results.",
    "Industry expertise and ISO 9001:2007 certified best practices.",
    "Fast turnaround: 48-hour first draft delivery and adherence to tight deadlines.",
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Schematic Drawing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We create top-quality electrical schematic designs at affordable prices starting at just $9/hour, capturing every detail for your projects.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity is a highly professional and ISO-certified electrical schematic drawing services provider. Our team of electrical engineers, CAD designers, and domain experts deliver accurate, top-focus schematic designs to streamline the design process for global clients across real estate, industrial engineering, automotive, and many other industries.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Electrical Schematic Drawing Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Sectors Served */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Sectors / Verticals We Serve
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {sectors.map((sector, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{sector}</li>
          ))}
        </ul>
      </section>

      {/* Software Used */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Advanced Drawing Software We Use
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
          {software.map((tool, index) => (
            <li key={index} className="bg-white px-4 py-2 rounded shadow">{tool}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Our Electrical Schematic Drawing Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Why Choose Nimble for Electrical Schematic Drawing?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-blue-700">Revit Modeling to a Swiss Architectural Firm</h3>
            <p>Provided services with quick turnaround time to a leading Swiss architectural firm.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700">Revit MEP Services to UK-based Engineering Consultants</h3>
            <p>Delivered cost-effective and precise Revit MEP services to a UK client.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for Electrical Schematic Drawing
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Nimble Acuity is your professional, reliable, and cost-effective electrical schematic drawing partner. Leverage our expertise, advanced tools, and experienced design team to achieve top-quality schematic designs for your projects.
        </p>
        <a href="#contact" className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectricalSchematicDrawing;
