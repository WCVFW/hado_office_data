import React from "react";
import ESmainmenu from "../ESmainmenu";

const Architectural3DServices: React.FC = () => {
  const services = [
    "3D Furniture Modeling Services",
    "3D Furniture Rendering Services",
    "3D Product Modeling Services",
    "3D Product Rendering Services",
    "3D Revit Modeling Services",
    "AutoCAD 3D Modeling Services",
    "AutoCAD 3D Solid Modeling Services",
    "SolidWorks 3D Modeling Services",
    "Parametric 3D Modeling Services",
    "3D Interior Rendering Services",
    "Photorealistic 3D Rendering Services",
    "Commercial 3D Rendering Services",
    "3D CAD Drafting Services",
  ];

  const software = [
    "3DS Max",
    "AutoCAD",
    "V Ray",
    "Maya",
    "SketchUP",
    "Rhinoceros",
    "Cinema 4D",
    "Adobe Photoshop",
    "Adobe Flash",
    "Adobe Premiere",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Architectural 3D Modeling, Drafting, and Rendering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity provides accurate 3D architectural modeling, drafting, and rendering services to streamline communication and bring your projects to life.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed">
        <p>
          To impress customers or stakeholders, architects, interior designers, real estate managers, and manufacturers require expert 3D architectural modeling, drafting, rendering, animation, and walkthrough services. Nimble Acuity offers over 26+ years of experience delivering detailed exterior/interior designs with interactive photorealistic 3D features.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">3D Architectural Modeling Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{service}</h3>
              <p className="text-gray-600">
                {/* Optional description could be added here if needed */}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our 3D Architectural Rendering Services Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          {[
            "Scoping Work – Define scope of work, ensure complete details are available",
            "Effort & Pricing – Indication of time, resources, and pricing",
            "Project Assignment – Project manager sets up the team and resources",
            "Establish Concept – Receive drawings, understand concepts",
            "Concept Design – Pre-visualize model and provide design inputs",
            "Create 3D Model – Turn 2D drawings into detailed 3D models",
            "Texturing & Lighting – Add texture, color, and light properties",
            "Concept Drafts Shared – Share outputs and gather feedback",
            "Final Edits – Implement client feedback and quality checks",
            "Final Render – Generate realistic 3D models",
            "Final Delivery – Share finalized 3D models using client's preferred method",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Software Used */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Software We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {software.map((soft, idx) => (
            <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              {soft}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          <li><strong>Reduced Overhead Costs:</strong> Competitive pricing for maximum ROI.</li>
          <li><strong>Access to Trained Engineers:</strong> Skilled engineers for top-notch solutions.</li>
          <li><strong>Best-in-class Technology:</strong> Latest software and 3D tools leveraged.</li>
          <li><strong>Fast Turnaround Time:</strong> Projects completed efficiently within deadlines.</li>
          <li><strong>Scalable Services:</strong> Easily scale resources for larger projects.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          <li>Mechanical Engineering Services</li>
          <li>Civil Engineering Services</li>
          <li>Structural Engineering Services</li>
          <li>Electrical Engineering Services</li>
          <li>Infrastructure Engineering Services</li>
          <li>BIM Services</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Success Stories</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <strong>3D Design and Rendering Services for a Boston-based AI Firm:</strong> Provided cost-effective services with high-quality 3D models and renderings.
          </div>
          <div>
            <strong>Photorealistic Rendering Services for an Engineering Firm:</strong> Delivered accurate, photorealistic 3D models within tight timelines.
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Visualize Your Project Before It’s Built</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity's 3D architectural modeling, drafting, and rendering services help optimize the construction lifecycle, streamline communication, and ensure accurate visualization for your stakeholders.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Architectural3DServices;
