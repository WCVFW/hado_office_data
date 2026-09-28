import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const HyperledgerDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hyperledger Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to enterprise blockchain apps using Hyperledger frameworks for advanced, cross-industry blockchain technologies.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to harness the power of **Hyperledger**, an open-source framework based on the blockchain network? Are you looking to build powerful, faster, and risk-free blockchain-based apps with frameworks that are hosted by the Hyperledger? If so, you can benefit significantly from our Hyperledger development services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of **Hyperledger development services** to a diverse clientele from across the world. We have a team of highly experienced and professional experts that can help you build sophisticated and highly secure blockchain apps. We are highly proficient in using all the blockchain frameworks hosted on the Hyperledger network, including Hyperledger Burrow, Hyperledger Indy, Hyperledger Fabric, Hyperledger Sawtooth, and Hyperledger Iroha.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Hyperledger Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a highly reputed **Hyperledger development company**. We will always work closely with you to determine your exact requirements and provide you with solutions that perfectly meet your needs. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>dApp Development and Deployment:</strong> Our professionals have experience and expertise in building dApps for multiple industries using Hyperledger frameworks.</li>
              <li><strong>Chaincode Development:</strong> We write robust and highly secure chaincodes (smart contracts) required to develop asset definitions and decentralized apps on the Hyperledger Fabric.</li>
              <li><strong>Hyperledger Consulting:</strong> We will work closely with you to assess your business use case and analyze the potential for blockchain deployment to address specific needs.</li>
              <li><strong>User Experience and Technical Design:</strong> Our team delivers high-performing designs that ensure a seamless, effective, and efficient user experience.</li>
              <li><strong>Maintenance and Support:</strong> Our services do not end with the development. We provide maintenance and support to ensure that all our apps face no downtime.</li>
              <li><strong>Migration and Upgrade:</strong> Our solutions extend to assisting in migrating or integrating existing solutions to the Hyperledger framework.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a highly professional and reliable **Hyperledger development service provider**. Partnering with us makes sense for a whole host of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> We provide our solutions at highly affordable rates, helping you build world-class blockchain apps cost-effectively.</li>
              <li><strong>Structured Process:</strong> We make use of highly robust and systematic processes to deliver all our solutions.</li>
              <li><strong>Experienced Team:</strong> Our team has over two decades of experience in providing the highest quality software development services and is proficient in all things related to blockchain.</li>
              <li><strong>High-Quality Services:</strong> We are an ISO-certified provider of **Hyperledger development services** and have multi-level quality checks to ensure the highest quality.</li>
              <li><strong>Tools and Technologies:</strong> Our team is fully aware of all the latest best practices and will implement them in your project.</li>
              <li><strong>Data Security:</strong> The safety of your data is highly important to us, and we comply with all standard international data security and privacy laws.</li>
              <li><strong>Short Turnaround:</strong> You will always receive our solutions well within the stipulated timeframe because we take deadlines very seriously.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Innovate with Hyperledger?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of **Hyperledger development services**, and our highly qualified and experienced blockchain developers have the expertise to efficiently and effectively address any of your needs. We also provide our services at highly cost-effective rates, helping you make the most out of your investment with us.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for professional and cost-effective **Hyperledger development services**, get in touch with us today!
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

export default HyperledgerDevelopment;