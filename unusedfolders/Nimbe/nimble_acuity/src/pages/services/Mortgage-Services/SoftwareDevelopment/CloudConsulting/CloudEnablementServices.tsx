import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudEnablementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Enablement Services
            </h2>
            <p className="text-lg text-gray-600">
              Unleash the full potential of your cloud capability, drive change, and compete at pace with our cloud enablement services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for innovative cloud enablement services to help you future-proof your IT investments and continually create value? Do you want to transform your enterprise into a cloud-enabled one to explore new streams of revenue? Do you want to cut costs while increasing your firm's agility and significantly improving the value and effectiveness of your IT infrastructure? If so, you can benefit tremendously from our cloud enablement solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading cloud enablement company with over 26+ years of experience in providing a wide range of software design, development, and implementation services. With our robust cloud enablement strategy, you can ensure that you easily and efficiently integrate, consolidate, and deliver services and applications through the cloud whenever and wherever required. Our cloud enablement services will help you increase productivity and give you the ability to rapidly scale up or down.
            </p>
          </div>

          {/* Cloud Enablement Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Enablement Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading cloud enablement service provider and offers a comprehensive range of services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Cloud Strategy and Consulting:</strong> We assess the maturity of your cloud deployment and the readiness of your IT infrastructure for migration. We help you implement a robust cloud enablement strategy to take you to the desired end-point of your cloud journey.
              </li>
              <li>
                <strong>Developing Cloud-enabled Apps:</strong> We help clients refactor their apps by turning legacy applications into modern, cloud-native ones to work seamlessly in the cloud environment.
              </li>
              <li>
                <strong>Cloud Migration Services:</strong> We provide highly secure and risk-free cloud migration services by leveraging a full set of proven tools and approaches to seamlessly migrate your IT infrastructure, data, platforms, and applications.
              </li>
              <li>
                <strong>DevOps Services:</strong> We design a customized DevOps strategy that brings in significant value by streamlining your development and operation processes. We offer configuration management, DevOps consulting, containerization, and continuous automation.
              </li>
              <li>
                <strong>IoT Solutions:</strong> Our extensive IoT experience will help you effectively connect and scale, strategically analyze new data, gain actionable insights, and integrate business processes.
              </li>
              <li>
                <strong>Cloud Managed Services:</strong> We provide comprehensive services related to infrastructure and network operations, service desk, site reliability engineering, managed security operations, and DRaaS, among others, to reduce your physical infrastructure footprint and foster rapid innovation.
              </li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Infrastructure Management Services</li>
              <li>Software Development Technologies</li>
              <li>Mobile App Development</li>
              <li>Custom Software Development</li>
            </ul>
          </div>

          {/* Why Outsource to Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Cloud Enablement Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing cloud enablement services to **Nimble Acuity** provides you with a full set of advantages. We are a highly reliable cloud enablement company with 26+ years of experience. Some of the other key reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our solutions are priced extremely affordably, with flexible hourly and FTE options.</li>
              <li><strong>High-quality Services:</strong> We are ISO-certified and committed to excellence in every project we undertake.</li>
              <li><strong>Tools and Technologies:</strong> Our team is highly trained and uses the latest cloud tools, techniques, and workflows to provide cutting-edge services.</li>
              <li><strong>Superb Infrastructure:</strong> We provide our cloud engineers and experts with world-class offices and resources to perform at their maximum potential.</li>
              <li><strong>Enhanced Profitability:</strong> We help our clients leverage the full power of their cloud investment at cost-effective prices.</li>
              <li><strong>Experienced Team:</strong> Our cloud enablement team has decades of experience in designing, assessing, and implementing a wide variety of IT solutions.</li>
              <li><strong>Short Turnaround:</strong> Our experts will always provide their services quickly since we are highly stringent about meeting all our deadlines.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Business with Cloud Enablement?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is one of the leading providers of cloud enablement services. We have a team of highly qualified, dedicated, and certified cloud engineers that is ready to tackle any cloud challenge with the utmost professionalism. We leverage the best and latest cloud tools and technologies to deliver top-notch cloud enablement services at cost-effective prices.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a cost-effective and professional cloud enablement service provider, get in touch with us today!
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

export default CloudEnablementServices;