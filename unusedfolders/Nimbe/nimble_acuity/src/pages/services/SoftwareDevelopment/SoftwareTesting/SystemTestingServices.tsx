import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SystemTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              System Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your software system tested as a whole by our team of experienced and skilled software testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it challenging to perform end-to-end testing of your fully integrated software system? Are you failing to find the skilled and experienced resources who can take care of your system testing requirements? Then, the best option for you would be to outsource system testing services to an experienced and talented service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such system testing service providing company that can be your one-stop-shop for all your system testing requirements. We leverage some of the best and the latest system testing tools and technologies while delivering top-quality services. We have some of the most qualified and experienced system testers on board who can take care of all your requirements with ease.
            </p>
          </div>

          {/* System Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              System Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a pioneer in providing quality software system testing services to global clients. Our experience enables us to understand a client's unique requirements and provide them with customized services that suit their business objectives. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Functionality Testing</h4>
                <p>This ensures that all the system's functionalities are on the right track and deliver results as expected by the developers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Recoverability Testing</h4>
                <p>This testing helps determine if the system can recover from different input errors and other failure situations during execution.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Interoperability Testing</h4>
                <p>This ensures that the software system operates well with other external and third-party products and networks.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Performance Testing</h4>
                <p>We can help you with accurate performance testing services, ensuring your software system will have no long-term performance issues.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Scalability Testing</h4>
                <p>This ensures that the system operates in a hassle-free manner while scaling in terms of resources, users, and geography.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Reliability Testing</h4>
                <p>We can help you with accurate reliability testing which will ensure that the system runs smoothly for a longer period without developing any failures.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Regression Testing</h4>
                <p>This ensures that the system remains completely stable at all times, even when subjected to maintenance tasks and other subsystem integrations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Documentation Testing</h4>
                <p>We provide flawless documentation testing services, ensuring all user guides and help documents are in place and completely error-free.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Security Testing</h4>
                <p>This ensures that the data handled by the software system is completely secure and cannot be accessed by any unauthorized sources.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Usability Testing</h4>
                <p>Our team at **Nimble Acuity** can help you with superior quality usability testing services, ensuring the software system is easy to use, learn, and operate.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of System Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of System Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The entire system testing life cycle helps determine defects and bugs when the system operates as a whole. These can be detected early and corrected before the product is launched. Some of the key benefits are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>It helps detect faults and bugs early, saving time and money for the development team.</li>
                <li>It helps reduce system blackouts, communication breakdowns, and other major corporate emergencies.</li>
                <li>System testing helps maintain a good customer experience and enhances customer loyalty.</li>
                <li>Fixing defects early boosts a company's productivity and efficiency in the long run.</li>
                <li>A thoroughly tested system before launch boosts profits and helps build a great client relationship.</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing system testing services to us provides a series of benefits that you can take advantage of. Here are some reasons to choose us as your system testing company:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Our services are highly affordable with cost-effective plans that suit your business objectives and budget.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all your software data is kept safe and secure.</li>
              <li><strong>Experienced Software Testers:</strong> Our team at **Nimble Acuity** comprises some of the most qualified and experienced software testing experts who use the latest tools and deliver top-notch services.</li>
              <li><strong>Superior Quality Services:</strong> Being an ISO certified organization, you can rest assured that our services are of the best quality and go through a multi-level quality assurance process.</li>
              <li><strong>Dedicated Project Manager:</strong> We will assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required skills and bandwidth to expand the service requirements and scale up resources as and when you ask for it.</li>
              <li><strong>Short Turnaround Time:</strong> Our team operates through several delivery centers across different time zones, enabling us to deliver services within a short turnaround time.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to world-class office spaces and the latest system testing tools and technologies.</li>
              <li><strong>Round the Clock Customer Support:</strong> Our teams, including project management, sales, and customer support, are available 24/7 to resolve any issues you may have during the project.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Software System is Flawless?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a leading company providing quality system testing services and a plethora of other software testing services to global clients. We have some of the most qualified and experienced system testing experts on our team who can efficiently handle all your software testing requirements. We use the best and the latest system testing tools and software while delivering superior quality services.
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

export default SystemTestingServices;