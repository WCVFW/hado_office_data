import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";


const FQHCBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              FQHC Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Simplify your billing and accelerate payments with Nimble Acuity’s
              specialized FQHC medical billing solutions—starting at just $4.50 per claim.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              FQHC billing is complex and often overwhelming without specialized expertise.
              Many practices face bottlenecks, denials, and lost revenue due to unfamiliarity
              with Medicare and Medicaid billing requirements.
              <strong> Nimble Acuity</strong> bridges that gap. With proven experience,
              we process claims using ADA, UB-04, and CMS-1500 forms—helping you get paid
              faster with fewer denials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our skilled billers handle a wide range of FQHC services, including behavioral
              health, dental, counseling, and chronic care management, using advanced billing
              software to maximize accuracy and boost first-pass acceptance rates.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Patient Data Security:</strong> Full compliance with NDAs to safeguard confidential information.</li>
              <li><strong>Cost-Efficient Services:</strong> Pricing customized to your needs with affordable rates per claim.</li>
              <li><strong>Error-Free Accuracy:</strong> High first-pass acceptance through meticulous billing practices.</li>
              <li><strong>Experienced Team:</strong> Over a decade of expertise in FQHC billing and revenue cycle management.</li>
              <li><strong>Quick Turnaround:</strong> Advanced technology ensures faster claim processing.</li>
              <li><strong>Scalable Solutions:</strong> Services designed to grow seamlessly with your practice.</li>
              <li><strong>All-Round Support:</strong> Phone, email, and web chat support in your preferred time zone.</li>
            </ul>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our FQHC Medical Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Revenue Cycle Management</li>
              <li>Claims Submission (ADA, UB-04, CMS-1500)</li>
              <li>UDS Reporting</li>
              <li>Denial Management</li>
              <li>Sliding Scale Fee Processing</li>
              <li>Medicare & Medicaid Claims</li>
              <li>Dental & Behavioral Health Billing</li>
              <li>Chronic Care Management Billing</li>
              <li>Financial Analysis & Benchmarking</li>
              <li>Custom Executive Reports</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transparent Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> We begin with a detailed consultation via call, email, or chat.</li>
              <li><strong>Billing Execution:</strong> Dedicated experts, bound by NDAs, handle your billing functions.</li>
              <li><strong>Data Validation:</strong> Quality checks eliminate errors before claims submission.</li>
              <li><strong>Format Conversion:</strong> Data is prepared in payer-prescribed formats for compliance.</li>
              <li><strong>Report Dispatch:</strong> Monthly executive reports keep you informed and in control.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your FQHC Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers transparent, accurate, and scalable billing
              solutions designed to maximize your revenue cycle performance.
              With advanced tools and a dedicated team, we help you reduce denials,
              improve efficiency, and secure payments on time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today for a free consultation and discover how we can
              transform your FQHC billing operations.
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

export default FQHCBilling;
