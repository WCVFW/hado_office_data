import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function TelecomNetworkDrawings() {
  const services = [
    { title: "Tower Design", desc: "Detailed telecom tower designs including replacement plans and monopole designs with AutoCAD, SolidWorks, and Revit." },
    { title: "Tower Modifications", desc: "Upgrades and structural changes with precise site plans, equipment layouts, elevation drawings, and foundation drawings." },
    { title: "Tower Mapping", desc: "Comprehensive site and tower location mapping using ArcGIS and Google Earth Pro for accurate planning and network administration." },
    { title: "CAD Drafting", desc: "Intricate technical blueprints detailing every aspect of telecom infrastructure for installation, planning, and maintenance." },
    { title: "Elevation Drawings", desc: "Clear, detailed elevation drawings to enhance planning and troubleshooting of your telecom network." },
    { title: "Detail Drawings", desc: "Close-up views of network components or segments providing precision in installation and maintenance." },
    { title: "Structural Design & Drafting", desc: "Ensuring the strength, safety, and stability of telecom structures with professional structural drafting." },
    { title: "Fabrication Drawings", desc: "Precise manufacturing guides for telecom components for seamless integration into your network." },
    { title: "Point Cloud to CAD & 3D Animation", desc: "Transform point cloud data into accurate CAD models for planning, simulation, and visualization." },
    { title: "3D Modeling & BIM Services", desc: "Advanced 3D models, Revit families, digital twins, and IoT modeling for telecom networks." },
    { title: "Documentation Services", desc: "As-built drawings and construction blueprints to maintain accurate records for future upgrades and maintenance." }
  ];

  const processSteps = [
    "Consultation: Understand your unique requirements and network specifications",
    "Drafting: Create precise drawings using advanced software adhering to industry standards",
    "Review: Conduct rigorous review for accuracy and consistency",
    "Revisions: Refine drawings based on feedback and review",
    "Final Delivery: Deliver polished telecom network drawings in preferred format"
  ];

  const useCases = [
    "Building Design", "Construction", "Maintenance", "System Upgrades", "Regulatory Compliance"
  ];

  const audience = ["Architects", "Engineers", "Contractors", "Telecom Companies"];
  const software = ["AutoCAD", "SolidWorks", "Inventor", "Revit", "ArcGIS", "Google Earth Pro"];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Telecom Network Drawings Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          From telecom tower design to equipment layout, we guarantee precision, compliance, and future-ready solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Telecom Network Drawing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Telecom Network Drawing Process
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
          {useCases.map((use, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">{use}</div>
          ))}
        </div>
      </section>

      {/* Target Audience & Software */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Target Audience</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
              {audience.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Software We Use</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-base">
              {software.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble delivered architectural and infrastructure engineering services to US-based clients, providing highly accurate piping, instrumentation, and telecom drawings at cost-effective rates.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Global Clients</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          The commitment, dedication, and focus of Nimble's managers and engineers surpassed our expectations.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Nimble Telecom Network Drawings Services provide precision, compliance, and detailed visualization for telecom infrastructure. Get in touch to create a future-ready network.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
