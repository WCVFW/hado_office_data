import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function BREPModeling() {
  const services = [
    {
      title: "BREP Modeling Services",
      desc: "Our team utilizes CAD programs like AutoCAD and SolidWorks to make BREP 3D models, either extracted from 2D models or created from scratch to meet your specifications."
    },
    {
      title: "Mesh BREP Modeling",
      desc: "We model objects with mesh surfaces using SolidWorks and apply them to defined surfaces to create precise geometric mesh facets."
    },
    {
      title: "Generative Design Modeling",
      desc: "Using parametric and generative design techniques in Rhino or Fusion 360, our engineers achieve optimal results within your design parameters."
    },
    {
      title: "Grasshopper BREP Modeling",
      desc: "Our experts use Rhino and Grasshopper for parametric design, analysis, and simulation of 3D models for accurate, optimized outputs."
    }
  ];

  const processSteps = [
    "Initial consultation between you and your Nimble team",
    "Discuss modeling requirements and timeframe",
    "Agree on prices and final deliverables",
    "Submit all designs, drawings, and relevant information",
    "Senior engineer oversees the process",
    "Sample models sent for verification",
    "Team completes final touches",
    "Quality control and assessment",
    "Final models sent for review",
    "Necessary changes implemented quickly",
    "Finished work submitted with feedback welcome"
  ];

  const benefits = [
    "Access to the latest software for precision modeling",
    "Fast, friendly, and cost-effective service",
    "Dedicated team ensuring exact project requirements",
    "Highly qualified and trained professionals",
    "Experience with global clients and ISO-compliant models"
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Boundary Representation Modeling Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Precision BREP modeling services rendered by highly skilled engineers using the latest software, starting at just $16/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our BREP Modeling Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our 3D Engineering Animation Process</h2>
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
          Nimble Acuity provided cost-effective CAD modeling solutions to a US-based architectural firm, delivering models with detailed layouts, RCP, and switch positions for 230 sites in just 2 months.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Architectural Client, US</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and adapt quickly to our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, A Manufacturing Company in the US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Nimble Acuity delivers top-tier BREP modeling services with a dedicated team, ISO-compliant models, and 26+ years of experience. Contact us today for a free consultation.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
