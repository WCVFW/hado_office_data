import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialController = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Controller Services
            </h2>
            <p className="text-lg text-gray-600">
              Our certified accountants maintain ledgers and handle business accounting activities to reflect all the latest financial transactions, in and out.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Not every business can afford or prefers to hire full-time, in-house accountants. Outsourcing financial controller services provides consistent access to accounting expertise, a clear financial overview, and effective cost-control measures. Partnering with a top financial controller service provider helps reduce running expenses while improving financial performance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has extensive knowledge of financial controlling standards and processes. We identify and fix financial gaps so you can make sound decisions for better financial outcomes.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Financial Controller Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Financial Statement Preparation:</strong> Prepare financial statements for audits, collaborating with auditors to reconcile credit lines, loans, and other financial records.</li>
              <li><strong>Ledger Maintenance:</strong> Keep your business ledger updated with all transactions, accurately tracking earnings and expenditures.</li>
              <li><strong>Financial Control Planning:</strong> Review processes, perform KPI reporting, and handle financial controlling activities for better business management.</li>
              <li><strong>Cash Flow Analysis:</strong> Conduct fluctuation analysis and provide detailed reports for stakeholders.</li>
              <li><strong>Budgeting and Forecasting:</strong> Offer strategic, forward-focused budgeting support and forecast financial performance.</li>
              <li><strong>Fixed Asset Management:</strong> Track and secure company assets with serial numbers and barcodes.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Financial Controller Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preparation:</strong> Collect necessary financial statements and information from your business.</li>
              <li><strong>Planning:</strong> Build a focused financial model and submit it for approval.</li>
              <li><strong>Financial Control:</strong> Implement budgeting, ledger maintenance, fixed asset management, and other controlling activities.</li>
              <li><strong>Reporting:</strong> Deliver exhaustive project reports and clear financial overviews.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Budget-friendly solutions for businesses of all sizes.</li>
              <li><strong>Top-notch Infrastructure:</strong> Remote management capabilities with international-standard infrastructure.</li>
              <li><strong>Data Integrity:</strong> Full confidentiality and secure handling of financial data.</li>
              <li><strong>High-Quality Services:</strong> Strict quality assurance and proven processes.</li>
              <li><strong>Scalable Services:</strong> Easily adjust bandwidth to meet business needs.</li>
              <li><strong>Strict on Deadlines:</strong> Agile delivery within committed timelines.</li>
              <li><strong>24/7 Support:</strong> Multilingual agents available via email, phone, and webchat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Finances with Expert Financial Controller Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides a range of accounting solutions through highly competent financial controllers, delivering superior results at reasonable rates. With over 6 years of experience, we ensure cost-effective, reliable, and expert financial controller services.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your financial health?</span>
              Contact our experts now to discuss your business needs.
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

export default FinancialController;