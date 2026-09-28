import React from "react";
import CSmainmenu from "../CSmainmenu";

const MarketingCollateralDesign: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Marketing Collateral Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Achieve consistent branding with our marketing collateral design services. We tackle in-house design struggles, amplifying your reach and ensuring powerful engagement.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Creating compelling marketing collateral in-house can be complex, time-consuming, and challenging to maintain brand consistency. Nimble Auity transforms these challenges into opportunities with customized marketing collateral design solutions that strengthen your brand identity, engage your audience, and optimize resources.
      </p>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Nimble Provided Graphic Design Services to a UK-Based Property Website and App:</strong> Reduced 50% costs with stunning image retouching; 90% in sync with client requirements.
        </li>
        <li>
          <strong>Paris-based Men's Apparel Manufacturer Illustration Services:</strong> 48-hour TAT with two shifts providing 16 hours coverage, helping clients clear backlogs quickly.
        </li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new outsourced partner from several quotes globally."
        <br />
        <span className="font-semibold">— Director of Operations, Leading Pharmaceutical Company, Netherlands</span>
      </p>

      {/* Marketing Collateral Solutions */}
      <h2 className="text-2xl font-semibold text-gray-800">Marketing Collateral Design Solutions We Offer</h2>
      <p className="text-gray-700">
        Our expert team specializes in brochures, infographics, mailers, posters, flyers, business cards, and social media graphics. We translate your brand narrative into striking visuals that resonate with your target audience.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Brochures & Catalog Design:</strong> Adobe InDesign and Illustrator used to create visually stunning brochures that communicate your brand message.</li>
        <li><strong>Infographic Design:</strong> Tools like Canva and Piktochart to simplify complex data into engaging infographics.</li>
        <li><strong>Mailers:</strong> Eye-catching mailers that increase response rates and overall engagement.</li>
        <li><strong>Flyers & Posters:</strong> Impactful visuals to promote events, products, or services.</li>
        <li><strong>Business Cards:</strong> Unique, high-quality cards reflecting your brand.</li>
        <li><strong>Social Media Graphics:</strong> Engaging visuals that boost social media engagement.</li>
      </ul>

      {/* Industries */}
      <h2 className="text-2xl font-semibold text-gray-800">Industries We Cater</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Healthcare and Wellness</li>
        <li>Real Estate</li>
        <li>IT, Software & Internet Marketing</li>
        <li>Finance & Banking</li>
        <li>Government & Public Sector Enterprises</li>
        <li>Travel & Tour</li>
        <li>Retail</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble for Marketing Collateral Design</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Proven Design Proficiency:</strong> Experienced team delivering high-quality, strategic designs with multiple stages of QA.</li>
        <li><strong>Swift Design Delivery:</strong> Quickest turnaround time in the industry (10–24 hours).</li>
        <li><strong>Advanced Design Tools:</strong> Photoshop, Illustrator, Affinity Designer, and more.</li>
        <li><strong>First-rate Infrastructure:</strong> Global delivery centers for smooth execution.</li>
        <li><strong>Pursuit of Perfection:</strong> ISO-certified services adhering to international standards.</li>
        <li><strong>Robust Data Security:</strong> Maximum confidentiality for sensitive information.</li>
        <li><strong>Customized Pricing Options:</strong> Cost-effective solutions that fit your budget.</li>
      </ul>

      {/* Additional Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Additional Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Illustration Services</li>
        <li>Animation Services</li>
        <li>Artwork Services</li>
        <li>Graphic Design Services</li>
      </ul>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Us for Marketing Collateral Design
        </a>
      </div>
    </div>
    </div>
  );
};

export default MarketingCollateralDesign;
