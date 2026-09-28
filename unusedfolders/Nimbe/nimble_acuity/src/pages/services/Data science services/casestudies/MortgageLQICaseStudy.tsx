import React from "react";
import DSMainMenu from "../mainmenu";


const MortgageLQICaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Helped a Mortgage Company in the US by Automating Loan Quality Investment (LQI) Process
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Helping US Mortgage Company by Automating LQI Process
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a <strong>top US-based mortgage company</strong> with both{" "}
            <strong>domestic and international clientele</strong>.
          </p>
        </section>

        {/* Requirements & Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Requirements and Challenges
          </h2>
          <p className="text-gray-700 mb-3">
            The client audited <strong>credit reports</strong> and{" "}
            <strong>undisclosed notification</strong> as part of the{" "}
            <strong>Loan Quality Investment (LQI) process</strong>. However, the process
            involved <strong>sensitive data</strong> and multiple stages of{" "}
            <strong>human intervention</strong>, leading to potential human-induced errors.
          </p>
          <p className="text-gray-700">
            The client engaged Nimble Acuity to model and implement a{" "}
            <strong>solution that could automate the LQI process</strong>.
          </p>
        </section>

        {/* Nimble Acuity’s Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Nimble Acuity’s Solution</h2>
          <p className="text-gray-700 mb-3">
            Our team developed <strong>three Artificial Intelligence BOTs</strong> to
            automate the LQI process. The 3 stages of automation were:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Bot 1:</strong> Logged into secure third-party data providers to
              check for <strong>undisclosed debt notifications</strong>. This step was
              replicated across all open applications in the process.
            </li>
            <li>
              <strong>Bot 2:</strong> Performed <strong>quality checks</strong> on loan
              applicants’ credit reports, followed by{" "}
              <strong>secondary checks for inconsistencies</strong> in the
              debt-to-income ratio. Notifications were automatically sent to authorized
              personnel based on the results.
            </li>
            <li>
              <strong>Bot 3:</strong> Upon successful completion of quality checks,{" "}
              <strong>further credit monitoring</strong> by the bureau was automatically
              stopped.
            </li>
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Acuity’s Advantage
          </h2>
          <p className="text-gray-700 mb-3">
            The project was completed with <strong>remarkable accuracy</strong> and met all
            SLA requisites. The key outcomes included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Manual FTE reduced by <strong>50%</strong></li>
            <li>Processing time per loan document reduced by <strong>98%</strong></li>
            <li>Applications processed per day increased by <strong>70%</strong></li>
            <li>Transaction accuracy enhanced by <strong>100%</strong></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Cognitive Process Automation Services (CPA) to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity’s <strong>Cognitive Process Automation (CPA)</strong> services are already
            trusted by many global clients. When combined with{" "}
            <strong>Robotic Process Automation (RPA)</strong>, our solutions reduce manual
            intervention, minimize risks, and deliver <strong>faster, more accurate</strong>{" "}
            results.
          </p>
          <p className="text-gray-700 mb-4">
            As a leader in <strong>Data Science Services</strong>, Nimble Acuity leverages AI,
            Cognitive Computing, and Machine Learning to build{" "}
            <strong>affordable, intelligent automation solutions</strong>. Our team of
            specialists ensures precision, efficiency, and scalability.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Do you have business areas that could benefit from CPA?{" "}
            <span className="text-blue-600">Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MortgageLQICaseStudy;
