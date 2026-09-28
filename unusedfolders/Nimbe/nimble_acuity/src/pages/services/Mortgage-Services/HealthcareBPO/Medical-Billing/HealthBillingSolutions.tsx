import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HealthBillingSolutions: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Health Billing Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Master denial management with <strong>Nimble Acuity</strong> and transform your billing 
              system into a resilient revenue generator that adapts effortlessly to payer challenges.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Mental health billing requires extensive documentation and prior authorizations, 
              making it uniquely complex. <strong>Nimble Acuity</strong> provides quick, accurate, 
              and compliant billing services with precise mental health CPT and ICD coding. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our proactive team secures necessary insurance authorizations, reduces denials, 
              and streamlines billing processes so you can focus on what matters most — 
              providing exceptional patient care.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>40% Increase</strong> in billing accuracy</li>
              <li><strong>25% Faster</strong> claims processing</li>
              <li><strong>15% Reduction</strong> in rejected claims</li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Behavioral & Mental Health Billing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Claim Submission & Validation:</strong> Real-time claim scrubbing, 
                payer-specific edits, and electronic submission.
              </li>
              <li>
                <strong>Denial Follow-Up:</strong> Root cause identification, automated follow-ups, 
                and real-time appeals.
              </li>
              <li>
                <strong>Payment Posting & Reconciliation:</strong> Automated remittance, 
                batch reconciliation, and discrepancy alerts.
              </li>
              <li>
                <strong>Coding & Compliance:</strong> ICD-10, CPT, HCPCS specialization with strict regulatory adherence.
              </li>
              <li>
                <strong>Accounts Receivable:</strong> Prioritization of aged receivables, 
                real-time collection strategies, and reminders.
              </li>
              <li>
                <strong>Denial Management:</strong> Prevention strategies, denial categorization, 
                and resolution updates.
              </li>
              <li>
                <strong>Financial Reporting:</strong> Customized dashboards, RCM metrics, 
                and predictive analytics.
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Medical Billing Service – HIPAA-compliant, optimized reimbursements</li>
              <li>Revenue Cycle Management Service – end-to-end RCM to reduce denials</li>
              <li>Medical Billing & Coding Service – ICD-10/CPT precision</li>
              <li>Medical Claim Processing – automated lifecycle management</li>
              <li>Denial Management Service – analytics-driven denial recovery</li>
              <li>Accounts Receivable Service – efficient collection strategies</li>
            </ul>
          </div>

          {/* Why Partner With Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>AI-Enhanced Claim Adjudication:</strong> Improve first-pass acceptance rates and accuracy.</li>
              <li><strong>Global Billing Expertise:</strong> Seamless cross-border billing support with local insights.</li>
              <li><strong>Real-Time Financial Reporting:</strong> Custom dashboards for proactive financial management.</li>
              <li><strong>End-to-End Revenue Management:</strong> From pre-authorization to collections.</li>
              <li><strong>Client-Centric Customization:</strong> Flexible solutions tailored to your practice.</li>
              <li><strong>Reduced Administrative Burden:</strong> Robotic process automation (RPA) for efficiency.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Transforming Internal Medicine Billing:</strong> Medisoft success in Florida.
              </li>
              <li>
                <strong>Billing Breakthrough:</strong> AR Days reduced from 34 to 23; Collections improved from 53% to 61%.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "We are very pleased with the work and attention to detail provided under our services agreement 
              with Nimble Acuity. We continue to look for ways to enhance this relationship with our billing company."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              – MD, Billing Service Company for Surgical Providers, Georgia, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Expand Patient Reach with Seamless Mental Health Billing
            </h3>
            <p className="text-gray-700 mb-6">
              Ensure compliance, minimize denials, and maximize revenue potential in the growing telehealth 
              and mental health billing landscape with <strong>Nimble Acuity</strong>.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Schedule a free consultation with our billing experts today.
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

export default HealthBillingSolutions;
