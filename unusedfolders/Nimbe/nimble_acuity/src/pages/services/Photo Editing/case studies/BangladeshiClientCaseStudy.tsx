import React from "react";
import PEMainMenu from "../PEmainmenu";

const BangladeshiClientCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          HDR Blending & Portrait Editing for Bangladeshi Digital Advertising Supplier
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity delivered high-quality HDR blending and portrait image editing services to streamline workflow and reduce costs.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A Bangladeshi supplier of digital advertising materials, offering large-format printing solutions, indoor and outdoor advertising products to local and global customers.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real estate HDR blending</li>
            <li>Portrait image editing</li>
            <li>Blending, retouching, and color correction using Adobe Photoshop</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <p>
            In-house editing was too costly, and the client wanted to reduce overheads while maintaining high-quality output without hiring a full-time team or buying expensive software.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            Assigned a specialized image editing team. Started with a trial of 8 images handled by one resource, delivered the same day via Dropbox. Upon client approval, the project was expanded, with 2 additional resources editing 3 images per day.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            Nimble Acuity delivered high-quality HDR blended and retouched images on time, reducing client costs and ensuring a smooth workflow. The client was highly satisfied and continued the project with extended scope.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble HDR Blending & Portrait Editing Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is ISO 9001:2015 certified with 26+ years of experience. We guarantee flawless quality, strict adherence to timelines, and full compliance with ISO/IEC 27001:2022 for data security.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BangladeshiClientCaseStudy;
