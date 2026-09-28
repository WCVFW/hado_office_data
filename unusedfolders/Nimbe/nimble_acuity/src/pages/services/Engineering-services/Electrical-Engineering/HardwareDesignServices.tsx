import React from "react";
import ESmainmenu from "../ESmainmenu";

const HardwareDesignServices = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Hardware Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Flawless hardware designs delivered by Nimble Acuity's expert electrical engineers, starting at just $9/hour.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Nimble Acuity?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Struggling to get accurate and reliable hardware designs? Nimble provides high-quality electrical and electronics engineering services tailored to your needs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With over 26+ years of global experience, our engineers leverage cutting-edge tools to deliver accurate, scalable, and cost-effective hardware design solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Our Hardware Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Embedded Hardware Design",
              description: "Accurate and flawless embedded hardware design for multi-core and multi-processor requirements."
            },
            {
              title: "Power-optimized Hardware Designs",
              description: "Designs optimized for power efficiency and battery-operated devices using the latest tools."
            },
            {
              title: "Wireless Hardware Designs",
              description: "Accurate hardware designs for wireless devices leveraging modern software and design tools."
            },
            {
              title: "Ruggedization Services",
              description: "Ensure your hardware is reliable and rugged to withstand extreme environmental conditions."
            },
            {
              title: "System-on-Modules Design",
              description: "Complete system-on-module designs for electronics projects with top-quality deliverables."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Electrical Instrumentation Services",
            "Electrical Design & Layout",
            "Electrical Systems Design",
            "PCB Layout & Design Services"
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-xl font-semibold text-teal-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Why Partner with Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing Options:</strong> Highly cost-effective hardware design services tailored to your budget.</li>
          <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified ensuring your data is safe and confidential.</li>
          <li><strong>High-Quality Services:</strong> Multi-level quality assurance for error-free hardware design delivery.</li>
          <li><strong>World-class Infrastructure:</strong> Latest design tools, software, and international-standard office spaces.</li>
          <li><strong>Experienced Designers:</strong> Skilled engineers trained in latest hardware tools to meet all your requirements.</li>
          <li><strong>Dedicated Manager:</strong> Single point of contact for all project needs and queries.</li>
          <li><strong>Highly Scalable Services:</strong> Ramp up resources as per project requirements easily.</li>
          <li><strong>Customer Support:</strong> Round-the-clock support from sales, marketing, and project management teams.</li>
          <li><strong>Short Turnaround Time:</strong> Global delivery centers ensure rapid project delivery across time zones.</li>
        </ul>
      </section>

      {/* Client Success Section */}
      <section className="bg-gray-50 py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "MTO Detailing Services for a US-based Scaffolding Giant", description: "Cost-effective MTO detailing from GFC drawings with high accuracy." },
            { title: "Piping Instrumentation Indexes for a US-based Client", description: "Achieved 99.9% accuracy while saving 50% in costs." }
          ].map((story, index) => (
            <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Get Top-Notch Hardware Designs?
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Partner with Nimble Acuity for precise, scalable, and innovative hardware design services tailored to your needs.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HardwareDesignServices;
