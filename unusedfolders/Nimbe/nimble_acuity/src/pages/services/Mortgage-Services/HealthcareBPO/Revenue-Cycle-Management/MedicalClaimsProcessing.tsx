import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MedicalClaimsProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Claims Processing Services
            </h2>
            <p className="text-lg text-gray-600">
              Drive healthcare business performance with our advanced medical claims processing
              services. Target inefficiencies, mitigate compliance risks, and accelerate your reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Healthcare providers face challenges with data interoperability, ICD-10 coding complexities,
              and HIPAA compliance. Without expert intervention, practices risk denials due to coding errors
              and lengthy AR cycles. Our advanced claims processing leverages AI-driven automation,
              predictive analytics, and blockchain technology to streamline workflows, ensure compliance,
              and accelerate reimbursements.
            </p>
            <p>
              With two decades of experience and 20,000+ satisfied clients, <strong>Nimble Acuity</strong>
              minimizes errors, increases acceptance rates, and organizes your billing process. Leave the
              administrative load to us while you focus on patient care and clinical innovation.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Comprehensive Medical Claims Processing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Insurance Eligibility Verification</li>
              <li>Claim Adjudication</li>
              <li>Claim Disbursement</li>
              <li>Medical Claims Data Entry</li>
              <li>Claim Document Imaging</li>
              <li>Claim Support & Auditing</li>
              <li>Medical Claims Administration Support</li>
              <li>Medical Claims Data Indexing</li>
              <li>Medical Claims Data Processing</li>
              <li>Medical Claims Data Validation</li>
            </ul>
          </div>

          {/* Optimized Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Optimized Process Flow for Medical Reimbursement
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Claim Reporting & Documentation:</strong> Capture essential details and submit required documents.</li>
              <li><strong>Claim Evaluation & Processing:</strong> Validate claims and process efficiently with advanced systems.</li>
              <li><strong>Payment or Denial:</strong> Ensure timely disbursement or provide clear denial reasons.</li>
              <li><strong>Appeals:</strong> Re-evaluate denied claims with structured appeals support.</li>
              <li><strong>Settlement:</strong> Disburse rightful compensation promptly.</li>
              <li><strong>Claim Closure:</strong> Provide complete summaries and formally close claims.</li>
            </ol>
          </div>

          {/* Why Partner with Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>AI-Driven Automation & Predictive Analytics:</strong> Reduce denials with intelligent automation and forecasting.</li>
              <li><strong>Blockchain Integration:</strong> Enhance security and transparency with real-time reporting.</li>
              <li><strong>EDI Capabilities:</strong> Streamline data exchange and ensure seamless transactions.</li>
              <li><strong>Fraud Detection:</strong> Prevent fraudulent claims with advanced algorithms.</li>
              <li><strong>Interoperability:</strong> Integrate smoothly with existing healthcare systems.</li>
              <li><strong>Tailored Solutions:</strong> Customize services to fit your unique business needs.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Medical Billing & Coding Services</li>
              <li>Denial Management Services</li>
              <li>Insurance Eligibility Verification</li>
              <li>Teleradiology Services</li>
              <li>Accounts Receivable Follow Up Services</li>
              <li>Accounts Receivable Services</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>3000+ Claims for Ambulance Billing:</strong> Delivered monthly claims
                processing support at scale for a leading ambulance billing company.
              </li>
              <li>
                <strong>Quick AR Services:</strong> Provided seamless accounts receivable support
                under strict deadlines for a healthcare organization.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              “The quality of your work is outstanding. The team is knowledgeable, follows through
              effectively, and does a great job overall. We appreciate all the help.”
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Manager, Medical Billing Company, Colorado
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Claims Processing to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Medical claims processing is critical to your revenue cycle. Our proven workflows
              accelerate cash flow, minimize errors, and reduce claim denials so you can focus on
              patient care.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Ready to optimize your claims process? Contact us today to discuss your requirements.
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

export default MedicalClaimsProcessing;
