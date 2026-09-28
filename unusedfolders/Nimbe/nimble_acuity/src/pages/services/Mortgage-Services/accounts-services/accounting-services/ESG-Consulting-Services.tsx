import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ESGConsultingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ESG Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Create and improve your Environmental, Social, and Governance (ESG) investment strategies with Nimble Acuity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ESG factors are increasingly important for businesses seeking to enhance sustainability, profitability, and stakeholder trust. Leveraging ESG effectively requires structured analysis, implementation, and reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides comprehensive ESG consulting services to help companies improve disclosure quality, assess sustainability performance, bridge operational gaps, and build resilience for long-term business continuity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ESG Consulting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Aggregation and Analysis:</strong> Compile, normalize, and analyze ESG data across bonds, equities, and over 1,000 indicators. Perform ESG controversy research and extract actionable insights for stakeholders.</li>
              <li><strong>ESG Consulting for Corporates:</strong> Conduct gap analysis and as-is assessments to provide sustainable competitive advantage. Evaluate sector-specific ESG indicators, disclosure processes, and governance structures.</li>
              <li><strong>ESG Consulting for Capital Markets:</strong> Provide as-is assessments and portfolio evaluations across ESG parameters. Help capital market participants ensure stability and resilience during volatile periods.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for ESG Consulting?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable ESG Consulting:</strong> Access expert ESG consulting services at a fraction of the cost of other firms.</li>
              <li><strong>Quick Turnaround:</strong> Projects delivered on time with efficient workflows.</li>
              <li><strong>World-Class Infrastructure:</strong> Our ESG consultants use modern offices, tools, and technologies to deliver superior services.</li>
              <li><strong>Customized Solutions:</strong> Tailored ESG services aligned with your sustainability goals, efficiency improvements, and cost optimization.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Embrace Sustainability and Drive Growth
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert guidance you need to navigate the evolving ESG landscape. Our comprehensive services help you improve transparency, enhance performance, and build a resilient business for the future.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to enhance your ESG strategy?</span>
              Contact us today to discuss your sustainability goals and how we can help you achieve them.
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

export default ESGConsultingServices;