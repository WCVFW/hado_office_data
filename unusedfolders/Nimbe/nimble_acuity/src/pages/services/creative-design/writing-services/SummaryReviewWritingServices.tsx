import React from "react";
import CSmainmenu from "../CSmainmenu";

const SummaryReviewWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Summary and Review Writing Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          In today’s digital age, summaries and reviews are essential marketing tools. Nimble Auity provides professional summary and review writing services for online and offline use, helping you promote your products, services, or publications effectively.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Summary and Review Writing Services We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Book Summary Writing</li>
          <li>Book Review Writing</li>
          <li>Literary Review Writing</li>
          <li>Company Review Writing</li>
          <li>Executive Summary Writing</li>
          <li>Research Abstracts Writing</li>
          <li>Sports Review Writing</li>
          <li>Music Review Writing</li>
          <li>Movie Review Writing</li>
          <li>Hotels/Restaurant Review Writing</li>
          <li>Travel Review Writing</li>
        </ul>
      </div>

      {/* Process Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Summary and Review Writing Process</h2>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Scope Summarizing & Reviewing Work:</strong> Identify business and project goals.</li>
            <li><strong>Identify Timelines, Costs, and Team:</strong> Deploy copywriters, proofreaders, and project managers.</li>
            <li><strong>Comprehend Subject Matter:</strong> Understand audience, message, competition, and external factors.</li>
            <li><strong>Research Subject of Project:</strong> Conduct in-depth research from literary and non-literary sources.</li>
            <li><strong>Initiate Summarizing/Reviewing Work:</strong> Develop summaries and reviews based on project requirements.</li>
            <li><strong>Language and Quality Check:</strong> Perform quality checks and correct inaccuracies.</li>
            <li><strong>Upload Documents:</strong> Deliver final documents according to client requirements.</li>
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Outsourcing Summary and Review Writing Services to Nimble</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Highly qualified team of writers, native language experts, copywriters, proofreaders, and project managers.</li>
          <li>Structured outsourcing process ensuring transparency at every stage.</li>
          <li>Client-focused project management for maximum control.</li>
          <li>Strict security measures to ensure confidentiality.</li>
          <li>Access to related writing and editorial services.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Partner with Nimble for Summary and Review Writing
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Nimble Auity has been providing professional summary and review writing services for over 26 years. Gain access to skilled writers and project managers to help implement your strategic marketing plan effectively.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default SummaryReviewWritingServices;
