import React from "react";
import ESmainmenu from "../ESmainmenu";

const RetailSpaceDesignServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Retail Space Drafting & Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Increase foot traffic, encourage customer engagement, and boost sales with Nimble Acuity's expert retail space drafting and design solutions.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity helps retail store owners and managers optimize store layout, visual merchandising, and overall environment to create spaces that are functional, visually appealing, and conducive to shopping.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Retail Space Design Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Space Planning", desc: "Detailed floor plans optimizing space usage, ensuring smooth traffic flow, and maximizing product visibility." },
            { title: "Interior Design", desc: "Select materials, finishes, colors, and lighting to create a visually appealing environment." },
            { title: "Lighting Design", desc: "Optimal illumination to provide the best customer experience using a variety of lighting components." },
            { title: "Fixture Design", desc: "Custom-designed fixtures and displays to showcase products and engage shoppers." },
            { title: "Visual Merchandising", desc: "Attractive displays to encourage purchases and improve product visibility." },
            { title: "Branding & Signage", desc: "Design signage and graphics that communicate your brand identity effectively." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retail Space Design Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Retail Space Design Process</h2>
        <ol className="list-decimal list-inside space-y-6 text-gray-700 text-lg">
          <li>
            <strong>Project Scope & Plan:</strong> Receive input files, allocate supervisor, brief project team, kickoff meeting, and allocate resources based on deadlines.
          </li>
          <li>
            <strong>Project Execution:</strong> Execute designs using AutoCAD, REVIT, etc., monitor progress, perform QC, implement feedback, and finalize.
          </li>
          <li>
            <strong>Project QC & Delivery:</strong> Review by Project Manager, upload to secure servers, document corrections, and fine-tune QC for future projects.
          </li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "26+ years of global experience delivering precise retail space designs.",
            "Expertise in brand guidelines and building codes across US, UK, APAC, and Europe.",
            "Talented drafters with experience in restaurants, hotels, jewelry stores, banks, supermarkets, and pharmacies.",
            "Scalable services with the bandwidth to meet high-volume requirements.",
            "Up-to-date knowledge of BIM and design software including AutoCAD, REVIT, etc.",
            "Cost-effective solutions delivered quickly without compromising quality.",
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          <li>3D Rendering Services</li>
          <li>Millwork Drafting Services</li>
          <li>Revit Modeling Services</li>
          <li>BIM Services</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <strong>Retail Design & Drafting for $600M Company:</strong> Customized space planning, interior designs, and store refurbishing completed successfully for over 275 projects.
          </div>
          <div>
            <strong>Case Study on Retail Planning for Property Management Company:</strong> Detailed retail and supermarket plans saved the client over £30,000 monthly and led to a long-term contract.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <p className="text-gray-700 text-lg italic">
          "A robust congratulations to the team at Nimble Acuity for a job well done."
        </p>
        <p className="text-gray-500 mt-2">— CMO, Leading Medical Care Company in Seattle, WA</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Outsource Your Retail Space Design Services Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity employs highly qualified designers and engineers to provide end-to-end retail space drafting and design services. From 2D drawings to 3D models and production-ready drawings, we deliver high-quality results efficiently.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RetailSpaceDesignServices;
