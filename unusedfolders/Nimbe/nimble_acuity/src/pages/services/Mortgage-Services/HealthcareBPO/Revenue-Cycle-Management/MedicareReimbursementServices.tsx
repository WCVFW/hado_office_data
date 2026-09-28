import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MedicareReimbursementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medicare Reimbursement Services
            </h2>
            <p className="text-lg text-gray-600">
              Get remunerated at the earliest by letting us handle the intricacies of your Medicare payments. At rates starting from $1280/month, you get experts who follow up on dues to close gaps in your revenue.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Managing Medicare payments can be overwhelming. For hospitals and physicians seeking to receive payments for services provided to Medicare beneficiaries, relying on <strong>Nimble Acuity's</strong> Medicare reimbursement services is the best option.
            </p>
            <p>
              Outsourcing Medicare reimbursement services to <strong>Nimble Acuity</strong> is cost-effective, enabling you to focus on urgent priorities while reducing the burden of hiring and training new staff. Our meticulous workflow ensures faster claim handling, fewer rejections, and timely reimbursements—all while complying with the Centers for Medicare and Medicaid Services (CMS) schedule.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Medical Reimbursement Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Authentication of Documents:</strong> Verify authenticity of invoices, case papers, and bills to ensure error-free claims.</li>
              <li><strong>Data Entry:</strong> Accurate entry of patient, physician, and code details into billing software with electronic submission.</li>
              <li><strong>Claims Processing:</strong> Verification, validation, and report approvals before submission to insurance companies.</li>
              <li><strong>Fee Schedule Guidance:</strong> Clear explanations of the Medicare reimbursement fee schedule.</li>
              <li><strong>Claims Review:</strong> Identify and resolve delays while monitoring accepted and rejected claims.</li>
              <li><strong>Data Indexing & Maintenance:</strong> Organized filing of Medicare-related data for audits and evaluations.</li>
              <li><strong>Administrative Support:</strong> Assistance in completing missing documentation to minimize rejection rates.</li>
              <li><strong>Accounting Support:</strong> Cross-check payout details and advise on maximizing reimbursements.</li>
              <li><strong>Explanation of Benefits (EOBs):</strong> Detailed reports of covered and uncovered expenses, deductibles, and co-pays.</li>
              <li><strong>Online Tracking:</strong> Real-time monitoring of claim progress with timely notifications.</li>
              <li><strong>Resubmissions:</strong> Rectification and resubmission of declined claims per CMS guidelines.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Medicare Reimbursement Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Data Accumulation & Entry:</strong> Capture patient and physician details with CPT/ICD codes.</li>
              <li><strong>Authentication of Data:</strong> Cross-check documents for accuracy.</li>
              <li><strong>Adjudication:</strong> Thorough examination of claims for compliance.</li>
              <li><strong>Explanation of Benefits:</strong> Provide detailed EOBs for clarity.</li>
              <li><strong>Submission:</strong> Send claims directly to CMS.</li>
              <li><strong>Follow-ups:</strong> Ensure no delays through regular communication.</li>
              <li><strong>Status Updates:</strong> Notify clients at every stage of the process.</li>
              <li><strong>Re-adjudication:</strong> Resubmit denied claims after corrections.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Medical Billing Services</li>
              <li>Medical Claims Processing</li>
              <li>Medical Data Entry Services</li>
              <li>Medical Coding Services</li>
            </ul>
          </div>

          {/* Why Partner With Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource Medicare Reimbursement Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Data Security:</strong> HIPAA-compliant handling with strict confidentiality.</li>
              <li><strong>Cost-Effective:</strong> Save time, effort, and resources with expert outsourcing.</li>
              <li><strong>State-of-the-art Technology:</strong> Leverage advanced billing and compliance tools.</li>
              <li><strong>Experienced Team:</strong> Specialists with deep knowledge of CMS guidelines and fee schedules.</li>
              <li><strong>Error-Free Services:</strong> Faster reimbursements with low denial rates.</li>
              <li><strong>Rapid Turnaround:</strong> Swift processing with timely payouts.</li>
              <li><strong>Personalized Support:</strong> Dedicated points of contact and 24/7 availability.</li>
              <li><strong>All-Round Assistance:</strong> Global support across time zones with reliable communication channels.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Streamlined Eligibility Verification:</strong> Delivered eligibility verification, pre-authorization, and A/R follow-up support for a clinical billing client, resulting in improved efficiency.
              </li>
              <li>
                <strong>Pharmacy & Medical Insurance Support:</strong> Provided reliable eligibility verification services to a telemedicine provider, ensuring compliance and project success.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              “Overall, I am pleased with the support. The response time and communication were fine. Knowledge of billing and claims was above expectation. I recommend Nimble Acuity to those contemplating claims adjudication services from an experienced partner.”
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Founder, Medical Device Market Strategy and Reimbursement Company, Tustin, California
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Medicare Reimbursement Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Outsourcing your Medicare reimbursement services ensures faster payouts, reduced denials, and peace of mind. With the lowest claim-denial rate in the industry, Nimble Acuity is your trusted partner for Medicare reimbursement.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Get in touch today to streamline your Medicare reimbursements and focus on patient care while we handle the complexities.
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

export default MedicareReimbursementServices;
