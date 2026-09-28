import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BlockchainDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Blockchain Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire blockchain developers to make your business more efficient, secure, and transparent.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, our software professionals like engineers and developers strive to stay in pace with emerging technologies and have years of industry-specific project experience. For over 26 years, we have helped businesses revolutionize their operations and achieve their goals with our technological expertise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our blockchain developers adhere to and implement blockchain best practices to build high-octane blockchain applications that resolve your business challenges. We provide IT staffing for blockchain developers on flexible payment models so you can hire professionals depending on your budget.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Blockchain Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading provider of blockchain developers who offer a wide range of services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Custom Blockchain Development:</strong> Our developers build secure, easy-to-use, and scalable custom blockchain applications.
              </li>
              <li>
                <strong>Blockchain Consultants:</strong> Our team is happy to provide consultancy services for all your blockchain queries, from demos to implementation.
              </li>
              <li>
                <strong>Cryptocurrency Developers:</strong> We help integrate Bitcoin and other cryptocurrencies into your existing systems and can create custom cryptocurrency platforms.
              </li>
              <li>
                <strong>Blockchain Wallets:</strong> We develop secure web and mobile wallets for Bitcoin, Ethereum, and Altcoins that facilitate the exchange of widely used cryptocurrencies.
              </li>
              <li>
                <strong>Supply Chain & Multichain:</strong> We develop decentralized apps to make transactions traceable and transparent for a slew of industries.
              </li>
              <li>
                <strong>Smart Contract Developers:</strong> Our programmers create secure, high-quality smart contract code that facilitates an automated execution process.
              </li>
              <li>
                <strong>Private Blockchain Developers:</strong> We can provide the transparency, security, and speed of a private blockchain service to help you overcome your business challenges.
              </li>
              <li>
                <strong>ICO Launch:</strong> Our blockchain developers provide comprehensive ICO development and support services, from abstract token design to the website launch.
              </li>
              <li>
                <strong>Ethereum App Developers:</strong> We build secure, accessible apps based on Ethereum and HyperLedger technologies.
              </li>
              <li>
                <strong>Crowdsale Developers:</strong> Our developers craft Crowdsale contracts to help you manage and speed up your cryptocurrency sales process.
              </li>
            </ul>
          </div>

          {/* Why Use Blockchain */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Use Blockchain?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are numerous benefits to using blockchain technology, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Enhanced Efficiency:</strong> Avoid a lengthy decision-making process with pre-step configurations.</li>
              <li><strong>Improved Security:</strong> As a highly secure record-keeping system, every approved transaction is immediately encrypted.</li>
              <li><strong>Improved Traceability:</strong> Easily trace assets and transactions through complex supply chains.</li>
              <li><strong>Reduced Expenses:</strong> Cut costs and increase revenues compared to using third-party services.</li>
              <li><strong>Quality Assurance:</strong> Blockchain can pinpoint the origin of irregularities, simplifying investigations.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              Businesses choose **Nimble Acuity** because our programmers have proven their expertise time and again. We provide bespoke web and mobile apps for a variety of business requirements and adhere to modern work methodologies like Agile and Scrum. By outsourcing your blockchain staffing to us, you get these advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Dedicated Team:</strong> Access a dedicated team of skilled experts with rich experience in blockchain development.</li>
              <li><strong>High-quality Services:</strong> As an ISO-certified company, we guarantee quality without compromise.</li>
              <li><strong>Cost-effective Pricing:</strong> Enjoy a minimum of 40% cost savings on hiring developers.</li>
              <li><strong>Experience:</strong> Leverage the immense industry experience of our blockchain developers.</li>
              <li><strong>Flexibility:</strong> We provide flexible engagement models and rapid team scaling.</li>
              <li><strong>24/7 Support:</strong> We provide round-the-clock access to our services.</li>
              <li><strong>Global Network:</strong> Choose to get delivery from any of our global delivery centers.</li>
              <li><strong>Efficient Process:</strong> We have an efficient and transparent development process you can rely on.</li>
              <li><strong>Quick Turnaround Time:</strong> We provide quicker turnaround times with our modern workflows.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Blockchain Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              If you want to revolutionize the way you do business and unleash the power of dedicated blockchain developers to increase efficiency and transparency, hire experts from **Nimble Acuity**. You can hire skilled and experienced full-stack developers on a fixed-cost basis, per hour, or as a full-time offshore team, depending on your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us now to hire dedicated blockchain developers in India and abroad!
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

export default BlockchainDevelopers;