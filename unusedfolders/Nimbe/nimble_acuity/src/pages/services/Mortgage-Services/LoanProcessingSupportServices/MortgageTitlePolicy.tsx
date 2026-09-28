import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageTitlePolicy: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Title Policy and Document Retrieval Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Looking for the fastest and safest way to obtain documents from former mortgage servicers? We've got you covered.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The document retrieval process is resource-intensive and time-consuming. Our efforts can save you the time and money involved by leaving the task to professionals. At **Nimble Acuity**, we offer comprehensive title search and policy retrieval services to get duplicate originals of title policies and other crucial documents for closing agents. We also provide timely bi-weekly reports. Using electronic processing systems, we efficiently gather all the documents listed in your requirement spreadsheet.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Title and Document Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nimble Acuity is deeply committed to providing the best title policy and document retrieval support services. Our mortgage professionals understand the industry and process inside and out, giving us the advantage to serve you effectively. As part of our offshore services, we offer:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Mortgage Title Search:</strong> We conduct comprehensive reviews of properties to find liens and other liabilities. This helps lenders uncover problems and shorten the loan closing timeline. We collaborate with title companies, underwriters, or loan closing agents to gather ownership records, tax receipts, and policies.
              </li>
              <li>
                <strong>Recorded Document Retrieval:</strong> Using robust information aggregation platforms, we retrieve copies of original real estate documents, including assignments, mortgage deeds, and deeds of trust. Our knowledge of mortgage laws and regulatory compliances in every major jurisdiction ensures we meet your requirements while keeping you informed.
              </li>
              <li>
                <strong>Title Policy Retrieval & Verification:</strong> Our approach is systematic and linear. We collaborate with mortgage title companies and various networks to pull information with agility and accuracy, ensuring vital details are verified.
              </li>
              <li>
                <strong>Mortgage Information Service:</strong> When you need information on the fly, we provide vital data through quality reports. Our reports include customer data, property descriptions, and insurance information. We run multi-tier checks to ensure the accuracy and authenticity of all collected documents.
              </li>
              <li>
                <strong>Research and Tracking:</strong> We track down mortgage companies responsible for partially implemented assignments and research loans to find and resolve problems. This drastically lowers loan rejection rates by providing complete information at an unbeatable success rate.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Document Retrieval Process
            </h3>
            <p className="text-gray-700 mb-6">
              When you outsource title policy and document retrieval support services to us, we address any documentation shortfalls and ensure all compliances are met. Our transparent method includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Identifying Requirements:</span> We collaborate with lenders to gather a list of the required documents and identify what is already in their possession.
              </li>
              <li>
                <span className="font-bold">Creating a Checklist:</span> We create a comprehensive document checklist to ensure all necessary files are retrieved for a successful mortgage closure.
              </li>
              <li>
                <span className="font-bold">Verification and Validation:</span> We ensure all information is accurate and complete to prevent loan rejections.
              </li>
              <li>
                <span className="font-bold">Document Submission:</span> The verified documents are submitted to the lender for further action.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Document Retrieval Support?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Provider:</strong> We are an ISO 9001:2015 certified company, adhering to the highest standards of quality.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022 certified company, we practice safe data management and secure your client's confidential mortgage data.
              </li>
              <li>
                <strong>High Accuracy:</strong> We maintain an unparalleled level of quality and accuracy from start to finish.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> We are known for offering the best turnaround time for title policy and document retrieval, without compromising on quality.
              </li>
              <li>
                <strong>Scalability:</strong> We can scale our services up or down based on your needs without lag or disruption.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> Our high-quality services are available at competitive, pocket-friendly prices.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our mortgage team has members with over a decade of experience in a multitude of mortgage projects.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> We have advanced infrastructure and technology to aid our team in delivering high-quality services.
              </li>
              <li>
                <strong>Secure File Sharing:</strong> Our SFTP and VPN can be trusted to send confidential files without risking their integrity.
              </li>
              <li>
                <strong>24/7 Availability:</strong> Our global delivery centers are operational 24/7, so help is always within arm's reach, regardless of time zone.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Started with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been on a mission to declutter back-office mortgage functions for over two decades. We have the best team and technology to help you navigate challenges with ease. We rely on automated technology and advanced tools to offer a wide range of services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us to let us customize title policy and document retrieval support for your needs and budget.
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

export default MortgageTitlePolicy;