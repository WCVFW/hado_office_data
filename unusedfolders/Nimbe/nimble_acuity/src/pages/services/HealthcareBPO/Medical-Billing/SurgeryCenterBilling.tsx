import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const SurgeryCenterBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Surgery Center Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Fast, efficient, and cost-effective billing solutions for surgery centers. Nimble Acuity
              manages all aspects of billing, maximizing reimbursements and streamlining revenue cycles
              for multiple specialties worldwide.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Surgery centers require customized, professional billing services to optimize revenue
              and reduce administrative burden. Nimble Acuity provides expert billing management,
              leveraging a global team of professionals and industry-compliant practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Partner with us to ensure accurate claims processing, efficient coding, and effective
              financial management across all specialties.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              End-to-End Surgery Center Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Ambulatory Surgical Center (ASC) Billing:</strong> Claims processing, cash flow coding, financial monitoring, and receivables management.</li>
              <li><strong>ASC Coding:</strong> Accurate coding by certified coders, identifying potential bundling rules and optimizing billed amounts.</li>
              <li><strong>Surgical Practice & Medical Billing:</strong> Billing services for gastroenterology, orthopedics, urology, ENT, OB/GYN, including electronic claims submission and patient payment collection.</li>
              <li><strong>Managed Care Contract Services:</strong> Improve revenue management via negotiation, reduced bad debts, and insight into patient insurance policies.</li>
              <li><strong>Billing Review Services:</strong> Detailed revenue cycle analysis, forecasts, and operational insights to prevent denials and maximize cash flow.</li>
              <li><strong>Out-of-Network Billing Services:</strong> Handle regulatory and legal issues for out-of-network claims, avoiding denials and bad debts.</li>
              <li><strong>Professional Insurance Payor Collections:</strong> Recover delayed or unpaid claims from insurance payers efficiently.</li>
              <li><strong>Medicare Registration & Billing Consultation:</strong> Ensure compliance and expert guidance on billing frameworks, software, and insurance analysis.</li>
            </ul>
          </div>

          {/* Workflow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Workflow: Surgery Center Billing
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Define Scope of Work:</strong> Assess billing needs, deadlines, and KPIs.</li>
              <li><strong>Segregate Job Roles:</strong> Assign tasks to departments with a dedicated project manager overseeing the process.</li>
              <li><strong>Pilot Draft:</strong> Create a roadmap of services for client verification.</li>
              <li><strong>Service Delivery:</strong> Execute billing services, implement software, and integrate with your workflow.</li>
              <li><strong>Follow-up & Modifications:</strong> Incorporate client feedback and implement suggested changes.</li>
              <li><strong>Reporting:</strong> Submit final reports summarizing successful project implementation and outcomes.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Maximized Collection:</strong> Reduce bad debts and denials to boost revenue.</li>
              <li><strong>World-Class Team:</strong> Over 220 experts across multiple domains ensuring versatile experience.</li>
              <li><strong>Assured Transparency:</strong> Compliance with industry guidelines and continuous reporting.</li>
              <li><strong>Data Security:</strong> Secure network channels maintaining client confidentiality.</li>
              <li><strong>Affordable Pricing:</strong> Flexible, customizable, and cost-effective pricing models.</li>
              <li><strong>Global Reach:</strong> Offices in multiple countries with 24/7 access to data and customer support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Maximize Your Profits and Streamline Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides end-to-end surgery center billing solutions, including claims
              processing, revenue management, and care-contract management. Our experienced teams
              ensure the fastest turnaround times and competitive pricing.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today to optimize your billing workflow and increase your revenue.
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

export default SurgeryCenterBilling;
