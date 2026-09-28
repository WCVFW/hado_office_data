import React from "react";
import DSMainMenu from "../mainmenu";

const DataLakes: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          The Power of Data Lakes - Strategies, Solutions, and Best Practices for Enterprises
        </h1>
        <p className="max-w-4xl mx-auto text-lg">
          Unlock the full potential of structured and unstructured data by leveraging scalable, 
          flexible, and secure data lake solutions designed for modern enterprises.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Businesses create and use data lakes like never before. To make the most efficient use 
          of this volume of data, enterprises are resorting to data lakes — centralized repositories 
          for structured and unstructured data at scale. Unlike traditional data warehouses, data lakes 
          require no internal data organization, making them highly versatile for analytics, reporting, 
          and advanced machine learning.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Selecting Appropriate Data Lake Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Cloud Solutions",
              desc: "Amazon S3 with AWS Lake Formation, Microsoft Azure Data Lake Storage, and Google Cloud BigQuery offer scalable, secure, and maintenance-friendly data lake environments.",
            },
            {
              title: "Open-Source Solutions",
              desc: "Apache Hadoop with HDFS and YARN supports distributed storage and real-time analytics. Apache Hive enables queries and analytics within the Hadoop ecosystem.",
            },
            {
              title: "Unified Platforms",
              desc: "Cloudera Data Platform (CDP) integrates data warehousing, ML, and analytics, while Databricks Lakehouse Platform merges the strengths of data lakes and warehouses.",
            },
          ].map((solution, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Best Practices in Data Lake Management
        </h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Designing a successful data lake requires aligning business goals with 
            technical execution. Begin with defining objectives — whether for real-time 
            analytics, machine learning, or simple data storage. Knowing limitations helps 
            shape architecture and expectations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Data Stewardship & Governance:</strong> Enforce high data quality, provide rich 
              metadata, and implement strong security policies including GDPR compliance.
            </li>
            <li>
              <strong>Data Ingestion & Integration:</strong> Strategize between real-time, batch, or hybrid 
              ingestion using ETL/ELT pipelines and distributed systems like Apache Spark.
            </li>
            <li>
              <strong>Data Cataloging:</strong> Establish searchable catalogs for dataset tracking and 
              self-service provisioning.
            </li>
            <li>
              <strong>Lifecycle Management:</strong> Define retention, archiving, and deletion policies 
              to optimize long-term value and efficiency.
            </li>
          </ul>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Conclusion</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-center">
          By adopting the right strategies, solutions, and best practices, enterprises 
          can design and implement powerful data lakes that unlock actionable insights, 
          drive innovation, and achieve business goals. Data lakes are not just storage 
          repositories — they are enablers of growth and transformation.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Leverage the Power of Data Lakes</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Transform raw data into valuable business insights with the right data lake 
          strategy. Partner with us to optimize your enterprise data ecosystem.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataLakes;
