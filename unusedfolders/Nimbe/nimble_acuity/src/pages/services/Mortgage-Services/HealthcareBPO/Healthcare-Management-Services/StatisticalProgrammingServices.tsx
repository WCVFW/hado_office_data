import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const StatisticalProgrammingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Statistical Programming Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with <strong>nimble acuity</strong> for expert statistical programming services, including data integration, mapping, validation, and conversion, to produce high-quality datasets for final analysis and submission.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Statistical programming is essential for clinical projects, particularly in new drug development, where every piece of data must be meticulously maintained. This process analyzes product safety and efficacy, transforming raw data into a format suitable for biostatistical analysis. Not all clinics or firms have the in-house expertise or time to handle these complex tasks. This is where <strong>nimble acuity</strong> comes in. Our experts specialize in the latest technologies, providing a complete suite of statistical and programming services to ensure effective data management and efficient biostatistical analysis.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Statistical Programming Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>SAS and R Programming:</strong> Expert programming for data analysis and reporting.</li>
              <li><strong>CDISC Conversion/Mapping:</strong> Capabilities to convert and map data according to CDISC standards.</li>
              <li><strong>Interim Analysis Reporting:</strong> Generate reports for ongoing studies.</li>
              <li><strong>Annual Clinical Trial Safety Updates:</strong> Provide timely updates on product safety.</li>
              <li><strong>Macro Validation, Production, and Optimization:</strong> Develop and refine macros for efficiency and accuracy.</li>
              <li><strong>TLF Development & Quality Checking:</strong> Analyze and quality-check Tables, Listings, and Figures (TLFs) for study summaries.</li>
              <li><strong>Committee Support:</strong> Provide data and mapping support for Data Safety Monitoring Boards (DSMB), Data Monitoring Committees (DMC), and other safety committees.</li>
              <li><strong>CDISC ADaM Submission:</strong> Develop and quality-check datasets for submission compliance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Statistical Programming?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO Certification:</strong> We are an internationally acclaimed, ISO-certified firm known for our high-quality services.</li>
              <li><strong>Cost-Effective Solutions:</strong> Our services are affordable, best in quality, and customized to your specific needs.</li>
              <li><strong>Dedicated Point of Contact:</strong> We assign a dedicated manager to each client for seamless communication and easy access to our expert team.</li>
              <li><strong>High Data Security:</strong> We prioritize data security, ensuring all sensitive information is protected and HIPAA-compliant.</li>
              <li><strong>Quality Assurance:</strong> Our team and state-of-the-art software technologies ensure your needs are met with perfection within the given timeline.</li>
              <li><strong>24/7 Customer Support:</strong> Our agents are available around the clock to assist clients from different time zones.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Accounts Receivable Management:</strong> Our team provided reliable solutions to a leading client, improving their accounts receivable and medical billing processes.</li>
              <li><strong>Patient Demographics and Charge Entry:</strong> We exceeded the expectations of a medical billing company by providing accurate and error-free patient demographics entry services.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Nimble Acuity provides a reliable and efficient medical billing service. They have helped improve collections and lower receivables for my clients."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Founder & CEO, Billing Company in the East Coast
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Statistical Programming to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, <strong>nimble acuity</strong> is a leading global statistical programming services company. We have a large team of certified and experienced statisticians who use the latest software to provide effective solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Reach out to us</strong> if you are looking for a reliable and trustworthy firm to outsource your statistical programming needs.
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

export default StatisticalProgrammingServices;