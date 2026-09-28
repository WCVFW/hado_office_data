import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const EthereumDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ethereum Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to a strategic blueprint for the proper development and implementation of Ethereum technologies.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              When it comes to the development of decentralized applications (dApps) and smart contracts, no other platform can compare to Ethereum. That's why Ethereum design and development is a core focus for many development companies. At Nimble Acuity, we have professional Ethereum developers who can handle all your requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated professionals have created amazing dApps and smart contracts for diverse industries, including education, automotive, healthcare, retail, and logistics. We are committed to helping our clients leverage the numerous benefits of Ethereum.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Ethereum Development Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Ethereum Consulting:</strong>
                <p className="mt-2">We offer an experience-driven strategy and a strategic blueprint for the proper development and implementation of Ethereum technologies.</p>
              </li>
              <li>
                <strong>dApps Development:</strong>
                <p className="mt-2">Our professional Ethereum developers are known for providing the best dApps development services, delivering fully functional decentralized applications tailored to your needs.</p>
              </li>
              <li>
                <strong>Smart Contracts:</strong>
                <p className="mt-2">We assist in the development of cost-effective, Ethereum-powered, high-end, and secure smart contracts over blockchain networks.</p>
              </li>
              <li>
                <strong>Ethereum Auditing:</strong>
                <p className="mt-2">Our smart contract auditing services ensure that all security vulnerabilities and potential bugs are handled efficiently to provide a seamless experience.</p>
              </li>
              <li>
                <strong>Ethereum Support:</strong>
                <p className="mt-2">Our professional developers are always ready to provide support and maintenance solutions for all your Ethereum requirements.</p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Affordable Rates:</strong> Our pricing model is affordable and flexible, ensuring that businesses of all sizes can leverage the benefits of Ethereum.
              </li>
              <li>
                <strong>Experienced Professionals:</strong> When you partner with us, you work with some of the most experienced and expert professionals in the blockchain industry.
              </li>
              <li>
                <strong>Flexibility:</strong> Our rapid team scaling and flexible engagement models are key reasons why clients choose our services.
              </li>
              <li>
                <strong>Support and Maintenance:</strong> Our experts are ready to provide 24/7 support to clients in need, offering services in your preferred language.
              </li>
              <li>
                <strong>Efficient Procedure:</strong> You can rely on our transparent and efficient development process, which is designed to guarantee excellent results.
              </li>
              <li>
                <strong>Fast Turnaround Time:</strong> One of the best benefits of partnering with us is our ability to deliver faster turnaround times through streamlined processes and workflows.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Ethereum Solution?
            </h3>
            <p className="text-gray-700 mb-6">
              Hire expert developers of the Ethereum blockchain and experience full-stack services offered by Nimble Acuity. Our full-time professional team provides all the support and solutions you need, tailored to your requirements and budget.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now for world-class services at cost-effective prices.
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

export default EthereumDevelopment;