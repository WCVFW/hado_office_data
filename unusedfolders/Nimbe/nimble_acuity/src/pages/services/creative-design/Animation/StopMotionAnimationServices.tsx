import React from "react";
import CSmainmenu from "../CSmainmenu";

const StopMotionAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Stop Motion Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Access high-quality stop motion animation videos with Nimble Auity at rates starting from $10/hour.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Create short films, promotional videos, or TV commercials using stop motion animation. Nimble Auity provides professional stop motion animation services for creative studios, agencies, solo artists, and individuals.
        </p>
        <p>
          Our team leverages industry best practices, cinematographic principles, and the latest animation tools to deliver engaging, vivid, and high-quality stop motion videos.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Stop Motion Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Animation Design and Development</h3>
            <p>
              We create original concepts, vivid characters, props, installations, and complete stage sets for compelling stop motion videos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Character Creation and Scripting</h3>
            <p>
              Our team creates memorable characters with 3D printing and structuring while delivering custom scripts tailored to your requirements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Storyboarding</h3>
            <p>
              Accurate and made-to-order storyboards help visualize your storyline and detect inconsistencies before production.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Animation</h3>
            <p>
              Robust, storyline-driven character or object animations designed to tell your story in an engaging and compelling way.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Voice Recording</h3>
            <p>
              Seamless integration of audio with stop motion videos using experienced voiceover artists.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Stop Motion Editing</h3>
            <p>
              Professional editing using advanced animation tools and techniques to ensure a world-class output.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Visual Effects and Compositing</h3>
            <p>
              Enhance your animations with VFX, green screens, lighting adjustments, and digital extensions for a seamless final video.
            </p>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-700">
          <div>Rotoscoping Services</div>
          <div>Animatics Services</div>
          <div>Visual Effects Services</div>
          <div>Flash Animation Services</div>
          <div>3D Animation Services</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Stop Motion Animation Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Affordable and cost-effective pricing options.</li>
          <li>High-quality services with ISO certification.</li>
          <li>World-class infrastructure and cutting-edge tools.</li>
          <li>Structured, streamlined process for reliable delivery.</li>
          <li>Experienced animation team with 26+ years in the industry.</li>
          <li>Secure handling of all project data.</li>
          <li>Fast turnaround to meet project deadlines.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Children's Book Writer</h3>
            <p>
              Nimble Auity provided high-quality 2D animation services within a tight schedule for a leading UK-based children's author.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation Services for Swiss Natural Product Dealer</h3>
            <p>
              Four full-time animators created world-class holograms using 3DS Max & Maya in just twelve working days.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Stop Motion Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity’s expert team to create contemporary, creative, reliable, and cost-effective stop motion animation videos.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-500 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default StopMotionAnimationServices;
