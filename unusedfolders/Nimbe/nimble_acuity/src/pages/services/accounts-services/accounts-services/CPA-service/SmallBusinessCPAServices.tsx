import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SmallBusinessCPA = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Expert Small Business CPA Services
            </h2>
            <p className="text-lg text-gray-600">
              Running a small business comes with unique financial challenges. Our online CPA
              services help you take control of your finances, make informed decisions, and focus
              on growing your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With nearly two decades of experience, our certified public accountants provide
              end-to-end solutions, leveraging the latest tools and technology to deliver tailored
              financial strategies for your short- and long-term business goals.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Streamlined Small Business CPA Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Small Business Accounting Services:</strong> Transform your accounting,
                bookkeeping, and financial planning processes for clarity and control.
              </li>
              <li>
                <strong>Tax Planning Services:</strong> Reduce liabilities, maximize refunds,
                and stay compliant with IRS regulations.
              </li>
              <li>
                <strong>Audit & Review:</strong> Gain an objective understanding of your financial
                health for investors, lenders, and government agencies.
              </li>
              <li>
                <strong>CPA Consulting Services:</strong> Receive strategic insights to explore new
                market opportunities and understand industry trends.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO-Certified:</strong> Industry-standard processes ensure the best outcomes.</li>
              <li><strong>Cutting-Edge Technology:</strong> Modern tools guarantee accuracy and eliminate errors.</li>
              <li><strong>Data Security:</strong> Strict protocols protect your confidential financial information.</li>
              <li><strong>Experienced Professionals:</strong> Over 2 years of CPA expertise to tackle your challenges.</li>
              <li><strong>Cost-Effective Solutions:</strong> High-quality services without high costs.</li>
            </ul>
          </div>

          {/* Growth & Support */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              A Partner for Your Business Growth
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Global Reach:</strong> Delivery centers worldwide for prompt service.</li>
              <li><strong>Quick Turnaround:</strong> Streamlined processes ensure efficiency.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance whenever you need it.</li>
              <li><strong>Transparent Pricing:</strong> Clear and upfront costs for complete peace of mind.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Take Control of Your Business Finances
            </h3>
            <p className="text-gray-700 mb-6">
              Our professional online CPA services provide the insights, strategy, and support
              your small business needs to succeed.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to optimize your financial operations?</span>{" "}
              Contact us today and get started.
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

export default SmallBusinessCPA;
