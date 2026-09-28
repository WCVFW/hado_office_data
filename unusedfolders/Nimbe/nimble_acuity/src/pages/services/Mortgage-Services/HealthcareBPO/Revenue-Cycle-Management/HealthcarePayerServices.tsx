import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const HealthcarePayerServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Acuity Healthcare Payer Services
            </h2>
            <p className="text-lg text-gray-600">
              If you're having hassles in processing patient eligibility, claims, and enrollment, let experts from Nimble Acuity provide healthcare payer services starting at <strong>$1280 per FTE per month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              To improve compliance in the modern data-driven healthcare system, payers rely on analytics and insights for timely decision-making. Outsourcing healthcare payer services allows your practice to focus on patient care while our data-driven analytics manage risk, operational efficiency, and business intelligence.
            </p>
            <p>
              With over 26 years of experience, <strong>Nimble Acuity</strong> is a premier healthcare payer services provider, delivering payer analytics, intelligence solutions, and cutting-edge infrastructure to support your operational dominance.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Healthcare Payer Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Improving Risk Score Accuracy:</strong> Prevent lost payments due to improper claims processes, detect fraud, waste, and misuse, and ethically recover lost payments.</li>
              <li><strong>Filtering Watch List using Software:</strong> Monitor payments and customer data, detect matches against watch lists, and ensure regulatory compliance using intelligent software.</li>
              <li><strong>Payment Reimbursement:</strong> Process receivables efficiently, ensuring accurate reconciliations for walk-ins to discharge.</li>
              <li><strong>Healthcare Value Optimization:</strong> Leverage prescriptive analytics to improve decision-making, forecast outcomes, and enhance patient experiences.</li>
              <li><strong>Call Center:</strong> Multilingual call center support providing timely assistance to payers.</li>
              <li><strong>Payer Administrative System Modernization:</strong> Support for premium billing, enrollment, claims, and member services while modernizing existing systems.</li>
              <li><strong>Patient-centric Care Management:</strong> Home health monitoring, care coordination, and ambulance dispatch to enhance patient experience.</li>
              <li><strong>Information Technology Strategic Advisory:</strong> Align payer business strategy with IT solutions to optimize care and efficiency.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Healthcare Payer Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Discuss project challenges and scope with clients to understand requirements.</li>
              <li>Create a custom plan incorporating the best strategy to address challenges.</li>
              <li>Present the solution and gather client feedback.</li>
              <li>Assign and train the team on processes and compliance.</li>
              <li>Execute healthcare payer services according to Service Level Agreements (SLA).</li>
              <li>QA teams monitor the entire process and sign off upon completion.</li>
              <li>Send reports for client review.</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Healthcare Payer Services from Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Certified Healthcare Payer Services Company:</strong> HIPAA and ISO 9001:2015 certified, complying with international quality standards.</li>
              <li><strong>Data Security:</strong> Your data is safe through internal audits and encrypted systems.</li>
              <li><strong>High Accuracy & Quality Service:</strong> Dedicated QA teams ensure reliable and precise service delivery.</li>
              <li><strong>Pocket-friendly Pricing:</strong> Affordable rates based on selected services only.</li>
              <li><strong>Modern Infrastructure:</strong> 24/7 IT support ensures seamless operations.</li>
              <li><strong>Short Turnaround:</strong> Agile model allows faster delivery than competitors.</li>
              <li><strong>Scalability:</strong> Services can be scaled to meet increasing workload requirements.</li>
              <li><strong>Experienced Team:</strong> Skilled healthcare payer agents, project managers, and IT personnel ensure efficient operations.</li>
              <li><strong>Round-the-clock Availability:</strong> Support via email, web chat, and phone to address queries and concerns.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Payer Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Partner with Nimble Acuity to gain a capable outsourcing partner for healthcare payer services. Benefit from 26+ years of experience while maintaining control of your payer workflow and delivering better outcomes.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Reach out now to discuss your requirements and receive a fair project estimate within 24 hours.
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

export default HealthcarePayerServices;
