import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AmbulanceBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ambulance Medical Billing Services: Optimize Cash Flow and Efficiency
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with delayed ambulance payments that impact your cash flow? 
              <strong> Nimble Acuity</strong> offers specialized ambulance billing services that ensure real-time claim tracking, accurate reimbursements, and fewer disputes—so you can focus on patient care while we manage your revenue cycle.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, <strong>Nimble Acuity</strong> provides EMS and ambulance billing 
              solutions that integrate automation with your electronic health records (EHR), reduce manual tasks, 
              and improve compliance. Our billing experts ensure accurate <strong>ICD-10</strong> and <strong>CPT</strong> coding, 
              faster reimbursements, and a seamless experience for both providers and patients.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Ambulance Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Claims Submission (EDI with HIPAA compliance)</li>
              <li>Denial Analysis & Appeals</li>
              <li>Mileage Calculation with GPS Verification</li>
              <li>Compliant Medical Documentation (EHR Integration)</li>
              <li>HCPCS Service-Specific Coding (ALS, BLS, SCT)</li>
              <li>Patient Billing & Collections</li>
              <li>Automated Payment Reminders</li>
              <li>Secure Online Payment Portals</li>
            </ul>
          </div>

          {/* Step-by-Step Approach */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Step-by-Step Approach
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Documentation Review:</strong> Ensure patient care reports meet all compliance standards.</li>
              <li><strong>Real-Time Insurance Verification:</strong> Prevent denials with instant eligibility checks.</li>
              <li><strong>Coding & Charge Entry:</strong> Apply accurate CPT & ICD-10 codes for proper reimbursements.</li>
              <li><strong>Claims Submission:</strong> Submit claims electronically via advanced EDI.</li>
              <li><strong>Proactive Denial Management:</strong> Quickly resolve claim denials with appeals and root cause fixes.</li>
              <li><strong>Financial Reporting:</strong> Get transparent, KPI-driven reports to monitor trends and cash flow.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Dedicated Professionals:</strong> Deep expertise in EMS and ambulance billing.</li>
              <li><strong>Faster Claim Turnaround:</strong> Advanced EDI and real-time tracking reduce payment delays.</li>
              <li><strong>Data Security:</strong> HIPAA-compliant processes with advanced encryption.</li>
              <li><strong>Comprehensive Analytics:</strong> Detailed KPI-focused reports for better decisions.</li>
              <li><strong>Scalable Solutions:</strong> Flexible services that grow with your operations.</li>
              <li><strong>Operational Cost Savings:</strong> Automation reduces overhead and boosts efficiency.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Ambulance Billing Today
            </h3>
            <p className="text-gray-700 mb-6">
              From private ambulance companies to municipal EMS providers, <strong>Nimble Acuity</strong> delivers 
              compliant, efficient, and scalable billing solutions. With advanced claim scrubbing, proactive 
              denial management, and transparent reporting, we ensure maximum first-pass acceptance rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to optimize your ambulance billing process? Contact us today for a free consultation.
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

export default AmbulanceBilling;
