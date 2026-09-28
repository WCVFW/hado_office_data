import React from "react";
import DSMainMenu from "../mainmenu";


const OpenSourceAnalyticsWorkbenchCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Architected an Open Source Analytics Workbench for a Bank
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Open Source Analytics Workbench Creation
          </p>
        </header>

        {/* Client & Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Client & Requirements
          </h2>
          <p className="text-gray-700">
            The client is a <strong>leading banking organization</strong> seeking a data
            science partner to build an{" "}
            <strong>open source analytics workbench</strong> using their existing{" "}
            <strong>structured and unstructured data</strong>. They had about{" "}
            <strong>70 TB of structured data</strong> for operational reporting and SAS
            analytics, with no support for unstructured data.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              The analytics team was dependent on{" "}
              <strong>SAS with Oracle Operational Data Store</strong> running on
              proprietary storage systems.
            </li>
            <li>
              Managing <strong>70 TB of data</strong> was making the system{" "}
              <strong>slow and costly</strong>.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            After assessing the client’s needs, our{" "}
            <strong>skilled data science team</strong> implemented the following solution:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Architected an <strong>open source analytics workbench</strong> on a{" "}
              <strong>Hadoop commodity cluster</strong>.
            </li>
            <li>
              Integrated <strong>unstructured and streaming data</strong> seamlessly into
              the system.
            </li>
            <li>
              Ensured <strong>no compromises</strong> in{" "}
              <strong>performance, security, and governance</strong>.
            </li>
          </ul>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The client was <strong>delighted</strong> with the outcome. They appreciated
            the <strong>high quality</strong> and <strong>cost-effectiveness</strong> of
            our solution, which enabled faster and more scalable analytics. Impressed by
            the results, the client engaged us for further{" "}
            <strong>technology transformation projects</strong> to enhance reporting and
            analytics.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Get Cost-effective Data Science Services at Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a trusted provider of{" "}
            <strong>big data lakes solutions, consulting,</strong> and a wide range of{" "}
            <strong>data science services</strong> to global clients. With our{" "}
            <strong>skilled and experienced team</strong>, we deliver scalable,
            cost-effective, and reliable solutions tailored to client needs.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Looking for an <strong>efficient and reliable</strong> data science partner?
            <span className="text-blue-600"> Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default OpenSourceAnalyticsWorkbenchCaseStudy;
