import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalDrafting = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical 2D Drafting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We design technical drawings for electrical systems, wiring installations, 
          and safety validations at rates starting at just{" "}
          <span className="font-semibold">$9/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Looking for an electrical 2D drafting services provider to provide professional 
          designs for power distribution layout and individual systems? Nimble Acuity is India’s 
          leading electrical 2D drafting service provider with expertise in SmartDraw, AutoCAD, 
          ProDesign, and MicroStation.
        </p>
        <p>
          Nimble has 26+ years of experience in 2D drafting services. Outsourcing electrical 
          2D systems design is a proven way for engineering companies to save time and money. 
          If you want professional drafting services that are quality-tested and affordable, 
          partner with Nimble for electrical 2D drafting services.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Electrical 2D Systems Design and Drafting Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Electrical Site Design",
            "Electrical Panel Schedules",
            "Full Power Distribution Layout Design",
            "Security System Wiring Diagrams",
            "Termination Diagrams",
            "Lighting System Wiring Diagrams",
            "Wiring Diagrams",
            "Control Circuit Diagrams",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Electrical Site Design" &&
                  "Comprehensive layout drawings with labeled parts, ready to be moved on-site."}
                {service === "Electrical Panel Schedules" &&
                  "Designs and drafts of panel schedules, metering, switchboards, and load-rated devices."}
                {service === "Full Power Distribution Layout Design" &&
                  "Comprehensive blueprints with component locations, wiring diagrams, and interfacing designs."}
                {service === "Security System Wiring Diagrams" &&
                  "Reliable drafts for fire protection, networking, and communication pathways."}
                {service === "Termination Diagrams" &&
                  "Accurate wiring terminal drawings using CAD software for efficient designs."}
                {service === "Lighting System Wiring Diagrams" &&
                  "Lighting diagrams with fixture positions and high-voltage cabling layouts."}
                {service === "Wiring Diagrams" &&
                  "Complete technical diagrams and floor plans for accurate electrical positioning."}
                {service === "Control Circuit Diagrams" &&
                  "Designs for power modules that integrate with machinery and components."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Electrical 2D Drafting Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>Quality control with stringent design checks</li>
            <li>Affordable, customizable drafting services</li>
            <li>ISO 9001:2015 compliant & international standards</li>
            <li>100% data security with ISO/IEC 27001:2022</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Quick turnaround with agile delivery</li>
            <li>Scalable services for growing businesses</li>
            <li>Expertise in CAD/CAM/CAE software like AutoCAD, MicroStation, SolidWorks</li>
            <li>Round-the-clock global support</li>
          </ul>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Areas We Specialize In
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto list-disc list-inside text-lg">
          <li>Plant room & utility building equipment layouts</li>
          <li>Schematic drafting for lighting, power & earthing grids</li>
          <li>Equipment foundation drafting</li>
          <li>Residential, commercial & institutional buildings</li>
          <li>Sports field lighting</li>
          <li>Data centers</li>
          <li>Detention security systems</li>
          <li>Backup generators & UPS systems</li>
          <li>Auxiliary electrical systems</li>
        </ul>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Software We Use
        </h2>
        <p className="text-center max-w-4xl mx-auto">
          HVAC/Electrical design tools like EliteWrightsoft, VBA programming in AutoCAD/SolidWorks, 
          Visual Lisp programming, and automation with Excel/macros/programming.
        </p>
      </section>

      {/* Other Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-100 rounded-xl shadow">Electrical Instrumentation Services</div>
          <div className="p-4 bg-gray-100 rounded-xl shadow">Electrical Design & Layout</div>
          <div className="p-4 bg-gray-100 rounded-xl shadow">PCB Layout & Design Services</div>
          <div className="p-4 bg-gray-100 rounded-xl shadow">Electrical Systems Design</div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              Construction Drawings for a Top Manufacturing Firm
            </h3>
            <p>
              Nimble created accurate 3D models for lighting solutions for land and maritime use, 
              delivering cost-effective services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">
              3D Drafting for a Canadian Power Tower Manufacturer
            </h3>
            <p>
              Nimble provided quick turnaround 3D modification and drafting services 
              for a Canadian client, ensuring reliability and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="italic max-w-3xl mx-auto">
          “The commitment and focus of Nimble’s managers and engineers were excellent 
          and surpassed our expectations.”
        </p>
        <p className="mt-2">– SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Electrical 2D Drafting Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is a leading provider of electrical 2D drafting services. 
          With the latest technology and skilled experts, we deliver success 
          at an affordable cost. Contact us today to get started!
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ElectricalDrafting;
