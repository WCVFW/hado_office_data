import React from "react";
import ESmainmenu from "../ESmainmenu";

const ControlSystemServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Control System Engineering Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Access optimal performance and efficient control systems with Nimble Acuity’s expert engineers, starting at just $9/hour.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Nimble Acuity?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Need highly skilled control system engineers for designing, developing, and optimizing control systems? Nimble Acuity delivers precise, customized solutions using the latest tools and technologies.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our certified engineers provide assembly line tooling, PLC and vision system design, HMI designing, and sensor system designing to meet your exact requirements.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Control System Engineering Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Assembly Line Tooling", description: "Expert assembly line tooling services leveraging latest control system tools to optimize efficiency." },
            { title: "PLC and Vision System Design", description: "High-quality PLC and vision system designs using motor VFD applications tailored to client needs." },
            { title: "HMI Designing", description: "Human-machine interface designs customized to suit your business requirements perfectly." },
            { title: "Sensor System Designing", description: "Intricate and accurate sensor systems using thermocouples, pressure transducers, encoders, resolvers, and more." }
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
            "Electrical Instrumentation Services",
            "Electrical Design & Layout",
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
          <li><strong>Flexible Pricing Options:</strong> Affordable solutions tailored to your budget.</li>
          <li><strong>Superior Quality Services:</strong> ISO-certified services that are precise and error-free.</li>
          <li><strong>World-class Infrastructure:</strong> Access to cutting-edge tools, technologies, and office facilities.</li>
          <li><strong>Global Delivery Centers:</strong> Quick turnaround across different time zones.</li>
          <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified for complete data safety.</li>
          <li><strong>Dedicated SPOC:</strong> Single point of contact for all your project needs.</li>
          <li><strong>24/7 Support:</strong> Always available marketing, customer support, and project teams.</li>
          <li><strong>Highly Scalable Services:</strong> Ability to scale team and services as per project requirements.</li>
        </ul>
      </section>

      {/* Client Success Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Construction Drawings for a Top Manufacturing Firm", description: "3D models created with PTC Creo 4.0, ensuring zero manufacturing errors for the client." },
            { title: "MEP Services for an Award-winning Design Firm", description: "Accurate AutoCAD SLD layouts and cost-effective MEP solutions delivered promptly." }
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
          Ready to Optimize Your Control Systems?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for efficient, reliable, and high-performing control system engineering services.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ControlSystemServices;
