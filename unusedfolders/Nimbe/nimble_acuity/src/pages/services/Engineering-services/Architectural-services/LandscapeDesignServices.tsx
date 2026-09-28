import React from "react";
import ESmainmenu from "../ESmainmenu";

const LandscapeDesignServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Landscape Design & Drafting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helps you create powerful marketing and sales tools by presenting your project in context with landscape and interior design.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Turn your concepts into 2D and 3D designs with Nimble Acuity. We convert your landscape and interior designs into high-quality CAD drawings, 3D models, interactive panoramas, and QTVR files for immersive visualization.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Master Planning", desc: "Comprehensive planning to visualize and optimize landscape and interior spaces." },
            { title: "Site Planning & Design", desc: "Efficient layout and detailed design for functional and aesthetic impact." },
            { title: "Site Analysis & Evaluation", desc: "Thorough assessment of site conditions for informed design decisions." },
            { title: "Project Management", desc: "End-to-end oversight for timely and accurate project execution." },
            { title: "Cost Estimation", desc: "Accurate estimation to keep projects within budget." },
            { title: "2D Drafting & Detailing", desc: "Convert preliminary sketches, PDFs, or tiffs into DWG, DXF, DGN or CAD formats." },
            { title: "3D Modeling & Rendering", desc: "High-quality 3D models, sectional views, and photo-hybrid fusion to visualize your project realistically." },
            { title: "QTVR Virtual Panoramas", desc: "Interactive panoramas from multiple perspectives for immersive visualization." },
            { title: "3D Walkthrough Animations", desc: "Dynamic animations to experience the project before construction begins." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Advanced Software Technology We Use</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>2D Drafting: AutoCAD, ArchiCAD, ADT, MicroStation, STAAD</li>
          <li>3D Modeling: SolidWorks, SolidEdge, Pro/E, and other CAD software</li>
          <li>Rendering & Visualization: Photoshop and similar software for shade, textures, and photorealistic effects</li>
        </ul>
      </section>

      {/* Expert Team */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expert Team</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Our graphic artists and interior & landscape designers are experts in state-of-the-art software to deliver 3D models, animations, and renderings. All members are graduate engineers with extensive experience, ensuring that the landscape design output meets your requirements and can be modified anytime during the process.
        </p>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity for Landscape Drafting Services?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "High-quality services at cost-effective pricing.",
            "State-of-the-art infrastructure and cutting-edge technology.",
            "26+ years of experience in landscape and interior drafting.",
            "Optimize design performance with CAD/CAE expertise.",
            "Shorten product lifecycle and improve project quality.",
            "Flexible and scalable services to meet project demands.",
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Outsource Your Landscape Drafting Services Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Fill out our inquiry form and Nimble Acuity’s Client Engagement Team will get in touch with you within 24 hours.
        </p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LandscapeDesignServices;
