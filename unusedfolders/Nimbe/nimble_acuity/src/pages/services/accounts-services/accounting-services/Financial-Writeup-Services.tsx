import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialWriteupServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Write-up Services
            </h2>
            <p className="text-lg text-gray-600">
              Financial write-up services involve the entry and maintenance of all
              accounting transactions, leading to the creation of general ledgers and
              financial statements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In today&apos;s business environment, organizations are using increasingly
              complex financial systems. Financial write-up services are a crucial
              component of sound financial reporting, as they form the foundation for
              all analyses and reports within a company.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While accounting software packages promise to handle almost everything,
              they cannot replace the skill and strategic thinking of an experienced
              accountant. This is where Nimble Acuity&apos;s financial write-up services
              can help you.
            </p>
          </div>

          {/* Data Inputs */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Write-up Services: Data Inputs
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nimble Acuity, we leverage the features of various accounting
              software packages and the expertise of our proficient accountants to
              provide you with superior write-up services that enhance your overall
              financial decision-making.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We require you to send us the necessary documents for all your
              financial transactions, such as purchase and sales invoices, checks,
              receipts, and payroll details. Based on this information, our skilled
              team prepares your ledger accounts and financial statements in full
              compliance with statutory regulations. We accept data inputs as
              spreadsheets, scanned images, or electronic data. The completed accounts
              and financial reports are sent to you in your preferred format and
              through your chosen method of communication.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity’s Write-up Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity’s value-added write-up services go beyond simple data
              entry. We offer complex financial analysis, help you define account
              structures, and provide overall financial guidance to support
              data-driven decision-making.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Transaction Entry</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Journal Entry</li>
                  <li>General Ledger</li>
                  <li>Assets/Equipment Ledgers</li>
                  <li>Expenses Ledger</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Accounts Receivable Services</li>
                  <li>Accounts Payable Services</li>
                  <li>Account Reconciliation Services</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Statement Preparation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Trial Balance</li>
                  <li>Income Statement (Profit & Loss)</li>
                  <li>Balance Sheet</li>
                  <li>Cash Flow Statement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Build Stronger Financial Foundations with Expert Write-up Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides precise financial write-up services to keep your
              books accurate, compliant, and insightful for better decision-making.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us for accurate records and
                reliable financial reporting.</span> Contact us today to discuss your
              financial write-up requirements.
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

export default FinancialWriteupServices;
