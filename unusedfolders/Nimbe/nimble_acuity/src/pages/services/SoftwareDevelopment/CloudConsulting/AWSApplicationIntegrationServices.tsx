import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AWSApplicationIntegrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              AWS Application Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Integrate serverless applications and distributed systems with our services at competitive rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Struggling to build a virtual computing environment with seamlessly functioning applications and operating systems? Or are you worried about safeguarding large volumes of your organizational data? Do you want to scale your constrained resources based on your requirements? AWS application service integration is the solution to all your concerns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is a set of integration services that allow you to communicate between decoupled components. Choosing a reliable provider like **Nimble Acuity** enables you to boost your operational efficiency, enhance data security, and scale your applications and servers to your requirements. We are a leading provider of AWS services and other infrastructure management solutions, offering the best integration services at reasonable rates.
            </p>
          </div>

          {/* AWS Mobile Application Integration Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              AWS Mobile Application Integration Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our AWS application integration services offer a wide range of solutions that integrate with almost any app, helping you create scalable and durable solutions, which include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>AWS Simple Notification Service (SNS):</strong> We create strategies to ensure message reliability and offer automated scalability to millions of messages per second. Our FIFO topics allow for ordered and duplicate-free message processing.</li>
              <li><strong>AWS Simple Queue Service (SQS):</strong> We help you send, store, and receive messages among software components in any volume. We use FIFO message queues for guaranteed one-time processing and standardized queues for maximizing bandwidth and best-effort delivery.</li>
              <li><strong>AWS API Gateway:</strong> We use API Gateways to provide visual dashboards for monitoring API calls, and integrate with Amazon CloudWatch to track key metrics like latency and failure rates. We also implement custom plans for throttling and managing multiple API versions.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Software Development Technologies</li>
              <li>Enterprise Solutions Outsourcing</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity as an AWS Application Integration Services Company?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide customized solutions that help you leverage a powerful cloud computing platform to build and deploy native applications via the cloud. Here are some of the benefits of choosing us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective:</strong> We offer our Amazon Web Services at very affordable rates, helping you to get the best out of your AWS investments.</li>
              <li><strong>Data Security:</strong> As an ISO 9001 and ISO 27001-certified company, we are built on a mature quality management framework and ensure your data is always secure.</li>
              <li><strong>High Quality:</strong> We ensure you always get top-quality application integration services that are fully compliant with all specifications.</li>
              <li><strong>Tools and Technologies:</strong> All our Amazon Web Services experts have hands-on experience in using various cloud technologies and leverage the latest versions of AWS to deliver quality services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for Seamless Integration?
            </h3>
            <p className="text-gray-700 mb-6">
              We are one of the leading service providers for AWS application integration services. Our expertise, world-class infrastructure, and proven track record have made us the preferred provider for businesses worldwide. Be it migration, storage, integration, or specialized implementation support, outsourcing AWS application integration services to us helps you achieve seamless integration at affordable rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get an agile and scalable foundation that minimizes your operational responsibilities with our customized services. Contact us today and explore new possibilities.
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

export default AWSApplicationIntegrationServices;