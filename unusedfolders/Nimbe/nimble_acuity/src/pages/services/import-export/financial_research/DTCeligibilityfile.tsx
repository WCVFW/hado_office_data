// app/dtc-eligibility/page.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import NavigationMenu from "../MegaMenu"

export default function DtcEligibilityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <NavigationMenu/>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble DTC Eligibility Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Ensure seamless DTC compliance with our expert services. Avoid potential rejections owing to late SEC filing, unregistered re-sales, and name changes.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700 space-y-4">
        <p>
          For businesses aiming to optimize their securities trading, achieving deposit eligibility with Depository Trust Company (DTC) is an essential step. This eligibility increases efficiency and speed by facilitating smooth electronic securities transfers and settlements. Our services address these complexities and help businesses secure DTC eligibility. We undertake the task of liaising with market makers, drafting detailed eligibility request letters, and ensuring effective communication.
        </p>
        <p>
          Our services assist your business meet all the crucial eligibility criteria, including ethical business practices, financial stability, and transparent information dissemination. We ensure strict adherence to DTC’s stringent requirements while prioritizing the secure exchange of your company's securities to maintain high standards of data security. Collaborate with us to anticipate heightened investor confidence, quicker market entry, and a wider market reach.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Nimble Acuity Provided Secondary Research for a Swiss Hospitality Company",
              desc: "A Swiss hospitality provider required detailed secondary research on 22 European hotels. We delivered a comprehensive data-rich report, impressing the client with quality and cost-effectiveness.",
            },
            {
              title: "Nimble Acuity Provided Primary Research Services to Top Chinese Trade Consultants",
              desc: "A Shanghai-based trade consultant obtained comprehensive data on Swiss boarding schools within three days. We enhanced their service delivery by 50% and helped them provide more value to their customers.",
            },
          ].map((story, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Clients Speak</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “We have carefully reviewed your documents and are suitably impressed with the meticulous details with which you are conducting your audits to ensure exceptionally high quality for the extracted data delivered.”
        </blockquote>
        <p className="mt-4 font-semibold">VP, Leading STM Publisher, USA</p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Premier DTC Eligibility Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "DRS Transaction Services",
              points: [
                "Direct Registration System (DRS) for asset holding",
                "Book-entry form for assets",
                "Absence of physical certificates",
                "Efficiency and safety in transactions",
              ],
            },
            {
              title: "DTC Application Submission",
              points: [
                "Assistance in DTC applications",
                "Preparation of DTC-specific documents and forms",
                "Guidance through the DTC eligibility process",
                "Focus on DTC eligibility for companies",
              ],
            },
            {
              title: "DTC FAST Eligibility",
              points: [
                "Eligibility for DTC's FAST program",
                "Emphasis on electronic transfer",
                "Adherence to DTC's FAST requirements",
                "Streamlined transfer processes",
              ],
            },
            {
              title: "DTC FAST Services",
              points: [
                "Provision of DTC's FAST program services",
                "Facilitation of securities transfers",
                "Reduction in physical certificate requirements",
                "Cost-efficient transaction processes",
              ],
            },
            {
              title: "DWAC Transaction Services",
              points: [
                "Services centered around Deposit/Withdrawal at Custodian (DWAC)",
                "Direct links between transfer agents and DTC",
                "Reduced transaction timeframes and complexity",
                "Support in DWAC-related compliance",
              ],
            },
            {
              title: "DTC Preparation and Submission",
              points: [
                "DTC-specific document preparation",
                "Compliance with DTC standards",
                "DTC application submission process",
                "Simplified process for issuers",
              ],
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {service.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Detailed Process Flow for DTC Eligibility Services</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Client Consultation",
            "Document Review",
            "Regulatory Compliance Check",
            "Application Preparation",
            "Application Submission and Tracking",
            "Post-Approval Support",
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">
                  {`0${i + 1}.`} {step}
                </h4>
                <p className="text-gray-600">
                  {i === 0 && "We start with a detailed consultation to understand your securities, compliance needs, and objectives."}
                  {i === 1 && "Our team reviews the necessary documentation to ensure accuracy and a smooth process."}
                  {i === 2 && "We perform rigorous checks to ensure compliance with regulatory standards."}
                  {i === 3 && "We prepare comprehensive eligibility applications using our DTC expertise."}
                  {i === 4 && "We manage submissions and track progress, updating you at every stage."}
                  {i === 5 && "We extend post-approval support for paperwork, compliance, and future needs."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us as Your DTC Eligibility Service Provider?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Expertise in Documentation",
            "Regulatory Mastery",
            "Leading-Edge Methodologies",
            "Transparent Pricing",
            "Dedicated Support",
            "Proactive Compliance Checks",
            "Insightful Reporting and Analytics",
            "End-to-End Service Coverage",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Work With</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          Banking & Finance • Healthcare • Hospitality • Manufacturing • Restaurant/Retail • Accounting • Technology • Real Estate • Education • Insurance • Legal Services • Manufacturers & Distributors • Grocery/Food Distributors
        </p>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Business Research Services",
              desc: "We use modern data processing tools to assess industry metrics and provide businesses with a comprehensive understanding of their operating environment.",
            },
            {
              title: "Financial Modeling Services",
              desc: "We generate dynamic financial models using predictive modeling techniques to facilitate better investment decisions, strategic planning, and financial stability.",
            },
            {
              title: "Competitor Analysis Services",
              desc: "We provide insights into competitors' brand positioning and strategies, helping businesses gain a competitive advantage.",
            },
            {
              title: "Market Research Services",
              desc: "We apply demographic and psychographic analysis to better understand target audiences and tailor products accordingly.",
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Experience Our Engaging Articles</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "The Power of Data - How Research Services Drive Informed Decision-Making",
              desc: "Discover the transformative power of data and the role of research services in decision-making. Learn how AI, ML, and cloud computing are shaping businesses.",
            },
            {
              title: "Revolutionary Growth of Research Services Industry in the Next Decade",
              desc: "Explore the predicted revolutionary growth in the research services industry, powered by new technologies and trends.",
            },
          ].map((article, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-600">{article.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble DTC Eligibility Services to Nimble Acuity
        </h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          We focus on reducing application filing costs, minimizing brokerage and clearing fees, and implementing secure methods for exchanging securities. Outsourcing DTC eligibility services allows your team to focus on core business activities while we handle compliance and eligibility needs.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 rounded-2xl shadow-lg">
          Contact Us Today
        </Button>
      </section>
    </div>
  )
}
