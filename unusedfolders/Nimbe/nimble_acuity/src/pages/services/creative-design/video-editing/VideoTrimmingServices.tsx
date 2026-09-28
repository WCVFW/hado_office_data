import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoTrimmingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Trimming Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Add rhythm and energy to your videos with professional trimming services from Nimble Auity.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Skilled video trimming ensures your footage conveys the intended story. Nimble Auity merges creativity and technology to deliver high-precision video trimming that enhances your videos without losing their essence.
        </p>
      </section>

      {/* How to Trim a Video */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">How to Trim a Video</h2>
        <p>
          Video trimming focuses on retaining, removing, or moving clips without altering the original content. Nimble Auity’s experts analyze the master footage, trim rough edges, and stitch multiple clips for smooth transitions while maintaining creative flow.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Our Video Trimming Services Include</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Corporate Videos</li>
          <li>Real Estate & Drone Videos</li>
          <li>Home Videos</li>
          <li>Sports Videos</li>
          <li>MP4, YouTube, Holiday, Wedding, GoPro, Online Videos</li>
          <li>Color Correction, Effects, Brightness Adjustments</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nimble Video Trimming Process</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li><strong>Client Uploads Video:</strong> Upload master footage via Cloud, SFTP, or VPN.</li>
          <li><strong>Account & Project Creation:</strong> Dedicated customer account for easy project tracking.</li>
          <li><strong>Video Analysis:</strong> Experts evaluate footage to ensure quality standards.</li>
          <li><strong>Professional Video Trimming:</strong> Trim and edit video to specifications using advanced software.</li>
          <li><strong>Quality Control:</strong> Verify accuracy and deliver finished video through secure channels.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Video Trimming?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>ISO 9001:2015 certified for quality trimming services</li>
          <li>ISO/IEC 27001:2022 certified for secure handling of projects</li>
          <li>High accuracy and premium-quality output</li>
          <li>Quick turnaround, delivering 15% faster than competitors</li>
          <li>Scalable services for any project volume</li>
          <li>Flexible and pocket-friendly pricing</li>
          <li>Dedicated single point of contact for updates</li>
          <li>Experienced video trimming and quality control specialists</li>
          <li>Modern infrastructure with advanced editing software & tools</li>
          <li>Secure file sharing through SFTP/VPN</li>
          <li>Round-the-clock availability via email, phone, or chat</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"Leading Photo and Movie Restoration Company received accurate color correction and fast delivery from Nimble Auity."</p>
          </li>
          <li>
            <p>"Ontario Wedding Film Company optimized time and cost using Nimble Auity's professional video editing services."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Video Trimming to Nimble Auity</h2>
        <p className="mb-6">
          Save time and cost without compromising quality. Let Nimble Auity enhance your videos professionally.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VideoTrimmingServices;
