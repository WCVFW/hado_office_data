import React from "react";
import CSmainmenu from "../CSmainmenu";

const Animation2DServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium 2D Animation Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Master complex 2D animation techniques with Nimble Auity, creating dynamic, culturally sensitive content for global brands.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Consultation
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-700">
        <p className="mb-6 text-lg">
          Nimble is a full-service 2D animation partner for global studios, mastering squash & stretch, anticipation, and overlapping action. We create fluid, realistic animations that resonate with diverse audiences, bridging cultural differences and time zones.
        </p>
        <p className="text-lg">
          Our commitment to innovation, quality, and customer satisfaction ensures effective visual communication and precise storytelling for top global brands.
        </p>
      </div>

      {/* Client Success Stories */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Sticker Design Services for an Advertising Firm</h3>
            <p>Top Scandinavian medical research company gets 3200 full-time work hours and delivery of fully-functional 3D animations and videos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Logo Vectorization for an Australian Company</h3>
            <p>Australian startup specializing in marketing and web development gets logo design and vectorization services timely and cost-efficiently.</p>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional 2D Animation Services We Offer</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Creative 2D Animation Services</h3>
            <p>High FPS animations ensuring smooth motion using proprietary software and traditional principles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">2D Video Animation Services</h3>
            <p>Advanced skeletal animation and deformers bring characters to life with fluidity and realism.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Motion Graphic Animations</h3>
            <p>Complex compositing integrates 3D layers into 2D spaces, automating intricate sequences.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Animated Explainer Videos</h3>
            <p>Apply gestalt principles and cognitive load balancing for user-friendly information delivery.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Whiteboard Animations</h3>
            <p>High-end vector graphics synchronized with voiceovers for seamless narrative flow.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Stop Motion Animations</h3>
            <p>Traditional stop motion coupled with digital capture and advanced color grading.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Animated Commercials</h3>
            <p>Cinematic storytelling using HDRI for realistic lighting and reflections to enhance products.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Infographic Videos</h3>
            <p>Data-driven design with smooth animated transitions between data points.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Cut-out Animation</h3>
            <p>Digital rigging and mesh warping simulate 3D movements in 2D characters.</p>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Optimized Workflow for Custom 2D Animation</h2>
        <ul className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
          <li><strong>01. Project Scope:</strong> Define requirements, turnaround time, pricing, and target audience.</li>
          <li><strong>02. Resource Allocation:</strong> Assign resources and a project manager to provide updates.</li>
          <li><strong>03. Execution:</strong> Concept art, storyboard, animation, compositing—all executed professionally.</li>
          <li><strong>04. Quality Check:</strong> Multi-stage quality control to ensure 99% SLA adherence.</li>
          <li><strong>05. Output:</strong> Deliver final files in JPEG, TIFF, PNG, PDF, etc.</li>
        </ul>
      </div>

      {/* Software Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Software We Leverage</h2>
        <p className="text-center text-gray-700 text-lg">
          Autodesk Maya, 3Ds Max, Adobe After Effects, Silhouette, Nuke
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for 2D Animation</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Entrust your animation projects to Nimble for innovation, efficiency, and visually stunning results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
};

export default Animation2DServices;
