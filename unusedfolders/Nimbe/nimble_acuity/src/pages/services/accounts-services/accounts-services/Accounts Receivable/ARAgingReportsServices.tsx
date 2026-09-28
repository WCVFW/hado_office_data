import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ARAgingReports = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble AR Aging Reports
            </h2>
            <p className="text-lg text-gray-600">
              Gain <strong>nimble acuity</strong> over your accounts receivable. Our AR Aging Report services transform disorganized invoices into a clear, actionable roadmap for cash flow. Stop chasing payments and accelerate revenue with timely, accurate insights.
            </p>
          </div>

          {/* Service Section */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Service: Precision at a Glance
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Improve Cash Flow:</strong> Know who owes you money and for how long, enabling faster collections.</li>
              <li><strong>Identify Issues:</strong> Pinpoint cash flow problems and high-risk clients before they escalate.</li>
              <li><strong>Optimize Policies:</strong> Adjust credit policies and reduce future delinquencies using actionable data.</li>
              <li><strong>Take Action:</strong> Send timely reminders, manage collections, and calculate bad debt allowances confidently.</li>
            </ul>
          </div>

          {/* How We Work */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How We Work: A Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Data Ingestion:</strong> Securely gather all your financial data.</li>
              <li><strong>Analysis & Creation:</strong> Experts sort, filter, and analyze data to create your custom report.</li>
              <li><strong>Delivery & Insights:</strong> Receive clean, easy-to-read reports on a regular basis—weekly, monthly, or quarterly.</li>
            </ol>
          </div>

          {/* Advantage Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Advantage of Partnership
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Accurate, reliable services at an affordable rate.</li>
              <li><strong>Data Security:</strong> Sensitive financial information protected by certified, world-class security protocols.</li>
              <li><strong>Dedicated Team:</strong> Experienced finance professionals using the latest software to deliver actionable reports.</li>
              <li><strong>Rapid Turnaround:</strong> Operational efficiency ensures you receive reports quickly to act without delay.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain Total Control Over Your Accounts Receivable
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to streamline your AR process and accelerate cash flow with clear, actionable insights?
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us for a Free Quote
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ARAgingReports;
