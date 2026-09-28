import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebSocketDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              WebSocket Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Create high-quality, real-time applications with diverse functionality by leveraging our expert WebSocket development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the challenges of building modern applications that require instant, two-way communication. If you're struggling to create high-quality apps with diversified functionality, our **WebSocket development services** can help. We analyze your needs and discover opportunities to improve the performance and functionality of your web applications by leveraging the power of WebSockets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have extensive experience in creating high-performance APIs and applications that enable quick and efficient communication between the sender and receiver. Our team works closely with you to determine your exact requirements and offers flexible solutions designed to meet the evolving needs of your enterprise.
            </p>
          </div>

          {/* Our WebSocket Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our WebSocket Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Multi-Platform Operations</h4>
                <p>We develop apps with intuitive and simple functionality that operate smoothly across a wide range of platforms, ensuring a consistent user experience on every device.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Real-Time Applications</h4>
                <p>Our expertise lies in building dynamic, real-time apps, including social feeds, multiplayer games, multimedia chat applications, and location-based services.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">WebSocket API Support</h4>
                <p>We have deep expertise in providing WebSocket APIs that offer cross-browser support, ensuring seamless functionality on major browsers like Chrome, Firefox, and Opera.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">WebSocket Library Implementation</h4>
                <p>We provide comprehensive WebSocket library implementation services using technologies like .NET, ActionScript, Objective-C, Ruby, and Node.JS to build robust and scalable solutions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Collaborative Coding & Editing</h4>
                <p>Our team offers collaborative coding and editing services with version control systems, building applications that are efficient and lightweight without unnecessary server codes.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our services are priced competitively to help you build top-of-the-line apps cost-effectively, providing a high return on investment.</li>
              <li><strong>High-quality Services:</strong> We are an ISO 9001:2015-certified company that uses multi-level quality checks to ensure our solutions are always of the highest quality.</li>
              <li><strong>Experienced Team:</strong> Our team has extensive experience in providing cutting-edge software development solutions and is fully abreast of the latest best practices and techniques.</li>
              <li><strong>Structured Process:</strong> We follow a systematic and highly organized process to deliver all our solutions, ensuring every project step is handled with precision.</li>
              <li><strong>Data Security:</strong> We prioritize the safety of your data and comply with all international data security and privacy laws to ensure complete security.</li>
              <li><strong>Short Turnaround:</strong> We take deadlines very seriously and are committed to delivering our WebSocket development solutions on time, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Real-Time Application?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of WebSocket development services, and we can provide you with customized, cutting-edge solutions that perfectly match your needs. We offer cost-effective rates to help you make the most out of your investment with us.
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

export default WebSocketDevelopment;