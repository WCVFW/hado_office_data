import React from "react";
import { FaMicrophone, FaUsers, FaLightbulb, FaClock, FaFileSignature } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const SpeechWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Speech Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity provides expert speech writing services for corporates, keynote speakers, and executives. We craft impactful, well-researched, and audience-tailored speeches.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-purple-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* What We Do For You */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Do For You</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-800">
          {[
            { icon: <FaMicrophone />, title: "Keynote & Business Speeches" },
            { icon: <FaUsers />, title: "Audience-tailored Content" },
            { icon: <FaLightbulb />, title: "Creative Speech Crafting" },
            { icon: <FaFileSignature />, title: "Press Releases & Project Proposals" },
            { icon: <FaClock />, title: "On-time Draft Delivery" },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-pink-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Nimble Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Choose Nimble Speech Writing Services?</h2>
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 list-disc list-inside text-gray-800">
          {[
            "Experienced speech writers who are communication experts.",
            "Extensive research on speech topics to ensure relevance.",
            "Audience-specific speech crafted to meet their expectations.",
            "Clear, simple, and elegant content for smooth delivery.",
            "Creative treatment and personal style alignment.",
            "Politically correct and well-thought-out content.",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* The Nimble Advantage */}
      <div className="bg-purple-600 text-white py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">The Nimble Advantage</h2>
        <div className="max-w-5xl mx-auto text-center text-lg space-y-4">
          <p>Huge cost savings compared to in-house writing.</p>
          <p>Fast and prompt delivery of speeches.</p>
          <p>Free trial services to showcase our quality.</p>
          <p>Confidentiality and security assured.</p>
          <p>Flexible pricing per word or per copy depending on volume.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started with Nimble Speech Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Contact Nimble Auity to get impactful, well-researched, and professionally crafted speeches tailored for your audience. Our team will get in touch within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default SpeechWritingServices;
