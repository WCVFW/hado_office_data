import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HouseCallEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              House Call EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Simplify your house call practice with <strong>Nimble Acuity</strong>. Our EMR services handle payroll, scheduling, reporting, and more at rates starting from $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Need a house call EMR that can document care plans, manage payroll, or streamline workflow and scheduling? 
              <strong>Nimble Acuity</strong> provides customized solutions for independent and remote practitioners, 
              helping over 300 global healthcare facilities optimize operations efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of EMR specialists, billing & coding professionals, and insurance experts ensures accurate, 
              reliable, and HIPAA-compliant house call EMR services tailored to your unique practice needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              House Call EMR Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Payroll Processing:</strong> Track hours, calculate reimbursements, process payroll, generate refunds, and access records electronically.</li>
              <li><strong>Demographic Management:</strong> Customize interfaces to manage patient and agent information, emergency contacts, and generate reports anytime.</li>
              <li><strong>Automated Billing & Coding:</strong> Generate accurate bills with suggested codes, consolidate older bills, and validate inconsistencies.</li>
              <li><strong>Appointment & Schedule Management:</strong> Schedule, reschedule, or plan visits for doctors, nurses, and agents efficiently.</li>
              <li><strong>Custom Reports Generation:</strong> Generate reports and dashboards tailored to representatives’ individual preferences.</li>
              <li><strong>Charge Approval Management:</strong> Audit and validate charges in real time, rectify errors, and streamline approvals.</li>
              <li><strong>Custom EMR System Development:</strong> Build a tailored house call EMR with modules, dashboards, and features unique to your practice.</li>
              <li><strong>Migration & Integration:</strong> Migrate legacy data, create custom templates, and integrate with charts, reports, and house call workflows.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              House Call EMR Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Gather client requirements and workflow details.</li>
              <li>Plan EMR development and design tailored to your practice.</li>
              <li>Initiate development with a dedicated project team.</li>
              <li>Test the EMR system for accuracy and performance.</li>
              <li>Deploy the tool in a live environment.</li>
              <li>Collect feedback and implement improvements.</li>
              <li>Provide ongoing support & maintenance.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>EMR Software Development</li>
              <li>Endocrinology EMR Services</li>
              <li>Primary Care EMR Services</li>
              <li>Health Information Technology</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource House Call EMR Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Service:</strong> Industry-leading pricing and customizable solutions to fit any practice size.</li>
              <li><strong>HIPAA Compliance:</strong> Strict adherence to privacy regulations with robust processes.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified systems to protect data and intellectual property.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Secure VPNs, firewall systems, advanced tools, and high-end servers.</li>
              <li><strong>Certified Professionals:</strong> Skilled NCCN, CPT, ICD-10-CM experts in RCM, billing, transcription, and analytics.</li>
              <li><strong>High-Quality & Fast Turnaround:</strong> Dedicated quality control teams reduce delivery time by 30–40% while maintaining standards.</li>
              <li><strong>Dedicated Project Manager:</strong> 24/7 access to a resource handling all project-related queries.</li>
              <li><strong>Scalable Solutions:</strong> Infrastructure and personnel to meet increasing EMR service demands.</li>
              <li><strong>Round-the-Clock Availability:</strong> Support via phone, email, or online chat, anytime.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Home & Lab Sleep Tests:</strong> Customized billing and eligibility verification for a US client, improving ROI and efficiency.</li>
              <li><strong>Full-Service Billing for Florida Practice:</strong> Streamlined Medisoft billing for a medical practice, enhancing operations and reducing errors.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource House Call EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Leverage over 20 years of expertise in house call EMR services. <strong>Nimble Acuity</strong> integrates workflow, billing, and administrative processes under a single platform, ensuring compliance, efficiency, and cost-effectiveness.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today to customize your house call EMR solution at a competitive rate.
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

export default HouseCallEMR;
