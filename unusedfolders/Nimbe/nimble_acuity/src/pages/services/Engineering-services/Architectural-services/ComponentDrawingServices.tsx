import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function ComponentDrawingServices() {
  const componentServices = [
    "Standard Drawing",
    "Outline Drawing",
    "Working Drawing",
    "Diagram Drawing",
    "3D Component Drawing",
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Component Drawing Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Get access to professional drawing solutions for different mechanical parts and products.
        </p>
        <p className="mt-2 text-sm md:text-base">Prices start at $12/hour</p>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <p className="text-sm md:text-base mb-4">
          Nimble Acuity offers expert component drawing services, providing precise, professional drawings for mechanical parts and architectural components. Our experienced team delivers high-quality results using the latest tools and technologies.
        </p>
      </section>

      {/* Component Drawing Services */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Component Drawing Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
          {componentServices.map((service, idx) => (
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
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose Nimble for Component Drawing Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li><strong>Cost-effective Pricing:</strong> High-quality drawing services at affordable rates.</li>
          <li><strong>Resources:</strong> Skilled engineers and drawing experts using latest tools and technologies.</li>
          <li><strong>High-quality Services:</strong> Quality is our top priority, ensuring accurate and precise drawings.</li>
          <li><strong>World-class Infrastructure:</strong> Modern offices with state-of-the-art tools for professional drawings.</li>
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
          They have met all our deadlines and exceeded our expectations in quality. We consider them a valuable part of our team.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Partner with Nimble Acuity for professional component drawing services and ensure your projects are precise and accurate.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
