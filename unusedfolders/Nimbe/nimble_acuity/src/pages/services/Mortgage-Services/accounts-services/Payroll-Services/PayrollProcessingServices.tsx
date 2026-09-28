import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const PayrollProcessingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Seamless Payroll Processing for Your Business
            </h2>
            <p className="text-lg text-gray-600">
              Streamline payroll operations, safeguard data, and reduce costs with our expert payroll processing services. We provide secure, cloud-based solutions starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our platform leverages advanced software to automate employee classifications, track time-off accruals, and handle complex calculations for overtime, bonuses, and deductions. Comprehensive reporting helps you make strategic business decisions efficiently.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Processing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>QuickBooks Payroll:</strong> Seamless integration with QuickBooks for accurate processing.</li>
              <li><strong>Online Payroll:</strong> Secure cloud-based access for accurate, timely payroll processing.</li>
              <li><strong>Payroll for Small Businesses:</strong> Tailored solutions to ensure compliance and efficiency.</li>
              <li><strong>Payroll Compliance:</strong> Stay updated with the latest regulations and avoid penalties.</li>
              <li><strong>CPA Payroll:</strong> Certified accountants ensure precise tax handling.</li>
              <li><strong>Data Analytics:</strong> Insights from payroll data to make informed decisions.</li>
              <li><strong>HR Payroll:</strong> Integrated payroll with HR systems like SAP and Oracle.</li>
              <li><strong>PTO Management:</strong> Accurate tracking of paid time off, accruals, and requests.</li>
              <li><strong>Payroll Management:</strong> Comprehensive management of salaries, taxes, and year-end reports.</li>
              <li><strong>Payroll Tax Handling:</strong> Complete tax calculation and filing.</li>
              <li><strong>Payroll Advisory:</strong> Guidance for compliance and process optimization.</li>
              <li><strong>Payroll Auditing:</strong> Identify errors and discrepancies with advanced auditing tools.</li>
            </ul>
          </div>

          {/* Consulting and Offshore Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Consulting and Offshore Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Payroll Consulting:</strong> Analyze and enhance payroll systems for peak efficiency.</li>
              <li><strong>Offshore Services:</strong> Access specialized offshore teams for multi-jurisdiction payroll management with strict security protocols.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payroll Processing Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Gathering Employee Data</li>
              <li>Monitoring Work Hours</li>
              <li>Gross Salary Computation</li>
              <li>Applying Deductions</li>
              <li>Determining Take-Home Pay</li>
              <li>Executing Salary Payments</li>
              <li>Maintaining Payroll Records</li>
              <li>Payroll Reporting</li>
              <li>End-of-Year Review</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Broad Industry Experience:</strong> Expertise across diverse sectors and payroll challenges.</li>
              <li><strong>Seasoned Professionals:</strong> Skilled team ensures accurate and efficient payroll management.</li>
              <li><strong>24/7 Support:</strong> Continuous support from our dedicated U.S.-based service team.</li>
              <li><strong>Cutting-Edge Technology:</strong> Advanced tools to automate and streamline payroll processes.</li>
              <li><strong>Business Tax Simplified:</strong> Comprehensive handling of payroll tax calculations, filings, and payments.</li>
              <li><strong>Globally Recognized:</strong> Trusted worldwide for high-quality payroll solutions.</li>
              <li><strong>Seamless Transition:</strong> Smooth migration of payroll services without disruption.</li>
              <li><strong>Scalable Solutions:</strong> Flexible services that grow with your business.</li>
              <li><strong>Data Privacy and Confidentiality:</strong> Rigorous security measures for all sensitive data.</li>
              <li><strong>Tailored Solutions:</strong> Custom payroll management solutions for your unique needs.</li>
              <li><strong>Cost-Effective:</strong> High-quality payroll services at competitive rates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              A Partner for Your Business Success
            </h3>
            <p className="text-gray-700 mb-6">
              We design payroll solutions tailored to your business, handle compliance, and deliver accurate, efficient payroll management. Redirect your time and resources toward growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us for reliable, secure, and cost-effective payroll services,</span> and achieve operational excellence.
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

export default PayrollProcessingServices;
