import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FinancialModelingServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
       <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Financial Modeling Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Leverage advanced models to <strong>quantify risks</strong>, forecast{" "}
          <strong>financial outcomes</strong>, and{" "}
          <strong>maximize shareholder value</strong>. We transform uncertainty
          into strategic opportunity for sustained growth.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          In today’s volatile business environment, decision-makers face
          uncertainty at every step. Our advanced{" "}
          <strong>quantitative analyses</strong> empower you with informed,
          data-backed strategies. From{" "}
          <strong>Decision Tree Analysis</strong> and{" "}
          <strong>Real Option Valuation</strong> to{" "}
          <strong>Monte Carlo simulations</strong>, we provide probabilistic
          assessments that guide investment decisions.
        </p>
        <p>
          We specialize in <strong>risk modeling</strong>,{" "}
          <strong>cash flow forecasting</strong>,{" "}
          <strong>profitability analysis</strong>, and{" "}
          <strong>Economic Value Added (EVA) models</strong> to ensure
          resilience, value creation, and long-term growth.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our End-to-End Financial Modeling Services
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Market Research Services",
            desc: "Understand industry dynamics and forecast market changes with data-driven insights."
          },
          {
            title: "Cash Flow Analysis & Management",
            desc: "Identify liquidity risks, optimize working capital, and ensure business continuity."
          },
          {
            title: "Real Estate Financial Modeling",
            desc: "Evaluate property investments with asset valuation and portfolio optimization."
          },
          {
            title: "Break-Even Analysis",
            desc: "Clarify cost structures and margins to guide pricing and cost management."
          },
          {
            title: "Feasibility Analysis",
            desc: "Validate business ideas and expansion plans with objective risk-return assessments."
          },
          {
            title: "Capital Formation",
            desc: "Optimize debt-equity mix to minimize capital costs and maximize returns."
          },
          {
            title: "Key Performance Indicators",
            desc: "Identify and track KPIs to align financial goals with operational performance."
          },
          {
            title: "Income Statement Analysis",
            desc: "Uncover revenue and cost trends to optimize profits and refine strategies."
          },
          {
            title: "Pro-Forma Financials",
            desc: "Develop forward-looking financials for budgeting, planning, and investor confidence."
          },
          {
            title: "Scenario Planning",
            desc: "Prepare for market shifts with agile strategies and effective risk management."
          }
        ].map((service, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Other Financial Modeling & Reporting Services We Offer
      </h2>
      <ul className="grid md:grid-cols-2 gap-3 text-gray-700 max-w-4xl mx-auto list-disc pl-6 mb-12">
        {[
          "Balance Sheet Review",
          "Business Valuation Analysis",
          "Credit Rating Modeling",
          "Discounted Cash Flow Modeling",
          "Financial Metrics Analysis",
          "Leveraged Buyout (LBO) Modeling",
          "Merger & Acquisition (M&A) Modeling",
          "Option Pricing Modeling"
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Build Resilient Strategies with Financial Modeling
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Our financial modeling services go beyond numbers — they deliver
          actionable insights that strengthen strategies, improve planning, and
          maximize shareholder value.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Started
        </Button>
      </div>
    </section>
  );
}
