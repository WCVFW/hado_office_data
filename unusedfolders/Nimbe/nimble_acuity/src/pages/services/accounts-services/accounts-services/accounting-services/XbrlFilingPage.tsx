import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const XBRLFilingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              XBRL Filing Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity’s certified accountants handle all aspects of XBRL filing, including tagging, document mapping, report creation, and submission—starting at just $12 per hour. Focus on your business while we ensure accurate and timely filing.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              Many governments now require companies to file balance sheets in XBRL formats. Without expertise, errors and costly rework are common. Nimble Acuity simplifies the process, ensuring compliance while freeing you to focus on core business functions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our certified teams are experts in XBRL solutions and the legal framework, providing a seamless experience from document mapping to final submission.
            </p>
          </div>

          {/* Our Offerings */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our XBRL Filing Services
            </h3>
            <p className="text-gray-700 mb-6">
              We provide a comprehensive suite of services for corporations and small businesses, including advisory support and streamlined filing using proprietary accounting tools.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Document Mapping:</strong> Analyze and assign financial data to correct taxonomy categories, covering frameworks like IFRS, US GAAP, and return summary taxonomies.</li>
              <li><strong>Tagging & Validation:</strong> Specialists tag and validate instance documents to ensure compliance and accuracy.</li>
              <li><strong>Mapping Reports:</strong> Detailed reports facilitate review, feedback collection, and approval.</li>
              <li><strong>Revision Requests:</strong> Support for modifications and updates to your XBRL records as needed.</li>
              <li><strong>Submission:</strong> Timely submission to authorities, ensuring error-free filing and adherence to protocols.</li>
            </ul>
          </div>

          {/* Streamlined Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Preparation:</strong> Understand your requirements and create a clear project scope.</li>
              <li><strong>Planning:</strong> Devise a targeted XBRL filing solution that fits your budget and timeline.</li>
              <li><strong>Filing:</strong> Expert accountants manage filing according to SLA and schedule.</li>
              <li><strong>Reporting:</strong> Compile detailed project reports for review and confirmation.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-effective solutions for small and mid-sized businesses.</li>
              <li><strong>Top-notch Infrastructure:</strong> Remote management is seamless with advanced tools.</li>
              <li><strong>Data Integrity:</strong> Secure cloud-based handling ensures confidentiality.</li>
              <li><strong>High-Quality Services:</strong> Professional auditing ensures all commitments are met.</li>
              <li><strong>Scalability:</strong> Services scale with your business, supporting growth or downsizing.</li>
              <li><strong>Strict on Deadlines:</strong> Industry-leading turnaround times and timely delivery.</li>
              <li><strong>24/7 Support:</strong> Multilingual support available via email, phone, and chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your XBRL Filing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity’s experienced XBRL experts to ensure accurate, timely, and compliant filings. Benefit from our two decades of global experience and world-class accounting solutions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Talk to our experts now!</span> Streamline your XBRL filing and focus on growing your business.
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

export default XBRLFilingServices;
