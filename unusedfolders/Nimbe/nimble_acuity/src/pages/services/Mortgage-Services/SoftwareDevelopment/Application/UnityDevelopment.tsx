import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const UnityDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Unity 3D Game Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build world-class, cross-platform gaming solutions for a real-time, highly immersive 3D gaming experience.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to take the gaming industry by storm? Are you looking forward to creating a gaming experience like no other? Then you have come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a leading **Unity 3D game development service** provider offering customized 3D game development services across various industry verticals. Our expert **Unity developers** have years of experience in creating enthralling, engaging, and highly interactive 3D games that have the power to hook millions of players across the world to their screens.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Unity 3D Game Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a professional **Unity 3D game development service** providing company, we strive to be your one-stop destination for all your game development requirements. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Mobile Game Development:</strong> Our game development experts have profound experience in creating high-end mobile gaming solutions for Android, iOS, and Windows platforms.</li>
              <li><strong>Unity-Based PC Games:</strong> We leverage the exceptional Unity platform to build games that can smoothly run on a PC, including multiplayer features for striking gamification.</li>
              <li><strong>AR-Based Unity Games:</strong> Our developers use high-quality graphics and cutting-edge technology to blend the virtual and real-world for a truly exceptional and immersive gaming experience.</li>
              <li><strong>VR Games:</strong> We use innovative technologies and a state-of-the-art Unity platform to create technically advanced virtual reality games that ensure a 360-degree gaming stance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for 3D Unity Game Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing Unity 3D game development services to us can help you enjoy the following perks:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Instant Access to Certified Unity Experts:</strong> Our certified developers have hands-on experience working on various gaming prototypes and can provide end-to-end services.</li>
              <li><strong>Cross-Platform Solutions:</strong> Our expert developers use the latest tools and agile methodology to create rich and engaging multiplayer games for the device and platform of your choice.</li>
              <li><strong>Fast Turnaround Time:</strong> Thanks to our global delivery centers, we provide our services within the shortest possible time.</li>
              <li><strong>Assured Quality:</strong> Our quality analysts rigorously test our games to make sure they are free of bugs, glitches, errors, and performance issues.</li>
              <li><strong>24/7 Support:</strong> Our service executives are available 24/7, 365 days a year, and assure instant support and quick resolution of all your queries and concerns.</li>
              <li><strong>Complete Peace of Mind:</strong> From conceptualization to deployment, we take care of all your 3D game development requirements, so that you can focus on improving your fan base.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Game?
            </h3>
            <p className="text-gray-700 mb-6">
              Looking for **Unity 3D game development services**? Get in touch with us right away and build innovative, futuristic games that can help you take the user experience to the next level and allow you to stay on top of the charts. Our team combines potential skills with creativity to build innovative games that turn your ideas into reality.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us know your **Unity 3D game development** requirements, and we'll get back to you with a plan tailored just for you.
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

export default UnityDevelopment;