import React from "react";
import CSmainmenu from "../CSmainmenu";

const TShirtDesign: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-6">
        <CSmainmenu/>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Nimble T-Shirt Design Services
      </h1>

      <p className="text-gray-700 mb-4">
        Get access to a team of highly skilled T-shirt designers and error-free designs by choosing to Nimble your requirements at prices starting at just $10 an hour.
      </p>

      <p className="text-gray-700 mb-6">
        Are you looking for a service provider who can deliver trendy and high-quality T-shirt designs? Nimble Auity is a top T-shirt design service provider with skilled and experienced designers who leverage the latest graphic design software to deliver outstanding results.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">T-Shirt Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Vectorization Services:</strong> Accurate and error-free image vectorization services using the latest design tools.
        </li>
        <li>
          <strong>Digitization Services:</strong> Convert paper-based designs into digital formats suitable for T-shirt printing.
        </li>
        <li>
          <strong>Custom T-Shirt Designs:</strong> Transform your ideas into attractive T-shirt designs with the help of Nimble's creative team.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Flyer Design Services</li>
        <li>Brochure Design Services</li>
        <li>Hoarding Design Services</li>
        <li>Banner Design Services</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Nimble for Customized T-Shirt Design Services?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Flexible Pricing Solutions:</strong> Cost-effective options tailored to your budget and business needs.</li>
        <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified firm ensuring your data is secure.</li>
        <li><strong>High-quality Services:</strong> ISO certified services delivered error-free.</li>
        <li><strong>State-of-the-art Infrastructure:</strong> Latest T-shirt design software and world-class facilities.</li>
        <li><strong>Talented Designers:</strong> Experienced creative designers handling all your requirements.</li>
        <li><strong>Single Point of Contact (SPOC):</strong> Dedicated manager for all your needs.</li>
        <li><strong>Easily Scalable Services:</strong> Increase or reduce resources according to project requirements.</li>
        <li><strong>Round the Clock Support:</strong> 24/7 assistance via phone or email.</li>
        <li><strong>Quick Turnaround Time:</strong> Multiple delivery centers enable fast and quality results.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Nimble Provided Prepress and Vector Artwork to a Dublin-based Client:</strong> Delivered reliable prepress and artwork services within a quick time.
        </li>
        <li>
          <strong>Nimble Provided Vector Artwork to a US-based Label Designer:</strong> Cost-effective vector artwork services to meet client requirements.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testimonials</h2>
      <p className="text-gray-700 mb-6">
        "The effort you spent in working out my DTP project diligently with a very quick turnaround time has helped my company reap immense profits. Looking forward to a very successful business relationship in the coming years."
        <br />
        <span className="font-semibold">— Graphics Manager, Leading electronics company, South Korea</span>
      </p>

      <p className="text-gray-700 mb-6">
        Nimble Auity has been a pioneer in providing top-quality T-shirt design services and other creative design solutions globally. With a team of experienced designers and advanced tools, we ensure all your requirements are met efficiently.
      </p>

      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Get in Touch for T-Shirt Design Services
        </a>
      </div>
    </div>
  );
};

export default TShirtDesign;
