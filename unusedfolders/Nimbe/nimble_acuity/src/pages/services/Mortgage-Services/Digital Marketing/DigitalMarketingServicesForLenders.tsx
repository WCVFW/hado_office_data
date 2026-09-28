import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketingServicesForLenders: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Marketing Services for Lenders
            </h2>
            <p className="text-lg text-gray-600">
              Give your brand a boost, increase traffic, and expand your client base by outsourcing digital marketing services to us.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Today's real estate industry, including lenders, often struggles to transition to online media to target clients. If you're in the same boat, digital marketing can be a lifesaver. Working with an experienced mortgage digital marketing company can help you get ahead of your competition, especially as more borrowers are exploring their options online.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we can help your business thrive in the online environment. Our digital marketing experts provide the right strategies to help your business get the attention it deserves and generate the profits you need.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Marketing Solutions for Lenders
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our digital marketing services for lenders are designed to help you create a stronger brand image and improve your reach on digital platforms. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>SEO Services:</strong> Our team of experienced SEO experts offers top-notch strategies to help your web pages rank better on search engines.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> We can widen your social media presence and reach out to audiences who need your services through highly targeted posts and marketing efforts.
              </li>
              <li>
                <strong>Content Marketing:</strong> Our professionals offer well-planned content marketing services that clearly communicate your message with the target audience.
              </li>
              <li>
                <strong>Pay-Per-Click (PPC) Marketing:</strong> We post advertisements for your brand on reliable websites, bringing you prospects who might be interested in your services with every click.
              </li>
              <li>
                <strong>Email Marketing:</strong> Our team can target both potential and existing clients through personalized email marketing services to help you build better relationships.
              </li>
              <li>
                <strong>Video Marketing:</strong> We ensure your business appeals to and engages your audience while communicating your message effectively through video.
              </li>
              <li>
                <strong>Web Design and Development:</strong> We offer web design services that are not only SEO-friendly but also offer a superlative user experience. We can also build a website from scratch that reflects your brand's long-term goals.
              </li>
              <li>
                <strong>Online Reputation Management (ORM):</strong> We closely monitor mentions of your brand and promptly address any negative reviews or comments to enhance your brand's reputation.
              </li>
              <li>
                <strong>Reporting and Analytics:</strong> Our services are an integral part of our digital marketing strategy, ensuring that it performs as expected and allowing us to make constant improvements.
              </li>
              <li>
                <strong>Lead Generation Services:</strong> We identify and track high-quality leads to convert them into your loyal clients.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When you outsource digital marketing services to us, you can expect a range of benefits that make us the preferred partner for lenders:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Data Security:</strong> We ensure complete confidentiality and comply with stringent data security policies to protect your information.
              </li>
              <li>
                <strong>Experienced Professionals:</strong> Our team of experts has proven work experience that can add immense value to your business.
              </li>
              <li>
                <strong>ISO-Certified Company:</strong> As an ISO-certified service provider, our methodologies and practices adhere to the highest industry standards.
              </li>
              <li>
                <strong>Affordable Services:</strong> We offer our digital marketing services at competitive price ranges, ensuring clients with businesses of all sizes can partner with us.
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
                <strong>For Brokers:</strong> We help you reach your target audience in the most efficient ways by making use of digital marketing.
              </li>
              <li>
                <strong>For Banks:</strong> We enhance your digital presence and brand value with services that cater to banks.
              </li>
              <li>
                <strong>For Credit Unions:</strong> Our online advertising campaigns and SEO strategies can help grow your membership.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Digital Marketing for Lenders to Us
            </h3>
            <p className="text-gray-700 mb-6">
              When you outsource to **Nimble Acuity**, we use our experience of working with financial institutions and real estate businesses to cater to your unique needs. From social media and content marketing to email marketing and SEO— we have you covered in every area of digital marketing.
            </p>
            <p className="text-gray-700 mb-6">
              With us, you can achieve better market penetration, attract high-quality leads, and close more sales.
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

export default DigitalMarketingServicesForLenders;