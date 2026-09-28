import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ElectricalContractorsAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Electrical Contractors Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Struggling to navigate the complex accounting challenges of your electrical contracting business? We can help. We provide expert accounting services at cost-effective prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it difficult to focus on your electrical jobs because you have to deal with accounting requirements? Looking to spend less time on your books and more on your core electrical contracting work to enhance profits and cut costs? Nimble Acuity provides reliable and expert accounting services to help you stay compliant and focused.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, we have helped countless electrical contracting firms streamline accounting, reduce costs, and focus on growing their business. Outsource your accounting needs to us and benefit from seasoned accountants managing your books efficiently.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Electrical Contractors Accounting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>General Accounting & Bookkeeping</strong></li>
              <li><strong>Tax Preparation & Compliance</strong></li>
              <li><strong>Reporting & Analysis</strong></li>
              <li><strong>Reconciliation</strong></li>
              <li><strong>Cash Management</strong></li>
              <li><strong>General Financial & Cost Accounting</strong></li>
              <li><strong>Managerial Accounting</strong></li>
              <li><strong>Work Opportunity Tax Credit</strong></li>
              <li><strong>Payroll Costing</strong></li>
              <li><strong>Reporting & Oversight</strong></li>
              <li><strong>Accounts Payables & Receivables</strong></li>
              <li><strong>Internal Control & Fraud Prevention</strong></li>
              <li><strong>Pre-Audit & Audit Check</strong></li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Seasoned accountants providing high-quality services at cost-effective prices.</li>
              <li><strong>Data Security:</strong> Your information is always safe, secure, and confidential.</li>
              <li><strong>Quick Turnaround Times:</strong> We deliver solutions promptly, meeting your deadlines.</li>
              <li><strong>Superb Infrastructure:</strong> Our team works out of international-standard offices with sophisticated facilities.</li>
              <li><strong>Customized Solutions:</strong> Tailored services based on your business needs, ensuring maximum efficiency.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Business with Expert Accounting Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a trusted accounting partner for electrical contractors. Our services ensure you receive expert financial management while focusing on your core business activities.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to enhance your financial efficiency?</span>
              Contact us today to outsource your accounting requirements and partner with professionals dedicated to your success.
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

export default ElectricalContractorsAccounting;