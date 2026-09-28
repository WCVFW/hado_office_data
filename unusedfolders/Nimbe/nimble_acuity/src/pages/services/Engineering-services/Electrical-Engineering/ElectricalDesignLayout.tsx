import React from "react";
import ESmainmenu from "../ESmainmenu";

const ElectricalDesignLayout = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-teal-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Electrical Design & Layout Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Delivering precise, safe, and high-quality electrical design and layout solutions for residential, industrial, and commercial projects.
        </p>
      </section>

      {/* Designing Capabilities */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">
          Our Designing Capabilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Electrical design and layout solutions in India and overseas for industrial, commercial, and public buildings</li>
          <li>Interior electrical design</li>
          <li>Electrical schematic design</li>
          <li>Electrical conduit design services</li>
          <li>Electrical wiring</li>
          <li>Testing of heavy industrial equipment</li>
          <li>Design, engineering and installation of electrical projects</li>
          <li>Electrical lighting design services (including internal)</li>
          <li>All types of industrial and commercial electrical services</li>
          <li>Repairs and maintenance programs</li>
          <li>Energy conservation solutions</li>
        </ul>
      </section>

      {/* Quality Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
          Quality of Our Electrical Designs & Layouts
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Nimble, our goal is to ensure zero defects in electrical designs and layouts. Our team of experienced electrical engineers, state-of-the-art infrastructure, and latest software help us cater to all designing requirements with perfection. We also provide eco-friendly and reliable energy solutions across industries.
        </p>
      </section>

      {/* 5 Step Process */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
          5-Step Electrical Design & Layout Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { step: "1", title: "Project Analysis", description: "Detailed client discussion to understand current electrical systems and future goals." },
            { step: "2", title: "Requirement Gathering", description: "Meetings and presentations to gather relevant project details." },
            { step: "3", title: "Design & Implementation", description: "Tailor-made solutions without compromising simplicity of layout designs." },
            { step: "4", title: "Support & Maintenance", description: "Customized preventative maintenance programs." },
            { step: "5", title: "Latest Upgrades", description: "Upgrades to electrical equipment for effective and efficient functioning." },
          ].map((item) => (
            <div key={item.step} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="text-teal-600 text-3xl font-bold mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Excellence Section */}
      <section className="py-16 px-5 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
          Safety & Operational Excellence
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Nimble ensures all necessary steps are employed to maintain a safe working environment. Using modern equipment, rigid quality control, and expert electrical design professionals, we deliver solutions that provide high customer satisfaction, add value, and maintain consistent quality.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-900 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble for Expert Electrical Design & Layout
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          Get in touch with Nimble Acuity today to avail professional, efficient, and high-quality electrical design and layout services.
        </p>
        <a href="#contact" className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-teal-700 transition duration-300">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ElectricalDesignLayout;
