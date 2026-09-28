import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AccountsReceivableConversion: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounts Receivable Conversion Services
            </h2>
            <p className="text-lg text-gray-600">
              Eliminate costly errors, automate bulk A/R, reduce bad debts, and improve cash flow with Nimble Acuity’s Accounts Receivable Conversion Services, starting at just $1280 per FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Migrating from legacy billing software to a modern system can be complex and error-prone without the right expertise. Yet, this transition is crucial for improving efficiency, minimizing bad debts, and strengthening cash management.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With Nimble Acuity, you gain a partner experienced in seamless A/R conversion. Our experts provide end-to-end support—both onshore and offshore—to simplify migration, automate processes, and safeguard revenue performance during and after the transition.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive Accounts Receivable Conversion Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial Health & Conversion Assessment:</strong> Identify inefficiencies, revenue leakages, and define the right conversion strategy.</li>
              <li><strong>Cash Flow Management:</strong> Minimize disruptions, manage collections across systems, and optimize A/R performance.</li>
              <li><strong>Cash Protection & Liquidation:</strong> Resolve outstanding receivables, build cash reserves, and free up internal resources.</li>
              <li><strong>Automated A/R Conversion:</strong> Deploy automation tools for bulk invoice processing with secure tracking and audit trails.</li>
              <li><strong>On-Site Support:</strong> Fill staffing gaps, manage legacy systems, and act as your PFS team during migration.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Streamlined A/R Conversion Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Needs Assessment:</strong> Analyze unique conversion requirements.</li>
              <li><strong>Resource Deployment:</strong> Allocate onshore and offshore teams.</li>
              <li><strong>Planning:</strong> Create migration strategy and identify best-fit technologies.</li>
              <li><strong>Execution:</strong> Implement system changes in phased, controlled stages.</li>
              <li><strong>Management:</strong> Oversee A/R liquidation and adoption of the new system.</li>
              <li><strong>Support:</strong> Provide ongoing optimization and post-migration services.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Affordable pricing with customizable plans.</li>
              <li><strong>Experienced Team:</strong> 300+ specialists handling complex conversions globally.</li>
              <li><strong>High-Quality Standards:</strong> Consistent 99%+ accuracy across projects.</li>
              <li><strong>Data & System Security:</strong> Advanced protection against data loss or breaches.</li>
              <li><strong>Revenue Growth:</strong> Reduce bad debts, optimize collections, and boost ROI.</li>
              <li><strong>Scalable Services:</strong> Flexible operations with on-site and offshore support.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Eligibility Verification for Clinical Billing Provider:</strong> Streamlined pre-authorization, verification, and A/R follow-up, improving efficiency and reducing costs.</li>
              <li><strong>Telemedicine Insurance Eligibility Services:</strong> Supported a telemedicine provider with pharmacy and medical eligibility services, delivering accuracy and speed.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="text-gray-700 italic border-l-4 border-[#006A7C] pl-4">
              “The verifications are going well. Anytime there is an issue or something additional we need, it gets addressed quickly. We appreciate the follow-up and support.” <br />
              <span className="font-medium">— Leading Doctor, Kids Dental Clinic, Tampa, FL</span>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Accounts Receivable Conversion Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, we help healthcare providers achieve accurate, seamless conversions with optimized cash flow and minimal disruption. From legacy migration to full A/R automation, we secure collections, reduce leakage, and accelerate growth.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to simplify your A/R conversion? Contact us today to discuss your requirements.
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

export default AccountsReceivableConversion;
