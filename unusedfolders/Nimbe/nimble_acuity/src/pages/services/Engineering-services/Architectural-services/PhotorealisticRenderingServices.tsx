import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function PhotorealisticRenderingServices() {
  const services = [
    { title: "Photorealistic Architectural Rendering Services", desc: "High-quality, distortion-free rendering of 2D architectural designs using scene representation techniques for precise construction visualization." },
    { title: "Photorealistic 3D Rendering Services", desc: "Convert objects into 3D models with realistic textures, surfaces, and dimensions, enabling immersive videos and images." },
    { title: "CAD Modeling", desc: "Accurate CAD models using SolidWorks, FreeCAD, and Solid Edge for electronic systems, parts, and assembly manufacturers." },
    { title: "3D Floor Plan Design", desc: "High-end 3D floor plan designs to assist builders, stakeholders, or for marketing purposes." },
    { title: "360 Degree Panorama Views", desc: "Photorealistic renderings of real estate and surroundings, giving buyers a detailed perception of the project." },
    { title: "Furniture Rendering", desc: "High-quality furniture rendering to visualize interior aesthetics and finish." },
    { title: "Rendering & Modeling of Products", desc: "Create photorealistic product renderings for marketing and presentation purposes." },
  ];

  const processSteps = [
    "Capture the photorealistic rendering requirements through detailed client discussions.",
    "Draft a well-crafted plan and share the project outline for approval.",
    "Assign the project to qualified agents upon approval.",
    "Execute photorealistic rendering and conduct thorough quality checks.",
    "Compile and share comprehensive reports of 3D photorealistic renderings with clients."
  ];

  const otherServices = ["Point Cloud Services", "3D Architectural Walkthroughs", "Building Information Model", "3D Rendering & Walkthrough Services"];

  const clientStories = [
    { title: "Revit MEP Services for UK-based Engineering Consultants", desc: "Delivered all services as per SLA for a UK-based engineering consultant." },
    { title: "AutoCAD Conversion Services for a US Interior Design Company", desc: "Provided AutoCAD conversion with high precision and quick TAT, praised by the client." }
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Photorealistic Rendering Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Visualize construction in a finished state with highly precise photorealistic rendering at competitive rates.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Photorealistic Rendering Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Photorealistic Rendering Process
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {otherServices.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">{service}</div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        {clientStories.map((story, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-indigo-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quick to learn our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Save time and cost by outsourcing your photorealistic rendering to Nimble Acuity. Our team will make your vision a reality with precision and efficiency.
        </p>
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
