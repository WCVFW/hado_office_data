import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function FacadeEngineering() {
  const services = [
    { title: "Facade Designing", desc: "Expert team from structural, architectural, and material disciplines to design strong, functional, and aesthetic facades." },
    { title: "Inspection and Auditing", desc: "Evaluate existing facades for compliance, risk assessment, and recommend modifications if necessary." },
    { title: "Building Condition & Life Cycle Analysis", desc: "In-depth assessment of environmental impacts, sustainability, and building life cycle for long-term performance." },
    { title: "Material Analysis", desc: "Assess and recommend optimal materials for facade engineering using expert material science techniques." },
    { title: "Sealant & Curtain Wall Glazing Analysis", desc: "Analyze and optimize curtain wall and sealant applications for structural stability and aesthetics." },
    { title: "Fire Safety", desc: "Ensure facade safety by analyzing combustibility, flame spread, toxicity, and smoke development." },
    { title: "Wind Load Analysis", desc: "Simulate wind behavior, pressure loads, and torsion to design durable facades." }
  ];

  const processSteps = [
    "Requirement Analysis: Understand client needs, prepare SOP, and get approval",
    "Designing/Analysis: Multidisciplinary team plans detailed facade design with deadlines",
    "Building and Reviewing: Execute plan and update client at each stage",
    "Quality Control: QA team verifies deliverables and addresses any issues",
    "Delivery: Final changes based on client feedback, delivered via secure FTP"
  ];

  const industries = [
    "Office Buildings", "Hospitals", "Educational Institutions", "Government-related Buildings",
    "Amusement Parks", "Non-Commercial Projects", "Housing Projects", "Residential Buildings",
    "Industrial Projects", "Data Centers", "Cold Storage Units"
  ];

  const benefits = [
    "Affordable Services",
    "Latest Technology",
    "Well-Equipped Team",
    "Single Point of Contact",
    "Quick Turnaround Time",
    "24/7 Availability"
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Facade Engineering Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Professional-grade, functional, and aesthetic facade engineering services starting at $12/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Facade Engineering Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Facade Engineering Process
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm md:text-base">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Industries Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Industries We Cater To</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">{industry}</div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why Choose Nimble Acuity?</h2>
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
          Nimble Acuity delivered architectural and infrastructure engineering services for US-based engineering and plant projects, providing highly accurate drawings at cost-effective rates.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Global Clients</p>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          The commitment, dedication, and focus of Nimble Acuity's managers and engineers surpassed our expectations.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Outsource facade engineering services to Nimble Acuity for a functional, safe, and visually stunning facade. We offer pocket-friendly prices and holistic solutions.
        </p>
        <button className="bg-teal-700 hover:bg-teal-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
