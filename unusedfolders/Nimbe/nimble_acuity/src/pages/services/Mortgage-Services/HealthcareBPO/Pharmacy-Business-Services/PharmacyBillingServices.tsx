import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PharmacyBillingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pharmacy Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize your administrative functions to improve cash flow with our pharmacy billing services from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is the constantly evolving healthcare industry presenting new and complex challenges for your pharmacy business? Are you battling issues such as underqualified staff, incorrect drug documentation, and legacy billing systems? Optimize your processes for accurate invoice generation and timely order dispatch with our pharmacy billing services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an experienced pharmacy billing services company, <strong>Nimble Acuity</strong> delivers advanced solutions that address your administrative and operational challenges. We leverage our pool of skilled and certified staff, modern billing systems, and well-established documentation procedures to deliver value and improve your bottom line.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pharmacy Billing Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Onboarding Data Capture:</strong> Accurately record patient details and medical history with our specialized systems.</li>
              <li><strong>Enumeration and Statistic Update:</strong> Speed up medical claims with accurate documentation of patient diagnosis and treatment summaries.</li>
              <li><strong>Pre-authorization Services:</strong> Efficiently manage drug classification and pharmacy codes to lower medical claims delays or denials.</li>
              <li><strong>Medication Refill Management:</strong> Process refills without delay and send timely reminders to patients with our services.</li>
              <li><strong>AR Follow-up:</strong> Ensure on-time payment collection by correctly billing services and following up with patients and providers.</li>
              <li><strong>Charge & Payment Posting:</strong> Cut time on data entry with automated payment postings and accurate end-of-day reimbursements.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pharmacy Billing Process
            </h3>
            <p className="text-gray-700 mb-4">
              We follow a structured billing workflow for generic, brand-name, and non-preferred drugs to minimize delays.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Documentation:</strong> Our experts complete documentation of medicines ahead of pre-authorization.</li>
              <li><strong>Eligibility Verification and Billing:</strong> We verify client eligibility before billing Medicare, Medicaid, or commercial insurers.</li>
              <li><strong>Plan Review & Authentication:</strong> We verify the Medicare part and communicate any necessary corrections to the patient.</li>
              <li><strong>Billing Statements:</strong> We provide comprehensive electronic billing statements on pharmacy services and update records.</li>
              <li><strong>Refill Management:</strong> We service patient refill needs and send timely reminders.</li>
              <li><strong>Payment Capture & Posting:</strong> Payments from insurers are posted daily to ensure accurate records.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pharmacy Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> Our ISO-certified and HIPAA-compliant services ensure high-quality billing and data security.</li>
              <li><strong>Secure Data Exchange:</strong> We use VPN and secure FTP for smooth, uninterrupted file transfers.</li>
              <li><strong>High Quality:</strong> We follow stringent quality measures for accurate billing and administrative tasks.</li>
              <li><strong>Modern Infrastructure:</strong> Our process is driven by modern infrastructure for safe and fast operations.</li>
              <li><strong>Short Turnaround:</strong> Our solutions are designed to deliver under tight deadlines, saving you time.</li>
              <li><strong>Easy Scalability:</strong> Our services are highly scalable, assisting you in scaling up and getting the best ROI.</li>
              <li><strong>Experienced Team:</strong> Our team consists of experienced specialists with deep knowledge of pharmacy billing and compliance.</li>
              <li><strong>Round the Clock Availability:</strong> We are available 24/7 to meet your needs across different time zones.</li>
              <li><strong>Customized Pricing Options:</strong> We offer diverse pricing options that can save you a significant amount on costs.</li>
            </ul>
          </div>
          
          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Transcription Services:</strong> Accurate and time-bound transcription of dictated reports.</li>
              <li><strong>Medical Billing Services:</strong> End-to-end medical billing for error-free claims submissions.</li>
              <li><strong>Revenue Cycle Management Services:</strong> Streamline your revenue cycle to eliminate errors and secure timely reimbursements.</li>
              <li><strong>Healthcare Claims Adjudication Services:</strong> We handle claims adjudication, including benefit explanations and claims value determination.</li>
              <li><strong>EMR Services:</strong> Maintain electronic records for every patient to ensure quality care.</li>
              <li><strong>Telehealth Services:</strong> Optimize your telehealth operations, from scheduling to after-hours teleradiology.</li>
              <li><strong>Medical Animation Services:</strong> Get top-class 2D and 3D medical animations developed.</li>
              <li><strong>Pharmacy Business Services:</strong> End-to-end solutions for managing pharmacy processes efficiently.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Charge and Demographic Entries using Kareo Software:</strong> A Houston-based client achieved a 45% profit increase with our customized solution.</li>
              <li><strong>Patient Demographics and Charge Entry:</strong> We helped a top US medical billing company improve productivity by 30% with minimal error rates.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job Nimble Acuity is doing for our firm. Vinoth Kumar and his team have done amazing work & are extremely reliable. We definitely consider Nimble Acuity a part of our strategic plans moving forward."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pharmacy Billing Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Pharmacy billing is a high-stake job. As an experienced services expert, we assist our clients in surmounting challenges by providing a large pool of qualified professionals and proper documentation.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Minimize churn, maximize cash flow, and deliver value with our quick and efficient pharmacy billing services.
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

export default PharmacyBillingServices;