import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

const QualitativeDataAnalysisPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Qualitative Data Analysis Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Move from data chaos to information clarity. Convert large volumes of
          data gathered from multiple sources into strategic assets with our
          qualitative data analysis services.
        </p>
        <Button className="mt-6 bg-white text-blue-900 rounded-2xl shadow-lg">
          Connect with Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Struggling to make sense of the vast amounts of data generated through
          various sources? Are the lack of in-house expertise and time crunch
          preventing you from effectively analyzing this data? This is where our
          services make a difference.
        </p>
        <p>
          We provide professional qualitative data analysis services to global
          clients, helping them analyze data from diverse sources such as focus
          groups, interviews, textual materials, and more. We understand the
          nuances of various industries, which empowers us to provide insights
          that are accurate, relevant, and actionable.
        </p>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Primary Research Services for a California-based Luxury Air
                Travel Provider
              </h3>
              <p>
                A leading air travel company contacted us for accurate research
                services. We provided high-quality services on time through
                customized support.
              </p>
              <a href="#" className="text-blue-600 underline mt-2 inline-block">
                Read more
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                A Leading US-based Tech Giant Benefitted from Our Primary
                Research Services
              </h3>
              <p>
                A leading technology service provider from the US approached us
                for research support. We delivered accurate services on time.
              </p>
              <a href="#" className="text-blue-600 underline mt-2 inline-block">
                Read more
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic">
          “The services that Nimble Acuity provided helped us achieve
          substantial cost and time savings on several difficult projects.”
        </blockquote>
        <p className="mt-4 font-semibold">
          - Senior Vice President, Automotive & Transportation Industry
          Solutions Group
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Qualitative Data Analysis Consulting Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Event Analysis",
            "Data Interpretation and Reporting",
            "Domain Analysis",
            "Interview Analysis",
            "Literature Reviews",
            "Narrative Analysis",
            "Metaphorical Analysis",
            "Disclosure Analysis",
            "Thematic Analysis",
            "Logical/Matrix Analysis",
            "Content Analysis",
            "Questionnaire Analysis",
          ].map((service) => (
            <Card key={service}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Professional support to interpret data, uncover patterns, and
                  deliver actionable insights.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Approach to Deliver Qualitative Data Analysis
        </h2>
        <ol className="space-y-4">
          {[
            "Data Collection",
            "Data Refinement and Organization",
            "Data Coding and Classification",
            "Discern Data Patterns",
            "Interpretation of Themes and Patterns",
            "Report Generation",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="font-bold text-blue-900">{`0${i + 1}.`}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {[
            "Technology",
            "Travel & Hospitality",
            "Insurance",
            "Real Estate",
            "Banking & Finance",
            "Retail & Accounting",
            "Education",
            "Legal Services",
            "Manufacturing",
            "Healthcare",
          ].map((industry) => (
            <Card key={industry}>
              <CardContent className="p-4 font-semibold">{industry}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Sets Our Services Apart?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            "In-depth Data Interpretation",
            "Scalable Analytical Solutions",
            "100% Data Confidentiality",
            "Strategic Insight Reporting",
            "Adaptive Pricing Structure",
          ].map((benefit) => (
            <li key={benefit} className="p-4 bg-gray-50 rounded-lg shadow">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "Business Research Services",
            "Financial Modeling Services",
            "Competitor Analysis Services",
            "Market Research Services",
          ].map((service) => (
            <Card key={service}>
              <CardContent className="p-6">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Qualitative Data Analysis Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto">
          We provide end-to-end solutions from data collection to insightful
          reporting. Never let another valuable insight go unnoticed.
        </p>
        <Button className="mt-6 bg-white text-blue-900 rounded-2xl shadow-lg">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default QualitativeDataAnalysisPage;
