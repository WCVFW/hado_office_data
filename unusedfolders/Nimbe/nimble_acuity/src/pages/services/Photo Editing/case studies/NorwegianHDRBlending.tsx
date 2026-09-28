import React from "react";
import PEMainMenu from "../PEmainmenu";

const NorwegianHDRBlending: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          HDR Blending Services for Norwegian Photography Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how Nimble Acuity helped a top Oslo-based photography firm with high-quality HDR blending services for real estate images.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A top photography firm from Oslo, Norway with a rich portfolio serving local and international clients. They specialize in high-quality real estate photography.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            The client needed precise HDR blending for real estate images, retaining window details and performing sky replacement. They had previously been dissatisfied with 4 other vendors.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Time zone differences created communication barriers</li>
            <li>Previous vendors failed to meet quality expectations</li>
            <li>High accuracy required for HDR blending of real estate images</li>
          </ul>
        </div>

        {/* Our Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            A trial of 10 HDR images was completed within one day using a single resource. The client approved the full contract, and 2,000 HDR images were edited in the first month. As demand scaled, 4 editors worked on 500 images/week. Files were delivered via Dropbox.
          </p>
        </div>

        {/* Our Process */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Requirement Discovery:</strong> Downloaded RAW images and analyzed quality</li>
            <li><strong>Image Blending:</strong> HDR blending with shadow, highlight, and color correction, plus lens adjustments</li>
            <li><strong>Export Files:</strong> Edited images exported to JPEG and reviewed by QC team</li>
            <li><strong>Upload:</strong> Final files uploaded to Dropbox with client access credentials</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client was highly satisfied, saving time and expense. HDR blending was completed with perfection, meeting all quality standards and ensuring window details and sky replacements were accurate.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble HDR Blending Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is ISO 9001:2015 certified with 26+ years of experience. We deliver high-quality HDR blending services while ensuring ISO/IEC 27001:2022 compliance for data security.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default NorwegianHDRBlending;
