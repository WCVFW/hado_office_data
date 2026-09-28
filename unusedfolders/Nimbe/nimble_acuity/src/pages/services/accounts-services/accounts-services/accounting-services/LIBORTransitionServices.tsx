import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const LIBORTransitionServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              LIBOR Transition Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to end-to-end LIBOR transition capabilities by choosing our high-quality, expert services to navigate this complex shift.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The transition away from LIBOR (London Interbank Offer Rate) presents a unique set of challenges, from recalibrating financial models and defining new rate strategies to tailoring client outreach. As this transition becomes a reality, most global financial companies are finding it difficult to remediate contractual agreements and other documents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has extensive experience in providing financial support services to firms around the world. Our end-to-end capabilities include identifying risky contracts, analyzing affected agreements, drafting and amending documents, and implementing a smooth transition with advanced technology. We are a recognized, reliable provider of LIBOR replacement services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our LIBOR Transition Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We offer a comprehensive range of services to ensure a seamless and compliant transition for your firm.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Exposure and Impact Assessment</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identify your firm's exposure to LIBOR-linked products and associated transactions.</li>
                  <li>Deploy key risk management and valuation methods to document the impact across all product lines.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Risk and Model Review Analysis</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identify and build a framework to mitigate potential conduct risks that may arise from the transition.</li>
                  <li>Apply financial models to evaluate how the replacement of the reference rate will impact hedging, valuation, and collateral.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Contract Management and Remediation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identify and amend a high volume of contracts using advanced technologies like AI and NLP.</li>
                  <li>Ensure compliance with the new language and documentation requirements.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Implementation and Dispute Resolution</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide a clear roadmap with defined actions to help your firm remove all dependencies on LIBOR.</li>
                  <li>Assist in negotiations and provide support to resolve potential disputes and steer your business away from conflicts.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our LIBOR Transition Process
            </h3>
            <p className="text-gray-700 mb-6">
              We follow a detailed, phase-wise plan to ensure a smooth and cost-effective shift to an alternative reference rate.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> We work with key stakeholders to understand your firm’s current approach, identify impacted areas, and collect relevant data from contracts.</li>
              <li><strong>Risk Identification & Solution Design:</strong> We identify all possible market risks, review them against industry standards, and use this information to model the impact and design a practical solution.</li>
              <li><strong>Documentation & Execution:</strong> We study how market changes will amend documentation language and assist you with AI-driven execution of contract amendments.</li>
              <li><strong>Monitoring & Reporting:</strong> We team up with you to execute the roadmap, monitor the changes, and generate reports to ensure a seamless adaptation to the new financial landscape.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Our streamlined process provides a significant cost advantage without compromising quality.</li>
              <li><strong>Expert Team:</strong> Our dedicated team of specialists includes legal and AI experts to manage every aspect of the transition.</li>
              <li><strong>Extensive Experience:</strong> We have a robust portfolio of financial services and contract management expertise, guaranteeing a quick and cost-effective adoption of the new reference rate.</li>
              <li><strong>End-to-End Coverage:</strong> We provide full lifecycle coverage, looking into every transition need from start to finish.</li>
              <li><strong>AI-Driven Solutions:</strong> We leverage AI and machine learning to expedite contract review, analyze over 10,000 contracts per hour, and ensure accuracy.</li>
              <li><strong>Compliance:</strong> Our experts are always up-to-date with the latest industry developments and regulatory mandates, ensuring you stay compliant at all times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Navigate the LIBOR Transition with Confidence
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity’s financial consulting services include end-to-end documentation management, stakeholder communications, dynamic budgets, and robust reporting. Our experts will work hand-in-hand with you to develop a clear roadmap, monitor issues, and prioritize risks.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us as your single-source provider for all LIBOR transition requirements.</span>
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LIBORTransitionServices;