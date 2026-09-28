import React from "react";
import DSMainMenu from "../mainmenu";


const HighValueTransactionsCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Identified High Value Transaction Parties for a Bank
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on High Value Transaction Parties Identification for a Bank
          </p>
        </header>

        {/* Client & Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Client & Requirements
          </h2>
          <p className="text-gray-700">
            The client is a <strong>leading global bank</strong> with a long-standing
            reputation. They wanted to identify <strong>key customer accounts</strong>{" "}
            executing <strong>high-value transactions</strong>, with the aim of targeting
            them as potential clients for business growth.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Limited availability of <strong>third-party information</strong>, making it
              necessary to augment data from transaction details.
            </li>
            <li>
              Requirement to <strong>collate information</strong> from multiple sources
              including web data and transaction logs.
            </li>
            <li>
              Need to represent the aggregated information in{" "}
              <strong>graph format</strong> for easy client-side analysis.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            After carefully analyzing the requirements, our{" "}
            <strong>data science experts</strong> designed a comprehensive solution:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Augmented <strong>transaction data</strong> with third-party details from the
              web.
            </li>
            <li>
              Extracted key annotators including{" "}
              <strong>
                establishment name, personnel size, company value, founding date, and
                contact details
              </strong>
              .
            </li>
            <li>
              Represented the data in an <strong>interactive graph</strong> for quick
              identification of high-value clients.
            </li>
            <li>
              Leveraged <strong>Hadoop</strong> for large-scale data augmentation and{" "}
              <strong>Neo4j</strong> for graph analytics.
            </li>
          </ul>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The client was <strong>extremely satisfied</strong> with the results. They were
            able to <strong>identify and approach potential clients</strong> more
            effectively, which contributed to <strong>increased revenue</strong> and
            long-term retention of their <strong>net assets</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Nimble Best Big Data Lake Solutions to Nimble Acuity
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a <strong>leading provider</strong> of{" "}
            <strong>big data lakes solutions and consulting services</strong>, serving
            clients across diverse domains. Our{" "}
            <strong>skilled data scientists</strong> are trained to analyze and manage
            complex requirements with precision and efficiency.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for a reliable, efficient, and cost-effective{" "}
            <strong>big data consulting partner</strong>?{" "}
            <span className="text-blue-600">Get in touch with us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default HighValueTransactionsCaseStudy;
