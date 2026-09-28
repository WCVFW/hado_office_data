import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPATaxServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional CPA Tax Services to Boost Compliance and Reduce Costs
            </h2>
            <p className="text-lg text-gray-600">
              Feeling overwhelmed by tax season? Our expert CPA tax services help businesses
              and CPA firms manage seasonal spikes, limited resources, and budget constraints.
              We streamline your tax preparation, ensure compliance, and help you make informed
              financial decisions—while delivering up to <strong>60% in cost savings</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Partner with us to simplify your tax process and focus on core business operations.
              Our certified tax accountants use cutting-edge technology to provide efficient,
              reliable, and tailored solutions for your business needs.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive CPA Tax Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Tax Preparation & Planning:</strong> Minimize tax liabilities while staying
                compliant with IRS regulations through efficient tax preparation and planning.
              </li>
              <li>
                <strong>CPA Accounting & Bookkeeping:</strong> Make informed financial decisions
                with real-time, accurate accounting and organized financial statements.
              </li>
              <li>
                <strong>Federal & International Tax Services:</strong> Navigate domestic and global
                tax environments, staying compliant with constantly evolving regulations.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource CPA Tax Services to Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Quick Turnaround:</strong> Efficient processes and technology ensure all deadlines are met.</li>
              <li><strong>Data Security:</strong> Strict confidentiality protocols protect your sensitive information.</li>
              <li><strong>Advanced Technology:</strong> Leverage cutting-edge tools for accurate and efficient services.</li>
              <li><strong>Dedicated Support:</strong> Single point of contact for seamless communication and priority updates.</li>
              <li><strong>24/7 Customer Support:</strong> Our team is available around the clock to answer your queries.</li>
              <li><strong>Global Delivery:</strong> Multiple locations worldwide enable prompt collaboration and service.</li>
              <li><strong>ISO-Certified:</strong> Ensuring transparency, quality, and compliance in all processes.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Tax Process Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your CPA tax services to experienced professionals and ensure accurate,
              efficient, and compliant financial operations.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your tax process?</span>{" "}
              Contact us today to learn more and get started.
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

export default CPATaxServices;
