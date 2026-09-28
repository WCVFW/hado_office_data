import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceClaimsArticle: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            All You Need to Know About Insurance Claims
          </h1>
          <p className="text-lg text-gray-700">
            This article explains everything about insurance claims – how companies handle claims, how to file them, and what to expect during the process.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
        <p>
          If you’ve been fortunate, you might never have had to file an insurance claim. However, accidents, disasters, or unforeseen events can occur. A policy is a promise to assist you when things go wrong, whether for yourself, your family, your vehicle, or your home.
        </p>
        <p>
          Many customers are not fully aware of insurance claims and their benefits. This article breaks down each aspect of the claims process so you can understand it thoroughly.
        </p>
      </section>

      {/* What Are Insurance Claims */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">What are Insurance Claims?</h2>
          <p className="text-gray-700">
            An insurance claim is a formal application made to inform the insurer about damage or loss. The insurer reviews the claim, verifies proofs, checks coverage, and if approved, processes a payout to the client.
          </p>
        </div>
      </section>

      {/* How to File an Insurance Claim */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">How to File an Insurance Claim?</h2>
        <p className="text-gray-700 mb-4">
          Understanding the claims process is crucial. Follow these steps for a smooth experience:
        </p>

        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold mb-1">Before you Claim</h3>
            <ul className="list-disc ml-6">
              <li>Ensure the safety of yourself and your family</li>
              <li>Contact the police if required</li>
              <li>Review the Product Disclosure Statement (PDS)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Making a Claim</h3>
            <ul className="list-disc ml-6">
              <li>Contact your insurer</li>
              <li>Minimize the loss with temporary repairs</li>
              <li>Provide proofs and keep a record</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Working Through a Claim</h3>
            <ul className="list-disc ml-6">
              <li>Work with the insurer assessor</li>
              <li>Obtain quotes and determine scope of work</li>
              <li>Replacement, repairs, and cash settlement</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Finalizing the Claim</h3>
            <ul className="list-disc ml-6">
              <li>Paying your claim</li>
              <li>Handling claims after disasters or catastrophes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Settlement Time */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
          <h2 className="text-3xl font-bold mb-4">How Long Does an Insurance Company Have to Settle a Claim?</h2>
          <p>
            Claims can take anywhere from a few days to several months depending on the type (medical, vehicle, home) and complexity. Common delays include poor communication, lack of funds, dissatisfaction with coverage, or natural disasters.
          </p>
          <p>
            It is best to maintain communication with your insurance agent if major issues arise.
          </p>
        </div>
      </section>

      {/* How Claims Are Calculated */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">How Are Insurance Claims Calculated?</h2>
        <p>
          Once a claim is filed, the insurer analyzes policy clauses and determines the payout using a formula:
        </p>
        <p className="font-semibold mt-2">Claim = Loss Suffered × Insured Value ÷ Total Cost</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Acuity for an Efficient Insurance Claims Process
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our team of highly skilled insurance experts ensures error-free claims processing with quick turnaround times. Leverage our global delivery centers and experience a reliable, cost-effective, and efficient insurance claims process.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default InsuranceClaimsArticle;
