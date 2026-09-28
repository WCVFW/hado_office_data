import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const StoDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              STO Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We develop blockchain-powered security tokens that help you raise funds from accredited investors worldwide.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has over 5 years of experience in developing blockchain-powered security tokens to assist organizations in raising funds from accredited investors. Our team consists of experienced developers and legal partners who guide us through the complexities of country-wise regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our STO development services include end-to-end solutions, from consulting to the creation of custom tokens and marketing to meet your crowdfunding goals. Our market-based approach helps us design and optimize the best fundraising opportunities for organizations around the world.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our STO Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Equity Token Development</h4>
                <p className="text-gray-700">We create equity tokens to strengthen your crowdfunding efforts, allowing token holders to gain ownership while maintaining control over your company. Our solutions provide assured security and affordability.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Asset-backed Token Development</h4>
                <p className="text-gray-700">We enable investors to tokenize real-world assets like houses and property. Our blockchain-based asset development services provide high liquidity, faster transactions, and a wider investor base.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Debt Token Development</h4>
                <p className="text-gray-700">Our developers create security tokens to procure funding from debt investors with guaranteed payback options. We help you onboard investors with a compliant digital experience and manage operations on the blockchain.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Intellectual Property-backed Tokens</h4>
                <p className="text-gray-700">We offer a blockchain-based service that transforms intellectual property into tradable securities. Our services help you enhance liquidity and enable IP finances for patents, film licensing, and royalty payments.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Energy Tokens</h4>
                <p className="text-gray-700">We facilitate the creation of digital tokens for power and energy companies, enabling peer-to-peer energy trading and creating a virtual grid for transactions. This simplifies fractional ownership and eliminates the middleman.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Security Token Exchange Platform</h4>
                <p className="text-gray-700">We develop robust, SEC-compliant exchange platforms with a strong trade engine and smart contract integration, ensuring a seamless experience for token holders.</p>
              </div>
              {/* Service Card 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">STO Marketing</h4>
                <p className="text-gray-700">We provide end-to-end marketing support to successfully promote your STO, following security token standard guidelines and using a multi-channel approach to capture investors' attention.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Security Token Offering Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> We work with you to understand your industry and business requirements.</li>
              <li><strong>Roadmap Design:</strong> We define the roadmap for STO development, including contract rules and the right blockchain platform.</li>
              <li><strong>Pre-STO Launch:</strong> We develop the STO white paper or brochure to disseminate information and register investors.</li>
              <li><strong>Security Token Development:</strong> We develop security tokens according to the smart contract agreement and dividend structure.</li>
              <li><strong>Testing and Deployment:</strong> We deploy the smart contract in a test environment, sort out bugs, and then take the tokens live for trading.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Hiring Models:</strong> We offer dedicated offshore teams or individual developers on an hourly or full-time basis, all with deep knowledge of STO technologies.</li>
              <li><strong>End-to-End Solutions:</strong> Our services cover the entire STO lifecycle, from consulting and development to marketing and exchange platforms.</li>
              <li><strong>Wide Industry Expertise:</strong> We have extensive experience assisting companies from various industries, from startups to large enterprises.</li>
              <li><strong>Any Currency Transactions:</strong> Our platforms support a wide range of currencies, including Bitcoin, Ethereum, and fiat, opening your business to a large number of global investors.</li>
              <li><strong>Payment Gateway Integration:</strong> We integrate secure payment gateways into exchange platforms, providing a complete and functional trading ecosystem.</li>
              <li><strong>Multilingual Support:</strong> We ensure the STO platform is available in multiple languages, making it comprehensible to investors worldwide.</li>
              <li><strong>Advanced Escrow System:</strong> We develop an escrow system to keep track of all transactions, minimizing processing time and preventing disputes.</li>
              <li><strong>24/7 Support:</strong> Our STO platforms are designed to run 24/7 with comprehensive support channels for issue resolution.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your Security Token Offering?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has extensive experience developing tokens for assets as per SEC compliance. Our wide exposure to the STO world gives us an upper hand in understanding the token needs for your industry, enabling us to develop custom tokens and smart contracts to raise funds for your business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We have partnered with some of the best legal minds of major world economies to guide us in the successful launch of STOs according to federal laws. Get in touch with our experts now for a consultation.
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

export default StoDevelopmentServices;