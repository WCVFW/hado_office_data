import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EmergencyRadiology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Emergency Radiology Services
            </h2>
            <p className="text-lg text-gray-600">
              For just <strong>$4.5/read</strong>, our expert radiologists deliver rapid and accurate emergency radiology interpretations with a proven <strong>98% accuracy rate</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you short-staffed to handle emergency radiology in the ER? <strong>Nimble Acuity</strong> provides board-certified radiologists who work as an extension of your emergency room team, helping you focus on urgent patient care while we take care of the critical imaging interpretations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our specialists interpret CT scans, MRIs, X-rays, and more, minimizing diagnostic errors and ensuring timely, life-saving decisions in high-pressure situations.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Emergency Radiology Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Support for Physicians:</strong> Partnering directly with trauma and ER doctors to deliver accurate and timely interpretations.</li>
              <li><strong>Emergency Case Reading:</strong> From undiagnosed hemorrhages to pediatric emergencies, we handle diverse, time-sensitive imaging needs.</li>
              <li><strong>Collaboration:</strong> Seamless coordination with physicians, staff, and patients to support dynamic emergency roles.</li>
              <li><strong>High-Volume Capacity:</strong> Scalable resources to manage multiple cases without compromising quality.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Emergency Radiology Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Understanding your specific ER challenges and expectations.</li>
              <li><strong>Planning:</strong> Designing an optimal strategy to support your emergency radiology workflow.</li>
              <li><strong>Execution:</strong> Expert radiologists review and interpret imaging data with speed and precision.</li>
              <li><strong>Quality Evaluation:</strong> Every report undergoes strict quality checks before delivery.</li>
              <li><strong>Feedback & Optimization:</strong> Continuous improvement based on physician feedback and case outcomes.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> HIPAA-compliant, ISO-certified operations with guaranteed data security (ISO/IEC 27001:2022).</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective emergency radiology services without compromising quality.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 reporting support for uninterrupted ER operations.</li>
              <li><strong>Short Turnaround Time:</strong> Rapid report delivery during critical emergencies.</li>
              <li><strong>Dedicated SPOC:</strong> A single point of contact ensures seamless communication.</li>
              <li><strong>Experienced Team:</strong> Decades of expertise from sub-specialty radiologists and QA experts.</li>
              <li><strong>Robust Infrastructure:</strong> Advanced systems, secure VPNs, and redundant power for uninterrupted service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Emergency Radiology
            </h3>
            <p className="text-gray-700 mb-6">
              With global delivery centers and a team of expert radiologists, Nimble Acuity ensures accurate, timely, and affordable emergency radiology services. Our solutions save you time, money, and the challenge of hiring or training in-house staff.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Need immediate radiology support for your ER? Contact us today and receive a <strong>free quote within 24 hours</strong>.
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

export default EmergencyRadiology;
