import React from "react";
import CSmainmenu from "../CSmainmenu";

const LogoCleanupServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Logo Cleanup Services
      </h1>
      <p className="text-gray-700 text-lg">
        We offer logo cleanup services to rebrand your logo and reflect modern design philosophies at rates starting from $12 per hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Design trends evolve constantly. Minor changes in color palette or typography can greatly improve brand recognition. Nimble Auity’s logo cleanup services allow you to update your logo without hiring a full-time designer, delivering professional results at affordable rates.
      </p>
      <p className="text-gray-700">
        We are one of India’s leading logo cleanup service providers, catering to clients with one-time needs or limited budgets, ensuring high-quality results without the overhead costs.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">Custom Logo Cleanup Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Color Palette Correction:</strong> Modernize your logo colors for trust, sophistication, and audience engagement.</li>
        <li><strong>Logo Vectorization:</strong> Convert logos to AI, SVG, EPS, PDF formats. Maintain all details, glows, shadows, and reflections at any size.</li>
        <li><strong>Typography Correction:</strong> Fix misaligned text, spacing, or italics to strengthen brand presence.</li>
        <li><strong>Logo Simplification:</strong> Remove unnecessary clutter for better focus, recall, and honesty in design.</li>
      </ul>

      {/* Logo Cleanup Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Logo Cleanup Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Capture business needs through detailed discussions.</li>
        <li>Assess brand values and business drivers for effective cleanup.</li>
        <li>Propose the best cleanup methods to the client.</li>
        <li>Create sample designs for client approval.</li>
        <li>Finalize the logo after client confirmation.</li>
        <li>Deliver the logo in preferred formats.</li>
      </ol>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Corporate Design Services</li>
        <li>Poster Design Services</li>
        <li>Logo Design Services</li>
        <li>Business Card Design Services</li>
      </ul>

      {/* Why Choose Nimble */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble Logo Cleanup Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Cost-effective solutions tailored to budgets.</li>
        <li>ISO 9001:2015 certified with 26+ years of experience.</li>
        <li>High-quality designs aligned with current trends.</li>
        <li>Data security compliant with ISO/IEC 27001:2022.</li>
        <li>Scalable solutions with flexible team allocation.</li>
        <li>Quick turnaround times (TAT) for timely delivery.</li>
        <li>Experienced logo cleanup experts from top design schools.</li>
        <li>High-quality tools from in-house development and Adobe suite.</li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Global Drinks Marketing Company:</strong> Nimble designed 60 drink menu templates per week, producing 12 new designs per day.
        </li>
        <li>
          <strong>Logo Vectorization for Australian Company:</strong> Provided 100% accurate logo vectorization within 24 hours.
        </li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic">
        "I am overwhelmed with the support & understanding of the Nimble team. Their quick turnaround helped my company reap immense profits."
        <br />
        <span className="font-semibold">— Graphics Manager, Leading Electronics Company, South Korea</span>
      </p>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Us for Logo Cleanup Services
        </a>
      </div>
    </div>
    </div>
  );
};

export default LogoCleanupServices;
