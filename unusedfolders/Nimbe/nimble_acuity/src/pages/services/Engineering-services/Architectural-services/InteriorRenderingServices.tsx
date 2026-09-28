import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function InteriorRenderingServices() {
  const services = [
    { title: "3D Interior Visualization Services", desc: "Convert technical representations of a space into life-like 3D visualizations using advanced software for smooth and meticulous results." },
    { title: "3D Interior Rendering Services", desc: "Generate realistic 3D images from 2D plans, complete with shadows, textures, angles, and colors to bring interiors to life." },
    { title: "Post Production Services", desc: "Image importing/exporting, Photoshop adjustments, technical corrections, resizing, and format conversion to finalize visuals." },
    { title: "Room Modeling", desc: "Virtually design rooms to optimize space usage, color combinations, lighting setups, and furniture placement." },
    { title: "Furniture Modeling", desc: "Smart furniture modeling covering texture, color, material, shape, design, placement, and functionalities." },
    { title: "Texture Scheduling", desc: "Create detailed texture schedules for flooring, walls, rugs, curtains, furniture, and decor to define the atmosphere." },
    { title: "Functionality Showcasing", desc: "Design functional layouts with partitions, cozy colors, and minimalistic decor to maintain spacious, usable interiors." },
    { title: "Innovative Solutions Highlighting", desc: "Highlight smart architectural solutions for tricky spaces, including lighting, zoning, storage, and material use." },
  ];

  const processSteps = [
    "Document Collection: Gather architectural plans, material lists, design references, and thematic directions from clients.",
    "Modeling and Artistic Brief: Finalize lighting, materials, furniture, and color choices as per the artistic brief.",
    "First Draft Visualization and Rendering: Create initial renders using multiple camera angles to highlight key architectural and interior features.",
    "Feedback and Revisions: Integrate client feedback to refine and perfect the interior images.",
    "Final Delivery: Provide 3D renders in preferred formats, free from watermarks."
  ];

  const otherServices = ["Revit Modeling Services", "Point Cloud Services", "SketchUp Modeling Services", "Building Information Model"];

  const clientStories = [
    { title: "CAD Models for a US Architectural Firm", desc: "Provided cost-effective CAD modeling solutions to a reputed US-based architectural firm." },
    { title: "Architectural Rendering for a Wisconsin-based Client", desc: "Delivered high-quality architectural rendering services as per SLA within a short timeframe." }
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Interior Rendering Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Integrate design visualizations, texture, aesthetics, and a touch of life into your architectural plans.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Interior Rendering Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Interior Rendering Process
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
            <h3 className="text-lg md:text-xl font-semibold text-purple-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          A robust congratulations to the team at Nimble Acuity for a job well done.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— CMO, Leading Medical Care Company in Seattle, WA</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Interior rendering is all about experience, precision, creativity, intuition, and space science. Partner with Nimble Acuity for world-class interior rendering services.
        </p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
