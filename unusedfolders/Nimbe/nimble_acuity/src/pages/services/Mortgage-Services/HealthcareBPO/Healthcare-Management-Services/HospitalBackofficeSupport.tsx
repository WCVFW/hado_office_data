import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HospitalBackofficeSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Back-office Support Services for Hospitals
            </h2>
            <p className="text-lg text-gray-600">
              Are you facing challenges in managing administrative operations in your hospital? Outsource to us and we can streamline your entire healthcare back-office support operations with our extensive industry experience.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              When you process medical claims in-house, you spend a large chunk of cash on medical billing & coding, revenue cycle management, and debt follow-up—all of which are not your core work. When you outsource to us at **Nimble Acuity**, we can streamline your entire healthcare back-office support operations with our extensive experience in the healthcare support industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a leading provider of healthcare back-office support for hospitals with over 300 healthcare support staff working 24/7. We can help you set up a healthy healthcare back-office support operation with an accuracy and deliverables on par with international standards.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Back-office Support Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              In a hospital, back-office support activities are confined to non-medical areas, including billing, counseling, payment & follow-up, and insurance verification. Managing all of these in-house requires extreme caution. When you outsource to **Nimble Acuity**, we exercise unparalleled importance to all administrative processes and have established a time-tested approach to render exceptional services.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Revenue Cycle Management (RCM):</strong> RCM is the backbone of the back-office process that can recover clinical payoffs. We leverage modern RCM tools to correctly record, store, and dispatch claims, helping you generate revenue and process payments in an organized way.</li>
              <li><strong>Medical Billing:</strong> Our expert medical billing personnel can reduce your billing costs by up to 40%. They can follow up with payers for pending claims, find reasons for denials, and initiate the collection process.</li>
              <li><strong>Medical Coding:</strong> Our medical coders are proficient in using standard codes (ICD-10-CM, CPT, HCPCS Level II) and can provide accurate transcription of notes, laboratory & radiology results.</li>
              <li><strong>Account Receivables Management & Follow-up:</strong> Our AAPC-certified AR experts can help you with AR calling, collections, following up on pending claims, and denial analysis.</li>
              <li><strong>Denial Management:</strong> We use the latest tools and dedicated resources to manage claim denials, drawing specific patterns to find the exact reasons for rejections, which eventually leads to positive cash flow.</li>
              <li><strong>Medical Claims Processing:</strong> We offer a gamut of support sub-services, including document scanning, patient demographic entry, claim adjudication, and follow-up. You can significantly cut the volume of rejected claims by leveraging our services.</li>
              <li><strong>Medical Claims Adjudication:</strong> We have been providing claim adjudication services to multiple insurance carriers and TPAs for over two decades, covering everything from HCFA 1500 to UB04 and enrolment forms.</li>
              <li><strong>Insurance Verification Services:</strong> We stay updated with all major health plans & rules to verify payable benefits, co-pays, deductibles, policy status, and more.</li>
              <li><strong>Medical Transcription:</strong> Our exceptional team of transcriptionists can accurately transcribe and send reports for various medical documents, including discharge summaries, neurology reports, radiology results, and more.</li>
              <li><strong>Healthcare Software:</strong> Our extended team of developers can create customized healthcare software to streamline your back-office functions, including EMR software, hospital management software, and claims processing software.</li>
              <li><strong>Healthcare Consulting:</strong> Our consultants are proficient in providing all sorts of consulting, irrespective of your hospital's size, on topics like analytics, transcription, data security, and claim processing.</li>
              <li><strong>Healthcare IT:</strong> We can render practical solutions to help you adopt the best IT tools, from setting up health-related IT solutions to updating systems and providing data-migration services.</li>
              <li><strong>Medical Records Indexing:</strong> We have a dedicated team of experts who can scan and index medical records, helping you to unclutter your hospital and save space & time.</li>
              <li><strong>Healthcare Data Entry Services:</strong> We offer a comprehensive range of medical data entry services, including document data entry, online data entry, data extraction, and database migration.</li>
            </ul>
          </div>
          
          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tools We Use
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we believe in the digital-physical union of the best tools and people to provide exceptional back-office support. We rely on both automated and manual tools, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>NextGen Healthcare</li>
              <li>Kareo Billing & EHR</li>
              <li>eClinicalWorks</li>
              <li>AdvancedMD</li>
              <li>brightree</li>
              <li>medisoft</li>
              <li>Athenahealth</li>
              <li>MediTouch</li>
              <li>Epic Billing</li>
              <li>CareCloud Billing</li>
              <li>Lytec Billing</li>
              <li>Modernizing Medicine Billing & EHR</li>
              <li>and more.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Hospital Back-office Support?
            </h3>
            <p className="text-gray-700 mb-6">
              We have been a leading healthcare back-office support provider for over two decades and have the necessary experience & expertise in the healthcare support industry.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> As an ISO 9001:2000 certified company, we strictly follow HIPAA guidelines. Your medical records are stored in a secure folder, with access on a need-only basis.</li>
              <li><strong>100% Information Security:</strong> Our ISO/IEC 27001:2022 certification demonstrates our commitment to protecting your medical data at all costs through robust security systems.</li>
              <li><strong>Vast Experience:</strong> We have over 20 years of experience in the domain, with a team of over 300 experts and a combined management experience of over 100 man-years.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Our workplaces are equipped with the latest tools and robust infrastructure, including firewalls, VPN technology, and 200% power backup to ensure uninterrupted services.</li>
              <li><strong>Multiple Global Delivery Centers:</strong> Our five global delivery centers allow us to leverage local expertise and provide world-class services to our customers.</li>
              <li><strong>24/7 Availability:</strong> Our dedicated back-office support team works 24/7 to provide round-the-clock assistance via calls, chats, or emails, regardless of time zone.</li>
              <li><strong>Scalability:</strong> We have the necessary resources to manage any surge in demand, allowing you to scale up services without spending extra on hiring.</li>
              <li><strong>One-point Contact:</strong> We assign a dedicated project manager to each client to provide specific attention and an immediate resolution to any issues.</li>
              <li><strong>Quick Turnaround:</strong> Our experience and resources allow us to manage deadlines and provide a quick turnaround time for all deliverables.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Back-office Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> is a foremost provider of healthcare back-office support for hospitals. Our expert team of RCM specialists, medical billers, coders, and insurance support executives can recover and boost your hospital's cash flow and streamline your administrative operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Collaborate with us to improve your hospital's productivity, cash flow, and staff utilization via streamlined healthcare back-office support operations.
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

export default HospitalBackofficeSupport;