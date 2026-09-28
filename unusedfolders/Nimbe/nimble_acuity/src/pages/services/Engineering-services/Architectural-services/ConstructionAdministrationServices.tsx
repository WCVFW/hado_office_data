import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionAdministrationServices() {
  const adminSolutions = [
    "Analysis And Reporting",
    "Control and Budgeting",
    "Order Management",
    "Payment and Invoices",
  ];

  const otherServices = [
    "Construction Quality Assurance Services",
    "Construction Scheduling & Tracking Services",
    "Building Information Model",
    "Contractor Support Services",
  ];

  const clientStories = [
    {
      title: "Revit MEP Services to UK-based Engineering Consultants",
      desc: "A UK engineering consultant approached us for Revit MEP services. Nimble delivered the project as per SLA.",
    },
    {
      title: "AutoCAD Conversion Services for Interior Design Company",
      desc: "Provided AutoCAD conversion services to a US-based interior designer, completing the project within a tight TAT.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble Construction Administration Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Reliable construction administration services to oversee every project phase, delivered by qualified experts with 26+ years of experience.
        </p>
        <p className="mt-2 text-sm md:text-base">Hire our experts at just $11/hour</p>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <p className="text-sm md:text-base mb-4">
          Nimble Acuity helps companies plan, manage, and control project costs efficiently. Our construction administration services ensure smooth operations, proper communication among stakeholders, and timely project delivery. We also help clients save up to 40% on costs by managing subcontractors, materials, and labor effectively.
        </p>
      </section>

      {/* Administration Solutions */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Construction Business Administration Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {adminSolutions.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700 text-sm md:text-base">
          {otherServices.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Why Choose Nimble Construction Administration Services?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          <li><strong>Affordable Pricing Options:</strong> Services start at $11/hour without compromising quality.</li>
          <li><strong>Best Infrastructure:</strong> Advanced tools, cloud storage, and high-security backup for seamless delivery.</li>
          <li><strong>Quality Assurance:</strong> ISO-certified multi-stage checks ensure accurate, error-free services.</li>
          <li><strong>Use of Latest Technologies:</strong> AutoCAD, Inventor, SolidWorks, XSteel, 3D Studio Max for high-quality engineering outputs.</li>
          <li><strong>24/7 Availability:</strong> Instant support via phone, SMS, or email.</li>
          <li><strong>Scalable Services:</strong> Quickly adapt to project changes without affecting timelines.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        {clientStories.map((story, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-green-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are exact and attentive to all our needs, quickly learning our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, a Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Simplify your end-to-end construction administration with Nimble Acuity. Our expert team ensures smooth project execution while you focus on core business functions.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
