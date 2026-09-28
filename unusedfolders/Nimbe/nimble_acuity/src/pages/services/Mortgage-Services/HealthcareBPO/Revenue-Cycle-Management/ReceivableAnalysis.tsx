import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const ReceivableAnalysis: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounts Receivable Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Revamp your medical facility's economic structure with{" "}
              <strong>Nimble Acuity's</strong> accounts receivable analysis services
              at an affordable price.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Are you experiencing difficulties getting reimbursements from insurance companies?
              Or is your in-house AR team struggling to track payments, analyze medical records,
              and build reports? If so, outsourcing accounts receivable analysis services to{" "}
              <strong>Nimble Acuity</strong> can help.
            </p>
            <p>
              Our AR experts review claims, analyze outstanding amounts, and generate detailed AR reports.
              This enables your facility to evaluate performance, address denials, and make real-time
              decisions to improve cash flow and overall practice health.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Accounts Receivable Analysis Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Claims Analysis:</strong> Assess healthcare costs, identify reasons for rejections,
                and streamline administrative operations.
              </li>
              <li>
                <strong>AR Calling & Follow-up:</strong> Handle medical billing, follow up with payors and
                patients, and assist with payment plans.
              </li>
              <li>
                <strong>Quality Analysis of Claims:</strong> Review claims for accuracy, maintain logs,
                perform monthly audits, and ensure maximum ROI.
              </li>
              <li>
                <strong>Reimbursement Reports Generation:</strong> Create monthly reimbursement reports to
                provide real-time insights and corrective actions.
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Tools We Use for AR Analysis
            </h3>
            <p className="text-gray-700">
              We leverage advanced AR tools to track claims, communicate with payors, and improve
              processing efficiency. Our technology ensures accuracy, compliance, and faster results.
            </p>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accounts Receivable Management</li>
              <li>Accounts Receivable Follow-up</li>
              <li>Payment Posting Services</li>
              <li>Insurance Claims Processing</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for AR Analysis?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Services:</strong> Flexible pricing models based on hours, units, or resources.</li>
              <li><strong>Data Security:</strong> Secure servers, FTP, and continuous IT monitoring.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified for end-to-end protection.</li>
              <li><strong>HIPAA Compliance:</strong> Strict measures to safeguard protected health information.</li>
              <li><strong>Global Delivery Centers:</strong> 5 locations operating 24/7 for fast turnaround.</li>
              <li><strong>Robust Infrastructure:</strong> Advanced IT systems, secure VPNs, and 200% power backup.</li>
              <li><strong>High Accuracy:</strong> 99%+ accuracy with dedicated project management teams.</li>
              <li><strong>Scalability:</strong> Easily expand or reduce services to match your requirements.</li>
              <li><strong>Expert Team:</strong> 300+ AR analysts, billers, and coders providing reliable support.</li>
              <li><strong>Faster Turnaround:</strong> Reduce AR days and improve cash flow efficiency.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Healthcare Organization:</strong> Reduced denials, decreased AR days, and boosted
                cash collections through Nimble Acuity’s AR services.
              </li>
              <li>
                <strong>Urgent Care Practice (Maryland):</strong> Full-service billing and AR management
                support reduced claim rejections and improved revenue flow.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              “I wanted to inform you of what a great job Nimble Acuity is doing for our firm.
              We definitely consider Nimble Acuity a part of our strategic plans moving forward.”
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Accounts Receivable Analysis Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Our AR analysis team identifies denial reasons, improves claim accuracy, and ensures
              faster reimbursements. With over 26+ years of expertise and 1000+ global clients,
              we are your trusted partner in strengthening financial performance.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Looking for affordable, reliable, and secure AR analysis services?
              Contact us today to get started.
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

export default ReceivableAnalysis;
