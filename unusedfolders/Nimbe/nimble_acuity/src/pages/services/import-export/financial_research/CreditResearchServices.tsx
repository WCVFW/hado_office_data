import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function CreditResearchServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Credit Research Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Analyzing credit issues such as{" "}
          <strong>CDOs, CDSs, and distressed debt</strong> can be highly
          complex. Nimble Acuity delivers accurate, timely, and reliable credit
          research services that empower you to navigate risks seamlessly.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          With <strong>26+ years of experience</strong>, we offer expert credit
          research solutions tailored to your unique needs. From cash flow
          modeling to distressed debt analysis, our services help you identify
          risks, uncover opportunities, and make informed investment decisions.
        </p>
      </div>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Credit Research Services We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "High-Yield & Leveraged Finance",
            desc: "Detailed analysis of specialized credit issues arising from turnarounds, mergers, and restructuring situations."
          },
          {
            title: "Investment Grade",
            desc: "In-depth examination of securities that may appear similar, ensuring accurate risk assessment."
          },
          {
            title: "Distressed Debt",
            desc: "Identifying undervalued and overvalued distressed debt instruments to minimize investment mistakes."
          },
          {
            title: "U.S. Municipals",
            desc: "Continuous monitoring of government and municipal debt markets to uncover optimal investment values."
          },
          {
            title: "Convertibles",
            desc: "Evaluation of pricing structures between stocks and bonds for optimal debt-equity participation."
          },
          {
            title: "Structured Products",
            desc: "Advanced analysis of asset-backed securities and their impact on corporate balance sheets."
          },
          {
            title: "Sovereign Debt",
            desc: "Cross-country analysis of government debts to identify risks and opportunities in global credit markets."
          },
          {
            title: "Emerging Markets",
            desc: "Research on balancing credit obligations between emerging and developed markets to maximize profits."
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

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Credit Research Process
      </h2>
      <ol className="max-w-4xl mx-auto text-gray-700 space-y-4 mb-12 list-decimal pl-6">
        <li>
          <strong>Scope Finalization:</strong> Define sector, geography,
          valuation methodology, deliverables, and milestones.
        </li>
        <li>
          <strong>Primary & Secondary Research:</strong> Collect and analyze
          data, industry reports, and competitor profiles.
        </li>
        <li>
          <strong>Financial Model Building:</strong> Prepare interim models,
          conduct reviews, and finalize models post client feedback.
        </li>
        <li>
          <strong>Report Preparation:</strong> Draft comprehensive reports with
          sectoral, economic, and technical analysis.
        </li>
        <li>
          <strong>Support & Analytics:</strong> Provide live support on pitches,
          deals, and decision-support dashboards.
        </li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Why Choose Nimble Acuity for Credit Research?
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Affordable Services",
            desc: "Pricing based on project complexity and timelines, ensuring cost-effective solutions."
          },
          {
            title: "Certified Analysts",
            desc: "Experienced analysts who integrate real-time market data into every analysis."
          },
          {
            title: "Stringent Security",
            desc: "Robust data security measures and regular client reporting for peace of mind."
          },
          {
            title: "Strict Quality Systems",
            desc: "Quality control processes to deliver accurate and reliable credit research."
          },
          {
            title: "Robust Infrastructure",
            desc: "State-of-the-art infrastructure enabling secure, efficient, and confidential services."
          },
          {
            title: "Quick Turnaround",
            desc: "Well-planned resources and processes ensure projects are completed on time."
          },
          {
            title: "Project Transparency",
            desc: "Regular updates with numbers, analysis, and recommendations for full visibility."
          }
        ].map((benefit, idx) => (
          <Card key={idx} className="shadow-sm rounded-xl">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Gain Clarity and Confidence with Credit Research Support
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Partner with Nimble Acuity for end-to-end credit research services.
          From distressed debt to emerging markets, our analysts deliver insights
          that protect your business and drive smarter investments.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Started
        </Button>
      </div>
    </section>
  );
}
