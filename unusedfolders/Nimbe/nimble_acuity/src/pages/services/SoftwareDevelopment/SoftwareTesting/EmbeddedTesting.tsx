import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const EmbeddedTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Embedded Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Grow your revenue with our accelerated testing services. Develop outstanding products at reduced costs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Embedded systems come with compact hardware and software components. Debugging these components is a complex affair, but our experts make it simple for you. At **Nimble Acuity**, we leverage a team of highly trained engineers and sophisticated test lab facilities to provide you with error-free services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of embedded system testing services. We offer an array of testing services that transcend programming languages, platforms, and operating systems. Reach out to us today, and our experts will work with you to come up with customized services to address your specific business needs.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Embedded Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              At **Nimble Acuity**, we have extensive outsourcing experience garnered over two decades. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Device Testing:</span> We offer DVT testing, firmware testing, functional and system testing, and other device testing services. Our open-source tools and in-house testing frameworks enable our experts to test and validate your embedded devices.
              </li>
              <li>
                <span className="font-semibold">Network Testing:</span> Our network testing services include L2-L3 protocol testing, SDN controller testing, and more. Our services help networking OEMs and service providers to perfect their solutions and stay ahead of the competition.
              </li>
              <li>
                <span className="font-semibold">Protocol Testing:</span> Our engineers make sure that the hardware and software components of your product are functioning as per standard protocol.
              </li>
              <li>
                <span className="font-semibold">Security Endpoint Testing:</span> We offer a range of testing services to ensure the security of your embedded devices like controllers, industrial control systems, and IoT gateways.
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mt-8">Additional Services:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Wireless testing</li>
              <li>GPIO testing</li>
              <li>Serial interfaces testing</li>
              <li>Gateway testing</li>
              <li>SCADA testing</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Embedded Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing embedded testing services to **Nimble Acuity** gives you the scope to develop high-quality embedded systems at reduced testing rates.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Rates:** We offer competitive pricing and flexible payment options that suit your budget.</li>
              <li>**High-Quality Services:** Our embedded system testing takes place in fully equipped and secured testing labs that provide the perfect ecosystem.</li>
              <li>**Certified Experts:** Our team of globally certified engineers and software professionals works with you to understand and cater to your specific testing requirements.</li>
              <li>**Data Security:** As a reliable and ISO/IEC 27001:2022 certified company, your enterprise data is completely safe with us.</li>
              <li>**24/7 Availability:** Our experts are accessible 24/7. We also provide dedicated project managers who serve as your point of contact and provide regular project updates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a globally renowned embedded testing service provider with an impeccable reputation in the industry. We would like to create value for you as well! Reach out to us with your requirements and learn about the different ways in which we can promote your business growth.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To avail of embedded testing services, get in touch with us today!
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

export default EmbeddedTesting;