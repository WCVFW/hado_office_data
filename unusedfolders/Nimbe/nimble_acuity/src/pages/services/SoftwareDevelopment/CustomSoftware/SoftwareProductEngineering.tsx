import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareProductEngineering: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Product Engineering
            </h2>
            <p className="text-lg text-gray-600">
              Our software engineering services are designed to help you keep pace with innovation and modernization.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Product engineering is a specialized area of software development where a product is viewed beyond its features to have an expansive look at outcomes and user experiences. It helps to accelerate and modernize software development in keeping with evolving business needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted software product engineering service provider, Nimble Acuity specializes in software product assessment and design, software product development, software platform engineering, software product re-engineering, and adopting modern development processes.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Product Engineering Offerings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Product Assessment and Design</h4>
                <p className="text-gray-700 mb-2">We evaluate your requirements and design a software solution accordingly. We specialize in:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Drawing Product Architecture</li>
                  <li>Product Development Roadmap</li>
                  <li>Product Prototyping</li>
                  <li>Specifying Technical Requirements</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Product Development</h4>
                <p className="text-gray-700 mb-2">We assist you in the development of an application, strictly in keeping with the product assessment and design blueprint. Some of our solutions include:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>System Software Products</li>
                  <li>Programming Software Products</li>
                  <li>Application Software Products</li>
                  <li>Embedded Software Products</li>
                </ul>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Platform Engineering</h4>
                <p className="text-gray-700 mb-2">This service enhances engineering capabilities and develops the right products. Our clients leverage this service to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Leverage existing platforms and technologies</li>
                  <li>Adopt new platforms and technology</li>
                  <li>Migrate to cloud platforms</li>
                  <li>Enterprise DevOps</li>
                  <li>Platform Automation</li>
                  <li>Device and Embedded Engineering</li>
                  <li>Engineering Modernization</li>
                  <li>Site Reliability Engineering</li>
                </ul>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Product Re-engineering</h4>
                <p className="text-gray-700 mb-2">This service aims to optimize your product's efficiency by adding new functionalities and infusing the latest technology. We assist you to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Upgrade legacy systems to meet performance levels</li>
                  <li>Integrate advanced software with existing enterprise software</li>
                  <li>Review and modify codes</li>
                  <li>Transition to a new platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-efficient Services:</strong> We provide our clients with maximum cost savings throughout the development process.</li>
              <li><strong>Faster Time to Market:</strong> We guarantee a faster time to market by eliminating all waste in the development process.</li>
              <li><strong>Platform-based approach:</strong> We follow a platform-based approach to provide our services, which gives our clients a competitive advantage.</li>
              <li><strong>Technology Agnostic Solutions:</strong> We do not prefer a particular technology but base our solutions on the most appropriate one, which helps us effectively address every type of complexity.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your Software?
            </h3>
            <p className="text-gray-700 mb-6">
              We develop software product engineering solutions to assist our clients in staying current with the latest technologies and platforms. We align these with your business goals to enable you to deliver long-term value to your clients and adapt easily to future innovations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for the best software product engineering services, get in touch with our experts now.
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

export default SoftwareProductEngineering;