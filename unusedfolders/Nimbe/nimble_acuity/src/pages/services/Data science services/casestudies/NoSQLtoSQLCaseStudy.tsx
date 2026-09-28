import React from "react";
import DSMainMenu from "../mainmenu";


const NoSQLtoSQLCaseStudy: React.FC = () => {
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />

      {/* ✅ Case Study Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Nimble Acuity Designed a Plugin to Convert NoSQL to SQL for a US Restaurant Chain using Predictive Algorithm
          </h1>
          <p className="text-lg text-gray-600">
            Case Study on Plugin Design Using Predictive Algorithm
          </p>
        </header>

        {/* Client & Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            The Client & Requirements
          </h2>
          <p className="text-gray-700">
            The client is a <strong>leading US-based restaurant chain</strong>, one of the
            largest dining chains with outlets spread across several cities. They wanted a
            <strong> data science partner</strong> who could design a{" "}
            <strong>plugin to convert NoSQL to SQL</strong> using predictive algorithms
            for better data analysis and insights.
          </p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Handling a <strong>steep increase in unstructured data</strong> such as text
              and multimedia, requiring scalable storage and retrieval solutions.
            </li>
            <li>
              <strong>NoSQL databases</strong> support only limited queries, making it
              difficult to build predictive models. Conversion to{" "}
              <strong>SQL databases</strong> was necessary for easier data analysis.
            </li>
          </ul>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Solution</h2>
          <p className="text-gray-700 mb-3">
            After a detailed analysis of the client’s requirements and challenges, our{" "}
            <strong>data science team</strong> developed a robust solution:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Designed a <strong>generic plugin</strong> capable of converting{" "}
              <strong>NoSQL to SQL</strong>, independent of schema or domain.
            </li>
            <li>
              Built <strong>predictive algorithms</strong> that integrate seamlessly with
              SQL-based data for advanced analytics.
            </li>
            <li>
              Leveraged multiple technologies including{" "}
              <strong>Python, HBase, R, MapReduce, MongoDB, Hadoop</strong>, and more.
            </li>
          </ul>
        </section>

        {/* Result */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">The Result</h2>
          <p className="text-gray-700">
            The client was <strong>extremely delighted</strong> with the results. The
            solution enabled <strong>efficient customer segmentation</strong> and was{" "}
            <strong>flexible enough</strong> to accommodate future business updates. The
            plugin helped the client analyze large volumes of unstructured data with ease,
            unlocking new business insights.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Hire Nimble Acuity for Highly Efficient Data Science Solutions
          </h2>
          <p className="text-gray-700 mb-4">
            Nimble Acuity is a <strong>leading provider</strong> of{" "}
            <strong>data science and big data solutions</strong>, offering cost-effective
            and scalable services to global clients. Our{" "}
            <strong>expert data scientists and algorithm developers</strong> quickly
            understand client needs and deliver tailored solutions.
          </p>
          <p className="text-gray-700 font-medium">
            📩 Looking for efficient <strong>big data lakes and predictive analytics</strong>{" "}
            solutions? <span className="text-blue-600">Contact us today!</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default NoSQLtoSQLCaseStudy;
