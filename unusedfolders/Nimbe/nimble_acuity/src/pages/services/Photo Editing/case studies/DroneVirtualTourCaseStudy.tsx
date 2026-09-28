import React from "react";
import PEMainMenu from "../PEmainmenu";

const DroneVirtualTourCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          360-Degree Virtual Tour Creation by Stitching Drone Footage
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover how Nimble Acuity stitched drone-captured images to create seamless 360-degree virtual tours, enhancing client satisfaction and clearing backlogs efficiently.
        </p>
      </section>

      {/* Client & Requirement */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A specialized aerial filming and photography company with certified pilots and drones (BNUC, CAA, IAA) delivering full video production, still photography, post-production, and 360-degree virtual tours.
          </p>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Requirement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Stitch multiple still drone photographs into a seamless 360-degree virtual tour.</li>
            <li>Add interactive "hot spots" for ground-level navigation.</li>
            <li>Leverage expertise in handling high-resolution drone images.</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Aligning numerous high-resolution images accurately during stitching.</li>
            <li>Each output required 2.5 hours of processing due to image complexity and size.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provided a free trial to the client before commencing the full project.</li>
            <li>Incorporated client feedback from the trial into the production workflow.</li>
            <li>Assigned 3 dedicated resources to stitch images and create 360-degree panoramas.</li>
            <li>Performed color correction for optimal output and uploaded finished files to a web-supported video player.</li>
            <li>Used PTGui and Autopano Giga software for precise image stitching.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Delivered a 360-degree virtual tour with 90% accuracy, meeting client benchmarks.</li>
            <li>Cleared the client’s backlog of drone images efficiently.</li>
            <li>Client expressed high satisfaction with the final stitched virtual tours.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Your Drone Image Stitching Requirements
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity offers affordable, customized, and high-quality drone footage editing and image stitching services with over 26 years of experience. Contact our team to discuss your project today.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default DroneVirtualTourCaseStudy;
