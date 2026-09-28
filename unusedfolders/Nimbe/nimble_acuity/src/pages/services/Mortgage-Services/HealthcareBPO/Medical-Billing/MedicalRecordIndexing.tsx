import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalRecordIndexing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Record Indexing Services
            </h2>
            <p className="text-lg text-gray-600">
              Manage, retrieve, and organize patient records efficiently with Nimble Acuity’s
              specialized medical record indexing services—ensuring accuracy, HIPAA compliance, 
              and seamless integration with your existing systems.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Handling large volumes of patient records can overwhelm healthcare providers,
              billing professionals, and insurers. Nimble Acuity bridges this gap by providing
              precise, organized, and accessible medical record indexing solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services reduce billing errors, speed up insurance claim processing, and 
              let you focus on delivering excellent patient care.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Indexing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li><strong>Patient Demographics and Records Indexing:</strong> Accurate capture of patient details into your EMR for quick retrieval and privacy compliance.</li>
              <li><strong>Prescriptions and Doctor Orders Indexing:</strong> Easy access to treatment plans and medication history through precise indexing.</li>
              <li><strong>Medical Charts and Reports Indexing:</strong> Integration of charts and reports into patient records for complete medical history.</li>
              <li><strong>EOBs Indexing:</strong> Quick access to Explanation of Benefits (EOBs) for seamless claims processing.</li>
              <li><strong>Clinical Data and Correspondence Indexing:</strong> Integration of clinical data and patient communication into comprehensive records.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Seamless Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Collection and Sorting:</strong> Gather physical and digital records and organize them systematically for easy access.</li>
              <li><strong>Scanning and Digitization:</strong> Convert physical records into secure digital formats for easy management.</li>
              <li><strong>Indexing and Quality Check:</strong> Assign unique identifiers and perform rigorous quality checks for HIPAA compliance.</li>
              <li><strong>Storage and Retrieval:</strong> Maintain high standards with strict access controls for secure data management.</li>
              <li><strong>Maintenance and Updates:</strong> Regularly update and maintain records to ensure current and accurate patient information.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> High-quality services at cost-effective rates.</li>
              <li><strong>Data Security:</strong> Strict protocols to protect sensitive patient data.</li>
              <li><strong>HIPAA Compliant:</strong> Full compliance with legal and regulatory standards.</li>
              <li><strong>World-Class Infrastructure:</strong> Latest tools for fast and accurate indexing.</li>
              <li><strong>Superior Quality:</strong> Rigorous quality control ensures reliable records.</li>
              <li><strong>Quick Turnaround:</strong> Fast and efficient access to patient information.</li>
              <li><strong>Easily Scalable:</strong> Flexible solutions that grow with your needs.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals handling diverse medical records.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock assistance for any queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Healthcare Data Management?
            </h3>
            <p className="text-gray-700 mb-6">
              Efficient medical record indexing improves operational efficiency, enhances patient care,
              ensures accurate billing, and accelerates claim processing.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact Nimble Acuity today to streamline your operations and focus on delivering
              excellent patient care.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MedicalRecordIndexing;
