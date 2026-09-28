import React from "react";
import CSmainmenu from "../CSmainmenu";

const TitlingAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Titling Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Our professional animators create modern & interactive animations for titles starting at just $10/hour, making your commercial and marketing videos stand out.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Be it for films, TV programs, commercials, or short animation videos, titling animation builds perception and captures viewer attention. Nimble Auity’s dedicated team leverages 26+ years of expertise to deliver eye-catching, effective titles.
        </p>
        <p>
          We focus on all aspects of titling including background effects, font styling, animation type (2D, 3D, motion graphics, logo animation), and matching music or sound effects.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Titling Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Titling for Opening or Closing Credits</h3>
            <p>Create credits that match the theme and feel of your videos to add an extra punch.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Sequence Titling</h3>
            <p>Design entire title sequences for films or videos according to animation requirements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Titling for Commercials</h3>
            <p>Custom titling services for TV and digital commercials aligned with marketing objectives.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Modifications in Existing Titling</h3>
            <p>Update or freshen up previous titles with expert video editing and animation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">2D and 3D Titling Animation</h3>
            <p>Specialized animators provide both 2D and 3D title animations for unique client needs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Subtitle Animation</h3>
            <p>Add multilingual subtitles to your videos to reach a wider audience.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Logo Reveal Titling Animation</h3>
            <p>Animate logos in 2D, 3D, or simple reveal formats for opening and closing sequences.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Text Animation</h3>
            <p>Create animated text for title sequences, subtitles, or marketing messages.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Flash Titling Animation & Infographics</h3>
            <p>Develop motion graphics and infographic animations for commercials and marketing videos.</p>
          </div>
        </div>
      </div>

      {/* Software Used */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Software We Use</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-center">
          {["Adobe After Effects", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe Illustrator", "Autodesk 3ds Max", "Maya", "Final Cut Pro", "Avid Media Composer"].map((software) => (
            <div key={software} className="bg-white rounded-lg shadow p-4">
              {software}
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Titling Animation Service - Our Process</h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>Titling Needs:</strong> Client briefs our team to build a service plan.</li>
          <li><strong>Data Transfer by Clients:</strong> Videos, logos, and files received securely.</li>
          <li><strong>Animation First Draft and Approval:</strong> Rough storyboard sent for client validation.</li>
          <li><strong>Execution of Finalized Sketch:</strong> Designers create titling animation.</li>
          <li><strong>Final Quality Check:</strong> Internal QC followed by client review and feedback.</li>
          <li><strong>Final Video Renders and Safe Transfer:</strong> Rendered videos sent via secure FTP.</li>
        </ol>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Titling Animations?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Budget-friendly and flexible pricing options.</li>
          <li>Highly qualified and experienced designers.</li>
          <li>Top-quality titling animation solutions for all needs.</li>
          <li>State-of-the-art infrastructure and tools.</li>
          <li>High-end technical support and quick delivery.</li>
          <li>Data security ensured at all levels.</li>
          <li>Scalable services for bulk projects across multiple locations.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation Services for Swiss Natural Product Dealer</h3>
            <p>Nimble’s 4 animation experts designed holograms using 3DS Max & Maya, animating samples from high-res PDFs and PSD files within 12 business days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Children's Book Writer</h3>
            <p>A UK-based children’s writer received hand-drawn 2D animations within the stipulated time from Nimble’s creative animation team.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Titling Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create modern, interactive, and high-quality titling animations for your videos.
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

export default TitlingAnimationServices;
