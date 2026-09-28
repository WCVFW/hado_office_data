import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketingServicesForBrokers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Marketing Services for Brokers
            </h2>
            <p className="text-lg text-gray-600">
              Boost your online presence and engage more prospects with our comprehensive digital marketing solutions for brokers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The real estate industry is facing new challenges as consumer behavior shifts. Today, most people begin their search for a broker online, checking for credibility and brand image. This is where partnering with an experienced mortgage digital marketing service provider like **Nimble Acuity** can give you a significant edge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our digital marketing services for brokers help you tap into the needs and expectations of your prospects. We create strategies that not only highlight the quality of your services but also solidify your value as a brand, assuring clients that you are the right choice.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Marketing Solutions for Brokers
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer comprehensive digital marketing services to help mortgage brokers create an online presence that attracts and converts prospects. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>SEO Services:</strong> We empower you to increase your traffic and improve your reach through keyword research, link building, and SEO-based content.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> We help you utilize social media platforms to target potential customers by creating and marketing engaging content.
              </li>
              <li>
                <strong>Content Marketing:</strong> Our team of content creators and marketing professionals crafts high-quality content that can be effectively marketed online.
              </li>
              <li>
                <strong>Pay-Per-Click (PPC) Marketing:</strong> We design PPC campaigns to help you gain more traffic and achieve impressive outcomes by combining paid and organic strategies.
              </li>
              <li>
                <strong>Email Marketing:</strong> We create personalized messages for a highly targeted audience, helping you build meaningful relationships with your clients.
              </li>
              <li>
                <strong>Video Marketing:</strong> Promote your services and communicate your message more effectively with our video marketing strategies.
              </li>
              <li>
                <strong>Web Design and Development:</strong> We design and develop websites that provide an improved user experience, perfectly represent your brand, and appeal to your clients.
              </li>
              <li>
                <strong>Online Reputation Management (ORM):</strong> We monitor for negative reviews and comments, addressing them promptly to ensure your brand's image and reputation are well-managed.
              </li>
              <li>
                <strong>Reporting and Analytics:</strong> We use a range of analytics tools to create reports and continuously adjust our strategy for the best results.
              </li>
              <li>
                <strong>Lead Generation Services:</strong> Our services are geared towards targeting potential clients and converting those leads to generate improved sales and revenue.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are a preferred mortgage digital marketing company due to our proven expertise and dedication to our clients. The benefits of working with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Proven Experience:</strong> Over the years, our data-driven solutions have helped brokers generate high-quality leads and attract more customers.
              </li>
              <li>
                <strong>ISO-Certified Company:</strong> We are an ISO-certified company, prioritizing the privacy and security of your valuable information.
              </li>
              <li>
                <strong>Cost-Effective Solutions:</strong> Our experienced team helps you create and convert leads with a high success ratio, all through affordable pricing models.
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>For Mortgage:</strong> We help your mortgage business achieve better reach and brand appeal to attract more customers.
              </li>
              <li>
                <strong>For Lenders:</strong> Our experience with lenders adds a significant boost to your marketing efforts.
              </li>
              <li>
                <strong>For Banks:</strong> We enhance your digital presence and brand value with services tailored to banks.
              </li>
              <li>
                <strong>For Credit Unions:</strong> We can help grow your membership through online advertising campaigns and targeted SEO strategies.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Digital Marketing for Brokers to Us
            </h3>
            <p className="text-gray-700 mb-6">
              The real estate industry has greatly shifted, and the best way to keep up is to embrace digital marketing. When you work with an ISO-certified company like us, you can focus on enhancing your digital presence, attracting more leads, and generating more revenue.
            </p>
            <p className="text-gray-700 mb-6">
              Give your business what it needs by outsourcing your mortgage digital marketing services to **Nimble Acuity**.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServicesForBrokers;