import React from "react";
import ESmainmenu from "../ESmainmenu";

const MillworkDraftingServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Millwork Drafting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get immediate access to precise millwork drafting services from knowledgeable engineers for even the most complex projects.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Shop drawings and 3D modeling enable fabricators and millwork companies to visualize their work more clearly. 
          We provide millwork plans so that custom cabinets, casework, doors, and other wood goods can be created and installed precisely and on schedule.
        </p>
        <p>
          Our millwork detailing team has a wealth of modeling and woodwork detailing skills. They are knowledgeable in millwork design and manufacturing processes 
          as well as automated machining techniques. We offer top-notch millwork drafting services that can assist you in creating 3D constructible models from your 
          architectural design requirements. We offer our clients quick, accurate, and dependable CAD services and shop drawings thanks to our many years of experience.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Architectural Millwork Shop Drawings Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Custom Millwork Elevation Drawings",
              desc: "We work closely with clients to understand precise needs before creating accurate millwork elevation drawings."
            },
            {
              title: "AutoCAD Millwork Shop Drawings",
              desc: "Our experts meticulously review your architectural ideas to create precise millwork drawings using AutoCAD."
            },
            {
              title: "Architectural Drawings",
              desc: "We create plans, sections, elevations, fixtures, and details with focus on materials, safety, and design."
            },
            {
              title: "Store Fixtures",
              desc: "We provide 3D isometric & exploded views, including designs of walls, panels, shelves, floors, and sections."
            },
            {
              title: "Parametric Products",
              desc: "Using Revit, we model parametric views of millwork products to meet client requirements."
            },
            {
              title: "Optimizing In-house Placement",
              desc: "We help optimize visualization of space and lighting arrangements for constructors and interior designers."
            }
          ].map((service, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Millwork Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Other Millwork Services</h2>
        <p className="text-center mb-6">
          We provide a range of additional architectural millwork drawings that cover drafting for:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          {[
            "Custom Cabinets","Professional Offices","Reception Desks","Schools and Universities","Store Fixtures and Displays",
            "Libraries","Architectural Woodwork","Medical Facilities","High-end Residential Projects","Wall Paneling",
            "Restaurants and Hotels","Doors and Frames","Banks"
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Our Millwork Drafting Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              step: "01. Project Initiation",
              details: ["Mail or share your project details", "Requirement Analysis", "Communication Strategy"]
            },
            {
              step: "02. Project Execution",
              details: ["Resource & Milestone Planning", "Sample approval", "Change incorporation", "Draft creation"]
            },
            {
              step: "03. Quality Control",
              details: ["Thorough quality checks", "Bug fixing, if any"]
            },
            {
              step: "04. Final Delivery",
              details: ["Delivery using a secured portal", "Signoff"]
            }
          ].map((phase, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="font-semibold mb-3">{phase.step}</h3>
              <ul className="list-disc ml-4 text-sm space-y-1">
                {phase.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Are We The Preferred Millwork Drafting Services Company?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {title: "Expert Resources", desc: "Engineers and specialists use modern tools and technology for top-quality results."},
            {title: "High-quality Services", desc: "We guarantee the highest quality drawings with premium accuracy."},
            {title: "World-class Infrastructure", desc: "All our engineers work with cutting-edge infrastructure and amenities."},
            {title: "Cost-effective Pricing", desc: "Competitive pricing ensures maximum value for your investment."}
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-sm">
          {[
            "Mechanical Engineering Services",
            "Civil Engineering Services",
            "Structural Engineering Services",
            "Electrical Engineering Services",
            "Infrastructure Engineering Services",
            "BIM Services"
          ].map((srv, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition">
              {srv}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Customer Success Stories</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Custom Casework and Countertop Designs to a Chicago-based Manufacturer
            </h3>
            <p>
              Our engineers provided bespoke casework and countertop designs to a Chicago-based casework manufacturer at affordable rates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Furniture Modeling Services to a Belgium-based Interior Design House
            </h3>
            <p>
              We delivered furniture modeling services to a reputed Belgium-based interior design house. 
              The project was a success and pleased the client.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Testimonials</h2>
        <blockquote className="bg-white p-6 rounded-2xl shadow italic text-gray-700">
          “They have met all our deadlines and exceeded our expectations in quality. 
          We consider them a valuable part of our team.”
        </blockquote>
        <p className="mt-4 text-right font-semibold">— Spokesperson, Oil exploration company in the US</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Millwork Drafting Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          We are a leading provider of millwork drafting services as well as a comprehensive range of other architectural engineering services to global clients. 
          With our services, you can achieve quicker time to market and receive the highest quality drafting services.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get Started with Nimble Acuity
        </button>
      </section>
    </div>
  );
};

export default MillworkDraftingServices;
