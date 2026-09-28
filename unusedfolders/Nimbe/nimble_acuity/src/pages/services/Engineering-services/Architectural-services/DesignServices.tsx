import React from "react";
import ESmainmenu from "../ESmainmenu";

const DesignServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section: Architectural Schematic Design */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Architectural Schematic Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Convert your project plans into physical drawings with Nimble Acuity's schematic design services, starting at <span className="font-semibold">$12/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble provides skilled engineers to cater to all schematic design needs using the latest tools and technologies for accurate and high-quality service delivery.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Architectural Schematic Design Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Building Elevation Design", desc: "Accurate and error-free draft views of the exterior and interior elevations of buildings." },
            { title: "Floor Plan Design", desc: "Detailed drafted floor plans including equipment, dimensions, furnishings, and construction details." },
            { title: "Site Plan Design", desc: "Comprehensive draft views of the project site with walkways, roads, utilities, landscaping, etc." },
            { title: "HVAC Designing", desc: "Superior-quality heating, ventilation, and air conditioning designs tailored to project needs." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{service.title}</h3>
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
            "3D Architectural Walkthroughs",
            "Retail Visual Merchandising Services",
            "Landscape Design and Drafting Services",
            "Building Information Modeling",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Pricing Packages",
            "World-class Infrastructure",
            "Error-free Services",
            "Information Security",
            "Dedicated Manager",
            "Highly Scalable Services",
            "Experienced Architectural Engineers",
            "Short Turnaround Time",
            "24/7 Support",
          ].map((item, idx) => (
            <li key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">MTO Detailing Services for US-based Scaffolding Giant</h3>
            <p>Delivered cost-effective schematic design and detailing services tailored to client requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Piping Instrumentation Indexes for US-based Client</h3>
            <p>Provided high-quality services for piping instrumentation indexes with accuracy and efficiency.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Hire Nimble Acuity for Architectural Schematic Design</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity offers expert architectural schematic design services with cost-effective solutions and a quick turnaround time. Contact us today!
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* Civil 3D Modeling Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700">Civil 3D Modeling, Drafting, and Rendering Services</h2>
        <p className="text-center max-w-4xl mx-auto text-lg text-gray-700 mb-12">
          Reduce lead time, rectify errors, and improve design efficiency with Nimble Acuity's Civil 3D CAD drafting and rendering services.
        </p>

        {/* 3D Modeling Services */}
        <h3 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Civil 3D Modeling Services We Offer</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "3D Furniture Modeling Services",
            "3D Product Modeling Services",
            "3D Revit Modeling Services",
            "AutoCAD 3D Modeling Services",
            "AutoCAD 3D Solid Modeling Services",
            "SolidWorks 3D Modeling Services",
            "Parametric 3D Modeling Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{service}</p>
            </div>
          ))}
        </div>

        {/* Civil 3D Rendering Services */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-indigo-600 text-center">Civil 3D Rendering Services We Offer</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "3D Furniture Rendering Services",
            "3D Product Rendering Services",
            "3D Interior Rendering Services",
            "Photorealistic 3D Rendering Services",
            "Commercial 3D Rendering Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="font-semibold text-indigo-600">{service}</p>
            </div>
          ))}
        </div>

        {/* Civil 3D Drafting */}
        <h3 className="text-2xl font-bold mt-12 mb-6 text-indigo-600 text-center">Civil 3D Drafting Services We Offer</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="font-semibold text-indigo-600">3D CAD Drafting Services</p>
            <p className="text-gray-700 mt-2">
              Create high-quality functional and virtual prototypes of 3D objects adhering to top-notch accuracy standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignServices;
