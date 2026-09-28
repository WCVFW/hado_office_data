import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalBillingSoftwareSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Billing Software Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Get efficient, timely, and cost-effective medical billing software support from our experts and free your practice from billing hassles and overhead expenses.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As technology continues to advance in the medical field, healthcare organizations are constantly seeking ways to streamline their revenue cycle management. <strong>nimble acuity's</strong> expertise in providing medical billing software support has helped countless clients worldwide. We streamline your revenue stream, allowing you to focus on your practice and spend less time on invoicing irregularities and follow-ups.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Billing Software Support Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our support is 100% ANSI 5010 compliant, providing your staff with a powerful workflow engine to manage all revenue and billing functions. Our services are highly scalable and include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Medical Appointment Scheduling:</strong> Efficiently manage solo or multi-location provider schedules, check insurance eligibility, and send appointment reminders to eligible patients.
              </li>
              <li>
                <strong>Medical Practice Management:</strong> Our proprietary software technology helps your staff collaborate easily, manage accounts receivable, and leverage data to provide in-depth practice analytics and reporting.
              </li>
              <li>
                <strong>Medical Support Services:</strong> Our highly skilled medical software billing professionals are experts in billing and coding processes. Leverage their skills to drastically reduce revenue leakage.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              In addition, we also offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Implementation and customization of mainstream billing systems</li>
              <li>Patient charge verification and entry</li>
              <li>Staff training and development</li>
              <li>Patient data security management</li>
              <li>Application-based insurance verification</li>
              <li>Payment posting and reconciliation</li>
              <li>Insurance claims transmission</li>
              <li>Patient demographics information entry</li>
              <li>Claims denial management and resubmission</li>
            </ul>
          </div>

          {/* Process Followed */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Billing Software Support Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We follow a rigorous process to ensure you never have to worry about medical billing software support again. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Understand Your Needs:</strong> We collaborate with your team to understand your pain points and existing processes.
              </li>
              <li>
                <strong>Create an Action Plan:</strong> We develop a checklist of necessary software support to address your specific needs.
              </li>
              <li>
                <strong>Wireframe & Implement:</strong> We create a process wireframe and implement the medical billing software modules in relevant areas.
              </li>
              <li>
                <strong>Testing & Reporting:</strong> The modules are tested with real-time data to ensure proper functioning. We then create reports to help you understand the process and compare outcomes.
              </li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Medical Billing Software Support to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>HIPAA & ISO Certified:</strong> We are a HIPAA-compliant and ISO 9001:2015 certified company, with all our processes maintained by in-house professionals and reviewed by third-party auditors.
              </li>
              <li>
                <strong>Secure Data Management:</strong> We are ISO/IEC 27001:2022 accredited, ensuring the confidentiality and security of your project data.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team is comprised of AAPC-certified coders proficient in ICD-10 and CPT conventions, ensuring high accuracy in the billing process.
              </li>
              <li>
                <strong>Scalable Solutions:</strong> Our services are flexible and can be scaled up or down to meet your practice's growing requirements.
              </li>
              <li>
                <strong>Timely Support:</strong> Our track record with over 10,000 satisfied clients speaks for itself. We deliver medical billing software support with a quick turnaround time.
              </li>
              <li>
                <strong>Cost-Effective:</strong> We offer affordable solutions that improve the efficiency of your healthcare business without compromising on quality.
              </li>
              <li>
                <strong>Dedicated Point of Contact:</strong> We assign a specialized point of contact to provide first-level support and resolve any concerns quickly.
              </li>
              <li>
                <strong>Superior Infrastructure:</strong> We use modern infrastructure to optimize the collections process and streamline workflows, improving your total collections.
              </li>
              <li>
                <strong>24/7 Support:</strong> We work around the clock to ensure we are available whenever you need us, and we keep patients notified of appointments and overdue charges via email and SMS.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Your Medical Billing Needs
            </h3>
            <p className="text-gray-700 mb-6">
              Our medical billing and coding team can help you streamline your existing payment system, reduce financial pressure, and resolve reimbursement issues. With our targeted services, you can provide high-quality care and stay ahead of the competition.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to learn how our services can meet your practice management requirements.
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

export default MedicalBillingSoftwareSupport;