import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const GeneralLedgerAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              General Ledger Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your financial operations, correct discrepancies, and optimize cash flow with Nimble Acuity’s general ledger expertise.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              General ledger accounting can be one of the most complex financial functions to manage in-house. Validating debits and credits through trial balance is often challenging for small teams without specialized expertise. If reconciling liabilities, assets, revenue, equity, and expenses is consuming valuable time, outsourcing general ledger accounting services is the solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, our certified accountants are highly experienced with tools like QuickBooks and Sage. We work as a seamless extension of your team to empower your business with accuracy, confidentiality, and a clear view of your finances at every step.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              General Ledger Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We provide tailored general ledger solutions for businesses of all sizes, leveraging advanced accounting technology to streamline operations and minimize reconciliation challenges.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Balance Sheet Optimization</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Detailed reviews of liabilities, assets, and capital to uncover revenue leaks and strengthen financial health.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Key Financial Statements</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Prepare accurate income statements for a complete view of cash flow.</li>
                  <li>Compile debit and credit balances into adjusted trial balances for seamless reporting.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Strategic Financial Planning</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide strategic budgeting services to enable long-term financial planning.</li>
                  <li>Generate customized periodic reports summarizing expenditure and liabilities.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Reconciliation & Data Integrity</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Accurately reconcile bank accounts to ensure balanced inflow and outflow tracking.</li>
                  <li>Offer reliable data entry services to maintain a transparent revenue trail for audits.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Our affordable services feature flexible pricing to fit your budget.</li>
              <li><strong>Data Integrity:</strong> We employ robust protection measures to safeguard your sensitive financial data.</li>
              <li><strong>High-Quality Services:</strong> Expect consistently accurate, reliable, and error-free results.</li>
              <li><strong>Modern Infrastructure & Tools:</strong> We use advanced technology and secure systems for efficient and reliable operations.</li>
              <li><strong>Scalable Growth:</strong> Our services are easily adjustable to meet your business's growing demands.</li>
              <li><strong>Strict on Deadlines:</strong> We guarantee fast turnaround times without compromising on quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Power Your Business with Flawless Financial Records
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers world-class general ledger accounting services, backed by specialized accountants and financial experts. From revenue optimization to account reconciliation, we provide end-to-end support to enhance your business operations.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity to gain the clarity and control you need to drive growth.</span> Contact us today to discuss your general ledger needs.
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

export default GeneralLedgerAccountingServices;