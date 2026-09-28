import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function InvestmentBankingSupport() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Investment Banking Support Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Elevate your investment banking strategies with{" "}
          <strong>research-driven and analytics-powered insights</strong>. Stay
          ahead of market dynamics and regulatory challenges with Nimble Acuity
          as your trusted partner.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          Investment banking is a regulation-guided field that often overwhelms
          professionals and firms with complex client demands, legislative
          requirements, and market volatility. With{" "}
          <strong>26+ years of expertise</strong>, we provide comprehensive
          support services that combine deep research, analytics, and
          technology-driven solutions to help investment banks, advisory firms,
          and trading companies maximize opportunities and efficiency.
        </p>
        <p>
          Our frameworks cover product, support, and coverage groups, making us
          a preferred partner for leading firms worldwide.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Custom Investment Banking Solutions
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Financial Advisory Services",
            desc: "Strategic financial counsel backed by advanced models and predictive analytics for sustainable growth."
          },
          {
            title: "Investment Research Services",
            desc: "Thorough research on equities, bonds, and commodities using AI and analytics for actionable insights."
          },
          {
            title: "Financial Risk Analysis",
            desc: "Predictive modeling to identify, assess, and mitigate risks in volatile financial markets."
          },
          {
            title: "Fixed Income Research",
            desc: "Sophisticated analysis of bond markets, yields, and macroeconomic indicators for informed investing."
          },
          {
            title: "Equity Capital Markets",
            desc: "IPO modeling, capital structure analysis, WACC calculations, and pre-IPO assessments."
          },
          {
            title: "Debt Capital Markets",
            desc: "Debt and liquidity analysis, credit rating evaluations, bond market updates, and transaction studies."
          },
          {
            title: "Mergers & Acquisitions",
            desc: "Buyer screening, pitch books, IMs, business reviews, and comprehensive market reports."
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

      {/* Technology */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Technology at Work
      </h2>
      <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
        We integrate advanced technologies such as Deep Learning, NLP, AI,
        Robotics, and industry-standard platforms like Capital IQ, FactSet, and
        Thomson Reuters Eikon to deliver precise and real-time investment
        insights.
      </p>

      {/* Industries */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Industries We Serve
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          "Financial Services",
          "Technology",
          "Healthcare",
          "Energy",
          "Real Estate",
          "Manufacturing",
          "Consumer Goods & Retail",
          "Telecommunications",
          "Transportation & Logistics"
        ].map((industry, idx) => (
          <Card key={idx} className="shadow-sm rounded-xl">
            <CardContent className="p-4 text-center font-medium text-gray-700">
              {industry}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        What Our Clients Say
      </h2>
      <blockquote className="max-w-3xl mx-auto text-gray-700 italic mb-12">
        “The services that Nimble Acuity provided helped us achieve substantial
        cost and time savings on several difficult projects. Their prompt
        attention to our requests and attention to detail are excellent.”
        <br />
        <span className="block mt-2 font-semibold text-gray-900">
          – Senior Vice President, Automotive & Transportation Industry Solutions
          Group
        </span>
      </blockquote>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Customer Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Forecasting Model for Healthcare Firm",
            desc: "Developed a cost-effective forecasting model for a US-based healthcare company."
          },
          {
            title: "Custom Solar Energy Plans",
            desc: "Provided primary research services to a leading US-based technology firm."
          }
        ].map((story, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {story.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Investment Banking Support to Drive Growth
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          From M&A to capital markets, Nimble Acuity offers tailored
          investment banking support powered by research, analytics, and
          cutting-edge technology. Partner with us to navigate complex markets
          and unlock growth opportunities.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
