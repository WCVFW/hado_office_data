import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageLoanSetup: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Loan Setup Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your day-to-day operations, reduce costs, and digitize your mortgage loan setup process with comprehensive back-office support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Facing business sustainability issues due to a lack of quality talent? Looking for a comprehensive back-office solution to streamline your mortgage loan setup? We offer end-to-end mortgage loan setup services, from collating documents to verifying borrower eligibility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive expertise in the mortgage industry, providing routine mortgage assistance that helps you save significant costs by providing a skilled workforce at an affordable rate. We can provide the specialized support you need to ensure a smooth and efficient loan setup process.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Loan Setup Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have collaborated with a wide range of clients and have helped them with our state-of-the-art CRM, document management systems, and a team of expert professionals. Our support services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mortgage Loan Document Management:</strong> We oversee the compilation, inspection, and maintenance of all supporting loan documents, verifying each meets the latest legal requirements and complies with state and federal regulations.
              </li>
              <li>
                <strong>Loan Packaging:</strong> We prepare and review loan applications, working closely with loan processors, officers, and underwriters to finalize loan packages and complete the borrower's profile on time.
              </li>
              <li>
                <strong>Title Support:</strong> We deliver comprehensive title support, including title research, examination, and commitment, helping you minimize the time and costs associated with in-house title services.
              </li>
              <li>
                <strong>Appraisal Support:</strong> We provide complete appraisal services from ordering to quality control, helping underwriters determine the fair market price of a property and reviewing reports for inconsistencies.
              </li>
              <li>
                <strong>Fraud Review:</strong> Our services comply with statutory and business rules, providing fraud detection support, data integrity verification, and a review of credit bureau reports and closing documents to ensure legality and validity.
              </li>
            </ul>
          </div>

          {/* The Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Proven Mortgage Loan Setup Process
            </h3>
            <p className="text-gray-700 mb-6">
              When you partner with us, we initiate our collaboration by gathering information on your exact requirements, understanding your workflow, tools, and the scale of your business. This helps us optimize the time and resources needed to provide a compliant, cost-effective, and scalable service. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 font-medium">
              <li>
                <span className="font-bold">Loan Setup:</span> We handle the initial setup of the loan file, ensuring all data is accurately entered and organized.
              </li>
              <li>
                <span className="font-bold">Service Desk:</span> We provide ongoing support to address any inquiries or issues that arise during the process.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Mortgage Loan Setup?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High Quality & Certification:</strong> As an ISO 9001 and ISMS certified organization, we assure high-quality, reliable services.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> Our team has access to world-class office spaces and state-of-the-art tools and technologies.
              </li>
              <li>
                <strong>Flexible & Scalable:</strong> Our flexible pricing and ability to scale up or down allow you to manage project demands and budgets without worrying about overheads.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Our experienced professionals have a solid grasp of the loan accounting process and are adept at adhering to mortgage and federal laws.
              </li>
              <li>
                <strong>24/7 Availability:</strong> We work around the clock, giving you the benefit of shorter cycle times and continuous support regardless of time zone.
              </li>
              <li>
                <strong>Secure Data:</strong> We adhere to the highest standards of data security to ensure your client's sensitive information is protected.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Loan Setup Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing high-value mortgage loan setup services and a series of other mortgage solutions to our global clientele. Our extended suite of professionals provides the scalability, flexibility, and customizability necessary to boost your business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us today for reliable, efficient, and cost-effective mortgage loan setup services.
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

export default MortgageLoanSetup;