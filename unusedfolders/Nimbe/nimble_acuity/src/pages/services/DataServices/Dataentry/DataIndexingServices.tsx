import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataIndexingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Indexing Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to high-quality solutions for data management at
          cost-effective rates from our indexing experts. Prices start at{" "}
          <span className="font-semibold">$6/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity (Nimble Acuity) provides reliable data indexing services to
          clients globally. If you struggle with organizing and indexing your
          data, our experts can handle it efficiently so you can focus on
          business growth. We provide cost-effective, high-quality solutions
          that ensure your data is organized and easily accessible.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Data Indexing Solutions
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Text Indexing:</strong> Efficient and effective solutions
            to manage and organize your data consistently.
          </li>
          <li>
            <strong>Data Backup:</strong> Comprehensive backup solutions using
            best tools and techniques to ensure your data is safe and accessible.
          </li>
          <li>
            <strong>Document Conversion:</strong> Convert and archive all types
            and formats of documents accurately.
          </li>
          <li>
            <strong>Bookmarking Services:</strong> Organize and bookmark
            important business data efficiently for quick access.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Data Management and Indexing Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Affordable Pricing:</strong> Highly cost-effective services for maximum ROI.</li>
          <li><strong>High-Quality Services:</strong> End-to-end QC checks ensure accuracy and reliability.</li>
          <li><strong>Quick Turnaround Time:</strong> Fast delivery without compromising quality.</li>
          <li><strong>Information Security:</strong> ISO-certified processes to keep your data safe.</li>
          <li><strong>Robust Infrastructure:</strong> Equipped with the latest tools and technology for high-quality output.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Auckland-based Consulting Firm:</strong> Reliable and accurate data extraction services creating comprehensive profiles of potential clients.
          </li>
          <li>
            <strong>Missouri-based Online Store:</strong> High-quality online data entry services at cost-effective rates for large volumes of data.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Choose Nimble Acuity as Your Data Indexing Partner
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          We work as partners for our clients to provide high-quality indexing
          solutions, helping your data management processes function better.
          Contact us today to learn how to organize and manage your data
          efficiently.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataIndexingServices;
