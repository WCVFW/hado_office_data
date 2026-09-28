import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const UtilizationManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Utilization Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Control healthcare costs and reduce unnecessary provision of services with <strong>nimble acuity's</strong> expert utilization management services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to manage healthcare costs and achieve the highest quality of care? Do you need to efficiently review and decide on the necessity of services before, during, and after they are provided? At <strong>nimble acuity</strong>, we can help you with a wide range of healthcare utilization management requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use evidence-based criteria to review various kinds of information across your health plan members, including cases, letters, and other documents. We ensure quick, accurate, and appropriate clinical validation from nurses, doctors, and hospitals. By partnering with us, you can free up your in-house clinical team’s time, allowing them to focus on ensuring better patient outcomes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare Utilization Management Services
            </h3>
            <p className="text-gray-700 mb-4">
              Our services help you achieve the following:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Appropriate Level of Care:</strong> We help ensure that all your patients receive the most appropriate care, reducing your risk of obtaining medical necessity denials.
              </li>
              <li>
                <strong>Placement Status Reviews:</strong> Our experts conduct placement-status reviews using evidence-based and clinical tools to achieve enhanced decision-making.
              </li>
              <li>
                <strong>Enhanced Scrutiny:</strong> We apply additional scrutiny when decision support tools conflict with a physician's clinical judgment, ensuring adequate additional documentation.
              </li>
              <li>
                <strong>Increased Efficiency:</strong> Our solutions allow you to increase the number of cases you review, focusing on complex cases that require specific clinical expertise.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing:</strong> Our cost-effective rates are designed to offer you the most value for your money.
              </li>
              <li>
                <strong>High-Quality Services:</strong> We are an ISO-certified company and use robust QA processes to provide extremely accurate solutions.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> Our specialists operate out of world-class offices with powerful computers to deliver highly accurate services.
              </li>
              <li>
                <strong>Structured Process:</strong> We use robust and streamlined processes to deliver all our services.
              </li>
              <li>
                <strong>Latest Tools and Technologies:</strong> We are proficient in using the latest and best tools and technologies to provide cutting-edge services.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team has over 26 years of experience in providing highly robust healthcare services.
              </li>
              <li>
                <strong>Data Security:</strong> We are fully compliant with GDPR and HIPAA regulations, ensuring your data is always safe and secure.
              </li>
              <li>
                <strong>Short Turnaround:</strong> We take deadlines very seriously, ensuring you always receive our services on time.
              </li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Eligibility Verification Process:</strong> We helped a clinical billing client streamline their eligibility verification, pre-authorization, and A/R follow-up with reasonable rates and a high-quality process.
              </li>
              <li>
                <strong>Pharmacy & Medical Insurance Eligibility:</strong> We provided eligibility verification services to a telemedicine provider, successfully honoring our commitment and assurances.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "The verifications are going well. Anytime there is an issue or something additional we need, it gets addressed and usually gets corrected quickly. We appreciate you following up. Thank you so much."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Utilization Management Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> is a leading provider of high-quality and accurate healthcare utilization management services. Our highly qualified and experienced experts have the necessary background to easily and effectively address any of your needs. We leverage the latest tools and technologies to deliver top-notch services that are a cut above the rest.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch with us today</strong> for professional and cost-effective healthcare utilization management services.
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

export default UtilizationManagement;