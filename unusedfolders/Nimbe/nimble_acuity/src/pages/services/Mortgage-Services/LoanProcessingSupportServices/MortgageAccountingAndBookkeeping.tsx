import MortgageHeader from "@/pages/services/Mortgage-Services/MortgageHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MortgageAccountingAndBookkeeping: React.FC = () => {
  return (
    <>
      {/* Header */}
      <MortgageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mortgage Accounting and Bookkeeping Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality, cost-effective mortgage accounting and bookkeeping support services tailored to your needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a mortgage lender seeking professional and valuable accounting and bookkeeping services? Do you need knowledgeable staff and access to top software to handle your financial needs? If you are looking for an all-encompassing solution to manage accounts, reports, tax planning, and general management, you've come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of mortgage accounting and bookkeeping support services, with a track record of successfully handling numerous projects for clients worldwide. Our expert team combines a deep understanding of industry best practices with proficiency in modern software tools. We customize our services to meet your diverse requirements and provide the exact solution you need.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Mortgage Accounting and Bookkeeping Services
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have decades of experience providing support services for mortgage companies. By outsourcing to us, you can increase your productivity and reduce costs. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Cost Segregation and Cash Flow Analysis:</strong> We help you track costs, compare them to receivables, and provide financial advice to positively influence your decision-making.
              </li>
              <li>
                <strong>Accounting and Bookkeeping:</strong> We use an iterative approach to accounting and ledger management. Our systematic processes and multi-level data validation ensure the accuracy of all financial data entered into your general ledgers.
              </li>
              <li>
                <strong>General Ledger Accounting:</strong> We provide a full and precise record of all your financial transactions, ensuring accuracy in the accounts of your liabilities, assets, expenses, and equities.
              </li>
              <li>
                <strong>Strategic Tax Planning:</strong> We monitor your business liquidity and investments to help you maximize tax savings. Our services fully comply with all GSE regulations and federal laws.
              </li>
              <li>
                <strong>Financial Statement Preparation and Forecasting:</strong> Our expert financial analysts leverage the best tools to prepare accurate financial reports and create effective budget forecasts, helping you capitalize on financial trends.
              </li>
              <li>
                <strong>Accounts Payable Review:</strong> We help you maintain detailed, accurate files and invoices of all outstanding payments, ensuring you can make better business decisions.
              </li>
              <li>
                <strong>Accounting Software Support:</strong> Our team is highly proficient in diverse accounting software, including the QuickBooks suite, and can manage workflows, documents, and invoices.
              </li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Cost-effective Prices:</strong> We are known for providing high-quality services at extremely competitive prices.
              </li>
              <li>
                <strong>Certified Services:</strong> We have multi-level quality checks and are ISO 9001:2015 certified, ensuring all documents are thoroughly verified for accuracy.
              </li>
              <li>
                <strong>Strong Data Security:</strong> Our staff signs NDAs, and we are ISO/IEC 27001:2022 certified, demonstrating our commitment to protecting your data.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> Our team works out of state-of-the-art facilities with access to all the necessary tools and technologies.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> We are committed to delivering our services quickly while maintaining the highest quality.
              </li>
              <li>
                <strong>Single Point of Contact:</strong> A dedicated project manager will be your single point of contact, always available to address your queries.
              </li>
              <li>
                <strong>Ease of Scalability:</strong> We have the resources and bandwidth to increase or decrease the number of resources on your project to adapt to changing business conditions.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Started with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading provider of mortgage accounting and bookkeeping support services, offering customized solutions that perfectly suit your requirements. Our experts are always ready to add value to your entire process.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for an experienced, cost-effective, and reliable provider of mortgage accounting and bookkeeping support, get in touch with us today!
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

export default MortgageAccountingAndBookkeeping;