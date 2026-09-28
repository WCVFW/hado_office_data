import React from "react";
import ESmainmenu from "../ESmainmenu";

const ResilienceEngineeringServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Resilience Engineering Services by Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Effectively and efficiently create more resilient architectural projects at prices starting at{" "}
          <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Protect communities and infrastructure from disasters and natural hazards with Nimble Acuity’s resilience engineering solutions. With 26+ years of experience, our expert team identifies risk factors and implements preventive measures to ensure your architectural projects are resilient and sustainable.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Resilience Engineering Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Hazard Evaluation",
              desc: "Evaluate project sites and surrounding areas to identify potential natural hazards and ensure safe architectural projects.",
            },
            {
              title: "Disaster Assessment & Training",
              desc: "Guidance and training for measures to take before and after natural disasters to ensure preparedness.",
            },
            {
              title: "Hazard Vulnerability Assessment",
              desc: "Thorough inspections to assess vulnerability to natural hazards and implement preventive measures.",
            },
            {
              title: "Resilience Design",
              desc: "Design and development solutions to enable smooth completion of resilient projects.",
            },
            {
              title: "Resilience Planning",
              desc: "Comprehensive planning services to prepare your project for any disaster or natural hazard.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble for Resilience Engineering?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Pocket-Friendly Rates:</strong> Flexible and affordable pricing that fits your business budget.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Industry Standards:</strong> ISO-certified company delivering high-quality engineering solutions.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Superior Infrastructure:</strong> Access to latest technology and tools for critical engineering projects.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Expert Team:</strong> Professionals trained in resilience projects providing insightful expertise.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Nimble Provided Accurate CAD Drawings
            </h3>
            <p>
              Created robust CAD drawings for a US-based structural insulated panel manufacturer, saving over $145,000 and improving efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Nimble Delivered 3D Revit Models
            </h3>
            <p>
              Used point cloud technology to provide sustainable architectural 3D Revit modeling designs for a leading design firm within a short period.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “They have been able to learn our procedures quicker than I ever thought possible.”
          <footer className="mt-4 font-semibold">
            — General Partner, Manufacturing Company, US
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Build Resilient Projects with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          With 26+ years of experience, Nimble Acuity provides resilient engineering solutions for safer, sustainable, and disaster-ready architectural projects.
        </p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ResilienceEngineeringServices;
