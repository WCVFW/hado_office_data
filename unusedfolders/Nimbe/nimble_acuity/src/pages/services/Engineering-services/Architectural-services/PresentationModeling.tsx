import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function PresentationModeling() {
  const services = [
    {
      title: "3D Presentation Models",
      desc: "We convert 2D drawings into detailed 3D models to help stakeholders visualize projects, propose modifications, and understand the layout comprehensively."
    },
    {
      title: "Perspective and Orthographic Projections",
      desc: "High-quality projections are created from engineering data to give different views and facilitate easy comparison and understanding of designs."
    },
    {
      title: "Virtual Building Model",
      desc: "We create detailed virtual building models using BIM techniques to visualize the design, extrapolate insights, and enhance project success."
    },
    {
      title: "Clash Detection",
      desc: "Our BIM-based clash detection anticipates design conflicts early, reducing errors and ensuring smooth project execution."
    }
  ];

  const processSteps = [
    "Requirement Discovery with the client.",
    "Collection of Preliminary Data and drafts.",
    "Team Selection and project onboarding.",
    "Presentation Modeling execution as per plan.",
    "Quality Check and monitoring.",
    "Report Submission with detailed summary."
  ];

  const benefits = [
    "Friendly and affordable rates for flexible services.",
    "Project management using cutting-edge tools like Revit and 3D CAD.",
    "High-quality validated presentation models.",
    "ISO/IEC 27001:2022 compliant data security.",
    "Quick turnaround time adhering to SLA timelines.",
    "ISO 9001:2015 certified project workflows.",
    "Scalable services to adapt to project changes.",
    "Experienced architects and modelers for precise outputs.",
    "24/7 support via call, email, or webchat."
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Presentation Modeling Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          High-quality presentation modeling services to transform preliminary sketches of elevations, plans, and sections into precise 3D models.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Presentation Modeling Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Presentation Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-sm md:text-base">✅ {benefit}</div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity provided cost-effective CAD modeling solutions to a reputed US-based architectural firm, delivering models complete with detailed layouts, RCP, and switch positions for 230 sites in just 2 months.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Architectural Client, US</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, A Manufacturing Company in the US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          With 26+ years of experience, Nimble Acuity delivers top-tier presentation modeling services. Contact us today for a free quote and on-time project delivery.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
