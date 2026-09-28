import React from "react";
import ESmainmenu from "../ESmainmenu";

const MicroStationServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          MicroStation Drafting and Modeling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          We offer exceptional drafting and modeling services to architects and engineers at just <span className="font-semibold">$15/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity leverages MicroStation software to deliver expert design and drafting solutions across multiple technical fields, including AutoCAD services, 3D modeling, and engineering drawing conversions. Our in-house CAD experts complement your team to meet all design and project requirements.
        </p>
      </section>

      {/* MicroStation Drafting and Modeling Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">MicroStation Drafting and Modeling Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Drafting", desc: "Detailed drawing packages including material info, BOM, and version control." },
            { title: "3D Modeling", desc: "Develop full 3D models with functional and parametric components." },
            { title: "Hypermodels", desc: "Annotate 3D models or assemblies to show full range of motion and utility." },
            { title: "Realistic Renderings", desc: "Create photorealistic renderings using Luxology and MicroStation libraries." },
            { title: "Incorporate Geospatial Information", desc: "Aggregate data from GPS and web mapping servers into geospatial PDFs." },
            { title: "Integrate Raster Imagery", desc: "Include air and satellite imagery, including Google Earth, for realistic projects." },
            { title: "Standard Design Formats", desc: "Import and export all standard CAD formats." },
            { title: "I-Models", desc: "Provide project-specific communication and collaboration workflows." },
            { title: "Review Tools", desc: "Digitally mark projects to streamline the review process." },
            { title: "Configuration Management", desc: "Track and manage changes at the part and assembly level." },
            { title: "Integrate Point Clouds", desc: "Visualize and measure point cloud data to accelerate modeling." },
            { title: "Generating Intelligent Documents", desc: "Create high-quality reports, 2D/3D PDFs, and models synced with your 3D designs." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
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
            "Point Cloud Services",
            "3D Architectural Walkthroughs",
            "Building Information Modeling",
            "3D Rendering & Walkthrough Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-blue-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble for MicroStation Drafting and Modeling Services?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Smooth Execution:</strong> Receive seamless execution for all your drafting and modeling projects.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Different File Formats:</strong> Export/import formats including PDF, Rhino, ACIS SAT, IGES, STEP, STL, OBJ, SketchUp, and more.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Highly Skilled Team:</strong> Professional experts trained in MicroStation to deliver high-quality solutions.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Revit MEP Services to UK-based Engineering Consultants</h3>
            <p>Nimble delivered the project with all services performed as per the SLA, meeting expectations of a UK engineering firm.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">AutoCAD Conversion Services for US Interior Design Company</h3>
            <p>Nimble efficiently converted 2D designs, earning praise for dedication and fast turnaround time.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “We consider them a valuable part of our team.”
          <footer className="mt-4 font-semibold">— Spokesperson, Oil Exploration Company, US</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble MicroStation Drafting and Modeling Services</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity is your trusted partner for cost-effective, world-class MicroStation drafting and modeling services. Contact us for expert solutions.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MicroStationServices;
