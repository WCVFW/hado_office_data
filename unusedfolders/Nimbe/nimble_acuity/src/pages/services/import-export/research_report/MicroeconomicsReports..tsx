import React from "react";
import NavigationMenu from "../MegaMenu";

const MicroeconomicsReports: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Microeconomics Reports Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get access to comprehensive microeconomics reports created by
          highly-skilled and qualified economists at prices starting from only
          <span className="font-semibold text-blue-600"> $14/hour</span>.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <p className="mb-6">
          Are you looking for clarity on microeconomic trends to better guide
          your business decision-making? Do you need authoritative reports at
          affordable prices to stay competitive? Nimble Acuity (Nimble Acuity) provides
          a full range of microeconomics reports to help you evaluate production
          costs, market efficiency, competitors, and consumer behavior — giving
          you actionable insights to grow your business.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Microeconomics Reports Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Supply and Demand Report Services",
            "Production Cost Report Services",
            "Transaction Advisory Services",
            "Competitor Report Services",
            "Intangible Asset Valuation Services",
            "Labor Economics Report Services",
            "Tax Advisory Services",
            "Market Structure Report Services",
            "Key Indicator Report Services",
            "Intellectual Property Assessment Services",
            "Audit Support Services",
            "Capital Asset Advisory Services",
            "Private Equity Services",
            "Start-up Valuation Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                Expert insights and detailed analysis to support your business
                decisions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Benefits of Using Nimble Acuity's Microeconomics Reports
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc pl-6">
          <li>Stay updated on price formations in specific markets</li>
          <li>Receive accurate microeconomics intelligence</li>
          <li>Measure consumer behavior and market impacts</li>
          <li>Optimize product/service production and distribution</li>
          <li>Develop risk mitigation strategies</li>
          <li>Keep investors and stakeholders informed</li>
          <li>Understand policy and economic impacts</li>
          <li>Get fully personalized reports tailored to your needs</li>
        </ul>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Microeconomics Reports Creation Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            "Requirement Analysis",
            "Planning",
            "Strategizing the Methodology",
            "Research Begins in Phases",
            "Analysis and Data Collation",
            "Report Creation",
            "Final Delivery",
          ].map((step, idx) => (
            <div key={idx} className="flex items-start">
              <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold mr-4">
                {idx + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Prices",
            "World-class Infrastructure",
            "High-quality Services",
            "Data Security",
            "Quick Turnaround Time",
            "Latest Software Tools",
            "Experienced Team",
            "Dedicated Project Manager",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="font-semibold">
              Research Report for Top UK-based Headhunting Firm
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Nimble Acuity experts researched and performed due diligence on candidates
              using financial magazines, the FSA Register, and company websites,
              delivering a high-quality report.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="font-semibold">
              Market Research & Analysis for US Footcare Major
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Our team delivered a market entry strategy for the South African
              market with a detailed report covering 23 cities in just 15 days.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <blockquote className="italic text-lg text-gray-700 mb-4">
          “We have carefully reviewed your documents and are suitably impressed
          with the meticulous details with which you are conducting your audits
          to ensure exceptionally high quality for the extracted data
          delivered.”
        </blockquote>
        <p className="font-semibold text-gray-800">
          – VP, Leading STM Publisher, USA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Microeconomics Report Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with Nimble Acuity for accurate, insightful, and affordable
          microeconomics reports tailored to your business. Let our experts help
          you make informed decisions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default MicroeconomicsReports;
