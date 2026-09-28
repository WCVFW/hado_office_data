import React from "react";
import DSmainmenu from "../DSmainmenu";

const RemoteDataEntry: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Remote Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Connect to the best data entry operators in the world and ensure your
          datasets are accurate at prices starting at <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Remote data entry has become the new norm, allowing businesses to
          leverage global talent efficiently. Nimble Acuity connects you with
          skilled operators worldwide, helping you meet all your data entry
          requirements.
        </p>
        <p>
          Our VPN-enabled remote services cover textual, numeric, image, eBook,
          insurance, medical, legal, product, scanned image, and survey form
          data entry with accuracy and speed.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Remote Data Entry Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Textual & Numeric Data Entry:</strong> Convert paper or
            PDF documents into digital formats.
          </li>
          <li>
            <strong>Image Data Entry:</strong> Convert or edit scanned/normal
            images with high accuracy.
          </li>
          <li>
            <strong>eBook Data Entry:</strong> Collect, cleanse, and merge data
            for publications.
          </li>
          <li>
            <strong>Insurance Data Entry:</strong> Handle applications, quotes,
            proposals, and claims.
          </li>
          <li>
            <strong>Medical Claims Data Entry:</strong> Maintain EMR, lab
            records, and diagnosis reports.
          </li>
          <li>
            <strong>Medical Billing:</strong> Key in payment postings and EOBs
            accurately.
          </li>
          <li>
            <strong>Legal Data Entry:</strong> Database creation, attorney
            research, and document entry services.
          </li>
          <li>
            <strong>Product Data Entry:</strong> Add/update product details,
            images, specifications, and categories.
          </li>
          <li>
            <strong>Scanned Image Data Entry:</strong> Extract, index, correct,
            and fill image data.
          </li>
          <li>
            <strong>Survey Forms Data Entry:</strong> Accurate online and
            offline questionnaire processing.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Remote Data Entry Process
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Requirement Gathering:</strong> Understand project scope and
            niche-specific needs.
          </li>
          <li>
            <strong>SLA Signing:</strong> Define service expectations,
            timelines, and quality parameters.
          </li>
          <li>
            <strong>Team Creation:</strong> Select skilled professionals
            according to project requirements and time zones.
          </li>
          <li>
            <strong>Project Initiation:</strong> Execute project with
            reserve employees for urgent needs.
          </li>
          <li>
            <strong>Review:</strong> Conduct random quality checks by niche
            experts.
          </li>
          <li>
            <strong>Submission:</strong> Deliver the project and incorporate
            client feedback.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing Remote Data Entry Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Cost-effective service leveraging global talent</li>
          <li>Complete data security with backups and audits</li>
          <li>High accuracy with end-to-end quality checks</li>
          <li>Access to skilled operators worldwide</li>
          <li>Wide experience across multiple industries</li>
          <li>Customized service strategy per project</li>
          <li>Use of advanced technologies like OCR and automation</li>
          <li>24/7 round-the-clock service across time zones</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Remote Data Entry Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          With 26+ years of experience and offshore delivery centers, we provide
          reliable remote data entry services to businesses worldwide. Tailored
          VPN solutions ensure secure, accurate, and timely data entry for your
          organization.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RemoteDataEntry;
