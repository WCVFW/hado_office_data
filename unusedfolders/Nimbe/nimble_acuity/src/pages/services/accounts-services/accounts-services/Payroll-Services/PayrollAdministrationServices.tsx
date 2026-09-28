import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PayrollAdministrationServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Streamlined Payroll Administration Services
            </h2>
            <p className="text-lg text-gray-600">
              Save time and reduce costs with our expert payroll administration services. From data entry to tax planning, we manage all aspects of payroll efficiently, starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Outsourcing payroll administration helps you move away from traditional methods, streamline business processes, and reduce the expense and effort of hiring full-time payroll staff. Our scalable team delivers accurate payroll reports so you can focus on growing your business.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Administration Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Employee Salary Calculation:</strong> Handle complex computations for benefits, reimbursements, and retirement payouts using advanced software.</li>
              <li><strong>Payroll Reporting:</strong> Periodic, comprehensive reports covering role changes, salaries, attendance, time off, and tax obligations.</li>
              <li><strong>Compliance with Payroll Laws:</strong> Ensure adherence to compensation practices and labor laws with tailored strategies.</li>
              <li><strong>Management of Employee Lifecycle:</strong> Track and document onboarding, tenure, and exit processes.</li>
              <li><strong>Payroll Advisory:</strong> Guidance on legal changes, standard wages, and informed decision-making.</li>
              <li><strong>Tax Planning:</strong> Assist employees with tax-saving plans and declaration collection.</li>
              <li><strong>Attendance Management:</strong> Custom attendance apps for real-time leave notifications and collaboration.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Administration Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Calculate Hours Worked</li>
              <li>Compute Overtime</li>
              <li>Process Gross Pay</li>
              <li>Process Deductions</li>
              <li>Offer Net Pay</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Prices:</strong> Competitively priced for small and large firms alike.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified to ensure full protection of confidential data.</li>
              <li><strong>High-Quality Services:</strong> Guaranteed 98% accuracy in payroll management.</li>
              <li><strong>Experienced Team:</strong> Knowledgeable professionals trusted to manage payroll policies effectively.</li>
              <li><strong>Quick Turnaround Time:</strong> Agile processes to meet even the tightest deadlines.</li>
              <li><strong>Scalable Services:</strong> Easily adjust team and service size based on your requirements.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact ensures smooth project execution.</li>
              <li><strong>Latest Tools:</strong> State-of-the-art software and technology for accurate payroll processing.</li>
              <li><strong>Round-the-Clock Support:</strong> 24/7 assistance via phone, email, or webchat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Payable Services:</strong> Streamlined revenue streams for a transportation management company.</li>
              <li><strong>Financial Research Services:</strong> Handled SEC filings for publicly-listed companies, reducing turnaround time and saving costs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              A Partner You Can Trust
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has executed numerous payroll administration projects globally. Trust our expertise to manage your payroll efficiently and accurately.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Outsource your payroll administration with us,</span> and we will respond within 24 hours for a profitable partnership.
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

export default PayrollAdministrationServices;
