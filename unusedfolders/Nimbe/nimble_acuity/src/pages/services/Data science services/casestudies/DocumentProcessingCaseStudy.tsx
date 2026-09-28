import React from "react";
import DSMainMenu from "../mainmenu";


const DocumentProcessingCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Developed a Big Data Platform for Document Processing Automation
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Document Processing Automation Platform Development
          </p>
        </header>

        {/* Client & Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Client & Their Requirements
          </h2>
          <p className="text-gray-700">
            The client is a <strong>leading global bank</strong> serving customers
            worldwide. They needed a <strong>big data-based platform</strong> to{" "}
            <strong>automate document processing</strong>. Prospective customers submitted
            bank statements which were manually verified, and the data was then entered
            into spreadsheets. The client wanted to automate this time-consuming process.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Manual processing of <strong>30–40 page documents</strong> took{" "}
              <strong>8–9 hours</strong> on average and needed significant reduction.
            </li>
            <li>
              Lack of <strong>analytics and dashboards</strong> limited the ability to
              analyze applicant credibility in detail.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            After analyzing the requirements, our{" "}
            <strong>data science experts</strong> implemented the following solution:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Developed a <strong>big data-based platform</strong> to automate the entire
              document processing workflow.
            </li>
            <li>
              Reduced document processing time for{" "}
              <strong>30–40 page documents to under 30 seconds</strong>, compared to
              8–9 hours manually.
            </li>
            <li>
              Leveraged <strong>Cloudera Hadoop Cluster</strong> to optimize speed and
              efficiency.
            </li>
          </ul>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The client was <strong>highly satisfied</strong> with the system. The
            automation reduced document processing time drastically and enabled seamless
            handling of <strong>scanned PDFs, e-statements, and financial documents</strong>
            . The platform generated outputs in <strong>MS Excel</strong> and a{" "}
            <strong>summary workbook</strong>, improving accuracy in measuring{" "}
            <strong>credit-worthiness</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact High-quality Document Processing Automation Services
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a trusted provider of{" "}
            <strong>big data lakes solutions, consulting,</strong> and a wide range of{" "}
            <strong>data science services</strong>. With experience across diverse
            domains, our <strong>skilled experts</strong> can understand and execute your
            requirements with precision.
          </p>
          <p className="text-gray-700 font-medium">
            🚀 Looking for an <strong>efficient, reliable, and cost-effective</strong>{" "}
            data science service provider?{" "}
            <span className="text-blue-600">Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default DocumentProcessingCaseStudy;