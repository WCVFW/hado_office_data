import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoClippingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Video Clipping Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Make your videos flawless with precision video clipping at rates starting from $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Save time and resources by outsourcing professional video clipping services to Outsource2india (O2I). We handle all types of clipping needs—from corporate videos to interviews—ensuring your footage is visually perfect and ready for any platform.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Video Clipping Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Online Video Clipping:</strong> Simple or complex clipping for social sharing or presentations.</li>
          <li><strong>Interview Video Clipping:</strong> Enhance visual quality to meet business requirements.</li>
          <li><strong>Corporate Video Clipping:</strong> Edit seminars, conferences, and meeting footage to make it professional.</li>
        </ul>
      </section>

      {/* Video Clipping Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-indigo-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Video Clipping Process</h2>
        <ul className="list-decimal ml-6 space-y-2">
          <li>Gather requirements and video files from the client.</li>
          <li>Analyze files for quality, corruption, and clipping needs.</li>
          <li>Select experienced editors suitable for the project.</li>
          <li>Assign editors along with a team lead.</li>
          <li>Perform clipping within the stipulated time frame.</li>
          <li>Securely deliver the edited files to the client.</li>
          <li>Compile and send a detailed project report for review.</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>360° Wedding Videos</li>
          <li>Corporate Video Editing</li>
          <li>Real Estate Drone Video Editing</li>
          <li>Holiday Video Editing</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-indigo-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Outsource Video Clipping to O2I</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Cost-effective and customizable editing solutions for all project sizes.</li>
          <li>ISO 9001:2015 certified quality standards and post-processing support.</li>
          <li>Experienced, certified video clipping experts with proven track records.</li>
          <li>State-of-the-art editing software including Adobe Premiere, Final Cut Pro, and Edius Pro.</li>
          <li>Quick turnaround times with secure data delivery.</li>
          <li>24/7 support across multiple time zones.</li>
          <li>Scalable services to handle additional requirements seamlessly.</li>
          <li>Superb infrastructure and cutting-edge editing tools for high-quality output.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-indigo-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"O2I delivered live video editing services quickly for a Swedish film production house."</p>
          </li>
          <li>
            <p>"An Italian wedding photographer outsourced 70 wedding video and photo edits at 70% lower cost with high-quality output."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-indigo-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with Video Clipping</h2>
        <p className="mb-6">
          Outsource your video clipping needs to our professional team and get high-quality, flawless videos delivered on time.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VideoClippingServices;
