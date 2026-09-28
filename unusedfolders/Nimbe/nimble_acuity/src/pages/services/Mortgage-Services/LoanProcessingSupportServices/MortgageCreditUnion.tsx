import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageCreditUnion: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Processing Support for Credit Unions
            </h2>
            <p className="text-lg text-gray-600">
              Are you finding it difficult to provide high levels of customer service that credit unions are known for? Outsourcing mortgage processing support is the best option for you.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we can provide you with the best quality mortgage processing support services that will relieve you of all the lengthy and time-consuming processes. Our mortgage loan processors can determine the feasibility of granting loans by following the lending approval matrix and credit union policies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mortgage loan processors gather and verify loan applicants' financial data, validate details of titles held, and follow state and federal regulatory guidelines at every step. Our loan underwriters then perform a detailed credit analysis of the loan applicant to verify if a borrower's financial ratios meet the bank's lending standards.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Processing Support Offered by Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer mortgage processing support services right from loan origination to closing. We are able to quickly learn your process and hit the ground running. Here is how we can help:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Document Assembling:</strong> Our team members, who are experienced certified mortgage professionals, are familiar with the current regulations and ensure that all loans comply with state and federal rules. We understand exactly what documents are needed for smooth mortgage processing.
              </li>
              <li>
                <strong>Document Review:</strong> Our services have stringent review processes in place that follow industry best practices to protect the credit union from both clerical errors and major compliance issues. We provide quality assurance that guarantees a high level of accuracy.
              </li>
              <li>
                <strong>Detail Verification:</strong> Our team of mortgage experts has the required expertise and skills to provide in-depth client data verification services. This ensures that all the data is accurate and provides the client with a smooth mortgage processing experience.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Processing Support Process Followed by Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We can help you streamline your mortgage processing. We start by studying the credit union's mortgage process, documenting all the steps so our in-house team can follow the same processes and systems. We then identify and replace inefficiencies with better processes.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Validation of documents</span> for data accuracy and compliance with regulatory requirements.
              </li>
              <li>
                <span className="font-bold">Tracking and follow-up</span> of outstanding titles to ensure receipt within the specified timeline.
              </li>
              <li>
                <span className="font-bold">Meticulous and timely uploading</span> of all loan documents into the storage system.
              </li>
              <li>
                <span className="font-bold">Coordination</span> with the credit union's loan officers.
              </li>
              <li>
                <span className="font-bold">Modification of loan processes</span> based on the latest regulatory requirements.
              </li>
              <li>
                <span className="font-bold">Regular reporting</span> of review findings to top management.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Should You Hire Us?
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Certified Mortgage Processors:</strong> Our team members are Certified Mortgage Professionals who are experts in mortgage processing and are experienced in using common software packages.
              </li>
              <li>
                <strong>Ease of Scalability:</strong> Our team size can be scaled up or down as the workload changes, ensuring flexibility and efficiency.
              </li>
              <li>
                <strong>Cost Reductions:</strong> You can benefit from better resource usage and reduced spending on infrastructure. Quick disbursement of loans helps credit unions keep operating costs down.
              </li>
              <li>
                <strong>Shorter Turnaround Time:</strong> Our team knows the exact sequence of steps to process loans quickly and handles all compliance issues to prevent delays.
              </li>
              <li>
                <strong>One-point Contact:</strong> You will have a dedicated contact who can help you at every step, with 24/7 access to our services.
              </li>
              <li>
                <strong>Data Security and Confidentiality:</strong> Our team members undergo regular training on cyber and data security best practices to protect sensitive information.
              </li>
              <li>
                <strong>24/7 Access to Services:</strong> You will have complete control over the mortgage process with 24/7 access to our services, keeping you aware of every stage.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Let Us Help You
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is your answer to high overheads, loan processing delays, and regulatory compliance issues. We have the answers, whether the delays are due to paperwork, closing problems, or property under-appraisal.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us take care of processes such as title search, property appraisal, and credit checks for you. Let your loan officers focus on providing the high levels of customer service that credit unions are known for.
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

export default MortgageCreditUnion;