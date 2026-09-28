import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from "react";
import { Link } from "react-router-dom";

const MortgageTitleCommitmentPreparation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Title Commitment Preparation Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Create high-quality title commitment documents, boost productivity, and cut costs by choosing our superior services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A **title commitment** is a crucial document that outlines all the details related to a property being mortgaged. It specifies the requirements, exceptions, and exclusions for issuing title insurance. This document serves as a promise to provide title insurance on the property once all stipulations in **Section B** of the commitment are met. It also informs the buyer of any potential property peculiarities, such as a right-of-way or a third-party ruling body like a condo association.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While a title commitment is a mandatory document for the buyer, preparing it can be a tedious and time-consuming process. It's often a smart move to seek support from reliable third-party firms, especially if you need to prepare many of these documents regularly. This is where **Nimble Acuity** comes in. With over 26 years of experience in the mortgage industry, we provide a full range of support services to help you craft accurate and timely title commitments.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mortgage Title Commitment Preparation Support
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              As a leading provider of mortgage title commitment preparation support, we offer accurate and high-quality services designed to save you time, money, and effort. Our services ensure you create accurate title commitments, freeing up your time to focus on more profitable endeavors.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Accurate Schedule A Verification:</strong> We meticulously review title commitments to ensure all details in the Schedule A section are valid and accurate. We double-check the commitment date, land interest, owners, policies to be issued, insured amounts, proposed insured, and property description.
              </li>
              <li>
                <strong>Correct Schedule B Detail Confirmation:</strong> We check all details in the Schedule B section, including requirements, exclusions, and exceptions. We perform a thorough review of this critical section to ensure all information is correct.
              </li>
              <li>
                <strong>Requirements:</strong> We pay close attention to the "requirements" section, which lists everything that must be completed for title insurance to be issued. We verify the accuracy of details such as tax payments, new deed recordings, loan document recordings, proof of identity, and lien releases.
              </li>
              <li>
                <strong>Exclusions:</strong> We ensure all details are correct in this section, which lists what the title company will not cover. Common exclusions we look for include government regulations on property use, claims from bankruptcy, or rights of eminent domain.
              </li>
              <li>
                <strong>Exceptions:</strong> This section details what is not covered by the insurance. We prepare this section with great care, ensuring all details are accurate. If some exceptions are unacceptable to the buyer, we work with you to find a solution, such as using an endorsement or removing the exception.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Choosing to partner with us provides numerous benefits that go beyond cost and time savings.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Efficient and Superior Process:</strong> Our streamlined process ensures you save significantly on costs while receiving exceptional quality services.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team consists of highly experienced finance and mortgage experts who can professionally handle any of your requirements with ease.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We offer our services at highly competitive rates, ensuring you get exceptional value for your money.
              </li>
              <li>
                <strong>High-Quality Services:</strong> Our ISO certification demonstrates our commitment to providing top-quality services to all clients.
              </li>
              <li>
                <strong>Data Security:</strong> We use advanced security measures, including FTP and VPN for file transfers, and maintain strict **GDPR** compliance to safeguard your data.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our team leverages operational efficiencies gained from over 26 years of service to deliver services within a quick turnaround time.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Mortgage Title Commitment Preparation to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leader in providing high-quality mortgage title commitment preparation support. Our team of thorough professionals meticulously reviews every detail to ensure all your title commitments are accurate. With our services, you can significantly boost productivity, cut costs, and focus on more profitable business activities.
            </p>
            <p className="text-gray-700 mb-6">
              Get in touch with us today, and we'll contact you within 24 hours to discuss your mortgage title commitment preparation needs.
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

export default MortgageTitleCommitmentPreparation;