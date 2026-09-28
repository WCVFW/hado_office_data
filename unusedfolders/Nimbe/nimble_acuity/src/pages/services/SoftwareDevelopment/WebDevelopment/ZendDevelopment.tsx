import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ZendDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Zend Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build secure and reliable web services with our high-performance Zend development services, with prices starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Zend framework is a high-performing extension of the PHP framework, known for its simplicity, object-oriented programming, and a thoroughly tested, agile codebase. It is the ideal choice for building professional, reliable, and secure web services. It also offers flexible licensing options and supports modern databases like MySQL, Oracle, SQL Server, and PostgreSQL.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of **Zend development services**, ready to address your full range of requirements. We can help you build secure, scalable, and high-quality Web 2.0 applications, leveraging Zend's MVC implementation to support PHP templates and layouts.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Zend Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our highly reputed team has significant experience and makes use of stringent QA processes to ensure all our Zend development services meet the highest quality standards. Our offerings include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Web Application Development:</strong> We use the Zend framework to develop complex web applications, web portals, and custom business-specific applications.</li>
              <li><strong>Zend Migration Services:</strong> We simplify migration between Zend platforms, assessing your application's code for compatibility issues with newer PHP versions.</li>
              <li><strong>Third-party App Integration:</strong> We have the expertise to securely and reliably integrate your Zend web services with various third-party APIs.</li>
              <li><strong>CMS Development:</strong> We develop highly custom, robust, and scalable content management systems using the Zend framework.</li>
              <li><strong>eCommerce Development:</strong> We deliver comprehensive Zend eCommerce development services and provide custom, immersive themes to make your website stand out.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you partner with us for your Zend development needs, you benefit from a professional and reliable team dedicated to your project's success. Here’s why clients trust us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Team:</strong> Our Zend development team has extensive experience in providing robust software development services.</li>
              <li><strong>High-Quality Services:</strong> We are committed to using robust QA processes and multi-level quality checks to deliver the highest quality services.</li>
              <li><strong>Structured Process:</strong> We utilize streamlined and efficient processes to ensure on-time delivery of all our solutions.</li>
              <li><strong>Cutting-edge Tools:</strong> We are highly proficient in using the latest best practices and technologies to provide cutting-edge services.</li>
              <li><strong>Affordable Pricing:</strong> Our solutions are offered at highly competitive rates, designed to provide you with the best value for your investment.</li>
              <li><strong>Data Security:</strong> We prioritize the safety of your data by using robust security protocols and privacy policies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Zend?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of professional and cost-effective Zend development services. Our highly qualified and experienced experts have the necessary background to efficiently and effectively address any of your Zend development needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a trusted partner to bring your web services to life, get in touch with us today!
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

export default ZendDevelopment;