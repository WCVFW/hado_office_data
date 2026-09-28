import React from "react";
import CSmainmenu from "../CSmainmenu";

const ExplainerVideoServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Explainer Video Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Our animators explain difficult concepts & messages using highly interactive and interesting explainer audios and videos at prices starting at just $10/hour.
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
          Nimble Auity provides engaging, vivid, and fun ways to enhance communication with your audience. We create custom, high-quality animated videos that help you convey complex concepts intuitively and creatively.
        </p>
        <p>
          Our expert team uses the latest tools and technologies to provide cutting-edge explainer video animation services suitable for all industries and purposes.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explainer Video Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">How-to Video Creation Services</h3>
            <p>
              Create engaging how-to videos that demonstrate processes clearly and concisely to achieve goals effectively.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Ad Film Animation Videos</h3>
            <p>
              High-quality animations for ad films that communicate your brand’s message and leave a lasting impression.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Architectural Animation Videos</h3>
            <p>
              Animate architectural elements for visualization, showcasing construction or finished designs in a compelling manner.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Medical Animation Videos</h3>
            <p>
              Create detailed medical animations to demonstrate procedures or processes with clarity and precision.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Corporate Animation Videos</h3>
            <p>
              Showcase your company, brand, and products with visually compelling corporate animations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Promotional Animation Videos</h3>
            <p>
              Engaging promotional videos designed to connect with your target audience using modern tools and techniques.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Product Demo Animation Videos</h3>
            <p>
              Showcase new products effectively to clients or colleagues with detailed and visually appealing demo animations.
            </p>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          <div>Visual Effects Services</div>
          <div>Rotoscoping Services</div>
          <div>Animatics Services</div>
          <div>Flash Animation Services</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Explainer Video Animations?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Affordable pricing options for projects of any scale.</li>
          <li>High-quality, ISO-certified animation services.</li>
          <li>World-class infrastructure and latest animation tools.</li>
          <li>Structured and streamlined process for consistent results.</li>
          <li>Experienced animation team with 26+ years in the industry.</li>
          <li>Strict data security and confidentiality.</li>
          <li>Fast turnaround time to meet your deadlines.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Children's Book Writer</h3>
            <p>
              Nimble provided quick and high-quality 2D animation services for a UK-based children’s book writer, helping them achieve their vision.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation Services for Swiss Natural Product Dealer</h3>
            <p>
              Four full-time animation experts created high-quality holograms using 3DS Max & Maya software within the stipulated timeframe.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Explainer Video Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create engaging, interactive, and high-quality explainer video animations that communicate your message effectively.
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

export default ExplainerVideoServices;
