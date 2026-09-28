import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PrechartingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Streamlined Precharting Services
            </h2>
            <p className="text-lg text-gray-600">
              Profit from efficient pre-charting solutions and ensure improved patient engagement with <strong>nimble acuity’s precharting services</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Maximizing patient care timeslots is critical to timely diagnosis and intervention. However, most physician practices in the US spend more resources on administrative tasks before the patient is even seated. Important functions—like gathering patient information and entering it into the EMR—can be handled by a competent team, freeing up physician time for patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, our precharting services streamline this process. By ensuring all essential data is gathered and pre-entered ahead of time, we enable physicians to focus on clinically critical tasks of diagnosis and treatment. With over 26+ years of experience, 18,000+ clients across 160+ countries, and a reputation for accuracy and cost-effectiveness, our solutions make patient care more efficient and profitable.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Chart Prepping Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              Professional chart-prepping services allow clinics to maintain accurate records while reducing the burden on physicians. We offer:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EHR Chart Building Services:</strong> Streamline record maintenance with digitized charts, templates, and custom EHR solutions.</li>
              <li><strong>Chart Documentation Services:</strong> Ensure critical patient data—medications, vitals, treatment plans—is captured accurately.</li>
              <li><strong>Integrated Charting Services:</strong> Reduce manual data entry by updating EMR charts with the correct ICD and CPT codes.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Precharting Process
            </h3>
            <p className="text-gray-700 mb-6">
              We follow a streamlined workflow designed to promote efficiency and accuracy:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Collect existing patient and practice information.</li>
              <li><strong>Chart Integration with EMR:</strong> Incorporate workflows directly into your EMR system.</li>
              <li><strong>Chart Development:</strong> Build high-quality, detailed charts for consulting physicians.</li>
              <li><strong>Chart Digitization:</strong> Verify and digitize charts to ensure accuracy.</li>
              <li><strong>Reporting & Feedback:</strong> Provide regular updates and dedicated client support.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Chart Prepping?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> Strict adherence to patient data security and authorized handling.</li>
              <li><strong>High-quality Services:</strong> Consistent, reliable, and accurate charting support.</li>
              <li><strong>Data Security:</strong> Secure management and exchange of sensitive information.</li>
              <li><strong>ISO-certified Company:</strong> Proven track record of global quality standards.</li>
              <li><strong>Quick Turnaround:</strong> Agile processes for timely delivery within budget.</li>
              <li><strong>24/7 Support:</strong> Global assistance across time zones via voice, chat, and email.</li>
              <li><strong>Custom Pricing:</strong> Flexible, cost-effective solutions tailored to your needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Precharting Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Effective precharting services allow physicians to focus on patient care while reducing administrative burdens. Partner with <strong>nimble acuity</strong> for scalable, reliable, and cost-competitive solutions that improve clinic efficiency and patient outcomes.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> and join the growing network of US clinics and practices that benefit from our precharting expertise.
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

export default PrechartingServices;
