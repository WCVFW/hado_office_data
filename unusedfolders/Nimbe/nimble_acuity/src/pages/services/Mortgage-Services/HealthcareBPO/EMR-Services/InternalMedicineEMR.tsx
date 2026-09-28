import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const InternalMedicineEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Internal Medicine EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline patient care, enhance productivity, and ensure compliance with our expert <strong>Internal Medicine EMR services</strong> tailored for your practice.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your internal medicine practice struggling to manage complex workflows and compliance? <strong>Nimble Acuity</strong> offers skilled EMR specialists who provide customized solutions to enhance efficiency and accuracy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>Internal Medicine EMR services</strong> enable seamless access to patient records, streamlined workflow management, and mobile-friendly solutions so your team can focus exclusively on patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Internal Medicine EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li>Optimization of E&M Coding</li>
              <li>Data Mining Report Compilation</li>
              <li>Enterprise-level Messaging</li>
              <li>Integrated Knowledge Sharing System</li>
              <li>Auto Capture of Notes</li>
              <li>Workflow Editor</li>
              <li>Management of Referral</li>
              <li>Clinical Overview</li>
              <li>ePrescription</li>
              <li>Document Imaging</li>
              <li>Computerized Format of Physician Authorization</li>
              <li>Physical Exams based on Templates</li>
              <li>Interactive and Intuitive KPI Dashboards</li>
              <li>Remittance Tracker</li>
            </ul>

            <h4 className="text-xl font-semibold text-[#006A7C] mt-8 mb-4">
              Subspecialties Covered
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Allergy and Immunology</li>
              <li>Rheumatology</li>
              <li>Substance Abuse Disorder</li>
              <li>Psychiatric Illness</li>
              <li>Otolaryngology</li>
              <li>Neurological Disorder</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Internal Medicine EMR Services Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collaborate with your team to understand your practice needs.</li>
              <li><strong>Strategy Selection:</strong> Define the best approach for data consolidation and workflow optimization.</li>
              <li><strong>EMR Services Implementation:</strong> Design and deploy templates customized to your practice.</li>
              <li><strong>Service Testing:</strong> Test the system in real-time conditions to ensure efficiency and reliability.</li>
              <li><strong>Feedback and Reporting:</strong> Collect feedback and generate reports for optimization and recordkeeping.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Internal Medicine EMR Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified EMR Provider:</strong> HIPAA-accredited and ISO 9001:2015 certified with strict compliance.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified ensuring full confidentiality and secure data exchange.</li>
              <li><strong>High Accuracy:</strong> Iterative QA checks guarantee minimal errors and high-quality service.</li>
              <li><strong>Short Turnaround:</strong> Quick delivery of results without compromising quality.</li>
              <li><strong>Scalability:</strong> Flexible solutions to meet changing project demands.</li>
              <li><strong>Cost-effective Pricing:</strong> Tailored pricing for small, medium, or large practices.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for smooth project management.</li>
              <li><strong>Experienced Team:</strong> 10+ years of EMR expertise ensuring reliable delivery.</li>
              <li><strong>Modern Infrastructure:</strong> Access to latest software, hardware, and security systems.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance across continents and languages.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Internal Medicine EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for reliable, scalable, and cost-effective internal medicine EMR solutions tailored to your practice.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to get started with an expert EMR service provider.
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

export default InternalMedicineEMR;
