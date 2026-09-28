import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function RealEstateRendering() {
  const services = [
    {
      title: "Architectural Visualization",
      desc: "3D exterior rendering using BIM techniques, including interiors, aerial views, and super built-up areas to help prospective buyers visualize the finished construction."
    },
    {
      title: "Animation for Architecture",
      desc: "360-degree VR walkthroughs, complex camera shots, and immersive 3D animations to showcase interiors and architectural grandeur."
    },
    {
      title: "Architectural Drafting and Modeling",
      desc: "CAD conversion services, Revit modeling in 2D and 3D for live projects, ensuring drafting meets your expected quality standards."
    },
    {
      title: "Modeling of Furniture",
      desc: "3D element modeling to visualize furniture in ready-to-move condition or abstract contemporary designs for interiors."
    }
  ];

  const processSteps = [
    "Understand client challenges and real estate rendering requirements",
    "Create a detailed plan and basic project outline",
    "Authorize the project and assign to capable teams",
    "Carry out real estate rendering with quality control verification",
    "File reports and deliver high-quality 3D renderings"
  ];

  const benefits = [
    "High-quality real estate rendering services",
    "Affordable and budget-friendly services",
    "Superb infrastructure with remote assistance",
    "ISO 9001:2015 certified service provider",
    "100% data security and ISO/IEC 27001:2015 compliance",
    "Quick turnaround times",
    "Scalable services to meet evolving needs",
    "Dedicated SPOC and professional FTE team",
    "24/7 client support worldwide"
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Real Estate Rendering Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Realistic real estate 3D rendering using advanced tools and techniques, starting at just $11/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Real Estate Rendering Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          Real Estate Rendering Process
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
          Hire Nimble Acuity for expert real estate rendering services and save the cost of full-time employees. We customize plans to bring your vision to life with cutting-edge tools and techniques.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
