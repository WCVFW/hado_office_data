import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CashFlowManagement = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cash Flow Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Every company needs to effectively manage its cash flow. Predicting cash requirements and implementing the right measures can determine a business's success or failure.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              By outsourcing your cash flow management needs to an expert like Nimble Acuity, you can gain a competitive advantage. Nimble Acuity offers customized cash flow accounting services to a diverse range of customers. Our comprehensive cash flow management solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Predicting cash flows</li>
              <li>Daily cash flow management</li>
              <li>Managing financial risks</li>
              <li>Maintaining an electronic fund transfer system</li>
              <li>Reviewing and analyzing expenditures on banking services</li>
              <li>Negotiating contracts for financial and banking services</li>
              <li>Managing fraud control programs</li>
            </ul>
          </div>

          {/* Our Approach */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity’s Cash Flow Management Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Effective cash flow management is critical for any business's success. It requires professional expertise and extensive experience, capabilities that a business may not have in-house. Outsourcing your financial management needs to a specialized vendor is a viable alternative.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity first works to understand your projected sales, expenditures, and existing commitments. We then analyze different components such as accounts receivable, accounts payable, credit terms, and inventory to identify problematic areas. Based on this exhaustive exercise, we prepare a cash flow statement that helps you determine:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Time periods when you will need external funding (e.g., loans)</li>
              <li>Time periods when you will have excess funds for expansion or investments</li>
            </ul>
          </div>

          {/* Detailed Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What We Provide
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Cash Flow Planning:</strong> Forecast all cash inflows, analyze timing, and prepare detailed monthly projections to support planning, budgeting, and fundraising.
              </li>
              <li>
                <strong>Cash Flow Budgeting:</strong> Predict inflows and outflows over time, and take steps to close any gaps between them.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Cash Flow Analysis to Nimble Acuity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              By outsourcing your cash flow accounting services to us, you can leverage our extensive experience. Our knowledge of diverse industries helps us design solutions that fit your exact needs. We can help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Leverage Trained Professionals:</strong> Access expert capabilities not available in-house.</li>
              <li><strong>Use State-of-the-Art Technology:</strong> Benefit from advanced infrastructure and tools.</li>
              <li><strong>Receive Superior Services:</strong> Get high-quality services delivered on time.</li>
              <li><strong>Access Secure Services:</strong> File transfers via secure FTP server or encrypted emails.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Secure Your Business's Financial Future
            </h3>
            <p className="text-gray-700 mb-6">
              We focus on understanding your requirements to prepare a cash flow report that helps you manage your business activities better. When you outsource your cash flow analysis to us, you get a partner dedicated to your success.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to gain a competitive advantage?</span>
              Contact us today to outsource your cash flow management services.
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

export default CashFlowManagement;