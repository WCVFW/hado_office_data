import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WordPressDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              WordPress Website Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize the functionality of your Content Management System to build an agile and winning website with our expert WordPress development team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Transforming your creative ideas into a functional website while managing a business can be overwhelming. Fortunately, Content Management Systems (CMS) like WordPress offer reliable solutions. **Nimble Acuity** specializes in WordPress website development, helping businesses create and optimize their online presence to drive revenue and enhance customer experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our **WordPress web development** team has significant industry experience and the technical know-how to create secure, SEO-friendly, and result-driven websites. We assist companies of all sizes and industries in building a high-class, easy-to-navigate website. Our expertise in customizing and leveraging WordPress-supporting services makes us a preferred WordPress development company.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our WordPress Web Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Top-performing websites use various strategic approaches to entice leads and generate revenue. Our experts can help you integrate visually appealing details and supporting services to improve your website's performance. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom WordPress Development:</strong> We leverage third-party integrations and multiple plugins to upgrade your website with a best-in-class, human-friendly design.</li>
              <li><strong>WordPress Plugin Development:</strong> Our professionally curated, custom-made plugins enhance your website's functionality and user experience.</li>
              <li><strong>eCommerce Development:</strong> We help you transform and optimize your eCommerce website, making it a powerful revenue-generating platform.</li>
              <li><strong>Theme Development & Design:</strong> We understand your unique needs and offer custom templates and themes to transform the appearance and feel of your website.</li>
              <li><strong>WordPress Migration:</strong> Our experts ensure a smooth transition from one server to another without affecting your website's functionality.</li>
              <li><strong>WordPress Maintenance & Support:</strong> We offer regular maintenance and support to ensure quick updates and keep your website's plugins up to date.</li>
              <li><strong>Blog & Content Development:</strong> We customize WordPress to accommodate rich, information-centric blogs with various categories, plugins, and widgets.</li>
              <li><strong>WooCommerce Store Services:</strong> We help you build a customized, open-source eCommerce platform with the exact features you need to improve functionality.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With over two decades of experience, we have partnered with clients across the globe, from large enterprises to small businesses. Here's why you should choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Quality Assurance:</strong> As an ISO-certified company, we have a multi-level quality check process to ensure we deliver only high-quality services.</li>
              <li><strong>Expertise:</strong> Our team has the knowledge, skills, and experience to work with the latest web development tools and technologies.</li>
              <li><strong>Follow-up & Maintenance:</strong> We offer regular maintenance and support to help your website stay relevant to the latest market trends.</li>
              <li><strong>Seamless Experience:</strong> We specialize in creating websites that provide a seamless browsing experience on all types of devices.</li>
              <li><strong>SEO-Friendly Websites:</strong> We ensure your website is optimized for search engines to boost your online visibility and rankings.</li>
              <li><strong>Faster Turnaround:</strong> We leverage our global delivery centers to provide quick and efficient services.</li>
              <li><strong>24/7 Availability:</strong> We assign a dedicated project manager to ensure constant communication and keep you updated on every stage of the process.</li>
              <li><strong>Cost-Effective Solutions:</strong> Our omnichannel approach and expertise allow us to offer world-class, creative WordPress websites at competitive prices.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a New WordPress Website?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading **WordPress website development company** with a track record of providing a range of services to clients globally. Our highly competent web designers and developers have the expertise to help you increase search engine responsiveness, generate leads, and boost brand visibility.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a creative, SEO-friendly, and high-quality WordPress web development service provider, get in touch with us today!
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

export default WordPressDevelopment;