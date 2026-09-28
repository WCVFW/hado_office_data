import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalGroundingServices = () => {
  const services = [
    "Initial Site Investigation for Design Planning",
    "Data Collection and Site Testing Services",
    "Testing Existing Grounding Systems",
    "Grounding Data Analysis",
    "Detailed Earthing Design Services",
    "Equipment and Material Planning",
    "Existing System Design Alteration Services",
  ];

  const processSteps = [
    "Site Analysis",
    "Data Collection and Analysis",
    "Preparation of the First Draft",
    "Testing and Changes",
    "Final Design Development",
    "Design Submission",
  ];

  const benefits = [
    "Budget-friendly Designs",
    "Experienced Team at Work",
    "Top-notch System Design Solutions",
    "On-time Project Completion",
    "Flexible Service Fees",
    "Data Security",
  ];

  const successStories = [
    {
      title: "Construction Drawings for Manufacturing Firm",
      description: "Nimble provided accurate and timely construction drawings using PTC Creo 4.0, ensuring zero manufacturing errors.",
    },
    {
      title: "MEP Services to an Award-winning Design Firm",
      description: "Nimble provided accurate and cost-effective MEP services and updated SLD layouts to AutoCAD for a US-based client.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Grounding System Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get reliable and secure electrical grounding system design services at affordable rates starting at $9/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Grounding is one of the most critical components of modern electrical systems. Nimble Acuity provides custom, client- and site-specific electrical grounding system designs that are safe, compliant, and high-functioning. Using specialized software and in-depth site analysis, our experts ensure machinery and personnel safety while minimizing risks from electrical surges.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Our Electrical Grounding System Design Services
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Our 6-Step Electrical Grounding System Design Process
        </h2>
        <ul className="list-decimal list-inside space-y-3 text-gray-700">
          {processSteps.map((step, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{step}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Why Hire Nimble for Electrical Grounding System Design
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-gray-700">
          {successStories.map((story, index) => (
            <div key={index}>
              <h3 className="font-semibold text-green-700">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-green-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for Electrical Grounding Design
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Work with leading electrical engineering professionals to ensure safe, compliant, and high-performing grounding systems.
        </p>
        <a href="#contact" className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectricalGroundingServices;
