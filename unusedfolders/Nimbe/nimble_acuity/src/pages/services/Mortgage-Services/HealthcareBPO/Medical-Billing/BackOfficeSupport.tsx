import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const BackOfficeSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Back-office Support Services for Medical Billing Companies
            </h2>
            <p className="text-lg text-gray-600">
              Struggling to manage administrative operations while reducing denials and revenue loss? 
              <strong> Nimble Acuity </strong> provides end-to-end healthcare back-office support services 
              to streamline processes, minimize errors, and improve your financial outcomes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A disorganized healthcare back office often results in claim denials, underpayments, and revenue leakage. 
              At <strong>Nimble Acuity</strong>, we help you establish a healthy bottom line through accurate, efficient, 
              and compliant administrative services—so your teams can focus on patient care while we handle the complexities.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Comprehensive Back-office Support Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Revenue Cycle Management:</strong> End-to-end claim recording, settlements, and payment processing.</li>
              <li><strong>Medical Billing:</strong> Reduce operating costs by 40% with accurate billing and coding solutions.</li>
              <li><strong>Medical Coding:</strong> ICD-10, CPT, and HCPCS-compliant coding with expert documentation.</li>
              <li><strong>Accounts Receivables & Follow-up:</strong> Proactive AR calling, collections, and claims tracking.</li>
              <li><strong>Denial Management:</strong> Identify, analyze, and resolve denials for maximum reimbursements.</li>
              <li><strong>Claims Processing:</strong> Patient demographics, EOBs, filing, follow-up, and adjudication.</li>
              <li><strong>Insurance Verification:</strong> Verify benefits, policy status, co-pays, deductibles, and pre-authorizations.</li>
              <li><strong>Medical Transcription:</strong> Accurate transcription across multiple specialties with QA checks.</li>
              <li><strong>Medical Records Indexing:</strong> Digital indexing of bills, charts, demographics, and reports.</li>
              <li><strong>Healthcare Analytics:</strong> Real-time insights with predictive analytics and BI dashboards.</li>
              <li><strong>Healthcare IT & Software:</strong> Custom EMR, claims, and hospital management systems.</li>
              <li><strong>Healthcare Data Entry & Consulting:</strong> End-to-end solutions for secure and compliant data handling.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for Back-office Support?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>HIPAA & ISO Certified:</strong> Strict compliance with HIPAA, HL7, and ISO/IEC 27001:2022 standards.</li>
              <li><strong>Data Security:</strong> Advanced firewalls, VPNs, and multi-layered security protocols.</li>
              <li><strong>Scalability:</strong> Flexible, cost-effective services that grow with your needs.</li>
              <li><strong>Global Reach:</strong> 10+ delivery centers serving clients worldwide.</li>
              <li><strong>24/7 Availability:</strong> Always-on support with dedicated project managers.</li>
              <li><strong>Proven Expertise:</strong> 6+ years of experience and 200+ certified healthcare support specialists.</li>
            </ul>
          </div>

          {/* Customer Success */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Story
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Full-service Billing for an Urgent Care Practice:</strong> Our solutions helped reduce 
              administrative costs, improve employee turnover, and enhance overall cash flow.
            </p>
            
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "I want to express my sincere appreciation for the dedication you have shown to us; 
              truly a blessing and I thank you."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – President, Medical Practicing Company, MD, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Back-office Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From RCM and AR follow-up to denial management and medical claims processing, 
              Nimble Acuity is your trusted partner to streamline operations and maximize revenue. 
              Let us handle the back-end while you focus on delivering care.
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

export default BackOfficeSupport;
