import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ConformingMortgageLoanSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Conforming Mortgage Loan Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity helps mortgage lenders clear the roadblocks of stringent guidelines with its expert conforming mortgage loan support services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is it a challenge for your mortgage business to stay abreast of changing regulations? Since the housing crisis, governments have implemented uncompromising guidelines that demand more documents and expert approvals. Hiring an in-house team to handle these complexities can significantly cut into your profits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, **Nimble Acuity**'s conforming mortgage loan support can be counted on to verify credit score requirements, check customer documents like W2 forms and pay stubs, and determine customer eligibility. We provide end-to-end back-office support services to ensure full compliance with government regulations.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Conforming Mortgage Loan Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Nimble Acuity, our team uses top-level infrastructure to deliver the desired results to our clients on time. Our services are categorized to help you choose what you need:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Pre-approval Support:</strong> We carefully go through all customer documents, such as employment history and credit scores, to ensure they have the ability to repay the loan. This ensures the underwriting process goes smoothly.
              </li>
              <li>
                <strong>Loan Application Support:</strong> We meticulously verify applications to ensure every piece of information is authentic, from employment details to payment history.
              </li>
              <li>
                <strong>Property Appraisal Support:</strong> We communicate with licensed property evaluators and examine the appraised value, ownership details, and legal history to help you determine a fair market value.
              </li>
              <li>
                <strong>Loan Review and Underwriting Support:</strong> We perform a thorough review and validation of all loan information before it is sent for underwriting, ensuring the underwriter has all the information needed to make an informed decision.
              </li>
              <li>
                <strong>Loan Closing Support:</strong> We prepare a comprehensive report with details on the eligible loan amount, payment terms, and necessary documents, ensuring a secure and efficient loan closing process.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Conforming Mortgage Loan Process
            </h3>
            <p className="text-gray-700 mb-6">
              A well-organized process is as important as a skilled team and the latest software. We follow a unique process to complete every project efficiently:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Analyzing the Requirement:</span> We thoroughly analyze and classify client requirements based on the necessary support and turnaround time.
              </li>
              <li>
                <span className="font-bold">Mortgage Loan Review:</span> We use a document checklist to verify and record all documents throughout the mortgage loan process, from pre-approval to closing.
              </li>
              <li>
                <span className="font-bold">Report Creation:</span> We create sophisticated reports at each stage of the process, including pre-approval, underwriting, review, and closing.
              </li>
              <li>
                <span className="font-bold">Service Delivery:</span> We transfer all reports and related information to our clients, ensuring a smooth and hassle-free conforming mortgage loan process.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Conforming Mortgage?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified & Experienced:</strong> We are an ISO 9001:2015 certified mortgage loan service provider, with a wealth of experience in the industry.
              </li>
              <li>
                <strong>Incredible Data Security:</strong> We are an ISO/IEC 27001:2022 certified organization, and all our employees and consultants sign a Non-Disclosure Agreement (NDA) to protect your data.
              </li>
              <li>
                <strong>Quality and Accuracy:</strong> Our quality assurance team performs multiple checks to ensure a high-quality, error-free, and accurate final product.
              </li>
              <li>
                <strong>High Scalability:</strong> With a large team of in-house professionals, we can easily scale our services to match your business's expanding needs.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> Our strong team, latest technology, and modern infrastructure help us deliver desired results in a short time without compromising on quality.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> Our services are cost-effective and affordable, as we only invoice you for the services you actually use.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity, the Mortgage Services Expert
            </h3>
            <p className="text-gray-700 mb-6">
              Feeling overwhelmed by the changing rules and regulations? Want to concentrate more on customer service by reducing manpower and the cost of back-end tasks? Look no further.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now or sign up to get a custom quote for your requirements today. We ensure that you won't regret your choice of outsourcing conforming mortgage loan services to us.
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

export default ConformingMortgageLoanSupport;