import React from "react";
import CSmainmenu from "../CSmainmenu";

const RealEstateBrochureDesign: React.FC = () => {
  return (
    <div>    <CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Real Estate Brochure Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Ensure that your real estate listings are presented in the most compelling way by choosing our brochure design services at prices starting at $10/hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Brochure design for real estate helps advertise and showcase properties effectively, including apartments, houses, commercial spaces, or multi-property projects. Nimble Auity has over 20 years of experience providing high-class brochure designing services globally.
      </p>

      {/* Our Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Our Comprehensive Real Estate Brochure Design Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Half-Fold Real Estate Brochure:</strong> Two panels folded from the middle, ideal for concise content and images.</li>
        <li><strong>Tri-Fold Real Estate Brochure:</strong> Three equal panels offering more space for content and design creativity.</li>
        <li><strong>Z-Fold Real Estate Brochure:</strong> Six-panel zig-zag layout for modern fonts and vertical/horizontal content arrangement.</li>
        <li><strong>Gate-Fold Real Estate Brochure:</strong> Unequal panel sizes, perfect for large projects and multi-component illustrations.</li>
        <li><strong>Double Gate Fold Real Estate Brochure:</strong> Accommodates up to eight pages for extensive project details.</li>
        <li><strong>Double Parallel Fold Real Estate Brochure:</strong> Sixteen panels, ideal for large builders or property portfolios with maps and detailed content.</li>
      </ul>

      {/* Additional Services */}
      <p className="text-gray-700">
        We also specialize in Accordion Fold, Roll Fold, and French Fold Real Estate Brochures.
      </p>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Creative Design Services</li>
        <li>Illustrator Services</li>
        <li>Video Editing Services</li>
        <li>Writing Services</li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Benefits of Choosing Nimble for Real Estate Brochure Design</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Cost-effective Services:</strong> Up to 60% cost savings with flexible pricing models like hourly rates or FTE.</li>
        <li><strong>Expertise in Real-Estate Brochure Creation:</strong> Extensive exposure to creating compelling real estate brochures.</li>
        <li><strong>Accommodates All Real Estate Needs:</strong> Optimized use of white space for content, images, pricing, and reviews.</li>
        <li><strong>Experienced Resources:</strong> Skilled designers, writers, and illustrators delivering top-notch results.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Edited 100,000 Drone Videos for a Premier Italian Firm:</strong> High-quality and accurate video editing delivered quickly.</li>
        <li><strong>Nimble Provided Compelling Content Writing Services to a Software Provider:</strong> Creative and engaging written content delivered efficiently.</li>
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

export default RealEstateBrochureDesign;
