import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageCreditUnionSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Closing Support for Credit Unions
            </h2>
            <p className="text-lg text-gray-600">
              Reduce mortgage closing costs and provide your customers with round-the-clock support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you worried about the increased cost of in-house mortgage closing services? Are you unable to provide 24/7 team coverage and losing valuable customers? Partner with **Nimble Acuity** for better mortgage closing support services. We have the latest workforce management and reporting tools to help you compete with your rivals and improve your market share.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Credit unions are often the preferred choice of consumers due to their lower fees and emphasis on customer service. However, they can struggle with the due process. That's where our expert mortgage closing support for credit unions comes in.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Closing Support for Credit Unions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Assembling Mortgage Closing Support Documents:</strong> When you outsource to us, our expert loan processors can take the lead in gathering support documents efficiently, error-free, and in a compliant way. We assemble documents including appraisal reports, inspection reports, title searches, and mortgage insurance.
              </li>
              <li>
                <strong>Mortgage Closing Document Validation:</strong> After collaborating with underwriters and third-party vendors, our trained experts thoroughly check documents for discrepancies. We leverage modern software to expedite the reviewing process and ensure the complete security of your customer data.
              </li>
              <li>
                <strong>Closing Instructions Preparation & Dispatch:</strong> We understand the rigorous diligence credit unions exercise. Our offsite support adheres to 100% mortgage and federal regulations, helping you avoid any penalties. We also prepare and send closing instructions and wiring details to your finance team.
              </li>
              <li>
                <strong>Tax & Fees Assessment:</strong> Our assistance also includes collaborating with settlement companies. We work with them on your behalf to evaluate fees and taxes and can pass on your instructions for the final disbursement of the mortgage loan.
              </li>
            </ul>
          </div>

          {/* The Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Closing Support Process
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide comprehensive mortgage closing assistance for credit unions. We evaluate the scope of your needs, outline any fallouts in your current process, and then render our expert service. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Gathering Mortgage Closing Documents:</strong> Our proficient loan processors will collect documents on your behalf and prepare the files for the title company.
              </li>
              <li>
                <strong>Assessing the Validity and Legitimacy of Documents:</strong> We review the records for any discrepancies or inconsistencies and make a comprehensive assessment.
              </li>
              <li>
                <strong>Preparing of Closing Instructions Statement:</strong> We then proceed to prepare a closing instructions statement and transfer it to the loan funding department.
              </li>
              <li>
                <strong>Evaluating Taxes & Fees:</strong> The next step is to evaluate the taxes and related fees and hand down the credit union's instructions to the agent for the final payment.
              </li>
              <li>
                <strong>Delivering of Mortgage Closing Documents:</strong> We make sure that all concerned parties are informed about the mortgage closing time and date.
              </li>
            </ol>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Closing Support?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When you outsource to Nimble Acuity, you get a substantial edge over your competitors. We ensure compliance-friendly support through our extensive experience in the mortgage support industry. Here are just a few of the many benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High Quality:</strong> We comply with ISO quality management systems, ensuring complete security, privacy, and confidentiality of your customer data.
              </li>
              <li>
                <strong>State-of-the-Art Infrastructure:</strong> Our team has access to world-class office spaces, uninterrupted network equipment, and modern communication tools.
              </li>
              <li>
                <strong>Flexible Pricing Options:</strong> Our customized services enable us to focus on your pain points. You can collaborate with us on a need-basis with flexible pricing options.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Our extensive knowledge and experience in the mortgage industry give substance to our credibility and allow us to provide the best services.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our executives work around the clock across all time zones to cater to your needs and queries.
              </li>
              <li>
                <strong>Economy of Scale:</strong> We have the necessary resources to handle any spike in your business demands and exploit cost advantages.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Closing Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing high-value mortgage closing support for credit unions. We offer a suite of professionals who can provide a high level of scalability and flexibility, customized to your service needs. We have in-depth knowledge and understanding of US and UK mortgage and federal laws.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today for reliable, efficient, and cost-effective mortgage closing support for credit unions.
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

export default MortgageCreditUnionSupport;