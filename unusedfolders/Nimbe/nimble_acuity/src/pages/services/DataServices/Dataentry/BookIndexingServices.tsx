import React from "react";
import DSmainmenu from "../DSmainmenu";

const BookIndexingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Book Indexing Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Learn how to archive and index your books and texts properly with expert advice and services delivered by professionals. Prices start at{" "}
          <span className="font-semibold">$6/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity provides reliable book indexing services to organize and archive your literary works in a systematic manner. 
          We specialize in indexing textbooks, monographs, trade publications, and more. Our professional team ensures accurate and high-quality indexing to help publishers and authors focus on other important tasks.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Book Indexing Services That We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Medical Indexing:</strong> Covers pharmacology, rheumatology, cardiology, plastic surgery, oncology, and more.
          </li>
          <li>
            <strong>Legal Indexing:</strong> Professional indexing for legal books, papers, and publications.
          </li>
          <li>
            <strong>Academic Indexing:</strong> Indexing of research papers, academic books, and literary publications for accurate referencing.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Book Indexing Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Affordable Pricing:</strong> Pay only for the services you need.</li>
          <li><strong>High-quality Results:</strong> Rigorous quality checks ensure accuracy.</li>
          <li><strong>Quick Turnaround Time:</strong> Fast delivery without compromising quality.</li>
          <li><strong>Multiple Formats Supported:</strong> Output delivered in your preferred format.</li>
          <li><strong>Trained Professionals:</strong> Experienced team dedicated to delivering the best results.</li>
          <li><strong>Sophisticated Technology:</strong> Advanced tools for optimal results at minimized costs.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Auckland-based Consulting Firm:</strong> Accurate and reliable data extraction services creating comprehensive client profiles.
          </li>
          <li>
            <strong>Missouri-based Online Store:</strong> High-quality online data entry services at cost-effective rates for large volumes of data.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Choose Nimble Acuity as Your Book Indexing Partner
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          We offer skilled professionals and robust indexing solutions to ensure the highest quality outcomes. Contact us today to leverage our expertise for efficient book indexing.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BookIndexingServices;
