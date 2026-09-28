import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ResidentialMortgageLoanSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Residential Mortgage Loan Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your mortgage banking business and overcome challenges like increased regulations and high operating costs with our expert support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In tough financial times, community banks face the dilemma of whether to insource or outsource residential mortgage loan services. To navigate this, many are turning to experienced and capable providers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we set ourselves apart by not only providing cost-effective mortgage services but also by helping you overcome existing challenges, ensuring you retain your customer relationships and stay ahead of competitors.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Residential Mortgage Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a high-touch residential mortgage loan solution designed to personalize interactions with borrowers while limiting operational costs. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Loan Pre-Qualification:</strong> We assess a borrower's financial portfolio to understand their repayment capacity, checking for unpaid dues, liens, and past loan history to mitigate lending risk.
              </li>
              <li>
                <strong>Loan Application and Document Verification:</strong> We aggregate, organize, and digitize documents, verifying the accuracy of reported data to prevent processing delays during underwriting.
              </li>
              <li>
                <strong>Property Appraisal:</strong> We provide services for appraisal scheduling, ordering, and review to accurately determine the fair market value (FMV) of the collateral, ensuring a solid foundation for the loan.
              </li>
              <li>
                <strong>Loan Underwriting:</strong> Our specialists provide back-office support for underwriting, centrally managing and reviewing documents to rectify errors and fill missing fields, which reduces risk for mortgage banks.
              </li>
              <li>
                <strong>Loan Closing & Post-Closing:</strong> We compile essential documents to speed up loan closure and create the final loan package, which includes promissory notes, deeds of trust, and repayment terms.
              </li>
              <li>
                <strong>Default Servicing:</strong> We provide full assistance for loss mitigation, including a contact center to send reminders to late-paying borrowers and foreclosure assistance, to keep your relationships with borrowers risk-free.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Residential Mortgage Loan Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our service implementation strategy is built on simplicity and transparency, allowing you to gauge our performance and cost-effectiveness. Here is the process we follow:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Pre-approval of Mortgage:</span> We screen the borrower's financial portfolio to determine if they qualify for a residential mortgage loan.
              </li>
              <li>
                <span className="font-bold">Loan Application Support:</span> We assist in documenting property and loan details using standard forms like Fannie Mae Form 1003.
              </li>
              <li>
                <span className="font-bold">Processing of Mortgage:</span> The application moves to the processing stage, where credit reports and home appraisals are ordered.
              </li>
              <li>
                <span className="font-bold">Underwriting:</span> Underwriters review the borrower's capacity, credit, and collateral before approving or denying the application.
              </li>
              <li>
                <span className="font-bold">Loan Approval & Closing:</span> After approval, the final loan package is dispatched to the borrower, detailing the loan terms and expenses.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Residential Mortgage?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified & Experienced:</strong> We are ISO 9001:2013 certified and a member of the Mortgage Bankers Association (MBA), backed by over 26 years of industry experience.
              </li>
              <li>
                <strong>Data Security:</strong> We are ISO/IEC 27001:2022 certified, taking stringent measures to protect the confidentiality of all loan documents.
              </li>
              <li>
                <strong>High Accuracy & Quality:</strong> Our quality assurance teams ensure you receive accurate information and quality services at every stage of the process.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Partnering with us means a shorter turnaround time, allowing you to avoid legal entanglements and focus on your core business.
              </li>
              <li>
                <strong>Scalable & Cost-Effective:</strong> Our services are scalable for institutions of any size, and our flexible pricing can save you up to 40% of the cost.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> We rely on superior technology and a secure global office to deliver the best results.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Residential Mortgage
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is trusted by hundreds of mortgage lenders and businesses worldwide. Our ongoing efforts make mortgage services affordable and accessible, and our awareness of country-specific laws ensures a safe and secure loan origination experience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us now if you are looking for a safe way to assess loan borrowers who need a residential mortgage loan.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResidentialMortgageLoanSupport;