import React from "react";
import ESmainmenu from "../ESmainmenu";

const PHEDesignServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Public Health Engineering (PHE) Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          High-quality, reliable, cost-effective, and time-bound PHE design services for residential, commercial, and industrial projects.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Nimble Acuity for PHE Design?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          With over two decades of engineering support experience, Nimble Acuity provides customized PHE design solutions including system analysis, construction drawings, and implementation for both new and renovation projects of any scope or complexity.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our ISO-certified, client-centric approach ensures accurate, sustainable, and cost-saving designs for plumbing, drainage, sewage treatment, rainwater harvesting, and more.
        </p>
      </section>

      {/* PHE Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our PHE Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Plumbing System Sizing",
            "Plumbing Fixtures and Fit-out Selection",
            "STP (Sewage Treatment Plant) Sizing & Design",
            "Water Supply Systems – Storage, Treatment & Distribution",
            "Sewerage & Effluent Treatment Plant Systems",
            "Rainwater Harvesting – Collection, Reuse & Recharge",
            "Solid Waste Management – Composters & Biogas Plant",
            "Water Distribution, Drainage, Stormwater Management for Large Campuses",
            "Water Leak Detection & Rodent Repellent Systems",
            "Technical Specifications, BOQ, CAD & BIM Drawings",
            "Hydro-pneumatic, Gravity & Hybrid Water Distribution Systems",
            "Pumping Automation for Project Requirements",
            "Hot Water Generation Systems – Solar, Electric, Diesel",
            "Fire Detection & Life Safety Design",
            "BIM / Revit - 3D MEP Design"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Partner with Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Accurate Designs with Latest Software:</strong> AutoCAD, ArchiCAD, ADT, MicroStation, STAAD; 2D & 3D drawings in DWG/DGN.</li>
          <li><strong>Qualified Engineers:</strong> Six Sigma-certified, experienced in ISO/FDA standards, reverse engineering, and prototype creation.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Cutting-edge technology, secure data transfer, and ISO-compliant infrastructure.</li>
          <li><strong>Compliance:</strong> Adherence to ASHRAE, AS, IBC, ACCA, UBC, AIA, BOMA, and IFMA standards.</li>
        </ul>
      </section>

      {/* MEP Services Section */}
      <section className="py-16 px-5 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our MEP Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "AutoCAD MEP Design",
            "Mechanical Design",
            "Electrical Design",
            "Plumbing Design",
            "MEP Drafting Drawings",
            "MEP Engineering Design",
            "MEP Modeling Services",
            "HVAC Duct Design",
            "3D Modeling Services",
            "Energy Analysis & Modeling",
            "Value Engineering",
            "Sustainable Design",
            "Testing & Inspection Plans"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your PHE Design Projects?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for expert Public Health Engineering (PHE) design and MEP solutions. Ensure compliance, sustainability, and cost savings for your projects.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default PHEDesignServices;
