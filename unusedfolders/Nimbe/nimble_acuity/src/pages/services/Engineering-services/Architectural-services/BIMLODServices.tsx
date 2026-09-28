import React from "react";
import ESmainmenu from "../ESmainmenu";

export default function BIMLODServices() {
  const lodServices = [
    {
      title: "LOD 100 - Concept Design",
      desc: "Lays the groundwork using 3D models symbolizing basic elements with area, height, volume, location, and orientation. Visualizes project scope for detailed design phases.",
    },
    {
      title: "LOD 200 - General Modeling with Schematic Design",
      desc: "Defines elements with approximate quantities, size, shape, location, and orientation. Attaches non-geometric information for early conflict detection and cost estimation.",
    },
    {
      title: "LOD 300 - Accurate Modeling and Detailed Design",
      desc: "Graphically depicts each element as a specific system or assembly with precise quantity, size, shape, location, and orientation. Enhances coordination and accurate cost estimation.",
    },
    {
      title: "LOD 350 - Greater Detail and Construction Documentation",
      desc: "Includes model detail showing interaction of building elements and systems. Provides graphic and written definitions for efficient on-site management.",
    },
    {
      title: "LOD 400 - Fabrication & Assembly",
      desc: "Models elements as assemblies with fabrication and assembly details. Affixes non-geometric information to facilitate on-site implementation and reduce errors.",
    },
    {
      title: "LOD 500 - As-Built Modeling",
      desc: "Represents constructed assemblies for maintenance and operations. Includes non-geometric information for future reference, renovation planning, and building management.",
    },
  ];

  const additionalServices = [
    "Architectural BIM Services",
    "Structural BIM Services",
    "Electrical BIM Services",
    "Mechanical BIM Services",
    "BIM Coordinated Services",
    "MEP BIM Services",
  ];

  const clientStories = [
    {
      title: "Revit MEP Services to UK-based Engineering Consultants",
      desc: "Delivered the project as per SLA for a UK-based engineering consultant.",
    },
    {
      title: "AutoCAD Conversion Services for US Interior Design Company",
      desc: "Provided AutoCAD conversion services with high precision and quick TAT. Client praised our dedication.",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-12 md:py-20 px-4 md:px-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Nimble BIM Level of Development (LOD) Services
        </h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto">
          Leverage our BIM LOD services for precise project execution, enhanced communication, and efficient construction management.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Our Building Information Modeling services provide a comprehensive solution for the construction industry. The Level of Development system enhances 3D models, fosters cross-disciplinary communication, enables swift design reviews, accurate quantity calculations, and seamless project handovers. Integration with cost estimation and scheduling ensures comprehensive project management.
        </p>
      </section>

      {/* LOD Services Section */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          BIM LOD Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lodServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-green-700 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm md:text-base flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-12 px-4 md:px-16 bg-gray-50 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Additional Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm md:text-base">
          {additionalServices.map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">{service}</div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Client Success Stories</h2>
        {clientStories.map((story, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-green-700">{story.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{story.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly adapt to our procedures.
        </p>
        <p className="text-gray-500 italic text-sm md:text-base">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-16 text-center">
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Ensure accurate, clash-free, and coordinated 3D BIM models for your construction projects by choosing Nimble Acuity. Our expert team will help you manage your project efficiently across all LOD stages.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white text-base md:text-lg px-6 py-3 rounded-xl transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
