import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OracleDBA: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Oracle Database Administrators
            </h2>
            <p className="text-lg text-gray-600">
              Find hard-to-find Oracle DBAs to manage and optimize your database environment, available for full-time, part-time, or hourly engagement.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As the leading provider of databases, Oracle's reliability and advanced features make it a top choice for organizations worldwide. However, managing these complex systems requires dedicated database administrators (DBAs) who can apply advanced features and handle upgrades. Finding and retaining Oracle DBAs with the right skill sets is a constant challenge for organizations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is where outsourcing your Oracle DBA services becomes a strategic advantage. At **Nimble Acuity**, we provide skilled Oracle database consultants who understand the architecture and processes of an Oracle database. Our dedicated professionals can handle everything from designing and developing databases to migrating them across platforms, helping your company succeed in a multifaceted system environment.
            </p>
          </div>

          {/* Expertise */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity's Expertise in Oracle Technologies
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our dedicated Oracle DBAs have extensive expertise in the following Oracle technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Real Application Clusters (RAC)</li>
              <li>Recovery Manager (RMAN)</li>
              <li>Cluster Ready Services (CRS)</li>
              <li>Grid</li>
              <li>Oracle Enterprise Manager (OEM)</li>
              <li>STATSPACK</li>
            </ul>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Oracle DBA Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you hire a dedicated Oracle DBA from Nimble Acuity, you get access to a full suite of services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Upgrading and installing Oracle applications and server tools.</li>
              <li>Planning future storage requirements and allocating current system storage.</li>
              <li>Creating table spaces and primary database storage structures.</li>
              <li>Making modifications to the database structure as needed.</li>
              <li>Maintaining system security and managing user access.</li>
              <li>Ensuring compliance with your Oracle license agreement.</li>
              <li>Optimizing and monitoring database performance.</li>
              <li>Creating backup plans for database recovery and restoring data.</li>
              <li>Contacting Oracle Corporation for technical support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of Outsourcing Oracle DBA Staffing to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Reliable and Cost-Effective:</strong> Get reliable, timely, and cost-effective Oracle database system administration.
              </li>
              <li>
                <strong>Expert 24/7 Monitoring:</strong> Our certified and skilled Oracle DBAs provide expert monitoring, performance tuning, and troubleshooting on a 24/7 basis.
              </li>
              <li>
                <strong>Flexible Hiring Models:</strong> Choose from full-time, part-time, or hourly dedicated DBAs, so you only pay for what you need.
              </li>
              <li>
                <strong>Enhanced Performance:</strong> Experience increased database performance and decreased downtime with our expert tuning.
              </li>
              <li>
                <strong>Onsite and Offsite Flexibility:</strong> You have the freedom to choose between onsite and offsite Oracle database administrators.
              </li>
              <li>
                <strong>Customized Services:</strong> Our services are tailored to your specific project requirements, ensuring a perfect fit.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Oracle DBAs?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity's staff augmentation services can help you employ hard-to-find Oracle database administrators who can immediately meet your Oracle administration and management needs. With our dedicated Oracle-certified DBAs handling all your requirements on a 24/7 basis, you can be sure to achieve your business goals with ease.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Our IT staffing services will also help you save the cost and time required for internal training and skill development. Contact us today to address the Oracle database administration requirements of your company.
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

export default OracleDBA;