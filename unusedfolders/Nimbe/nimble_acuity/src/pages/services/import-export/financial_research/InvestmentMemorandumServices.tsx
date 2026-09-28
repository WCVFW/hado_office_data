import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";


export default function InvestmentMemorandumServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      
     <NavigationMenu/>
      <div className="text-center mb-12">
       
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Investment Memorandum Consultation Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nimble Acuity helps businesses{" "}
          <strong>increase investor awareness</strong> and raise funds with
          precise, well-structured investment memorandums. Our customized
          services are a cost-effective alternative to resource-heavy in-house
          work, helping you save time and money while making risk-free decisions.
        </p>
      </div>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Investment Memorandum Services We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Company Profile Collection",
            desc: "Collecting company-specific data, collating profiles, and addressing complex client requirements."
          },
          {
            title: "Detailed Financial Analysis",
            desc: "Evaluation of income statements, cash flow, balance sheets, IPR projections, and deal structures."
          },
          {
            title: "Investor Overviews",
            desc: "Overview of current and potential investors with details on goals, contact info, and typologies."
          },
          {
            title: "Investor Rationale",
            desc: "Analysis of fund utilization, ROI timelines, and investment risk assessment."
          },
          {
            title: "Investment Proposals",
            desc: "Executive summaries and detailed proposals narrowing down funding opportunities."
          },
          {
            title: "Gap Analysis",
            desc: "Identification of gaps between projected results and current performance for better decisions."
          },
          {
            title: "Design Support",
            desc: "Data-rich presentations with visuals, graphs, and branding elements for clear communication."
          },
          {
            title: "Tax Reports & Documentation",
            desc: "Guidance on specialized tax treatments, reports, and macroeconomic insights."
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

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Our Consultation Process
      </h2>
      <ol className="max-w-4xl mx-auto text-gray-700 space-y-4 mb-12 list-decimal pl-6">
        <li>
          <strong>Evaluation:</strong> Define format, sections, objectives, and
          conduct background and financial analysis.
        </li>
        <li>
          <strong>Analysis:</strong> Company profiling, industry analysis,
          market studies, valuation models, and cash flow planning.
        </li>
        <li>
          <strong>Investment Strategy:</strong> Map management, define sales and
          marketing strategies, structure deals, and plan ROI strategies.
        </li>
        <li>
          <strong>Summary:</strong> Draft financial plan, research assessments,
          and investment proposal.
        </li>
        <li>
          <strong>Report Preparation:</strong> Design reports in Word, PPT, or
          InDesign with infographics, charts, and graphs before finalizing.
        </li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Benefits of Choosing Nimble Acuity
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {[
          {
            title: "Affordable Pricing",
            desc: "Competitive structures based on project complexity and time, tailored to your budget."
          },
          {
            title: "Experienced Analysts",
            desc: "A team of skilled financial experts adept at creating high-quality investment memorandums."
          },
          {
            title: "Comprehensive Security",
            desc: "Stringent personnel, hardware, and software safeguards for full data confidentiality."
          },
          {
            title: "World-class Infrastructure",
            desc: "Robust infrastructure ensuring uninterrupted operations, connectivity, and security."
          },
          {
            title: "Quick Turnaround",
            desc: "Global delivery centers enable fast, accurate, and efficient service."
          },
          {
            title: "ISO Compliant Processes",
            desc: "Strict adherence to ISO standards ensures uncompromised quality across industries."
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
          Build Impactful Investment Memorandums with Expert Guidance
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          From detailed financial analysis to compelling presentations, we help
          you craft investment memorandums that inspire investor confidence and
          secure funding.
        </p>
        <Button size="lg" className="rounded-full px-8">
          Get Consultation
        </Button>
      </div>
    </section>
  );
}

