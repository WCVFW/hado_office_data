import React from "react";
import PEMainMenu from "../PEmainmenu";

const PanoramaStitchingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Panorama Stitching Services for Portland-based Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a Portland, USA-based company with professional panorama stitching services for real estate images.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A leading Portland-based company specializing in visual marketing solutions that help inspire and describe clients' businesses.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            Professional panorama stitching services for real estate images to give them a high-quality and authentic appearance.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Urgent request requiring quick turnaround</li>
            <li>Large volume of images to be stitched</li>
          </ul>
        </div>

        {/* Trial Project */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Trial Run</h2>
          <p>
            The client provided 3-5 images via Google Drive. One resource used Adobe PTGUI and Photoshop to stitch them together within an hour, impressing the client.
          </p>
        </div>

        {/* Full-Term Contract */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Full-Term Contract</h2>
          <p>
            The client Nimbled the entire project of 800-900 panoramas. Four full-time resources were assigned, delivering 300 panoramas in a month and completing the project on time.
          </p>
        </div>

        {/* Client Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Client Benefits</h2>
          <p>
            The client was delighted with the quality, turnaround time, and cost-effectiveness. They saved approximately 50% of costs by outsourcing panorama stitching to Nimble Acuity.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Real Estate Image Stitching Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity provides high-quality, cost-effective panorama stitching and image editing services globally using the latest tools and expert editors.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PanoramaStitchingCaseStudy;
