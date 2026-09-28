import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPAPayrollServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional & Compliant CPA Payroll Services
            </h2>
            <p className="text-lg text-gray-600">
              Managing payroll can be time-consuming and error-prone, pulling focus from core business functions.
              Our CPA payroll services help you process employee payments on time, with complete accuracy
              and compliance with labor laws.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Partner with our experienced team to handle salary computation, payment processing, ledger maintenance,
              and tax preparation. We ensure your payroll operations are precise, timely, and fully compliant.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive CPA Payroll Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Ledger Entries:</strong> Maintain flawless records of earnings and deductions with zero errors.
              </li>
              <li>
                <strong>Payroll File Maintenance:</strong> Keep employee data updated, including new hires and terminations.
              </li>
              <li>
                <strong>Salary Computation & Payment:</strong> Accurately calculate gross pay, net pay, bonuses, and taxes.
              </li>
              <li>
                <strong>Report Generation:</strong> Access detailed payroll reports monthly, quarterly, and annually.
              </li>
              <li>
                <strong>Tax Preparation Services:</strong> Ensure compliance with local, state, and federal tax requirements.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              A Streamlined Payroll Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Set up payroll-specific employee information.</li>
              <li>Collect and summarize wage dues.</li>
              <li>Compute tax and wage deductions using IRS tax tables.</li>
              <li>Create a payroll register with complete wage and deduction information.</li>
              <li>Print and issue paychecks.</li>
              <li>Deposit deductions in respective departments.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our Payroll Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expertise:</strong> Experienced payroll accountants with deep domain knowledge.</li>
              <li><strong>Cutting-Edge Technology:</strong> Best-in-class tools for enterprise-level payroll services.</li>
              <li><strong>Accuracy:</strong> Precise payroll reports delivered on time.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication.</li>
              <li><strong>Data Security:</strong> Strict adherence to data security policies to safeguard information.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Payroll Operations Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your CPA payroll services to our team and ensure timely, accurate, and compliant payroll management.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready for agile and smart CPA payroll services?</span>{" "}
              Contact us now to get started.
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

export default CPAPayrollServices;
