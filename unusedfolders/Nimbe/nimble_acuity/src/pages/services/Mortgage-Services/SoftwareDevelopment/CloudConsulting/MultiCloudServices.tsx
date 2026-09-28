import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MultiCloudServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Multi-Cloud Services
            </h2>
            <p className="text-lg text-gray-600">
              Take advantage of the multi-cloud environment for the security and flexibility it offers to manage your apps and workload requirements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you contemplating the adoption of multi-cloud services to take advantage of public, private, and on-premises solutions? **Nimble Acuity**'s multi-cloud managed services can help you achieve the complete benefits of the best multi-cloud services. As a reputed multi-cloud service provider, we manage IT for corporates and conglomerates. Our rich expertise enables us to provide the platform to allow you to interact with traditional and legacy IT environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a strategic multi-cloud service provider, we give you access to a multi-cloud environment to let you mix and match services to suit your business needs. We can free up your internal staff to do more. When you outsource multi-cloud services, we give you the ability to handle next-gen and legacy apps to tackle workloads, migration, and compliance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Multi-Cloud Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At **Nimble Acuity**, we enable businesses to leverage our multi-cloud services to get further with application development and deployment. Our services include partnerships with leading cloud platforms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Google Cloud Platform Partnership:</strong> We focus on delivering secure and seamless IT modernization to bring scalable performance to your fingertips.</li>
              <li><strong>Amazon Web Services (AWS) Partnership:</strong> As an APN consulting partner, we are responsible for designing, architecting, and migrating apps and data on AWS. We offer services such as:
                <ul>
                  <li>Application Support and Management</li>
                  <li>Migration Support</li>
                  <li>Disaster Recovery as a Service (DRaaS)</li>
                  <li>Hybrid Connectivity with AWS</li>
                  <li>SAP on AWS</li>
                </ul>
              </li>
              <li><strong>Microsoft Azure Partnership:</strong> If your workload demands the transformative power of Microsoft Azure, we empower you with scalable and flexible solutions. Our services include:
                <ul>
                  <li>Microsoft Azure Platform Support</li>
                  <li>SAP on Azure</li>
                  <li>Windows Virtual Desktop (WVD)</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Multi-Cloud Services to Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being a top multi-cloud services company, we help you move away from dated methods and stay ahead of the curve. By partnering with us, you can have many advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Transparent Costing:</strong> We help you customize your service to avoid unnecessary costs.</li>
              <li><strong>Efficient Monitoring:</strong> It's easier to monitor the performance of your data and apps with our multi-cloud services because we provide trackers and efficient analytics.</li>
              <li><strong>Accelerated Deployment:</strong> By choosing our services, you can accelerate deployment and avoid potential business risks.</li>
              <li><strong>ISO Certified Company:</strong> **Nimble Acuity** is an ISO 9001:2015 certified multi-cloud service provider.</li>
              <li><strong>Enhanced Security:</strong> We have robust security in place to fortify your confidential data and prevent conflicts.</li>
              <li><strong>Scalable Services:</strong> Our multi-cloud services are scalable and let you take advantage of various cloud networks to avoid risk to your assets.</li>
              <li><strong>Reliable Customer Support:</strong> Our customer support is reliable and available irrespective of the time zone.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize with Multi-Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              Over the last two decades, our team has serviced clients via a wide range of multi-cloud services. We have helped them handle projects under a broad range of infrastructure management services to deliver top-notch performance. From preliminary evaluation to the actual implementation, we deliver on our promises.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to know more about our multi-cloud service offerings, and how we can help you break new ground in business efficiency.
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

export default MultiCloudServices;