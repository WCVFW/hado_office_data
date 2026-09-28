import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function ArchitecturalModelMaking() {
  const services = [
    {
      title: "Residential Model",
      desc: "Detailed models of residential complexes with beautifications to convince prospective homeowners and stakeholders. Helps architects plan the scope of work better than paper drawings."
    },
    {
      title: "Interior Model",
      desc: "Sophisticated 3D interior models completed in 45 days or less. Redefines art and beauty to illustrate grandeur and design intent."
    },
    {
      title: "Atmosphere Interior Model",
      desc: "Models interiors to create a feel-good atmosphere for occupants, based on multiple factors, themes, and design intentions."
    },
    {
      title: "Airport Model",
      desc: "Airside or landside models for high-profile projects emphasizing beauty, functionality, and security. Represents ideas into rich 3D models."
    }
  ];

  const processSteps = [
    "Speak to clients to discover expectations for architectural model making",
    "Create step-by-step plan and computerized models for client selection",
    "Authorize project and assign selected team to tasks",
    "Execute model making and follow up with quality control",
    "File detailed reports on project workflow"
  ];

  const benefits = [
    "High-quality services with on-time results",
    "Affordable services for small or large budgets",
    "Superb infrastructure supporting remote assistance",
    "ISO 9001:2015 certified architectural model making services",
    "100% data security compliant with ISO/IEC 27001:2015",
    "Quick turnaround time ensuring fast project completion",
    "Scalable services for evolving requirements",
    "SPOC assigned for smooth project resource management",
    "Professional FTEs with certified modeling experience",
    "Round-the-clock global support"
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Architectural Model Making Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          High-quality architectural model making for architects, stakeholders, and homeowners, starting at $11/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Architectural Model Making Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
          Architectural Model Making Process
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
          Nimble Acuity provided Revit MEP services to a UK-based engineering consultant and AutoCAD conversion services to a US interior design company, delivering high-quality outputs on time.
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
          Hire Nimble Acuity for expert architectural model making services and save the cost of full-time employees. We customize a detailed plan to turn your vision into reality with cutting-edge technology.
        </p>
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
