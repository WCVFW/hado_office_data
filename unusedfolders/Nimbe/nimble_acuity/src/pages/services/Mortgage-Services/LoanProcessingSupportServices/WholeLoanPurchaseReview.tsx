import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WholeLoanPurchaseReview: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Whole Loan Purchase Review Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your loans are free from discrepancies and reduce risk for investors and mortgage bankers with a comprehensive whole loan purchase review.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you face challenges making mortgage loans saleable to Freddie Mac, Fannie Mae, or institutional portfolio managers? Are you struggling to interpret eligibility standards and investor guidelines? Outsourcing whole loan purchase review can ease the burden on your back-end teams and make selling loans on the secondary market more efficient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Choose **Nimble Acuity** as your whole loan purchase review support services partner, and you can stay worry-free. Our automated technology and skilled professionals ensure complete transparency in loan sales and guarantee full adherence to investor and underwriting requirements. Our goal is to simplify the securitization process so that default risk is eliminated.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Whole Loan Purchase Review Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a full range of whole loan purchase review services that lessen the burden on lenders to verify eligibility, policies, and guidelines. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Loan Document and Purchase Review:</strong> We conduct a comprehensive review of loan documents to evaluate their completeness and accuracy. Any deficiencies that could impact loan performance are flagged and reported.
              </li>
              <li>
                <strong>Data Quality Assurance:</strong> Our specialists verify that loan origination data is clean and accurate before it is indexed. We also perform compliance checks to ensure adherence to standards like HPML, TILA, and FNMA.
              </li>
              <li>
                <strong>Portfolio Analysis:</strong> We proactively assess your loan portfolio to mitigate concerns about repurchase or other financial risks. We provide reliable insights on risk exposure to help you make informed decisions.
              </li>
              <li>
                <strong>Service History Review:</strong> We identify irregularities in loan service history, such as past liens, litigation, and bankruptcy, to protect you from potential market hazards and liabilities.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Whole Loan Purchase Review Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our services are transparent and straightforward, designed to provide you with a clear view of our efforts. Here are the steps we take:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Requirement Aggregation:</span> We work with your team to gather all requirements and specifics to determine the best course of action.
              </li>
              <li>
                <span className="font-bold">Document Verification:</span> We verify all mortgage documents to ensure conformity to all relevant guidelines, regulations, and rules.
              </li>
              <li>
                <span className="font-bold">Report Submission:</span> We provide a detailed report with our findings, giving you a comprehensive assessment of the risk involved.
              </li>
              <li>
                <span className="font-bold">Finalizing the Report:</span> After the review, we provide a comprehensive report with recommended actions that can ease the process of selling the loan.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Loan Purchase Review?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Provider:</strong> We are ISO 9001:2015 certified for providing high-quality whole loan purchase review support services.
              </li>
              <li>
                <strong>Data Security:</strong> We are ISO/IEC 27001:2022 certified, committed to safeguarding your confidential data with the utmost prudence.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> We provide authentic results that meet the highest quality standards, achieved through our extensive expertise.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Our vast experience allows us to deliver on promises faster than competitors, ensuring a quick turnaround time.
              </li>
              <li>
                <strong>Scalability and Flexible Pricing:</strong> Our services are scalable and affordably priced, allowing you to take advantage of price-performance benefits.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our large team of over 400 mortgage experts and specialists has decades of experience in whole loan purchase review.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Whole Loan Review
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has decades of experience in mortgage services, with a happy customer base in over 130 countries. We channel our efforts to solve your core concerns rather than stretching the timeline. Our goal is to help you sell loans on the secondary markets with ease.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us and include your requirements so we can customize a budget-friendly whole loan purchase review support service just for you.
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

export default WholeLoanPurchaseReview;