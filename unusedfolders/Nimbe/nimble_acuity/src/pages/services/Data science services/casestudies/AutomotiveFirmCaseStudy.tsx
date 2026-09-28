import React from "react";
import DSMainMenu from "../mainmenu";


const AutomotiveFirmCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Provided Digital Transformation to an African Automotive Firm
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Digital Transformation to an African Automotive Firm
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a <strong>renowned automotive company</strong> based in South
            Africa. With <strong>over 9 decades</strong> of experience, they specialize
            in <em>emergency roadside assistance</em> and also provide motor and
            travel-related services.
          </p>
        </section>

        {/* Client’s Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Client's Requirement
          </h2>
          <p className="text-gray-700">
            The client wanted a <strong>UiPath RPA solutions provider</strong> to{" "}
            <strong>automate emergency service dispatch</strong>. They needed a partner
            who could identify automation opportunities and increase process efficiency.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              The client was already behind schedule and wanted the project to{" "}
              <strong>start immediately</strong>.
            </li>
            <li>
              They required <strong>skilled RPA experts</strong> within a short
              turnaround time.
            </li>
            <li>
              The average <strong>dispatch time was very high</strong> and needed to be
              reduced.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            Our team designed a <strong>systematic RPA plan</strong> and deployed UiPath
            robots immediately to automate the dispatch process. This helped the client{" "}
            <strong>transition from manual systems to digital systems</strong>, reducing
            delays and improving efficiency.
          </p>
          <p className="text-gray-700">
            Using UiPath RPA, the client could <strong>allocate resources faster</strong>{" "}
            and manage emergency responses with minimal hassle.
          </p>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700 mb-3">
            The client reduced <strong>dispatch time by almost 50%</strong> and lowered
            staff workload by <strong>over 40%</strong>. They were extremely satisfied
            with the <strong>quality, speed, and cost-effectiveness</strong> of the
            solution.
          </p>
          <p className="text-gray-700">
            This successful automation empowered the client to{" "}
            <strong>focus on core activities</strong> while robots handled repetitive
            processes efficiently.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Robotic Process Automation Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a leading provider of <strong>UiPath RPA services</strong>{" "}
            in India and offers a wide range of <strong>data science solutions</strong>{" "}
            to global clients. With our experienced team, we deliver{" "}
            <strong>cost-effective, efficient, and scalable</strong> automation services.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for a reliable RPA partner?{" "}
            <span className="text-blue-600">Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AutomotiveFirmCaseStudy;
