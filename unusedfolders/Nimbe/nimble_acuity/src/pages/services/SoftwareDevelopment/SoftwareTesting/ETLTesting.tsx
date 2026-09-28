import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ETLTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ETL Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to high-quality ETL testing services provided by expert software testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ETL - Extract/Transform/Load - is a process that extracts data from a source system, transforms it into a consistent data type, and then loads the data into a single data repository. ETL testing is performed to ensure that any data that has been loaded from a source after transformation is accurate. It involves verifying the data at various stages between the source and destination. Data is usually extracted from the OLTP database, transformed into the required form to match the schema, and finally loaded into the data warehouse. ETL testing is ideal for companies dealing majorly with historical data such as financial, travel, etc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When implementing an Extract, Transform, and Load (ETL) system for business intelligence, the major risk lies in rushing a data warehouse into service without testing it thoroughly. **Nimble Acuity's** ETL testing process ensures that all your systems and data are tested systematically for bugs, errors, and vulnerabilities before the data is integrated and made available.
            </p>
          </div>

          {/* Our ETL Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ETL Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our highly talented team of software testers is well-trained to work on different technologies and testing environments. Some of the key ETL testing services we provide include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Source to Target Testing:</span> We check whether transformed data values are the expected values, ensuring data compatibility and preventing data loss.
              </li>
              <li>
                <span className="font-semibold">Production Validation Testing:</span> We ensure data is in the correct order when moved to production systems, maintaining the integrity of those systems.
              </li>
              <li>
                <span className="font-semibold">Testing for Application Upgrades:</span> We check if the data from an older repository is the same in the new application, which can be automatically generated to save time.
              </li>
              <li>
                <span className="font-semibold">Metadata Testing:</span> Our metadata testing involves data length checks, data type checks, and index/constraint checks to maintain control over your information systems.
              </li>
              <li>
                <span className="font-semibold">Data Completeness Testing:</span> We aggregate actual data between the source and the target to ensure all expected data is loaded correctly.
              </li>
              <li>
                <span className="font-semibold">Data Accuracy Testing:</span> We ensure that data is loaded and transformed correctly, following time-tested procedures to ensure complete data integrity.
              </li>
              <li>
                <span className="font-semibold">Data Transformation Testing:</span> We run multiple SQL queries to verify transformational rules for complex data transformations.
              </li>
              <li>
                <span className="font-semibold">Data Quality Testing:</span> We perform syntax and reference tests to avoid errors caused by incorrect data during business processes.
              </li>
              <li>
                <span className="font-semibold">GUI/Navigation Testing:</span> We check if the GUI aspects and navigation of the front end are functioning properly and provide a comprehensive report.
              </li>
              <li>
                <span className="font-semibold">Incremental ETL Testing:</span> We check the data integrity of new and old data and verify that updates and inserts are processed as expected.
              </li>
            </ul>
          </div>

          {/* ETL Bugs & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                Types of ETL Bugs
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-semibold">User Interface Bugs:</span> Associated with GUI elements like color and font.</li>
                <li><span className="font-semibold">Input-Output Bugs:</span> Application takes invalid values while rejecting valid ones.</li>
                <li><span className="font-semibold">Boundary Value Analysis Bugs:</span> Errors at minimum and maximum values.</li>
                <li><span className="font-semibold">Calculation Bugs:</span> Mathematical errors leading to incorrect final output.</li>
                <li><span className="font-semibold">Load Condition Bugs:</span> Issues preventing multiple users from using the app.</li>
                <li><span className="font-semibold">Race Condition Bugs:</span> System becomes unstable and may crash.</li>
                <li><span className="font-semibold">Equivalence Class Partitioning Bugs:</span> Invalid results or data types are thrown.</li>
                <li><span className="font-semibold">Version Control Bugs:</span> Occur during regression testing.</li>
                <li><span className="font-semibold">Hardware Bugs:</span> The device does not respond as expected.</li>
                <li><span className="font-semibold">Help Source Bugs:</span> Errors in help documents.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                Challenges Faced During ETL Testing
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The presence of incompatible and duplicate data.</li>
                <li>Data loss during the ETL process.</li>
                <li>The large volume and complexity of data.</li>
                <li>Lack of available business flow information.</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of ETL Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Performing ETL testing provides many benefits. It can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Extract or recover data from multiple sources simultaneously.</li>
              <li>Load data from heterogeneous sources into a single target or different targets.</li>
              <li>Extract required business data and load it into different targets in the desired format.</li>
              <li>Perform any type of data transformation as per business requirements.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ETL Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** provides high-quality ETL testing services, including data warehouse testing and data validation, following a streamlined and systematic process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2 font-semibold text-gray-800">Requirement Gathering:</p>
                <p className="mt-1 text-gray-700">We design the data model, define business flow, and evaluate reporting needs to understand the project's scope.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2 font-semibold text-gray-800">Data Source Validation:</p>
                <p className="mt-1 text-gray-700">We check data counts, table/column data types, and check keys, and delete duplicate data to ensure accuracy.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2 font-semibold text-gray-800">Test Case Designing:</p>
                <p className="mt-1 text-gray-700">We define ETL mapping scenarios, create SQL scripts, and validate the mapping document.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2 font-semibold text-gray-800">Source System Data Extraction:</p>
                <p className="mt-1 text-gray-700">We execute tests, identify bugs, and create reports. Every defect is detected, reported, fixed, and closed.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2 font-semibold text-gray-800">Transformation Logic Application:</p>
                <p className="mt-1 text-gray-700">We ensure all data is transformed to match the target schema and validate data flow, alignment, and threshold.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">06</span>
                <p className="mt-2 font-semibold text-gray-800">Loading of Data into Target Warehouse:</p>
                <p className="mt-1 text-gray-700">We check record counts before and after the data is moved and ensure invalid data is rejected.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">07</span>
                <p className="mt-2 font-semibold text-gray-800">Summary Report Creation:</p>
                <p className="mt-1 text-gray-700">We verify and finalize the layout, filters, and export functionality of the summary report for stakeholders.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">08</span>
                <p className="mt-2 font-semibold text-gray-800">Closure of Test:</p>
                <p className="mt-1 text-gray-700">In this final step, we perform the test closure and ensure all processes are complete.</p>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for ETL Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing ETL testing services to **Nimble Acuity** comes with its own set of benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Cost-effective Prices:** We provide high-quality services at competitive prices with quick turnaround times.</li>
              <li>**Quality:** Our testing engineers ensure complete adherence to strict quality standards and increase your testing coverage.</li>
              <li>**Experienced Team:** Our ETL testing team has years of experience in providing high-quality services.</li>
              <li>**Tools and Technologies:** Our team is trained to work with the latest ETL testing tools and technologies and is updated with best practices.</li>
              <li>**Independent Validation:** We provide independent verification and validation of your ETL process if required.</li>
              <li>**Immediate Access to Test Documentation:** Your developers receive immediate access to test documentation to study the results and gain a better understanding.</li>
              <li>**Efficiency:** We help you organize large data repositories in an efficient manner.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been providing ETL testing and software testing services to global clients for years. Our experience in working with several clients has provided us with the ability to understand different business models and provide the required ETL testing services customized to their needs. The applications we test are known to run smoothly without errors and provide high performance and efficiency gains.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you have any kind of ETL testing service requirement, feel free to get in touch with us or talk to one of our representatives and we will get back to you within 24 hours.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ETLTesting;