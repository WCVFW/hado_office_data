import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SitecoreDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Sitecore Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Create flexible and bespoke content management systems by choosing Nimble Acuity's high-quality Sitecore development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to develop a dynamic and flexible website for your company quickly? Are you on the lookout for skilled and experienced Sitecore development specialists? Then, the best option for you would be to partner with Nimble Acuity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have some of the most experienced and skilled Sitecore development experts on board who can cater to all your needs. We leverage the latest tools and technologies to deliver the best quality services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Sitecore Development Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Sitecore CMS Integration:</strong> Our team has experienced and skilled Sitecore CMS experts who can integrate the platform seamlessly.</li>
              <li><strong>Sitecore CMS Migration:</strong> We make use of the latest tools and technologies to deliver error-free CMS migration services.</li>
              <li><strong>Sitecore E-Commerce Solutions:</strong> Our services help e-commerce clients to increase website traffic, sales, and revenues.</li>
              <li><strong>Sitecore Implementations:</strong> We leverage the power of the latest Sitecore technologies to provide accurate and superior quality implementation services.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Specialists:</strong> We have some of the most experienced and skilled Sitecore development experts on board.</li>
              <li><strong>Affordable Pricing:</strong> Our highly flexible and cost-effective pricing plans will suit your business requirements and budget.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, all data shared with us is completely secure.</li>
              <li><strong>Consistent Quality:</strong> As an ISO certified firm, we ensure all our services are of the best quality and error-free.</li>
              <li><strong>Quick Turnaround Time:</strong> We operate through several global delivery locations, empowering us to deliver services within a quick time.</li>
              <li><strong>Dedicated Point of Contact:</strong> We assign you a dedicated manager who will be your single point of contact.</li>
              <li><strong>24/7 Support:</strong> Our teams are available at all times to answer your queries.</li>
              <li><strong>Scalability:</strong> Our team has the bandwidth to scale up service requirements and ramp up the project team size.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Sitecore Website?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing top-quality Sitecore development services and a series of other custom software development services. We leverage the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient Sitecore development service provider, get in touch with us today!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default SitecoreDevelopment;