import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const AccountsReconciliationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounts Reconciliation Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer professional accounts reconciliation services for businesses of all sizes, from small and medium enterprises to large corporations.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Account reconciliation is the act of confirming whether an account&apos;s balance matches its corresponding bank statement. This process is crucial to the financial health of any organization as it helps identify errors and inconsistencies, ensuring accuracy and proper financial management. Our expert services can help you prevent fraud, avoid legal issues, and focus on your core business goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Depending on your size, structure, and business goals, you may require different types of reconciliation services. To meet this need, Nimble Acuity provides three main types of accounts reconciliation services. All our services include check sequencing, comprehensive reports that balance with your bank statement, flexible reconciliation periods, and compatibility with your preferred data formats.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Accounts Reconciliation Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Full Account Reconciliation:</strong> We manage all your reconciliation needs by matching issued checks against cleared checks. You receive a complete reconciliation report with paid checks, outstanding items, and exceptions. Reports are delivered via email or FTP.
              </li>
              <li>
                <strong>Partial Account Reconciliation:</strong> We reconcile only the items you request. Paid items are sorted as per your instructions, and you receive a detailed summary of account activity, including stopped items.
              </li>
              <li>
                <strong>Deposit Reconciliation:</strong> Access a detailed list of deposits through a single checking account, providing transparency and accuracy for all transactions.
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Account Reconciliation Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Standardized definition of &quot;account reconciliation&quot; across all services.</li>
              <li>Dedicated quality control team monitoring the entire process.</li>
              <li>Separate reconciliation for each balance sheet account.</li>
              <li>Risk-based criteria for faster error identification.</li>
              <li>Standard reconciliation forms with mandatory supporting documentation.</li>
              <li>Clear action plans for reconciling items and approvals for every reconciliation.</li>
              <li>Regular status reports to management with action items for delinquent reconciliations.</li>
              <li>Defined ownership and accountability for each account.</li>
              <li>Ongoing training programs and peer reviews to maintain high-quality practices.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Superior Accounting Software:</strong> Proficient in Pro Tax, Sage Line 50, Quicken, MYOB, Peachtree, IRIS, Lacerte, and more.</li>
              <li><strong>Trained Professionals:</strong> Experienced accountants skilled in both electronic and manual reconciliation methods.</li>
              <li><strong>Advanced Data Security:</strong> Secure servers, VPN protection, biometric access, and strict NDAs ensure your data is safe.</li>
              <li><strong>Compliance with Laws:</strong> We stay aligned with regulations like Sarbanes-Oxley to strengthen financial controls.</li>
              <li><strong>Streamlined Procedures:</strong> Automated reporting and strict quality checks ensure high accuracy.</li>
              <li><strong>Cost-Effective & Convenient:</strong> Outsourcing saves you administrative costs, boosts fraud protection, and provides faster, reliable results.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ensure Financial Accuracy with Our Accounts Reconciliation Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert support you need to maintain accurate books and prevent financial issues.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Let our team handle your reconciliation process so you can focus on what matters most.</span>
              Contact us today for a free consultation.
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

export default AccountsReconciliationServices;