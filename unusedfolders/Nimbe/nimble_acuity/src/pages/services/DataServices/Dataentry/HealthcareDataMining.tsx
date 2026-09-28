import React from "react";
import DSmainmenu from "../DSmainmenu";

const HealthcareDataMining: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Healthcare Data Mining Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Develop business intelligence with our comprehensive healthcare data
          mining, data collection, analytics, and research services. Prices
          start at just <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Amplify the performance and quality of your healthcare services by
          translating biomedical data into actionable insights with healthcare
          data mining solutions. Our experts analyze healthcare transactions,
          mining data from EHR, EMR, insurance claims, and imaging databases.
        </p>
        <p>
          Outsourcing healthcare data mining services to us can help you
          discover better treatments and practices for patients. Our teams use
          proven data extraction techniques to deliver accurate, timely results.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Healthcare Data Mining Services
        </h2>
        <ul className="space-y-4 text-gray-700 list-disc pl-6">
          <li>
            <strong>Data Extraction:</strong> Advanced crawlers to detect fraud,
            verify claims, and support healthcare decisions.
          </li>
          <li>
            <strong>Document Processing:</strong> Analyze EMRs, EHRs, imaging
            databases, and insurer claims.
          </li>
          <li>
            <strong>Healthcare Data Annotation:</strong> Semantic segmentation
            and bounding boxes for biomedical images.
          </li>
          <li>
            <strong>Biomedical Data Aggregation:</strong> Centralized updates
            from across the healthcare industry.
          </li>
          <li>
            <strong>AI/ML Data Support:</strong> Build models from patterns and
            anomalies in medical data.
          </li>
          <li>
            <strong>Link Analysis:</strong> Detect fraud and relationships
            across healthcare entities.
          </li>
          <li>
            <strong>Comprehensive Patient Care:</strong> Track treatments, drug
            misuse, and outcomes effectively.
          </li>
          <li>
            <strong>Hospital Management:</strong> Prioritize patients, forecast
            resources, and estimate outcomes.
          </li>
          <li>
            <strong>Automation:</strong> Integrate data into ML prototypes to
            streamline healthcare IoT systems.
          </li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Healthcare Data Mining Process Flow
        </h2>
        <ol className="space-y-4 text-gray-700 list-decimal pl-6">
          <li>
            <strong>Selection of Data Points:</strong> Collect and verify
            multiple data sources.
          </li>
          <li>
            <strong>Pre-processing:</strong> Handle missing info, remove
            inconsistencies and noise.
          </li>
          <li>
            <strong>Transformation & Mining:</strong> Normalize, smooth, and
            apply mining techniques.
          </li>
          <li>
            <strong>Reporting & Evaluation:</strong> Inspect, interpret, and
            deliver actionable insights.
          </li>
        </ol>
      </section>

      {/* Why Nimble */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Healthcare Data Mining to Nimble Acuity?
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc pl-6">
          <li>Economical pricing with up to 68% cost savings</li>
          <li>Strict quality control ensuring 99.9% accuracy</li>
          <li>Data privacy, confidentiality, and HIPAA compliance</li>
          <li>
            Certified processes (ISO 27001:2022, ISO 9001:2015, PCI DSS, etc.)
          </li>
          <li>Dedicated project managers and 24/7 customer support</li>
          <li>High scalability and trained healthcare data mining experts</li>
          <li>Improved ROI through fraud detection and predictive insights</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Healthcare Data Mining Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          If you are looking for efficient, reliable, and affordable healthcare
          data mining solutions, Nimble Acuity is your trusted partner. We help transform
          biomedical data into actionable insights for better patient care and
          operational efficiency.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HealthcareDataMining;
