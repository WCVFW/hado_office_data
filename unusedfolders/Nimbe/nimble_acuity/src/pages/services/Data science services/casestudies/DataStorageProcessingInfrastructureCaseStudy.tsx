import React from "react";
import DSMainMenu from "../mainmenu";


const DataStorageProcessingInfrastructureCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Created a Data Storage and Processing Infrastructure for a Banking Group
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Data Storage Creation and Processing Infrastructure
          </p>
        </header>

        {/* Client & Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Client & Their Requirements
          </h2>
          <p className="text-gray-700">
            The client is a <strong>leading Indian banking group</strong> and one of the{" "}
            <strong>largest in the world</strong>. They needed a{" "}
            <strong>unified and centralized data storage and processing infrastructure</strong>{" "}
            capable of handling vast amounts of data from multiple sources. This system
            would become the one-stop source for{" "}
            <strong>Analytics and Business Intelligence</strong> needs.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Challenges
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Managing <strong>huge volumes of incoming data</strong> efficiently to ensure
              optimal results.
            </li>
            <li>
              Ensuring <strong>privacy, compliance, and regulatory requirements</strong>{" "}
              were fully met.
            </li>
            <li>
              Providing the <strong>best experience</strong> to the bank’s customers while
              handling sensitive data.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            Our team conducted a <strong>detailed analysis</strong> of the client’s data
            ecosystem and designed a <strong>prescriptive roadmap</strong> to leverage Big
            Data over the next three years. Key steps included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Developed a <strong>centralized and unified data processing & storage
              infrastructure</strong> serving as the single point of contact for all data
              sources.
            </li>
            <li>
              Built the system to act as a <strong>single source</strong> for all{" "}
              <strong>business intelligence and analytics requirements</strong>.
            </li>
            <li>
              Prepared <strong>RFP/Tender documents</strong> for Big Data implementation,
              including <strong>bank-specific metrics</strong> for measuring big data
              effectiveness.
            </li>
          </ul>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The solution enabled the client to <strong>evaluate RFP responses</strong> and
            identify the right big data partners. Once fully implemented, the bank will
            possess one of the <strong>largest, most powerful, and cost-effective Big Data
            Lakes</strong> in the global banking sector.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Big Data Lakes Solutions & Consulting to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a <strong>leading provider</strong> of big data lakes
            solutions, consulting, and a range of other{" "}
            <strong>data science services</strong>. With deep expertise across multiple
            domains, our <strong>skilled data science experts</strong> can design and
            implement scalable, cost-effective, and reliable solutions tailored to client
            needs.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Looking for an <strong>efficient, reliable, and quick</strong> data science
            partner? <span className="text-blue-600">Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataStorageProcessingInfrastructureCaseStudy;
