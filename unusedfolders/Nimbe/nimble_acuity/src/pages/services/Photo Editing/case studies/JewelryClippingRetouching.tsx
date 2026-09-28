import React from "react";
import PEMainMenu from "../PEmainmenu";

const JewelryClippingRetouching: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-yellow-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Jewelry Image Clipping & Retouching Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity helped a Minnesota-based jewelry expert enhance product images and scale their e-Commerce business.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A reputed jewelry designer and wholesaler from Minnesota, serving Midwest and global markets. After years of success in traditional marketing, the client wanted to expand to e-Commerce platforms.
          </p>
        </div>

        {/* Client Requirements */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Image clipping and retouching for rings, necklaces, and bracelets</li>
            <li>Trial service of 10 images to evaluate accuracy</li>
            <li>Nimble $2,000 worth of images with a target of 5,000 finished images per week</li>
          </ul>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Images were damp, grainy, and dusty; some were damaged</li>
            <li>High level of editing expertise required</li>
            <li>360-degree images required consistent editing for each frame</li>
            <li>Variation in quality between frames</li>
            <li>Client requested consistent shine and gloss in images</li>
          </ul>
        </div>

        {/* Our Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            A trial of 10 images was completed within one day using Adobe Photoshop, meeting exact client specifications. Following the successful trial, 11,000+ images were Nimbled, processed by four editors simultaneously with Dropbox cloud collaboration. Images were enhanced with gloss, shine, and blemish removal.
          </p>
        </div>

        {/* Process */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Process Followed</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>RAW jewelry images received via zip link</li>
            <li>Saved on cloud for four editors to collaborate</li>
            <li>Pilot project with 10 images delivered same day</li>
            <li>Full project commenced post client approval</li>
            <li>Enhanced images with gloss, shine, and blemish removal</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client appreciated the attention to detail and creativity. They achieved 50% cost savings and scaled e-Commerce operations efficiently while maintaining high-quality images.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Jewelry Image Editing Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is ISO 9001:2015 certified with 26+ years of experience in photo editing services. We ensure flawless quality, faster turnaround, and confidentiality with ISO/IEC 27001:2022 compliance.
        </p>
        <button className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default JewelryClippingRetouching;
