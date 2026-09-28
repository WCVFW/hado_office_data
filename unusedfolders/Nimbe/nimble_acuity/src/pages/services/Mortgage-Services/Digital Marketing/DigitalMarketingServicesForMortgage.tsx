import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const DigitalMarketingServicesForMortgage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Marketing Services for Mortgage
            </h2>
            <p className="text-lg text-gray-600">
              Increase online engagement, expand your reach, and thrive in the dynamic mortgage industry with our comprehensive digital marketing solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to devise innovative digital marketing strategies that are attuned to your specific mortgage needs? Are you unable to engage your prospects and convert more leads? Most businesses in the mortgage sector juggle between managing clients and marketing, but bringing in new leads is just as crucial as focusing on your existing clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers sophisticated, turnkey digital marketing services for mortgage brokers, lenders, banks, and credit unions. Our solutions are designed to enhance engagement, nurture leads, and maximize conversions, helping you accomplish both goals effectively.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Marketing Solutions for Mortgage
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As the mortgage industry embraces the digital age, we provide out-of-the-box strategies to help you push leads through your sales funnel and close more loans. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>SEO Services:</strong> We optimize your website to turn it into a lead-generating machine, getting your content featured at the top of search engine results.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> We curate high-quality content and optimize it to boost engagement across various social media platforms.
              </li>
              <li>
                <strong>Content Marketing:</strong> We develop curated content marketing strategies to help you compete and thrive in the purchase market.
              </li>
              <li>
                <strong>Pay-Per-Click (PPC) Marketing:</strong> We design customized PPC campaigns that improve your market position and boost hot lead submissions.
              </li>
              <li>
                <strong>Email Marketing:</strong> We reach thousands of potential customers with captivating content and innovative email marketing strategies.
              </li>
              <li>
                <strong>Video Marketing:</strong> We help you make the most of your company’s video assets, leveraging them for effective marketing.
              </li>
              <li>
                <strong>Web Design and Development:</strong> We design and build responsive, user-friendly websites that improve engagement and drive conversions.
              </li>
              <li>
                <strong>Online Reputation Management (ORM):</strong> We help you take control of online conversations, manage your reputation, and understand what your audience thinks about your business.
              </li>
              <li>
                <strong>Reporting and Analytics:</strong> We sort and analyze your data, deriving key insights to help you make informed business decisions.
              </li>
              <li>
                <strong>Lead Generation Services:</strong> We devise and implement targeted strategies to generate qualified, hot leads that convert into paying customers.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Effective targeting, increased engagement, and a consistent lead pipeline are just some of the benefits of leveraging our expertise. What sets us apart includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High-Quality Services:</strong> As an ISO-certified organization, we deliver exceptional services that cater to your specific needs.
              </li>
              <li>
                <strong>Mortgage Data Security:</strong> We have robust security measures in place to prevent data breaches and ensure complete data security.
              </li>
              <li>
                <strong>Quicker Results:</strong> Our solutions help you make a quicker impact, secure your online position, and generate quality leads in a dynamic digital landscape.
              </li>
              <li>
                <strong>Skilled Experts:</strong> Our team of specialists—including SEO analysts, social media experts, and copywriters—works together to help you accomplish your goals.
              </li>
              <li>
                <strong>Advanced Tools and Platforms:</strong> We help you choose the right tools and platforms to fortify your marketing efforts.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> We offer flexible pricing based on the tools and resources involved in your project, with no hidden charges.
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
                <strong>For Brokers:</strong> We use digital marketing to help you reach your target audience in the most efficient ways.
              </li>
              <li>
                <strong>For Lenders:</strong> Our experience working with lenders adds a significant boost to your marketing efforts.
              </li>
              <li>
                <strong>For Mortgage Banks:</strong> We create appealing visuals and creative content that efficiently present your brand story.
              </li>
              <li>
                <strong>For Credit Unions:</strong> Our turnkey services help you increase your digital footprint, improve engagement, and grow your business.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Capitalize on Your Digital Investments
            </h3>
            <p className="text-gray-700 mb-6">
              Embrace the digital era of mortgage marketing to push leads through your sales funnel and close more loans. Our online marketing strategies provide the necessary support to devise innovative strategies, engage prospects, and manage your online reputation.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today to get curated strategies that help you capitalize on your digital investments and thrive in the purchase market.
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

export default DigitalMarketingServicesForMortgage;