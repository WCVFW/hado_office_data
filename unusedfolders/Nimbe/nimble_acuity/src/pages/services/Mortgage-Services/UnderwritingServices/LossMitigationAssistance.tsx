import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const LossMitigationAssistance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Loss Mitigation Assistance
            </h2>
            <p className="text-lg text-gray-600">
              Investors need a strong strategy to mitigate recurring losses caused by complex borrower options, increased mortgage delinquencies, and strict underwriting standards. The main aim is to reach out to stressed borrowers, deliver the best customer experience, and resolve their issues.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we cover a wide range of loss mitigation support services, from document processing to complex processes that require market analysis and borrower outreach. Our experts provide unique solutions and assistance to lenders and borrowers worldwide.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Loss Mitigation Assistance Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team of loss mitigation experts helps borrowers and lenders mitigate recurring losses. We have years of experience in this industry and understand all the small intricacies of this process. Some of our key support offerings include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Custom Loan Modification Services:</strong> We review documents, conduct income underwriting, solicit borrower's financial information, and complete modification fulfillment. We also have dedicated contact centers to help borrowers.
              </li>
              <li>
                <strong>Borrower Solicitation Services:</strong> We find the reason for delinquency, understand the borrower's financial situation, educate them about alternatives, and get a commitment to resolve the delinquency while resetting payment expectations.
              </li>
              <li>
                <strong>Foreclosure Management:</strong> We provide comprehensive support for foreclosure, including property evaluation, monitoring, and maintenance, attorney management, pre-foreclosure valuation, and remediation management.
              </li>
              <li>
                <strong>Short Sale Management:</strong> We reach out to delinquent borrowers, educate them about short sale options, handle negotiations, and coordinate the closing.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Loss Mitigation Support?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our vast experience working with different clients across the globe has helped us grow and improve our services. Our loss mitigation experts are trained to handle any situation and provide the best back-office support. Some key reasons to choose us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Predictive Analysis:</strong> We use highly predictive analysis to identify at-risk borrowers.
              </li>
              <li>
                <strong>Expert Support:</strong> We provide the best inbound/outbound borrower contact support and develop borrower-friendly solutions based on expert advice.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Our services are provided at a very cost-effective rate.
              </li>
              <li>
                <strong>Confidentiality:</strong> The personal information you share with us is completely confidential and stored in secure locations.
              </li>
              <li>
                <strong>Risk and Cost Management:</strong> We offer enhanced risk management and improved cost management.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> We ensure absolute regulatory compliance in all our processes.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Loss Mitigation Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides top-quality loss mitigation assistance and a host of other mortgage support services. Our cost-effective solutions help our clients save a considerable amount of money and time, ensuring a completely hassle-free experience. We will help you scale up your business without having to worry about closing ratio efficiency.
            </p>
            <p className="text-gray-700 mb-6">
              To optimize your loss mitigation and loan defaults, outsource your support requirements to us. Contact us today to discuss your needs with our representatives.
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

export default LossMitigationAssistance;