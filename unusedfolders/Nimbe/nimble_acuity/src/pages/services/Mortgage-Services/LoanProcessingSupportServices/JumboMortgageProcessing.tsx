import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const JumboMortgageProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Specialized Jumbo Mortgage Loan Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Mitigate the high risks of jumbo loans with Nimble Acuity’s accurate, reliable, and swift processing support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, <strong>Nimble Acuity</strong> helps lenders overcome challenges in jumbo mortgage processing, such as non-compliance with GSE regulations and inefficient workflows. We operate as an extension of your team, accurately verifying borrower credit, down payment values, and property appraisals to streamline your loan processes.
            </p>
          </div>

          {/* Our Jumbo Loan Processing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Jumbo Mortgage Loan Processing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Loan Application and Pre-approval:</strong> Stringent pre-approval to identify a borrower’s repayment potential.</li>
              <li><strong>Accurate Property Appraisal:</strong> Precise estimation of property value with a documented report for lending.</li>
              <li><strong>Detailed Loan Processing:</strong> Meticulous review of documents to determine risks involved in approving the loan.</li>
              <li><strong>Comprehensive Underwriting Support:</strong> Verifying all critical information to help underwriters make the best decisions.</li>
              <li><strong>Loan Approval and Funding Release:</strong> Systematizing closing packages and ensuring the safe transfer of funds.</li>
            </ul>
          </div>

          {/* Why Outsource to Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Our Experts?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO Certified Excellence:</strong> ISO 9001:2015 certified processes ensure high-quality, compliant services.</li>
              <li><strong>Robust Data Security:</strong> We are ISO/IEC 27001:2022 accredited, with all experts signing NDAs to guarantee data confidentiality.</li>
              <li><strong>Highly Scalable Operations:</strong> Our sophisticated infrastructure and large team allow us to handle high workloads efficiently.</li>
              <li><strong>Rapid Turnaround:</strong> Count on us for a faster loan approval process without compromising on quality.</li>
              <li><strong>Affordable Pricing:</strong> Our competitive and reasonable pricing models offer significant savings for lenders.</li>
              <li><strong>Dedicated SPOC:</strong> A single point of contact is assigned to your project for streamlined communication.</li>
              <li><strong>Advanced Technology:</strong> We use the latest document management and CRM systems to ensure smooth processing.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Jumbo Loan Process
            </h3>
            <p className="text-gray-700 mb-6">
              With Nimble Acuity, you can overcome common challenges and achieve faster, more reliable jumbo loan approvals. Our expert team and state-of-the-art technology are dedicated to reducing risks and maximizing your efficiency.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for a reliable, affordable, and high-quality partner? Get in touch with us today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JumboMortgageProcessing;