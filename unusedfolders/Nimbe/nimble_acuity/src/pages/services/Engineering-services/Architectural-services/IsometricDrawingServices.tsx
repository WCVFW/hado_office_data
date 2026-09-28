import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function IsometricDrawingServices() {
  const services = [
    {
      title: "Asset Assembly 2D Isometric Drawing",
      desc: "Helps piping, mechanical, HVAC, and sewer system designers visualize connections and assembly details to fabricate better designs and structurally sound components."
    },
    {
      title: "Bill of Material for Pipe Assembly",
      desc: "Preparation of itemized parts list and cost, representing service perspective for maintenance of assets while in operation."
    }
  ];

  const processSteps = [
    "Discuss challenges and requirements with clients for isometric drawing",
    "Communicate a well-laid plan and project outline",
    "Authorize the project and assign to capable teams",
    "Execute isometric drawing and perform quality control verification",
    "Create reports and deliver high-quality 3D isometric drawings"
  ];

  const benefits = [
    "High-quality services with dedicated teams ensuring accuracy",
    "Affordable services suitable for any budget",
    "Superb infrastructure supporting high-quality drawing delivery",
    "ISO 9001:2015 certified isometric drawing services provider",
    "100% data security compliant with ISO/IEC 27001:2015",
    "Quick turnaround time with punctual delivery",
    "Scalable services to accommodate project requirements",
    "Certified professional FTEs using CAD technology",
    "Round-the-clock support"
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Isometric Drawing Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Precise 2D isometric drawing for mechanical, plumbing, and HVAC components, starting at just $11/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Isometric Drawing Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          Isometric Drawing Process
        </h2>
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
          Nimble Acuity provided Revit MEP services to a UK-based engineering consultant and AutoCAD conversion services to a US interior design company, delivering high-quality outputs within tight timelines.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Global Clients</p>
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
          Hire Nimble Acuity for expert isometric drawing services and save the cost of full-time employees. We customize a comprehensive plan to make your vision a reality with cutting-edge technology.
        </p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
