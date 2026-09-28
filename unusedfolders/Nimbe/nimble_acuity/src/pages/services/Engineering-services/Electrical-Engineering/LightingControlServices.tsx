import React from "react";
import ESmainmenu from "../ESmainmenu";

const LightingControlServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Lighting Control and Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Intelligent network-based solutions and flawless lighting designs at affordable prices starting at just $9/hour.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Nimble Acuity?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Looking for intelligent lighting solutions and skilled electrical engineers? Nimble Acuity delivers error-free lighting control designs, using the latest tools and technologies for reliable, scalable services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From intelligent lighting system integration to custom automation and compliance with standards, we ensure your lighting systems are optimized for efficiency, safety, and performance.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Lighting Control and Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Intelligent Lighting System Design", description: "Integration with other systems, inputs & outputs communication, and optimized network-based lighting solutions." },
            { title: "Lighting Control Customization", description: "Tailor-made lighting automation services to meet your business-specific requirements with fast turnaround." },
            { title: "Lighting Control Compliance Services", description: "Ensure compliance with latest standards like astronomical scheduling, task tuning, egress control, occupancy/vacancy control, and daylight harvesting." },
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Other Electrical Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Electrical Design & Layout",
            "Electrical Instrumentation Services",
            "PCB Layout & Design Services",
            "Electrical Systems Design"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Partner with Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing Packages:</strong> Cost-effective solutions to meet your budget.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Access to latest lighting control tools and workspace facilities.</li>
          <li><strong>High-quality Services:</strong> ISO-certified organization ensures error-free solutions.</li>
          <li><strong>Quick Turnaround:</strong> Global delivery centers enable rapid service across time zones.</li>
        </ul>
      </section>

      {/* Client Success Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Revit MEP Services for a UK Client", description: "Delivered top-quality services with fast turnaround to a leading UK-based client." },
            { title: "Revit Modeling for a Swiss Architectural Firm", description: "Cost-effective Revit modeling services delivered promptly to a Swiss architectural client." }
          ].map((story, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Lighting Systems?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for intelligent lighting control and design services. Achieve efficient, compliant, and reliable lighting solutions.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default LightingControlServices;
