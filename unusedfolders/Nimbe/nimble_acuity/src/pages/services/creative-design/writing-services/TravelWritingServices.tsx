import React from "react";
import { FaPlane, FaMapMarkedAlt, FaPenFancy, FaGlobe } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const TravelWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Travel Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Professional, insightful, and engaging travel content by Nimble Auity. Help your travel portal, agency, or website stand out with captivating and informative content.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-teal-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Service Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Travel Writing Services</h2>
        <p className="text-gray-700 text-lg mb-6">
          Travel enthusiasts and businesses rely on Nimble for compelling and accurate travel content. Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Promotional writing that is information-heavy</li>
          <li>Travel blog-writing with a lighter, first-person perspective</li>
          <li>Travelogue writing that balances information and entertainment</li>
          <li>Travel brochure and web writing in an advertorial style</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Nimble’s team of professional travel writers have extensive travel experience within India and abroad. They know exactly what information travelers need and how to present it in an engaging way—from hidden bargain streets in Bangkok to the best eateries in Naples.
        </p>
      </div>

      {/* Approach Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Travel writing is much more than being creative or eloquent. Information is key. We craft content based on what travelers want to read, ensuring a perfect balance between informative and entertaining. Our content engages readers and keeps them coming back to your portal or website.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nimble writers can adopt a friendly, conversational tone or a professional promotional style, based on your requirements. They understand what works, what doesn’t, and how to create content that delivers results.
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble for Travel Writing Excellence</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Stop spending hours creating travel content. Let Nimble Auity deliver high-quality travel writing that engages, informs, and inspires your audience.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default TravelWritingServices;
