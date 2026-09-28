import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgagePreprocessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Pre-processing Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your mortgage lending operations with our technology-driven pre-processing services that ensure compliance, efficiency, and accuracy.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The mortgage lending industry is continuously evolving with a volatile political climate and changing federal rules. This changing landscape is leading many lenders to incorporate innovative, cost-efficient solutions to meet fluctuating customer demands and higher-than-usual default levels.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mortgage pre-processing is a core activity for any lending business and one of the most time-consuming tasks. Outsourcing mortgage pre-processing services is a proven way to deal with this slowdown while ensuring your business focuses on growth and establishment. At **Nimble Acuity**, our mortgage pre-processing services leverage high-end technology, global delivery capability, and smart data analytics to transform your operations.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Pre-processing Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At **Nimble Acuity**, we have a team of experienced mortgage professionals handling pre-processing services for our global clients. We work with your mortgage brokers to quickly get all the necessary documentation ready for federal and state disclosures. Our solutions include:
            </p>
            <ul className="space-y-6 text-gray-700">
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">Routine Initial Inspection Services</h4>
                <p>We ensure the complete reliability of the details provided for all mortgage applications, including GFEs, W2s, and paychecks. Our agents are trained to perform these initial checks and promise 100% accuracy.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">Rate Lock Services</h4>
                <p>We take care of the entire process of locking the current interest rate for an applicant for a specified time period. Our complete rate lock process is customized on a case-by-case basis as per your requirements, ensuring the entire processing takes as little time as possible.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">CAIVARS Authorization</h4>
                <p>To secure a loan approval, applicants must pass through CAIVARS (Credit Alert Interactive Voice Response System) screening. We prescreen borrowers to verify they do not have any history of defaulting on payments.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">MERS Check</h4>
                <p>We check the MERS (Mortgage Electronic Registration System) database to find out if a borrower has an existing loan. This information is updated in the application and sent for further processing.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">IRS Transcript Requests</h4>
                <p>We leverage the Income Verification Express Service (IVES) program to quickly confirm the borrower's income and compare it against their loan application.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">Appraisal Orders</h4>
                <p>To speed up the timeline, we order appraisals only from authorized appraisers after verifying the payment receipt for the appraisal fee to reduce delays.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">1003 Review</h4>
                <p>We review all 1003 loan application forms, double-checking all relevant information such as borrower names, history, signatures, and dates to ensure only correct information goes on to the next step.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">LE Form Review</h4>
                <p>Our team of mortgage service professionals ensures the complete correctness of the Loan Estimate (LE) form, which contains all borrower details, within a brief time.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold text-[#006A7C] mb-2">Generation of Disclosures</h4>
                <p>Once we have helped you review the 1003 and LE forms, we help generate and review federal and state disclosures before sending them electronically to the borrower.</p>
              </li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity's Mortgage Pre-processing Procedure
            </h3>
            <p className="text-gray-700 mb-6">
              As a leading provider of mortgage pre-processing services, we ensure all documents are reviewed and validated with complete accuracy. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Document Validation:</span> We review and validate all varied documents associated with the mortgage loan application, requesting supplemental records and following up as needed.
              </li>
              <li>
                <span className="font-bold">Complete Compliance:</span> We ensure we remain compliant with all state and federal regulations throughout the process. Our team is continuously trained in mortgage laws to prevent any halts or incidents.
              </li>
              <li>
                <span className="font-bold">Index Files:</span> We regularly index all updated information on the loan criteria and necessary documents using electronic indexing tools to keep everything in one place.
              </li>
              <li>
                <span className="font-bold">Collect Certificates:</span> Once requested certificates are issued, we help to collect and file them properly for future use.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Outsourcing Mortgage Pre-processing?
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience working with a wide range of mortgage companies, we have devised an efficient, cost-effective template. Some of the benefits of outsourcing with us include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Data Security:</strong> We ensure complete reliability and adhere to high-end data privacy measures with our secure infrastructure, so you never have to worry about data leaks.
              </li>
              <li>
                <strong>Cost-Effective:</strong> By outsourcing to us, you can avoid the rising costs associated with a bulk collection of data and regular customer follow-ups.
              </li>
              <li>
                <strong>24/7 Customer Support:</strong> We assign a dedicated project manager to handle all your requirements and ensure customer satisfaction.
              </li>
              <li>
                <strong>Autonomous, Fast Processes:</strong> Our team of mortgage resources is autonomously led by seasoned professionals who can function without the help of your managers, ensuring you spend very little time on oversight.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Rapid, Reliable, and 100% Compliant Mortgage Pre-processing Services
            </h3>
            <p className="text-gray-700 mb-6">
              Over the past decade, we have constantly redefined our offerings by bringing down prices while raising the bar for what to expect from an outsourcing service provider. With thousands of happy clients across the globe, our quality control processes ensure the highest levels of accuracy.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              By partnering with us, you can reduce operational overheads and focus on your core competencies.
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

export default MortgagePreprocessing;