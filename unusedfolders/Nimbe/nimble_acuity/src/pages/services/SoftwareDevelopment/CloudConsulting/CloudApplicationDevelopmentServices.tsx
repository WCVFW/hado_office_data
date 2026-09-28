import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudApplicationDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Convert your legacy applications into more agile, flexible, and efficient apps by using the power of advanced cloud computing.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to make your legacy applications into agile and efficient applications? Are you on the lookout for skilled and experienced cloud application developers who can take care of your needs? Then, the best option for you would be to outsource cloud application development services to an experienced and talented service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such cloud application development service company that can take care of all your requirements with ease. We have some of the most experienced and skilled cloud computing experts on board who can cater to all your needs in a hassle-free manner. We make use of the latest tools while delivering top-notch services.
            </p>
          </div>

          {/* Cloud Application Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Application Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has been a leading provider of cloud application development services to global clients for over two decades. We understand each customer's specific needs and provide customized solutions. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Application Assessment:</strong> We have the skills to assess and understand your existing legacy applications and help you understand the changes needed for a cloud-based solution.</li>
              <li><strong>Rule Mining Services:</strong> Our team helps with accurate business rule mining services, enabling you to extract relevant information, analyze it, and re-mold it into a formal, natural language.</li>
              <li><strong>Cloud Migration Services:</strong> Our team provides accurate and error-free cloud migration for your existing applications, helping you move to a new setup based on industry standards without affecting business continuity.</li>
              <li><strong>Remediation Services:</strong> Our cloud application remediation services can enhance your application's functionalities, enabling easy maintenance and making it a part of a highly scalable framework.</li>
              <li><strong>Re-platform Services:</strong> Our experts have the skills to provide re-platform services for your apps, helping you move them to a less expensive and more efficient platform.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>IT Risk & Security Management</li>
              <li>Remote Monitoring Services</li>
              <li>Digital Forensics Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity for Cloud Application Development? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Cloud Application Development Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing cloud application development services to **Nimble Acuity** gives you access to a series of benefits. Some of the key factors for you to choose us as your partner are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> We offer flexible and cost-effective pricing that suits your business needs and budget.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, we ensure all the data you share with us is completely safe.</li>
              <li><strong>High-quality Services:</strong> Being an ISO certified firm, all services delivered by our team are of the best quality and completely bug-free.</li>
              <li><strong>Skilled Cloud Developers:</strong> We have some of the most experienced and skilled cloud application developers who can cater to all your development needs with ease.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated manager who will be the single point of contact for all your needs.</li>
              <li><strong>Scalable Services:</strong> Our team has the bandwidth to scale up the team size and ramp up the service requirements as and when you ask for it.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the best and latest software along with world-class office spaces.</li>
              <li><strong>Round the Clock Support:</strong> Our teams are available 24/7 to answer your queries via phone or email.</li>
              <li><strong>Short Turnaround Time:</strong> We operate through several delivery locations, allowing us to deliver the best quality services within a quick time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Application Development?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing top-quality cloud application development services and a plethora of other infrastructure management services. We have some of the most experienced cloud application developers on board who can take care of all your requirements in a hassle-free manner. We leverage the latest tools and technologies while delivering the best quality services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective cloud application development service provider? Then, you have come to the right place. Get in touch with us today!
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

export default CloudApplicationDevelopmentServices;