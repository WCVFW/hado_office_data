import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const MarketResearchReports: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Market Research Report Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get cost-effective, accurate, and reliable market research reports to
          devise your business strategy in a professional manner.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700">
        <p className="mb-6">
          Are you looking for a cost-effective market research service to gather
          real-time information about your customers, market mood, competitor
          information, and many other important metrics to expand your business?
          Nimble Acuity helps you start, organize, and evolve your business in
          a structured way.
        </p>
        <p>
          With <strong>26+ years of experience</strong>, Nimble Acuity provides tailored
          market research reports leveraging statistical analysis and industry
          expertise.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Services - Market Research Reports We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Porter's Five Forces Analysis",
            "SWOT Analysis",
            "PEST Analysis",
            "Business Market Research Reports",
            "Industry-specific Analysis",
            "Country-specific Market Analysis",
            "Market Size Evaluation",
            "Target Screening",
            "Market Risk Assessment",
            "Company Profiling",
            "Competitive Analysis",
            "Feasibility Study",
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive insights and analysis to strengthen your market
                  strategy.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Market Research Reporting Process
        </h2>
        <ol className="space-y-4">
          {[
            "Requirement Analysis",
            "Planning of Research Objective",
            "Strategizing Methodologies",
            "Conduct Research in Phases",
            "Analysis and Collation of Data",
            "Report Creation",
            "Feedback & Final Submission",
          ].map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
            >
              <span className="text-blue-600 font-bold">{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Tools Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Tools We Leverage
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {["Tableau", "Excel", "Google Trends", "SPSS", "SurveyMonkey", "R Studio", "Qualtrics", "Statista"].map(
            (tool, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow text-gray-700 font-medium"
              >
                {tool}
              </div>
            )
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Benefits of Choosing Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Cost-effective Solutions", "Experienced Research Team", "Shorter Turnaround Time", "Advanced Infrastructure", "100% Data Security", "Scalable Services"].map(
            (benefit, idx) => (
              <Card key={idx} className="rounded-2xl shadow-sm">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <span>{benefit}</span>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Research Support for Global Marketing Firm
              </h3>
              <p className="text-sm text-gray-600">
                Delivered comprehensive consumer, manufacturer, and store data
                with validation.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Primary Research for US Tech Firm
              </h3>
              <p className="text-sm text-gray-600">
                Helped cut costs and deliver faster with accurate primary
                research reports.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 bg-gray-50 p-6 rounded-xl shadow">
          "We carefully studied your documentation and were impressed with the
          details of your review. The quality of the data was extremely high.
          Thanks."
          <footer className="mt-4 text-sm text-gray-500">
            - Top STM Publisher in the US
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Market Research Report Creation to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Get accurate, timely, and cost-effective market research reports that
          help your business grow strategically.
        </p>
        <Button className="bg-white text-blue-600 font-medium rounded-xl px-6 py-3">
          Contact Us <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </section>
    </div>
  );
};

export default MarketResearchReports;
