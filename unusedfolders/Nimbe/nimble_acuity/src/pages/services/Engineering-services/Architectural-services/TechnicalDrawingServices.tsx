import React from "react";
import ESmainmenu from "../ESmainmenu";

const TechnicalDrawingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Technical Drawing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Experience speed and precision in every design with our professional technical drawing services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity offers specialized technical drawing services for construction, manufacturing, aerospace, civil, commercial, residential, and industrial projects. Our expert CAD technicians and drafters deliver scalable, accurate, and high-quality drawings tailored to your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Drawing & Drafting Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "As-built Drawings", desc: "Precise drawings for modifications or renovations using advanced CAD technology." },
            { title: "Technical Illustrations", desc: "Visualize complex engineering concepts with detailed illustrations." },
            { title: "Prototype Drawings", desc: "Create exact prototypes using CAD/CAM technology for faster product development." },
            { title: "Isometric Drawings", desc: "Accurate 3D views of your project using AutoCAD and SketchUp." },
            { title: "2D CAD Technical Drawings", desc: "Detailed, error-free 2D CAD drawings for efficient project execution." },
            { title: "Shop Drawings Services", desc: "Project-specific detailed shop drawings using Revit and AutoCAD." },
            { title: "GA Drawings", desc: "Comprehensive General Arrangement drawings for project overview and decisions." },
            { title: "Fabrication Drawings", desc: "Precise mechanical and fabrication drawings using AutoCAD and SolidWorks." },
            { title: "Assembly Drawings", desc: "Detailed assembly instructions using CATIA and Creo." },
            { title: "Architectural Drawings", desc: "Clear architectural plans with Revit and ArchiCAD for effective planning." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Drawing Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li>Discuss requirements and challenges with the client.</li>
          <li>Develop a detailed plan and get client approval.</li>
          <li>Assign project to capable teams and commence work.</li>
          <li>Create technical drawings per plan and perform quality checks.</li>
          <li>Compile reports and deliver final drawings for client review.</li>
        </ol>
      </section>

      {/* Disciplines Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Engineering Disciplines We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Aerospace - precise component drawings for safety and efficiency.",
            "Civil - accurate planning for construction and offshore projects.",
            "Commercial, Residential, Industrial - ensure error-free project execution.",
            "Manufacturing - streamline production and maintain quality.",
            "Parking Structures - optimize space and vehicle flow.",
            "Automotive - precise design for assembly and safety standards.",
            "Shipbuilding - accurate design for efficient construction and maintenance.",
            "Energy, Process, Plant - regulatory compliance and workflow optimization.",
            "Glass - correct measurements for installation efficiency.",
            "Millwork - accurate designs and error-free installations."
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity for Technical Drawing Services?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "High-quality Services: Delivering projects meeting international standards.",
            "Affordable Services: Competitive rates without compromising quality.",
            "Superb Infrastructure: Latest CAD, Revit, SolidWorks, AutoCAD tools.",
            "ISO Certified: ISO 9001:2015 certified technical drawing services.",
            "100% Security: ISO/IEC 27001:2015 compliant data protection.",
            "Quick Turnaround Time: Timely delivery across global projects.",
            "Scalable Services: Expandable teams for priority projects.",
            "Professional FTE: Skilled experts using latest tools.",
            "Round-the-clock Support: Phone and email support anytime."
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Collaborate with Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Elevate your technical drawings with precision and efficiency. Contact us today to streamline your design process.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default TechnicalDrawingServices;
