import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function AsBuiltDrawingServices() {
  const asBuiltServices = [
    "As-Built BIM Modeling",
    "Architectural As-built Drawing Services",
    "As Built Record Drawings",
    "As-Built Drawing Support",
  ];

  const otherServices = [
    "Retail Visual Merchandising Services",
    "Landscape Design and Drafting Services",
    "Building Information Model",
    "3D Architectural Walkthroughs",
  ];

  const clientStories = [
    {
      title: "Piping Instrumentation Indexes for a US-based Client",
      desc: "A leading US-based customer sought help with piping instrumentation indexes. Nimble delivered high-quality services within a quick time.",
    },
    {
      title: "MTO Detailing Services for a US-based Scaffolding Giant",
      desc: "A US scaffolding company required MTO detailing services. Nimble delivered cost-effective solutions promptly.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble As-Built Drawing Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Get specialized as-built drawing expertise for all your construction project requirements.
        </p>
        <p className="mt-2 text-sm md:text-base">Prices start at $12/hour</p>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <p className="text-sm md:text-base mb-4">
          Nimble Acuity provides expert as-built drawing services to help architectural organizations create accurate and systematic drawings for any construction project. Our skilled engineers leverage the latest tools to deliver precise and reliable results.
        </p>
      </section>

      {/* As-Built Services */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          As-Built Drawings Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {asBuiltServices.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {otherServices.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose Nimble Acuity for As-Built Drawings?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li><strong>Affordable Pricing:</strong> Our pricing module is designed for client convenience.</li>
          <li><strong>Data Security:</strong> ISO-certified organization ensures all project data remains secure.</li>
          <li><strong>Superior Quality Services:</strong> Multi-level quality assurance guarantees precise, error-free deliverables.</li>
          <li><strong>Best Infrastructure:</strong> Equipped with tools and resources to deliver accurate as-built drawings.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        {clientStories.map((story, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-blue-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          They met all our deadlines and exceeded expectations in quality. We consider them a valuable part of our team.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Partner with Nimble Acuity for reliable As-Built drawing services and ensure your construction projects are accurately documented.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
