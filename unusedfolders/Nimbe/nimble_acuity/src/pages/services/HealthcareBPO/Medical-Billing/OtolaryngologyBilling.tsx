import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const OtolaryngologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Otolaryngology Billing Services: Recover Revenue and Overcome Denials
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with ENT billing, claim denials, or ever-changing regulations? <strong>nimble acuity</strong> provides expert otolaryngology billing solutions, helping practices recover revenue efficiently while ensuring compliance and accuracy.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Otolaryngology Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Otology & Audiology</li>
              <li>Rhinology & Laryngology</li>
              <li>Hearing Aids</li>
              <li>Nasal Endoscopy</li>
              <li>Surgical Oncology</li>
              <li>Sinusitis Treatment & Surgery</li>
              <li>Allergy Treatment & Medication</li>
              <li>Treatment for Snoring & Sleep Apnea</li>
              <li>Treatment for Auditory Complications</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Effective Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Patient Registration & Scheduling:</strong> Personalized registration, appointment templates, welcome emails, and automated reminders.</li>
              <li><strong>Insurance Eligibility Verification:</strong> Verify coverage and update patient information for accurate billing.</li>
              <li><strong>Medical Coding:</strong> Expert coders ensure accurate and compliant billing using current industry standards.</li>
              <li><strong>Charge Creation:</strong> Create and submit claims within 24 hours following all regulations.</li>
              <li><strong>Claim Auditing:</strong> Quality checks to confirm all procedure and diagnosis codes are correct.</li>
              <li><strong>Claims Transmission & Rejection Clearing:</strong> Submit claims and correct/re-submit any rejected claims.</li>
              <li><strong>Payment Posting:</strong> Post payments and EOBs, reconciling accounts accurately.</li>
              <li><strong>Denial Management:</strong> Analyze denial patterns and implement strategies to increase first-time acceptance rates.</li>
              <li><strong>Unpaid Claims Recovery:</strong> Track unpaid claims, investigate underpayments, and appeal denials.</li>
              <li><strong>Patient Follow-ups:</strong> Engage patients with outstanding balances and notify clients about delinquent accounts.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Complete Compliance:</strong> HIPAA and ISO 9001:2015 standards maintained for high-quality, compliant billing.</li>
              <li><strong>Absolute Data Security:</strong> ISO/IEC 27001:2022 accredited, ensuring highly secure and error-free billing.</li>
              <li><strong>Improved Accuracy:</strong> Experienced team ensures precision in every billing step, reducing denials.</li>
              <li><strong>Quick Turnaround:</strong> Fast processing allows your staff to focus on patient care.</li>
              <li><strong>Affordable & Transparent:</strong> Customized packages with detailed reporting for revenue clarity.</li>
              <li><strong>Dedicated Support:</strong> Single point of contact for timely reports and issue resolution.</li>
              <li><strong>Scalable Services:</strong> Easily scale services to match claim volumes and practice growth.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced tools and technology ensure efficient workflow.</li>
              <li><strong>Expert Staff:</strong> Access top ENT billing professionals delivering high-quality results.</li>
              <li><strong>Secure Data Sharing:</strong> SFTP and VPN ensure safe data transfer.</li>
              <li><strong>24/7 Support:</strong> Around-the-clock assistance for uninterrupted billing operations.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Otolaryngology Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> to reduce denials, recover revenue, and simplify your ENT billing workflow with our experienced team.
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

export default OtolaryngologyBilling;
