import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialStatementAuditServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Auditing Financial Statements for Unwavering Compliance
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your financial reports are accurate and compliant with reporting standards. Our financial statement audit services offer a trusted third-party perspective, starting at just <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our team of professional auditors independently and fairly assesses your company's financial performance. This ensures foolproof compliance, accurate records, and efficient adherence to all financial reporting requirements.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Financial Statement Audit Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Planning and Risk Assessment:</strong> Dedicated audit teams establish guidelines, identify potential risks, and minimize errors.</li>
              <li><strong>Internal Controls Testing:</strong> Thorough testing of methods and systems ensures assets are safeguarded and transactions reported accurately.</li>
              <li><strong>Substantive Testing:</strong> Cross-verification of facts and figures through inspections, document reviews, and confirmations with third parties.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Us for Statement Audit Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Highly competitive rates tailored to your needs.</li>
              <li><strong>ISO Certified Quality:</strong> ISO-certified standards ensure quality and data security.</li>
              <li><strong>Transparent Processes:</strong> Clear audit procedures and pricing with no hidden costs.</li>
              <li><strong>Advanced Technology:</strong> Leveraging the latest tools for accurate, reliable audits.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance to address questions or concerns.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial and Accounting Support:</strong> Helped a Loan Production Office manage seasonal workload efficiently and cut costs.</li>
              <li><strong>Equity Research Services:</strong> Assisted a portfolio management firm in developing policies for strong returns, even in down markets.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Trust Our Professional Audits
            </h3>
            <p className="text-gray-700 mb-6">
              Gain access to fair and accurate third-party opinions with our professional audit services. We critically analyze financial documents and ensure full compliance with reporting regulations.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to ensure your financial statements are fully compliant?</span> Contact us now to discuss your needs and get an affordable quote.
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

export default FinancialStatementAuditServices;
