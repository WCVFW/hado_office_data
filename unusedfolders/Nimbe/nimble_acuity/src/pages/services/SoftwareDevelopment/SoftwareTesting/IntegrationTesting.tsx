import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const IntegrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Integration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Check the continuity between modules of your software system by outsourcing integration testing services to our experienced team of testers starting at $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to test the continuity and data flow from one component to another of your software application? Are you finding it too challenging to find the right resources who can handle your integration testing requirements? Then, the best option for you would be to outsource integration testing services to a skilled and experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has been a pioneer in providing end-to-end integration testing services to clients around the globe. Our experience in this domain for over two decades helps us to understand each client's unique requirements and provide them with software integration testing services that will suit their business objectives. Integration testing is usually carried out to test the different interfaces between the different units or modules of your software system. The individual modules are tested in isolation and then integrated one by one and the combinational behavior is tested to ensure the smooth functioning of the system.
            </p>
          </div>

          {/* Integration Testing Approaches */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Integration Testing Approaches We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of skilled testers leverages the latest tools and technologies to provide a variety of integration testing approaches based on your project's specific needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Non-incremental (Big Bang) Approach</h4>
                <p>
                  In this approach, all the units of the software system are combined and tested in one go. It is usually conducted when we receive the entire software application in a single bundle, allowing us to deliver efficient big bang integration testing within a quick turnaround time.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Incremental Integration Approaches</h4>
                <p>
                  In this method, we integrate each unit one by one, leveraging drivers or stubs to identify defects. This includes:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-gray-700">
                  <li><strong>Bottom-Up Approach:</strong> We test the bottom levels first, simulating upper levels to ensure accurate testing.</li>
                  <li><strong>Top-Down Approach:</strong> We test the upper units first, simulating lower-level units for flawless system testing.</li>
                  <li><strong>Hybrid Testing Approach:</strong> A combination of both methods where top-level and bottom-level units are tested simultaneously.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Integration Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Integration testing ensures a smooth data flow and finds errors in interfaces between components. Key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps find errors in the interfaces of the software system, improving product performance and quality.</li>
              <li>Ensures that all units work together in a hassle-free manner as expected.</li>
              <li>Helps verify the reliability, performance, and functionality of integrated units.</li>
              <li>Tackles issues related to improper exception handling.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you work with us, you get a series of benefits that set us apart from the rest.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> Our customizable services are highly affordable, fitting budgets of all sizes.</li>
              <li><strong>100% Data Security:</strong> We ensure complete data security and are an ISO/IEC 27001:2022 ISMS certified organization.</li>
              <li><strong>Skilled Software Testers:</strong> Our team of qualified and experienced testers uses the latest tools and technologies.</li>
              <li><strong>High-quality Services:</strong> As an ISO certified organization, we adhere to strict quality measures.</li>
              <li><strong>Dedicated Project Manager:</strong> You will be assigned a single point of contact for all your needs and timely reports.</li>
              <li><strong>Highly Scalable Services:</strong> Our team has the bandwidth to scale up services as and when your project demands.</li>
              <li><strong>Quick Turnaround Time:</strong> With our global presence, we deliver services within a quick turnaround time.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the best and latest software testing tools and technologies.</li>
              <li><strong>Round-the-Clock Support:</strong> Our team is available 24/7 to resolve your issues via phone or email.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Seamless Software Integration?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality integration testing services. We have some of the most professional, skilled, and experienced software testers on board who can take care of all your integration testing needs, leveraging the latest and best tools and technologies.
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

export default IntegrationTesting;