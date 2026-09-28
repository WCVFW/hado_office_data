import React from "react";
import { FaFileAlt, FaBriefcase, FaFileContract, FaUsers, FaChartLine, FaPenFancy } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const BusinessWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Business Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity delivers persuasive, information-rich business content to help you stay ahead in the competitive global market.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Why Nimble Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Nimble Business Writing?</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-disc list-inside text-gray-800">
          {[
            "Specialized business writers create compelling content for your company.",
            "Lower operational costs by outsourcing only when needed.",
            "Focus on core business while we handle your content.",
            "Captivating business articles on website or brochure to attract customers.",
          ].map((point, idx) => (
            <li key={idx} className="hover:text-blue-600 transition">{point}</li>
          ))}
        </ul>
      </div>

      {/* Services Offered Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Business Writing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaFileAlt />, title: "Company Newsletters & Periodicals" },
              { icon: <FaFileContract />, title: "Press Releases & Reports" },
              { icon: <FaBriefcase />, title: "Business Blogs & White Papers" },
              { icon: <FaUsers />, title: "Case Studies & Executive Summaries" },
              { icon: <FaChartLine />, title: "Market Analysis & Research" },
              { icon: <FaPenFancy />, title: "Business Proposals & E-books" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
                <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Writing Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Business Writing Process</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-800">
          {[
            "Gather and organize material after extensive research.",
            "Write articles clearly and concisely for the target audience.",
            "Proofread and edit to ensure high-quality content.",
            "Deliver completed business articles ahead of schedule.",
          ].map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <span className="text-blue-600 font-bold text-xl">{idx + 1}.</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Areas of Expertise Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Areas of Expertise</h2>
          <p className="text-gray-800 max-w-4xl mx-auto text-center">
            Nimble writers have extensive experience in technology, outsourcing, management, globalization, internet economy, business execution, communication, and media. We deliver specialized business content that strengthens your corporate image.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">The Nimble Advantage</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 list-disc list-inside">
          {[
            "Large network of talented business writers with cross-domain experience.",
            "Writers keep up-to-date with latest international market trends.",
            "Stringent quality control ensures error-free content.",
            "Capability to handle any type of business content.",
            "High security, privacy, and confidentiality standards.",
            "Strict adherence to deadlines and early delivery.",
            "Affordable and flexible service options.",
          ].map((benefit, idx) => (
            <li key={idx} className="hover:text-blue-600 transition">{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Outsource Your Business Writing to Nimble</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Let Nimble Auity help you deliver high-quality, engaging, and persuasive business content that enhances your corporate image and drives results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default BusinessWritingServices;
