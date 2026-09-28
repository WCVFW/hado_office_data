import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ManagedApplicationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Managed Application Services
            </h2>
            <p className="text-lg text-gray-600">
              Avail fast, secure, and systemized managed application services at cost-effective rates starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The work processes are getting lengthier and more complex, demanding reliable applications for yielding greater business output. It has become crucial to keep your enterprise applications well-functioning, secure, and fast always for seamless business operations. Let **Nimble Acuity**'s experts manage your application portfolio so that you can focus on your core business competencies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides complete application management solutions for well-rounded application development, maintenance, QA, testing, and support, at cost-effective packages. We have decades of industry experience and a talented human resource pool consisting of skilled UX developers, software application engineers, project managers, and more. Our global development centers allow us to offer the advantage of onsite and offshore services support, simplifying application management systems and reducing costs.
            </p>
          </div>

          {/* Managed Application Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Managed Application Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The extensive range of our high-quality managed application services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Application Portfolio Planning:</strong> We help with gathering requirements, understanding the need for custom or pre-built applications, and modernizing legacy apps through re-engineering.</li>
              <li><strong>Application Development:</strong> Our team works in synchronization to offer agile application design and development solutions, including programming, UX design, and third-party integrations.</li>
              <li><strong>Application Testing Solutions:</strong> We ensure regular and continuous testing is undertaken to eliminate any discrepancies and perpetually test applications to offer valuable insights.</li>
              <li><strong>Application Maintenance and Support:</strong> Our team offers regular application upgrades, database cleansing, technical support, security evaluations, and ongoing bug fixes.</li>
              <li><strong>Application Database Management:</strong> We offer robust database management solutions, enabling a systematic process of creating, storing, retrieving, cleansing, and managing data.</li>
              <li><strong>Application Management Reporting:</strong> Our team also develops comprehensive reports detailing application performance, usage, and other useful insights.</li>
            </ul>
          </div>

          {/* Our Managed Application Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Managed Application Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** defines a suitable workflow with each of its clients to ensure hassle-free services and timely deliveries. Our standardized process involves the following crucial stages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Understanding Client's Needs:</strong> Our team first gains an in-depth understanding of your current IT systems and processes to identify your managed application needs.</li>
              <li><strong>Aiding in Migration or Up-gradation:</strong> After taking the handover of the legacy systems, our team evaluates and communicates the need for up-gradation of processes or migration.</li>
              <li><strong>Development and Implementation:</strong> Under this phase, our team successfully carries out application development, UI/UX design, testing, integration, and other activities.</li>
              <li><strong>Delivery and Maintenance:</strong> After the application goes live, we offer continuous maintenance and support along with successful training for your team.</li>
            </ul>
          </div>

          {/* What Makes Nimble Acuity Distinctive */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Makes Nimble Acuity the Most Distinctive Managed Application Service Provider?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choose **Nimble Acuity** as your managed application service provider to accelerate your business growth. The systematic and committed work of our outstanding team will allow you to function hassle-free and focus on your core competencies. We offer many benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> We offer adaptable and reasonable options to our clients, including monthly subscription, fixed-rate, and hourly pricing models.</li>
              <li><strong>Tailored Services:</strong> We custom-build our solutions to perfectly align with your current and future business objectives.</li>
              <li><strong>Exceptional Support:</strong> Our global presence ensures you have access to our customer support 24/7/365, allowing a substantial reduction in response time.</li>
              <li><strong>Futuristic Vision:</strong> Our team is dedicated to offering advanced application management services to help you prepare for the next-gen technological environment with AI, ML, and more.</li>
              <li><strong>Application-level SLAs:</strong> We provide application-level Service Level Agreements and are committed to fulfilling them within stipulated timelines.</li>
              <li><strong>Guaranteed Data Safety:</strong> Data security is our primary objective, and we have high-tech standardized safety systems installed at every level to ensure your data is always protected.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Applications?
            </h3>
            <p className="text-gray-700 mb-6">
              Our decades of industry experience make us one of the most trusted partners for outsourcing managed application services. We have expertise in working with a wide range of tools and technologies, including Microsoft (SharePoint, Office 365, Exchange), Oracle, SAP Hosting, Managed Multi-Cloud Services, and more.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today to get started and accelerate your business growth.
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

export default ManagedApplicationServices;