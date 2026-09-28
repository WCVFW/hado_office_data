import React from "react";
import PEMainMenu from "../PEmainmenu";

const PanoramaStitchingUKCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Panorama Stitching Services for UK Real Estate Company
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a UK-based real estate company create immersive virtual tours by stitching high-volume property images into interactive panoramas.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A UK-based real estate company specializing in high-definition, fully spherical virtual tours for commercial properties, catering to global audiences.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            Offshore panoramic stitching of high-volume property images to create virtual tours, ensuring immersive and interactive experiences.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <p>Frequent changes in the Scope of Work (SOW) required flexible and adaptive processes.</p>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            Nimble Acuity resources followed the client's guidelines for stitching, mismatch correction, nadir point correction, dimension adjustments, brightness and sharpness enhancements, and rendering in JPEG format. Images were received via Dropbox in raw format.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>72 images – 140 mins</li>
            <li>12 images – 40 mins</li>
            <li>6 images – 18 mins</li>
            <li>4 images – 20 mins</li>
          </ul>
          <p className="mt-2">
            One resource completed the assigned tasks in three hours, leading to further outsourcing of additional requirements.
          </p>
        </div>

        {/* Client Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Client Benefits</h2>
          <p>
            The client achieved precise image stitching with 60% cost savings and praised Nimble Acuity for prompt delivery and high-quality results.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Choose Nimble Acuity for Panorama Stitching Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity offers seamless outsourcing workflows, skilled resources, and ISO-certified quality services for panorama stitching and more. Get a free quote or trial today!
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PanoramaStitchingUKCaseStudy;
