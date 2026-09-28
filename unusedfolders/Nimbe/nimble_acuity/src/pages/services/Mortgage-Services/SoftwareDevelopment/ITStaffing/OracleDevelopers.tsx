import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OracleDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Oracle Application Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire dedicated Oracle developers who can augment your team and build robust applications at prices starting from $2200/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If your company works with Oracle and its products or needs to augment its current team, **Nimble Acuity** can provide the staff augmentation services you are looking for. With years of expertise in IT staffing for Oracle application developers, we have provided skilled resources across various domains and for global customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have a team of Oracle developers who can meet any development needs and can be hired on a monthly, yearly, or part-time or full-time basis. We take staff augmentation seriously, regularly reviewing project schedules and individual performances to ensure our developers meet project goals and delivery timelines.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dedicated and Experienced Oracle Developers from Nimble Acuity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose our dedicated Oracle professionals, you are choosing qualified developers with extensive experience in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Oracle Forms 6, Forms 6i, and Forms 9i</li>
              <li>Oracle 10G databases and tools</li>
              <li>Oracle PL/SQL, SQR, and Pro*C</li>
              <li>Oracle 10G and 9i DBA</li>
              <li>Developer/2000 & Designer/2000</li>
              <li>Oracle application servers</li>
              <li>Oracle Conversions & Upgrades</li>
              <li>Oracle Forms 6i to Forms 10g Migration</li>
              <li>Oracle Business Intelligence & Discoverer</li>
              <li>Oracle HRMS & Project Resource Management</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-8 font-medium">
              We can provide cost-effective data management and integration, design and development, and application management services.
            </p>
          </div>

          {/* Core Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Oracle Application Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expansive team of Oracle experts and developers can offer a host of Oracle-based development services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Oracle Database Application Development</li>
              <li>Oracle Reports, financials, and Forms</li>
              <li>PDA / Mobile Application Development Using Oracle</li>
              <li>.Net Applications for Oracle Databases</li>
              <li>SQL / PL Programming</li>
              <li>Implementation of Oracle Mobile Servers</li>
              <li>Data Synchronization between Distributed Oracle Databases</li>
              <li>Oracle Database Installation and Management (8i, 9i, 10g, 11g)</li>
              <li>Oracle Application Server Installation and Management (9i, 10g, 11g)</li>
              <li>Oracle Database Migration across Multiple Platforms</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Oracle developers and consultants are experts in their field, providing a range of benefits that set us apart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Dedicated Professionals:</strong> We hire only the best, certified resources with extensive experience in Oracle development who adapt to your professional standards.
              </li>
              <li>
                <strong>Flexibility:</strong> We offer a wide range of options, from a full-time team for large organizations to part-time or hourly developers for smaller firms.
              </li>
              <li>
                <strong>Reduced Cost and Accurate Information:</strong> We help you manage critical information with ease while significantly reducing project costs.
              </li>
              <li>
                <strong>Assured Quality:</strong> Our developers work on high-end workstations with the latest software and keep you updated on progress via multiple communication channels.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Oracle Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              Opt for our Oracle staffing services and get a team of virtual application developers who will work as your extended workforce. We are experts in enterprise staffing and staff augmentation solutions for Oracle Application Development.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to outsource staffing services for Oracle programmers, consultants, human resources, or DBAs.
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

export default OracleDevelopers;