import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const PaymentPostingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Payment Posting Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate, timely, and professional payment posting for your billing cycle with <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Payment posting marks the end of the billing cycle, recording all patient payment details in billing software. It triggers other processes requiring continuous attention. <strong>Nimble Acuity</strong> ensures precise and swift payment posting, helping optimize your cash flows.
            </p>
          </div>

          {/* How We Work */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              How We Work: Specialized Medical Billing Payment Posting
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Reading and Analyzing EOB:</strong> We carefully analyze EOBs (Explanation of Benefits) to identify payment patterns, denial reasons, and outstanding amounts before recording details.</li>
              <li><strong>Analysis-Based Action:</strong> Payment gaps are flagged, and actionable charts are shared with billing departments to ensure quick collection of outstanding amounts from patients.</li>
              <li><strong>Inflow Statement:</strong> Real-time tracking of receivables and cash inflows helps optimize revenue and monitor performance.</li>
            </ul>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mt-6">
              <li>4,968,000 Medical transcription lines</li>
              <li>504,000 Payment postings</li>
              <li>450,000 Charge entries</li>
              <li>288,000 Demo entries</li>
              <li>234,000 AR calling</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              How We Improve Your Overall Medical Billing System
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Faster Denial Management:</strong> We identify and resolve denial patterns quickly to accelerate claim processing.</li>
              <li><strong>Specialized Claims Posting Resources:</strong> Experienced resources ensure accurate data entry, domain expertise, and proper analysis.</li>
            </ol>
          </div>

          {/* Whom We Serve */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Whom We Serve
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <li>Healthcare practitioners</li>
              <li>Clinics and care centers</li>
              <li>Medical Insurance companies</li>
              <li>Diagnostic labs</li>
              <li>Hospitals</li>
              <li>Medical Billing Companies</li>
              <li>Teleradiology centers</li>
              <li>Revenue Cycle Management firms</li>
            </ul>
          </div>

          {/* Payment Posting Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Nimble Acuity's Payment Posting Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Payment posting from EOBs to patient account</li>
              <li>Analysis of underpayment or overpayment</li>
              <li>Indexing EOBs to patient account</li>
              <li>Reconciliation with actual deposits</li>
            </ol>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Tools We Leverage
            </h3>
            <p className="text-gray-700">
              Our skilled team utilizes the latest medical billing tools and technologies to ensure precise payment posting.
            </p>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Accounts Receivable Management</li>
              <li>Insurance Eligibility Verification Services</li>
              <li>Accounts Receivable Follow-up</li>
              <li>Medical Claims Processing</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Offshore Payment Posting to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective services tailored to your requirements and budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified to ensure complete data safety.</li>
              <li><strong>HIPAA Compliant:</strong> Every service begins with a signed HIPAA agreement.</li>
              <li><strong>Error-free Posting:</strong> ISO 9001:2013 certified for top-quality output.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Access to latest tools, software, and uninterrupted networks.</li>
              <li><strong>Experienced Team:</strong> Talented professionals handling all client requirements efficiently.</li>
              <li><strong>Quick Turnaround Time:</strong> Multiple delivery centers to ensure fast service, even within 6–12 hours.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication.</li>
              <li><strong>Easily Scalable:</strong> Ramp up resources as per your changing requirements.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support across time zones.</li>
            </ul>
          </div>

          {/* Client Testimonials */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "Nimble Acuity provides a reliable and efficient medical billing service. They have helped improve collections and lower receivables for my clients."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Founder & CEO, Billing Company, East Coast
            </p>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Medical Billing Services for Maryland-based Client:</strong> Provided services quickly and efficiently. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Full-Service Billing Using Medisoft Software:</strong> Delivered full-service medical billing using Medisoft. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Payment Posting to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Save time, reduce costs, and ensure accurate payment posting with our experienced team. 24-hour TAT, 98% accuracy, and over 300 satisfied customers worldwide.
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

export default PaymentPostingServices;
