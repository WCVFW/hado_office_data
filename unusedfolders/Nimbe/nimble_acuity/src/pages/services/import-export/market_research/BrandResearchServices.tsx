import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function BrandResearchServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">
          Nimble Brand Research Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Want to make or change the perception of your brand? Nimble Acuity
          offers expert brand research solutions to measure your brand potential,
          performance, threats, and opportunities — starting at just $14/hour.
        </p>
        <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-10">
          Brand Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Brand Positioning Strategy",
              desc: "Gain real-time data to analyze and refine your brand’s positioning before entering the market.",
            },
            {
              title: "Promotional Channel Analysis",
              desc: "Identify the marketing channels and campaigns that work best for your products and services.",
            },
            {
              title: "Brand Positioning Optimization",
              desc: "Leverage research data to fix positioning gaps and successfully launch or establish your brand.",
            },
            {
              title: "Customer Analysis",
              desc: "Measure how your brand’s marketing and advertising impacts your customers and target audience.",
            },
            {
              title: "Perceptual Mapping",
              desc: "Analyze market mood and public perception using advanced mapping models.",
            },
            {
              title: "Brand Value Monitoring",
              desc: "Track perceived brand value, detect changes in customer behavior, and take corrective actions.",
            },
            {
              title: "Brand Market Research",
              desc: "Understand your competitive positioning, market mood, and build a loyal customer base.",
            },
            {
              title: "On-demand Specialists",
              desc: "Hire dedicated brand research specialists skilled in strategy, analysis, and branding initiatives.",
            },
            {
              title: "Competitor Analysis",
              desc: "Benchmark competitors, monitor their strategies, and identify your gap areas for improvement.",
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-10">
          Our Brand Research Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            { step: "01", title: "Identify Problem" },
            { step: "02", title: "Define Procedures" },
            { step: "03", title: "Conduct Research" },
            { step: "04", title: "Create Reports" },
            { step: "05", title: "Delivery Reports" },
          ].map((p, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <span className="block text-2xl font-bold text-pink-600 mb-2">
                  {p.step}
                </span>
                <h3 className="font-semibold text-gray-700">{p.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Market Feasibility Analysis", "Market Sizing Services", "Syndicated Research Support", "Industry Analysis Services"].map(
            (srv, i) => (
              <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-pink-700">{srv}</h3>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Brand?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with Nimble Acuity to unlock powerful insights into your brand’s
          potential and take the right steps toward growth and success.
        </p>
        <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
