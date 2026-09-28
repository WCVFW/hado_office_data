import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPABookkeepingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              CPA Bookkeeping Services from Nimble Acuity
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Accurate accounting records are the foundation of your business's performance. Yet, many businesses struggle with managing cash flow due to a lack of qualified bookkeepers. Our CPA bookkeeping services will help you overcome these challenges.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive experience in providing world-class **CPA bookkeeping solutions** to businesses globally. We streamline processes, centralize client information, and provide tech-driven services for full financial control.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CPA Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Inventory Bookkeeping:</strong> Get all your stock accounted for and recorded, enabling accurate forecasting of future expenditures.</li>
              <li><strong>Accounts Receivable Bookkeeping:</strong> Meticulously record credit transactions and track payments to ensure timely receipts.</li>
              <li><strong>Sales Bookkeeping:</strong> Track all business revenue inflows to provide a precise understanding of your revenue position.</li>
              <li><strong>Cash Account Bookkeeping:</strong> Record all cash inflows and outflows to maintain a complete ledger of transactions.</li>
              <li><strong>Loans Payable Bookkeeping:</strong> Manage loans payable account for an up-to-date status and clear breakdown of obligations.</li>
              <li><strong>Purchase Account Bookkeeping:</strong> Track all purchased goods and materials to understand overall mandatory expenses.</li>
              <li><strong>Payroll Expenses Bookkeeping:</strong> Maintain detailed payroll records including wages, deductions, and taxes.</li>
              <li><strong>Retained Earnings Bookkeeping:</strong> Get a clear status of total profits reinvested into your business from a given financial year.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CPA Bookkeeping Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bucket Debits and Credits:</strong> Analyze every financial transaction and assign it to the appropriate accounts.</li>
              <li><strong>Record Entries:</strong> Enter debit and credit figures in the correct journal entries as soon as transactions occur.</li>
              <li><strong>Update Ledgers:</strong> Ensure every journal entry is accurately posted to the corresponding ledger accounts.</li>
              <li><strong>Tally Entries:</strong> Adjust and match entries after the close of each accounting period to ensure accuracy.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expert Bookkeepers:</strong> Easy access to a global network of experienced CPA bookkeepers.</li>
              <li><strong>Need-Specific Software:</strong> Select and integrate the best bookkeeping software matched to your needs.</li>
              <li><strong>Regular Updates:</strong> Books updated regularly according to a strategic schedule for accuracy.</li>
              <li><strong>Categorized Expenses:</strong> Expenditures and earnings are neatly organized for easy statement generation.</li>
              <li><strong>Standard Procedures:</strong> Optimized bookkeeping procedures ensure fundamental principles are always followed.</li>
              <li><strong>Optimized Operations:</strong> Digital dashboards and centralized management ensure efficiency.</li>
              <li><strong>Steady Cash Flow:</strong> Gain complete control over your cash flow with real-time financial insights.</li>
              <li><strong>Cost-Effective Services:</strong> High-quality services at competitive prices, superior to hiring an in-house team.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Finances with CPA Bookkeeping
            </h3>
            <p className="text-gray-700 mb-6">
              Gain full control over your finances and optimize cash flow with Nimble Acuity's professional CPA bookkeeping services. Let us help you maintain accurate, audit-ready books and streamline your accounting processes.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your financial management?</span>
              Contact us today to discuss your bookkeeping needs and get started.
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

export default CPABookkeepingServices;