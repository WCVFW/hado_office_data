import React from "react";
import CSmainmenu from "../CSmainmenu";

const WebPageLayoutDesign: React.FC = () => {
  return (
    <div>    <CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Web Page Layout Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Create stunning and appealing web pages by choosing our world-class web page layout design at prices starting at $10/hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Your website is often the first impression clients or customers have of your brand. Nimble Auity ensures your web pages are visually appealing, functional, and optimized for engagement, helping you drive better ROI.
      </p>

      {/* Our Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Web Page Wireframe Designing:</strong> Customized and responsive wireframes that outline your website’s skeleton.</li>
        <li><strong>Page Mockup:</strong> Visual mockups to demonstrate navigation, feel, and design features before development.</li>
        <li><strong>Existing Web Page Audit & Redesign Services:</strong> Performance and design evaluation against KPIs like speed, navigation, and SERP ranking.</li>
        <li><strong>Web Page Graphic Design Services:</strong> UI/UX graphic design for visually appealing, brand-aligned web page layouts.</li>
        <li><strong>Microsite Page Design:</strong> Specialized landing pages or microsites to boost SERP ranking and generate leads.</li>
        <li><strong>On-page SEO Services:</strong> Optimized design and content to improve organic traffic and search rankings.</li>
      </ul>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Corporate Design Services</li>
        <li>Annual Report Design</li>
        <li>Logo Design Services</li>
        <li>Newsletter Design Services</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble for Web Page Layout Design?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Competitive Pricing:</strong> Flexible solutions tailored to your budget.</li>
        <li><strong>Mobile-first Design:</strong> Fully responsive designs across desktop, tablet, and mobile devices.</li>
        <li><strong>First-time-right Approach:</strong> Careful requirement analysis before execution ensures minimal revisions.</li>
        <li><strong>Passionate Team:</strong> Skilled developers and designers committed to delivering high-quality results.</li>
        <li><strong>Data Security:</strong> Strict compliance with security protocols to protect your data.</li>
        <li><strong>24/7 Assistance:</strong> Global presence ensures round-the-clock support.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Provided 50 Illustrations a Day to a US-based Client:</strong> Cost-effective, high-quality illustration services.</li>
        <li><strong>Nimble Provided Illustrations for a Denmark-based Writer:</strong> Creative solutions for a children's fantasy book project.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
        <br />
        <span className="font-semibold">— CEO, Technology Company, UK</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Our Experts Today
        </a>
      </div>
</div>
    </div>
  );
};

export default WebPageLayoutDesign;
