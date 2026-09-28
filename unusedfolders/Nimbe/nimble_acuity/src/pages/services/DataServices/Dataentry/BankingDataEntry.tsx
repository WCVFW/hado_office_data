import React from "react";
import DSmainmenu from "../DSmainmenu";

const BankingDataEntry: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Banking Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Obtain 100% reliable and accurate banking data entry services that help
          financial organizations maintain error-free operations. Prices start at{" "}
          <span className="font-semibold">$7 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          The financial services industry produces vast amounts of structured and
          unstructured data daily. Banking data entry is critical for backend
          management and requires domain knowledge and expertise.
        </p>
        <p>
          Nimble Acuity (Nimble Acuity) provides robust banking data entry services, ensuring
          compliance, accuracy, and efficiency. With over 15 years of experience
          serving clients in the financial sector, we have the resources and
          technology to meet your data entry needs.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Banking Data Entry Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Online Data Entry Services:</strong> Manage your bank’s CRM
            and ERP platforms, online databases, and web servers efficiently.
          </li>
          <li>
            <strong>Offline Data Entry Services:</strong> Convert paper-based
            slips, bills, coupons, and records into CSV, Excel, Access, or
            custom database formats.
          </li>
          <li>
            <strong>Data Entry from Images:</strong> Extract and compile data from
            image formats such as GIF, BMP, PDF, and JPG into your preferred format.
          </li>
          <li>
            <strong>Data Entry from Documents:</strong> Organize and store data from
            documents such as legal forms, applications, and professional files.
          </li>
          <li>
            <strong>Online Bills & Forms Entry:</strong> Compile invoices, cash
            receipts, electronic bills, and other daily entries.
          </li>
          <li>
            <strong>Questionnaire/Survey Data Entry:</strong> Extract and compile
            survey and questionnaire data for easy access and analysis.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Banking Data Entry Process
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li><strong>Documents Gathering:</strong> Receive scanned or hard copies via secured FTP.</li>
          <li><strong>Assignment of Work:</strong> Assign a dedicated project manager and team.</li>
          <li><strong>Data Cleansing:</strong> Proofread and eliminate unnecessary data.</li>
          <li><strong>Data Entry:</strong> Compile the data in the desired format.</li>
          <li><strong>Quality Check:</strong> Team lead performs the first level quality review.</li>
          <li><strong>Modifications:</strong> Incorporate changes and perform stringent quality checks.</li>
          <li><strong>Client Feedback:</strong> Adjust data based on client suggestions.</li>
          <li><strong>Submission:</strong> Deliver finalized, verified data in the chosen format.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Hire Nimble Acuity for Banking Data Entry Services?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Skilled professionals with deep banking domain expertise</li>
          <li>Standardized approach to ensure quality and timelines</li>
          <li>Scalable solutions to handle bulk work efficiently</li>
          <li>24/7 availability across global offices</li>
          <li>99.99% accuracy rate with multi-level quality checks</li>
          <li>Cost-effective solutions compared to in-house teams</li>
          <li>Strict adherence to data security and compliance protocols</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Auckland-based Consulting Firm:</strong> Provided reliable and
            cost-effective data extraction services for their financial operations.
          </li>
          <li>
            <strong>UK-based Software Firm:</strong> Converted large volumes of
            handwritten PDF images to Excel, saving 60% of total costs.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Banking Data Entry Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity to get accurate, ISO-certified banking data entry
          services with a dedicated team of experts. Save cost and time while
          ensuring 100% error-free operations.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BankingDataEntry;
