import React from "react";
import CSmainmenu from "../CSmainmenu";

const VRPostProduction: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Virtual Reality Post-production Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Handle the unique demands of VR production with our post-production services starting at $10/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Whether you are a business, ad agency, or video studio, we help scale your virtual reality post-production without the need for costly software or hardware. Our VR post-production experts use the latest tools to deliver immersive and highly compelling virtual experiences.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Our Virtual Reality Post-production Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Effective Project Collaboration:</strong> Create virtual spaces for remote teams to interact with models and workflows efficiently.
          </li>
          <li>
            <strong>VR for Trade Shows & Events:</strong> Present immersive VR experiences to clients at conferences, exhibitions, and events.
          </li>
          <li>
            <strong>Real-time Interaction:</strong> Enable stakeholders to interact virtually for meetings and collaborative sessions.
          </li>
          <li>
            <strong>Prototype Visualization:</strong> Use VR to visualize and interact with prototypes, boosting productivity and reducing costs.
          </li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Real Estate Video Editing</li>
          <li>Film & Storyboarding Services</li>
          <li>Corporate Video Editing</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Outsource VR Post-production to Us</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Affordable pricing starting at $10/hour with guaranteed value.</li>
          <li>26+ years of experience in video and VR post-production services.</li>
          <li>High-quality services adhering to strict ISO standards.</li>
          <li>Quick turnaround times for all VR projects.</li>
          <li>Scalable resources to match project requirements.</li>
          <li>Latest VR tools and technologies for cutting-edge post-production.</li>
          <li>World-class infrastructure and office facilities.</li>
          <li>ISO/IEC 27001:2022 certified for complete data security.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>
              "Ontario-based wedding film company received fast and high-quality VR post-production services for wedding videos."
            </p>
          </li>
          <li>
            <p>
              "A Swedish film production house leveraged our VR and live video editing services for reliable and cost-effective results."
            </p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with VR Post-production</h2>
        <p className="mb-6">
          Experience professional, efficient, reliable, and cost-effective virtual reality post-production services for your projects. Let us help you create immersive VR experiences!
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VRPostProduction;
