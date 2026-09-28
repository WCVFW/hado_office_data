import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const TransactionSupportServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Transaction Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Identify risks and make informed business decisions with confidence by choosing our expert transaction support services, starting at just $12/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to analyze and validate the financial, strategic, and operational assumptions behind your transactions? Do you need independent help to gain insights on how to structure and negotiate a transaction for maximum efficacy? If so, you can benefit significantly from our transaction support services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading transaction support company that provides comprehensive and in-depth assistance for all your transactions. We help you identify risks and provide a wide range of financial transaction support, including devising cost-effective tax structuring strategies and supporting you throughout the entire transaction process.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transaction Support Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading provider of transaction support services and can help you with a wide range of requirements. Our services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Mergers and Acquisitions Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Evaluate businesses by assessing potential synergies and assist with negotiations.</li>
                  <li>Provide detailed financial models and help you measure transaction implications.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Operational Transaction & Corporate Finance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Help you enhance value throughout the entire deal cycle by optimizing outcomes and reducing operational risks.</li>
                  <li>Support your finance operations by entering the transaction life cycle earlier to improve deal returns.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Business Modeling and Valuation</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Evaluate new transactions and business opportunities to help you formulate better business strategies.</li>
                  <li>Provide robust and detailed financial models to bolster your decision-making capabilities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our transaction support solutions are competitively priced and can be customized to your specific requirements.</li>
              <li><strong>High-Quality Services:</strong> We make use of stringent workflows and industry-leading best practices to provide the highest quality services.</li>
              <li><strong>Experienced Team:</strong> Our transaction support team has significant experience and expertise in helping clients throughout the deal-making process.</li>
              <li><strong>Structured Process:</strong> With over 6 years of experience, our streamlined process is designed to generate the best outcomes for our clients.</li>
              <li><strong>Short Turnaround:</strong> Our experts provide highly reliable services within a short timeframe, helping you capitalize on opportunities quickly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with a Pioneer in Transaction Support Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneering transaction support service company, delivering highly reliable services to global clients throughout the entire deal-making process. We provide specialized services at highly competitive rates, making our solutions accessible to a wide variety of clients with varying requirements and budgets.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">If you are looking for a professional and reliable transaction support firm, get in touch with us today!</span>
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

export default TransactionSupportServices;