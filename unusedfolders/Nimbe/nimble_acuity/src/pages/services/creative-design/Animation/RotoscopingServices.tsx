import React from "react";
import CSmainmenu from "../CSmainmenu";

const RotoscopingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium Rotoscoping Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Avail innovative rotoscoping services for TV shows, films, daily soaps, advertisements, and more with Nimble Auity.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg mb-6">
          Nimble provides premium rotoscoping animation services to transform average videos into creative blends of animation and reality. Our skilled VFX rotoscoping artists help filmmakers and businesses create powerful motion films by extracting video elements and integrating them seamlessly into the scenes you want.
        </p>
        <p className="text-gray-700 text-lg">
          Partnering with Nimble allows you to minimize production challenges and get customized rotoscoping animation services for exceptional results.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Rotoscoping Services We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Effects Painting</h3>
            <p>Add effects to scenes using frame-by-frame or automation tools, generating elaborate particle effects.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Cloning & Touch-Ups</h3>
            <p>Remove scratches, logos, wires, rigs, and dust, while maintaining spatial and temporal cloning.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Stereo Conversion</h3>
            <p>Isolate elements in mono sequences to create depth maps, enabling stereo parallax for immersive visuals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Matte Creation</h3>
            <p>Create holdout mattes using rotosplining, mask overlay, and extraction for outstanding visual effects.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Stereo Workflow</h3>
            <p>Integrate footage from multiple cameras seamlessly to enable comfortable viewing and high-quality outputs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Motion Tracking</h3>
            <p>Digitize movements using advanced motion tracking tools to create visually enticing videos.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Photoshop Rotoscope Animation</h3>
            <p>Includes graphic retouching, DTP layouts, video editing, wedding, real estate, events, and Go-Pro video editing.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Rotoscoping?</h2>
        <ul className="space-y-4 text-gray-700 text-lg max-w-4xl mx-auto">
          <li><strong>Shorter Turnaround Time:</strong> Quick delivery without compromising quality.</li>
          <li><strong>Skilled & Experienced Technical Team:</strong> Years of experience in VFX and rotoscoping.</li>
          <li><strong>Extended Operational Support:</strong> Backup and continuity plans for uninterrupted project completion.</li>
          <li><strong>Higher Cost Efficiency:</strong> Flexible billing and pilot projects to estimate costs effectively.</li>
          <li><strong>Uncompromised Data Security:</strong> Secure platforms and servers to handle video footage safely.</li>
        </ul>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg text-center">
          <li>Artwork Services</li>
          <li>Graphic Design Services</li>
          <li>Illustration Services</li>
          <li>Animation Services</li>
          <li>Video Editing Services</li>
          <li>Audio Editing Services</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Rotoscoping</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Nimble transforms your videos into next-level content, redefining quality and innovation in motion graphics and VFX.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Connect with Us
        </a>
      </div>
    </section>
  );
};

export default RotoscopingServices;
