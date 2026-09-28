import React from "react";
import ESmainmenu from "../ESmainmenu";

const Civil3DServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Civil 3D Modeling, Drafting & Rendering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Reduce lead time, rectify errors, and improve design efficiency with our 3D modeling and rendering solutions. Prices start at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity helps civil engineers and architects communicate design intentions, reduce errors, and generate photorealistic visualizations. Our 3D CAD drafting and AutoCAD civil 3D rendering services enable easy review, fast iterations, and high-quality presentations.
        </p>
      </section>

      {/* 3D Modeling Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Civil 3D Modeling Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "3D Furniture Modeling Services", desc: "Expert 360° furniture models for flawless design presentations." },
            { title: "3D Product Modeling Services", desc: "Mock-ups, photorealistic models, and illustrations for global clients." },
            { title: "3D Revit Modeling Services", desc: "Explore detailed architectural designs with immersive 3D Revit models." },
            { title: "AutoCAD 3D Modeling Services", desc: "Automate redrawing, visualize projects, and document efficiently." },
            { title: "AutoCAD 3D Solid Modeling Services", desc: "Geometrically accurate simulations of objects for lifelike representations." },
            { title: "SolidWorks 3D Modeling Services", desc: "Comprehensive mechanical system and product design models." },
            { title: "Parametric 3D Modeling Services", desc: "CSG and BR models with finite element methods for precise volume control." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Rendering Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Civil 3D Rendering Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "3D Furniture Rendering Services", desc: "High-definition, photorealistic furniture designs for marketing and client presentations." },
            { title: "3D Product Rendering Services", desc: "Convert product images into stunning 3D models, walkthroughs, and animations." },
            { title: "3D Interior Rendering Services", desc: "Visualize textures and design aesthetics with realistic 3D interior renderings." },
            { title: "Photorealistic 3D Rendering Services", desc: "Immaculate renderings for products and interiors, enabling quick design iterations." },
            { title: "Commercial 3D Rendering Services", desc: "AutoCAD civil 3D surface renderings for global clients with realistic visuals." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAD Drafting Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Civil 3D Drafting Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">3D CAD Drafting Services</h3>
            <p>Create high-quality functional and virtual prototypes of 3D objects with top-notch accuracy standards.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Immaculate Workflow & Quality Assurance:</strong> Streamlined processes and robust checks ensure high-end solutions.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Project Management:</strong> Regular assessments to ensure outcomes meet international quality standards.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Cutting-edge Tools & Software:</strong> Leverage latest CAD, AutoCAD, Revit, and SolidWorks tools for accurate, efficient projects.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Global Delivery Centers:</strong> Multi-locational outsourcing for strategic advantages and timely deliveries.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Flexible Pricing:</strong> Competitive rates, pay only for what you leverage based on project complexity.
          </li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Structural Design and Drafting Services",
            "Rebar Detailing Services",
            "3D Architectural Visualization Services",
            "Structural Shop Drawings Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-blue-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              2D to 3D Conversion of Mechanical Legacy Drawings
            </h3>
            <p>
              Converted 1600 2D legacy drawings into 3D for a US engineering firm at affordable rates within six months.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Reverse Engineering of Machine Parts
            </h3>
            <p>
              Created five parametric 3D models per month ensuring 1nm hole positioning accuracy for precision manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “Our assigned account representative was extremely versed in engineering drawings and architectural services, making communication effortless.”
          <footer className="mt-4 font-semibold">— President, Construction Company, US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Optimize Your ROI with Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Streamline workflows, improve visualization, and reduce costs with our Civil 3D modeling, drafting, and rendering services.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Our Engineers
        </button>
      </section>
    </div>
  );
};

export default Civil3DServices;
