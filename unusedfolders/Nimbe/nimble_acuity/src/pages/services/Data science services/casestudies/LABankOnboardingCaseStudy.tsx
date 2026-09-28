import React from "react";
import DSMainMenu from "../mainmenu";


const LABankOnboardingCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Global Navigation */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Reduced Client Onboarding Time for a LA-based Bank
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Optimizing Client Onboarding with UiPath RPA
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a renowned{" "}
            <strong>Los Angeles-based bank</strong>, serving the banking needs of 
            Hollywood celebrities, television actors, and theater artists. 
            They are recognized for their{" "}
            <strong>premium customer service</strong> in the banking industry.
          </p>
        </section>

        {/* Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Client's Requirement</h2>
          <p className="text-gray-700">
            The client sought a <strong>reliable RPA solutions provider</strong> to
            significantly <strong>reduce client onboarding time</strong>. 
            They aimed to optimize manual processes and improve overall operational efficiency.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Hiring a highly skilled RPA team in a short turnaround time.
            </li>
            <li>
              Reducing onboarding time from <strong>10 minutes to under 1 minute</strong>.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            Nimble Acuity designed a <strong>UiPath RPA-based solution</strong> to handle 
            routine onboarding tasks like{" "}
            <em>requesting fee waivers, ordering checks, and replacement cards</em>.
          </p>
          <p className="text-gray-700">
            We deployed <strong>2 UiPath robots</strong>, which automated most 
            manual processes, freeing up staff to focus on{" "}
            <strong>core banking operations</strong>.
          </p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Results</h2>
          <p className="text-gray-700 mb-3">
            The project was a huge success. The client onboarding time was reduced from{" "}
            <strong>10 minutes to under 1 minute</strong>, saving 
            nearly <strong>40 staff hours per day</strong>.
          </p>
          <p className="text-gray-700">
            Impressed by the results, the client decided to{" "}
            <strong>expand RPA usage</strong> into accounting, finance, 
            and back-office operations.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble UiPath RPA Solutions to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a trusted partner for{" "}
            <strong>UiPath RPA services</strong> and a range of data science 
            solutions. Our skilled RPA specialists leverage cutting-edge tools 
            to deliver <strong>efficient, cost-effective automation</strong>.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking to optimize your banking operations?{" "}
            <span className="text-blue-600">Contact us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LABankOnboardingCaseStudy;
