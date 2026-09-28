import React from "react";
import CSmainmenu from "../CSmainmenu";

const ArchitecturalAnimationServices: React.FC = () => {
  const softwareTools = [
    "AUTODESK REVIT",
    "Blender",
    "CINEMA 4D",
    "OctaneRender",
    "LUMION",
    "MODO"
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Architectural Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Our animators create top-notch animations that help you visualize architectural projects as described in brochures at rates starting at just $25 per second.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Nimble Auity provides reliable architectural animation services to help clients and investors visualize your architectural designs in a realistic, high-definition format. 3D animations bring architectural drafts to life, allowing a complete understanding of the final project.
        </p>
        <p>
          Partnering with Nimble Auity ensures a positive impression through professional and precise animated representations.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Architectural Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Interior & Exterior Rendering</h3>
            <p>Visualize projects from multiple angles, especially useful for early development and pre-sale stages.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Floor Plans</h3>
            <p>Evaluate space utilization for residential, commercial, or public projects, aiding design decisions and progress tracking.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Walkthrough Services</h3>
            <p>Create complete animated representations allowing clients and investors to interact with your designs virtually.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Virtual Tours & 360° Panoramas</h3>
            <p>Provide immersive virtual tours with tilts and shifts to enhance the feeling of reality in property presentations.</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Architectural Animation Process We Follow</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>Understanding Client Needs:</strong> Receive drawings, sketches, models, or reference videos through secure FTP and analyze project requirements.</li>
          <li><strong>3D Model Preview:</strong> Rendered images and storyboards presented to clients for feedback and adjustments.</li>
          <li><strong>Drafting and Refining:</strong> Low-resolution drafts created for cost-effective approval and refinement.</li>
          <li><strong>Final Animation:</strong> Low-res drafts transformed into high-resolution animations after client approval.</li>
          <li><strong>Approval and Delivery:</strong> Final animated files delivered via secure FTP after feedback incorporation.</li>
        </ol>
      </div>

      {/* Software */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Architectural Animation Tools We Leverage</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-gray-700 text-center">
          {softwareTools.map((tool) => (
            <div key={tool} className="bg-white rounded-lg shadow p-4">{tool}</div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Architectural Animations?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Affordable, customized pricing based on selected services.</li>
          <li>ISO/IEC 27001:2022 certified for complete data security.</li>
          <li>ISO 9001:2015 certified, ensuring high-quality output.</li>
          <li>Expert animators skilled in modern animation tools.</li>
          <li>Quick turnaround times using efficient workflows.</li>
          <li>24/7 assistance for all client queries.</li>
          <li>Scalable services to handle large projects efficiently.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation for Swiss Natural Product Dealer</h3>
            <p>Nimble’s 4 expert animators created holograms using 3DS Max & Maya, rendering designs from PDF and PSD files within 12 business days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Children's Book Writer</h3>
            <p>A UK author outsourced 2D animation services to Nimble. Skilled animators delivered high-quality animations on time and within budget.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Architectural Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to visualize your architectural projects in realistic 3D, walkthroughs, and 360° panoramas.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ArchitecturalAnimationServices;
