import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DentalRCM: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dental Revenue Cycle Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Boost your practice’s revenue flow by outsourcing dental RCM. Recover unpaid dues, track delinquent accounts, and streamline payment follow-ups with Nimble Acuity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Busy schedules can make it difficult to track every aspect of dental revenue cycle management. Missed reimbursements or delayed follow-ups can lead to financial strain. Outsourcing your dental RCM services ensures a continuous revenue flow while saving you time and effort.
            </p>
            <p>
              With <strong>26+ years of experience</strong>, <strong>Nimble Acuity</strong> helps dental practices, hospitals, and clinics remove financial hurdles. From fee scheduling and CDT coding to appointment setting and denial management, our services optimize your revenue stream so you can focus on patient care.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dental RCM Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Accounts Payable Processing</li>
              <li>Credentialing</li>
              <li>Plan & Accounts Receivable Clean Up</li>
              <li>Accounts Receivable Follow-Up</li>
              <li>Payment Posting, Adjustments & Denial Management</li>
              <li>Fee Schedule Maintenance</li>
              <li>Eligibility & Benefits Verification</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Dental RCM Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Assessing your needs and challenges.</li>
              <li><strong>Preliminary Assessment:</strong> Evaluating your existing RCM system.</li>
              <li><strong>Document Synthesis:</strong> Managing forms, claims, and documentation.</li>
              <li><strong>Explanation of Benefits (EOB):</strong> Providing detailed benefit breakdowns.</li>
              <li><strong>Denial Management:</strong> Identifying deficiencies and resolving denied claims.</li>
              <li><strong>Reporting & Feedback:</strong> Delivering comprehensive reports for transparency.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Revenue Cycle Management</li>
              <li>Claims Adjudication Services</li>
              <li>Insurance Eligibility Verification</li>
              <li>Electronic Medical Records</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Dental RCM?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> HIPAA-compliant dental RCM services.</li>
              <li><strong>High Accuracy:</strong> Rigorous quality checks ensure precise results.</li>
              <li><strong>Cost-Effective:</strong> Flexible, pocket-friendly pricing models.</li>
              <li><strong>Data Security:</strong> Strict adherence to healthcare data protection laws.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced systems for high-volume RCM needs.</li>
              <li><strong>Quick Turnaround:</strong> Fast execution for uninterrupted productivity.</li>
              <li><strong>Scalable Solutions:</strong> Easily adjust to increased workloads.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals with deep domain expertise.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance across time zones.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Charge & Patient Demographics Entry for Georgian Client:</strong>  
                Our team processed 1200+ claims/month with quick turnaround, ensuring accurate charge and demographic entry for multiple practices.
              </li>
              <li>
                <strong>US-based Client with Kareo Software:</strong>  
                Delivered charge and demographic entry with 98–99% accuracy, implementing instruction changes within 8 hours and 24-hour turnaround.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">Testimonials</h3>
            <blockquote className="text-gray-700 italic">
              “Nimble Acuity has done amazing work and has been extremely reliable. We now consider them a strategic partner for our enterprise accounts.”
            </blockquote>
            <p className="text-sm text-gray-500 mt-2">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Dental RCM Services Today
            </h3>
            <p className="text-gray-700 mb-6">
              With 26+ years of expertise, Nimble Acuity is a trusted partner for dental revenue cycle management. We customize solutions to reduce overspending, improve collections, and maximize efficiency.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Custom Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default DentalRCM;
