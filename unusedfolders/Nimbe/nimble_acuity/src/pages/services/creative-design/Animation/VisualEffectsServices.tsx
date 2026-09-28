import React from "react";
import CSmainmenu from "../CSmainmenu";

const VisualEffectsServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium Visual Effects Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Experience the strategic benefit of audio-visual storytelling with Nimble's expert visual effects services. Awe-inspiring visuals delivered with precision.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg mb-6">
          As a global partner with decades of experience, Nimble helps clients handle high-capacity projects while maintaining stylistic consistency and pixel-perfect visuals. Our VFX artists specialize in colour grading, compositing, and 3D modeling to deliver cohesive visual narratives, optimize production timelines, and enhance operational efficiency.
        </p>
        <p className="text-gray-700 text-lg">
          Ready to elevate your visual content? Let Nimble bring your creative visions to life and create unforgettable experiences for your audience.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Visual Effects Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">VFX Animation Services</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>High-quality animations for various media</li>
              <li>Enhances storytelling and audience engagement</li>
              <li>Seamless integration with live-action footage</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Rotoscoping Services</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Accurate extraction of elements from video footage</li>
              <li>Enhances live-action scenes with realistic animations</li>
              <li>Provides clean plates for compositing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Tracking & Matchmove Services</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Precise camera tracking for VFX integration</li>
              <li>Believable 3D element movements</li>
              <li>Maintains spatial coherence and realism</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Cleanup Services</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Removal of unwanted elements from footage</li>
              <li>Corrects visual errors and inconsistencies</li>
              <li>Enhances overall visual quality</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Visual Effects Services</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Creation of realistic 3D elements and environments</li>
              <li>Immersive enhancement of scenes</li>
              <li>Provides depth and dimension to visuals</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Simulation Effects</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Realistic simulation of natural phenomena</li>
              <li>Physics-based, believable effects</li>
              <li>Dramatic and visually striking sequences</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Matte Painting</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Photorealistic digital environments</li>
              <li>Expansion or alteration of sets</li>
              <li>Visually rich backgrounds for scenes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Process Flow for Visual Effects Services</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li><strong>Initial Consultation:</strong> Understand client requirements and vision.</li>
          <li><strong>Proposal Submission:</strong> Detailed project plan, timeline, and cost estimate.</li>
          <li><strong>Contract Negotiation & Agreement:</strong> Finalize terms and conditions.</li>
          <li><strong>Pre-production:</strong> Planning, storyboarding, and preparation.</li>
          <li><strong>Production:</strong> Modeling, animating, rendering, and compositing.</li>
          <li><strong>Review & Revisions:</strong> Client feedback incorporated for alignment.</li>
          <li><strong>Delivery:</strong> Final approved visual effects delivered in preferred format.</li>
          <li><strong>Post-Delivery Support:</strong> Assistance for any issues or modifications.</li>
        </ol>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble as Your VFX Solution Provider?</h2>
        <ul className="space-y-4 text-gray-700 text-lg max-w-4xl mx-auto">
          <li><strong>Certified Expertise:</strong> Experienced professionals delivering high-quality VFX consistently.</li>
          <li><strong>On-Time Delivery:</strong> Projects completed within agreed timelines without compromising quality.</li>
          <li><strong>Affordability:</strong> High-quality VFX at competitive pricing.</li>
          <li><strong>Customized Solutions:</strong> Tailored services to align perfectly with project vision.</li>
          <li><strong>Security & Confidentiality:</strong> Strict protocols ensure your data and ideas are always protected.</li>
        </ul>
      </div>

      {/* Additional Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg text-center">
          <li>3D Design Services</li>
          <li>3D Animation Services</li>
          <li>Illustration Services</li>
          <li>Video Editing Services</li>
          <li>Graphic Design Services</li>
          <li>Audio Editing Services</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 to-indigo-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Visual Effects</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Transform creative visions into compelling realities. Nimble ensures stylistic consistency, pixel-perfect precision, and elevated storytelling.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Connect with Us
        </a>
      </div>
    </section>
  );
};

export default VisualEffectsServices;
