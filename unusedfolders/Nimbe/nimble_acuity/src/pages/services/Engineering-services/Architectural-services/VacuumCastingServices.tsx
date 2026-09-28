import React from "react";
import ESmainmenu from "../ESmainmenu";

const VacuumCastingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Vacuum Casting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to superior quality production parts and prototypes with Nimble's vacuum casting services, starting at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Are you looking to design top-quality prototypes and production parts for your business? Nimble Acuity provides skilled engineers who handle all custom vacuum casting needs using state-of-the-art technologies—saving you both time and money.
        </p>
      </section>

      {/* What is Vacuum Casting */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">What is Vacuum Casting?</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          Polyurethane casting allows for multiple copies of an original design using inexpensive silicone molds. The resulting parts show excellent detail and can be used for prototypes or production parts.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Vacuum Casting Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Low Volume Production", desc: "Vacuum casting creates precision models for low-volume production, ideal for medical devices and cost-efficient products." },
            { title: "Fast Prototyping", desc: "Quickly create durable prototypes with varying size, color, and hardness without major cost implications." },
            { title: "Rapid Tooling", desc: "Produce high-quality tools from concept to mass production, ensuring intricate design features are preserved." },
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
            "3D Architectural Walkthroughs",
            "Building Information Modeling",
            "Landscape Design and Drafting Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-purple-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble for Vacuum Casting Services?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            { title: "Flexible Pricing Options", desc: "Affordable vacuum casting services tailored to your budget without compromising quality." },
            { title: "State-of-the-art Infrastructure", desc: "High-quality casting machines and workspaces to deliver superior results." },
            { title: "Superior Quality Services", desc: "ISO-certified processes ensure meticulous execution with zero errors." },
            { title: "Data Security", desc: "ISMS-certified security to keep your data safe and confidential." },
            { title: "Dedicated Manager", desc: "A dedicated project expert ensures smooth communication and project management." },
            { title: "Easily Scalable Services", desc: "Scale team size and service volume to meet production goals efficiently." },
            { title: "Skilled Engineers", desc: "Experts trained in the latest vacuum casting techniques for precise results." },
            { title: "Quick Turnaround Time", desc: "Leverage global delivery centers for faster project completion." },
            { title: "Round the Clock Support", desc: "24/7 support via email and phone for seamless service." },
          ].map((item, idx) => (
            <li key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <strong className="text-purple-700">{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Land Development and Architectural Services for US-based Firm</h3>
            <p>A US client received top-quality vacuum casting and architectural support, achieving all deliverables on time and within budget.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Piping & Instrumentation Design for US Client</h3>
            <p>Nimble provided cost-effective, high-precision P&ID and MTO detailing services for a US scaffolding company.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.”
          <footer className="mt-4 font-semibold">— General Partner, Manufacturing Company, US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Vacuum Casting Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity delivers expert, reliable, and high-quality vacuum casting services. Contact us today to develop superior prototypes and production parts.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VacuumCastingServices;
