import React from "react";
import ESmainmenu from "../ESmainmenu";

const EnergyModelingServices = () => {
  const services = [
    "HVAC Plant and Controls",
    "Dynamic Thermal and Bulk Airflow",
    "Solar Shading",
    "Day and Artificial Lighting",
    "Computational Fluid Dynamics (CFD)",
  ];

  const additionalServices = [
    "Electrical Engineering Services",
    "Mechanical Engineering Services",
    "Architectural Services",
    "Civil Engineering Services",
  ];

  const benefits = [
    "Affordable Pricing Solutions",
    "High-quality ISO-certified Services",
    "World-Class Infrastructure",
    "Data Security",
    "Quick Turnaround Times",
    "Skilled Professionals",
    "Dedicated Project Manager",
    "Scalability",
    "Round the Clock Customer Support",
  ];

  const successStories = [
    {
      title: "Piping and Instrumentation Design & Schematic Drawings for a Plant Engineering Project",
      description: "Nimble created high-quality piping and instrumentation drawings for a plant engineering project at affordable rates.",
    },
    {
      title: "Converted Legacy 2D Mechanical Engineering Drawings to 3D for a US-based Engineering Firm",
      description: "Over 1,600 legacy 2D mechanical engineering drawings were converted to 3D at cost-effective rates.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Energy Modeling Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Enable the transition toward sustainable energy sources with our expert energy modeling services at prices starting at $9/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity is a professional ISO-certified energy modeling service provider with over 26+ years of experience. Our team helps clients optimize energy efficiency, reduce costs, and streamline project execution through advanced energy modeling solutions. We partner with organizations globally to provide reliable, accurate, and scalable solutions for all project types.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Energy Modeling Services We Offer
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          {additionalServices.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{service}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Why Choose Nimble for Energy Modeling?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-gray-700">
          {successStories.map((story, index) => (
            <div key={index}>
              <h3 className="font-semibold text-blue-700">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-800 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for Energy Modeling
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Work with the leading professionals in energy modeling. Nimble Acuity provides cost-effective, accurate, and high-quality services for sustainable and efficient building designs.
        </p>
        <a href="#contact" className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default EnergyModelingServices;
