import React from "react";
import ESmainmenu from "../ESmainmenu";

const FloorPlan3DServices: React.FC = () => {
  const services = [
    "3D Floor Plan - Top View",
    "Isometric Floor Plan Creation",
    "3D Floor Plan Creation",
  ];

  const otherServices = [
    "Point Cloud Services",
    "3D Architectural Walkthroughs",
    "Building Information Modeling (BIM)",
    "3D Rendering Services",
  ];

  const benefits = [
    "High-quality Services: Ensuring 100% accurate 3D floor plans.",
    "Affordable Services: Customized solutions for any budget.",
    "Superb Infrastructure: Tools include SketchUp, CAD, SOLIDWORKS, ML & AI automation.",
    "ISO Certified Provider: ISO 9001:2015 compliant services.",
    "100% Security: Digitally fortified infrastructure and monitored processes.",
    "Quick Turnaround Time: Timely delivery by scaling resources.",
    "Scalable Services: Delegate tasks to additional team members if needed.",
    "SPOC: Single point of contact for smooth coordination.",
    "Professional FTE: Skilled engineers and project managers with 5–10 years’ experience.",
    "Round-the-clock Support: AI-driven virtual support via phone, email, or chat.",
  ];

  const processSteps = [
    "Engage with clients to understand challenges and define project scope.",
    "Assign 3D floor plan creation to experts meeting required experience criteria.",
    "Supply project information and optimal approach to efficiently tackle challenges.",
    "Analyze 3D floor plans for accuracy and compliance before delivery.",
    "Deliver completed 3D floor plans along with project overview reports.",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          3D Floor Plan Creation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Leave your floor plan creation worries to Nimble Acuity and receive high-quality 3D models at affordable rates starting at just $11/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed">
        <p>
          Are you facing difficulty managing multiple 3D floor plan creation projects? Nimble Acuity is a top provider of 3D floor plan creation services in India. With over a decade of experience, our team simplifies design layouts, sizes, and visualizes furniture, doors, windows, kitchens, and baths in a holistic 3D view.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">3D Floor Plan Creation Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">3D Floor Plan Creation Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble 3D Floor Plan Services?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {otherServices.map((service, idx) => (
            <span key={idx} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <strong>Construction Drawings for a Top Historic Property Management Firm:</strong> Delivered 3D floor plans and construction drawings with 100% success for a top US property management company.
          </div>
          <div>
            <strong>REVIT Modeling Services to Swiss Architectural Firm:</strong> Completed services in record time with 100% client satisfaction.
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get Your Custom 3D Floor Plan Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Delegate your 3D floor plan creation to Nimble and save time, budget, and effort while receiving accurate, high-quality visualizations.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FloorPlan3DServices;
