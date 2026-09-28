import React from "react";
import CSmainmenu from "../CSmainmenu";

const FeatureFilmAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Feature Film Animation Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Get access to highly creative feature film animations from experienced animators at Nimble starting at just $10/hour.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Feature Film Animation Services We Offer</h2>
        <ul className="space-y-6 text-gray-700 text-lg">
          <li>
            <strong>2D & 3D Feature Film Animations:</strong> High-quality animations tailored to your requirements, engaging your audience effectively.
          </li>
          <li>
            <strong>Character Creation Services:</strong> Top-notch character design using the latest animation tools.
          </li>
          <li>
            <strong>Character Animation Services:</strong> Flawless animations delivered quickly to boost client engagement.
          </li>
          <li>
            <strong>Animation Storyboards:</strong> Creative and compelling storyboards developed by our expert writers and animators.
          </li>
        </ul>
      </div>

      {/* Related Services */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Services You Can Benefit From</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-lg text-center">
          <li>2D Animation Services</li>
          <li>3D Animation Services</li>
          <li>Visual Effects Services</li>
          <li>Rotoscoping Services</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble for Feature Film Animation?</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li><strong>Affordable Pricing:</strong> Cost-effective solutions tailored to your budget.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, keeping your data safe and confidential.</li>
          <li><strong>High-Quality Services:</strong> Error-free animation delivered by certified experts.</li>
          <li><strong>State-of-the-art Infrastructure:</strong> Latest animation tools and world-class workspace.</li>
          <li><strong>Experienced Animators:</strong> Skilled professionals understanding your requirements and delivering superior results.</li>
          <li><strong>Dedicated Manager:</strong> Single point of contact to manage all your requirements seamlessly.</li>
          <li><strong>Highly Scalable Services:</strong> Scale services as per your project needs.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone or email.</li>
          <li><strong>Quick Turnaround:</strong> Multi-timezone operations ensure fast delivery.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Client Success Stories</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>
            <strong>Hologram Animation for Swiss Natural Product Dealer:</strong> Expert animators crafted holograms using 3DS Max & Maya based on client-provided models.
          </li>
          <li>
            <strong>2D Animation for UK-based Children's Book Author:</strong> Skilled animators delivered top-notch 2D animations on time and budget.
          </li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-gray-700 text-lg mb-4">
          "The quality of animations delivered by Nimble during the trial period was exceptional and helped us finalize our new outsourcing partner."
        </p>
        <p className="text-gray-700 font-semibold">
          Director - Operations, Leading Pharmaceutical Company, Netherlands
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble Auity for Feature Film Animation</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Nimble Auity delivers high-quality, cost-effective feature film animation services using the latest tools and technologies.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default FeatureFilmAnimationServices;
