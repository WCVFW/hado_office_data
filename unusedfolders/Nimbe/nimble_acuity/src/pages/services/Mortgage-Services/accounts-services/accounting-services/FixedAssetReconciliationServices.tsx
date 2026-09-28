import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FixedAssetReconciliationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Fixed Asset Reconciliation Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurately track the quantity, location, and condition of your fixed assets with our expert reconciliation services, starting at just $12/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Tracking the quantity, location, and condition of fixed assets is a significant challenge for most organizations. Fixed asset reconciliation services help you tally and bring together different data sets to ensure proper and accurate valuation. A well-defined reconciliation process is essential for tracking an organization's financial trail.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has over two decades of experience providing fixed asset reconciliation services to organizations across different domains. We help our clients identify and establish the book value, debits, and credits to fixed asset accounts, along with accumulated depreciation. We leverage spreadsheets, Fixed Asset Registers (FAR), or ERP systems like SAP to track and update asset valuations through well-defined audit activities.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Fixed Asset Reconciliation Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We are a well-known provider of fixed asset reconciliation services, offering a range of solutions to meet your needs.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Asset Valuation & Depreciation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Help companies compute or review fixed asset values to indicate the correct value on the closing date.</li>
                  <li>Identify and compute depreciation of fixed assets using established methods like straight-line or double-declining balance.</li>
                  <li>Review depreciation computations to ensure accuracy and compliance before reconciliation.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Asset Addition & Removal</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Assess the feasibility and legality of newly introduced assets for proper mapping and reconciliation.</li>
                  <li>Ensure the appropriate removal of fixed assets from your balance sheet when they are sold or disposed of.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Fixed Asset Reconciliation Statement</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Generate a comprehensive statement that accounts for the value, depreciation, and status of all your fixed assets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Fixed Asset Reconciliation Process
            </h3>
            <p className="text-gray-700 mb-6">
              We follow a robust and well-defined process to ensure accurate, consistent, and reliable results.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Access & Analysis:</strong> We begin by accessing previous year's balances to understand depreciation rates and asset useful lives. We then account for current-year purchases and disposals by cross-checking invoices and ensuring all ancillary costs are capitalized.</li>
              <li><strong>Impairment & Depreciation Assessment:</strong> We assess the useful lives, impairment, and depreciation of assets to ensure the correct values are applied according to organizational guidelines and accounting standards.</li>
              <li><strong>Physical Verification & Closing:</strong> We review physical asset logs to check the condition and usage of assets. Finally, we verify all accounts and balances to issue a comprehensive reconciliation statement with a verified summary of closing balances.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Guaranteed Savings:</strong> Our services help you save money by identifying under-utilization, avoiding duplicate purchases, and ensuring correct insurance premiums.</li>
              <li><strong>Compliance:</strong> We assist organizations in meeting statutory and IFRS requirements, helping you adhere to international accounting standards.</li>
              <li><strong>Informed Decisions:</strong> Our services provide a clear view of your fixed assets, enabling you to manage risks and make informed business decisions based on accurate, up-to-date information.</li>
              <li><strong>End-to-End Tracking:</strong> We help you establish comprehensive control and a full audit trail of all your fixed assets, reducing costs and preventing fraud.</li>
              <li><strong>Expert Team:</strong> Our dedicated and professional fixed asset consultants are committed to providing proper valuations, accounting, and financial reporting.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Accurate Asset Management
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has over two decades of experience ensuring accurate fixed asset reconciliation. Our services help clients eliminate fraud and financial misstatements by tracing and inventorying accounts to the fixed assets accounting record.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">If your business is looking for the best fixed asset reconciliation services, get in touch with our experts now.</span>
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

export default FixedAssetReconciliationServices;