import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const UiUxDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              UI/UX Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience the future of interface design with **Nimble Acuity**. We blend advanced technology with a human-centric approach to craft seamless and engaging digital experiences.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In today's competitive landscape, a poorly designed user interface can be a major deterrent for your potential customers. At **Nimble Acuity**, we deliver top-tier UI/UX design services that effectively combine the latest design trends with the unique needs of your users. Our meticulous user research, testing, and collaborative approach ensure your digital product has a competitive edge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We pioneer the integration of advanced technologies like AI/ML to enhance personalization, and utilize AR/VR to create immersive, interactive experiences. Our services are tailored to meet your marketing and customer service objectives—from improved conversion rates to increased user engagement and retention.
            </p>
          </div>

          {/* Core Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive UI/UX Design Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a full spectrum of UI/UX design services, from initial research to final implementation, to craft intuitive and engaging digital experiences across all platforms. Our core offerings include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>UI/UX Research & Strategy:</strong> We blend data-driven insights with user aspirations to create a dynamic, scalable design strategy.</li>
              <li><strong>Information Architecture:</strong> We structure your digital content to ensure a fluid user journey and high conversion rates.</li>
              <li><strong>Wireframing & Prototyping:</strong> We create detailed wireframes and dynamic prototypes to visualize functionality and validate user flow early on.</li>
              <li><strong>Visual Design:</strong> Our team blends aesthetics with functionality, integrating your brand's identity to create a strong visual impact.</li>
              <li><strong>Responsive Design:</strong> We ensure a uniform and seamless user experience across all devices, from desktops to mobile phones.</li>
              <li><strong>Usability Testing:</strong> We conduct rigorous testing to ensure your interfaces are intuitive and user-friendly, propelling user satisfaction and business growth.</li>
              <li><strong>Application Redesign:</strong> We revitalize existing platforms by leveraging user data to enhance visual appeal and user-friendliness.</li>
              <li><strong>Specialized Design Services:</strong> We offer expertise in Mobile App, Web, E-commerce, BI Dashboard, and AR/VR UI/UX design.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with us means you're not just getting a design service; you're gaining a strategic partner dedicated to your success. Here’s why clients choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing:</strong> We offer customized pricing plans that align with your budget while delivering maximum value.</li>
              <li><strong>Dedicated Team:</strong> Our team of skilled designers and project managers is committed to clear communication, efficient workflows, and timely delivery.</li>
              <li><strong>Innovative Designs:</strong> We stay ahead of the curve by crafting immersive, human-centric designs for AR/VR, IoT, and other advanced applications.</li>
              <li><strong>Rigorous Testing:</strong> We deploy a rigorous UI testing process to identify and rectify bugs, ensuring a seamless, error-free user experience.</li>
              <li><strong>Comprehensive Concept Presentation:</strong> We define core features and information architecture meticulously to build a strong foundation for every project.</li>
              <li><strong>Holistic Approach:</strong> Our services are designed to deliver impactful user experiences that are closely aligned with your business goals, from concept to post-launch support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Digital Experience?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** leverages decades of industry expertise to deliver immaculate design solutions that speak volumes about your brand. We believe in crafting visually stunning and functionally superior interfaces that captivate and convert.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us help you bring your vision to life. Contact us today and let’s begin this journey of transformation together.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Our Experts
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiUxDevelopment;