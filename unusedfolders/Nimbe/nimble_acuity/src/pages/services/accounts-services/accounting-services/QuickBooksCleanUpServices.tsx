import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const QuickBooksCleanUpServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              QuickBooks Clean Up Services
            </h2>
            <p className="text-lg text-gray-600">
              Track and manage the financial health of your business by availing our expert QuickBooks clean-up services, starting at just $12/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              QuickBooks is a popular accounting software for small to medium-sized businesses, but an overload of data can lead to performance issues and inaccuracies. To ensure your QuickBooks file works as efficiently as it should, you need regular clean-up services. A messy file can cause lag and produce unreliable results, making it difficult to perform essential accounting operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity offers superlative QuickBooks clean-up and repair services with the help of seasoned professionals. We ensure your QuickBooks file works efficiently, allowing you to perform all accounting operations without any lags or inaccuracies.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our QuickBooks Clean Up Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We offer a range of QuickBooks clean-up services to help businesses keep their accounting files clean and up-to-date.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Accounts Receivable & Payable</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fix improperly applied credits and customer payments.</li>
                  <li>Correct incorrect undeposited funds account balances and review accounts payable for inconsistencies.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Account Balances & Bank Reconciliation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reclassify incorrectly recorded transactions and correct data entry errors.</li>
                  <li>Reconcile all bank accounts, including credit cards and savings, to identify and correct discrepancies.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">List Review & Closing</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Create a comprehensive report detailing all changes to accounts, vendors, and customers.</li>
                  <li>Set a closing date with a password to prevent changes to prior periods and provide a list of recommendations for improved performance.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our QuickBooks Clean Up Process
            </h3>
            <p className="text-gray-700 mb-6">
              We follow a streamlined process to provide precise QuickBooks clean-up services, ensuring every accounting aspect is addressed.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis & Planning:</strong> We start by understanding your business needs to create a customized plan of action, allocating the right resources, time, and costs for the project.</li>
              <li><strong>Clean-up & Quality Check:</strong> Our seasoned professionals execute the plan efficiently, addressing accounts payable, accounts receivable, and bank reconciliation. We then perform a rigorous quality check to ensure there are no inconsistencies before seeking your approval.</li>
              <li><strong>Client Approval & Feedback:</strong> After completing the clean-up, we seek your approval and gather feedback to ensure your complete satisfaction and continuously improve our services.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reasonable Pricing:</strong> Our services are priced affordably to suit small and medium-sized businesses, and you only pay for the services you need.</li>
              <li><strong>Data Security:</strong> We prioritize your data security with stringent measures and confidentiality clauses signed by our financial experts.</li>
              <li><strong>Fully Equipped Team:</strong> Our team is skilled at cleaning and repairing QuickBooks and provides a full range of finance and accounting services to keep you covered.</li>
              <li><strong>24/7 Assistance:</strong> Our customer support executives are available around the clock to answer your queries and provide assistance whenever you need it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Revitalize Your QuickBooks Files with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              When you outsource QuickBooks clean-up services to an expert company, you can be assured that your files are getting the much-needed revamp to optimize performance. At Nimble Acuity, we are committed to providing the best QuickBooks clean-up services with quick turnaround times and complete transparency.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Contact us now to get started and let us help you with our QuickBooks clean-up and repair services.</span>
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

export default QuickBooksCleanUpServices;