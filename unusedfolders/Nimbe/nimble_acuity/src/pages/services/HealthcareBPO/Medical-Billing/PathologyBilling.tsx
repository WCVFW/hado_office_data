import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PathologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pathology Billing Services: Boost Revenue and Reduce Denials
            </h2>
            <p className="text-lg text-gray-600">
              Are you facing challenges maintaining timelines for pathology billing services? Are your facility's collections lower than expected? If so, it's time to outsource pathology billing services to an expert provider like <strong>nimble acuity</strong>.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              As a prominent provider of pathology billing services, <strong>nimble acuity</strong> has been meeting the medical billing and coding needs of global clients for over 6 years. Our team includes highly capable healthcare support executives and reimbursement experts who streamline your pathology billing process and significantly reduce denials.
            </p>
          </div>

          {/* Pathology Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Pathology Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Insurance Eligibility Verification:</strong> We verify insurance for errors or inconsistencies, ensuring smooth and prompt payment of medical bills.</li>
              <li><strong>AR Follow-up Services:</strong> Consistent follow-up on accounts receivable so your staff can focus on patient care.</li>
              <li><strong>Patient Demographic Entry:</strong> Accurate entry of patient demographic data into your EHR software, including detailed pathology information.</li>
              <li><strong>Denial Management:</strong> Accurate claims denial analysis to help you understand rejections and ensure timely reimbursement.</li>
              <li><strong>Charge Entry:</strong> Meticulous recording of charges for each pathology-related claim to receive timely reimbursements.</li>
            </ul>
          </div>

          {/* Pathology Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Pathology Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Gather the necessary information and analyze the client's needs.</li>
              <li>Receive patient medical information via a secure FTP channel.</li>
              <li>Index, sort, and collate the records according to your requirements.</li>
              <li>Validate each claim.</li>
              <li>Generate and file claims via your software.</li>
              <li>Send final reports.</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Services:</strong> Customized pricing and services based on hours, claims, or percentage of collection.</li>
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 certified organization with strong security frameworks.</li>
              <li><strong>HIPAA Compliant:</strong> ISO 9001:2000 certified, following strict HIPAA regulations for PHI confidentiality.</li>
              <li><strong>Multiple Global Delivery Centers:</strong> 24/7 availability with support across different time zones.</li>
              <li><strong>Ultramodern Infrastructure:</strong> Equipped with latest billing software, secure VPN, firewalls, and URL filtering.</li>
              <li><strong>High Accuracy:</strong> Maintaining 98% accuracy, exceeding industry standards.</li>
              <li><strong>Scalability:</strong> Easily scale services to meet growing demands.</li>
              <li><strong>Increased Productivity:</strong> Healthcare staff can focus on core tasks, improving facility productivity.</li>
              <li><strong>Well-Trained Workforce:</strong> 200+ skilled healthcare support executives recovering medical claim dues to improve ROI.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 support through multiple communication channels.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with nimble acuity Today
            </h3>
            <p className="text-gray-700 mb-6">
              Looking for a fast, competent, and cost-effective pathology billing service provider? <strong>nimble acuity</strong> has the experience and infrastructure to cater to your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We also provide <strong>Charge Entry</strong>, <strong>Physician Billing</strong>, and <strong>Hospital Billing</strong> services. Get in touch with us today!
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

export default PathologyBilling;
