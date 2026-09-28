import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BookkeepingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nimble Bookkeeping Services
            </h2>
            <p className="text-lg text-gray-600">
              Stop letting complex bookkeeping slow you down. Our services deliver <strong>nimble acuity</strong>—the perfect blend of speed, accuracy, and strategic insight—to keep your business on a path of smart, sustainable growth.
            </p>
          </div>

          {/* Why Outsource */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Your Bookkeeping?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Savings:</strong> Reduce bookkeeping expenses by up to 50% without sacrificing quality.</li>
              <li><strong>Expertise on Demand:</strong> Access a team of skilled bookkeepers and chartered accountants proficient in QuickBooks, Xero, SAP, and more.</li>
              <li><strong>Strategic Capacity:</strong> Free up internal resources to focus on core business operations.</li>
            </ul>
          </div>

          {/* Comprehensive Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Financial Health:</strong> Accurate, real-time insights from detailed financial reports to cash forecasts.</li>
              <li><strong>Dedicated Support:</strong> Specialized services for small businesses, real estate, restaurants, insurance, and more.</li>
              <li><strong>Total Compliance:</strong> Best-practice processes ensure your financial records are accurate, organized, and compliant.</li>
            </ul>
          </div>

          {/* Nimble Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How It Works: Our Nimble Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Secure Document Upload:</strong> Scan and upload your documents to our secure server.</li>
              <li><strong>Efficient Processing:</strong> We access your financial data remotely and update your books with precision.</li>
              <li><strong>Real-Time Review:</strong> Log in to your accounting software anytime to review updated books.</li>
            </ol>
          </div>

          {/* Advantage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Advantage of Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Agile Scaling:</strong> Scale our services quickly to match seasonal or rapid business growth.</li>
              <li><strong>Data Security:</strong> IT infrastructure protects your financial data.</li>
              <li><strong>Customized Engagement:</strong> Flexible models for full-time bookkeeping or one-off projects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Gain Financial Clarity Today
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to streamline your bookkeeping, ensure compliance, and make smarter financial decisions?
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

export default BookkeepingServices;
