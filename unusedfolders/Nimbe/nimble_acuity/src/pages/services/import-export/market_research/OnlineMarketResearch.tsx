
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function OnlineMarketResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white text-gray-800">
      {/* Hero Section */}
      
      <section className="text-center py-20 px-6">
        <NavigationMenu/>
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
          Nimble Online Market Research Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          With over two decades of experience in Market Research services, Nimble Acuity helps you plan and execute growth strategies by providing accurate data to back your decisions. Our analysts use the latest methods and technologies to keep your business ahead of the competition.
        </p>
        <Button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl shadow-lg">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
          Our Online Market Research Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Promotional Research",
            "Brand Awareness Research",
            "Brand & Image Equity Research",
            "Brand Positioning Research",
            "Competitive Research",
            "Customer Satisfaction Research",
            "Employee Satisfaction Research",
            "Geo-demographic Analysis"
          ].map((service, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-teal-600 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  High-quality web survey and analysis services tailored to your unique business needs.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Collection Techniques */}
      <section className="bg-teal-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
          Data Collection Techniques We Use
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto list-disc list-inside text-gray-700">
          <li>Computer Assisted Telephone Interviewing (CATI)</li>
          <li>Computer Assisted Web Interviewing (CAWI)</li>
          <li>Ongoing surveys for frequent market updates</li>
          <li>Customized survey research for your business</li>
          <li>100% verifiable results</li>
          <li>24/7 support via our call center</li>
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
          Our Online Market Research Process
        </h2>
        <div className="space-y-8">
          {[
            {
              step: "Defining the Problem",
              details: "Clarify client requirements, define research scope, and confirm objectives."
            },
            {
              step: "Develop Research Plan",
              details: "Design methodology, prepare questionnaires, and identify data sources."
            },
            {
              step: "Data Collection",
              details: "Collect and categorize data using advanced tools and analyst expertise."
            },
            {
              step: "Data Analysis",
              details: "Perform statistical, subjective, and implication analysis."
            },
            {
              step: "Report Preparation",
              details: "Prepare actionable reports for clear decision-making."
            }
          ].map((item, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-teal-600 mb-2">
                  {i + 1}. {item.step}
                </h3>
                <p className="text-gray-600">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="bg-teal-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
          Why Nimble Online Market Research to Nimble Acuity?
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto list-disc list-inside text-gray-700">
          <li>A professional team with 87% technology experts and 11% finance/research experts</li>
          <li>Assured data confidentiality and risk-free storage</li>
          <li>Qualitative data maintenance with regular backups</li>
          <li>ISO-certified quality process for reliable results</li>
          <li>Strict adherence to Service Level Agreements (SLAs)</li>
          <li>Cost-effective solutions with quick turnaround</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-semibold text-teal-700 mb-6">
          Get Accurate Data. Make Smarter Decisions.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Partner with Nimble Acuity to leverage cutting-edge online market research services that drive growth and provide a competitive edge.
        </p>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl shadow-lg">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}

