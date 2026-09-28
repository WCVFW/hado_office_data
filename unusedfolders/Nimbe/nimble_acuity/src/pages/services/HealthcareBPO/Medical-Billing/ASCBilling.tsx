import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ASCBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ASC Billing Services: Maximize Revenue, Minimize Headaches
            </h2>
            <p className="text-lg text-gray-600">
              Our ASC billing solutions bring maximum value by helping you manage billing, filing, and collections to optimize revenue, starting at just $1280 per month.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              With over 6 years of experience, <strong>nimble acuity</strong> provides high-quality ambulatory surgery center billing, coding, and ASC solutions. We streamline invoice payments, ensure on-time reimbursements, and coordinate care efficiently. Our team is certified by the American Association of Professional Coders (AAPC) and proficient in ICD-9, CPT, and HCPCS, ensuring claims are processed accurately the first time.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              <strong>nimble acuity</strong> is a top ASC billing service provider with experienced billers specializing in coding, claim submission, eligibility verification, and more, using advanced billing software to achieve first-pass claim acceptance.
            </p>
          </div>

          {/* ASC Billing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive ASC Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Fee Schedule Review and Analysis:</strong> Regularly evaluate fee schedules and insurance contracts to maximize charges sent to insurers.</li>
              <li><strong>Medical Eligibility Verification:</strong> Verify each patient’s coverage before visits to ensure authentic claims.</li>
              <li><strong>Charge Posting:</strong> Accurate charge entry according to fee schedules, ensuring zero errors in charge capture.</li>
              <li><strong>Claim Submission:</strong> Validate and submit claims on time using deep knowledge of the process to optimize reimbursement.</li>
              <li><strong>Payment Posting:</strong> Consolidated view of EOBs, payments, ERA, and insurance checks for full financial transparency.</li>
              <li><strong>Coding:</strong> Convert services, procedures, and diagnoses into universal medical codes to accelerate billing and payment.</li>
              <li><strong>Accounts Receivable Management:</strong> Ensure timely payments from patients and insurers and reconcile all accounts accurately.</li>
              <li><strong>Patient Statements:</strong> Outsourced statement preparation and mailing saves costs and time while ensuring professionalism.</li>
              <li><strong>Denial Review and Management:</strong> Analyze denied claims, correct errors, and resubmit successfully without incurring high charges.</li>
            </ul>
          </div>

          {/* ASC Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> Assess needs, AR status, revenue streams, and records to understand challenges.</li>
              <li><strong>Billing:</strong> Assign tasks to ASC professionals and ensure timely completion.</li>
              <li><strong>Data Validation:</strong> Quality control team validates all billing data for accuracy.</li>
              <li><strong>Reporting:</strong> Deliver detailed reports summarizing all billing activities.</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Value for Money:</strong> Highly economical ASC billing services offering maximum value.</li>
              <li><strong>Data Security:</strong> Complete safety of patient data throughout our services.</li>
              <li><strong>Error-Free Services:</strong> Accurate claim submissions for first-pass acceptance.</li>
              <li><strong>Experienced Team:</strong> Over 30 years of cumulative expertise in ASC billing.</li>
              <li><strong>Quick Turnaround:</strong> Efficient processes and technology for timely and successful billing.</li>
              <li><strong>Scalable Services:</strong> Easily handle growing ASC billing needs.</li>
              <li><strong>All-Round Support:</strong> Patient, professional support to address any queries promptly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your ASC Billing Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your ASC billing services to <strong>nimble acuity</strong> and reduce burnout, revenue loss, and administrative headaches. Ensure timely payments from insurers and patients while maintaining a healthy revenue cycle.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today to receive an instant quote!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ASCBilling;
