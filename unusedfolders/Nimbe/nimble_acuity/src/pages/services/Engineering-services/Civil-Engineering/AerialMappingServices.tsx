import React from "react";
import ESmainmenu from "../ESmainmenu";

const AerialMappingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Aerial & Drone Mapping Services by Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get comprehensive aerial and GIS mapping services with faster turnaround times, low cost, and detailed site mapping. Prices start at{" "}
          <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Using the latest aerial data capture and processing technologies, Nimble Acuity delivers high-precision LiDAR, orthographic, tilted image, and derivative mapping products. All outputs conform to national and international mapping standards.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Aerial Mapping Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Civil Engineering Design Mapping",
              desc: "Precise topographic mapping for civil engineering projects to ensure design parameters match real-world conditions. Complemented by traditional survey measurements.",
            },
            {
              title: "Land Planning Mapping",
              desc: "Cost-effective 3D mapping to provide reliable, project-ready surface data within budget for planning purposes.",
            },
            {
              title: "Mining and Pit Operations",
              desc: "Gather accurate topographic and volumetric data from the air, reducing surveyor risk and time, and improving project efficiency.",
            },
            {
              title: "GIS Base Mapping & Data Acquisition",
              desc: "Capture precise aerial images and convert them into 2D orthomosaics and 3D models for forestry, agriculture, resource management, and more.",
            },
            {
              title: "Site Inspection / Construction Monitoring / As-Built Mapping",
              desc: "Remote site inspections and progress tracking made faster and easier using aerial imagery for accurate mapping throughout project lifecycle.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble for Aerial Mapping?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 max-w-6xl mx-auto">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Minimize Costs:</strong> Save on equipment, software, and hiring/training by outsourcing aerial mapping services.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Top-of-the-Line Equipment:</strong> Use the latest UAV/UAS technology for high-precision results.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Drone Service On-Demand:</strong> Pay only for what you need, delivered within your project timeframe.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>ISO Certified:</strong> High-quality aerial mapping services adhering to international standards.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Provided Accurate CAD Drawings
            </h3>
            <p>
              CAD drawings for a US-based structural insulated panel manufacturer, saving $145,000 and improving operational efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Created High-quality 3D Revit Models
            </h3>
            <p>
              Leveraged point cloud technology to deliver sustainable architectural 3D Revit modeling designs for a leading design firm efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “They have been able to learn our procedures quicker than I ever thought possible.”
          <footer className="mt-4 font-semibold">— General Partner, Manufacturing company in the US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          High-Precision Aerial Mapping with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity provides fast, cost-effective, and highly accurate aerial mapping services that comply with global standards.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AerialMappingServices;
