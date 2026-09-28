import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnimaticsServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Animatic & Previsualization Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Create realistic previews of your storyboard with Nimble Auity’s cost-effective and world-class animatics services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-700 space-y-6">
        <p>
          In today's competitive entertainment industry, conceptual mistakes can be costly. Pre-approval with animatics ensures creative control and financial stability. Animatics recreate a realistic look of your storyboard with motion, timing, sound effects, and even dialogue recordings.
        </p>
        <p>
          By reviewing and revising at the animatic stage, you understand pacing, rhythm, and scene progression. With over 26+ years of experience, Nimble’s animatics services ensure your story unfolds perfectly.
        </p>
      </div>

      {/* Service Offerings */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Animatics Service Offerings</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">2D Illustrated Animatics</h3>
            <p>
              Illustrators, editors, animators, and sound engineers work together to create tailored 2D animatics, allowing directors to correct script errors before production. Can combine flash-drawn characters on 3D backgrounds for enhanced depth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Animatics</h3>
            <p>
              Stunning 3D cinematics created in a 360° environment. Quick turnarounds with revisions for characters, wardrobe, props, camera angles, and motion capture, ensuring photo-realistic characters and backgrounds.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Photomatics</h3>
            <p>
              Ideal for broadcast commercials or celebrity spots. Uses reference or stock photos animated in photorealistic backgrounds for a cost-effective animatic. Includes in-house scene creation if required.
            </p>
          </div>
        </div>
      </div>

      {/* Animatics Process */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Animatics Process at Nimble</h2>
        <ul className="space-y-6 text-gray-700 text-lg max-w-4xl mx-auto">
          <li><strong>Creative Input:</strong> Send storyboards via FTP, VPN, or cloud-based transfer in your preferred format.</li>
          <li><strong>Talent Assignment:</strong> Storyboards assigned to animation team with clear instructions.</li>
          <li><strong>Pre-Drafts:</strong> Storyboards visualized on a timeline with motion and timing.</li>
          <li><strong>Character Definitions:</strong> Lead characters, products, and environments defined.</li>
          <li><strong>Delivery:</strong> Final files uploaded via secure channels for review.</li>
          <li><strong>Quality Check:</strong> QA team ensures project meets expected quality benchmarks.</li>
          <li><strong>Draft Review:</strong> Client reviews draft; revisions are implemented.</li>
          <li><strong>Composition:</strong> Final edits include linear edits, montages, voiceovers, supers, or add-ons.</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Animatics?</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
          <li>Extensive experience across films, commercials, animated features, corporate and educational films.</li>
          <li>Talented animation professionals, editors, and sound designers with 5+ years experience in their fields.</li>
          <li>Efficient workflows ensure staging, voiceover sync, blocking, and timing are completed correctly in first pass.</li>
          <li>Strict ISO quality standards with QA checks at every step for high-quality output.</li>
          <li>100% adherence to turnaround times, aided by multiple global delivery centers.</li>
          <li>Expertise in industry-leading software such as Adobe After Effects, Final Cut Pro, and Avid Media Composer.</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">High-Quality Animatics & Previsualization</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to reduce costs, build consensus, and make inspiring changes that reflect in the final product.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AnimaticsServices;
