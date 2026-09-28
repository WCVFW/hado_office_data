import React from "react";
import ESmainmenu from "../ESmainmenu";

const EmbeddedSystemDesign = () => {
  const services = [
    "Requirement Analysis",
    "Operating System Porting",
    "System Definition",
    "Platform Migration and Support",
    "Algorithm Design and Development",
    "Microprocessor Design and Development",
    "Embedded Electronics Design",
    "Sensors/Actuators Design and Development",
    "Circuit Design and Development",
    "Real-time Software Design and Development",
    "GUI and Tool Design and Development",
    "Mechanical Package Design and Development",
    "Documentation Services",
  ];

  const benefits = [
    "Cost-effective Pricing Options: Substantial value for money.",
    "High-quality Services: ISO-certified with stringent quality controls.",
    "Superb Infrastructure: Equipped to deliver outstanding designs.",
    "Tools and Technologies: Latest and cutting-edge technologies.",
    "Structured Process: Systematic approach for all design services.",
    "Experienced Team: 26+ years of embedded system design expertise.",
    "Data Security: GDPR-compliant, secure handling of all data.",
    "Quick Turnaround Time: Services delivered within deadlines.",
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
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Embedded System Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Use the latest technologies to design your embedded systems with Nimble at prices starting at $9/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity is a leading provider of embedded system design solutions globally. Our diverse engineering team has substantial experience with microprocessors, microcontrollers, custom design chips, computer hardware, electrical components, software, algorithms, and applications. We deliver precise, cutting-edge embedded system design services for simple and complex requirements alike.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
          Embedded System Design Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Why Choose Nimble for Embedded System Design?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Clients We Cater To
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {clients.map((client, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{client}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-indigo-700">Product Design Support to Oil & Gas Giant</h3>
            <p>Nimble Acuity provided high-quality and precise embedded system product design services to a leading Australian oil & gas firm.</p>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700">3D Modeling for Steel Fabrication Provider</h3>
            <p>Delivered precise 3D modeling services to a reputed steel fabrication firm in the USA within the stipulated timeframe.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for Embedded System Design
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Nimble Acuity is your professional, reliable, and cost-effective provider of embedded system design services. Get access to our skilled team and advanced tools to deliver cutting-edge solutions.
        </p>
        <a href="#contact" className="inline-block bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-indigo-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default EmbeddedSystemDesign;
