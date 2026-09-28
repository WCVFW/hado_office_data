import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

const BusinessDevelopment: React.FC = () => {
  return (
    <div className="p-8 space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Nimble Business Development Support Services</h1>
        <p className="text-lg text-gray-600">
          Craft expert strategies and detailed plans of action with our professional services. Expand internationally with integrated marketing efforts. 
          <br />Contact us for growth!
        </p>
        <Button size="lg" className="mt-4">Get a Free Quote</Button>
      </section>

      {/* Problem Statement */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Overcome Business Challenges</h2>
        <p>
          Does your business struggle to identify new opportunities, optimize operations, and create a stable relationship with its customers? 
          Our business development support services help small and medium-sized enterprises (SMEs) remove growth barriers through strategic planning, advanced research, 
          and customized CRM solutions.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Our Comprehensive Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Competitive Business Analysis</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>SWOT/PESTLE evaluations</li>
                <li>Porter's Five Forces analysis</li>
                <li>Entry barrier and regulatory assessments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Business Market Research</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Primary & secondary data collection</li>
                <li>Consumer behavior & segmentation</li>
                <li>Target profiling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Trend Analysis</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Macro/micro forecasting</li>
                <li>Predictive analytics</li>
                <li>Industry-specific insights</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Perceptual Mapping</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Brand positioning analysis</li>
                <li>Customer perception mapping</li>
                <li>Product differentiation insights</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-center">Our Step-by-Step Approach</h2>
        <ol className="space-y-4 text-gray-700 list-decimal pl-6">
          <li><strong>Market Research</strong> – Primary/secondary research, data analytics & segmentation.</li>
          <li><strong>Strategic Planning</strong> – SWOT & PESTLE-driven roadmaps for evidence-based decisions.</li>
          <li><strong>Prospecting & Networking</strong> – Identify prospects with CRM systems & targeted efforts.</li>
          <li><strong>Proposal Development</strong> – Tailored proposals, value propositions & cost analysis.</li>
          <li><strong>Negotiation & Closing</strong> – Value-based negotiations, contracts & reviews.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 p-8 rounded-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-center">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>In-depth market understanding</li>
            <li>Data-driven predictions with AI</li>
            <li>Strategic networking with stakeholders</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Focused client engagement via CRM</li>
            <li>Expertise in analytics & visualization</li>
            <li>Proven track record with B2B clients</li>
          </ul>
        </div>
      </section>

      {/* Software */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Software Capabilities We Leverage</h2>
        <p>Salesforce · HubSpot · Zoho CRM · Pipedrive · Slack · Trello</p>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Nimble Business Development for Professional Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide cohesive business development solutions powered by AI-driven analytics, CRM systems, and data visualization tools. 
          Collaborate with us for expert-driven strategies and seamless scalability.
        </p>
        <Button size="lg">Contact Us Today</Button>
      </section>
    </div>
  );
};

export default BusinessDevelopment;
