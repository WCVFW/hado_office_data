import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const HybridCloudServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hybrid Cloud Services
            </h2>
            <p className="text-lg text-gray-600">
              Develop smarter strategies to drive real business transformation with our services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to develop cloud solutions that help you optimize your workloads and data placement? Do you want to apply intelligent and responsive solutions to enable hybrid cloud services to run your business efficiently? Partnering with a reliable hybrid cloud services company is the best option for you. If you want scalable and flexible hybrid cloud solutions, you're in the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading hybrid cloud managed services company with a dedicated team of hybrid cloud professionals. We have extensive experience assisting companies in optimizing and scaling their hybrid cloud operations. With our hybrid cloud services and solutions, you can better navigate complicated cloud patterns and get the best results for your company.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Hybrid Cloud Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading provider of cloud services and are equipped to help you address various concerns and challenges associated with hybrid cloud. Some of the top hybrid cloud services we offer are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Hybrid Cloud Storage Solutions:</strong> We provide innovative hybrid cloud storage solutions to accommodate your requirements, from on-premises to private and public cloud storage.</li>
              <li><strong>Hybrid Cloud Management Solutions:</strong> Our solutions help you optimize and manage your hybrid cloud operations and processes effectively.</li>
              <li><strong>Hybrid Cloud Security Solutions:</strong> We ensure complete security in the hybrid cloud environment without any scope for data breaches.</li>
              <li><strong>Hybrid Cloud Strategy Consulting:</strong> Our hybrid cloud experts provide your team with the best strategies and consulting benefits to develop ideal solutions that precisely cater to your requirements.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Nimble Acuity is the Preferred Hybrid Cloud Company
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing hybrid cloud services to us comes with a wide range of benefits. Here are some important reasons to choose our hybrid cloud solutions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our hybrid cloud services are highly affordable and provide you with a clear picture of the resources required.</li>
              <li><strong>Expert Professionals:</strong> Our team is comprised of highly experienced professionals with real-world experience in managing hybrid cloud environments.</li>
              <li><strong>Project Quality and Data Security:</strong> We follow tried and tested practices to provide the best quality services, and complete data security is a key benefit.</li>
              <li><strong>Advanced Tools:</strong> Our skilled resources leverage advanced tools and technologies to provide you with the best quality services and ensure great results.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Cloud Strategy?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading hybrid cloud company serving a global clientele for over two decades. We have the experience and expertise to provide customized hybrid cloud services and create perfect solutions for hybrid cloud computing and other operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Our hybrid cloud support enables you to explore and choose the ideal option for your legacy workloads, strategically meet your application and infrastructure needs, and seamlessly adopt cloud computing in your digital transformation journey. Unleash more value from your cloud strategy with our services. Grab your free quote now and explore your options.
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

export default HybridCloudServices;