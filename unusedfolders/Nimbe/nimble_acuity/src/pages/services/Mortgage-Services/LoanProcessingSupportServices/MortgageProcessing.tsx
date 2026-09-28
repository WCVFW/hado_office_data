import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Loan Processing Services
            </h2>
            <p className="text-lg text-gray-600">
              Accelerate your loan cycle time, reduce costs, and ensure compliance with our productized mortgage loan processing support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> offers specialized mortgage processing solutions to help you overcome common challenges like staff shortages and high error rates. We operate as a seamless extension of your team, leveraging automation and quality control to handle all loan types, including Conventional, FHA, USDA, VA, and Non-Qualified Mortgages. Our goal is to make your processes faster and more efficient, so you can focus on what matters most: your clients.
            </p>
          </div>

          {/* Our Mortgage Processing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Processing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>FHA Loan Services</li>
              <li>Mortgage Default Management</li>
              <li>Conforming Mortgage Loan Support</li>
              <li>Conventional Mortgage Loan Processing</li>
              <li>Jumbo Mortgage Loan Support</li>
              <li>Fixed Rate and ARM Loan Services</li>
              <li>Mortgage Underwriting Support</li>
              <li>Mortgage Closing & Post-Closing Services</li>
              <li>Mortgage Title Support</li>
              <li>Mortgage Appraisal Support</li>
              <li>Reverse Mortgage Support</li>
              <li>Mortgage Loan Servicing</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Professionals:</strong> Our team consists of veteran processors with extensive experience in all loan types and AUS operations.</li>
              <li><strong>Proactive Risk Management:</strong> We use predictive analytics to identify and mitigate risks early in the process.</li>
              <li><strong>Seamless LOS Integration:</strong> Our systems integrate directly with your leading Loan Origination Systems for a smooth, efficient workflow.</li>
              <li><strong>Client-Centric Approach:</strong> We offer personalized support with a dedicated account manager to ensure a seamless experience.</li>
              <li><strong>Continuous Improvement:</strong> Our processes are regularly refined to optimize efficiency and reduce cycle times.</li>
              <li><strong>Flexible Pricing:</strong> Choose from transparent pricing models, including flat fees, tiered pricing, and hybrid options.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Mortgage Process Today
            </h3>
            <p className="text-gray-700 mb-6">
              With Nimble Acuity, you can resolve common processing challenges and accelerate your business growth. Our proprietary technologies and expert team ensure accuracy, compliance, and a superior borrower experience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to transform your mortgage loan processing? Contact us today to discuss your specific needs.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MortgageProcessing;