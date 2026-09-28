import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PenetrationTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Detect various security vulnerabilities and protect your company's IT infrastructure.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to detect the various security vulnerabilities of your company's IT infrastructure? Are you looking for skilled resources who can take care of your penetration testing needs? Then, the best step for you to take would be to outsource penetration testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such penetration testing service providing company that can cater to all your software testing requirements. We have some of the most qualified and experienced security experts on board who can leverage the power of the best penetration testing tools and software and deliver high-quality services to our clients.
            </p>
          </div>

          {/* Penetration Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Penetration Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been offering the highest quality penetration testing services for over 26 years. Our deep understanding of client needs and goals enables us to provide customized solutions that perfectly fit your objectives. Some of the key PEN testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">White Box Testing Services</h4>
                <p>We carry out vulnerability assessments of web applications to identify potential weaknesses. We use admin rights, access to server configuration files, source code, and encryption principles to assess crucial security risks.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Gray Box Testing Services</h4>
                <p>We examine your system by performing an audit, using an information-gathering phase. We log in as multiple users and take notes to build an overview of your network architecture and identify vulnerabilities.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Black Box Testing Services</h4>
                <p>We test your pre-packaged software in a business environment without any prior knowledge of its internal workings, OS, or security measures, simulating a real-world external attack to find vulnerabilities.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing penetration testing services to us offers amazing benefits that most other providers don't have. Here are some of the key reasons to choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We offer a variety of highly affordable and flexible pricing packages that cater to your business needs and budget.</li>
              <li><strong>Experienced Testers:</strong> Our team comprises some of the most experienced and talented penetration testers on the market.</li>
              <li><strong>Superior Quality Services:</strong> We are ISO certified to ensure consistent, high-quality service. All our services are quality-checked before delivery.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your data is protected.</li>
              <li><strong>Dedicated Manager:</strong> We will assign a dedicated project manager who will be the single point of contact for all your queries and issues.</li>
              <li><strong>24/7 Support:</strong> We offer our clients round-the-clock support. You can reach us by phone or email at any time.</li>
              <li><strong>Quick Turnaround Time:</strong> With offices across the globe, we leverage our expansive network to deliver top-notch penetration testing solutions quickly.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to high-quality tools, software, and top-of-the-line workspaces to deliver the best possible services.</li>
              <li><strong>Easily Scalable Services:</strong> We have the resources and bandwidth to scale up the level of support on projects as and when the situation demands it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your IT Infrastructure?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality penetration testing and a range of other software testing services to clients globally. We have some of the most committed and established experts on board who utilize the best testing tools and technologies to provide the highest level of service possible.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PenetrationTestingServices;