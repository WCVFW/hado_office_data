import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageDisclosurePreparation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Closing Disclosure Preparation Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Get accurate Closing Disclosures prepared by experts and save time, money, and effort.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Mortgage closing is a complicated process that requires all parties to sign relevant documents and can take weeks to complete. A Closing Disclosure is a key, five-page document that lenders must provide borrowers at least three days before the actual closing of the loan. Creating this document can be a cumbersome task, and the process can be expedited by outsourcing the tedious work to a reliable third party, and that's where **Nimble Acuity** comes in.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading mortgage Closing Disclosure preparation support service provider with decades of experience. We provide support services that help you craft accurate and error-free Closing Disclosures that prevent the need for multiple back-and-forths between you and the borrowers.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Closing Disclosure Preparation Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide a range of services designed to help you save time and effort while maintaining accuracy. We ensure that the Closing Disclosures are fully compliant with federal and state statutes as well as all applicable regulations. Our services include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Ensuring that the Loan Amount is Accurate:</strong> We ensure that the loan amount in the Closing Disclosure is accurate and in line with what was provided in the loan estimate.
              </li>
              <li>
                <strong>Making Sure that the Interest Rate is Accurate:</strong> We check all details carefully to ensure no mistake has been made when calculating the interest rate.
              </li>
              <li>
                <strong>Providing Support for Fixed-rate and Adjustable-rate Mortgages:</strong> We provide a range of support services to help with both fixed-rate and adjustable-rate mortgages, carefully reviewing all details to ensure accuracy.
              </li>
              <li>
                <strong>Checking that Monthly Payment Amounts are Correct:</strong> We carefully review the loan details to make sure the amount in the monthly payments is accurate, including principal, interest, and estimated escrow.
              </li>
              <li>
                <strong>Ensuring that all Loan Costs are Accurate:</strong> We carefully go through the loan documents to ensure that all loan costs and fees have been accurately presented in the Closing Disclosure.
              </li>
              <li>
                <strong>Reviewing the Discount Points:</strong> As part of our process, we review the discount point details to ensure everything is accurate.
              </li>
              <li>
                <strong>Confirming that the "Calculation to Close" is Accurate:</strong> We carefully review all details in this tab to ensure that the money the borrower will need to bring to the settlement is accurate.
              </li>
            </ul>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Mortgage Closing Disclosure Preparation Support to Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Outsourcing to us makes sense for a host of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Streamlined and Systematic Process:</strong> We follow a systematic and streamlined process that saves you time and achieves significant cost-savings.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We provide our services at highly cost-effective rates, ensuring you get the most value for your money.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team comprises highly experienced mortgage and financial experts who can help you with any of your requirements.
              </li>
              <li>
                <strong>High-Quality Services:</strong> Our ISO-certification demonstrates our determination to provide only the highest-quality services.
              </li>
              <li>
                <strong>World-class Infrastructure:</strong> Our services are provided from world-class office spaces equipped with state-of-the-art facilities and all the required tools and technologies.
              </li>
              <li>
                <strong>Data Security:</strong> We use FTP and VPN for file transfers and comply with all General Data Protection Regulations (GDPR).
              </li>
              <li>
                <strong>Quality Checks:</strong> Our solutions are run through multiple quality checks to ensure high quality before final delivery.
              </li>
              <li>
                <strong>Short Turnaround:</strong> As a professional company, we provide high-quality services within very quick turnaround times.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Closing Disclosure Preparation Support Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading Closing Disclosure preparation support company that can provide you with a range of services to reduce your cost and boost your productivity. Our mortgage and finance professionals are fully geared to take on any requirement and can provide high-quality services at cost-effective rates and quick turnaround times.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today to discuss your mortgage Closing Disclosure preparation support requirement, and we will be glad to help.
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

export default MortgageDisclosurePreparation;