import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageLienRelease: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Lien Release Support Services
            </h2>
            <p className="text-lg text-gray-600">
              To ensure a complete waiver of lien rights, we'll work with mortgage companies and fetch the essential documents, all at an affordable rate.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After a successful loan repayment, the mortgage lien release must be signed and secured from the county. If assignments are done poorly or are missing, the county will reject the release. As a lender, if you're worried about absorbing high closing costs, it's time to outsource your mortgage lien release support services to a professional who understands the workflow and mortgage laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have experienced mortgage specialists, cloud document management systems, and workflow automation tools to reduce liability and lien release rejections while ensuring utmost satisfaction for borrowers. We'll ensure that the deed of trust, title, notes, and other documents signed off from the county have the correct borrower information and are returned to homeowners after terminating the lender's interest in the collateral.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Lien Release Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nimble Acuity has the industry's best workflow because we aim to complete the mortgage lien release in a quick turnaround time. We scrutinize assignments, deeds of trust, and mortgage notes to close the loop with maximum efficiency. As part of our services, we offer:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Mortgage Lien Release Processing:</strong> We collect lien release requests, verify and index documents, and send them to the county for sign-off. We do this with utmost care to avoid rejections.
              </li>
              <li>
                <strong>Mortgage Assignment Services:</strong> Our mortgage risk management specialists assess assignments to the property to flag any unpaid dues, litigations, or third-party liens, mitigating risks for lenders.
              </li>
              <li>
                <strong>Tracking and Reporting Support:</strong> We use technology and dedicated resources to track document movement in real time, providing reliable estimates for turnaround time and cost. Our CRM systems give you up-to-date information on the go.
              </li>
              <li>
                <strong>Document Recording Solution:</strong> We use an efficient document management system to initiate the lien release process as soon as a loan is paid off, storing a digitized copy for efficient tracking.
              </li>
              <li>
                <strong>Document Retrieval Solution:</strong> We simplify the exhaustive process of document retrieval by following a checklist strategy to prevent the omission of key documents and ensure the quality of submissions.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Lien Release Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our clients choose us for our transparency and cost-effectiveness. We combine our skills, technology, and flexible pricing to offer a seamless process:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Identifying Stakeholders:</span> The borrower requests a payoff statement, and after payment, we ensure the lender produces a satisfaction of payment letter.
              </li>
              <li>
                <span className="font-bold">Verification and Validation:</span> We verify and validate the documents to ensure the correctness and completeness of the borrower's data before sending it to the county.
              </li>
              <li>
                <span className="font-bold">Fill and Sign:</span> We furnish the documents with properly done assignments to prevent rejection. The county then signs and returns the verified documents.
              </li>
              <li>
                <span className="font-bold">File and Record:</span> Once the signed document is returned, we digitize the data for record-keeping and future reference.
              </li>
              <li>
                <span className="font-bold">Document Surrender:</span> The finalized mortgage documents are returned to the borrowers, marking the completion of the ownership transfer.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Provider:</strong> We are an ISO 9001:2015 certified company, offering high-quality services with a commitment to client satisfaction.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022 certified company, we follow the best security protocols to protect your confidential mortgage data.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> Our services are client-focused, with a strong emphasis on accuracy and quality to give you the best value.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Our practiced protocol ensures a speedy process without compromising quality.
              </li>
              <li>
                <strong>Scalability:</strong> Our services can be scaled up or down to meet your needs, providing flexibility and efficiency.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> Our cost-effective services come at an unbeatable price, allowing you to choose what's right for your needs.
              </li>
              <li>
                <strong>Single Point of Contact:</strong> We provide a dedicated contact person who can give you real-time insights, reports, and other information.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our mortgage specialists have over 10 years of experience and a deep knowledge of local laws and regulatory compliances.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> Our well-equipped infrastructure is constantly updated to take on new challenges in the mortgage industry.
              </li>
              <li>
                <strong>Secure File Sharing:</strong> Our file-sharing channels are secure and maintained by security experts with many years of experience.
              </li>
              <li>
                <strong>24/7 Availability:</strong> We run global contact centers that are operational 24/7/365, so you can reach us anytime, anywhere.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Mortgage Lien Release Process
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity focuses on resolving the most typical challenges involving mortgage releases. With over 26 years of experience, we provide a wide range of services, including mortgage lien release support. We offer an affordable, reliable, and speedy solution.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us to let us customize mortgage lien release support for your needs and budget.
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

export default MortgageLienRelease;