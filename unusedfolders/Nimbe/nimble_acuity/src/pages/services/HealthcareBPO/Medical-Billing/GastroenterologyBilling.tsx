import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const GastroenterologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Gastroenterology Billing Services: Accuracy, Efficiency & Compliance
            </h2>
            <p className="text-lg text-gray-600">
              Feeling overwhelmed balancing patient care and billing processes? At <strong>Nimble Acuity</strong>, 
              we specialize in gastroenterology billing with <strong>98% accuracy</strong>, helping practices improve cash 
              flow while reducing denials. Our services start from just <strong>$1280/month</strong>, giving you expert 
              support without the overhead of in-house billing teams.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of expertise, <strong>Nimble Acuity</strong> has become a trusted leader in 
              gastroenterology billing services across the globe. From <strong>eligibility checks</strong> to 
              <strong> denial management</strong> and <strong>claims resubmissions</strong>, we handle the 
              entire process, ensuring you stay compliant with payer regulations and maximize reimbursements. 
              Our transparent workflows and real-time support give you peace of mind, allowing you to 
              focus on patient care.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Gastroenterology Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Eligibility & Verification</li>
              <li>Document Authentication</li>
              <li>Data Entry & Coding</li>
              <li>Claims Processing (HIPAA-compliant)</li>
              <li>Pre-authorization Management</li>
              <li>Adjudication of Claims</li>
              <li>Downcoding & Bundling Analysis</li>
              <li>Denial Management & Appeals</li>
              <li>Claims Resubmission</li>
              <li>Customized Reporting</li>
              <li>Electronic Payer Remittance (ERA)</li>
              <li>Payment Posting & Reconciliation</li>
              <li>Data Indexing & Secure Archiving</li>
              <li>Online Claim Tracking</li>
              <li>Administrative & Accounting Support</li>
              <li>HIPAA-Compliant Documentation</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Step-by-Step Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Claim Eligibility:</strong> Verify data, detect duplicates, and flag issues early.</li>
              <li><strong>Data Entry:</strong> Capture demographics, physician details, and CPT/ICD codes.</li>
              <li><strong>Authentication:</strong> Cross-check all documentation for accuracy.</li>
              <li><strong>Adjudication:</strong> Ensure claims comply with payer requirements.</li>
              <li><strong>Explanation of Benefits (EOBs):</strong> Provide transparent coverage details.</li>
              <li><strong>Claim Computation:</strong> Calculate accurate reimbursement amounts.</li>
              <li><strong>Claims Submission:</strong> Submit via secure EDI with close monitoring.</li>
              <li><strong>Follow-Ups:</strong> Proactively engage insurers to avoid delays.</li>
              <li><strong>Status Updates:</strong> Notify you of progress in real-time.</li>
              <li><strong>Re-adjudication:</strong> Resubmit denied claims until resolution.</li>
              <li><strong>Online Tracking:</strong> Provide 24/7 access to claim status.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Gastroenterology Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Team:</strong> 6+ years in gastroenterology billing excellence.</li>
              <li><strong>Data Security:</strong> HIPAA-compliant with strict NDA protocols.</li>
              <li><strong>Cost-Effective:</strong> Reduce overhead with affordable, scalable services.</li>
              <li><strong>Advanced Technology:</strong> State-of-the-art billing software and predictive analytics.</li>
              <li><strong>Error-Free Processes:</strong> Rigorous checks for maximum reimbursement.</li>
              <li><strong>Faster Turnaround:</strong> Swift processing ensures quick payouts.</li>
              <li><strong>Personalized Support:</strong> Dedicated account managers available 24/7.</li>
              <li><strong>Scalable Services:</strong> Flexible to match your growth and workload.</li>
              <li><strong>Proven Success:</strong> High success in overturning denials and boosting ROI.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>ICD-10 Implementation:</strong> Trained a Florida-based billing firm’s backend team to 
                transition from ICD-9 to ICD-10 smoothly.
              </li>
              <li>
                <strong>Accounts Receivable Case Study:</strong> Helped a healthcare company improve AR and 
                strengthen cash flow with customized processes.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              “I wanted to personally thank the Data and AR teams for their hard work with EJ practice. 
              Their persistence and dedication over the past month have paid off tremendously.”  
              <br />
              <span className="not-italic font-semibold">– RCM Account Manager, EMR System Provider, FL, USA</span>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Gastroenterology Billing Today
            </h3>
            <p className="text-gray-700 mb-6">
              Professional billing requires expert handling. With <strong>Nimble Acuity</strong>, 
              you’ll reduce denials, accelerate reimbursements, and eliminate the hassle of 
              managing in-house billing. Our proven processes give you accuracy, transparency, 
              and peace of mind.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today for a free billing analysis and discover how we can improve 
              your financial outcomes.
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

export default GastroenterologyBilling;
