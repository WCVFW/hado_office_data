import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HCCHccCoding: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HCC Coding Services
            </h2>
            <p className="text-lg text-gray-600">
              Communicate patient complexity with accuracy and clarity. 
              Our high-quality <strong>HCC coding services</strong> start at just 
              <strong> $1280 per FTE/month</strong>, ensuring compliance, accuracy, and maximum reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you’re seeking skilled and experienced <strong>HCC coders</strong> to clearly 
              communicate patient complexity and improve revenue cycle management, 
              <strong> Nimble Acuity</strong> is your trusted partner. With decades of experience 
              and advanced HCC coding tools, we deliver accurate, efficient, and compliant 
              coding services tailored to your needs.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our HCC Coding Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>HCC Validation:</strong> Error-free validation of codes 
                with the latest technology.
              </li>
              <li>
                <strong>Chart Review:</strong> Accurate and timely HCC chart reviews using 
                advanced tools.
              </li>
              <li>
                <strong>Chart Audit Summary:</strong> Detailed audit summaries that ensure 
                compliance and coding accuracy.
              </li>
              <li>
                <strong>Codes Reporting:</strong> Precise reporting of embedded, suspect, 
                and missing codes aligned with client needs.
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Cost-effective and scalable pricing plans.</li>
              <li><strong>HIPAA Compliance:</strong> Strict adherence to patient data security standards.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified for maximum confidentiality.</li>
              <li><strong>Error-Free Services:</strong> ISO-certified processes ensure best-in-class quality.</li>
              <li><strong>Advanced Infrastructure:</strong> Access to modern coding tools and secure workspaces.</li>
              <li><strong>Fast Turnaround:</strong> Multiple global delivery centers for quick and accurate output.</li>
              <li><strong>24/7 Support:</strong> Always-available support teams for client queries.</li>
              <li><strong>Dedicated SPOC:</strong> A single point of contact for smooth communication.</li>
              <li><strong>Scalable Services:</strong> Resources and bandwidth to match client demand.</li>
              <li><strong>Experienced Specialists:</strong> Highly skilled coders with years of HCC expertise.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Research & DME Billing Services:</strong> Supported a Tustin-based 
              client with cost-effective DME billing solutions.{" "}
              <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Ambulance Billing:</strong> Provided fast, reliable demographics entry 
              for a leading ambulance billing company.{" "}
              <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "I wanted to inform you of what a great job Nimble Acuity is doing for our firm. 
              Vinoth Kumar and his team have done amazing work and are extremely reliable."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Risk Adjustment HCC Coding?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, our certified coders and advanced tools ensure compliance, 
              accuracy, and efficiency. Partner with us to streamline coding processes, 
              secure reimbursements, and enhance patient care.
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

export default HCCHccCoding;
