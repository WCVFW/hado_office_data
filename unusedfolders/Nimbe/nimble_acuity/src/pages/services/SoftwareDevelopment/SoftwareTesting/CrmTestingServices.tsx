import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CrmTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              CRM Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your CRM tested and ensure every module of the system is in place with no data loss.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your team unable to plan and implement a systematic CRM testing process? Are you unable to find the right set of experienced resources who can take care of all your CRM testing needs? Then, the best option for you would be to outsource CRM testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such CRM testing service providing company that can be your one-stop-shop for all your needs. We have some of the most skilled and experienced CRM testing experts on board who can leverage the power of the latest CRM testing tools and deliver top-notch services to clients around the globe.
            </p>
          </div>

          {/* What is CRM Testing? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is CRM Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              CRM testing is a procedure that ensures the software system is operating correctly. It verifies that information is being collected, saved, and retrieved as expected. For most businesses, a CRM is a crucial part of their operations, and if the system isn't well-tested, it can easily lead to a disaster.
            </p>
          </div>

          {/* CRM Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              CRM Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a pioneer in providing quality CRM application testing services to clients around the globe. Our experience has enabled us to understand each client's specific requirements and provide them with customized services within a quick time. Some of the key CRM product testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Security Testing</h4>
                <p>Security is one of the most important testing types for customer relationship management. Our team at Nimble Acuity can help you with accurate and flawless security testing for your CRM within a quick turnaround time, creating a safe and secure system for you and your customers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Network Testing</h4>
                <p>Our team has the required skills and expertise to provide quality and hassle-free network testing services. We help clients test security controls across their network and determine different risks and vulnerabilities, helping meet compliance mandates and validate security defenses.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ERP Testing</h4>
                <p>ERP testing for your software system helps in validating and verifying the functioning of the ERP software solution during its implementation. We, at Nimble Acuity, can help you check if the ERP is implemented correctly and is fully operational before it is launched.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Risk-based Testing</h4>
                <p>We have the required resources and bandwidth to provide clients with risk-based testing for their CRMs. We ensure that the software system passes all feature tests based on its risk of failure, detecting and correcting all defects to prevent undesirable outcomes.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing CRM testing services to us provides you with a plethora of benefits. Here are some key reasons to choose us as your CRM testing partner:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> We provide highly flexible and affordable pricing plans that suit your business requirements and budget.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all the data you share with us is completely safe and secure.</li>
              <li><strong>Experienced Software Testers:</strong> Our team at Nimble Acuity comprises some of the most qualified and experienced CRM testing specialists who can leverage the latest tools and deliver top-notch services.</li>
              <li><strong>High-quality Services:</strong> As an ISO certified firm, you can be assured that all the services delivered by our team are of superior quality and error-free.</li>
              <li><strong>Dedicated Project Manager:</strong> We will assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Easily Scalable Services:</strong> We have the bandwidth to scale up service requirements and increase the project team size as and when you demand it.</li>
              <li><strong>Short Turnaround Time:</strong> Our team operates through several delivery locations, enabling us to deliver services within a quick turnaround time.</li>
              <li><strong>Round the Clock Support:</strong> Our teams, including customer support, marketing, sales, and project management, are available at all times to answer your queries and resolve any issues.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for a Reliable CRM Testing Partner?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality CRM testing services and a plethora of other software testing services to global clients. We have some of the most qualified and experienced CRM testing experts who can take care of all your requirements with ease. We leverage the latest and best CRM testing tools and software to deliver superior quality services.
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

export default CrmTestingServices;