import React from "react";
import PEMainMenu from "../PEmainmenu";

const ImageClippingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Denmark-based Client Image Clipping</h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity delivered 700 images with high-quality clipping and retouching services within a tight 24-hour deadline.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            Denmark-based top provider of products/services to the women’s clothing and garments industry.
          </p>
        </div>

        {/* Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client's Requirement</h2>
          <p>
            Required image clipping services for 700 images at $700, with the final images delivered in PNG format within 24 hours.
          </p>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <p>
            Quick trial required by the client, tight 24-hour delivery, and format conversion from JPEG to PNG while maintaining high quality.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nimble Acuity's Solution</h2>
          <p>Two expert editors were assigned to handle 700 images using Adobe Photoshop. Services included:</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Product clipping path</li>
            <li>Color correction using grey-card</li>
            <li>Transparent background & center alignment</li>
            <li>Tight cropping and 1-pixel gap trimming</li>
            <li>Product rotation</li>
            <li>RGB color mode</li>
            <li>Metadata removal & file renaming</li>
            <li>Additional retouching as required</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            Successfully delivered 700 high-quality images within the 24-hour deadline, meeting the client’s exact requirements and ensuring satisfaction.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Image Clipping Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity provides professional image editing services, processing over 200,000 images per month with ISO 9001 standards, 98% accuracy, and near 100% on-time delivery.
        </p>
        <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ImageClippingCaseStudy;
