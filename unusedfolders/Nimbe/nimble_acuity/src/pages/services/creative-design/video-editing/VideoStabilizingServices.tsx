import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoStabilizingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Stabilizing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get smooth, sharp, and stable videos with our professional video stabilizing services starting at $10/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Are your videos shaky or unclear? Nimble Auity provides top-notch video stabilizing services, reducing noise, blur, and correcting lens distortions to ensure high-quality, stable videos that captivate viewers.
        </p>
      </section>

      {/* Video Stabilizing Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Video Stabilizing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Super Video Stabilization Services:</strong> Remove unintentional motion while retaining intended motion for smooth videos.</li>
          <li><strong>Multi-camera Transition Services:</strong> Correct shaking in multi-camera videos, especially smartphone footage.</li>
          <li><strong>Horizon Correction Services:</strong> Fix skewed or tilting horizons for professional-looking videos.</li>
          <li><strong>Dynamic Motion Blur Reduction:</strong> Turn blurry video segments into sharp and clear footage.</li>
          <li><strong>Temporal Noise Reduction:</strong> Eliminate random color and intensity changes for higher quality videos.</li>
          <li><strong>Hyperlapse Editing Services:</strong> Smooth time-lapse or hyper-lapse videos without losing quality.</li>
          <li><strong>Variable Lens Distortion Correction:</strong> Correct wide-angle lens distortions for breathtaking videos.</li>
          <li><strong>Field of View Correction:</strong> Remove zoom artifacts caused by autofocus changes for professional results.</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Corporate Video Editing</li>
          <li>Film & Storyboarding Services</li>
          <li>Motion Graphics Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Video Stabilizing?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Affordable pricing options for all budgets.</li>
          <li>Experienced team with 26+ years of video editing expertise.</li>
          <li>High-quality, stable videos without sacrificing clarity.</li>
          <li>Quick turnaround times for faster delivery.</li>
          <li>Scalable resources to match project demands.</li>
          <li>Use of latest video stabilizing tools and technologies.</li>
          <li>World-class infrastructure for superior performance.</li>
          <li>ISO/IEC 27001:2022 certified data security.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"Italian Wedding Photographer outsourced editing of 70 weddings to Nimble Auity, achieving 70% cost savings."</p>
          </li>
          <li>
            <p>"A major skincare products distributor in London leveraged Nimble Auity’s video retouching services efficiently and cost-effectively."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Video Stabilizing to Nimble Auity</h2>
        <p className="mb-6">
          If you need professional, reliable, and cost-effective video stabilizing services, Nimble Auity has you covered. Enhance video quality and engagement today!
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VideoStabilizingServices;
