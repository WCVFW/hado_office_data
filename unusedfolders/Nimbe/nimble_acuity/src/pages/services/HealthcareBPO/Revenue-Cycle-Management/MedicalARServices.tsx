import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MedicalARServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Accounts Receivable Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience the power of advanced receivables management with Nimble
              Acuity. From seamless <strong>insurance verification</strong> and expert
              <strong> denial management</strong> to maximized returns, we ensure
              faster reimbursements and reduced write-offs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Healthcare accounts receivable services help providers manage funds
              owed by patients and insurance companies. Errors in billing,
              coding, or claim submissions can delay payments and create
              substantial arrears.
            </p>
            <p>
              By outsourcing <strong>medical A/R management</strong> to us, you
              ensure accurate billing, streamlined adjustments, and secure,
              compliant handling of patient data. Partner with Nimble Acuity to
              reduce <strong>days sales outstanding (DSO)</strong> and focus on
              patient care while we manage your receivables.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              End-to-End A/R Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EOB Analysis:</strong> Detailed adjudication reviews, discrepancy checks, and provider payment trend analytics.</li>
              <li><strong>Medical A/R Follow-Up:</strong> Communication protocols, claim tracking, and denial prevention tactics.</li>
              <li><strong>Payment Posting:</strong> Accurate allocations, reconciliation, ERA utilization, and ledger accuracy.</li>
              <li><strong>Denial Management:</strong> Root cause analysis, corrective action planning, and payer-specific denial coding.</li>
              <li><strong>A/R Aging Analysis:</strong> High-risk account prioritization, revenue leakage prevention, and debtor classification.</li>
              <li><strong>Patient Account Management:</strong> Liability estimation, adjustments, and financial responsibility communication.</li>
              <li><strong>Remittance Advice:</strong> Breakdown analysis, compliance checks, and reconciliation with deposits.</li>
              <li><strong>Write-Offs:</strong> Debt identification, adjustment verification, and financial impact analysis.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Streamlined Process Flow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Payment Posting:</strong> Record all payments, adjustments, and denials accurately.</li>
              <li><strong>Follow-Up:</strong> Monitor claims, flag unpaid/denied cases, and initiate action.</li>
              <li><strong>Appeals:</strong> Review, correct, and re-submit denied claims with supporting documentation.</li>
              <li><strong>Patient Follow-Ups:</strong> Communicate balances, explain bills, and offer payment plans.</li>
              <li><strong>Collection Strategies:</strong> Letters, calls, and structured repayment plans.</li>
              <li><strong>Reporting & Analysis:</strong> Track effectiveness, analyze trends, and suggest improvements.</li>
            </ol>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for A/R Services?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Integrated EHR:</strong> Real-time eligibility checks and accurate coding integration.</li>
              <li><strong>Predictive Analytics:</strong> Forecast cash flow risks with machine learning insights.</li>
              <li><strong>AI Automation:</strong> Faster, error-free claim submission with adaptive algorithms.</li>
              <li><strong>Blockchain Security:</strong> Transparent, secure, and compliant data sharing.</li>
              <li><strong>Cloud Infrastructure:</strong> Scalable, reliable, and high-uptime A/R platform.</li>
              <li><strong>Real-Time Dashboards:</strong> Granular insights into claims, denials, and payer performance.</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Industries We Cater To
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Billing Companies</li>
              <li>Healthcare Providers</li>
              <li>Insurance Companies</li>
              <li>Property Management</li>
              <li>Collection Agencies</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Billing & Coding Services (ICD-10 & CPT compliant)</li>
              <li>Healthcare Claims Adjudication Services</li>
              <li>Medical Transcription Services (99.9% accuracy)</li>
              <li>Medical Claims Processing Services</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Rehabilitation Transcription Services:</strong> Provided accurate transcription and EMR sync for a healthcare provider.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Teleradiology Support:</strong> Delivered quick, high-quality reports to a medical imaging firm, reducing turnaround time and costs.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16 text-center">
            <blockquote className="text-gray-700 italic mb-4">
              "I want to thank you both for the great job you are doing. I could
              not be happier with my decision to work with you. I am looking
              forward to our continued relationship and growth."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Owner, Medical Billing Services Company, California, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 text-center">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Accounts Receivable Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              With 26+ years of healthcare BPO experience, we deliver accurate,
              compliant, and technology-driven A/R management solutions. Reduce
              denials, improve cash flow, and achieve financial excellence with
              Nimble Acuity.
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

export default MedicalARServices;
