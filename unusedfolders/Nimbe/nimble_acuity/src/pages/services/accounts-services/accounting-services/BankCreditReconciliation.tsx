import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BankCreditReconciliation = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Bank and Credit Reconciliation Services
            </h2>
            <p className="text-lg text-gray-600">
              Minimize errors, accelerate month-end closings, and enhance financial reporting efficiency through ERP systems, centralized dashboards, and standardized workflows.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We specialize in bank and credit card reconciliation services, ensuring financial integrity for businesses across real estate, construction, retail, finance, and manufacturing. Our expertise includes transaction matching, discrepancy resolution, fraud detection, and compliance-driven adjustments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Leveraging automation and AI-driven insights, we optimize cash flow accuracy, mitigate risks, and ensure audit readiness. By integrating seamlessly with your accounting systems, we eliminate inconsistencies for real-time financial clarity. Trust our certified experts to help you achieve efficiency, accuracy, and compliance.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Bank and Credit Card Reconciliation Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bank Statement Reconciliation:</strong> Identify discrepancies and unauthorized transactions to ensure monthly alignment with bank records.</li>
              <li><strong>Credit Card Statement Reconciliation:</strong> Detect fraudulent charges, billing errors, and maintain up-to-date expense tracking.</li>
              <li><strong>Loan Reconciliation:</strong> Track loan payments and interest, confirm balances, and ensure compliance with agreements.</li>
              <li><strong>Balance Sheet Reconciliation:</strong> Validate assets and liabilities, ensure accurate reporting, and support financial statement preparation.</li>
              <li><strong>Vendor Payment Reconciliation:</strong> Align invoices with payments, resolve discrepancies, and strengthen vendor relationships.</li>
              <li><strong>Cash Flow Reconciliation:</strong> Monitor inflows/outflows, identify anomalies, and improve liquidity planning.</li>
              <li><strong>Financial Statement Reconciliation:</strong> Ensure integrity of reports, support audit preparedness, and correct documentation errors.</li>
              <li><strong>Accounts Receivable/Payable Reconciliation:</strong> Track receivables and payables, reconcile transactions, and optimize cash flow.</li>
              <li><strong>Customer Account Reconciliation:</strong> Validate balances, resolve billing discrepancies, and improve satisfaction.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our Bank and Credit Card Reconciliation Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Automatic Detection and Settlement of Errors:</strong> AI-driven tools analyze and flag discrepancies, minimizing manual effort.</li>
              <li><strong>Easy Integration:</strong> Works seamlessly with ERP, accounting, and banking software to eliminate data silos.</li>
              <li><strong>Fraud Prevention and Compliance:</strong> Detects fraudulent transactions and ensures compliance with GAAP, IFRS, and industry regulations.</li>
              <li><strong>Real-Time Cash Flow Optimization:</strong> Provides up-to-date liquidity insights for better decision-making.</li>
              <li><strong>Accuracy in Customer and Vendor Reconciliation:</strong> Prevents overpayments, missing receivables, and disputes with accurate reconciliation.</li>
              <li><strong>Audit-Ready Records:</strong> Well-documented reconciliations for seamless audits and compliant reporting.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ensure Financial Integrity with Our Expert Reconciliation Services
            </h3>
            <p className="text-gray-700 mb-6">
              Eliminate payment mismatches and revenue leakage with our reconciliation expertise. Ensure your business always has error-free, compliant, and audit-ready financial records.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to optimize your financial processes?</span>
              Contact us today to discuss your bank and credit reconciliation needs.
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

export default BankCreditReconciliation;