import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceDataAnalyticsArticle: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Top 6 Ways Data Analytics is Transforming the Insurance Industry
          </h1>
          <p className="text-lg text-gray-700">
            Precise and better decision-making for your insurance business through advanced data analytics.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
        <p>
          Insurance companies collect huge amounts of data from their customers which are analyzed by underwriters to evaluate risks. Traditional methods are often not scalable, but insurance data analytics offers a modern solution to transform the industry.
        </p>
        <p>
          By leveraging insurance analytics, companies can enhance operational efficiency, improve customer service, and stay competitive. Here are six key ways data analytics is changing the insurance landscape.
        </p>
      </section>

      {/* Transforming Ways */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold mb-4">How is Data Analytics Transforming the Insurance Industry?</h2>

          <div>
            <h3 className="font-semibold text-xl mb-2">1. Providing Client-centric Services</h3>
            <p className="text-gray-700">
              Data analytics allows insurance companies to provide customized services, leveraging insights from customer data to meet client needs accurately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">2. Reducing Fraud and Waste</h3>
            <p className="text-gray-700">
              Insurance analytics helps detect potential fraud early, reducing losses and operational inefficiencies using actionable data intelligence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">3. Pricing Premiums Accurately</h3>
            <p className="text-gray-700">
              Analytics enables insurers to price premiums fairly and competitively by analyzing policyholder behavior and other risk factors.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">4. Self-servicing of Policies</h3>
            <p className="text-gray-700">
              Customers can manage policies independently through portals, while analytics helps insurers provide smart recommendations at purchase or renewal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">5. Restructuring the Insurance Industry</h3>
            <p className="text-gray-700">
              Analytics drives efficiency, better pricing, and improved customer service, helping companies transform processes and meet regulatory requirements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">6. Managing Claims</h3>
            <p className="text-gray-700">
              Insurance data analytics allows insurers to detect discrepancies during underwriting and claims processing, ensuring legitimate claims and reducing errors.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Processes */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-gray-700 space-y-4">
        <h2 className="text-3xl font-bold mb-4">How Data Affects Internal Processes in Insurance Business</h2>
        <ul className="list-decimal ml-6 space-y-2">
          <li>Know how profitable their business is</li>
          <li>Make changes to sales practices to improve results</li>
          <li>Increase per-customer and per-agent profitability</li>
          <li>Boost overall performance</li>
          <li>Reduce wasted time with policyholders</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Boost the Revenue of your Insurance Firm with Nimble Acuity's Insurance Data Analytics
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Acuity provides expert insurance data analytics services to help you improve sales, customer retention, and operational efficiency with cost-effective solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default InsuranceDataAnalyticsArticle;
