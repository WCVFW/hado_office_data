import React from "react";
import { FaShoppingCart, FaBullhorn, FaChartLine, FaCheckCircle } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const ProductDescriptionServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Product Description Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity crafts compelling product and service descriptions that boost sales, enhance visibility, and connect with your customers effectively.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Product Description Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaShoppingCart />, title: "Boost Sales", desc: "Create evocative product and service descriptions that encourage purchase decisions." },
            { icon: <FaBullhorn />, title: "Market Your Products", desc: "Clearly communicate benefits and features for online and offline promotion." },
            { icon: <FaChartLine />, title: "Stand Out in Market", desc: "Strategically position products to capture attention in a crowded marketplace." },
            { icon: <FaCheckCircle />, title: "Clear & Simple Language", desc: "Descriptions highlight unique selling points and provide all necessary info to the customer." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-green-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Scope Product Marketing Strategy: Discuss product positioning and strategy with client.",
              "Engage in Competitive Research: Conduct market research to understand positioning.",
              "Outline Product Description Brief: Finalize brief and research inputs with client.",
              "Define Timelines, Costs, Team and SLA: Allocate writers and project managers.",
              "Initiate Product Description Project: Create descriptions ready for marketing.",
              "Language and Quality Check: Ensure accuracy of facts, figures, and context.",
              "Upload Documents: Deliver final content in the client-required format.",
            ].map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <span className="text-green-600 font-bold text-xl">{idx + 1}.</span>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Better branding with latest marketing techniques.",
            "Help product or service stand out in the market.",
            "Attract more potential consumers with clear presentation.",
            "Higher conversion ratio due to accurate product communication.",
            "Backed by skilled marketers, writers, and SEO experts.",
            "Save costs of setting up an in-house team.",
            "Ensure content is reader-friendly and search engine optimized.",
            "Diverse backgrounds of writers ensure specialized content.",
            "Interactive collaboration with clients to understand products.",
            "Relevant and original content for digital and offline platforms.",
          ].map((benefit, idx) => (
            <div key={idx} className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-gray-900">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started with Nimble Product Description Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Let our expert writers create compelling product and service descriptions that increase sales and improve brand visibility.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ProductDescriptionServices;
