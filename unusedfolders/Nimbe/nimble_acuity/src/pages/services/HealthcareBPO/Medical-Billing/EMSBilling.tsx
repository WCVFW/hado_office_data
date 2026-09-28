import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMSBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMS Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize revenue and minimize errors with Nimble Acuity’s expert EMS billing solutions. 
              Our certified team ensures accurate claims filing, cost recovery, and streamlined revenue cycle management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              EMS billing requires precision and speed to ensure timely payments and compliance with insurer regulations. 
              Nimble Acuity’s ISO-certified team provides end-to-end EMS billing services, including document validation, claims filing, and follow-ups, allowing your staff to focus on patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With advanced technology and certified coders, we streamline the revenue cycle, reduce errors, and provide actionable financial insights to improve your operational efficiency.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive EMS Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>EMS Billing:</strong> Certified billers handle claims accurately to prevent financial losses and boost collections.</li>
              <li><strong>Cost Recovery Services:</strong> End-to-end follow-ups with insurers and clients to improve recovery rates.</li>
              <li><strong>Debt Collection Services:</strong> Professional negotiation with clients to recover outstanding payments.</li>
              <li><strong>Cost Recovery for Fire Services:</strong> Specialized billing for fire-related emergencies, from suppression to rescue operations.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Project scoping to analyze requirements and outline solutions.</li>
              <li>Document capture and secure digitization for claims filing.</li>
              <li>Coding and claims processing based on emergency type and priority.</li>
              <li>Cost recovery follow-ups with clients and insurers.</li>
              <li>Claims review and correction before resubmission.</li>
              <li>Secure deposit of all payments and receivables.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Accountability & Security:</strong> Secure handling of sensitive billing data from our infrastructure.</li>
              <li><strong>Certified Billers:</strong> Experts trained in ICD-10, ICD-11, and DSM-5 coding systems, HIPAA-compliant.</li>
              <li><strong>Customized Reports:</strong> Detailed financial reporting on a weekly, monthly, or quarterly basis.</li>
              <li><strong>Regular Follow-up:</strong> Ensuring high clean-claim settlement rates and timely patient reminders.</li>
              <li><strong>Cost-Effective Services:</strong> Reduce costs while increasing revenue with fast turnaround.</li>
              <li><strong>Continuous Staff Training:</strong> Professional training for your in-house team to minimize errors.</li>
              <li><strong>24/7 Support:</strong> Around-the-clock assistance via phone or email.</li>
              <li><strong>Electronic Claims Filing:</strong> Secure, accurate electronic billing to boost revenue by up to 30%.</li>
              <li><strong>Easy & Secure File Sharing:</strong> Remote access and secure transfer tools for efficient operations.</li>
              <li><strong>Free Trial:</strong> Test our services before committing to the full project.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Your EMS Revenue?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to digitalize your EMS paperwork, improve collections, and streamline billing operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Tell us about your needs and get a free customized quote within 24 hours.
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

export default EMSBilling;
