import React from "react";
import NavigationMenu from "../MegaMenu";

const InvestmentResearch: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* Heading */}
      <NavigationMenu/>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Investment Research Services
        </h1>
        <p className="text-blue-700 font-medium">
          Assess market volatility, credit risks, and macroeconomic indicators
          using Monte Carlo simulations and scenario analysis for portfolio
          protection against market shocks.
        </p>
      </header>

      {/* Intro */}
      <p className="mb-4 leading-relaxed">
        We deliver high-quality investment research solutions that empower asset
        managers, hedge funds, private equity firms, and financial institutions
        with actionable insights. Our expertise spans equity and fixed-income
        research, sector analysis, quantitative modeling, and ESG assessment,
        ensuring data-backed investment decisions.
      </p>
      <p className="mb-6 leading-relaxed">
        We focus on risk-adjusted strategies, alpha generation, and market
        intelligence, leveraging advanced analytics and automation. Our
        efficient execution streamlines your research processes, enhances
        portfolio performance, and enables informed capital allocation with
        precision.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Comprehensive Investment Research Services
      </h2>
      <p className="mb-6 leading-relaxed">
        We provide in-depth market research, conduct financial analysis, develop
        investment strategies, and determine stock valuations with the help of
        our expert team.
      </p>
      <ul className="space-y-4 list-disc list-inside">
        <li>
          <strong>Equity Research</strong> – Fundamental & technical analysis,
          earnings forecasts, valuation models, and industry benchmarking.
        </li>
        <li>
          <strong>Credit Research</strong> – Corporate & sovereign credit
          analysis, risk assessments, rating evaluations, and fixed-income
          insights.
        </li>
        <li>
          <strong>Market Analysis</strong> – Macroeconomic trends, sector
          tracking, supply-demand evaluation, and geopolitical impact studies.
        </li>
        <li>
          <strong>Portfolio Analysis</strong> – Asset allocation, risk
          optimization, performance attribution, diversification, and hedging.
        </li>
        <li>
          <strong>Quantitative Research</strong> – Algorithmic trading models,
          factor analysis, predictive modeling, and data-driven strategies.
        </li>
        <li>
          <strong>Financial Modeling</strong> – Projections, scenario analysis,
          DCF modeling, sensitivity testing, and stress tests.
        </li>
        <li>
          <strong>Valuation Services</strong> – Comparable company analysis,
          precedent transactions, intrinsic/relative valuation, and M&A support.
        </li>
      </ul>

      <p className="mt-6 text-blue-600 font-semibold">
        Talk to our experts to learn how we provide real-time market tracking or
        implement mean-variance optimization for portfolio performance.
      </p>

      {/* Tools */}
      <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
        Investment Research Software We Leverage
      </h3>
      <ul className="flex flex-wrap gap-4 text-gray-700">
        <li>Bloomberg Terminal</li>
        <li>FactSet</li>
        <li>YCharts</li>
      </ul>
      <p className="mt-2 text-sm text-gray-500">
        (Disclaimer: The use of the abovementioned tools is subject to
        Nimble Acuity's present practices. We do not endorse their use in any
        capacity.)
      </p>

      {/* Why Choose */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Why Choose Our Investment Research Company?
      </h2>
      <ul className="space-y-3 list-disc list-inside">
        <li>
          <strong>Insightful Fundamental & Credit Analysis</strong> – Identify
          financial drivers, debt sustainability, and market positioning.
        </li>
        <li>
          <strong>Advanced Quantitative & Financial Modeling</strong> – Build
          risk-sensitive investment models using Monte Carlo simulations and
          forecasting.
        </li>
        <li>
          <strong>High-Impact Market & Portfolio Insights</strong> – Combine
          macro indicators, performance metrics, and allocation strategies for
          better ROI.
        </li>
        <li>
          <strong>Bespoke Valuation & Investment Research</strong> – Provide DCF,
          precedent transaction, and relative valuation models for accurate M&A
          decisions.
        </li>
        <li>
          <strong>Actionable Intelligence</strong> – Attribution analysis, risk
          exposure tracking, and alpha generation frameworks.
        </li>
        <li>
          <strong>AI-driven Framework</strong> – Leverage ML, automation, and
          NLP-based sentiment analysis for predictive insights.
        </li>
      </ul>

      {/* Additional Services */}
      <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">
        Additional Services We Provide
      </h3>
      <ul className="space-y-2 list-disc list-inside">
        <li>Financial Research Services</li>
        <li>Market Research Services</li>
        <li>Asset Management Support Services</li>
        <li>Qualitative Business Research Services</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Testimonials
      </h2>
      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
        “The services that Nimble Acuity provided helped us achieve substantial
        cost and time savings on several challenging projects. Their prompt
        attention to our requests and attention to detail is excellent.”
        <br />
        <span className="font-semibold text-gray-900">
          – Senior Vice President, Automotive & Transportation Industry Solutions
          Group
        </span>
      </blockquote>

      {/* Success Stories */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Customer Success Stories
      </h2>
      <ul className="space-y-3 list-disc list-inside mb-6">
        <li>
          Elasticity Analysis for a Laundry Machinery Manufacturing Client.
        </li>
        <li>Forecasting Model Development for a Healthcare Firm.</li>
      </ul>

      {/* CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Collaborate With Us
      </h2>
      <p className="mb-4 leading-relaxed">
        Partner with us for Value at Risk, stress testing, and credit risk
        modeling to identify potential risks in your portfolio. Our efficient
        investment research solutions help your business grow while protecting
        capital.
      </p>
      <p className="text-blue-600 font-semibold">Contact us today.</p>
    </section>
  );
};

export default InvestmentResearch;
