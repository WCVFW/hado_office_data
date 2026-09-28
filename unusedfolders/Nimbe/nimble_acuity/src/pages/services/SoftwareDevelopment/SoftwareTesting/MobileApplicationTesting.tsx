import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const MobileApplicationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mobile Application Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your mobile apps work flawlessly across all devices and platforms by partnering with our expert team of mobile application testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Mobile technology is highly pervasive, with thousands of apps downloaded daily. This rapid growth presents unique challenges for developers and QA testers. Thorough testing is crucial for ensuring a great user experience, addressing issues like device fragmentation, screen size variations, memory usage, and network connectivity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of comprehensive mobile application testing services. With over 26 years of experience, we help our global clients ensure their mobile apps perform equally well across different devices, regions, and languages.
            </p>
          </div>

          {/* Our Mobile App Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mobile App Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Neglecting mobile application testing can lead to a poor user experience and negatively impact the app's business value. We understand that mobile app testing is a critical and complex part of the development cycle. Our services support your development strategy by focusing on key areas:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li><span className="font-semibold">Overall User Experience:</span> We test for usability, expert reviews, and competitive analysis to provide a better user experience.</li>
              <li><span className="font-semibold">Compatibility Testing:</span> We ensure your app works seamlessly across different devices, operating systems, and platforms.</li>
              <li><span className="font-semibold">Performance and Security:</span> We rigorously test for responsiveness, scalability, stability, resource usage, and vulnerabilities.</li>
              <li><span className="font-semibold">Functional and Integration Testing:</span> We verify all app functionalities and system integrations.</li>
              <li><span className="font-semibold">Localization and Language Testing:</span> We validate locale-specific details, language, and currency displays.</li>
              <li><span className="font-semibold">Test Automation:</span> We create and modify reusable automation scripts for faster and more efficient testing.</li>
              <li><span className="font-semibold">App Installation Testing:</span> We test the app's installation, re-installation, uninstallation, and upgrade processes.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Mobile App Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your mobile application testing to us gives you access to a range of benefits. Here are some of the key reasons to choose **Nimble Acuity** as your testing partner:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**State-of-the-Art DMTC:** We conduct testing in a dedicated mobile application testing center to ensure process efficiency and avoid project overlap.</li>
              <li>**High-Quality and Cost-Effective Services:** We provide a holistic approach to app testing that reduces cycle times, effort, and overall costs.</li>
              <li>**Rapid Automation:** We use automation proof of concepts for better project guidance and faster testing times.</li>
              <li>**High-Quality Services:** As an ISO-certified organization, all services delivered by us are of the best quality and undergo a thorough quality assurance process.</li>
              <li>**Virtual Test Labs:** We have access to virtual test labs with more than 3000+ devices, as well as access to pre-market devices.</li>
              <li>**Dedicated Manager:** We will assign a dedicated manager who will be your single point of contact and can resolve any issues you may have.</li>
              <li>**Round-the-Clock Support:** Our teams are always available to resolve any issue you may have via phone or email.</li>
              <li>**Easily Scalable:** We have the bandwidth and resources to easily scale up the service requirements and expand the number of resources as needed.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              As the demand for mobile apps continues to grow, having a reliable testing partner is crucial. We understand that a successful app requires functionalities that benefit the end-user, and our rigorous mobile testing plan ensures strong customer adoption and positive word-of-mouth.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a high-quality and cost-effective mobile application testing service provider? Your search ends here. Get in touch with us today!
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

export default MobileApplicationTesting;