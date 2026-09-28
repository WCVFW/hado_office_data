import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ScalabilityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Scalability Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to high-quality and error-free scalability tests for your software application from an expert team of testers at highly affordable prices (Starts at $20 an hour).
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you worried that your software application won't be able to handle increased traffic flow, network calls, or data volume when the number of users increases? Are you falling short of skilled and experienced resources who can handle your scalability testing requirements? Then, the best option for you would be to outsource scalability testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a scalability testing service provider that can be your one-stop-shop for all your needs. Scalability testing can help you determine the application's performance for higher loads, end-user experience, check service side degradation and robustness, and check the user limit for an application. It also helps plan capacity additions to your software system.
            </p>
          </div>

          {/* Our Scalability Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Scalability Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality and error-free scalability testing services to clients around the globe for over two decades. Our experience helps us understand each client’s unique requirements and provide them with customized services that will suit their business needs. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Response Time Testing:</span> We have the required skills and expertise to test the response time of your software application. We can help you detect the lag in response time and also help with a solution that will make the system faster.
              </li>
              <li>
                <span className="font-semibold">Resource Utilization Testing:</span> Our team at **Nimble Acuity** can provide you with a series of resource utilization testing services including the usage of memory, CPU time, network, and other resources. This helps you identify the areas where your software application needs improvement before it is launched.
              </li>
              <li>
                <span className="font-semibold">Throughput Testing:</span> Sometimes the application may have lower efficiency due to the lack of certain aspects. We can help you test the throughput and determine the amount of processing that is done in a certain period of time. This enables software developers to improve the efficiency of the application before it hits the market.
              </li>
              <li>
                <span className="font-semibold">Performance Testing:</span> Certain applications may not perform well under the conditions of higher load and an increased number of users simultaneously. The performance of your application needs to be tested through various performance tests. We can help you conduct these tests and detect flaws before the application reaches the market.
              </li>
            </ul>
          </div>

          {/* Scalability Testing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Scalability Testing Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Being a leading scalability testing service provider, we believe in providing the best quality services within a quick turnaround time. To make this possible, we follow a streamlined and systematic process:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Requirement Analysis:</span> In the first step, we meet the client and analyze their business requirements along with the application developed by their team.
              </li>
              <li>
                <span className="font-semibold">Plan & Design Scalability Tests:</span> Based on the client’s requirements and the challenges they are facing, our team plans and designs the different scalability tests that will be run on the software application.
              </li>
              <li>
                <span className="font-semibold">Test Environment Configuration:</span> Once we have the tests in place, we will choose the appropriate test environment and configure it as per the requirements of the various tests that will be performed.
              </li>
              <li>
                <span className="font-semibold">Implement and Run:</span> Using the configured test environment, our team will begin running the different scalability tests and make a record of the defects and bugs in the application.
              </li>
              <li>
                <span className="font-semibold">Analyze & Retest:</span> We will analyze the test results from the previous run, fine-tune the application, and rerun the tests.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Scalability Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing scalability testing services to us provides a series of benefits. Some of the key reasons to choose us as your scalability testing partner are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing Options:** Our services are highly cost-effective with flexible pricing that will suit your budget and business objectives.</li>
              <li>**Data Security:** As an ISO/IEC 27001:2022 ISMS certified firm, we ensure all your data is kept safe and not divulged to any third party without permission.</li>
              <li>**Experienced Software Testers:** We have some of the most experienced and skilled software testers who are trained to work on the latest tools and technologies and deliver high-quality services.</li>
              <li>**Error-free Services:** Being an ISO certified firm, you can rest assured that all the scalability testing services provided by us will be of the best quality every single time.</li>
              <li>**Dedicated Manager:** We assign a dedicated project manager to each client. This manager will be the single point of contact for all your needs and resolve any issues.</li>
              <li>**Easily Scalable Services:** We have the required bandwidth and skills to easily increase the number of resources on the project whenever the project demands.</li>
              <li>**Quick Turnaround Time:** Our team of software testers operates through several delivery centers across the globe, allowing us to deliver top-quality services to clients within a short turnaround time.</li>
              <li>**Best Infrastructure:** We have access to the latest tools and technologies and international-standard office spaces.</li>
              <li>**24/7 Availability:** All our teams, including sales, marketing, and customer support, are available at all times to resolve your issues via phone or email.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality scalability testing services and a plethora of other software testing services. Our team comprises some of the most qualified and experienced software testers who can understand each customer’s unique requirements and provide them with customized services. We leverage the latest software testing tools and technologies while delivering top-notch services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective scalability testing service provider? Then, you have come to the right place. Get in touch with us today!
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

export default ScalabilityTesting;