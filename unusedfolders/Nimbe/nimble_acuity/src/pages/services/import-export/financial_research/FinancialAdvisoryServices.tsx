import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function FinancialAdvisoryServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financial Advisory Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          In today’s volatile economy, businesses face rising competition, strict
          regulations, and investor scrutiny. Partner with{" "}
          <strong>Nimble Acuity</strong> for trusted financial advisory
          services tailored to your industry, culture, and strategic needs.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12 space-y-4">
        <p>
          With decades of expertise across investors, financial service firms,
          and multinational enterprises, our team provides actionable insights
          that drive smarter decision-making and sustainable growth.
        </p>
        <p>
          We deliver <strong>dedicated financial advisory solutions</strong>{" "}
          designed to help you structure, evaluate, and execute investment
          options efficiently — from mid-market firms to large global
          conglomerates.
        </p>
      </div>

      {/* Key Solutions */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Financial Advisory Solutions We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Financial Planning Services",
            desc: "Advising businesses on optimal financial choices aligned with needs, circumstances, and goals."
          },
          {
            title: "Wealth Advisory Services",
            desc: "Comprehensive analysis of operations and performance to maximize long-term wealth growth."
          },
          {
            title: "Financial Accounting Advisory",
            desc: "Automation and streamlining of bookkeeping and accounting with specialized solutions."
          },
          {
            title: "Financial Management Advisory",
            desc: "Guidance to effectively manage finances and ensure sustainable business growth."
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

      {/* Industries */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Industries We Cater To
      </h2>
      <ul className="grid md:grid-cols-2 gap-3 text-gray-700 max-w-4xl mx-auto list-disc pl-6 mb-12">
        {[
          "Real Estate",
          "Retail & CPG",
          "Banking",
          "Chemicals",
          "Oil & Gas",
          "Corporates",
          "Accounting Firms"
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Why Choose Nimble Acuity?
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-700 max-w-4xl mx-auto list-disc pl-6 mb-12">
        {[
          "Highly qualified advisory team with global expertise",
          "Use of cutting-edge financial technologies",
          "Flexible and competitive pricing models",
          "Customized advisory solutions tailored to client needs",
          "Robust infrastructure and global delivery centers",
          "Quick turnaround times with scalable support",
          "Strict data confidentiality and security policies"
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Additional Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Additional Services You Can Benefit From
      </h2>
      <ul className="grid md:grid-cols-2 gap-3 text-gray-700 max-w-4xl mx-auto list-disc pl-6 mb-12">
        {[
          "Financial Risk Analysis Services",
          "Asset Management Support Services",
          "Financial Modeling Services",
          "Financial Analysis Services",
          "Credit Risk Modeling Services",
          "Corporate Finance Support Services"
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Customer Success Stories
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title:
              "Primary Research for a Luxury Air Travel Provider",
            desc: "Delivered accurate and high-quality research quickly for a California-based luxury air travel company."
          },
          {
            title:
              "Primary Research for a Leading US Technology Provider",
            desc: "Provided accurate and timely research services that delighted a top US-based technology client."
          }
        ].map((story, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm">{story.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Transform Your Business with Expert Financial Advisory
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Let our experts guide your financial decisions with tailored advisory
          services that drive profitability, efficiency, and long-term value
          creation.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Started
        </Button>
      </div>
    </section>
  );
}
