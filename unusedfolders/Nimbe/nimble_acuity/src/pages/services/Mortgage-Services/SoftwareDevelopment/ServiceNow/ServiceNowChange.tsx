import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ServiceNowChange: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Change and Release Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your ServiceNow workflows and simplify changes at cost-effective prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing complex business operations across multiple teams requires a systematic approach. **ServiceNow** is an incredible automation platform, but it often needs customization and monitoring to suit your unique organizational needs. This is where a reliable partner like **Nimble Acuity** can make a significant difference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a leading provider of **ServiceNow change and release management services** with both the expertise and experience to help clients handle and manage ServiceNow changes with ease. Our team of capable professionals has the knowledge and qualifications to deliver high-quality solutions at affordable rates, ensuring your operations are seamless and efficient.
            </p>
          </div>

          {/* Our Change and Release Management Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow Change and Release Management Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Streamlined Scheduled Changes</h4>
                <p>We help you establish a repeatable and approved process for routine, low-risk changes, ensuring every execution is streamlined and consistent.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Single System of Record</h4>
                <p>With our solutions, you can ensure a smooth flow of data and activities between your SDLC, CMDB, and problem management systems for a unified record.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Native Mobile Interface</h4>
                <p>Our solutions offer a mobile-friendly interface, giving you the flexibility to execute, approve, and monitor changes from any device, at any time, and from any location.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Services:</strong> Our motto is to offer high-quality services at affordable rates, ensuring every organization, big or small, can benefit from our expertise.</li>
              <li><strong>Complete Quality Assurance:</strong> Our services are popular because of the superior quality of our solutions and our client-centered approach to every project.</li>
              <li><strong>ISO-Certified Company:</strong> We are an **ISO-certified firm**, which means all our practices and methodologies meet the highest industry standards for quality and reliability.</li>
              <li><strong>Single Point of Contact:</strong> When you partner with us, we assign you a dedicated project manager who will serve as your single point of contact for all your queries and needs.</li>
              <li><strong>24/7 Assistance:</strong> Our customer care professionals are available around the clock to assist you with any questions or concerns you may have.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your ServiceNow Workflows?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of ServiceNow services, with extensive experience in offering various enterprise solutions to clients globally. We deliver services of the highest quality, backed by expertise and an understanding of what it takes to make your day-to-day business operations easier.
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

export default ServiceNowChange;