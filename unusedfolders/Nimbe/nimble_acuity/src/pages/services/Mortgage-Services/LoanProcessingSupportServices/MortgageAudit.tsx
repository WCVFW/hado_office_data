import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageAudit: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Audit Services
            </h2>
            <p className="text-lg text-gray-600">
              Find more accessible solutions and data-oriented services to help with auditing your mortgage processes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you on the lookout for a seamless and error-free way to streamline your mortgage processes? Maybe you need skilled professionals and resourceful experts who can investigate and rectify mistakes in your mortgage process from start to finish. For those seeking stellar results with mortgage audit processes and inspections, **Nimble Acuity** extends its help. With various kinds of experience in the mortgage audit field, we have gathered the expertise to aid your process of auditing and identifying issues in the mortgage business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of mortgage support services that range from targeting strategies to proper quality control using the best resources and tools. We have an experienced audit team that is proficient in using data-driven technologies and resources to help manage risks in the best way. Our auditing services are capable of verifying information rapidly and providing validation for your mortgage business.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mortgage Audit Support Services We Offer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mortgage loan servicing audit services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Pre-Closing:</strong> As a leading mortgage support company, we have the capability to perform detailed reviews of all critical loan documents. We use a checklist approach to validate and complete loan application forms and verify documents such as credit reports, payment history, FICO scores, and other employment records.
              </li>
              <li>
                <strong>Underwriting QC:</strong> We include different mortgage QC audit services in our package to provide helpful solutions for compensating factors. We have various resources and tools to evaluate the different payment histories and factors of the borrowers. We also review underwriting terms to find inconsistencies.
              </li>
              <li>
                <strong>Closing Services:</strong> We include closing audit services for clients and ensure the completeness of all important information so that the loan closing process can be started. Our professionals will review all documents and ensure that accuracy is maintained.
              </li>
              <li>
                <strong>Post-Closing Services:</strong> We are a prominent audit company, and we tailor our services to validate all loan completion options. Post-closing services include due diligence and much more to ensure the integrity of the loan process.
              </li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Mortgage Audit Services to Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing mortgage audit services provides you with many benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Proper Quality Solutions:</strong> We are an ISO-certified agency that offers high-quality audit support to our clients. Our supervisors, project teams, and support staff are qualified to offer top-notch results.
              </li>
              <li>
                <strong>Confidentiality:</strong> We are completely focused on offering the best and most secured audit solutions. You can rest assured knowing that your company data will be safe with us and will not be shared with any third party without prior permission.
              </li>
              <li>
                <strong>Expert Professionals:</strong> We have more than 23 years of audit experience and provide expert professionals for the job.
              </li>
              <li>
                <strong>Global Delivery Centers:</strong> We have delivery centers all across the world that provide on-time delivery and quick service to our clients.
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="space-y-6 text-gray-700">
              <li>
                <h4 className="text-xl font-bold mb-2">Mortgage Loan Processing Support Services</h4>
                <p>We provide expert mortgage loan processing support to help mortgage firms stay on top of their documentation and drive better results.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold mb-2">Mortgage Underwriting Support Services</h4>
                <p>Our mortgage underwriters have significant experience and expertise in helping lenders process large volumes of documents.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold mb-2">Mortgage Title Support Services</h4>
                <p>If you are looking for accurate and reliable mortgage title support services, our experts will take care of all your requirements.</p>
              </li>
              <li>
                <h4 className="text-xl font-bold mb-2">Reverse Mortgage Support Services</h4>
                <p>Reverse mortgage support requires specialized help. Our experienced mortgage professionals can be counted on to provide end-to-end reverse mortgage support services.</p>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity as Your Mortgage Audit Company
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been offering world-class audit support services to its American mortgage clients. With us, you get extensive solutions that are scalable and tailored to your requirements. With over 26 years of experience in audit and related services, we provide streamlined and seamless audits for your mortgage operation.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today and we will create the perfect strategy for your requirements.
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

export default MortgageAudit;