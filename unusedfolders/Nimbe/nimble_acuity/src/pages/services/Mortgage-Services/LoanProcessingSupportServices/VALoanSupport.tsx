import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const VALoanSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              VA Loan Support Services
            </h2>
            <p className="text-lg text-gray-600">
              As a private lender, you must be looking for solutions to speed up the loan processing for the veterans and service members. Nimble Acuity, a leading VA loan servicer, can provide a tangible edge with its reliable back-office support for VA loans.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **VA loans** do not require any down payment or private mortgage insurance. They offer competitive interest rates and are easily accessible to eligible borrowers. As these loans are backed by the government, private lenders often assume less risk and have fewer qualification standards to comply with. However, because VA loans are a federal program guaranteed under the Department of Veterans Affairs, they require specific eligibility checks, loan limit and funding fee calculations, and property verification.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive experience in back-office support services for mortgage lenders and credit unions, including VA loans. Our clients leverage our services to increase the speed of their loan processing and ensure all documentation is handled accurately and in compliance with federal guidelines.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive VA Loan Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a team of mortgage professionals, we offer a full suite of support services to streamline your VA loan processing. We utilize state-of-the-art CRM and document management systems to cater to your specific requirements, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Pre-Qualification:</strong> We collect and collate necessary documents, including credit history, income, and service tenure, to create a comprehensive applicant profile.
              </li>
              <li>
                <strong>Pre-Approval:</strong> We assist in gathering essential paperwork such as W-2 statements, tax returns, and FICO credit scores to prepare the loan for underwriting.
              </li>
              <li>
                <strong>Certificate of Eligibility (COE):</strong> We provide back-office support to collect the required evidence, such as service statements and DD forms, to verify a borrower's eligibility.
              </li>
              <li>
                <strong>VA Appraisal Support:</strong> We assist in gathering property information, including location and ownership history, and help prepare the appraisal report for the underwriter.
              </li>
              <li>
                <strong>Closing Disclosure Assistance:</strong> We help draft closing disclosures, create loan invoices, and compile the complete closing package for timely delivery to the borrower.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven VA Loan Support Process
            </h3>
            <p className="text-gray-700 mb-6">
              The VA Home Loan Program mandates precise processes and monthly electronic reporting. We follow a validated process to render compliant, cost-effective, and scalable VA loan support services:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Eligibility Verification:</span> We verify the borrower's eligibility and gather all necessary supporting proofs.
              </li>
              <li>
                <span className="font-bold">Documentation & Appraisal:</span> We document property eligibility, assist in preparing purchase agreements, and compile appraisal reports and title documents.
              </li>
              <li>
                <span className="font-bold">Underwriting Collaboration:</span> We submit all gathered information to the underwriters and communicate with them to resolve any inconsistencies.
              </li>
              <li>
                <span className="font-bold">Closing Document Review:</span> We meticulously review and compile all closing documents before dispatching them to the borrower.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for VA Loan Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High Quality & Certification:</strong> As an ISO certified organization, we ensure high-quality and compliant support services.
              </li>
              <li>
                <strong>Information Security:</strong> We are ISO/IEC 27001:2022 certified, guaranteeing that all your data is completely secure with us.
              </li>
              <li>
                <strong>Flexible & Scalable:</strong> Our flexible pricing and resource competence allow us to cater to your needs and scale with your business demands.
              </li>
              <li>
                <strong>Expert Team:</strong> Our experienced professionals have in-depth knowledge of the US mortgage and federal laws, ensuring efficient and accurate processing.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our support teams are available 24/7, providing assistance regardless of time zone differences.
              </li>
              <li>
                <strong>Best-in-Class Technology:</strong> We use state-of-the-art tools and technologies, including modern CRM and document management systems.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for VA Loan Support
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing high-value VA Loan support and a range of other mortgage solutions to global clients. We have in-depth knowledge and understanding of the US mortgage and federal laws, allowing us to deliver immeasurable value.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today for reliable, efficient, and cost-effective VA loan support services.
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

export default VALoanSupport;