import React from "react";
import ESmainmenu from "../ESmainmenu";

const ArchitecturalWalkthrough: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          3D Architectural Walkthrough Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Providing interactive, realistic, and immersive experiences for AR, VR, and virtual walkthrough projects.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity enables you to visualize concepts with interactive 3D walkthroughs, life-like textures, materials, colors, finishes, and realistic landscapes for architectural, real estate, furniture, and game development projects.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our 3D Architectural Walkthrough Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Real Estate Projects", desc: "3D walkthroughs for villas, bungalows, airports, corporate, hospitals, hotels, malls, sports complexes, offices, and more. Animates lifts, escalators, and other moving objects." },
            { title: "Industrial Walkthroughs", desc: "Realistic 3D flythroughs for industrial plants or building complexes including specific processes." },
            { title: "3D Virtual Art Galleries", desc: "Showcase art to clients worldwide with immersive 3D virtual galleries." },
            { title: "Furniture Animation", desc: "High-quality walkthroughs for office furniture including chairs, desks, tables, cabinets, and more." },
            { title: "Game Development & Animation", desc: "Low or high poly models for AR/VR game development and animation needs." },
            { title: "Virtual Room Design Services", desc: "Interiors and exteriors with realistic lighting, textures, reflections, landscapes, and environmental details." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">3D Walkthrough Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li><strong>Project Initiation:</strong> Share project specifications via mail or other communication channels.</li>
          <li><strong>Requirement Analysis & Communication Strategy</strong></li>
          <li><strong>Project Execution:</strong> Resource and milestone planning, sample approval, changes incorporation, draft walkthrough creation (Play Blast).</li>
          <li><strong>Quality Control:</strong> Thorough quality checks, bug fixing if any.</li>
          <li><strong>Final Delivery:</strong> Delivery via secured portal and project signoff.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity for 3D Walkthroughs?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Advanced 3D Animation Software: AutoCAD, Maya, Maxon, 3DMax and custom-built solutions.",
            "Versatile Team: Engineers, graphic designers, technical analysts, and data entry experts for high-quality walkthroughs.",
            "Competent Infrastructure & Security: Mac/Windows PCs, high-resolution monitors, VPN & FTP for fast and secure file transfer.",
            "Domain Experience: Over 20 years serving developers, architects, and realtors with 3D architectural rendering, modeling, and visualization.",
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Nimble Acuity for 3D Architectural Walkthroughs</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get cost-effective, accurate, and immersive 3D architectural walkthrough services globally. Contact us today to bring your designs to life!
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ArchitecturalWalkthrough;
