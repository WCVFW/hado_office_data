import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const GameDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Game Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get reasonably priced, high-performing 2D/3D strategy-based or real-time mobile, PC, and console game development solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you want to create a 2D game, VR integrated mobile or web game, social games, or any other online games, Nimble Acuity offers cost-effective game development services with industry-wide best quality and turnaround time. We have a special team of over 200 game developers and designers with extensive experience in providing a wide range of solutions for all platforms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With deep experience in game physics, rendering, AI, scripting, character interaction, and more, Nimble Acuity has become a leading provider of game development services. Our team has worked across all major game development frameworks, including Unity3D, Godot, and Unreal Engine, to deliver custom gaming solutions.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Game Development Services We Provide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Game Console Development</h4>
                <p className="text-gray-700">Our core competency includes creating high-resolution and robust 3D games of all genres. We can develop full-fledged game consoles and implement AI or other custom game mechanisms to suit your needs.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Game Development Services for Business</h4>
                <p className="text-gray-700">We have extensive experience in various mobile game development platforms to deliver solutions in a short turnaround time. We can also develop hybrid games using web technologies to enhance your brand and engage with customers.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Game Development</h4>
                <p className="text-gray-700">We offer fully customized mobile game applications with robust graphics that can run on any platform. We develop everything from simple 2D games to complex 3D Sandbox games with physical interactions and particle rendering.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Game Art Development</h4>
                <p className="text-gray-700">Our complete portfolio includes conceptual art, animation, and genre-based gaming environments. Our designers are masters in tools like Maya and Photoshop to integrate visually artistic concepts into your project.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Game Testing</h4>
                <p className="text-gray-700">We design a custom testing process to check and validate a game's efficiency. Our QA team ensures that each code is robust and the game is tested for compatibility, functionality, and cross-platform adaptability.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Game Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Demand Analysis:</strong> We contact you to evaluate your game ideas, analyze your needs, and plan the next steps.</li>
              <li><strong>Design and Development:</strong> We design the game's architecture and develop prototypes for your approval before coding the game mechanics.</li>
              <li><strong>Testing:</strong> Our QA analysts test the beta version of the game to evaluate each module for performance and compatibility.</li>
              <li><strong>Delivery:</strong> The final game is released on the respective platform.</li>
              <li><strong>Maintenance and Support:</strong> We provide comprehensive maintenance and support to update and maintain the game as needed.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> We offer a flexible pricing model that fits your budget.</li>
              <li><strong>100% Information Security:</strong> We are ISO/IEC 27001:2022 certified, ensuring the security of your data and applications.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Our team uses the best technologies and tools in an advanced work environment.</li>
              <li><strong>Multiple Delivery Centers:</strong> Our global delivery centers leverage local resources to boost turnaround time.</li>
              <li><strong>High Quality:</strong> Our solutions help you boost your brand value and increase ROI with high-quality 2D & 3D games.</li>
              <li><strong>Ease of Scalability:</strong> Our process is designed to meet your exact needs, allowing for seamless scalability.</li>
              <li><strong>Experienced Team:</strong> Our team of over 200 software developers can start your project in the shortest amount of time.</li>
              <li><strong>24/7 Availability:</strong> Our support staff is available around the clock to assist you with any questions.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Bring Your Game Idea to Life?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of game development and other custom software solutions. We have an extensive set of coders, designers, and testers who offer high-performing game development solutions at competitive prices. With over 26 years of experience, we serve more than 1,000 customers worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us today to get an unparalleled game development solution with the industry's best turnaround time.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default GameDevelopmentServices;