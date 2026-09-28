import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const PPOClaimsRepricing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              PPO Health Insurance Claims Re-pricing Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your PPO health insurance claims with <strong>Nimble Acuity</strong>. Our experts ensure accurate repricing, reduce operational costs, and enhance efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              PPO health insurance claims repricing helps insurance providers apply discounted fee schedules while ensuring accurate claims processing. This often involves complex paperwork, manual effort, and detailed data verification.
            </p>
            <p>
              <strong>Nimble Acuity</strong> is a leading provider of PPO claims repricing in India, helping healthcare organizations and insurance providers reduce costs, improve accuracy, and accelerate turnaround times.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our PPO Health Insurance Claims Repricing Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>End-to-end Medical Claims Processing for Health Insurance Claims Repricing</li>
              <li>Manual Re-pricing of Claims</li>
              <li>Routing Claims to the PPO for Repricing</li>
              <li>Checking and Verification of Claims</li>
              <li>Provider Table Maintenance</li>
              <li>Forms Processing</li>
              <li>Validation of Claims</li>
              <li>Fraud Detection</li>
            </ul>
          </div>

          {/* Process Steps */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Steps in Our PPO Health Insurance Claims Repricing Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <strong>Obtaining Data for Insurance Repricing:</strong> Collect accurate and secure data from multiple insurers and TPA databases.
              </li>
              <li>
                <strong>Reconciliation of Hospital and Insurance Data:</strong> Ensure zero data loss and complete alignment across all sources before repricing.
              </li>
              <li>
                <strong>Cleaning and Restructuring of Insurance Data:</strong> Correct logical errors, standardize formats, remove duplicates, and resolve mismatches.
              </li>
              <li>
                <strong>Insurance Data Analysis:</strong> Analyze claims, payments, policies, and insured demographics to ensure accurate repricing.
              </li>
            </ol>
          </div>

          {/* Quick Stats */}
          <div className="max-w-6xl mb-16 grid grid-cols-1 md:grid-cols-5 gap-6  text-gray-700">
            <div className="border rounded-lg p-4 shadow">
              <p className="font-bold text-lg">24-hour TAT</p>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <p className="font-bold text-lg">98% Accuracy</p>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <p className="font-bold text-lg">40% Cost Reduction</p>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <p className="font-bold text-lg">300+ Customers</p>
            </div>
            <div className="border rounded-lg p-4 shadow">
              <p className="font-bold text-lg">26+ years Experience</p>
            </div>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Tools We Leverage for PPO Claims Repricing
            </h3>
            <p className="text-gray-700">
              We utilize the latest medical billing software and technologies to ensure fast, accurate, and reliable PPO claims repricing. (List of tools can be added here.)
            </p>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Accounts Receivable Management</li>
              <li>Accounts Receivable Follow-up</li>
              <li>Insurance Eligibility Verification</li>
              <li>Medical Claims Processing</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for PPO Claims Repricing
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Cost-effective Claims Repricing:</strong> Transparent pricing tailored to your requirements.</li>
              <li><strong>High Accuracy Standards:</strong> ISO 9001:2015 certified for precise data reconciliation and claims handling.</li>
              <li><strong>Data Security & Confidentiality:</strong> State-of-the-art firewalls, secure servers, and HIPAA compliance.</li>
              <li><strong>Best Infrastructure:</strong> Latest billing technologies and uninterrupted networks in world-class offices.</li>
              <li><strong>Quick Turnaround Times:</strong> Multiple global delivery centers ensure fast processing.</li>
              <li><strong>Qualified Medical Professionals:</strong> Experienced insurance experts with global exposure.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support across all time zones.</li>
              <li><strong>Easily Scalable:</strong> Adaptable resources and bandwidth to meet growing requirements.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Accounts Receivable Management & Medical Billing:</strong> Reduced AR days for a leading medical billing company.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Full-Service Medical Billing Services:</strong> Delivered services using AdvancedMD software for a client.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "I appreciate your efforts getting my clients coding current and working with me during my company's extreme changes."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Assistant Manager, Medical Billing, Coding & Consulting Company, NY, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource PPO Health Insurance Claims Repricing to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Focus on your core operations while our experts handle labor-intensive claims repricing accurately, efficiently, and securely.
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

export default PPOClaimsRepricing;
