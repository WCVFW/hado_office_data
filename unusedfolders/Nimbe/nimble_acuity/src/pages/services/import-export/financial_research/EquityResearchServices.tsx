import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function EquityResearchServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Equity Research Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Identify <strong>high-performing stocks</strong> set to soar. Our
          equity research services deliver{" "}
          <strong>detailed sector analysis</strong>,{" "}
          <strong>in-depth financial modeling</strong>, and{" "}
          <strong>accurate research reports</strong> to support smarter
          investment decisions.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          Chasing economic trends, interpreting financial data, and analyzing
          equity performance are some of the biggest challenges for investors.
          That’s why institutional investors, fund management firms, and
          financial consultants partner with us. We offer{" "}
          <strong>offshore equity research services</strong> to evaluate company
          portfolios and guide informed investment decisions.
        </p>
        <p>
          Our diversified approach covers macroeconomics, market capitalization,
          and growth-oriented sectors. With value-added perspectives from senior
          research analysts, we provide <strong>differentiated insights</strong>{" "}
          that drive superior returns for your clients.
        </p>
      </div>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Customer Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title:
              "Custom Financial Research Support for a US-based Private Equity Firm",
            desc: "We executed a research project on pension funds across US states in just four months.",
            link: "#"
          },
          {
            title:
              "Turnkey Financial Data Analysis for a US Hedge Fund Organization",
            desc: "Our end-to-end services enabled efficient trading and investment strategies.",
            link: "#"
          }
        ].map((cs, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cs.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{cs.desc}</p>
              <a
                href={cs.link}
                className="text-blue-600 font-medium hover:underline text-sm"
              >
                Read more
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Clients Speak
      </h2>
      <blockquote className="max-w-3xl mx-auto text-center italic text-gray-700 mb-12">
        “We have carefully reviewed your documents and are suitably impressed
        with the meticulous details with which you are conducting your audits to
        ensure exceptionally high quality for the extracted data delivered.”{" "}
        <br />
        <span className="not-italic font-semibold text-gray-900">
          VP, Leading STM Publisher, USA
        </span>
      </blockquote>

      {/* Solutions */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Equity Research Analysis Solutions
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Company Valuation",
            desc: "Use option pricing models and comparable analysis to determine fair company value."
          },
          {
            title: "Investment Recommendation",
            desc: "Data-driven recommendations aligned with risk appetite and goals."
          },
          {
            title: "Earnings Estimates",
            desc: "Accurate estimates based on economic indicators and industry positioning."
          },
          {
            title: "Thematic Research",
            desc: "Identify transformative themes, anticipate disruptions, and capitalize on trends."
          },
          {
            title: "Enterprise Grading & Analysis",
            desc: "Grade enterprises by analyzing financials, market positioning, and prospects."
          },
          {
            title: "Industry Analysis",
            desc: "Track market trends, competitive forces, and regulatory shifts to guide investments."
          },
          {
            title: "Equity Valuation",
            desc: "Relative valuation, stock price analysis, and market condition assessment."
          },
          {
            title: "Portfolio Analysis",
            desc: "Assess portfolio risks, optimize allocations, and monitor statistical performance."
          }
        ].map((solution, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm">{solution.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        More Services We Offer
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto mb-12 list-disc pl-6">
        {[
          "Mergers and Acquisitions (M&A) Analysis",
          "Channel Checks & Primary Market Research",
          "DCF Analysis",
          "IPO Grading & Analysis",
          "WACC Analysis",
          "Sector & Macroeconomics Reports",
          "Earnings Forecast"
        ].map((service, idx) => (
          <li key={idx}>{service}</li>
        ))}
      </ul>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Make Smarter Equity Investments with Expert Insights
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          From company valuations to thematic research, we deliver actionable
          insights that help you build high-performing equity portfolios.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Started
        </Button>
      </div>
    </section>
  );
}
