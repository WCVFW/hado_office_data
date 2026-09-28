import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const RevenueCycleManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Revenue Cycle Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize your revenue cycle effortlessly with our comprehensive 
              <strong> Revenue Cycle Management (RCM) Services</strong>. Benefit 
              from accelerated staffing, faster turnaround times, impeccable accuracy, 
              and 100% HIPAA compliance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our RCM solutions integrate seamlessly with advanced practice management systems, 
              bridging the gap between front-end patient interactions and back-end revenue collection. 
              Leveraging our skilled team of AAPC-certified coders, we ensure meticulous charge capture, 
              accurate procedure and diagnosis coding based on ICD-10, CPT, and HCPCS standards, and 
              efficient claims submission. We go beyond compliance, focusing on denial management, 
              pre-claim analysis, and accounts receivable management for a seamless end-to-end revenue cycle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Adhering to Six Sigma methodologies and AI-driven predictive analytics, 
              we minimize errors, anticipate claim denials, and improve claim acceptance rates. 
              Our services also cover patient access management, eligibility verification, 
              and authorization to reduce front-end denials while enhancing patient satisfaction. 
              Our solutions align with MACRA/MIPS requirements, assisting providers in maximizing reimbursements and quality reporting.
            </p>
          </div>

          {/* Customer Success Stories */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Customer Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Eligibility Verification for a Third-Party Administrator:</strong> 
                Streamlined insurance verification for home and lab sleep tests, ensuring accurate coverage and timely processing. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Pharmacy & Telemedicine Insurance Services:</strong> 
                Provided timely prescription transfers, accurate insurance checks, and improved medication delivery. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "Your team has been doing a phenomenal job, and we really appreciate the load they are taking from us so that we can better focus on patient care."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – Physical Therapy Business, Syracuse, Utah
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Healthcare Revenue Cycle Management Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Claims Processing Services:</strong> Accurate coding, timely submission, and efficient follow-up to maximize reimbursement.</li>
              <li><strong>Accounts Receivable Services:</strong> Manage claim denials, appeals, and collections to improve revenue cycle performance.</li>
              <li><strong>Insurance Eligibility Verification Services:</strong> Verify coverage details upfront to prevent claim rejections and delays.</li>
              <li><strong>Denial Management Services:</strong> Analyze denial trends, appeal claims, and prevent future denials.</li>
              <li><strong>Accounts Receivable Conversion Services:</strong> Convert paper-based AR to electronic formats for efficiency and accuracy.</li>
              <li><strong>Payment Posting Services:</strong> Accurately post payments, adjustments, and rejections with real-time visibility.</li>
              <li><strong>Healthcare Payer Services:</strong> Manage payer communications, contracts, and negotiations to optimize reimbursement rates.</li>
              <li><strong>Healthcare Collection Services:</strong> Improve collection rates and reduce bad debt while maintaining patient satisfaction.</li>
              <li><strong>Dental Revenue Cycle Management Services:</strong> Specialized billing, coding, and collections for dental practices.</li>
              <li><strong>Accounts Receivable Follow-up Services:</strong> Proactively resolve unpaid claims and accelerate payment.</li>
              <li><strong>Patient Experience Services:</strong> Streamline billing and financial interactions for transparency and satisfaction.</li>
              <li><strong>Revenue Cycle Analytics Services:</strong> Generate reports and actionable insights to optimize financial outcomes.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Process Flow for Our RCM Services
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Patient Pre-authorization:</strong> Obtain pre-authorization from insurance providers to minimize claim rejections.</li>
              <li><strong>Insurance Eligibility and Verification:</strong> Verify patient insurance coverage to ensure accurate billing.</li>
              <li><strong>Insurance Claims Submission:</strong> Prepare and submit accurate claims for timely reimbursement.</li>
              <li><strong>Payment Posting:</strong> Post payments and adjustments to maintain accurate AR records.</li>
              <li><strong>Denial Management:</strong> Identify, appeal, and prevent claim denials to maximize revenue recovery.</li>
              <li><strong>Reporting:</strong> Generate comprehensive reports and analytics for performance insights and informed decisions.</li>
            </ol>
          </div>

          {/* Tools / Software */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              RCM Services Software We Use
            </h3>
            <p className="text-gray-700 mb-4">
              Elevate your service offerings with our tactical RCM solutions, enabling enhanced claim accuracy, expedited collections, and minimized denial rates.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Beyond Standard Eligibility:</strong> Deep verification of patient insurance benefits for revenue integrity.</li>
              <li><strong>Coding Assistance:</strong> Precision-driven coding aligned with compliance regulations.</li>
              <li><strong>End-to-End Collections:</strong> Patient-centric follow-ups to maximize cash flow.</li>
              <li><strong>Claim Status:</strong> Real-time tracking and updates to manage revenue effectively.</li>
              <li><strong>Custom Reporting:</strong> Transform data into strategic insights for operational efficiency.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity as Your RCM Partner?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Lower overheads and infrastructure costs through outsourcing.</li>
              <li>High-quality, experienced professionals ensuring accuracy and efficiency.</li>
              <li>Expertise with multiple practice management systems for seamless integration.</li>
              <li>Prompt service delivery with average TAT under 24 hours.</li>
              <li>High accuracy: 99%+ quality and 98% claims paid on first pass.</li>
              <li>100% HIPAA-compliant processes and secure data management.</li>
              <li>Flexible resources for fluctuating volumes and scalable needs.</li>
              <li>Customizable pricing to suit your organization’s requirements.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Transcription Services</li>
              <li>Medical Billing Services</li>
              <li>Medical Coding Services</li>
              <li>Pharmacy Business Services</li>
              <li>Healthcare Claims Adjudication Services</li>
              <li>EMR/EHR Services</li>
              <li>Telehealth Services</li>
              <li>Medical Animation Services</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Revenue Cycle Management Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Entrust your RCM needs to our professionals and experience precision billing, compliance rigor, and enhanced revenue retention. Focus on patient care while we manage your revenue cycle efficiently.
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

export default RevenueCycleManagement;
