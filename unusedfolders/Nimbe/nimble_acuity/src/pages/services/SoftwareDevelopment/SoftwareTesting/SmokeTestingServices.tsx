import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SmokeTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Smoke Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality smoke testing from an experienced and skilled team of software testers within a quick turnaround time.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it difficult to manage your smoke testing requirements for your software system? Are you falling short of skilled and experienced smoke testing experts who can take care of your requirements? Then, the right step for you would be to outsource smoke testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such smoke testing service provider who can take care of all your smoke testing requirements with ease. We have some of the most qualified and experienced smoke testers on board who can take care of all your requirements. We make use of the latest smoke testing tools and technologies while delivering top-notch services to clients.
            </p>
          </div>

          {/* Smoke Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Smoke Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a reliable pioneer in providing quality smoke testing services. We understand each client's requirements and offer customized services that will suit their business needs. Some of the key software smoke testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Manual Smoke Testing</h4>
                <p>Our team of software testers has the required skills and experience to provide high-quality manual smoke testing services. We ensure that navigation paths are tested and functionality is not hampered. Once a new build arrives, we begin with various smoke tests to ensure flaws are detected and corrected.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Automated Smoke Testing</h4>
                <p>Automated smoke testing is used for regression tests. With the help of automated tests, developers can check a new build quickly when it's ready for deployment. Instead of running manual tests repeatedly, we help in running automated tests that verify the major functionalities of the software system.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Smoke Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Smoke Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Smoke testing is a preliminary test that determines if further tests are needed. Some of the key benefits of our services are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li>It is easy to perform.</li>
                <li>It helps to detect bugs at a very early stage.</li>
                <li>It helps reduce risk at a later stage and improves software quality.</li>
                <li>The progress of testing is easier to access.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>It runs quickly and saves test effort and time.</li>
                <li>Detection and correction of errors are easy.</li>
                <li>It helps reduce any kind of integration risk.</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing smoke testing services to us gives you access to a series of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Packages:</strong> Working with us is highly affordable. We provide flexible pricing options that suit your business requirements and budget.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe at all times.</li>
              <li><strong>Experienced Software Testers:</strong> Our team comprises some of the most qualified and experienced software testers who leverage the latest tools to deliver top-notch services.</li>
              <li><strong>Superior Quality Services:</strong> Being an ISO certified organization, you can rest assured that all services we deliver are of the best quality and go through several levels of quality checks.</li>
              <li><strong>Dedicated Manager:</strong> We will assign a dedicated manager who will be the single point of contact for all your needs and issues.</li>
              <li><strong>Easily Scalable Services:</strong> We have the bandwidth and skills to easily scale up service requirements and increase resources as and when you need it.</li>
              <li><strong>Short Turnaround Time:</strong> Our team operates from different delivery locations spread across the globe, enabling us to deliver quality services within a quick turnaround time.</li>
              <li><strong>Best Infrastructure:</strong> We have access to the latest smoke testing tools and technologies and world-class workspaces.</li>
              <li><strong>Round the Clock Customer Support:</strong> Our teams, including sales, marketing, and project management, are available 24/7 to resolve any issues and queries you may have.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for a Reliable Smoke Testing Partner?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing top-quality smoke testing and a plethora of other software testing services to clients globally. We use the latest testing technologies and tools and have some of the most qualified and experienced smoke testing experts on board who can take care of all your requirements with ease.
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

export default SmokeTestingServices;