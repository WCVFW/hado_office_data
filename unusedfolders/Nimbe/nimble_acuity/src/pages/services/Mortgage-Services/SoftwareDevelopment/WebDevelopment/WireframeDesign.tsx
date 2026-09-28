import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WireframeDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Wireframe Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Create a solid foundation for your digital platform with powerful wireframe designs that account for potential risks and incorporate best design practices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand that a strong wireframe is the blueprint for any successful digital application. It illustrates the layout, page structure, and the relationship between various components. Our expert teams utilize specialized tools to create powerful wireframes and prototypes, allowing for rapid iterations and testing to meet your project goals in a short timeframe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We perceive your business needs and provide a scalable and robust wireframe design solution at an affordable rate. We work to deliver wireframes that are closely aligned with your project scope, minimizing revisions and allowing you to focus on scaling your business.
            </p>
          </div>

          {/* Our Wireframe Design Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Wireframe Design Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Interactive Prototyping</h4>
                <p>From low-fidelity wireframes to interactive prototypes, we create a unique experience for your customers from the ground up, accounting for different fidelity levels.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Digital Strategy</h4>
                <p>We help you craft a comprehensive digital strategy from scratch to improve your website's visibility and better connect with your client base.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Website Wireframe Design</h4>
                <p>Your website is a crucial communication tool. We design exceptional wireframes that provide better capabilities to realize opportunities and give your brand room to grow.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">User Experience Consulting</h4>
                <p>If your website's user experience needs improvement, our team can configure it with the right wireframe design to boost engagement and user satisfaction.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Landing Page Wireframe Design</h4>
                <p>We create superb wireframe designs for landing pages, opt-in forms, and PPC campaigns, built to inspire click-throughs and increase conversion rates.</p>
              </div>
            </div>
          </div>

          {/* Wireframe Design Implementation Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Wireframe Design Process
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">01.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Strategy & Proposal</h4>
                  <p>We begin by discussing your business challenges and requirements to gain a complete understanding of your needs and project scope.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">02.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Designing</h4>
                  <p>A rough draft of the wireframe design is created and shared with you for initial visualization and feedback.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">03.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Client Approval & Revisions</h4>
                  <p>We incorporate your feedback and make necessary corrections to the design before moving to the next phase.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">04.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Development & Quality Check</h4>
                  <p>We create the final wireframe design, perform a thorough quality check, and ensure the final product meets our service level agreement.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">05.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Go-Live Support</h4>
                  <p>We provide all the necessary support to make the project live and ready for development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Pricing:</strong> Our services are affordably priced, with customizable options to help you achieve further cost savings.</li>
              <li><strong>High-Quality Services:</strong> We have a dedicated quality control team that ensures every wireframe design meets our high standards before being delivered.</li>
              <li><strong>Rapid Turnaround Time:</strong> We work with agility and a commitment to our promised turnaround times, ensuring your project stays on schedule.</li>
              <li><strong>Scalable Solutions:</strong> The solutions we offer can be scaled to fit your needs, allowing you to handle priority tasks and grow your business.</li>
              <li><strong>ISO-Certified Provider:</strong> We are an ISO 9001:2015 certified company, a testament to our commitment to quality and service.</li>
              <li><strong>100% Data Security:</strong> Our robust security infrastructure is designed to keep your data safe and secure from external risks.</li>
              <li><strong>Round-the-Clock Support:</strong> Our qualified agents are available 24/7 to provide timely support and handle your calls and emails.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Design Your Digital Blueprint?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers value-added wireframe design services delivered by trained professionals with access to the best technology. We meticulously capture your needs and deliver designs that serve as the perfect foundation for your project.
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

export default WireframeDesign;