import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FixedIncomeResearch() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Fixed Income Research Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity is one of the most preferred fixed income research
          service providers, trusted by satisfied clients worldwide. With over{" "}
          <strong>26+ years of expertise</strong> in financial research, our
          experts deliver insights on complex financial environments and guide
          high-risk business decisions. We help you adapt to global economic
          changes and volatile bond markets with confidence.
        </p>
      </div>

      {/* Services Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          By outsourcing fixed income research services to Nimble Acuity, you
          gain access to industry-best expertise in analyzing credit risks,
          studying corporate bonds, and ensuring compliance with global
          standards. We deliver high-end reports, models, and strategies that
          consider market conditions, interest rate fluctuations, and advanced
          analytics tools.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Fixed Income Research Services We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "In-depth Analysis",
            desc: "Analysis of spreads, yield curves, convertibles, and emerging markets for better investment opportunities."
          },
          {
            title: "Macroeconomics Analysis",
            desc: "Evaluation of interest rates, FX markets, economic indicators, regulations, and thematic research."
          },
          {
            title: "Credit Ratings Analysis",
            desc: "Assessing issuer capability, obligations, and overall creditworthiness for safe investments."
          },
          {
            title: "Municipal Bond Issuers Analysis",
            desc: "Specialized analysis of issuers such as cities, hospitals, and public utilities."
          },
          {
            title: "Research & Reporting",
            desc: "Tailor-made reports covering investment goals, market trends, and fixed income opportunities."
          },
          {
            title: "Products Research",
            desc: "Evaluation of inflation-hedged products, securitized products, alpha strategies, and leveraged finance."
          },
          {
            title: "Legal & Regulatory Evaluation",
            desc: "Compliance-focused analysis of regulations across markets to evaluate opportunities and risks."
          },
          {
            title: "Convertible Bonds",
            desc: "Valuation combining straight bond value and option value using advanced models and credit spreads."
          },
          {
            title: "Asset Allocation",
            desc: "Support in asset planning and allocation strategies to optimize returns using latest market insights."
          },
          {
            title: "Financial Modeling",
            desc: "Models covering stress testing, capital structure, duration matching, debt analysis, and forecasts."
          },
          {
            title: "Accounting Support",
            desc: "Assistance with investment and accounting activities, backed by accurate financial insights."
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

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Benefits of Hiring Nimble Acuity
      </h2>
      <ul className="max-w-3xl mx-auto text-gray-700 space-y-3 list-disc list-inside mb-12">
        <li>Over 26+ years of experience in the financial industry</li>
        <li>Trusted, qualified team from diverse financial backgrounds</li>
        <li>Cost-effective, flexible pricing models</li>
        <li>State-of-the-art infrastructure and access to databases</li>
        <li>Quick turnaround time for all deliverables</li>
        <li>Highly secure data storage and confidentiality protocols</li>
      </ul>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Partner with Nimble Acuity for Fixed Income Research
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          From credit analysis to financial modeling, Nimble Acuity provides
          comprehensive fixed income research tailored to your needs. Connect
          with us today and make confident investment decisions with expert
          guidance.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
