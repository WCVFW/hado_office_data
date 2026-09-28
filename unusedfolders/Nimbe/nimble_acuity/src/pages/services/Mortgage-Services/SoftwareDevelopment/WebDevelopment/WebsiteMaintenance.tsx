import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WebsiteMaintenance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Website Maintenance Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your website is always fast, secure, and up-to-date. Our agile and customizable web maintenance services are designed to enhance performance and security, with prices starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Your website is the digital face of your business, and its performance directly impacts customer perception and engagement. To stand out in a crowded market, consistent web maintenance is a crucial investment. It ensures your site remains a powerful tool for your business, attracting and retaining customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has decades of experience helping businesses of all sizes thrive by providing professional, comprehensive website maintenance. Our in-house team of seasoned experts offers customizable services tailored to your specific needs, allowing you to focus on your core business while we handle the technical details.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Website Maintenance Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a variety of services and packages designed to keep your website in perfect condition. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Content & Design Updates:</strong> We handle text, image, and video updates, as well as changes to CSS, HTML, and color schemes.</li>
              <li><strong>WordPress Maintenance:</strong> We manage regular WordPress updates, security patches, plugin installations, and theme modifications.</li>
              <li><strong>Technical Support:</strong> Our team provides robust technical support to resolve any issues and keep your business running smoothly.</li>
              <li><strong>Overall Site Improvements:</strong> We analyze user feedback and insights to continuously improve your site's appeal, usability, and functionality.</li>
              <li><strong>Interactivity Maintenance:</strong> We help you keep up with the latest tools and technologies to increase your website's interactivity and responsiveness.</li>
              <li><strong>Online Specials Support:</strong> We assist with updates for sales, offers, discounts, and promotions on your e-commerce site to help you stay competitive.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a trusted partner for countless clients due to our commitment to quality, expertise, and affordable pricing. When you choose us, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Customizable Solutions:</strong> Our flexible pricing plans allow you to customize a package that fits your specific needs and budget.</li>
              <li><strong>Certified Quality:</strong> As an ISO: 9001:2015 certified company, we adhere to strict quality processes to ensure top-notch service.</li>
              <li><strong>Single Point of Contact:</strong> A dedicated project manager ensures clear and effective communication, providing a seamless experience.</li>
              <li><strong>Quick Turnaround Time (TAT):</strong> Our efficient team and streamlined processes ensure we deliver services on time, every time.</li>
              <li><strong>Scalable Solutions:</strong> Our services are scalable, allowing us to easily accommodate your evolving maintenance requirements.</li>
              <li><strong>24/7 Assistance:</strong> Our team is available around the clock to provide support and address any queries you may have.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for Hassle-Free Website Maintenance?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a well-established website maintenance company ready to help you grow your business. We take charge of your web maintenance needs, allowing you to focus on your core operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now for professional-grade web maintenance services at affordable rates.
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

export default WebsiteMaintenance;