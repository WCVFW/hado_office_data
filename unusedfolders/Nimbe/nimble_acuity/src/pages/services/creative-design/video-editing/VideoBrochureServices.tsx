import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoBrochureServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Brochure Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Capture attention instantly with engaging video brochures that combine your marketing message with high-quality visuals.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Video brochures are compact, cost-effective, and emailable marketing tools that help you cut down print production costs while making a lasting impression on your target audience. Nimble Auity offers professional video brochure creation and editing services to help your products or services stand out.
        </p>
        <p>
          Combine your marketing message with top-quality video content for presentations, product launches, or recruitment campaigns, keeping viewers engaged and informed.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-10">
        <h2 className="text-2xl font-semibold mb-4">Video Brochure Services We Offer</h2>

        {/* Product Launch */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Video Brochures for Product Launch</h3>
          <p>
            Highlight the vivid details of your products or services to grab undivided attention from prospects and ensure a successful launch.
          </p>
        </div>

        {/* Marketing & Exhibition */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Marketing and Exhibition Video Brochures</h3>
          <p>
            Promote your brand effectively at exhibitions and marketing events. Our brochures are attractive, editable, and designed to convey your message clearly.
          </p>
        </div>

        {/* Recruitment */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Recruitment Video Brochures</h3>
          <p>
            Help recruitment agencies market themselves better with engaging and informative recruitment brochures that get noticed.
          </p>
        </div>

        {/* Video Presentation Boxes */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Video Presentation Boxes for a Personal Touch</h3>
          <p>
            Express gratitude to customers and create long-lasting impressions through multi-sensory experiences that blend video with your promotional campaigns.
          </p>
        </div>

        {/* Creative & Technical Brochures */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Creative and Technical Brochures</h3>
          <p>
            Choose between creative brochures that captivate your audience or technical brochures that clearly explain product features and functionalities.
          </p>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">How Video Brochures Add Value to Your Business</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Expedite buying decisions by 72% compared to plain print brochures.</li>
          <li>Boost comprehension and retention up to 50%.</li>
          <li>Engage customers with stories 75% prefer over printed brochures.</li>
          <li>Provide effective audio-visual marketing communication.</li>
          <li>Easy post-production editing for updates or new product info.</li>
          <li>Innovative tool to acquire new customers and prospects.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Proficient Resources:</strong> Talented staff ensure maximum quality at minimal cost.</li>
          <li><strong>ISO Compliance:</strong> Adherence to strict quality standards for top-notch end products.</li>
          <li><strong>Superior Infrastructure:</strong> Robust infrastructure and backup teams handle workload efficiently.</li>
          <li><strong>Uncompromised Data Security:</strong> Safeguard your project data at every step to prevent unauthorized access or loss.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Captivate Your Audience with Professional Video Brochure Creation</h2>
        <p className="mb-6">
          With Nimble Auity's team of dedicated brochure creation professionals, design highly impactful video brochures with faster turnaround times, scalable solutions, and professional results.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default VideoBrochureServices;
