import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GameTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Game Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your game software tested for functionality, user-friendliness, platform compatibility, and more.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              You've developed a game, but what's next? It's crucial to test it under dynamic conditions to understand gameplay performance with peak consumption of memory, processing, and power. It's often inefficient to assign game testing to in-house staff or new hires. This is where **Nimble Acuity** comes in.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers advanced game testing solutions with high-end testing suites and experienced testers. If you're looking for a game testing service provider you can trust, your search ends with us.
            </p>
          </div>

          {/* Game Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Game Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At **Nimble Acuity**, we test games using high-end testing suites. We run all possible parameters to test functionality, platform compatibility, load, and more. Our game testing services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Functional Testing</h4>
                <p>Functional testing is crucial for valuable insights. We have the in-house expertise and tools to discover hidden bugs by testing a game's many functionalities parametrically, saving you from separate investments.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Multi-Platform Testing</h4>
                <p>Our specialists can run your games on most modern and legacy platforms, pushing performance to its limits. We test behavior on each platform to find and fix bugs, ensuring your game is compatible with a wide range of devices.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Localization Testing</h4>
                <p>We ensure the translation of in-game texts and audio is accurate for users in all geographies. Our experts check how the content is portrayed across different language settings and flag bugs to be fixed before commercialization.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Load Testing</h4>
                <p>We simulate games with single-user and multi-user settings to evaluate performance under dynamic loads. This helps you understand the game's behavior and ensure it doesn't fail under peak usage.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              What makes us a top game testing company? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-effective Pricing:</strong> Our game testing services are affordable solutions designed to provide the highest return on your investment.</li>
              <li><strong>High-quality Services:</strong> We are consistent in our quality and make no compromises, which has earned us the ISO 9001:2015 certification.</li>
              <li><strong>Rapid Turnaround Time:</strong> Our services are all about agility. We expedite your project by delivering test reports and debugged games within the agreed-upon timeframe.</li>
              <li><strong>Scalable Solutions:</strong> We offer highly scalable game testing solutions that can be adjusted to meet your specific project needs.</li>
              <li><strong>Data Security:</strong> Your data is 100% safe with us. We take great care to ensure digital security and confidentiality.</li>
              <li><strong>Round-the-Clock Support:</strong> Our support staff can be contacted at any time through your preferred means—phone, email, or web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch a Flawless Game?
            </h3>
            <p className="text-gray-700 mb-6">
              Only at **Nimble Acuity** will you find professional teams, a robust infrastructure, and advanced testing suites in one place. We leave no stone unturned to provide world-class game testing services. With extensive experience in software testing, we are pioneers in the industry.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default GameTesting;