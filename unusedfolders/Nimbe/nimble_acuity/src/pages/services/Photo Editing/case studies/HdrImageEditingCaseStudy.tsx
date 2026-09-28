import React from "react";
import PEMainMenu from "../PEmainmenu";

const HdrImageEditingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          HDR Image Editing for Video Production Services Company
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how Nimble Acuity successfully completed 80,000 HDR image edits including flash removal for a US-based video production and photography company within 20 days.
        </p>
      </section>

      {/* Client Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A US-based company offering still photography, video production, and 360-degree virtual tours to hotels, resorts, real estate properties, brokers, and construction sites.
          </p>
        </div>

        {/* Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Requirement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Edit and perform flash removal on 80,000 HDR images within 20 days.</li>
            <li>Ensure HDR blending techniques to create seamless output images.</li>
            <li>Maintain quality and turnaround time as assessed via trial rounds.</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Handling more than 177 folders totaling 80,000 images in just 20 days.</li>
            <li>FTP technical issues causing delays in file access and missing files.</li>
            <li>Limited HDR expertise among staff combined with a tight deadline.</li>
            <li>Each image required a minimum of 30 minutes of editing, and client feedback delays caused additional challenges.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Assigned 10 dedicated resources exclusively to this project.</li>
            <li>Client provided special training and hard disks with all image folders.</li>
            <li>Flash removal and HDR blending techniques were applied to all images.</li>
            <li>Blended images within folders to produce seamless outputs.</li>
            <li>Each image was checked for the highest level of accuracy before delivery.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Completed 80,000 HDR images including flash removal within 20 days.</li>
            <li>Met the 95% quality benchmark set by the client.</li>
            <li>Client was impressed and continued outsourcing new projects to Nimble Acuity.</li>
            <li>Established a long-term business relationship with the client.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Your HDR Image Editing</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our team delivers high-quality HDR image editing and flash removal services at speed and scale. Contact Nimble Acuity to Nimble your large-volume image editing projects today.
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default HdrImageEditingCaseStudy;
