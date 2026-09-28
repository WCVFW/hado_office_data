import React from "react";
import NavigationMenu from "../MegaMenu";

const GapAnalysis: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <NavigationMenu/>
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nimble Gap Analysis Services
        </h1>
        <p className="text-lg text-gray-600">
          Leverage critical intelligence and take proactive steps to improve the
          performance of your business by outsourcing GAP analysis starting at
          just <span className="font-semibold text-blue-600">$14/hour</span>
        </p>
      </header>

      {/* Intro */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
        <p>
          Any business that has serious goals and aspires to grow in the future
          should approach them systematically. Gap analysis provides a structured
          way to compare the present state of a business with its desired future
          state, identifying shortcomings, areas for improvement, and new
          opportunities. Without gap analysis, businesses risk making uninformed
          decisions, while with it, they gain clarity on what to fix, expand, or
          modify for sustainable growth.
        </p>
        <p>
          <span className="font-semibold text-blue-600">Nimble Acuity (Nimble Acuity)</span> brings over 26+ years of experience in
          providing professional gap analysis services. Our large team of skilled
          analysts conducts in-depth assessments of your current performance and
          business goals to craft reports that guide your business toward
          achieving its aspirations.
        </p>
      </div>

      {/* Services Offered */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Gap Analysis Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "General Gap Analysis",
              desc: "Gain insights into current practices and organizational operations, and identify actionable steps for business growth.",
            },
            {
              title: "Auditing Gap Analysis",
              desc: "Compare your internal auditing practices with industry standards to close compliance and efficiency gaps.",
            },
            {
              title: "Certification Gap Analysis",
              desc: "Evaluate readiness for certifications by identifying and addressing compliance gaps with global standards.",
            },
            {
              title: "Market Gap Analysis",
              desc: "Identify under-serviced markets with high demand and low supply to expand business opportunities.",
            },
            {
              title: "Performance Gap Analysis",
              desc: "Spot underperforming teams and processes and implement measures to meet performance goals effectively.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Gap Analysis Process
        </h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li>
            <span className="font-semibold">Requirement Discovery:</span> We
            collaborate to understand your business, goals, and project scope,
            outlining resources, teams, and costs.
          </li>
          <li>
            <span className="font-semibold">Strategy Selection:</span> Based on
            your chosen service (performance, market, certification, etc.), we
            build a tailored assessment strategy.
          </li>
          <li>
            <span className="font-semibold">Gap Analysis:</span> We compare your
            current performance with desired outcomes, identify disparities, and
            suggest effective solutions.
          </li>
          <li>
            <span className="font-semibold">Reporting:</span> Findings are
            compiled into a comprehensive report with actionable
            recommendations.
          </li>
        </ol>
      </div>

      {/* Other Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Financial Research Report Services</li>
          <li>Market Research Services</li>
          <li>Business Research Services</li>
          <li>Pharmaceutical Research Services</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Nimble Acuity For Gap Analysis Services?
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Reliable and secure ISO/IEC 27001:2022 certified data management.</li>
          <li>Cost-effective, customized pricing options for every business size.</li>
          <li>Quick turnaround times powered by efficient teams and modern tools.</li>
          <li>Access to high-end infrastructure with the latest systems and backup.</li>
          <li>Certified gap analysis services aligned with industry standards.</li>
          <li>24/7 customer support across multiple communication channels.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ready to Close Business Gaps and Drive Growth?
        </h3>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default GapAnalysis;
