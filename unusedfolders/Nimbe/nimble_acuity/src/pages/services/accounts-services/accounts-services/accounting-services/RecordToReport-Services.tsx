import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RecordToReportServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Record to Report Services
            </h2>
            <p className="text-lg text-gray-600">
              Unlock a deeper understanding of your financial performance with our strategic, operational, and financial feedback system.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              To achieve exponential growth, a business must have clear insight into its financial performance. By gauging financial and strategic performance, you can make informed decisions, refine strategies, and plan for the future. This is where Record to Report (R2R) services are essential. Our services provide accurate and timely financial information, helping business owners evaluate performance and make data-driven decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of R2R services. We have extensive experience in finance and accounting, and by partnering with us, you can focus on your core operations while we handle your accounting functions. Our services free you from the hassle of hiring a full-time accounting professional for R2R processes, allowing you to dedicate your time and attention to what matters most.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Record to Report Services
            </h3>
            <p className="text-gray-700 mb-6">
              We provide superior R2R services that help your business operate efficiently and achieve better returns. Our team works closely with you to meet your monthly closing and reporting deadlines while streamlining operations to support your goals.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>General Accounting and Bookkeeping</li>
              <li>Inter-Company Accounting</li>
              <li>Revenue Accounting</li>
              <li>Closing Accounting</li>
              <li>Cost Accounting</li>
              <li>Financial Planning and Analysis</li>
              <li>Financial Statement Preparation</li>
              <li>Fixed Assets Accounting</li>
              <li>Bank and General Ledger Reconciliations</li>
              <li>Cash and Treasury Management Services</li>
              <li>Internal Controls and Audit Support</li>
              <li>Statutory Accounting and Reporting</li>
              <li>Tax Compliance and Filings (Sales/Use, VAT, Property)</li>
              <li>Financial Reporting Services (Internal, External, and Regulatory)</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for R2R Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Services:</strong> Flexible, highly affordable pricing models designed for businesses of all sizes.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with stringent international data security measures.</li>
              <li><strong>Cutting-Edge Technology:</strong> Advanced tools and software ensure accuracy, compliance, and efficiency.</li>
              <li><strong>Quick Turnaround Times:</strong> Expert teams deliver financial reports and insights on schedule, every time.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact for smooth communication and timely updates.</li>
              <li><strong>24/7 Customer Assistance:</strong> Always available via phone, email, or social media to resolve your queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Take Control of Your Financial Performance
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity’s Record to Report services empower you with insights and accuracy to drive smarter business decisions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Focus on growth while we handle your R2R processes.</span> Contact us now for premium services at a reasonable price.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RecordToReportServices;
