import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountsReceivableFactoring = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Accounts Receivable Factoring
            </h2>
            <p className="text-lg text-gray-600">
              Stop waiting for payments and get immediate access to cash. Our AR Factoring services offer <strong>nimble acuity</strong>—speed and precision to unlock the value of your outstanding invoices and keep your business moving forward.
            </p>
          </div>

          {/* What is AR Factoring */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is AR Factoring?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              AR factoring is a simple way to turn your outstanding invoices into immediate working capital. Instead of waiting 30, 60, or 90 days for payments, you sell your receivables to us for a lump sum—getting instant cash flow without adding debt to your balance sheet.
            </p>
          </div>

          {/* Factoring Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Factoring Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Invoice Management:</strong> Organize, process, and digitally enter all invoices for accurate, up-to-date records.</li>
              <li><strong>Collections & Follow-Up:</strong> Expert team proactively follows up with customers to ensure timely payments.</li>
              <li><strong>AR Loan Processing Support:</strong> Handle back-office functions and documentation to simplify securing an AR loan.</li>
              <li><strong>Cash Flow Analysis:</strong> Detailed reports providing a clear view of cash influx and outflow, helping identify and resolve bottlenecks.</li>
            </ul>
          </div>

          {/* Why Partner with Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial Agility:</strong> Eliminate the lag between invoicing and payment, giving freedom to operate, invest, and grow.</li>
              <li><strong>Cost-Effective:</strong> Access highly-qualified professionals at a fraction of the cost of an in-house team.</li>
              <li><strong>Data Security:</strong> Stringent protocols protect financial data, including </li>
              <li><strong>Global Expertise:</strong> Deep knowledge of AR factoring markets in the US and UK, adhering to IFRS and international standards.</li>
              <li><strong>Operational Excellence:</strong> Data-driven approach to minimize bad debts and maximize cash flow, letting you focus on core business activities.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Receivables Today
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to turn accounts receivable into a powerful financial asset and accelerate your cash flow?
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

export default AccountsReceivableFactoring;
