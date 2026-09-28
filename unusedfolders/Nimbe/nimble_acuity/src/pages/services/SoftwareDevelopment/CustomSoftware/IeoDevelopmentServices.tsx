import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const IeoDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Initial Exchange Offering (IEO) Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Uncover a brand new way of cryptocurrency crowdfunding with IEO development services. We can help you navigate the crypto world with absolute trust.
            </p>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Rates starting at just $2200/min for 160 hours.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              An Initial Exchange Offering (IEO) is the new kid on the block—the fastest and safest way of cryptocurrency crowdfunding. It's a mechanism for raising funds for your project by creating tokens compatible with popular exchange systems like LATokens, IDAX, and Binance, with some prescribed conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we provide comprehensive support and guidance to help you safely navigate the crypto-exchange environment. Our IEO experts have years of experience and deep industry knowledge to help you successfully develop and market tokens for your projects. Our IEO options give you a ready-made user base to target your marketing efforts while providing your investors the confidence of liquidity.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our IEO Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity is a premium IEO development service provider with immense knowledge and sound expertise in the crypto world. Our strategic partnerships with top crypto exchange platforms give you a perfect launchpad for your crowdfunding campaigns. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Coin or Token Creation/Development:</strong> Our experts can help you create tokens on different blockchain platforms like Ethereum, Stellar, and EOS, based on your fundraising campaign's needs.
              </li>
              <li>
                <strong>Exchange Listing:</strong> Leveraging our expert partnerships with top crypto exchanges, we help you list your tokens on various prominent platforms, bringing authenticity and validity to your project.
              </li>
              <li>
                <strong>Light Paper & White Paper Drafting:</strong> We can help you draft a concise Light Paper and a comprehensive White Paper, which are essential for attracting investors and detailing your project's scope, timelines, and market analysis.
              </li>
              <li>
                <strong>Investor's Deck:</strong> We create a brief presentation document—the investor's deck—that contains quick and legitimate details about your IEO projects, helping investors get a complete idea in a minimal amount of time.
              </li>
              <li>
                <strong>Wallet Development:</strong> Our dedicated and highly experienced blockchain developers can help you create a secure and multi-currency compatible wallet to store your tokens safely.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our IEO Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Team Meeting:</strong> We meet with you to understand your project requirements and determine if crypto exchanges will support your token.
              </li>
              <li>
                <strong>Project Development:</strong> Our experts write compelling white papers and pitch decks to successfully present your project and build investor trust.
              </li>
              <li>
                <strong>Token Creation:</strong> We then create the tokens on the appropriate blockchain platforms to help you run your fundraising campaign.
              </li>
              <li>
                <strong>Marketing Campaigns:</strong> Our marketing wizards help you create strong marketing campaigns and strategies to attract and engage investors.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity has leading blockchain and cryptocurrency developers who offer a wide range of IEO development services. We can help you create unique and smart IEO tokens for your fundraising campaigns.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Fast & Affordable Solutions:</strong> Our services are fast, affordable, and reliable, with blockchain experts who quickly understand your project needs.
              </li>
              <li>
                <strong>Access to Top Crypto Exchanges:</strong> We have strong partnerships with leading crypto exchanges, which helps you create a strong exchange listing and gives you a ready-made user base.
              </li>
              <li>
                <strong>Comprehensive Services:</strong> We provide end-to-end IEO development services to help you address your immediate and future business problems efficiently.
              </li>
              <li>
                <strong>Complete Data Security:</strong> Our processes ensure the complete safety and privacy of your business data.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer service team is available 24/7 to provide complete help and assistance with your IEO token development and exchange.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your IEO?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a global IEO development company offering a comprehensive range of services. Our experts can provide you with tailored IEO development solutions as per your project's needs and requirements. Our holistic solutions can help you generate tokens, list them on leading exchange platforms, and reach out to the most potential investors for exceptional fundraising.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us know your IEO development requirements, and we'll help you create unique digital assets for unmatched success and profitability. Contact us today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IeoDevelopmentServices;