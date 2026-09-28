import React from "react";
import CSmainmenu from "../CSmainmenu";

const ThreeDAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">3D Animation Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Meet project timelines and reduce overheads with Nimble’s 3D animation services. Benefit from cost savings, data security, consistent quality, and rapid project completion.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Gaming companies and animation studios often face budget constraints. Nimble ensures affordability without compromising quality, delivering over 60% savings while maximizing project value.
        </p>
        <p>
          Data security is our priority, especially for European clients, addressing GDPR and ISO compliance. Our full-time, permanent team ensures consistent, reliable, and high-quality 3D animations, meeting deadlines with precision and creativity.
        </p>
      </div>

      {/* 3D Animation Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">3D Animation Services We Offer</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Character Animation</h3>
            <p>
              Captivating character animations with fluid movements, realistic expressions, and believable interactions for games, films, and interactive media.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Animation Walkthroughs</h3>
            <p>
              Virtual tours of architectural or product designs with realistic lighting, textures, and spatial arrangements, highlighting every detail.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Game Animation</h3>
            <p>
              Fluid and immersive animations enhancing gameplay with detailed character, environment, and action sequences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Product Animation</h3>
            <p>
              Highlight product features and functionality through visually stunning, realistic animations tailored to your audience.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Architectural Animation</h3>
            <p>
              Walkthroughs and visualizations for confident decision-making, featuring realistic lighting, materials, and environmental elements.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our 3D Animation Workflow</h2>
        <ul className="space-y-6 text-gray-700 text-lg max-w-4xl mx-auto">
          <li><strong>01. Project Scope:</strong> Define project requirements, turnaround time, pricing, and target audience.</li>
          <li><strong>02. Resource Allocation:</strong> Assign resources and a project manager for updates and coordination.</li>
          <li><strong>03. Creation:</strong> Conduct pre-production, 3D production, asset creation, and modeling.</li>
          <li><strong>04. Review:</strong> Multi-stage internal QA to ensure highest quality output.</li>
          <li><strong>05. Output:</strong> Deliver 3D animations in chosen file formats via secure platforms.</li>
        </ul>
      </div>

      {/* Industries & Software */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries & Software We Use</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">Industries We Cater To</h3>
            <ul className="list-disc pl-5">
              <li>Architectural & Real Estate</li>
              <li>e-Commerce</li>
              <li>Healthcare</li>
              <li>Game Development Studios</li>
              <li>Educational</li>
              <li>Product Design & Manufacturing</li>
              <li>Entertainment</li>
              <li>Advertising & Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Software We Use</h3>
            <ul className="list-disc pl-5">
              <li>Autodesk Maya</li>
              <li>3ds Max</li>
              <li>Adobe After Effects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for 3D Animation?</h2>
        <ul className="space-y-6 text-gray-700 text-lg max-w-4xl mx-auto">
          <li><strong>Expert Team:</strong> Skilled animators bring your ideas to life with creativity and precision.</li>
          <li><strong>Fast Turnaround:</strong> Swift project completion while maintaining quality.</li>
          <li><strong>24/7 Support:</strong> Prompt responses and reliable assistance throughout the project.</li>
          <li><strong>Data Security:</strong> GDPR and ISO 9001:2015 compliance for client confidentiality.</li>
          <li><strong>Scalability:</strong> Adjust project scope seamlessly from small to large-scale productions.</li>
          <li><strong>High-quality Deliverables:</strong> Meticulous attention to detail in every frame.</li>
          <li><strong>Design Revisions:</strong> Input welcomed to ensure vision is fully realized.</li>
          <li><strong>Flexible Pricing:</strong> Competitive options to optimize budget.</li>
          <li><strong>Effective Communication:</strong> Clear collaboration for smooth workflow.</li>
        </ul>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700">
          <div>2D Animation Services</div>
          <div>Artwork Services</div>
          <div>Graphic Design Services</div>
          <div>Illustration Services</div>
          <div>Animation Services</div>
          <div>Video Editing Services</div>
          <div>Audio Editing Services</div>
          <div>Storyboard Services</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Outsource 3D Animation Services for Efficiency</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Reduce overheads, ensure consistent quality, and leverage Nimble’s scalable, secure, and high-quality 3D animation services.
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

export default ThreeDAnimationServices;
