import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const RubyOnRails: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ruby on Rails Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage a robust, cost-effective, open-source framework to build custom, data-driven applications that meet your budget and business goals.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Ruby on Rails (RoR)** is an open-source web application framework that uses software engineering designs to help automate coding operations, increasing efficiency and productivity. This makes it an ideal choice for building powerful, scalable web applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of **Ruby on Rails development services** to clients worldwide. We have vast experience in creating secure and scalable applications across various industries, including IT, healthcare, eCommerce, and education. Our team of experienced developers is focused on implementing the latest technology to help you achieve your business goals in the most affordable manner.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Ruby on Rails Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a pioneer in Ruby on Rails development and can deliver high-end solutions for your complex business structures. Some of our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Application Development:</strong> We build tailor-made applications for your unique requirements and can add custom functionalities to your existing mobile or web-based apps.</li>
              <li><strong>CMS/Portal Development:</strong> Our developers have the knowledge and technology to build content management systems (CMS) and other websites using the Ruby on Rails framework.</li>
              <li><strong>RoR Migration Services:</strong> We offer migration services from your legacy system to a modern RoR application, with expertise in migrating all your data successfully.</li>
              <li><strong>RoR Support & Maintenance:</strong> We provide ongoing support to keep your website running optimally, adding new features, updates, and maintenance as needed.</li>
              <li><strong>Third-Party Integration:</strong> Our team can integrate a wide range of third-party APIs and services with your website or web application.</li>
              <li><strong>RoR Consulting:</strong> We provide end-to-end Ruby on Rails consulting to help you implement the best solutions for your business.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading provider of Ruby on Rails development services for a host of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> Our solutions are priced very reasonably, providing the highest return on investment.</li>
              <li><strong>Expert Team:</strong> Our team has over 26 years of experience in providing a full spectrum of software and application development services.</li>
              <li><strong>High-Quality Services:</strong> We are an ISO-certified company and use multi-level quality checks to ensure the highest quality applications.</li>
              <li><strong>Data Security:</strong> We comply with all international data security and privacy laws, ensuring your data is always protected.</li>
              <li><strong>Short Turnaround:</strong> You will always receive our services well within the agreed-upon timeframe.</li>
              <li><strong>24/7 Availability:</strong> We offer round-the-clock support to ensure your system remains up and running.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Rails App?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing a wide range of **Ruby on Rails development services**. Our team is comprised of highly experienced and qualified software developers with significant expertise in creating bespoke applications for a variety of requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for high-quality, robust, and affordable Ruby on Rails development services, get in touch with us today.
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

export default RubyOnRails;