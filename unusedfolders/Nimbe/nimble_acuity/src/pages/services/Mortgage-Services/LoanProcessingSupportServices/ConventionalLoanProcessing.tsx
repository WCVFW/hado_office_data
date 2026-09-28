import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ConventionalLoanProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Conventional Mortgage Loan Processing Support
            </h2>
            <p className="text-lg text-gray-600">
              Expedite your conventional loan approvals by leveraging Nimble Acuity's specialized support services for mortgage lenders.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              To mitigate lending risks, it's crucial for conventional loan providers to qualify borrowers based on stable income, a substantial down payment capacity, and a good credit score. Finding a reliable partner to handle this process is key to your success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** can help you serve prospective borrowers through our specialist loan processors. We provide accurate loan estimates and handle the entire back-office function to help you lend to qualified individuals. We ensure that our processes align with Fannie Mae and Freddie Mac guidelines.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Conventional Loan Processing Support Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Outsourcing conventional loan processing to us saves you the stress of finding attractive borrowers with good credit risk. We reduce the time spent on back-office functions and streamline the process. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Loan Processing Support:</strong> We screen employment history and run credit checks to ensure compliance. We thoroughly review all loan documents to eliminate data-entry errors.
              </li>
              <li>
                <strong>Loan Underwriting Services:</strong> We verify data authenticity to facilitate fast decisions by underwriters. We identify any falsified information to prevent unchecked approvals and accelerate the underwriting process.
              </li>
              <li>
                <strong>Mortgage Closing Services:</strong> We provide comprehensive closing support, taking care of property title evaluations and easements to ensure a clean credit history and steady income for the borrower.
              </li>
              <li>
                <strong>Mortgage Appraisal Support:</strong> We assist with ordering and reviewing appraisals to determine the fair market value of the collateral, helping you decide on the ideal loan-to-value (LTV) ratio.
              </li>
              <li>
                <strong>Mortgage Post-closing Services:</strong> After loan approval, we audit the documentation to ensure it is complete and error-free, performing quality control checks and maintaining an archive for future reference.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Conventional Loan Processing Method
            </h3>
            <p className="text-gray-700 mb-6">
              Our transparent methodology ensures that your conventional loan processing is in safe hands. Here is the process we follow:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Order Credit Report:</span> We pull the borrower's financial data to maintain a clean paper trail.
              </li>
              <li>
                <span className="font-bold">Verification:</span> We verify the ordered reports to check if the information is accurate and authentic, assessing the borrower's creditworthiness.
              </li>
              <li>
                <span className="font-bold">Mortgage Property Appraisal:</span> We perform a comprehensive appraisal of the collateral to determine its fair market value.
              </li>
              <li>
                <span className="font-bold">Order Title Search:</span> We order a title search to ensure that all titles are correct and without liens or disputes.
              </li>
              <li>
                <span className="font-bold">Mortgage Closure:</span> We track that all tax, insurance, and other document obligations are met before financing the qualifying borrowers.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Conventional Loan Processing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Mortgage Service Company:</strong> We are an ISO 9001:2013 certified company and a member of the Mortgage Bankers Association (MBA), known for reliability.
              </li>
              <li>
                <strong>Data Security:</strong> We are ISO/IEC 27001:2015 certified, handling your client's sensitive data with the utmost care and security.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> Our custom services are carried out with maximum care to help you serve low-risk borrowers.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Experience a 30% faster turnaround time with our experienced teams.
              </li>
              <li>
                <strong>Scalability and Flexible Pricing:</strong> Our services are highly scalable and can be customized to match your budget and needs.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our expert team of mortgage analysts, underwriters, and appraisers have extensive experience and knowledge of the industry.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Conventional Loan Support
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a world leader in providing comprehensive support for a wide range of mortgage services. We have successfully streamlined the efficiency of lending institutions with our conventional loan processing services for decades.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us now to get cost-effective and safe conventional loan processing services.
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

export default ConventionalLoanProcessing;