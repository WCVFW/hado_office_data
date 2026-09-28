import React from "react";
import CSmainmenu from "../CSmainmenu";

const StickerDesign: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">
      {/* Header */}
      <CSmainmenu/>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Sticker Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Get custom stickers made on request with your design or the one visualized by our sticker artists using special designing methods and tools starting at $12 per hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Nimble Auity is a sticker design service providing company with over 26+ years of experience in designing stickers for different industries. Our creative designers use cutting-edge tools to produce versatile sticker designs that enhance brand visibility and recognition.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">Sticker Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Custom Sticker Design:</strong> Personalized die-cut vinyl stickers, decals, labels, magnets, and more.</li>
        <li><strong>Corporate Sticker Designs:</strong> Tailored designs for corporate branding, color-matched and professional.</li>
        <li><strong>Personal Sticker Designs:</strong> Stickers for events, seminars, blogs, meet-and-greet sessions, and more.</li>
        <li><strong>Automotive Sticker Designs:</strong> Stickers for cars, trucks, bikes, and more, cut to precise shapes and colors.</li>
        <li><strong>Advertising Sticker Designs:</strong> Eye-catching, energetic designs to promote products or campaigns.</li>
        <li><strong>Warning Sticker Designs:</strong> Safety and warning stickers for industrial and construction purposes.</li>
        <li>Flashing, fluorescent, label, wall, and die-cut sticker designs</li>
      </ul>

      {/* Sticker Design Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Sticker Design Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li><strong>Receiving Order:</strong> Understanding brand requirements, offering multiple design choices, and documenting final specifications.</li>
        <li><strong>Designing:</strong> Execution of finalized concept, ensuring all aspects of requirements are covered.</li>
        <li><strong>Feedback & Delivery:</strong> Client approval, tweaks if necessary, and final delivery in requested format.</li>
      </ol>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Corporate Design Services</li>
        <li>Annual Report Design</li>
        <li>Logo Design Services</li>
        <li>Newsletter Design Services</li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Benefits of Choosing Nimble Sticker Design Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Flexible Pricing:</strong> Pay only for the services you select, with market-competitive rates.</li>
        <li><strong>Expert Designers:</strong> Experienced professionals with deep brand positioning knowledge.</li>
        <li><strong>Minimalist Design:</strong> Clutter-free designs that communicate maximum message.</li>
        <li><strong>Variety of Shapes & Sizes:</strong> Stickers tailored to brand requirements and product type.</li>
        <li><strong>Certified Company:</strong> ISO 9001:2015 and ISO/IEC 27001:2022 certified for quality and security.</li>
        <li><strong>Latest Tools & High Resolution:</strong> Designs created with advanced software for crisp and clear print-ready files.</li>
        <li><strong>Dedicated Project Manager:</strong> Single point of contact for all project needs.</li>
        <li><strong>24/7 Customer Support:</strong> Global availability for all queries and requirements.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Provided 50 Illustrations a Day to a US-based Client:</strong> Delivered cost-effective, high-quality illustrations based on the Simpsons characters.</li>
        <li><strong>Nimble Provided Illustrations for a Denmark-based Writer:</strong> Produced illustrations for a children's fantasy book with creative accuracy and affordability.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "The quality of artwork delivered during the trial period was exceptional and helped us choose Nimble as our preferred design partner from several quotes globally."
        <br />
        <span className="font-semibold">— Director, Operations, Leading pharmaceutical company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get in Touch for Sticker Design Services
        </a>
      </div>
    </div>
  );
};

export default StickerDesign;
