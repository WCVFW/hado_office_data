import React from "react";
import NavigationMenu from "../MegaMenu";

const MarketBasketAnalysis: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <NavigationMenu/>
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Market Basket Analysis Services
        </h1>
        <p className="text-lg text-gray-600">
          Identify the items with close affinity and get access to key insights
          for your business by choosing our market basket analysis at prices
          starting at just <span className="font-semibold text-blue-600">$14/hour</span>
        </p>
      </header>

      {/* Intro */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
        <p>
          Market Basket Analysis in data mining is a key technique that helps
          retailers uncover dealings between consumers and items. It looks into
          a combination of items that figure regularly in transactions of a
          consumer. The technique is based on the theory that if a person buys
          or does not buy certain items, they are more or less likely to buy a
          second group of items.
        </p>
        <p>
          <span className="font-semibold text-blue-600">Nimble Acuity (Nimble Acuity)</span> has over 26+ years of experience in Market
          Basket Analysis. We have assisted retailers to discover unknown facts
          about consumers, financial institutions to understand credit card
          purchase decisions, call centers to uncover calling patterns, and
          insurance companies to identify fraudulent claims.
        </p>
      </div>

      {/* Services Offered */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Market Basket Analysis Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Affinity Analysis",
              desc: "Identify relationships between buyers and attributes linked with their habits to drive repeat purchases.",
            },
            {
              title: "Association Rule Mining",
              desc: "Discover correlations between independent data sets such as transactional or relational databases.",
            },
            {
              title: "Value Proposition Analysis",
              desc: "Compare and map data sets to understand and refine your enterprise’s value proposition.",
            },
            {
              title: "Voice of the Customer",
              desc: "Analyze baskets to understand feedback, expectations, and product improvements customers seek.",
            },
            {
              title: "Cross/Up-Sell Opportunities",
              desc: "Identify cross-selling and up-selling opportunities using clustering and data mining.",
            },
            {
              title: "Customer Segmentation",
              desc: "Categorize customers with explanatory models to design targeted promotions and campaigns.",
            },
            {
              title: "Customer Targeting",
              desc: "Leverage bank and retail data to predict customer needs and offer relevant service bundles.",
            },
            {
              title: "Purchase Behavior Patterns",
              desc: "Uncover relationships between products and buyers to optimize pricing and product launches.",
            },
            {
              title: "Market Assessments",
              desc: "Explore and analyze data to identify growth opportunities, marketing activities, and investments.",
            },
            {
              title: "Campaigns & Loyalty",
              desc: "Carry out targeted campaigns, reward loyalty, and increase repeat customers with tailored analysis.",
            },
            {
              title: "Willingness to Pay",
              desc: "Combine basket analysis with conjoint analysis to determine optimal pricing strategies.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Market Basket Analysis Process We Follow
        </h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li>
            <span className="font-semibold">Understand Requirements:</span> Work with clients to define problems and choose appropriate models.
          </li>
          <li>
            <span className="font-semibold">Data Loading:</span> Gather and clean data from multiple sources to prepare for analysis.
          </li>
          <li>
            <span className="font-semibold">Data Analysis:</span> Use parameters and algorithms (like Apriori) to uncover item set rules.
          </li>
          <li>
            <span className="font-semibold">Data Output:</span> Present insights visually using charts and graphs for better decision-making.
          </li>
        </ol>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing Market Basket Analysis Services
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Flexible pricing options to suit business requirements.</li>
          <li>ISO/IEC 27001:2022 certified for data security.</li>
          <li>Access to state-of-the-art infrastructure and tools.</li>
          <li>Team of experienced market basket analysis experts.</li>
          <li>Hands-on experience across multiple industries.</li>
          <li>Enhanced client satisfaction and competitive advantage.</li>
          <li>Increased ROI through sales optimization and insights.</li>
          <li>24/7 expert availability for training and support.</li>
          <li>One-stop solution with dedicated project management.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ready to Unlock Consumer Insights?
        </h3>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default MarketBasketAnalysis;
