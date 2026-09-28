import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const BorrowerSolicitationSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Borrower Solicitation Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Non-payment of monthly mortgage installments and loan defaults can significantly impact a lender's cash flow. Reaching out to delinquent borrowers and educating them on the consequences is a difficult and time-consuming task.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Outsourcing this crucial task ensures that borrowers are regularly followed up with, helping you recover monthly mortgage payments without delay. Nimble Acuity provides efficient borrower solicitation services to lenders worldwide at reasonable prices. We help you get in touch with delinquent borrowers early, helping them resolve their financial problems for easy recovery of monthly installments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services provide borrowers with options to settle their delinquency issues, protecting their equity and credit ratings.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Borrower Solicitation Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With decades of experience in the mortgage industry, we understand the business and provide efficient services that regularize borrowers' monthly payments. Our back-office services for borrower solicitation include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Reason Identification:</strong> We identify the reason for delinquency and subsequent non-payment of monthly installments.
              </li>
              <li>
                <strong>Financial Condition Analysis:</strong> We evaluate the exact financial condition of the borrower to analyze their ability to repay the loan.
              </li>
              <li>
                <strong>Borrower Education:</strong> We educate the borrower about various options available for closing the loan against a mortgage.
              </li>
              <li>
                <strong>Payment Expectations:</strong> We work to reset payment expectations and get a firm commitment from the borrower to clear all outstanding payments.
              </li>
              <li>
                <strong>Foreclosure Alternatives:</strong> We help borrowers resolve delinquencies or find alternatives to foreclosure.
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Payment Solicitation Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe in quickly recovering outstanding installments and helping our clients effectively manage their cash flow. To achieve this, we follow a systematic process:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                Establish right party contact and notify relevant parties, such as Freddie Mac, about all contacts.
              </li>
              <li>
                Acknowledge a borrower's response to a solicitation letter within 3 days.
              </li>
              <li>
                Send a follow-up letter if there is no response from the borrower.
              </li>
              <li>
                Inform the borrower if their response is missing any required information.
              </li>
              <li>
                Notify the borrower about all available loss mitigation and loan foreclosure options.
              </li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our Borrower Solicitation Services?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of mortgage specialists has helped hundreds of clients with borrower solicitation. They are trained to use the latest tools and technologies and handle complex scenarios effectively.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Quick Delinquency Resolution:</strong> Our staff quickly contacts borrowers and resolves delinquency issues.
              </li>
              <li>
                <strong>Skilled and Professional Team:</strong> Our experts are trained on the latest tools and technologies and are updated on the latest industry changes.
              </li>
              <li>
                <strong>Data Security:</strong> We ensure all data you share with us remains completely safe through stringent confidentiality agreements and data security policies.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> Our multiple delivery centers across different time zones allow us to quickly contact borrowers and resolve delinquency issues.
              </li>
              <li>
                <strong>Scalability:</strong> We have the required skilled resources, world-class infrastructure, and multiple delivery centers, allowing clients to easily scale their project up or down.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Minimize Loan Defaults with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of mortgage borrower solicitation support. Our services help our clients optimize their loss mitigation strategy and significantly reduce loan defaults. Our mortgage experts have a thorough understanding of all business models and the expertise to handle diverse solicitation requirements.
            </p>
            <p className="text-gray-700 mb-6">
              Outsource your loan solicitation to us and scale your business. Contact us today to learn more about our offerings and discuss your requirements with our experts.
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

export default BorrowerSolicitationSupport;