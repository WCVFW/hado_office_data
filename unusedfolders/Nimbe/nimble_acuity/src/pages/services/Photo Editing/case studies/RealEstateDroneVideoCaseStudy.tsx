import React from "react";
import PEMainMenu from "../PEmainmenu";

const RealEstateDroneVideoCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Real Estate Drone Video Editing for European Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity provided cost-effective and high-quality drone video editing services, helping a European real estate client clear their backlog efficiently.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A European real estate company specializing in the purchase and sale of properties, looking to enhance marketing with professionally edited drone footage.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            The client required editing of drone footage to create appealing marketing videos. The final videos needed stabilization, text overlays with specific fonts, background music, and removal of unwanted footage.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Tight schedule requiring delivery of 4–5 videos every 24 hours.</li>
            <li>Complex editing workflow including music, text overlays, and stabilization.</li>
            <li>Use of Final Cut Pro and adherence to client-specified fonts.</li>
          </ul>
        </div>

        {/* Nimble Acuity Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Nimble Acuity's Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provided a free trial for the client to assess performance.</li>
            <li>Assigned two dedicated resources for fast and accurate video editing.</li>
            <li>Used Final Cut Pro to edit videos, including removing footage, stabilizing, adding music, and text overlays.</li>
            <li>QA team performed multiple quality checks to ensure the project met client expectations.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            Nimble Acuity successfully edited and delivered one batch of videos every 24 hours, clearing the client’s backlog. Videos met the expected quality benchmark with over 98% accuracy. The client Nimbled an additional 50 real estate videos, establishing a long-term partnership and reducing in-house costs by nearly 50%.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sign up for a FREE Trial</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Experience our professional drone video editing services before outsourcing. Let Nimble Acuity help you deliver high-quality, cost-effective video content for your business.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default RealEstateDroneVideoCaseStudy;
