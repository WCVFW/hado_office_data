import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function SkylightDetailingServices() {
  const skylightServices = [
    "Curtain Wall Detailing",
    "Structural Glazing Detailing",
    "Spider Glazing Detailing",
    "External Doors & Windows Detailing",
    "Façade 3D BIM",
    "Atrium and Canopies Detailing",
    "Unitized, Semi-Unitized Systems",
    "Steel & Green Façade Detailing",
    "Stick Wall System",
    "Shop Front Drawing",
    "Internal Frameless Glass Partitions Detailing",
  ];

  const otherServices = [
    "Real Estate Rendering Services",
    "Landscape Design and Drafting Services",
    "Interior Rendering Services",
    "Photorealistic Rendering Services",
  ];

  const clientStories = [
    {
      title: "3D Part Modeling Services to Aerospace OEM Manufacturer",
      desc: "Australian client requested 3D modeling of the tank strap wing. Delivered using Inventor 2015 within one week.",
    },
    {
      title: "Architectural Rendering for a Wisconsin-based Client",
      desc: "Delivered architectural rendering services quickly for a leading Wisconsin client.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Skylight Detailing Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Maximize natural daylight, ensure energy-efficient construction, and reduce costs with our specialized skylight drafting services.
        </p>
        <p className="mt-2 text-sm md:text-base">Prices start at $11/hour</p>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity provides sustainable and energy-efficient architectural designs leveraging advanced AEC tools. Our experienced CAD engineers offer precise 2D & 3D drafting and detailing services for building façades, windows, roofs, and skylights to maximize ventilation and natural daylight while minimizing heating, cooling, and lighting costs.
        </p>
      </section>

      {/* Skylight Services */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Skylight Drafting Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
          {skylightServices.map((service, idx) => (
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

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose Nimble Skylight Detailing Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li><strong>Competitive Prices:</strong> Best-in-class façade skylight detailing starting at $11/hour.</li>
          <li><strong>Experienced Team:</strong> Certified engineers and drafters optimizing daylighting and ventilation.</li>
          <li><strong>Best Infrastructure:</strong> State-of-the-art tools, cloud storage, and high-security backup across 160+ countries.</li>
          <li><strong>Quality Assurance:</strong> ISO-certified with multi-stage quality checks ensuring accuracy and error-free deliverables.</li>
          <li><strong>Scalable Solutions:</strong> Quickly adapt to changing requirements without affecting timelines.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock assistance for instant query resolution.</li>
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
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, A Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Partner with Nimble Acuity to achieve accurate, energy-efficient, and sustainable skylight detailing for your projects with a quick turnaround time.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
