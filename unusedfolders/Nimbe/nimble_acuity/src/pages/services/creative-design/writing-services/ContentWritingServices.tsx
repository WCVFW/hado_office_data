import React from "react";
import CSmainmenu from "../CSmainmenu";

const ContentWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Content Writing Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Nimble Auity offers high-quality content writing and content development services at affordable rates, delivered with a quick turnaround. We create content for websites, brochures, white papers, newsletters, press releases, emails, and more, combining in-depth research with creative storytelling.
        </p>
      </div>

      {/* Customized Services */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Customized Services to Match Your Needs</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside">
          <li>SEO Content Writing Services</li>
          <li>Summary and Review Writing Services</li>
          <li>Article Writing Services</li>
          <li>Product/Service Description Writing Services</li>
          <li>Blog Writing Services</li>
          <li>Business Writing Services</li>
          <li>Academic Writing Services</li>
          <li>Speech Writing Services</li>
          <li>Medical Writing Services</li>
          <li>Legal Writing Services</li>
          <li>Travel Writing Services</li>
        </ul>
      </div>

      {/* Writers Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">The Writers at Nimble Auity</h2>
          <p className="mb-4">
            Our versatile writers have impressive academic records and are matched to your content requirements. Whether it is medical writing, technical summaries, or creative storytelling, our team includes domain experts, writers, and editors to ensure high-quality content delivery.
          </p>
        </div>
      </div>

      {/* Working Style & Payment */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Working Style and Payment Options</h2>
        <p className="mb-4">
          Nimble can assign a writer, assistant writer, or editor to work on an ongoing or project basis. Payment can be monthly, per article, or per word, depending on research and skill requirements. A detailed quote is provided after understanding your needs.
        </p>
      </div>

      {/* Why Nimble Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Why Nimble Content Writing?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Lower-cost research with dedicated teams for writing and editing.</li>
            <li>Quick content development by a skilled creative team.</li>
            <li>Top-quality documentation with writers having PhDs, MDs, MBAs, etc.</li>
            <li>Diverse talent network with varying writing styles and insights.</li>
            <li>Fluent writing in English and multiple international languages.</li>
            <li>International experience for creating diverse content suitable for multiple industries.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Outsource Your Content Writing Needs to Nimble</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Is poor content affecting your website or marketing materials? Nimble’s talented writers can transform your content to engage readers, increase traffic, and convert prospects. We craft content for websites, brochures, flyers, and other marketing collaterals aligned with your brand and goals.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContentWritingServices;
