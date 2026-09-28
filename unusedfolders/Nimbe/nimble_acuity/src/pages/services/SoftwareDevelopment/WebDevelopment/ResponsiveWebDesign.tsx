import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ResponsiveWebDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Responsive Web Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Step into the future with our intuitive and conversion-focused responsive web design services, built to improve digital experiences with consistent UX across all devices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Businesses worldwide grapple with the complexities of maintaining a responsive website across diverse screen sizes, browsers, and future devices. But what if we told you there's a solution that not only tackles these challenges but also enhances the usability of your website?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our responsive web design services at **Nimble Acuity** are tailored to meet your unique needs. Empowered by over 22 years of professional practice, we ensure cross-browser compatibility and build designs with future technologies in mind. We prioritize performance and usability, creating a seamless user experience regardless of the device. Delegate your web design needs to us so you can focus on what you do best—running your business.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Responsive Web Design Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Delight your customers with seamless browsing by choosing our professional responsive website design services. We specialize in creating sites that are visually stunning and function optimally across all devices and screen sizes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Website Design:</strong> Shape your unique digital footprint with a custom design tailored to your brand, creating a site that captures attention and drives conversions.</li>
              <li><strong>Website Redesign:</strong> Revitalize your online presence with a fresh design that boosts engagement, conversions, and SEO.</li>
              <li><strong>Front-End Development:</strong> We create stunning, high-functioning interfaces that enhance user engagement and satisfaction, ensuring your site is responsive and fast.</li>
              <li><strong>Website Speed Optimization:</strong> We fine-tune your site for maximum speed, improving user experience and search engine rankings.</li>
              <li><strong>e-Commerce Website Design:</strong> Our services deliver user-centric, conversion-optimized designs that create engaging shopping experiences and drive sales.</li>
              <li><strong>Cross-Browser Compatibility:</strong> We test and optimize your site for all major browsers, ensuring your design looks and functions perfectly everywhere.</li>
              <li><strong>Mobile-Friendly Web Design:</strong> Dominate the mobile market with responsive designs that look and work great on all devices, improving user experience and SEO.</li>
              <li><strong>UI/UX Design:</strong> We create intuitive and engaging user interfaces that drive satisfaction and conversions, designing with the user in mind.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading responsive web development company, we help businesses design websites with robust features and offer a number of key benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Efficient Designs:</strong> Our affordable solutions are tailored to fit your budget while delivering a top-notch, mobile-friendly web experience.</li>
              <li><strong>Quality Assurance:</strong> We are an ISO-certified service provider with a multi-level quality assurance process to deliver only the best quality website designs.</li>
              <li><strong>Data Security:</strong> Your data is completely safe with us, as we are an ISO/IEC 27001:2013 ISMS-certified company with robust security systems.</li>
              <li><strong>Modern Infrastructure:</strong> Our team works with state-of-the-art infrastructure and the latest equipment to provide superior services.</li>
              <li><strong>Scalable Solutions:</strong> Our resource-intensive organization can efficiently handle fluctuations in your project volumes, allowing you to meet surging demands.</li>
              <li><strong>Faster Turnaround Time:</strong> We prioritize a quick turnaround to ensure you can launch your website faster and achieve your business goals sooner.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a Responsive Website?
            </h3>
            <p className="text-gray-700 mb-6">
              Our specialized responsive web design services offer an optimal blend of adaptability, usability, and future readiness. We understand the importance of speed and scalability, and our designs are built to accommodate new functionalities as your business grows.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              The benefits of partnering with us go beyond just a well-designed website. You'll gain improved website performance and a future-ready digital presence that contributes to your business's overall success. Connect with us now for a custom proposal.
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

export default ResponsiveWebDesign;