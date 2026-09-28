import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const TestEnvironmentManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Test Environment Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to a stable, validated, and usable test environment for your software testing process.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it challenging to find a usable, stable, and validated test environment for your software testing process? Are you falling short of the right set of skilled and experienced resources to handle your requirements? Then, the best option for you is to outsource test environment management services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier test environment management service provider that can take care of all your requirements. We leverage the latest tools and deliver top-notch services to clients within a quick turnaround time.
            </p>
          </div>

          {/* Test Environment Management Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Test Environment Management Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a leading provider of test environment management services for over two decades. Our experience enables us to understand each client's unique project requirements and provide customized services. Some of the key services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Hardware Device Management</h4>
                <p>Our team will check if all the necessary hardware devices such as scanners, printers, handheld devices, and other peripheral devices are available for testing.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Software Management</h4>
                <p>We ensure that all the required applications are specified and check if the test environment exists with all the necessary software components.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Environmental Data Management</h4>
                <p>Our team ensures that all the required data sets are available for testing and that there is an agreement between the test data owners.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance Tools Management</h4>
                <p>We help you ensure a single point of contact for test environment maintenance and that an agreement has been reached regarding the quality of the test environment for the testing.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Test Environment Management Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Test Environment Management
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are several benefits of test environment management services for both the development team and the end-user. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps to speed up the software release, reduce infrastructure costs, and boost team productivity.</li>
              <li>It provides a stable and usable environment that has all the required software, hardware, databases, and other networking components.</li>
              <li>Automation in TEM can be effectuated using tools for workload automation, CI/CD, and configuration management.</li>
              <li>It helps to reduce the number of testing environments, which in turn reduces the overall costs.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing your test environment management services to us gives you access to a series of benefits. Some of the major reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We provide flexible and cost-effective pricing options that will suit your business requirements and budget perfectly.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, you can rest assured that your data is kept safe and handled only by authorized personnel.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO certified firm that ensures all services delivered are of the best quality at all times.</li>
              <li><strong>Skilled TEM Experts:</strong> Our team comprises some of the most talented and skilled test environment management specialists who are trained to work on the latest technologies.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required skills and expertise to ramp up the number of resources on the project as and when you need them.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams, including sales and project management, are available at all times to answer your queries via phone or email.</li>
              <li><strong>Quick Turnaround Time:</strong> Our team operates through several delivery locations, enabling us to deliver high-quality services within a short turnaround time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure a Stable Test Environment?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality test environment management and a series of other software testing services to clients globally. We have some of the most qualified and experienced TEM experts on board who can take care of all your requirements in a hassle-free manner.
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

export default TestEnvironmentManagement;