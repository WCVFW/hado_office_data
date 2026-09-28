import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FractionalCFO_Services = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Fractional CFO Services
            </h2>
            <p className="text-lg text-gray-600">
              Let seasoned chief financial officers guide your firm on the right financial path to ensure success and profitability.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your financial forecasting becoming too stressful or complex? Are you entering a new market or pursuing vertical integration and need expert financial guidance? If you require help with pivoting your business plans, our fractional CFO services can provide tremendous benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A fractional CFO is a great solution for firms that aren't ready to hire a full-time CFO but need financial expertise on a part-time or project basis. Our fractional CFOs provide valuable financial insight and guidance to help you achieve your goals and overcome financial challenges. The flexibility of a fractional CFO is a cost-effective way to get the financial expertise you need without a full-time commitment.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Part-Time CFO Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading provider of fractional CFO services, catering to a diverse clientele for over 6 years. Our services include:
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">CFO Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ensure checks and balances are built into every process to strengthen security and provide accurate financial information.</li>
                  <li>Ensure you are utilizing the most recent and suitable financial tools to run your company to its fullest potential.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Virtual CFO Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide financial strategy, accounting automation, payroll, and bookkeeping services for startups and small businesses.</li>
                  <li>Help you manage cash flow, satisfy investors, and improve operational and business process efficiency.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">CFO Strategy & Support</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Our CFOs play a key role in balancing fiscal stewardship with a strategic assessment of growth risks and opportunities.</li>
                  <li>Evaluate your organization's finance, review business processes and financial systems, and automate financial reporting.</li>
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
              <li><strong>Data Protection:</strong> All your shared financial and business information is kept completely secure and private.</li>
              <li><strong>Rapid Turnaround:</strong> We provide all our services on schedule, ensuring you get the insights you need when you need them.</li>
              <li><strong>Outstanding Infrastructure:</strong> Our team works with top-tier facilities and the best amenities to deliver exceptional services.</li>
              <li><strong>Budget-Friendly:</strong> Our interim CFO services are offered at affordable rates, making professional financial guidance accessible to all businesses.</li>
              <li><strong>Expertise:</strong> We have some of the most knowledgeable and qualified CFOs on staff who can deliver the highest caliber services in a short period.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity - The Industry Leaders
            </h3>
            <p className="text-gray-700 mb-6">
              We are industry leaders in offering premium fractional CFO services and a variety of other accounting services to clients all around the world.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">You’ve come to the perfect place if you are looking to hire a fractional CFO to help with your financial needs.</span>
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

export default FractionalCFO_Services;