import React from "react";
import ESmainmenu from "../ESmainmenu";

const PipingSpoolDrawing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Piping Spool Drawing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to flawless and accurate piping spool drawing services from an experienced team of architectural engineers, starting at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Is your organization struggling to get accurate piping spool drawings? Nimble Acuity provides skilled engineers with the latest tools and technologies to deliver top-notch services customized to your needs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Piping Spool Drawing Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "BOMs and Advanced BOMs", desc: "Accurate BOMs and advanced BOMs with shop drawings for complete project documentation." },
            { title: "Isometric Drawing Services", desc: "Error-free isometric drawings, including exploded as-built drawings using latest tools." },
            { title: "2D CAD Drawings", desc: "Accurate and customized 2D CAD drawing services delivered with precision and quality." },
            { title: "Mark Up Drawings", desc: "Quick turnaround mark up drawings tailored to client-specific requirements." },
            { title: "Spool and Nesting Diagrams", desc: "High-quality 2D CAD spool and nesting diagrams produced efficiently." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Retail Visual Merchandising Services",
            "3D Architectural Walkthroughs",
            "Building Information Modeling",
            "Landscape Design and Drafting Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Flexible Pricing Options",
            "Data Security",
            "Superior Quality Services",
            "Best Infrastructure",
            "Skilled Spool Drawing Experts",
            "Dedicated Project Manager (SPOC)",
            "Easily Scalable Services",
            "24/7 Support",
            "Quick Turnaround Time",
          ].map((item, idx) => (
            <li key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Piping Instrumentation Indexes for US-based Client</h3>
            <p>Delivered 99.9% accurate cataloging while saving 50% in costs for the client.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">MTO Detailing Services for US-based Scaffolding Giant</h3>
            <p>Provided cost-effective MTO detailing services from GFC drawings for a leading US client.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Nimble Acuity for Piping Spool Drawing Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity delivers precise and cost-effective piping spool drawing services globally. Contact us today to get started!
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PipingSpoolDrawing;
