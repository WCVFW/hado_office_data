import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SalesTaxServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Efficient & Accurate Sales Tax Returns, Backed by Experts
            </h2>
            <p className="text-lg text-gray-600">
              Stop letting sales tax returns consume your valuable time. Outsource
              this complex task to Nimble Acuity for{" "}
              <span className="font-semibold">highly accurate, secure, and
                confidential services</span>—starting at just{" "}
              <span className="font-semibold">$35 per return.</span>
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we are your one-stop solution for sales tax
              management. With over{" "}
              <span className="font-semibold">6 years of experience</span>, we’ve
              built a streamlined process that combines cutting-edge software with
              skilled professionals—so you can reduce costs, save time, and stay
              compliant while focusing on business growth.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Sales Tax Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Tax Registration:</strong> Complete management of tax
                registration requirements to keep your records accurate and clear.
              </li>
              <li>
                <strong>Tax Assessment:</strong> Precise, technology-driven
                assessment services to ensure compliance and accuracy.
              </li>
              <li>
                <strong>Tax Preparation & Filing:</strong> Accurate preparation
                and timely filing of periodical returns.
              </li>
              <li>
                <strong>Documentation & Forms:</strong> End-to-end handling of all
                required documentation and forms.
              </li>
              <li>
                <strong>Sales Tax Appeals:</strong> Expert assistance to help you
                resolve disputes and manage appeals with ease.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              A Seamless & Secure Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Submit Documents:</strong> Share tax documents via email, FTP, or fax.</li>
              <li><strong>Data Entry:</strong> Our team inputs all data into your chosen software.</li>
              <li><strong>Verification:</strong> Comprehensive audit to ensure accuracy.</li>
              <li><strong>Client Review:</strong> Draft returns are shared for your approval.</li>
              <li><strong>Final Filing:</strong> Approved returns are finalized and filed securely.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Nimble Acuity Advantage
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Significant Cost Savings:</strong> Reduce filing costs by up to 50%.</li>
              <li><strong>Unmatched Security:</strong> ISO/IEC 27001:2022 certified for data confidentiality.</li>
              <li><strong>Dedicated Support:</strong> A project manager as your single point of contact.</li>
              <li><strong>Scalability:</strong> Flexible resources that expand during peak season.</li>
              <li><strong>Expert Team:</strong> Highly qualified professionals with deep tax expertise.</li>
              <li><strong>Exceptional Quality:</strong> Rigorous quality checks for fast, flawless results.</li>
              <li><strong>Deep Experience:</strong> Over two decades in financial outsourcing.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Sales Tax Returns Today
            </h3>
            <p className="text-gray-700 mb-6">
              Free your team from the burden of tax filing. Partner with
              Nimble Acuity to ensure accurate, secure, and cost-effective sales
              tax processing backed by experts.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Save time, cut costs, and stay
                compliant.</span> Contact us today to get started.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default SalesTaxServices;
