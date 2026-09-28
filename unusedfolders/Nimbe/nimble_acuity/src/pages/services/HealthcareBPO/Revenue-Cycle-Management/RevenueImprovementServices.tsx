import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const RevenueImprovementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Revenue Improvement Services
            </h2>
            <p className="text-lg text-gray-600">
              Make your <strong>RCM</strong> process smoother, faster, and more efficient with{" "}
              <strong>Nimble Acuity</strong>’s revenue improvement solutions. Secure reimbursements quicker 
              while cutting costs and reducing errors.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Struggling with increasing <strong>A/R days</strong>, frequent <strong>claim rejections</strong>, 
              or coding errors falling below industry standards? Our customized revenue improvement strategies 
              are designed to identify roadblocks, enhance workflows, and boost financial performance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 26+ years of experience, <strong>Nimble Acuity</strong> brings proven expertise in 
              revenue cycle management. Our value-driven solutions ensure seamless front-end and back-end 
              performance — without exhausting your resources.
            </p>
          </div>

          {/* Our Revenue Improvement Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Revenue Improvement Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Optimization of Charges:</strong> Accurate coding and documentation review to prevent over/under coding and secure rightful reimbursements.</li>
              <li><strong>Revenue Enhancement:</strong> Synchronizing processes to streamline billing, reduce errors, and handle denials promptly.</li>
              <li><strong>Boosting RCM Performance:</strong> Reducing rejections caused by errors in registration and improving patient A/R management with accountable strategies.</li>
            </ul>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center text-gray-700 font-medium">
              <div><strong>24h</strong> TAT</div>
              <div><strong>98%</strong> Accuracy</div>
              <div><strong>40%</strong> Cost Savings</div>
              <div><strong>300+</strong> Clients</div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Revenue Improvement Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Understanding client needs to set the right strategy.</li>
              <li><strong>Preliminary Assessment:</strong> Reviewing existing RCM systems and workflows.</li>
              <li><strong>Document Optimization:</strong> Processing and cleaning up documentation for accuracy.</li>
              <li><strong>Explanation of Benefits (EOB):</strong> Delivering detailed breakdowns for services rendered.</li>
              <li><strong>Denial Management:</strong> Investigating unfulfilled claims and taking corrective action.</li>
              <li><strong>Reporting & Feedback:</strong> Sharing transparent reports and collecting client input for improvements.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Accounts Receivable Management</li>
              <li>Denial Management Services</li>
              <li>Insurance Eligibility Verification</li>
              <li>Payment Posting Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Revenue Improvement?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA-Compliant & Certified:</strong> Secure handling of patient and financial data.</li>
              <li><strong>Proven Expertise:</strong> 26+ years of experience, 500+ skilled RCM professionals.</li>
              <li><strong>High Accuracy & Quality:</strong> 98%+ accuracy rates and unmatched service quality.</li>
              <li><strong>Scalable & Flexible:</strong> Customized solutions that fit practices of all sizes.</li>
              <li><strong>Affordable Pricing:</strong> Cost-efficient models tailored to your budget.</li>
              <li><strong>Dedicated SPOC:</strong> A single point of contact for smooth communication.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced tools, secure VPNs, and fast SFTP exchange.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock global support for uninterrupted service.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Charge & Patient Demographics Entry for a Georgian Client:</strong> Processed 1200+ claims per month with 98% accuracy.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
              <li>
                <strong>Kareo-based Demographic Entry for a US Client:</strong> Processed 17,000+ claims/month with 45% cost savings.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              "Nimble Acuity has done amazing work and proven to be extremely reliable. We now consider them a part of our long-term strategic plans. Thank you for your continued support!"
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Revenue Improvement Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 26+ years of healthcare BPO experience, we streamline revenue cycle management with customized, 
              accurate, and scalable solutions. Partner with us to eliminate bottlenecks, reduce costs, and secure faster reimbursements.
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

export default RevenueImprovementServices;
