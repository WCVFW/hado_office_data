import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalSystemsDesign = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Systems Design & Drafting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Convert your electrical system plans into precise computer-based drafts with expert electrical engineers.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Electrical Systems Design Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Electrical Schematics",
            "Electrical, Power and Lighting Plans",
            "Electrical Site Plans",
            "Electrical One-Line Diagrams (Riser Diagrams)",
            "Electrical Panel Schedules & Distribution Panels",
            "Electrical Wiring Diagrams",
            "Cable / Harness Drawings",
            "Ladder Logic Drawings",
            "Architectural Floor Plans, House & Wall Sections, Elevations & Details",
            "Structural Foundation, Framing & Roofing Plans"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Quality & Standards</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nimble Acuity follows stringent quality control measures ensuring accuracy and compliance with architectural/engineering standards and BOMA/IFMA standards.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>ASHRAE (HVAC)</li>
          <li>AS (Mechanical)</li>
          <li>IBC (Civil)</li>
          <li>ACCA (HVAC)</li>
          <li>UBC (Civil)</li>
          <li>NFPA / Equivalent Codes & Standards</li>
        </ul>
      </section>

      {/* Design Process */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Electrical Systems Design Process</h2>
        <p className="text-gray-700 mb-4">
          Our process-oriented approach ensures consistency and quality in all electrical systems designs:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Input validation checks</li>
          <li>In-process quality checks</li>
          <li>Project leader supervision</li>
          <li>Independent reviewer checks</li>
          <li>Project manager oversight across multiple projects</li>
          <li>6 Sigma & Quality Systems trained personnel</li>
          <li>Defect tracking & customer satisfaction surveys</li>
        </ul>
      </section>

      {/* Components & Services */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Components of Electrical Drafting & Design</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Electrical Power Distribution",
            "Motor Control Center (MCC) Drawings",
            "Transformers, Breakers, Starters Design & Layout",
            "HV/LV Switchgear & Switchboard Schedules",
            "Earthing & Lightning Protection Systems",
            "Industrial Process Control Lighting & Illumination Systems",
            "Fire Protection System Layouts & Alarm/Smoke Detection",
            "Communication Systems Schematics (Public Address, Intercom, In-Plant Communication)"
          ].map((component, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600">{component}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Software */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Software & Technical Expertise</h2>
        <p className="text-gray-700 mb-4">
          Nimble Acuity leverages the latest CAD / CAE / CAM tools for accurate design and drafting:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Autodesk Products: AutoCAD, ADT, Revit</li>
          <li>Bentley Products: MicroStation</li>
          <li>SolidWorks, ESRI Products, MapInfo, ProE</li>
          <li>VBA & Visual Lisp Programming for Automation</li>
          <li>Excel / Macros / Programming for Efficiency</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Electrical Systems Design?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for expert electrical systems design & drafting solutions, ensuring high quality, accuracy, and compliance.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectricalSystemsDesign;
