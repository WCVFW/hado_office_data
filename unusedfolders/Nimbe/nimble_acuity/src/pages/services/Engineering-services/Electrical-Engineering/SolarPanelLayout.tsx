import React from "react";
import ESmainmenu from "../ESmainmenu";

const SolarPanelLayout = () => {
  const services = [
    { title: "Site Assessment", description: "Analyze site data for optimal panel placement, system sizing, and efficiency." },
    { title: "System Sizing", description: "Accurately size solar systems to maximize energy production and avoid undersized/oversized issues." },
    { title: "Shade Analysis", description: "Identify shading impacts and optimize panel positioning to increase energy yield." },
    { title: "Panel Placement & Array Design", description: "Strategically design arrays for higher efficiency and maximum ROI." },
    { title: "Electrical Design", description: "Optimize energy production, minimize losses, and enhance system performance." },
    { title: "Structural Analysis", description: "Ensure foundation stability, wind resistance, and load-bearing capacity." },
    { title: "Performance & Financial Analysis", description: "Maximize ROI and ensure long-term financial benefits." },
    { title: "Energy Consumption Analysis", description: "Identify energy-saving opportunities and recommend improvements." },
    { title: "Energy Storage Integration", description: "Assess peak demand, renewable patterns, and grid requirements." },
    { title: "Inverter Selection & Sizing", description: "Ensure optimal inverter performance for maximum energy harvest." },
  ];

  const processSteps = [
    "Discovery Session: Gain insights into your project needs and goals.",
    "Site Assessment: Analyze site conditions for an optimized design plan.",
    "Tailored Proposal: Present a customized layout design that meets your requirements.",
    "Collaborative Refinement: Fine-tune the design together to ensure alignment.",
    "Regulatory Compliance: Ensure adherence to local regulations and industry standards.",
    "Documentation & Deliverables: Provide comprehensive reports for easy implementation.",
    "Ongoing Support: Receive dedicated assistance throughout the project.",
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Solar Panel Layout Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Optimize performance, ensure compliance, and drive cost savings with expert solar panel layout design solutions.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          From precise solar irradiation analysis to meticulous evaluation of shading patterns and structural considerations, Nimble provides expert solar panel layout design services. Our team conducts rigorous site assessments and ensures optimized, compliant, and reliable solar panel systems for your unique project requirements.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-yellow-800 mb-8 text-center">
          Rooftop Solar Panel Layout Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-800 mb-8 text-center">
          Solar Panel Installation Design Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
          Clients We Cater To
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {[
            "Solar Installation Companies and Contractors",
            "Renewable Energy Developers",
            "Electrical Contractors",
            "Construction Companies",
            "Engineering Firms",
            "Energy Consultants",
            "Project Management Companies",
            "Facility Management Companies",
            "Government Agencies",
            "Solar Panel Manufacturers",
          ].map((client, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{client}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
          Why Choose Nimble?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By choosing Nimble Acuity as your solar panel layout design partner, you benefit from impeccable workflow, rigorous quality assurance, latest tools and software, world-class infrastructure, global delivery centers, project management software, and a flexible pricing model. Focus on your core business while we deliver optimized, compliant, and high-performance solar solutions.
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
          Additional Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
          {[
            "Mechanical Engineering Services",
            "Architectural Engineering Services",
            "Electrical Engineering Services",
            "Civil Engineering Services",
          ].map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{service}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-yellow-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble for Expert Solar Panel Layout Design
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Outsource your solar panel layout design to Nimble Acuity and ensure optimized performance, compliance, and cost savings. Our experts will deliver tailor-made solutions for your unique projects.
        </p>
        <a href="#contact" className="inline-block bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-yellow-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SolarPanelLayout;
