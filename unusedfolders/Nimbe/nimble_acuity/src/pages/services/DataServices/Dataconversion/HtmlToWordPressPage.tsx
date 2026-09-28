import React from "react";
import DSmainmenu from "../DSmainmenu";

const HtmlToWordPressPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble HTML to WordPress Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Convert your static HTML websites into highly interactive and easily editable WordPress sites that simplify content management and increase scalability.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-blue-600">20%</h3>
          <p>Higher chances of ROI within the first year post-migration</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-blue-600">65%</h3>
          <p>Improved scalability through outsourcing</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
          <p>Enhanced quality with a robust QA process</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Range of HTML to WordPress Conversion Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 shadow rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Open Source Development Services</h3>
            <p>
              Reduce development costs by utilizing our open-source development services. Tailor your website to meet specific business needs and ensure scalability. Implement industry best security practices and protect your website from threats.
            </p>
          </div>
          <div className="bg-gray-50 shadow rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">OpenCart Web Development Services</h3>
            <p>
              Develop robust online stores with our OpenCart web development services. Manage multiple stores from a single interface, and unlock advanced eCommerce features by integrating with WooCommerce.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Tools We Use</h2>
        <p className="mb-2">Pinegrow • Elementor • Artisteer</p>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Disclaimer: The use of the above-mentioned tools is subject to Nimble Acuity's present practices. We do not endorse the use of these tools in any capacity.
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">Custom Software Development Services</h3>
            <p>We craft tailored software solutions aligning with your unique business processes and goals.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">Digital Transformation Services</h3>
            <p>We guide your organization through digital transformation, enhancing productivity and workflows.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">Open Source Software Development</h3>
            <p>Leverage transparent, flexible, and cost-efficient open-source solutions to drive innovation.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">Database Services</h3>
            <p>Secure, manage, and optimize your business data for accessibility and actionable insights.</p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Should You Leverage Our Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Seamless Integration with Enterprise Systems",
            "Tailored Multilingual Support",
            "Optimized Data Architecture",
            "Dynamic Content Management",
            "Superior User Experience (UX) Design",
            "Scalable Infrastructure",
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">{item}</h3>
              <p>
                Detailed explanation of {item.toLowerCase()} and how it benefits your WordPress migration.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">African Automotive Company</h3>
            <p>Received Digital Transformation Services from Nimble Acuity.</p>
          </div>
          <div className="bg-gray-50 shadow rounded-2xl p-6">
            <h3 className="font-semibold text-xl mb-2">Banking Group</h3>
            <p>Nimble Acuity developed an infrastructure for processing and storing data.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic">
          "Working with Nimble Acuity has been a great experience. They quickly learned our line of business, adapted to our requirements, and have consistently performed well. They've also gone above and beyond their duty. They're reliable. A wonderful partner."
        </blockquote>
        <p className="mt-4 font-semibold">Spokesperson, Executive Recruitment Firm in the US</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Give your business a competitive edge with custom WordPress conversion solutions.
        </h2>
        <p className="mb-6">Talk to our experts today!</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HtmlToWordPressPage;