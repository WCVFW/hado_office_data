import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function BuySideEquityResearch() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Buy Side Equity Research Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Buy side equity research services help asset managers and investment
          bankers with market insights, identify opportunities, and guide
          companies cost-effectively in managing equity buy side processes with
          pension, hedge, or mutual funds.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          Carefully designed equity research services help buy side managers
          with accurate research reports to aid quick decisions.
        </p>
        <p>
          At Nimble Acuity, we work closely with mutual fund companies,
          financial advisory firms, hedge funds, proprietary traders, and trust
          firms to derive statistics and strategies backed by exhaustive
          research. Our experts help analyze trends, track valuable information,
          and build financial models.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Buy Side Equity Research Services We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Competitor Analysis & Portfolio Management",
            desc: "We assess competitive forces impacting buy side decisions through company profiling, SWOT analysis, CAPM, benchmarking, and portfolio evaluation."
          },
          {
            title: "Financial Modeling & Analysis",
            desc: "Our team delivers LBO & DCF modeling, sensitivity analysis, tax and valuation support, forecasts, and WACC calculations to support buy side research."
          },
          {
            title: "Risk & Fixed Income Research",
            desc: "We analyze risks in structured products like CDOs and MBS, while reviewing global fixed-income opportunities using credit ratings and proprietary models."
          },
          {
            title: "Testing Investment Hypothesis & M&A Support",
            desc: "We provide M&A due diligence, merger models, data room setup, transaction support, and idea back-testing before final buy side decisions."
          },
          {
            title: "Report Creation",
            desc: "Our team creates insightful PPTs, macroeconomic reports, regulatory reports, and sector-specific reports covering real estate, commodities, and global markets."
          }
        ].map((service, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Buy Side Equity Research Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Nimble Acuity’s buy side equity research services help financial
          institutions make informed decisions with accurate insights,
          structured reports, and comprehensive models. Partner with us to gain
          a competitive edge and achieve sustainable growth.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
