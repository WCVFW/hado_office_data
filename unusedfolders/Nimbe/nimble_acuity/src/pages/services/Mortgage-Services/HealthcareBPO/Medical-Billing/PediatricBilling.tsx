import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PediatricBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pediatric Medical Billing Services: Boost Your Revenue, Streamline Your Process
            </h2>
            <p className="text-lg text-gray-600">
              Pediatric medical billing has unique requirements, including vaccine billing, which are often overlooked. If your organization is struggling to maximize revenue, it's time to outsource to experts.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              <strong>nimble acuity</strong> is a leading provider of pediatric medical billing services with over 6 years of experience. Our team of skilled billers, healthcare support personnel, and reimbursement experts can streamline your billing process, significantly reduce denials, and free up time to focus on patient care.
            </p>
          </div>

          {/* Pediatric Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pediatric Medical Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Insurance Eligibility Verification:</strong> Verify insurance claims to ensure smooth processing and avoid denials.</li>
              <li><strong>AR Follow-up Services:</strong> Handle accounts receivable follow-ups for steady cash flow and timely payments.</li>
              <li><strong>Patient Demographic Entry:</strong> Accurately enter all patient data into EHR software to speed up claims processing.</li>
              <li><strong>Denial Management:</strong> Conduct detailed denial analysis to recover revenue and reduce future claim denials.</li>
              <li><strong>Charge Entry:</strong> Record all pediatric-related claim charges meticulously to improve cash flow through timely reimbursements.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We also provide expertise in pediatric sub-specialties including oncology, neurology, gastroenterology, cardiology, and more.
            </p>
          </div>

          {/* Pediatric Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Assess documentation for correctness, compliance, insurance coverage, and medical justification.</li>
              <li>Process medical claims and confirm with the payer before notifying the client.</li>
              <li>Mail claim payment copy to the client and submit secondary claims.</li>
              <li>Follow up on all unacknowledged claims.</li>
              <li>Address rejections, denials, partial payments, and incorrect pays within 24 hours.</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Services:</strong> Customized pricing based on claims volume or work hours.</li>
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 certified, safeguarding medical information.</li>
              <li><strong>HIPAA Compliant:</strong> Strict adherence to HIPAA regulations for PHI privacy and confidentiality.</li>
              <li><strong>Global Delivery Centers:</strong> Five centers across time zones provide 24/7 support.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Advanced billing software, secure VPN, firewalls, and modern tools.</li>
              <li><strong>High Accuracy:</strong> Maintain a 98% accuracy rate, exceeding industry standards.</li>
              <li><strong>Scalability:</strong> Easily scale services to meet growing demands.</li>
              <li><strong>Increased Productivity:</strong> Pediatricians can focus on core tasks, improving facility efficiency.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 support to address any issues promptly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with nimble acuity Today
            </h3>
            <p className="text-gray-700 mb-6">
              With over 6 years of experience, <strong>nimble acuity</strong> provides reliable, accurate, and affordable pediatric medical billing services. Our skilled team handles a wide range of requirements with quick turnaround.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to optimize your pediatric billing and reduce denials? <strong>Get in touch with us today!</strong>
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

export default PediatricBilling;
