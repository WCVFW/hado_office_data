import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FinancialResearchAnalysisServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
       <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financial Research and Analysis Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Make <strong>smarter financial decisions</strong> with our specialized
          financial research and analysis services. We help clients improve{" "}
          <strong>profitability, efficiency, and liquidity</strong> by providing
          actionable insights, accurate statements, and customized reporting.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          Our financial data analysis services help organizations adapt to
          changing market trends while optimizing processes, fund management,
          and decision-making. With years of expertise, our financial analysts
          deliver <strong>systematic financial statement analysis</strong> that
          provides both hindsight on past performance and foresight for future
          strategies.
        </p>
        <p>
          By understanding your business requirements, we prepare{" "}
          <strong>precise periodic statements</strong> and deliver customized
          reports that empower confident and effective financial planning.
        </p>
      </div>

      {/* Services List */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Financial Data Analysis Services
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto mb-12 list-disc pl-6">
        {[
          "Ad-hoc reports (fact books and competitor analysis)",
          "Analysis of financial statements (monthly, quarterly, annual)",
          "Prospectus and offer document analysis",
          "Portfolio structure analysis",
          "Board and audit committee presentations",
          "Corporate financial statements",
          "Financial ratio, break-even, NPV & IRR analysis",
          "Creation and maintenance of databases & libraries"
        ].map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>

      {/* Engagement Model */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Engagement Model: Flexible & Client-Focused
      </h2>
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          Outsourcing financial analysis to us ensures{" "}
          <strong>cost savings and scalability</strong>. Depending on your
          project needs, we offer flexible engagement models including hourly
          contracts, full-time commitments, and FTE (Full-Time Equivalent)
          models.
        </p>
        <p>
          You’ll work with a <strong>dedicated research assistant</strong> who
          serves as your single point of contact, ensuring rapid responses and
          seamless communication.
        </p>
      </div>

      {/* Types of Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Types of Financial Research & Analysis Services
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Financial Research",
            desc: "Equity, currency, fund, interest rate research, and risk management."
          },
          {
            title: "Economic Research",
            desc: "Country reports and sector outlooks for strategic insights."
          },
          {
            title: "Business Research",
            desc: "Industry, competitor, and supply chain analysis with executive summaries."
          },
          {
            title: "Financial Knowledge Management",
            desc: "Content modules for e-learning, simulations, and test preparation."
          },
          {
            title: "Financial Product Development",
            desc: "Model development, simulations, and back-testing for performance analysis."
          }
        ].map((item, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Methodology */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Financial Analysis Tools & Methodology
      </h2>
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          We leverage the latest <strong>financial modeling tools</strong> to
          deliver accurate, precise, and actionable reports. Our methodologies
          are designed to simplify decision-making by addressing the critical
          questions that influence your company’s financial performance.
        </p>
        <p>
          With <strong>systematic analysis and data modeling</strong>, we ensure
          you have the insights you need to improve profitability, stability,
          and growth.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Empower Your Decisions with Financial Insights
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          From ad-hoc reports to advanced modeling, our financial research and
          analysis services give you the clarity and confidence needed to
          optimize business performance.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Started
        </Button>
      </div>
    </section>
  );
}
