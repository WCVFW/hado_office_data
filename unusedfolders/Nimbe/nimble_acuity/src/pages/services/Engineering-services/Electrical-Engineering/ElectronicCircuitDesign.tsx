import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectronicCircuitDesign = () => {
  const services = [
    "Customized Electronics Design Services",
    "Embedded Systems Design Services",
    "PCB (Printed Circuit Board) Design Services",
    "Comprehensive Electronic Product Design",
    "Electronic Manufacturing Services (EMS)",
    "Reverse Engineering Services",
    "Digital Circuit Design Services",
    "Analog Circuit Design Services",
    "Wireless Circuitry Design Services",
    "Performing Circuit Simulations",
  ];

  const additionalServices = [
    "Electrical Instrumentation Services",
    "Electrical Design & Layout",
    "PCB Layout & Design Services",
    "Electrical Systems Design",
  ];

  const benefits = [
    "Affordable Pricing Options",
    "High-quality Services (ISO 9001:2015-certified)",
    "Superb Infrastructure",
    "Structured Process",
    "Latest Tools and Technologies",
    "Experienced Team with 26+ years of experience",
    "Data Security (GDPR-compliant)",
    "Short Turnaround",
  ];

  const successStories = [
    {
      title: "Construction Drawings for a Top Manufacturing Firm",
      description: "We utilized PTC Creo 4.0 to create high-quality 3D models of new manufacturing components, ensuring zero manufacturing errors.",
    },
    {
      title: "MEP Services to an Award-winning Design Firm",
      description: "Provided quick and cost-effective MEP services to a leading US-based design firm and converted electrical SLD layouts to AutoCAD layouts.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electronic Circuit Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Choose our high-quality electronic circuit design services at affordable prices starting at $9/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-5 md:px-20">
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity is a leading electronic circuit design service provider. We work closely with clients to understand exact requirements and provide custom solutions for digital circuits, analog circuits, PCB designs, embedded systems, and much more. Our team leverages decades of experience to deliver cost-effective, robust, and high-quality services worldwide.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Electronic Circuit Design Services We Offer
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
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 text-gray-700">
          {additionalServices.map((service, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">{service}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Why Choose Nimble for Electronic Circuit Design?
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
          Partner with Nimble Acuity for Electronic Circuit Design
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Nimble Acuity is your professional, reliable, and cost-effective electronic circuit design partner. Leverage our expertise, advanced tools, and experienced engineering team to achieve top-quality circuit designs.
        </p>
        <a href="#contact" className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectronicCircuitDesign;
