import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataEnrichmentServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Enrichment Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity provides data enrichment services to customers using sophisticated database management techniques to boost competitiveness and quality.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Our data enrichment services are widely used by organizations in data-intensive fields such as banking, insurance, retail, and telecommunications. We help verify data accuracy, remove duplicates, consolidate multiple sources, and maintain consistent formatting for analytics and marketing purposes.
        </p>
        <p>
          With 26+ years of experience and a team of skilled data scientists, Nimble Acuity ensures high-quality, reliable data enrichment solutions for our clients.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Data Enrichment Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Data Verification & Accuracy Services:</strong> Ensure correctness, eliminate errors and duplicates, and maintain updated dynamic data.</li>
          <li><strong>Data Duplication Identification Services:</strong> Identify and remove potential duplicates for enriched, usable datasets.</li>
          <li><strong>Data Consolidation & Linking Services:</strong> Merge multiple sources, especially financial products, into a secure and optimized repository.</li>
          <li><strong>Data Review & Validation Services:</strong> Review databases to remove obsolete, erroneous, and duplicate entries for error-free datasets.</li>
          <li><strong>Data Enrichment Services:</strong> Add product attributes, images, and specifications to improve interpretation and analytics.</li>
        </ul>
      </section>

      {/* Data Enrichment Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Data Enrichment Process We Follow
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Project Scoping – Define the scope of data enrichment required.</li>
          <li>Project Trial – Perform a trial based on client inputs.</li>
          <li>Project Effort, Pricing & SLA – Determine time, resources, and pricing.</li>
          <li>Project Allotment – Assign a dedicated data enrichment team.</li>
          <li>Project Execution – Enrich data based on project requirements.</li>
          <li>Project Quality – QA team ensures error-free data.</li>
          <li>Project Delivery – Upload final output to the client portal.</li>
        </ol>
      </section>

      {/* Key Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing Data Enrichment Services to Nimble Acuity
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Cost-effective Pricing – Affordable services that maximize campaign success.</li>
          <li>Free Trial Offer – Test our services to build confidence before full-scale engagement.</li>
          <li>Robust Processes – Streamlined workflows and communication channels to update progress.</li>
          <li>High Data Security – Strict confidentiality agreements and secure handling of sensitive data.</li>
          <li>Quality Assurance – Multi-tier checks to ensure high accuracy and error-free output.</li>
          <li>Adherence to Timelines – Multiple global delivery centers ensure timely completion.</li>
          <li>Widespread Portfolio – 18,000+ customers across 167 countries over 26+ years.</li>
          <li>Latest Infrastructure – High-performance processors, cloud storage, and secure backups.</li>
          <li>Talented Workforce – Experienced analysts capable of handling complex data management tasks.</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Case Studies
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Image Categorization Services for Environmental Consultancy (UK):</strong> Managed 2 million images with high accuracy and efficiency.
          </li>
          <li>
            <strong>Data Enrichment and Cleansing for Business Acquisition Entrepreneur:</strong> Delivered quick turnaround for a leading entrepreneur’s database.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Enrichment Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity to get best-in-class data enrichment services tailored to your business needs. Ensure your database is accurate, comprehensive, and ready for analytics and marketing.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataEnrichmentServices;
