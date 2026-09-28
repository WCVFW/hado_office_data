import React from "react";
import PEMainMenu from "../PEmainmenu";

const NZBikeClippingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          New Zealand Bike Designers: Image Clipping Case Study
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity provided high-precision image clipping services for professional bike components to enhance brand growth.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            Based in New Zealand, the client designs high-performance mountain bike components and manufactures frames for professional competitions, with extensive experience in suspension, frame, and transmission systems.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirements</h2>
          <p>
            The client required image clipping services in PSD format with all finished images saved to Dropbox.
          </p>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Complex spoke patterns were time-consuming to edit.</li>
            <li>Initial insourced project cost was nearly $1000 per month.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            Started with a trial run of 3 images using a single resource. After approval, the project was expanded to 100 images per month. Our Photoshop editors clipped spokes, suspension, frames, and other critical components with precision.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            Images were delivered with high accuracy, enabling the client to enhance their brand presence and fuel growth. The client appreciated our attention to detail and timely delivery.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Image Clipping Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is ISO 9001:2015 certified with 26+ years of experience in image editing. We ensure accuracy, confidentiality, and timely delivery for every project.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default NZBikeClippingCaseStudy;
