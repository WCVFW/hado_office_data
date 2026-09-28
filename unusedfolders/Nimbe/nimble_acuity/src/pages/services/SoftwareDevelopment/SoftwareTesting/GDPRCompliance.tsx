import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GDPRCompliance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              GDPR Compliant Software Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Make your software application GDPR compliant and gain customer confidence by choosing our expert team's solutions at prices starting at just $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to make your software application compliant with the General Data Protection Regulation (GDPR)? Are you falling short of resources who are skilled and experienced to handle your GDPR compliance requirements? Then, the best option for you is to outsource data privacy governance solutions for GDPR to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading GDPR compliance solution providing company that can be your one-stop-shop for all your needs. GDPR is a legal framework that ensures the data security and privacy of customer data of the European Union. It covers all companies that deal with the information of EU citizens around the globe.
            </p>
          </div>

          {/* GDPR Compliant Software Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              GDPR Compliant Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              With over two decades of experience, we provide customized GDPR compliance solutions to suit your unique business objectives. Our key services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Database Security Testing</h4>
                <p>
                  We take database security and sensitive data discovery very seriously. Our team leverages the latest tools and technologies to provide accurate database security testing services, ensuring your data is handled with the utmost care.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Security Testing</h4>
                <p>
                  Data security testing is of utmost importance before a software application is launched. Our expert testers help you with accurate data security testing to ensure your applications are fully compliant with GDPR.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our GDPR Compliant Testing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our GDPR Compliant Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We follow a streamlined and systematic process to ensure high-quality and timely service delivery:
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Application Assessment:</strong> We begin with a GDPR readiness assessment by understanding your application and its current test data.
              </li>
              <li>
                <strong>Test Planning:</strong> Our team creates a detailed test plan, defining a strategy and preparing a comprehensive GDPR compliance checklist.
              </li>
              <li>
                <strong>Execution:</strong> We execute application tests according to the plan, leveraging both manual and automated methods.
              </li>
              <li>
                <strong>Test Reporting:</strong> In the final step, we generate an overall testing report and deliver it to you, providing a clear overview of our findings.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing us for GDPR compliance services provides you with a plethora of benefits.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Packages:</strong> Our solutions are highly cost-effective and can be customized to fit your business requirements and budget.</li>
              <li><strong>100% Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, we ensure your data is completely secure and handled only by authorized personnel.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO certified organization, guaranteeing that all services delivered are of the highest quality.</li>
              <li><strong>Skilled GDPR Compliance Experts:</strong> Our team of qualified and experienced specialists is trained to work on the latest technologies to provide high-quality services.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated project manager to be your single point of contact for all your needs.</li>
              <li><strong>Highly Scalable Services:</strong> We have the skills and expertise to scale up service requirements and ramp up resources as and when needed.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the latest data masking and encryption tools along with world-class office spaces.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available 24/7 to answer your queries via email or phone.</li>
              <li><strong>Quicker Turnaround Times:</strong> Our global delivery centers give us a time zone advantage, allowing us to deliver quality services within a short turnaround time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure GDPR Compliance?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality GDPR compliance services. We have some of the most experienced and talented experts on board who can take care of all your requirements in a hassle-free manner, leveraging the latest tools and technologies to deliver top-notch services.
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

export default GDPRCompliance;