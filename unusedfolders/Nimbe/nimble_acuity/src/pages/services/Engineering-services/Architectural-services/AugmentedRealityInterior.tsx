import React from "react";
import ESmainmenu from "../ESmainmenu";

const AugmentedRealityInterior: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Augmented Reality Interior Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to world-class augmented reality solutions to aid your interior design. Prices start at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          The growth of Augmented Reality has revolutionized interior design. Nimble Acuity provides pioneering AR solutions to help you save costs, reduce time, and create sophisticated interior design projects with smart technology.
        </p>
      </section>

      {/* AR Interior Design Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Augmented Reality Interior Design Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Interactive Designs", desc: "Showcase 3D modeling of interiors to help clients understand the site layout and design details." },
            { title: "Accurate Measurements", desc: "Utilize advanced tools to accurately place all physical elements in the interior site." },
            { title: "Real-Time Project Dynamics", desc: "Forecast how features and elements will look to improve visibility for project managers and builders." },
            { title: "Safety & Inspection", desc: "Tackle safety concerns efficiently using AR technology in interior design projects." },
            { title: "AR Training", desc: "Provide guidance and training for staff to effectively use AR tools in interior design." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Retail Visual Merchandising Services",
            "Landscape Design and Drafting Services",
            "Building Information Modeling",
            "3D Architectural Walkthroughs",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>A Creative and Motivated Team:</strong> Professional developers, designers, and AR experts for your project.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Security Assurance:</strong> Data safety and secure handling for all your interior design projects.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Affordable Pricing Models:</strong> Business-friendly rates for small and medium enterprises to harness AR technology.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Piping Instrumentation Indexes for a US-based Client</h3>
            <p>Delivered top-quality services for a US client efficiently and within deadlines.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">MTO Detailing Services for US-based Scaffolding Giant</h3>
            <p>Provided cost-effective detailing services to a leading scaffolding company.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “They have met all our deadlines and exceeded expectations in quality. We consider them a valuable part of our team.”
          <footer className="mt-4 font-semibold">— Spokesperson, Oil Exploration Company, US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Nimble Acuity for AR Interior Design Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Our professional team builds superior AR and VR solutions to enhance interior design processes, ensuring accurate and efficient results.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AugmentedRealityInterior;
