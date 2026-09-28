import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const HealthcareDueDiligence: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Due Diligence Services
            </h2>
            <p className="text-lg text-gray-600">
              Seamless, detailed, and quality healthcare due diligence services with 
              <strong> Nimble Acuity</strong>. Starting at <strong>$1280 per FTE/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Post COVID-19, healthcare sectors including hospitals, healthcare products, and 
              pharmaceuticals have become high-growth investment areas. Companies are expanding 
              acquisitions and new entrants are showing interest in healthcare to meet financial targets.
            </p>
            <p>
              Healthcare due diligence is high-risk in a highly regulated industry. It requires 
              legal, financial, and regulatory expertise. Outsourcing to a trusted partner like 
              <strong> Nimble Acuity</strong> ensures accurate, compliant, and timely due diligence.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Healthcare Due Diligence Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Statutory Approval:</strong> Ensuring healthcare sectors comply with state and central laws, fraud, abuse, and internal policies.</li>
              <li><strong>Litigation Information:</strong> Detailed reports on litigation, crisis management, and operational ethics of healthcare organizations.</li>
              <li><strong>Ownership/Organization Chart:</strong> Comprehensive ownership details for potential buyers and investors.</li>
              <li><strong>Financial Due Diligence:</strong> Reviewing contracts, agreements, turnovers, liabilities, and assets of healthcare entities.</li>
              <li><strong>Taxes Details:</strong> Auditing tax payments, returns, and compliance for accurate financial insight.</li>
              <li><strong>Intellectual Property (IP):</strong> Evaluating cybersecurity, confidentiality, and protection of sensitive healthcare data.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Healthcare Due Diligence Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Understanding Client Requirements:</strong> Detailed discussion to gather service needs and scope.</li>
              <li><strong>Quotation & Commercial Closure:</strong> Preparing a comprehensive quote with checklists, documentation, and financial details.</li>
              <li><strong>Mutual Agreement Contract:</strong> Data security policy and agreement signing with the client.</li>
              <li><strong>Detailed Survey:</strong> Conducting due diligence using checklists, software, and resources for accurate reporting.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Case Management</li>
              <li>Denial Management Services</li>
              <li>Payment Posting Services</li>
              <li>Accounts Receivable (AR) Calling Services</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource Healthcare Due Diligence Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Confidentiality:</strong> All client data is encrypted and stored securely with signed confidentiality agreements.</li>
              <li><strong>Certified Service Provider:</strong> ISO 9001:2015 certified with extensive experience in healthcare due diligence.</li>
              <li><strong>Qualified Professionals:</strong> Experts in legal, financial, and regulatory aspects with dedicated focus per project.</li>
              <li><strong>World-class Infrastructure:</strong> Latest technology and resources for efficient project execution.</li>
              <li><strong>On-time Delivery:</strong> High-quality, timely service ensured by skilled professionals.</li>
              <li><strong>Single Point of Contact:</strong> Seamless communication through a dedicated representative.</li>
              <li><strong>Secured Data Transfer:</strong> All exchanges are encrypted via secured FTP and email.</li>
              <li><strong>Cost-efficient Services:</strong> Transparent pricing with no hidden costs and top-quality output.</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock support across time zones for client queries.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Patient Demographic Entry Services:</strong> Delivered high-quality services quickly for a leading client. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Rehabilitation Transcription Services:</strong> Cost-effective, timely delivery for a well-known client. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "The verifications are going well. Any issues are addressed promptly and efficiently. We appreciate your follow-up and support."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Due Diligence Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Ensure detailed, compliant, and hassle-free healthcare due diligence with our experienced team. We deliver cost-effective services across healthcare sectors of all sizes.
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

export default HealthcareDueDiligence;
