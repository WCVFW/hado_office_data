import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BootstrapDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Bootstrap Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build ready-to-scale, robust websites using the power of Bootstrap's pre-styled HTML, CSS, and JS components, with rates as low as $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The world is moving towards a mobile-first business model, focusing on responsive, user-friendly front ends for a scalable user experience. If you lack the expertise to adapt to this change, you need a specialist to help you build modern, future-proof websites.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is an early adopter of the newest web development technologies and frameworks. Our Bootstrap web design leverages pre-styled web components to simplify user interaction and provides a sense of personalization. Partner with us to stay ahead of the next wave of change and get the best of this technology on your site.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Bootstrap Web Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are constantly outfitting older technology with contemporary innovations like Bootstrap to transform the digital experience. Our approach brings the best of the framework to offer the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Bootstrap Customization:</strong> We use the latest version of Bootstrap to perform theming, overriding variables with custom CSS and Sass to create a unique look and feel without modifying the core files.</li>
              <li><strong>Version Upgrade:</strong> We provide expert support to help you upgrade from older Bootstrap versions to the latest, giving you access to advanced features and better browser compatibility.</li>
              <li><strong>Theme Implementation:</strong> Our team takes care of the challenge of implementing a Bootstrap theme from scratch, ensuring a custom design that supports your database and business needs.</li>
              <li><strong>Support & Maintenance:</strong> We offer a comprehensive maintenance solution, including diagnostics, bug fixes, and feature updates to keep your web application optimized and up-to-date.</li>
              <li><strong>Cross-Platform Integration:</strong> Our professional developers handle browser compatibility, JavaScript and jQuery plugin integration, and simple cross-platform integration to ensure seamless functionality.</li>
              <li><strong>Bootstrap Development:</strong> We develop advanced features using HTML and CSS templates to ensure your website and applications are more responsive and provide a personalized experience.</li>
              <li><strong>Expert Consultation:</strong> We offer world-class consultation services to provide expert advice and technical assistance, ensuring your development progress stays on schedule.</li>
              <li><strong>Application Re-coding:</strong> If your app needs re-coding to optimize existing features or incorporate new ones, we offer re-coding support to enhance app functionality.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading provider of Bootstrap web development services, we have several key differentiators that set us apart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Pricing:</strong> Our services offer ultimate value because they are priced affordably, allowing businesses to pick facets that are value-added for their needs.</li>
              <li><strong>High-Quality Services:</strong> We have dedicated QA teams to run rigorous tests, ensuring consistent value and a superior user experience.</li>
              <li><strong>Rapid Turnaround:</strong> Our efficient processes allow us to develop and deliver Bootstrap solutions at blazing speeds.</li>
              <li><strong>Scalable Solutions:</strong> We offer highly scalable solutions that can be easily adjusted to ease the burden and constraints on your backend.</li>
              <li><strong>ISO Certified:</strong> We are an ISO-certified service provider, ensuring quality and a commitment to meeting client expectations.</li>
              <li><strong>Data Security:</strong> Your data remains safe with us, as we have ISO/IEC 27001:2022 accreditation for managing data with prudence.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Bootstrap?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we have professional teams that count on advanced Bootstrap web development practices to offer world-class services that are both affordable and scalable. From implementing smart, stand-alone web features to full-scale Bootstrap web development, we take on challenges effortlessly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With over 26 years of experience in software technologies, we remain unbeaten as a top Bootstrap web development service provider in the industry. Get in touch with us now to get started.
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

export default BootstrapDevelopment;