import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const ARCallingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Acuity AR Calling Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce operational costs and boost your ROI with our expert AR calling services. 
              Our skilled team ensures timely remittance and efficient accounts receivable follow-ups.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Financial health is critical for healthcare organizations. Without proper AR calling, delayed collections can affect cash flow and service delivery.
            </p>
            <p>
              At <strong>Nimble Acuity</strong>, our AR calling professionals use advanced tools to follow up with clients, resolve claim issues, and secure full remittance efficiently.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              AR Calling Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Track Unpaid Insurance Claims:</strong> Diligent follow-ups with insurance companies and patients to maintain low AR days and maximize payments.</li>
              <li><strong>Manage Patient Collectibles:</strong> Streamline collections and payments to recover outstanding balances efficiently.</li>
              <li><strong>Track Electronic & Paper Claims:</strong> Monitor receivables, handle claim rejections, and ensure timely processing.</li>
              <li><strong>Generate AR Reports:</strong> Create monthly, quarterly, and annual reports to identify collectibles, non-collectibles, and co-insurance calculations.</li>
            </ul>
          </div>

          {/* Tools We Leverage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              AR Calling Tools We Leverage
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We use advanced software to track unpaid claims, manage collections, and generate AR reports. Alerts notify our team of delayed payments or discrepancies, enabling swift resolution and improved cash flow.
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Benefits of Choosing Nimble Acuity for AR Calling
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable AR Calling Services:</strong> Flexible pricing models based on hours, units, or collections tailored to your needs.</li>
              <li><strong>Data Security:</strong> Secure servers, restricted access, and strict monitoring ensure confidentiality of your healthcare data.</li>
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 ISMS certification guarantees robust protection of sensitive information.</li>
              <li><strong>HIPAA Compliant:</strong> Full adherence to HIPAA standards ensures patient data is protected.</li>
              <li><strong>Multiple Delivery Centers:</strong> Global presence enables 24/7 AR calling and time zone advantages.</li>
              <li><strong>Best Infrastructure:</strong> Advanced facilities, backup power, IT redundancies, and secure systems for high-quality AR calling services.</li>
              <li><strong>Accuracy:</strong> Over 98% accuracy in AR processes, exceeding industry norms.</li>
              <li><strong>Ease of Scalability:</strong> Resources and infrastructure ready to handle spikes in AR volumes.</li>
              <li><strong>Better Productivity:</strong> Methodical approach improves efficiency and AR collection rates.</li>
              <li><strong>Saves Time:</strong> Frees healthcare staff to focus on core functions while we manage AR follow-ups.</li>
              <li><strong>Skilled Team:</strong> A team of 300+ experts including AR analysts, coders, and claim processors ensures steady cash flow and accelerated growth.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource AR Calling Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Get reliable, efficient, and cost-effective AR calling services from experts with 26+ years of experience in healthcare support, billing, and revenue cycle management.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Contact us today to streamline your accounts receivable process and boost your organization’s cash flow.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ARCallingServices;
