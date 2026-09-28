import React from "react";
import PEMainMenu from "../PEmainmenu";

const FisheyePanoramaStitching: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Fisheye Panorama Stitching Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          We turn your average fisheye photos into high-quality panoramas at
          highly affordable rates (starts at $7/hour).
        </p>
      </section>

      {/* Challenges & Solutions */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Nimble Fisheye Panorama Stitching?
          </h2>
          <p className="mb-4">
            Do you face hurdles in mapping straight lines in fisheye images?
            Nimble to us and let seasoned professionals fix stereographic
            disparity and perspective distortion with precision.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Save time and effort</li>
            <li>Minimize perspective distortion</li>
            <li>Get distortion-free panoramas at budget-friendly rates</li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            Tools & Software We Use
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>3D Vista</li>
            <li>PTGui</li>
            <li>Autopano Giga</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Fisheye Panorama Stitching Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Perspective Correction
              </h3>
              <p>
                Fix fisheye mapping distortion, remediate barrel distortion, and
                stitch multiple narrow FOV images for crisp panoramas.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Direct Mapping</h3>
              <p>
                Unroll fisheye images, splice multiple captures, and create
                smooth panoramas with minimal vertical distortion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Fisheye Panorama Stitching Process
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-lg">
          <li>Gather client requirements and challenges</li>
          <li>Receive and secure image transfer via SFTP/VPN</li>
          <li>Offer a free trial with dedicated resources</li>
          <li>Stitch fisheye panoramas using industry tools</li>
          <li>Perform rigorous quality checks</li>
          <li>Deliver securely via SFTP</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Why Choose Nimble Acuity for Fisheye Panorama Stitching?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Flexible pricing – starts at just $7/hour</li>
              <li>Swift turnaround and timely delivery</li>
              <li>ISO 9001:2015 & ISO/IEC 27001:2022 certified</li>
              <li>World-class infrastructure and Adobe experts</li>
              <li>24/7 customer support & single point of contact</li>
              <li>Scalable services with dedicated teams</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Client Testimonials</h3>
            <blockquote className="italic border-l-4 border-blue-600 pl-4">
              "Thank you for the excellent work you have done for me. The quality
              was very high, the price excellent, and the turnaround time was
              very fast. 10/10"
            </blockquote>
            <p className="mt-2 text-sm">– Professional Photographer, Australia</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Nimble Fisheye Panorama Stitching?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with us today for flawless fisheye panoramas delivered on time
          and within budget.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FisheyePanoramaStitching;