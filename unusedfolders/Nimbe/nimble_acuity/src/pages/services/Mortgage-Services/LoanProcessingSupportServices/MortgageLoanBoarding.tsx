import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageLoanBoarding: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Loan Boarding Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Boarding loan portfolios of all sizes between systems is something we excel at. Trust our services and you can skip the paperwork hassles.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your mortgage loan boarding staff stretched between a high volume of loan applications and loading data into servicing systems? Are you frequently moving deadlines to complete the process? Outsourcing mortgage loan boarding support services to a high-skilled partner like us ensures that expensive labor costs and workflow paralysis are never a concern.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the pain loan servicers go through when they are inundated with a large volume of loans. Our mortgage loan boarding support services can come to your rescue when things become unfeasible for your in-house team. We can provide 90-day boarding (regular) and 30-day boarding (emergency) without disrupting your workflow at unmatched rates.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Loan Boarding Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have boarded over 100,000 loan portfolios in the last 5 years with a high success rate. If you are a bank or mortgage institution that relies on services from the point of origination, our solution can streamline your business performance. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Pre-purchase Analysis:</strong> We carry out deep analytics on loan portfolios with 100% accuracy, scrutinizing documents for missing data or errors and flagging inaccuracies to prevent payment delays.
              </li>
              <li>
                <strong>Data Extraction and Document Indexing:</strong> We use OCR software to capture disorganized, paper-heavy mortgage data. The extracted data is then loaded into your loan servicing software for seamless management and documentation.
              </li>
              <li>
                <strong>Deficiency Identification and Automated Reporting:</strong> We use smart algorithms to identify missing information and provide automated reports, helping you purchase and board loans with the highest probability of success.
              </li>
              <li>
                <strong>Mortgage Data Mapping Services:</strong> Our quality assurance teams guarantee consistent service levels, ensuring your client's loan portfolios are loaded into the service platform within a reasonable turnaround time.
              </li>
              <li>
                <strong>Management and Workflow Services:</strong> Our customized workflows are designed to handle a high volume of loan portfolios without adding to your expenditure, reducing operational and loan origination costs.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Mortgage Loan Boarding Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our mortgage loan boarding solutions provide high-level transparency. The process involves:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Requirement Aggregation:</span> We collaborate with your teams to collect loan boarding requirements and analyze the document checklist.
              </li>
              <li>
                <span className="font-bold">Compliance Review:</span> We check if all mandatory documents and reports are furnished to fulfill compliances.
              </li>
              <li>
                <span className="font-bold">Report Submission:</span> We compile our findings into a report with comments on flagged observations for your further action.
              </li>
              <li>
                <span className="font-bold">Finalizing the Closing Package:</span> Once every criterion is fulfilled, we complete the closing package and dispatch it to lenders.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Loan Boarding?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Provider:</strong> We are accredited with ISO 9001:2015 certification for offering high-quality mortgage loan boarding solutions.
              </li>
              <li>
                <strong>Data Security:</strong> Your data is safe and secure. Our unwavering commitment to data integrity has earned us ISO/IEC 27001:2022 certification.
              </li>
              <li>
                <strong>High Accuracy:</strong> Our services are highly reliable and accurately executed to avoid rejections and rework.
              </li>
              <li>
                <strong>Fast Turnaround Time:</strong> Our turnaround time is 50% faster than other providers, allowing you to focus on more pressing business matters.
              </li>
              <li>
                <strong>Scalable and Flexible Pricing:</strong> Our service is highly scalable and our flexible pricing model ensures you get the best value without a large upfront cost.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our experts have 10+ years of experience in a multitude of mortgage projects, using sophisticated software to enhance productivity.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity, the Mortgage Experts
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has leveraged advanced technology and strategy to help lenders and mortgage banks reduce operational costs and potential risks in the mortgage loan boarding process. We have emerged as a true world leader in mortgage services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us now to let us customize mortgage loan boarding support services for your business needs and budget size.
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

export default MortgageLoanBoarding;