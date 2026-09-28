import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const LiferayDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Liferay Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to end-to-end Liferay solutions, including portal development, migrations, integrations, and customer portal implementation.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Web portals and digital experiences are common these days, enabling organizations to leverage the immense power of the internet. Liferay is a leading open-source platform that provides an excellent digital experience for creating web portals, mobile websites, and applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity offers skilled solutions to companies interested in using this open-source platform to ensure business growth and success. Our services, which include planning, design, development, and integration, aim to create efficient work environments for our clients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Liferay Application Development Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Workflow:</strong> We design complex or simple workflows for businesses to ensure content is properly published with approvals and other benefits.</li>
              <li><strong>User Management:</strong> Our skilled professionals streamline user management processes in your team and optimize business operations.</li>
              <li><strong>Consulting Services:</strong> We provide Liferay consulting to ensure your company works with the platform efficiently.</li>
              <li><strong>Versioning:</strong> Our professionals help protect your content by automating the review of publishing dates in the best way.</li>
              <li><strong>Targeting Audience:</strong> We deliver unbeatable customer experiences in real-time based on customer location.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Attention to Detail:</strong> Our skilled experts pay attention to every detail to suggest the best possible solutions for project success.</li>
              <li><strong>Affordable Rates:</strong> Our pricing model is a favorable choice, offering quality services at affordable rates with options for customized pricing.</li>
              <li><strong>High-Quality Work:</strong> We adhere to international standards for providing top-notch quality work, ensuring you will not be disappointed with the results.</li>
              <li><strong>Scalability:</strong> We offer highly scalable services, with the infrastructure and resources required to scale up or down on short notice.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Discuss Your Liferay Needs?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has catered to the requirements of a diverse clientele worldwide. Our security experts work meticulously to expose any flaws, threats, or vulnerabilities in your web or mobile applications. We provide world-class software development services at the most competitive prices in the industry.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us for the best and most detailed Liferay services. We will be happy to provide you with a custom quote.
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

export default LiferayDevelopment;