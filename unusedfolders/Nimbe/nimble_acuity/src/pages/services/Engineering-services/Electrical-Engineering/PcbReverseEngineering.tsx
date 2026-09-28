import React from "react";
import ESmainmenu from "../ESmainmenu";

const PcbReverseEngineering = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble PCB Reverse Engineering Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get access to high-quality and accurate PCB reverse engineering services 
          to replicate and enhance the effectiveness of your designs or products, 
          at prices starting at just <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Are you looking for help to analyze existing designs or products to replicate 
          the behavior or functionality because the original design documents are missing 
          or the original manufacturing options are not available? 
          Nimble can help you overcome these challenges with skilled engineers and proven methodologies.
        </p>
        <p>
          With Nimble’s PCB reverse engineering solutions, we use advanced technology to scan photos, 
          artwork, or circuit boards to generate CAD data. Our approach is not only cost-effective 
          but also enhances performance by replacing obsolete components with readily available, 
          improved alternatives.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          PCB Reverse Engineering Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto list-disc list-inside text-lg">
          <li>Assigning reference designations to unmarked parts</li>
          <li>Creating a component-level BOM</li>
          <li>Designing and identifying PCB components and their relationships</li>
          <li>Placing components, connectors, switches, LEDs, etc.</li>
          <li>Installing mechanical mounting holes & board cuts</li>
          <li>Creating datasheets, architecture info & application notes</li>
          <li>Generating netlists & schematic drawings</li>
          <li>Redesigning old products with no circuit diagrams</li>
          <li>Ensuring WEEE/RoHS compliance</li>
          <li>Migrating existing systems to new technologies</li>
          <li>Improving operations, support, and maintenance</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-xl shadow">Electrical Instrumentation Services</div>
          <div className="p-4 bg-white rounded-xl shadow">Electrical Design & Layout</div>
          <div className="p-4 bg-white rounded-xl shadow">PCB Layout & Design Services</div>
          <div className="p-4 bg-white rounded-xl shadow">Electrical Systems Design</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble for PCB Reverse Engineering?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Affordable pricing options with flexible plans</li>
            <li>ISO-certified and international quality standards</li>
            <li>Meticulously structured engineering process</li>
            <li>World-class infrastructure and facilities</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Latest tools and technologies for reverse engineering</li>
            <li>26+ years of engineering experience</li>
            <li>100% data security and GDPR compliance</li>
            <li>On-time delivery with quick turnaround</li>
          </ul>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Manufacturing Firm Construction Drawings
            </h3>
            <p>
              Nimble provided accurate and timely construction drawings using PTC Creo 4.0, 
              ensuring zero manufacturing errors for a leading firm.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Award-winning Design Firm MEP Services
            </h3>
            <p>
              Nimble delivered quick and cost-effective MEP services and converted 
              electrical SLD layouts to AutoCAD layouts for a US-based design firm.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="italic max-w-3xl mx-auto">
          “They have been able to learn our procedures quicker than I ever thought possible.”
        </p>
        <p className="mt-2">– General Partner, Manufacturing Company (US)</p>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble PCB Reverse Engineering Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble is a pioneering PCB reverse engineering firm helping clients recreate 
          the functionality of obsolete boards when design documents are missing or 
          manufacturing options are unavailable. Contact us today to learn more.
        </p>
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PcbReverseEngineering;
