import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DrupalDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Drupal Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get powerful Drupal CMS developed by experienced professionals. Leverage our high-quality services to build a versatile, flexible, and secure web platform.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the need for a customizable and reliable content management system that empowers web innovation. **Drupal**, a PHP/MySQL-based open-source CMS, is widely used for its modular features that allow for the easy creation of dynamic websites. We are a leading provider of Drupal development services, including web development, module creation, and expert consulting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our engineers have extensive experience customizing Drupal-based web portals and sites to deliver attractive, feature-rich CMS systems. We help you make full use of this powerful open-source platform to meet your specific business requirements.
            </p>
          </div>

          {/* Our Drupal CMS Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Drupal Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Web Development & Configuration</h4>
                <p>We provide a full range of services, from basic setup and configuration to building robust digital solutions that streamline your marketing and improve user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Support & Maintenance</h4>
                <p>We offer world-class, round-the-clock support and maintenance packages. Our experts assist with security updates, upgrades, site audits, and ongoing content updates.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Drupal Migration</h4>
                <p>We provide a complete range of migration services, helping you seamlessly convert from a different CMS or upgrade your current Drupal version with no data loss.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Module & Theme Development</h4>
                <p>We build and deploy custom modules to significantly increase the functionality of your website. We also create innovative, custom themes and responsive designs that are both attractive and user-friendly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Customization & Feature Enhancement</h4>
                <p>We offer complete customization services to tailor your Drupal site. This includes everything from navigation and content posting to forums, blogs, SEO, and user permissions.</p>
              </div>
            </div>
          </div>

          {/* Our Drupal Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Development Process
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">01.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Requirement Gathering</h4>
                  <p>We engage with you to meticulously gather and understand your detailed requirements before starting the project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">02.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Design & Planning</h4>
                  <p>We create an initial design and a detailed project plan for your approval, ensuring we are fully aligned with your vision.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">03.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Development & Testing</h4>
                  <p>After design approval, we develop the Drupal CMS using the appropriate modules and extensions. We then conduct extensive testing to catch all bugs and flaws.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">04.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Deployment & Support</h4>
                  <p>Once bugs are addressed, we deploy the Drupal CMS to your live environment and continue to provide ongoing support and maintenance.</p>
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
              <li><strong>Experienced Team:</strong> Our highly-qualified Drupal professionals have extensive experience delivering tailored solutions for a wide variety of end-uses.</li>
              <li><strong>Project Quality:</strong> We adhere to all international quality standards, including ISO, Six Sigma, and ITIL, to ensure flawless project delivery.</li>
              <li><strong>Affordable Prices:</strong> We offer our Drupal development services at extremely competitive prices, with custom solutions to fit your exact budget.</li>
              <li><strong>100% Data Security:</strong> As an ISO/IEC 27001:2022 certified firm, we take all necessary steps to protect your data with a robust security apparatus.</li>
              <li><strong>Superb Infrastructure:</strong> Our team has access to world-class facilities and the latest tools to provide uninterrupted, high-quality service.</li>
              <li><strong>Dedicated Project Manager:</strong> You'll have a single point of contact to address all your project-related needs and queries.</li>
              <li><strong>Faster Turnaround Time:</strong> We are committed to delivering our high-quality work on time, every time, with a proven track record of quick project completion.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Drupal?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides expert resources with hands-on experience in customizing Drupal CMS for corporate websites, forums, e-commerce sites, social networks, and more. With our expertise, you can get a flexible and feature-rich website at a low cost.
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

export default DrupalDevelopment;