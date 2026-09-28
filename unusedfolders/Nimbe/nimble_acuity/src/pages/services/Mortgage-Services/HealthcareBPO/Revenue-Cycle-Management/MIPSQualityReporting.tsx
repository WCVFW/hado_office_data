import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MIPSQualityReporting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              MIPS Quality Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              As a CMS Qualified Registry, <strong>Nimble Acuity</strong> offers comprehensive MIPS reporting services, including performance analytics, consulting, and training.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Merit-based Incentive Payment System (**MIPS**) under the CMS Quality Payment Program (**QPP**) is critical for physicians and healthcare facilities across the US. Since its launch in 2017, MIPS reporting has evolved with complex guidelines and requirements. 
            </p>
            <p>
              <strong>Nimble Acuity</strong> has been a CMS Qualified Registry for over a decade, delivering end-to-end MIPS quality reporting services. Our team equips healthcare organizations with the tools, analytics, and expertise to optimize QPP performance and maximize incentives while ensuring compliance.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              End-to-End MIPS Quality Reporting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>MIPS Advisory Services:</strong> Expert guidance on MACRA, workflow optimization, and goal-setting for physicians and facilities.
              </li>
              <li>
                <strong>EHR & Practice Management Integration:</strong> Identify, integrate, and optimize software for accurate data collection and reporting.
              </li>
              <li>
                <strong>Performance Score Assessment & Analytics:</strong> Predictive analysis and Provider Quality Report Cards for real-time insights and corrective action.
              </li>
              <li>
                <strong>Automated Reporting & Tracking:</strong> Standardized methodologies and intelligent dashboards for individual and group-level reporting.
              </li>
              <li>
                <strong>CMS Auditing Support:</strong> Proofing audit documents and offering post-submission assistance to ensure compliance.
              </li>
              <li>
                <strong>Educational & Customized Support:</strong> On-demand training for physicians and staff to understand MIPS, MACRA, incentives, and penalties.
              </li>
            </ul>
          </div>

          {/* Our Approach */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Approach to MIPS Quality Reporting
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Identifying the MACRA Track:</strong> Review Medicare volume and ACO participation to determine MIPS/Advanced APM eligibility.</li>
              <li><strong>Deployment of Technology:</strong> Utilize integrated EHR and Practice Management software for precise MIPS reporting.</li>
              <li><strong>Reviewing Clinicians' Eligibility:</strong> Verify physicians eligible for QPP enrollment.</li>
              <li><strong>Assessment and Tracking of Reports:</strong> Continuous monitoring, periodic alerts, and corrective action recommendations.</li>
              <li><strong>Validation and Report Submission:</strong> Optimize capabilities and ensure accurate and timely data submission.</li>
              <li><strong>Support Services:</strong> Education, training, consultancy, and audit assistance as needed.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Case Management</li>
              <li>Denial Management Services</li>
              <li>Payment Posting Services</li>
              <li>AR Calling Services</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for MIPS Quality Reporting
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Continuous Performance Improvement:</strong> Personalized guidance and training for physicians to improve scores.</li>
              <li><strong>Improved ROI:</strong> Efficient implementation, reduced costs, timely reporting, and penalty avoidance.</li>
              <li><strong>Dedicated Team Support:</strong> Experienced and committed MIPS experts for smooth project execution.</li>
              <li><strong>Flexible Pricing:</strong> Scalable and affordable packages suitable for facilities of all sizes.</li>
              <li><strong>100% Data Security:</strong> Strict controls to ensure patient and EHR data safety.</li>
              <li><strong>Quick Turnarounds:</strong> Fast and timely reporting to meet deadlines without delays.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Patient Demographic Entry Services to a Leading Client:</strong> Delivered high-quality services on time. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Rehabilitation Transcription Services to a Leading Client:</strong> Provided cost-effective, timely services. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "The verifications are going well. Any issues are addressed quickly, and corrections are made promptly. Excellent follow-up from the team."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource MIPS Quality Reporting Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Leverage our CMS Qualified Registry experience, EHR integration, and advanced reporting software to maximize your QPP scores while focusing on patient care.
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

export default MIPSQualityReporting;
