import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoCroppingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Cropping Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Make your videos crisp, precise, and ready for consumption with Nimble’s professional video cropping services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Whether you are a company, brand, or freelancer, Nimble ensures your unedited videos are cropped and optimized efficiently. Remove unwanted sections, adjust aspect ratios, and enhance your videos for immersive experiences.
        </p>
      </section>

      {/* How Do You Crop a Video */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">How Do You Crop a Video?</h2>
        <p>
          Cropping requires precision and expertise. Professional editors at Nimble use proprietary tools to select frames, define offsets, and customize encoding presets to maintain quality while delivering perfectly cropped videos in any format.
        </p>
      </section>

      {/* Video Cropping Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Our Video Cropping Services Include</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Corporate Videos</li>
          <li>Real Estate & Drone Videos</li>
          <li>Home Videos</li>
          <li>Sports Videos</li>
          <li>MP4, YouTube, Holiday, Wedding, GoPro, Online Videos</li>
        </ul>
      </section>

      {/* Constraints */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Constraints to Keep in Mind</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Best results in landscape aspect ratio over portrait</li>
          <li>Input video must accommodate crop rectangle size and coordinates</li>
          <li>Square-pixel videos are simpler to crop</li>
          <li>Height and width must align with cropped video encode settings</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Nimble Video Cropping Process</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li><strong>Client Uploads Video:</strong> Accept target video via internet upload.</li>
          <li><strong>Account & Project Creation:</strong> CRM account created for project tracking.</li>
          <li><strong>Video Analysis:</strong> Experts analyze footage to ensure quality standards.</li>
          <li><strong>Professional Cropping:</strong> Decode, crop, and re-encode with precision.</li>
          <li><strong>Quality Control:</strong> Final video reviewed and approved before delivery.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Video Cropping?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>ISO 9001:2015 certified provider</li>
          <li>ISO/IEC 27001:2022 certified for data security</li>
          <li>High accuracy and polished video output</li>
          <li>Quick turnaround without loss of quality</li>
          <li>Scalable for single or multi-video projects</li>
          <li>Flexible, pocket-friendly pricing</li>
          <li>Dedicated single point of contact for updates</li>
          <li>Experienced team of video cropping specialists</li>
          <li>Modern infrastructure and advanced AI/ML editing tools</li>
          <li>Secure file sharing via FTP/VPN</li>
          <li>24/7 availability and global support</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"Leading Photo and Movie Restoration Company got precise color correction from Nimble Auity, delivered in quick TAT."</p>
          </li>
          <li>
            <p>"Ontario Wedding Film Company saved time, money, and effort using Nimble's professional video editing services."</p>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Video Cropping to Nimble Auity</h2>
        <p className="mb-6">
          Enhance your videos professionally, preserve quality, and save time. Get in touch for a free quote today.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VideoCroppingServices;
