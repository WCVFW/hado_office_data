import React from "react";
import ESmainmenu from "../ESmainmenu";

const EnergyAuditServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Energy Audit Support Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Identify inefficiencies, implement cost-effective measures, and reduce energy expenses to optimize your operations.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Nimble?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Maintaining an in-house team for energy audits can be costly and complex. Nimble Acuity provides expert, scalable energy audit services to save costs, bridge skill gaps, and ensure compliance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our global infrastructure ensures ISO 50001-compliant audits for residential and commercial complexes, helping clients achieve sustainability goals efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Energy Audit Support Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Laser Scan to BIM Services", description: "Convert 3D scans into BIM models, identify energy loss, and propose improvements for sustainability." },
            { title: "Scan to CAD Services", description: "Transform point cloud models into CAD drawings with floor plans and energy audit calculations." },
            { title: "Energy Modeling Services", description: "Optimize MEP, HVAC, and underfloor heating with compliance to international regulations." },
            { title: "3D Laser Scanning Services", description: "Capture accurate building geometry and detect insulation gaps for energy-saving strategies." },
            { title: "HVAC System Design", description: "Design efficient air distribution, air quality management, and integrate renewable energy where feasible." },
            { title: "BIM Energy Modeling", description: "Analyze HVAC systems and layouts to enhance efficiency and optimize equipment." },
            { title: "Thermal Modeling", description: "Analyze insulation, thermal bridging, and seasonal variations to predict energy consumption." },
            { title: "Energy Efficiency Report", description: "Detailed, actionable recommendations compliant with EED and ISO 50001 standards." },
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Our Approach
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Preliminary Discussion:</strong> Complimentary consultation to understand your requirements and methodology.</li>
          <li><strong>Receiving Client Materials:</strong> CAD files or old drawings processed into point cloud models for precise calculations.</li>
          <li><strong>Comprehensive Energy Assessment:</strong> Detailed analysis of insulation, HVAC, appliances, and building envelope.</li>
          <li><strong>In-Depth Report:</strong> Actionable recommendations and energy/cost-saving estimates.</li>
          <li><strong>Customized Action Plan:</strong> Implementation strategy based on cost-effectiveness and budget.</li>
          <li><strong>Sustained Assistance:</strong> Continued guidance to maintain energy efficiency.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Partner with Nimble
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Professional Support", description: "20+ years experience delivering precise, high-quality energy audits." },
            { title: "Detailed Floor Plans", description: "Thorough assessment ensures no inefficiencies are overlooked." },
            { title: "Accurate Modeling & Analysis", description: "Custom simulations tailored to your building’s needs." },
            { title: "Advanced Tools", description: "Leverage AutoCAD, PointCAB, Bluebeam Revu, GeoSLAM Connect for precision." },
            { title: "Streamlined Process", description: "Cost-effective measures prioritized for maximum impact." },
            { title: "24/7 Support", description: "ISO-certified service with timely responses and quick turnaround." },
            { title: "Guaranteed Savings", description: "Reduce operational expenses through actionable recommendations." },
            { title: "Flexible Scalability", description: "Adapt resources to your project’s specific needs." },
            { title: "Data-Driven Insights", description: "Comprehensive understanding of building performance and energy optimization." },
          ].map((benefit, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-3">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Energy Usage?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for expert energy audit support. Reduce costs, improve efficiency, and comply with ISO 50001 standards.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default EnergyAuditServices;
