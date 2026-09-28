import React from "react";
import PEMainMenu from "../PEmainmenu";

const Global3DImageVideoCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Image Editing & Video Creation Services for Global 3D Visualization Leader
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a global 3D real-space visualization company efficiently edit property images and create video snippets at scale.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A global leader in 3D visualization of real spaces with branches in Lisbon, Washington, Berlin, and partners in over 75 countries. They serve businesses that rely on 2D photography for content, marketing, and documentation.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            Edit a large volume of property images, create video snippets, and upload them to their portal for real estate clients. The client needed a cost-effective offshore design team to handle the workload efficiently.
          </p>
        </div>

        {/* Nimble Acuity Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Nimble Acuity's Solution</h2>
          <p>
            Nimble Acuity executed a three-trial approach using Photoshop CC, Lightroom CC, and custom web applications:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <strong>Trial 1:</strong> 3 resources edited 50 images and created video snippets within 24 hours.
            </li>
            <li>
              <strong>Trial 2:</strong> Visualizers selected the best angles from property images via a customized web app to form snapshots for videos.
            </li>
            <li>
              <strong>Trial 3:</strong> 3D models were created with animation specialists, and vacant spaces between rooms were filled by a Quality Specialist.
            </li>
          </ul>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Finding the best angle for each shot was time-intensive.</li>
            <li>Assigning full-time resources within 24 hours.</li>
            <li>Short TAT requirement: 24-hour delivery per trial.</li>
          </ul>
        </div>

        {/* Results & Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results & Client Benefits</h2>
          <p>
            Based on trial quality, the client signed a full-time contract. Initially, 20,000 images per month were Nimbled, increasing to 100,000 images within three months. The client praised Nimble Acuity's speed, efficient allocation of resources, quality of image selection, and design expertise.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Experience the Quality of Nimble Acuity Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Try our image editing and video creation services for free before outsourcing your projects. Get high-quality output, skilled resources, and ISO-certified services.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Trial
        </button>
      </section>
    </div>
  );
};

export default Global3DImageVideoCaseStudy;
