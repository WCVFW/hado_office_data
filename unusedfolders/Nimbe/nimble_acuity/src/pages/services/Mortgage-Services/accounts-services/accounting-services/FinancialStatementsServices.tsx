import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialStatementsServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Hero */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
            Financial Statement Preparation Services
          </h2>
          <p className="text-lg text-gray-600">
            Manage seasonal demand hikes with our on-demand financial reporting services. We provide scalable solutions that optimize resource allocation and streamline ROI.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-5xl mb-16 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Are you equipped to handle seasonal surges? Without proper preparation, operational efficiency can suffer, leading to eroded profit margins and delayed client deliverables. Our end-to-end financial statement preparation services offer the flexibility and scalability to meet evolving business requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our strategic approach optimizes resources, improves expense ratios, and enhances ROI. Using cloud-based financial reporting platforms and expertise in GAAP and IFRS standards, we help manage cash flows, receivables, payables, and inventory for your clients, ensuring timely delivery and complete satisfaction.
          </p>
        </div>

        {/* Our Services */}
        <div className="max-w-6xl mb-16">
          <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
            Financial Statement Preparation Services We Offer
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Finance Transformation Services:</strong> Redefine financial processes for efficiency, reduce overheads, and drive business growth with strategic insights.</li>
            <li><strong>Year-End Accounting Services:</strong> Ensure precision and punctuality in year-end reports, helping clients close fiscal years smoothly and compliantly.</li>
            <li><strong>Financial Budgeting Services:</strong> Deliver accurate budgeting and resource control, focusing on variance reduction and strategic planning.</li>
            <li><strong>General Accounting Services:</strong> Provide timely financial reporting and bookkeeping for a clear picture of client finances.</li>
          </ul>
        </div>

        {/* Our Process */}
        <div className="max-w-6xl mb-16">
          <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
            Our Step-by-Step Financial Statement Solutions Process
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>Collect Financial Information:</strong> Gather all income, expense, asset, and liability data.</li>
            <li><strong>Organize Data:</strong> Classify and arrange data for easy analysis.</li>
            <li><strong>Prepare Initial Statements:</strong> Draft preliminary financial statements for review.</li>
            <li><strong>Review and Adjust Data:</strong> Reconcile all data for accuracy and consistency.</li>
            <li><strong>Finalize and Present:</strong> Deliver complete financial statements for decision-making and planning.</li>
          </ol>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mb-16">
          <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
            Why Choose Nimble Acuity for Financial Statement Preparation?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Tax Compliance Assurance:</strong> Accurate documentation of taxable income, deductions, and credits.</li>
            <li><strong>Performance Benchmarking:</strong> Use KPIs to provide valuable benchmarks for improving financial performance.</li>
            <li><strong>Future Strategic Planning:</strong> Comprehensive reports form the basis for effective business strategies.</li>
            <li><strong>Budget Formulation and Forecasting:</strong> Leverage financial modeling and variance analysis for accurate budgeting.</li>
            <li><strong>Legal Compliance Assurance:</strong> Full adherence to GAAP, IFRS, and other accounting standards.</li>
            <li><strong>Operational Efficiency:</strong> Streamlined processes allow your team to focus on core competencies.</li>
            <li><strong>Cost Savings:</strong> Reduce expenses related to hiring, training, and infrastructure by outsourcing.</li>
          </ul>
        </div>
        
        {/* CTA */}
        <div className="max-w-4xl mt-16">
          <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
            Ensure Accuracy and Compliance with Our Expert Services
          </h3>
          <p className="text-gray-700 mb-6">
            Our approach integrates advanced analytics, AI, and a global network of CPAs to deliver human-centric, compliant, and insightful financial reporting solutions. We embed within your ecosystem to provide seamless, scalable support that aligns with your business goals.
          </p>
          <p className="text-gray-700 mb-8">
            <span className="font-medium">Ready to scale your financial statement preparation efficiently?</span>
            Contact Nimble Acuity today to ensure accuracy, compliance, and measurable value for your clients.
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

export default FinancialStatementsServices;