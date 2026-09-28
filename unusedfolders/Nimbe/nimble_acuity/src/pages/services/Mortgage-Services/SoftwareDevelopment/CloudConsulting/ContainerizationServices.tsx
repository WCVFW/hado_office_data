import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ContainerizationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Containerization Services
            </h2>
            <p className="text-lg text-gray-600">
              Accelerate deployment, streamline workflows, and minimize infrastructure conflicts with our containerization solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Struggling to manage huge enterprise-wide applications? Are underlying infrastructure issues further complicating matters? Limit the wastage of resources and bundle up everything your applications need to run, from binary codes and configuration files to other dependencies, with our containerization solutions. Businesses worldwide are taking advantage of portability, distributed configuration, and single server efficiency by outsourcing containerization services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a reputed containerization services company offering secure solutions to extend your applications and legacy data centers into container ecosystems. Our containerized data center solutions help you run multiple apps in isolated spaces on the same operating system to increase efficiency. We provide end-to-end services, including Container as a Service (CaaS), at nominal rates.
            </p>
          </div>

          {/* Mobile Containerization Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mobile Containerization Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Using containerization makes your applications cloud-agnostic and helps you deploy them independently without depending on the hosting partner. Our containerization consulting services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Container Plugin Development:</strong> We help you with the development and deployment of volume, security, and authorization plugins such as Docker network and Kubernetes scheduler extensions.</li>
              <li><strong>Application Deployment & Modernization:</strong> We convert monolithic applications to a microservices architecture, deploy applications to cloud platforms, and assist in application re-architecting and deployment.</li>
              <li><strong>Deployment Automation:</strong> Get quick and secure deployment solutions, where we help you build and release complex applications using tools such as Kubernetes and Docker.</li>
              <li><strong>Container as a Service (CaaS):</strong> We provide container-based virtualization services to help you upload, organize, scale, run, and manage containers with utmost security.</li>
              <li><strong>Container Monitoring:</strong> We offer multiple monitoring options, including multi-layer monitoring for containerized deployments and single-pane monitoring for supervising services and resources.</li>
              <li><strong>Container Security:</strong> We safeguard your container management stack, check for malicious behavior, and integrate security policies and tools to enhance container security.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Enterprise Solutions Outsourcing</li>
              <li>Custom Software Development</li>
              <li>Network Management Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why is Nimble Acuity the Preferred Containerization Services Company? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why is Nimble Acuity the Preferred Containerization Services Company?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you outsource containerization services to us, we help you streamline your workflows and minimize overhead. Some of the benefits of partnering with us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing:</strong> We provide flexible pricing options, and our customized solutions ensure you pay only for what you use.</li>
              <li><strong>Foolproof Deployment:</strong> Our step-by-step technical analysis process assures you foolproof deployment of all your applications in the container ecosystems.</li>
              <li><strong>Stringent Data Security:</strong> We follow strict data security rules to ensure all your applications are safely deployed and hosted in the software containers.</li>
              <li><strong>World-class Infrastructure:</strong> We have all the necessary executables to support your containerization needs, whether for small microservices or large software applications.</li>
              <li><strong>Skilled Deployment Specialists:</strong> Our team of containerization experts is highly qualified, trained, and passionate about providing you with the best solutions that precisely cater to your needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Deployment?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a top infrastructure management services company with decades of experience in offering customized solutions. Our experts are qualified and equipped to assist you with everything from primary evaluation to integrating advanced features in the containers. The support we offer enables you to increase your DevOps efficiency, minimize infrastructure challenges, and use all your available computing resources without any operational overhead.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to switch from a complicated monolithic architecture to service-based containers? Get in touch with us today!
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

export default ContainerizationServices;