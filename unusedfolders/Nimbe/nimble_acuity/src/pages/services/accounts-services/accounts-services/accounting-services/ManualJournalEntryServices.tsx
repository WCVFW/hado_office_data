import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ManualJournalEntryServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Manual Journal Entry Services
            </h2>
            <p className="text-lg text-gray-600">
              Does your organization need general ledger accounting but lacks the personnel for manual journal entry processing? Nimble Acuity provides expert manual journal entry services to ensure accuracy, efficiency, and compliance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Manual journal entries involve recording transactions into the general ledger. Errors are common if handled by inexperienced personnel. By outsourcing to Nimble Acuity, your entries are processed by professionals, reducing mistakes and freeing your team to focus on core business activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert team ensures accurate, timely, and compliant journal entries while seamlessly integrating with your accounting processes.
            </p>
          </div>

          {/* The Team */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Nimble Acuity Manual Journal Entry Team
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>General Ledger Accounting Specialists:</strong> Enter transactions, approve entries, and ensure adherence to standard accounting practices.
              </li>
              <li>
                <strong>General Ledger Accounting Managers:</strong> Maintain completeness of all entries and keep a full record in the general ledger.
              </li>
              <li>
                <strong>Additional Team Members:</strong> Includes accountants and administrators who support the manual journal entry process at every stage.
              </li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Manual Journal Entries to Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              Manual journal entry processing requires expertise and precision. Outsourcing ensures error-free entries, improves operational efficiency, and boosts the productivity of your management team.
            </p>
            <p className="text-gray-700 mb-6">
              Our professionals are proficient in general accounting procedures, quickly adapt to your systems, and are trained to identify and correct errors efficiently.
            </p>
          </div>

          {/* Partner & Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Your Ideal Partner for Manual Journal Entry Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Accurate services at every stage of the journal entry process</li>
              <li>Experts overseeing each step of the workflow</li>
              <li>Stringent quality assurance processes</li>
              <li>Suggestions for improvements on problematic or questionable entries</li>
              <li>Seamless integration with your existing accounting team</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Reduction in infrastructure, training, and overhead costs</li>
              <li>Operational cost savings of up to 60%</li>
              <li>Quick turnaround times for entries and reports</li>
              <li>Access to a professional team of manual journal entry experts</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Contact Nimble Acuity Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your manual journal entry services to our team of professionals and ensure accuracy, efficiency, and compliance in all your accounting processes.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Get in touch with us today!</span>
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

export default ManualJournalEntryServices;
