import React from "react";
import DSMainMenu from "../mainmenu";


const HealthcarePortfolioCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Helped a Healthcare Company to Increase Their Service Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Increasing Service Portfolio to a Healthcare Company
          </p>
        </header>

        {/* Client */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Client</h2>
          <p className="text-gray-700">
            The client is a <strong>leading healthcare service provider</strong> in the
            United Kingdom. They offer <em>corporate services</em> to healthcare
            industry clients and also support <strong>back-office operations</strong>{" "}
            including accounting, finance, innovation, and technology services.
          </p>
        </section>

        {/* Client’s Requirement */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Client's Requirement
          </h2>
          <p className="text-gray-700">
            The client was looking for a <strong>reliable RPA partner</strong> who could
            implement automation to <strong>improve processes, drive quality</strong>,
            expand their <strong>service portfolio</strong>, and{" "}
            <strong>reduce costs</strong>.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Hiring <strong>experienced RPA experts</strong> within a short time frame.
            </li>
            <li>
              The client was <strong>running behind schedule</strong> and wanted the
              project to begin immediately.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Solution</h2>
          <p className="text-gray-700 mb-3">
            Our team devised a <strong>streamlined RPA plan</strong>. We helped the
            client deploy a <strong>UiPath robot</strong> that reduced manpower needs and
            scaled their services efficiently. This allowed them to{" "}
            <strong>save time and focus on core activities</strong>.
          </p>
          <p className="text-gray-700">
            The client was running <strong>over 850 financial processes</strong>{" "}
            including cash flow, debt collection, and invoice payments. With RPA, all of
            these processes were automated and completed in{" "}
            <strong>less than 5 hours</strong>.
          </p>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700 mb-3">
            The client was <strong>extremely satisfied</strong> with the outcomes. They
            can now deploy a new robot within <strong>8 weeks</strong> compared to{" "}
            <strong>16 weeks</strong> earlier. This improvement allowed them to{" "}
            <strong>redirect resources</strong> toward other essential business areas.
          </p>
          <p className="text-gray-700">
            The project was not only a success in terms of{" "}
            <strong>quality and efficiency</strong> but also{" "}
            <strong>highly cost-effective</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble UiPath RPA Services to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a <strong>leading UiPath RPA service provider</strong>,
            offering a wide range of <strong>data science services</strong> to clients
            worldwide. Our team of <strong>experienced RPA experts</strong> ensures{" "}
            <strong>efficient, reliable, and scalable</strong> solutions.
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

export default HealthcarePortfolioCaseStudy;
