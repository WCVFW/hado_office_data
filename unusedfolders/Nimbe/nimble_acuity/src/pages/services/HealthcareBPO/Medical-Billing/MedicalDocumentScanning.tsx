import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalDocumentScanning: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Document Scanning Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose <strong>Nimble Acuity's</strong> HIPAA-certified medical document scanning solutions 
              for fast, efficient service and access to OCR tools to scan bulk documents starting at just $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Medical document scanning is the first step toward building a transparent and well-managed 
              <strong> Electronic Health Record (EHR)</strong> system. If your practice is still relying on 
              paper-based records, moving to an EHR will streamline form filling, claims filing, 
              and improve both revenue and patient satisfaction. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over 6 years, <strong>Nimble Acuity</strong> has partnered with hospitals, clinics, and physician groups, 
              ensuring secure, accurate, and efficient scanning. By combining OCR with AI-powered automation, 
              we enhance <strong>Revenue Cycle Management (RCM)</strong> while giving your staff more time to focus on patient care.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Document Scanning Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Medical Document Scanning:</strong> High-volume, quick-turnaround scanning with OCR tools 
                to streamline access and filing.
              </li>
              <li>
                <strong>OCR Conversion:</strong> Convert scanned data into usable formats like Word, PDF, and Excel for easy access.
              </li>
              <li>
                <strong>Medical Record Indexing:</strong> Organized indexing for fast searchability and efficient data management.
              </li>
              <li>
                <strong>Medical Record Storage:</strong> Secure storage solutions across EHR systems, cloud, or physical media (CD, DVD, thumb drives).
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Document Scanning Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> Assess scanning needs, EHR type, and format preferences.</li>
              <li><strong>Data Capture with OCR:</strong> Accurate scanning and indexing to avoid errors.</li>
              <li><strong>Validation:</strong> Thorough quality check of scanned data for accuracy.</li>
              <li><strong>Format Conversion:</strong> Patient records delivered in preferred digital formats.</li>
              <li><strong>Report Dispatch:</strong> Final workflow documented and shared with clients.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Physician Billing Services</li>
              <li>Medical Data Entry Services</li>
              <li>DME Billing Services</li>
              <li>Patient Demographic Entry</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Patient Data Security:</strong> Strict compliance with SLA and HIPAA standards.</li>
              <li><strong>Value-for-Money:</strong> Save on hiring and OCR technology costs.</li>
              <li><strong>Error-Free Services:</strong> Rigorous quality checks by experienced human operators.</li>
              <li><strong>State-of-the-Art Technology:</strong> Advanced scanning and data capture solutions.</li>
              <li><strong>Experienced Team:</strong> Over 10 years of expertise in medical data scanning.</li>
              <li><strong>Quick Turnaround:</strong> Faster delivery enabled by top-tier infrastructure.</li>
              <li><strong>Scalable Services:</strong> Flexible solutions that grow with your practice.</li>
              <li><strong>All-Round Support:</strong> Dedicated support available across multiple channels.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Nimble Acuity</strong> assisted a medical billing firm in Florida with a smooth ICD-10 migration.
              </li>
              <li>
                Enabled a healthcare company to recover its accounts receivable and improve cash flow after repeated denials.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to express my gratitude for the hard work that the Data and AR teams have done 
              with EJ practice. Their efforts have truly paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              – RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Medical Document Scanning Today
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> ensures 100% accurate, secure, and fast medical document scanning. 
              By outsourcing to us, you gain experienced professionals, cost savings, and improved patient care. 
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Simplify your workflow and accelerate payments—get an instant quote today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MedicalDocumentScanning;
