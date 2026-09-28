
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

const FinancialFeasibilityAnalysis: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Financial Feasibility Analysis Services
        </h1>
        <p className="text-lg mb-2">
          We provide an unbiased valuation of financial feasibility through a
          market assessment so you can make public or private investments in
          real estate and infra at rates starting at
          <span className="font-semibold"> $22/hour</span>.
        </p>
        <p className="text-gray-600">
          Ensure your project reports are error-free and investor-ready. Let our
          experts prepare sound financial feasibility reports with accuracy and
          precision.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Financial Feasibility Analysis Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Financial Analysis of Real Estate Market",
              desc: "Expert evaluation of retail, commercial, residential, and hospitality segments to help investors make informed decisions.",
            },
            {
              title: "Repositioning Support",
              desc: "Cost evaluation for repositioning new or existing landmark and iconic projects.",
            },
            {
              title: "Revitalization Strategies",
              desc: "Create redevelopment strategies aimed at attracting tenants and building relevant marketing materials.",
            },
            {
              title: "Opportunity Assessment",
              desc: "Assess existing constraints and opportunities to prevent project abandonment midway.",
            },
            {
              title: "Evaluation of Supply Demand Trends",
              desc: "Study demographics, supply-demand trends, and stakeholder insights to evaluate project scope and future market demands.",
            },
            {
              title: "Development of Financial Models",
              desc: "Build development models within budget to forecast financial implications and guide decisions.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Financial Feasibility Analysis Process We Follow
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Nimble Acuity offers an overview of findings.</li>
          <li>
            Evaluate estimated sales, market potential, competitors, and
            constraints.
          </li>
          <li>
            Explore technical aspects like compliance, labor laws, and
            technology trends.
          </li>
          <li>
            Measure financial scenarios, returns, and capital needs for
            financing.
          </li>
          <li>
            Assess organizational resource requirements and taskforce
            availability.
          </li>
          <li>Create an executive summary of findings.</li>
        </ol>
      </section>

      {/* Other Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>Financial Research Report Services</p>
          <p>Market Research Services</p>
          <p>Business Research Services</p>
          <p>Pharmaceutical Research Services</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">
          Why Nimble Financial Feasibility Analysis Services to Nimble Acuity?
        </h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Quality Assurance with precise and verified data.</li>
          <li>Cost-effective segmentation services tailored to your needs.</li>
          <li>Robust systems ensuring complete data security.</li>
          <li>24/7 availability for faster turnaround times.</li>
          <li>Expert team with decades of financial analysis experience.</li>
          <li>Tested practices compliant with ISO 9001:2015 standards.</li>
          <li>One-stop solution provider at nominal rates.</li>
          <li>24/7 multilingual customer support.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button className="px-6 py-3 text-lg rounded-2xl">
          Get Started with Financial Feasibility Analysis
        </Button>
      </div>
    </div>
  );
};

export default FinancialFeasibilityAnalysis;

