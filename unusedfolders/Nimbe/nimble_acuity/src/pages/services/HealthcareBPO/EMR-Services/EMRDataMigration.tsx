import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMRDataMigration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Data Migration Services
            </h2>
            <p className="text-lg text-gray-600">
              Move your historical data from legacy systems to state-of-the-art EMR solutions <strong>efficiently and securely</strong>, starting at just <strong>$1280 per FTE per month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your old EMR struggling to keep up with modern demands, or are you looking for enhanced security and performance? EMR data migration is a tedious and skill-intensive task that requires profiling, cleansing, and validating data to ensure accuracy. Handling this in-house often becomes costly and resource-intensive—making outsourcing a smarter option.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over <strong>26 years of expertise</strong>, <strong>nimble acuity</strong> is a leading provider of EMR data migration services. We help healthcare organizations prepare and manage data before, during, and after migration, ensuring zero data loss and seamless transitions.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Data Migration Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Migration from Legacy to Latest EHR:</strong> Smooth transition from outdated EMR systems to modern solutions with speed and precision.</li>
              <li><strong>Data Consolidation:</strong> Combine patient data from multiple legacy systems into a centralized repository for better accessibility.</li>
              <li><strong>Archiving Integration:</strong> Append fresh, validated data to existing archives via secure APIs and authentication.</li>
              <li><strong>Data Organization & Indexation:</strong> Streamlined search and retrieval of historical data through structured sorting and indexing.</li>
              <li><strong>Processing & Validation:</strong> Comprehensive filtering, formatting, and validation to ensure data accuracy post-migration.</li>
              <li><strong>Quality Control & Auditing:</strong> Automated and manual audits to guarantee data integrity.</li>
              <li><strong>Dashboard Creation:</strong> Interactive dashboards with charts, graphs, and reports for clinicians and administrators.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EMR Data Migration Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Technical Review:</strong> Assess legacy systems and feasibility of migration.</li>
              <li><strong>Data Discovery & Assessment:</strong> Explore and analyze existing datasets for migration planning.</li>
              <li><strong>Extract, Load & Validate:</strong> Carefully move data into the new EMR and validate accuracy.</li>
              <li><strong>Output Verification:</strong> Reassess migrated data to ensure no corruption or errors.</li>
              <li><strong>Reporting & Feedback:</strong> Provide transparent updates and incorporate client feedback.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for EMR Data Migration?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Custom-Priced Solutions:</strong> Affordable, tailored packages designed to fit your budget.</li>
              <li><strong>High-Quality Services:</strong> Strict protocols to ensure accuracy and compliance throughout the process.</li>
              <li><strong>Data Security:</strong> ISMS-compliant with robust safeguards for sensitive patient data.</li>
              <li><strong>ISO Certified:</strong> Accredited ISO 9001:2015 provider with proven quality standards.</li>
              <li><strong>Quick Turnaround:</strong> Deadline-driven delivery with minimal disruption to your practice.</li>
              <li><strong>Robust Infrastructure:</strong> Scalable systems to handle demanding migration workloads.</li>
              <li><strong>24/7 Support:</strong> Always-available global support team with advanced call center tools.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                Delivered charge and patient demographics entry for a Georgia-based client, processing <strong>1200 claims monthly</strong> across 4 practices within tight budgets.
              </li>
              <li>
                Provided charge and demographic entry using Kareo software for a US-based client, maintaining <strong>98–99% accuracy</strong> with 24-hour turnaround.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Data Migration Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>26+ years of experience</strong>, <strong>nimble acuity</strong> offers unmatched EMR data migration services that improve efficiency, ensure compliance, and reduce operational risks for healthcare practices worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get secure, cost-effective, and reliable EMR data migration services tailored to your practice.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default EMRDataMigration;
