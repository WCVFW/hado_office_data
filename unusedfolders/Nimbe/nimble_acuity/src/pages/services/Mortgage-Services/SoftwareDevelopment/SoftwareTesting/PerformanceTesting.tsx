import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const PerformanceTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Performance Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to error-free and superior quality performance testing services from an experienced team of software testers at affordable prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your software application running slowly when several users use it simultaneously? Does your application suffer from inconsistencies and poor usability across different operating systems? If so, your application needs comprehensive performance testing. If you are struggling to find the right resources to handle these requirements, the best option is to outsource to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading performance testing service provider and your one-stop shop for all your performance testing requirements. Our services can help you monitor the speed, reliability, response time, and scalability of your software. We can find performance bottlenecks and help you improve your application before it goes to market.
            </p>
          </div>

          {/* Performance Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Performance Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Performance testing determines the speed, responsiveness, and stability of a software program or device under a workload. This identifies major issues and validates the software's quality and attributes. Without it, software can suffer from performance inconsistencies and run slowly under simultaneous use. When you outsource to Nimble Acuity, we can test your software under various load conditions. Some of the services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Load Testing:</span> We assess your software's behavior under routine and peak load conditions to ensure it performs as intended when there is a sudden increase in users.
              </li>
              <li>
                <span className="font-semibold">Stress Testing:</span> We identify your application's maximum limit by checking its performance under abnormal conditions, preparing you for extreme scenarios.
              </li>
              <li>
                <span className="font-semibold">Spike Testing:</span> This estimates the stability and weakness of your application by simulating sudden, extreme spikes in activity.
              </li>
              <li>
                <span className="font-semibold">Volume Testing:</span> We evaluate the productivity of your software and find the volume of data it can handle, helping you determine if you need to expand your database.
              </li>
              <li>
                <span className="font-semibold">Scalability Testing:</span> This measures your software's performance under varied processing power and architectural changes, telling you the degree to which it can be scaled.
              </li>
              <li>
                <span className="font-semibold">Soak Testing:</span> We perform this testing to identify your application's stability and performance over a long period.
              </li>
              <li>
                <span className="font-semibold">Web Service Performance Testing:</span> We collaborate with you to identify important testing parameters and execute tests based on agreed-upon criteria to provide exceptional and uninterrupted testing solutions.
              </li>
            </ul>
          </div>

          {/* Our Performance Testing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Performance Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With extensive experience in software testing, Nimble Acuity has established a validated approach that can be customized to your individual requirements. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 pl-4">
              <li>
                <span className="font-semibold">Identify the Testing Environment:</span> We first understand your requirements and select the best-suited testing environment for your project.
              </li>
              <li>
                <span className="font-semibold">Identify the Performance Entry & Exit Acceptance Criteria:</span> After consulting with you, we set the exact performance acceptance criteria.
              </li>
              <li>
                <span className="font-semibold">Plan & Design Performance Tests:</span> Our team plans and designs the tests according to the software application's architecture and your specific requirements.
              </li>
              <li>
                <span className="font-semibold">Configuring the Test Environment:</span> Once the tests are planned, we configure the environment in which they will be run.
              </li>
              <li>
                <span className="font-semibold">Implement and Run:</span> We then implement the test design and run the planned tests to check for any inconsistencies.
              </li>
              <li>
                <span className="font-semibold">Analyze, Tune, & Retest:</span> We analyze the results, re-tune the application, and then re-run the tests to ensure optimal performance.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity for Performance Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Performance Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, Nimble Acuity has worked with clients across the globe, from small businesses to global enterprises. We swiftly adjust to your specific requirements. Here are some key reasons to choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Cost-effective Services:** Our services are highly affordable, providing you with a world-class, robust solution at a great price.</li>
              <li>**State-of-the-Art Infrastructure:** Our offices have modern infrastructure and the latest software testing tools, with built-in IT redundancies and 200% power backup.</li>
              <li>**Multiple Delivery Centers:** With offices and delivery centers across the globe, we can provide seamless support and accessibility.</li>
              <li>**Data Security:** As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is kept safe and is not shared with any third party without permission.</li>
              <li>**Faster Turnaround Time:** We ensure a quicker turnaround for all your performance testing projects by leveraging the expertise of our global delivery centers.</li>
              <li>**24/7 Availability:** We will allocate a dedicated project manager who, along with our team, is available 24/7 to resolve any issues via your preferred communication channel.</li>
              <li>**Ease of Scalability:** We have the dynamic resources and expertise to manage any surge in your business demands, so you only pay for the services you need.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, we have a large suite of software testing professionals who can provide you with a high level of scalability and flexibility customized to your needs. We are a leading provider of performance testing and other custom software development services, delivering quality solutions at competitive rates with excellent support. Our services will enable you to leverage the power of your application and evolve with growing business demands.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for robust software testing solutions that will drive your application to a sustained impact on the market.
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

export default PerformanceTesting;