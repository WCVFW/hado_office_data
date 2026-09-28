import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const KenticoDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Kentico CMS Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to enterprise-level functionalities and highly secure systems at cost-effective prices by choosing our Kentico CMS development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the need for a reliable and cost-effective CMS that offers enterprise-level functionalities and robust data security. **Kentico CMS** is a powerful platform that provides a unified solution for content management, e-commerce, and online marketing. Our skilled and experienced Kentico CMS developers are dedicated to providing you with the highest quality development services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We leverage the latest Kentico web development software and tools to deliver top-notch services that cater to all your unique business requirements. Our goal is to provide seamless, secure, and scalable solutions that help you achieve your digital goals.
            </p>
          </div>

          {/* Our Kentico Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Kentico Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kentico Integration Services</h4>
                <p>Our team consists of highly-skilled experts who can handle all your integration needs. We leverage the latest tools to ensure all system modules are well-integrated and function smoothly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kentico Migration Services</h4>
                <p>We have the skills and expertise to help you migrate from any existing CMS to Kentico. We ensure a smooth, streamlined migration of your website with no data loss and minimal downtime.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kentico E-commerce Solutions</h4>
                <p>We provide accurate and high-quality e-commerce solutions using Kentico CMS. Our services can help you increase website visitors, boost sales, and provide a superior online shopping experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kentico Consulting Services</h4>
                <p>Our team includes experienced Kentico consultants who can provide expert guidance and support for all your consulting requirements, leveraging industry-standard tools and technologies.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our flexible and cost-effective pricing plans are designed to suit your business requirements and budget.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, we guarantee that all your data is completely secure and confidential.</li>
              <li><strong>High-Quality Services:</strong> We are an ISO-certified organization, which ensures that all Kentico development services we deliver are of the best quality and are error-free.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated manager to be your single point of contact, making communication and project management seamless.</li>
              <li><strong>Skilled Kentico Developers:</strong> Our team consists of highly-skilled and experienced Kentico web development experts who can handle all your needs with ease.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available at all times to answer your queries and provide timely support.</li>
              <li><strong>Highly Scalable Solutions:</strong> Our services are scalable, with the bandwidth to ramp up the project team size as and when you need it.</li>
              <li><strong>Short Turnaround Time:</strong> Our multiple delivery locations enable us to deliver the best services within a quick turnaround time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Kentico?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing top-tier Kentico CMS development services. We have some of the most experienced and skilled experts on board who leverage the latest tools to deliver superior-quality services.
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

export default KenticoDevelopment;