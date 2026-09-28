import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const BudgetingForecastingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Budgeting and Forecasting Services
            </h2>
            <p className="text-lg text-gray-600">
              Eliminate financial stress and focus on your core business with our expert <strong>budgeting and forecasting services</strong>. Forecast trends, mitigate risks, and strengthen your bottom line with solutions starting at <strong>$12/hour</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, our finance specialists have served hundreds of clients globally, using world-class resources and advanced tools, including machine learning-based solutions, to meet your business needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Financial Budgeting Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Capital Budgeting:</strong> Identify, assess, and plan capital budgets aligned with revenue goals.</li>
              <li><strong>Operating Budgets:</strong> Plan quarterly, half-yearly, and annual budgets, including allocation for each project and department.</li>
              <li><strong>Cash Flow Forecasting:</strong> Analyze budget variances to anticipate trends and maintain liquidity.</li>
              <li><strong>Project Budgets:</strong> Map financial timelines for ongoing or upcoming projects, ensuring cost management success.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High Data Security:</strong> ISO/IEC-certified systems ensure your data is fully secure.</li>
              <li><strong>Skilled Professionals:</strong> Extensive experience helping clients in over 160 countries maximize ROI.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Latest accounting software for high-quality, accurate service delivery.</li>
              <li><strong>Quick Turnarounds:</strong> Global delivery centers provide round-the-clock services with speed and flexibility.</li>
              <li><strong>Cost-Effective Services:</strong> Customized pricing starting at just $12/hour.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Equity Research Services:</strong> Delivered accurate, reliable equity research for a leading client.</li>
              <li><strong>Accounting Back-office Support:</strong> Provided error-free back-office support with quick turnaround for a major company.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Trust Our Expertise
            </h3>
            <p className="text-gray-700 mb-6">
              With 20+ years of experience, we help clients worldwide streamline financial planning and focus on core business functions.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">For cost-efficient and reliable budgeting and forecasting solutions,</span> contact us today.
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

export default BudgetingForecastingServices;
