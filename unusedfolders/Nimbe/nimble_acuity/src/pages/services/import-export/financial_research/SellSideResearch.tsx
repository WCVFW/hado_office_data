import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function SellSideResearch() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <NavigationMenu/>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Sell Side Research Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Investment banks, commercial banks, and stock brokers face constant
          pressure to reduce costs while boosting product sales and maintaining
          a solid reputation. Outsourcing sell side research services to an
          experienced provider like Nimble Acuity ensures speed, accuracy, and
          reliable support in a competitive market.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-gray-600 mb-12 space-y-4">
        <p>
          With over <strong>26+ years of experience</strong>, Nimble Acuity’s
          sell side research team supports global clients across industries. We
          bring confidence, expertise, and customized solutions to help you
          maintain balance in your sell side operations.
        </p>
        <p>
          Nimble sell side research services to us and gain access to
          cost-effective, high-quality, and timely insights that strengthen your
          decision-making process.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Nimble Acuity&apos;s Sell Side Research Services
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Organization Analysis",
            desc: "Unbiased analysis covering earnings, business strategies, company overviews, and meeting notes using the latest research tools."
          },
          {
            title: "Thematic Research",
            desc: "In-depth analysis of investment and macro themes, summarized into presentations and white papers for clear communication."
          },
          {
            title: "Pitch Book Creation",
            desc: "Customized sell side pitch books supported by graphs, visuals, and tailored messaging for specific audiences."
          },
          {
            title: "Information Memorandums",
            desc: "Comprehensive memorandums including financial projections, investment teasers, and detailed company insights."
          },
          {
            title: "Equity Research",
            desc: "Equity research fine-tuned to adviser profiles, covering stock picks, fundamental/technical analysis, trends, and forecasts."
          },
          {
            title: "Fixed Income Securities Analysis",
            desc: "High-quality analysis of corporate and government bonds, credit metrics, interest rate trends, and financial models."
          },
          {
            title: "Products Research",
            desc: "Evaluation of structured products, including asset-backed securities and project finance securities, to identify opportunities."
          },
          {
            title: "Lead Generation Support",
            desc: "Support for sell side marketing through database creation, prospect identification, marketing material, and client need analysis."
          },
          {
            title: "M&A Support",
            desc: "End-to-end assistance with mergers and acquisitions, including data mining, modeling, due diligence, and documentation."
          },
          {
            title: "Copywriting Services",
            desc: "Sell side business writing support including newsletters, white papers, sales letters, blogs, and marketing material."
          },
          {
            title: "Sell Side Documentation",
            desc: "Creation of reports such as coverage, macroeconomic, sector, regulatory, commodities, and real estate reports."
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
          Nimble Sell Side Research Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          With ISO-certified processes, strict data security, and a proven track
          record of fast and accurate delivery, Nimble Acuity is your trusted
          partner for sell side research. Reach out to us today and take the
          first step toward smarter, more efficient financial operations.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
