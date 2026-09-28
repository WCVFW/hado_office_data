import React from "react";
import DSMainMenu from "../mainmenu";


const AutomotiveDigitalTransformationCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Global Navigation */}
      <DSMainMenu />

      {/* ✅ Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Provided Digital Transformation to an African Automotive Firm
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on UiPath RPA for Resource Dispatch Optimization
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a <strong>renowned automotive company</strong> based in 
            South Africa with over <strong>9 decades of experience</strong>. 
            They specialize in <em>emergency roadside assistance</em> and also 
            offer various motor and travel-related services.
          </p>
        </section>

        {/* Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Client's Requirement</h2>
          <p className="text-gray-700">
            The client sought a <strong>UiPath RPA solutions provider</strong> to 
            automate the <strong>dispatch of emergency service resources</strong>. 
            They wanted a partner who could identify automation opportunities and 
            enhance process efficiency.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              The client was already behind schedule and required an{" "}
              <strong>immediate project start</strong>.
            </li>
            <li>
              They needed highly skilled <strong>RPA experts</strong> on short notice.
            </li>
            <li>
              Reducing the <strong>average dispatch time</strong>, which was currently very high.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            Our team devised a <strong>systematic RPA plan</strong> and immediately 
            deployed UiPath robots to automate resource dispatch. This helped the client 
            transition from <strong>manual systems to modern digital systems</strong>, 
            reducing delays and boosting efficiency.
          </p>
          <p className="text-gray-700">
            Using UiPath, the client could <strong>allocate resources faster</strong> 
            and streamline emergency response without operational hassles.
          </p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Results</h2>
          <p className="text-gray-700 mb-3">
            The client achieved a <strong>50% reduction in dispatch time</strong> and 
            reduced staff workload by <strong>over 40%</strong>. 
            The UiPath RPA solution not only improved efficiency but also proved to be{" "}
            <strong>highly cost-effective</strong>.
          </p>
          <p className="text-gray-700">
            The client was delighted with both the <strong>quality</strong> and 
            <strong>speed of services</strong>, gaining significant improvements in 
            operational efficiency.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Robotic Process Automation Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            At Nimble Acuity, we deliver top-notch{" "}
            <strong>UiPath RPA solutions</strong> and a wide range of data 
            science services. With a team of experienced specialists, we 
            help businesses achieve <strong>digital transformation</strong> 
            quickly and efficiently.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for a cost-effective RPA partner?{" "}
            <span className="text-blue-600">Contact us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AutomotiveDigitalTransformationCaseStudy;
