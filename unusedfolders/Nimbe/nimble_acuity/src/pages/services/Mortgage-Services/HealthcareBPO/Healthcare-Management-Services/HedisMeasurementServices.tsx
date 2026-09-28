import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HedisMeasurementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HEDIS Measurement Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve your HEDIS score, reduce turnaround time, and accelerate gap closure by choosing our high-quality HEDIS measurement services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to improve your HEDIS (Healthcare Effectiveness Data and Information Set) score, a key measure of healthcare quality in the US? **nimble acuity** is a leading provider of HEDIS measurement services, dedicated to helping healthcare plans and providers enhance the quality of care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our professional and reliable HEDIS measurement solutions are designed to help you meet NCQA quality goals and maximize reimbursements. We understand how crucial the HEDIS tool is for the over 90% of US health plans that use it to evaluate and measure performance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              HEDIS Measurement Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>**Comprehensive HEDIS Solutions:** We act as a single source for all your HEDIS measurement needs. By simplifying processes, we help you free up valuable time and resources, especially during the demanding HEDIS season. Our services help you minimize data transfer, accelerate the audit process, and streamline all HEDIS tasks.</li>
              <li>**Dynamic Reporting:** Gain the ability to generate dynamic reports and charts showing HEDIS scores. You can manage reviewer progress, compare results across different periods, monitor changes, and drill down for detailed research. We can also create custom reports tailored to your specific needs.</li>
              <li>**HEDIS Submission Services:** Our specialists efficiently prepare patient-level detail and interactive data submission files for NCQA and Centers for Medicaid and Medicare Services. We also help you create personalized files that adhere to state-specific requirements.</li>
              <li>**Customizable Reporting:** Our team has the expertise to create custom measures and reports at the provider, member, and employer levels. This capability allows you to easily monitor state-specific and internal measures and track them prospectively.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource HEDIS Measurement to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**Affordable Pricing:** We provide HEDIS measurement solutions at highly competitive rates by leveraging a skilled workforce and passing on cost benefits to our clients.</li>
              <li>**High-quality Services:** As an ISO-certified company, we use robust QA processes and multi-level quality checks to ensure the highest accuracy.</li>
              <li>**Modern Infrastructure:** Our team operates out of world-class offices with powerful computers, enabling them to provide highly accurate services.</li>
              <li>**Structured Process:** We use streamlined, robust processes perfected over decades of operation to deliver all our services.</li>
              <li>**Latest Tools and Technologies:** We are proficient in using the latest tools, best practices, and technologies to provide cutting-edge HEDIS measurement services.</li>
              <li>**Experienced Team:** Our team has 26+ years of experience in providing robust healthcare outsourcing services to a diverse, global clientele.</li>
              <li>**Data Security:** We are fully compliant with GDPR and HIPAA regulations and adhere to stringent data security and privacy policies.</li>
              <li>**Short Turnaround:** We take deadlines seriously and always deliver our HEDIS services within the stipulated timeframe.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "**nimble acuity** has become a trusted partner for our enterprise. I really appreciate their hard work and am very impressed by the accuracy of their services."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — MD, Medical Practice, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource HEDIS Measurement to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If you're looking for an experienced and reliable HEDIS measurement service provider, look no further. Our highly qualified and experienced professionals have the necessary background and training to effectively address any of your HEDIS requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              For professional and cost-effective HEDIS measurement services, **get in touch with us today!**
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

export default HedisMeasurementServices;