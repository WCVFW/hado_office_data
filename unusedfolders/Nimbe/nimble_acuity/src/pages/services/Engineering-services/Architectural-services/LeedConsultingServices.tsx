import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function LeedConsultingServices() {
  const leedServices = [
    "Design Services",
    "Support Services",
    "Consulting Services",
    "Development and Construction Services",
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
      desc: "A leading US-based customer sought help with piping instrumentation indexes. Nimble delivered high-quality services quickly.",
    },
    {
      title: "MTO Detailing Services for a US-based Scaffolding Giant",
      desc: "A US scaffolding company needed MTO detailing services. Nimble delivered cost-effective solutions within the required timeframe.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble LEED Consulting Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Ensure your architectural project is environmentally safe and complies with the green building system.
        </p>
        <p className="mt-2 text-sm md:text-base">Pricing starts at $12/hour</p>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <p className="text-sm md:text-base mb-4">
          Nimble Acuity provides professional LEED consulting services to help your building project comply with green building standards. Our expert team ensures environmentally safe designs and adherence to all LEED criteria for global clients.
        </p>
      </section>

      {/* LEED Services */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          LEED Consulting Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {leedServices.map((service, idx) => (
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
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose Nimble LEED Advisory Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li><strong>Affordable Rates:</strong> Flexible pricing ensures our services are accessible to all clients.</li>
          <li><strong>Quick Turnaround Times:</strong> Efficient team and resources guarantee fast results.</li>
          <li><strong>Data Security:</strong> Confidentiality agreements ensure your project data remains secure.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        {clientStories.map((story, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-green-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity met all our deadlines and exceeded expectations in quality. We consider them a valuable part of our team.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Partner with Nimble Acuity for professional LEED advisory services and achieve green building compliance efficiently.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
