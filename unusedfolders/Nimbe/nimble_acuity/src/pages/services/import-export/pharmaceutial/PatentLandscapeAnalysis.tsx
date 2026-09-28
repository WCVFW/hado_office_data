import React from "react";
import { CheckCircle, Shield, Clock, Users, FileSearch, BarChart3 } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function PatentLandscapeAnalysis() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Patent Landscape Analysis</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Get access to accurate and updated information on recent technological and patent developments at prices starting at <span className="font-semibold">$14/hour</span>.
        </p>
        <p className="max-w-4xl mx-auto">
          Helping global enterprises with accurate and up-to-date information on technological developments and competitors to understand the value of their patent portfolios. Our services position your patenting initiatives in a highly competitive environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Patent Landscape Analysis Services</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "Identify gaps and opportunities in technological, pharmaceutical, research sectors and markets",
            "Optimize research and development efforts",
            "Choose the best combination of new technology creation and existing product improvement",
            "Identify strategic partners for development and market collaboration",
            "Maximize profitability and effectiveness of licensing strategies",
          ].map((service, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Patent Analysis Process</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Data Collection",
              desc: "Identify players, geographical coverage, and pertinent trends.",
              icon: FileSearch,
            },
            {
              title: "Patent Information Analysis",
              desc: "Synthesize data, identify clusters, and project future trends.",
              icon: BarChart3,
            },
            {
              title: "Strategy Definition",
              desc: "Compare and rank candidate strategies for commercialization, licensing, or acquisition.",
              icon: Users,
            },
            {
              title: "Patent Action Plan",
              desc: "Define objectives, timelines, resources, success factors, and risk mitigation.",
              icon: Shield,
            },
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <step.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["Business Research Services", "Market Research Services", "Financial Research Report Services", "Research Reports Services"].map((srv, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="font-medium">{srv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Nimble Patent Research Services to Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Cost-effective Prices", desc: "Flexible pricing tailored for startups to large MNCs." },
            { title: "Quick TAT", desc: "Fast, efficient patent analysis by in-house experts." },
            { title: "High-quality", desc: "Continuous training ensures updated knowledge and accuracy." },
            { title: "Expertise", desc: "Skilled professionals ensure deliverables are accurate and actionable." },
            { title: "Adherence to Quality Standards", desc: "ISO-certified processes guarantee excellence." },
            { title: "Full SLA Compliance", desc: "Service-level agreements ensure your expectations are met." },
            { title: "Data Security", desc: "NDA and secured IT systems ensure confidentiality." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-2">KOL Identification for UK Healthcare Provider</h3>
            <p className="text-gray-600 text-sm mb-2">
              Delivered hundreds of KOL database services using proprietary methodology to ensure accuracy.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read more →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold mb-2">Secondary Research for Swiss Hospitality Provider</h3>
            <p className="text-gray-600 text-sm mb-2">
              Provided accurate and reliable research services within quick turnaround time.
            </p>
            <a href="#" className="text-blue-600 font-medium">Read more →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Hire Us for Patent Analysis</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Get highly cost-effective and accurate patent landscape analysis services. Save 50% or more compared to maintaining an onshore team while ensuring the highest quality.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
