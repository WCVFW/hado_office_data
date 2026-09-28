import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader"; // Adjust the path as needed

const AccountingAutomation = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accounting Automation Services
            </h2>
            <p className="text-lg text-gray-600">
              Are you a growing business facing challenges in scaling up, managing daily processes, or automating your accounting system? With Nimble Acuity’s automation expertise, you can streamline reporting, forecasting, budgeting, and operations — saving costs while improving accuracy and efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a trusted provider of **accounting automation services**. We help you select and implement the right tools tailored to your company’s unique needs. With deep expertise in **Robotic Process Automation (RPA)** and financial technology, we deliver automation solutions that have been tested and proven across industries. Whether you need partial or full automation, we’ll help you improve workflows and achieve reliable results.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Accounting Automation Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Procure-to-Pay Automation:</strong> Digitize contract management, automate approvals, eliminate paperwork, and track orders in real-time. Gain visibility into invoices, receipts, and spending insights.</li>
              <li><strong>Order-to-Cash Automation:</strong> Speed up cash flow and revenue cycles with automated alerts, reduced delays, improved accuracy, and faster customer communication.</li>
              <li><strong>Financial Analysis Automation:</strong> Streamline reporting, reduce budget cycle times, and automate data collection for faster, more accurate decision-making.</li>
              <li><strong>Payroll Automation:</strong> Automate payroll calculations, tax deductions, timekeeping, and reporting. Eliminate errors and ensure timely payments with ease.</li>
              <li><strong>Automated Reporting:</strong> Improve visibility and compliance with automated report generation, reconciliations, and KPI monitoring — reducing tax liability.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Automation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Proven Expertise:</strong> Years of hands-on experience in finance automation and RPA implementation across industries.</li>
              <li><strong>Tailored Solutions:</strong> Every automation plan is customized to meet your unique business needs and goals.</li>
              <li><strong>Scalable Systems:</strong> We design solutions that adapt to your business growth and changing financial operations.</li>
              <li><strong>Cost Savings:</strong> By reducing manual tasks, you cut overhead costs and free up resources for strategic priorities.</li>
              <li><strong>Accuracy & Compliance:</strong> Automation minimizes errors, improves compliance, and enhances reporting reliability.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Automate Your Accounting Today
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert support you need to streamline your accounting processes. Our tailored automation solutions help you save costs, improve accuracy, and position your business for long-term growth.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your finances through automation?</span>
              Contact us today to discuss your accounting needs and get started.
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

export default AccountingAutomation;