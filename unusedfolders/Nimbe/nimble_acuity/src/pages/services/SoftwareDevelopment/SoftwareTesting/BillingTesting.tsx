import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const BillingTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Billing Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your billing systems tested using our comprehensive methodologies within a quick turnaround time from our experts.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to comprehensively test your billing software system before it is released into the market? Are you failing to find the right experienced and skilled billing testing specialists to handle your requirements? Then, the best option for you would be to outsource billing testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading billing testing service provider that can be your one-stop-shop for all your billing testing requirements. We have some of the most talented and skilled billing testing experts who can take care of all your needs with ease. We leverage the latest tools and technologies while delivering top-notch billing testing services.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Billing Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality billing testing services to global clients for years. Our extensive experience enables us to understand each client's unique requirements and provide them with customized services within a quick turnaround time. Some of the key billing testing processes we help you with include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Algorithms to test the ratings for all the testing scenarios.</li>
              <li>Developing fully flexible automated infrastructure for billing systems.</li>
              <li>Multi-level testing which will help in combining different test scenarios in one single cycle.</li>
              <li>Testing integration with different systems and the creation of CDR files.</li>
              <li>Planning and executing comprehensive test scenarios that will simulate real business rules.</li>
              <li>Developing a virtual environment with real data such as CDRs, price plans, and customers.</li>
              <li>Simulating real test scenarios using data such as interface traffic, CDRs, and database backup.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Billing Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Innovative and new billing models are being added and modified which can cause a series of mistakes. This can cost you a lot of time and money and hence need to be tested. Some of the other key benefits of billing testing services are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 lg:columns-3">
              <li>Easily manage subscription billing.</li>
              <li>Reduce any kind of administration.</li>
              <li>Create transparency for your billing processes.</li>
              <li>Simplify the reporting processes.</li>
              <li>Minimize the errors in the billing process.</li>
              <li>Supports usage-based billing for IoT.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Billing Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing billing testing services to **Nimble Acuity** can give you access to a series of benefits that you can take advantage of. Some of the key reasons for you to choose us as your billing testing service provider are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** We provide highly cost-effective and flexible pricing options that will suit your business requirements and budget perfectly.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified organization that ensures all your data is kept safe at all times.</li>
              <li>**Skilled Testers:** Our team comprises some of the most skilled and experienced billing testing experts who are trained to work with the best tools.</li>
              <li>**Superior Quality:** We are an ISO certified firm, and all our services go through a multi-level quality check process.</li>
              <li>**Single Point of Contact (SPOC):** We will assign a dedicated project manager who will be your single point of contact for all your needs.</li>
              <li>**Highly Scalable:** We have the bandwidth and skills to scale up the service requirements and increase the number of resources on the project as and when needed.</li>
              <li>**Quick Turnaround Time:** Our team operates from several delivery locations, allowing us to deliver quality services within a quick turnaround time.</li>
              <li>**World-class Infrastructure:** We have access to the best infrastructure in terms of world-class office spaces and the latest billing testing tools and software.</li>
              <li>**24/7 Customer Support:** Our teams are available around the clock to answer your queries via phone or email.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a leading provider of billing testing services and a series of other software testing services to clients around the globe. We have some of the most skilled and talented billing testing experts on board who can take care of all your requirements with ease. We leverage the latest and best billing testing tools and technologies while delivering top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and skilled billing testing service provider? Then, your search ends here. Get in touch with us today!
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

export default BillingTesting;