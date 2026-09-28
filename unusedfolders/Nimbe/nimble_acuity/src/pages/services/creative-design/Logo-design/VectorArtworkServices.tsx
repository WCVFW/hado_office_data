import React from "react";
import CSmainmenu from "../CSmainmenu";

const VectorArtworkServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Vector Artwork Services
      </h1>
      <p className="text-gray-700 text-lg">
        Get vector artwork designed by professional artwork designers to bolster your marketing with a creative touch. Our high-quality vector artwork design services start at $12/hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Looking for innovative ways to develop, create, and design using vector art? Want to update your existing designs or logos to look attractive while emphasizing your business? At Nimble Auity, we develop vector art (AI or EPS files) with scalable resolution for use from small illustrations to enormous hoardings and billboards.
      </p>

      <p className="text-gray-700">
        Our exclusive vector artwork is created using vector graphics, which are resolution-independent designs developed using mathematical formulas. This ensures clarity and scalability across all mediums. Our creative team designs uniform information architecture, user flows, wireframes, interactive prototyping, and vivid visual designs while keeping your business goals in mind.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">Vector Artwork Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Vector Illustrations:</strong> High-quality AI and EPS vector artwork using Adobe Illustrator, CorelDRAW, and Affinity Designer for scalable illustrations, architectural drawings, and interface designs.</li>
        <li><strong>Vector Art Designs:</strong> Resolution-independent designs that resonate with your audience and evoke emotion.</li>
        <li><strong>Editable Vector Designs:</strong> AI/EPS files with individually editable objects for easy modifications.</li>
        <li><strong>Logos:</strong> Scalable logos created or updated with Freehand or CorelDRAW.</li>
        <li><strong>Image Enhancement:</strong> Color corrections, contrast adjustments, and revamping old designs.</li>
        <li><strong>Designing Interfaces:</strong> UI/UX vector designs for web, mobile apps, kiosks, and other platforms.</li>
        <li><strong>3D Modeling & Graphics:</strong> Realistic 3D vector models with 360-degree views.</li>
        <li><strong>Animation:</strong> Scalable vector animations and motion graphics.</li>
        <li><strong>Fonts & Conversion:</strong> Custom fonts and outline conversions to maintain consistency in print.</li>
        <li><strong>Vector Artwork Conversion:</strong> Convert raster images to vector formats manually or automatically.</li>
        <li><strong>Icons:</strong> Eye-catching icons for apps, web, and devices.</li>
        <li><strong>Screen-printing & Vexel Art:</strong> High-quality vector prints and pixel-vector hybrid designs.</li>
        <li><strong>Vector Formats:</strong> AI, EPS, FH, CDR formats for crisp scalable artwork.</li>
        <li><strong>Vector Art Library:</strong> Build themed libraries of vector clipart graphics.</li>
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Vector Artwork Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li><strong>Discussion with Our Team:</strong> Understand requirements and define creative direction.</li>
        <li><strong>Meticulous Development:</strong> Craft custom vector art, designs, logos, and icons representing your brand.</li>
        <li><strong>Cross-platform Testing:</strong> Ensure compatibility across all platforms.</li>
        <li><strong>Delivery:</strong> Timely delivery of vector files in your preferred format.</li>
        <li><strong>Updating Designs:</strong> Refresh or enhance existing logos and artwork.</li>
        <li><strong>Feedback:</strong> Continuous improvement based on client feedback.</li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble Vector Artwork Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Value-for-money with highly affordable vector artwork rates</li>
        <li>State-of-the-art technology with Adobe Illustrator, Photoshop, CorelDRAW, and Affinity Designer</li>
        <li>Faster load times with optimized vector files</li>
        <li>Experienced, professional design team delivering error-free results</li>
        <li>Systematic workflow for high-quality output and timely delivery</li>
        <li>High-quality restoration and enhancement of old designs</li>
        <li>Strict confidentiality and secure file transfer</li>
        <li>Personalized assistance with a dedicated point of contact</li>
        <li>All-round support across time zones 24/7</li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Vector Artwork for US-based Label Designer:</strong> Nimble Auity provided timely vector artwork services at competitive rates.
        </li>
        <li>
          <strong>Prepress & Vector Artwork for Dublin-based Printing Company:</strong> Nimble Auity delivered high-quality prepress and vector artwork meeting strict timelines.
        </li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new Nimble partner."
        <br />
        <span className="font-semibold">— Director, Operations, Leading Pharmaceutical Company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Us for Vector Artwork Services
        </a>
      </div>
    </div>
    </div>
  );
};

export default VectorArtworkServices;
