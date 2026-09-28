import React from "react";
import DSMainMenu from "../mainmenu";

const DataEngineering: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Addressing Complex Data Issues - Advanced Strategies in Data Engineering
        </h1>
        <p className="max-w-4xl mx-auto text-lg">
          Overcome challenges in data management, fidelity, and retrieval with advanced strategies 
          that empower organizations to harness data for creativity, innovation, and competitiveness.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          The necessity for real-time data processing and the need to work with 
          diverse types of data presents organizations with unique challenges. 
          Competent data engineering provides the foundation to cope with these 
          challenges and ensures enterprises can maximize the value of their 
          data assets.
        </p>
      </section>

      {/* Data Ingestion and Integration */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Data Ingestion and Integration Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "ETL / ELT Processes",
              desc: "Extract-Transform-Load (ETL) and Extract-Load-Transform (ELT) enable businesses to extract raw data, transform it, and load it into a data warehouse for analytics.",
            },
            {
              title: "API Integrations",
              desc: "APIs allow real-time synchronization of customer and business data, ensuring consistency across platforms. CRM systems like Salesforce use APIs for efficient operations.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storage & Databases */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Data Storage and Management Techniques
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Cloud Storage:</strong> AWS S3, Google Cloud Storage, and Azure Blob Storage 
            offer scalability, cost-efficiency, and disaster recovery with tiered strategies.
          </li>
          <li>
            <strong>Database Systems:</strong> Relational databases like Oracle and MySQL handle 
            structured data, while NoSQL databases like MongoDB and Cassandra excel with 
            unstructured, high-velocity data.
          </li>
          <li>
            <strong>Modern Databases:</strong> Amazon Aurora provides advanced indexing, memory 
            management, and horizontal scaling for performance.
          </li>
          <li>
            <strong>Partitioning & Sharding:</strong> Techniques to distribute data loads evenly across 
            servers, boosting scalability and query performance.
          </li>
        </ul>
      </section>

      {/* Data Preparation */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Data Preparation and Manipulation
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Batch Processing",
              desc: "Hadoop HDFS and MapReduce enable parallel computing for handling large-scale distributed data efficiently.",
            },
            {
              title: "Stream Processing",
              desc: "Apache Kafka and Flink process real-time data streams with consistency and reliability for instant insights.",
            },
            {
              title: "Data Cleaning",
              desc: "Tools like Trifacta and OpenRefine remove redundancies, standardize formats, and ensure high-quality data for analytics.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Orchestration */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Data Orchestration and Automation
        </h2>
        <p className="text-gray-700 mb-6">
          Efficient orchestration tools streamline workflows and minimize human error. 
          Airbnb, for instance, leverages Apache Airflow to orchestrate data pipelines.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Apache Airflow – pipeline orchestration</li>
          <li>Prefect – process automation and monitoring</li>
        </ul>
      </section>

      {/* Scalability */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Ensuring Scalability and Performance
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Load Balancing:</strong> Tools like NGINX and HAProxy ensure high availability and 
            reliability by distributing workloads.
          </li>
          <li>
            <strong>Caching:</strong> Redis and Memcached retain frequently accessed data in memory 
            for faster retrieval and responsiveness.
          </li>
          <li>
            <strong>Parallel Processing:</strong> Apache Spark and Dask enable high-performance, 
            parallelized computations across data sets.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">The Conclusion</h2>
        <p className="max-w-4xl mx-auto text-gray-700">
          Data engineering continues to evolve with innovations like quantum computing 
          and edge AI. With the right strategies and expert teams, organizations can 
          ensure compliance, performance, and innovation while tackling today’s 
          data challenges effectively.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Solve Your Data Challenges?
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Transform your data engineering processes with advanced strategies, tools, 
          and expert guidance. Contact us today to start your journey toward 
          smarter data solutions.
        </p>
        <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataEngineering;
