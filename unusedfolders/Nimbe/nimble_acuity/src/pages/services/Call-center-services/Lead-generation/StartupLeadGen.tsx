import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Database,
  Clock,
  Shield,
  Target,
  LineChart,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const StartupLeadGen: React.FC = () => {
  const services = [
    {
      title: "Lead Generation Marketing for Startups",
      description:
        "Find partners from demand-driven markets and nurture relationships with multichannel outreach. Reduce redundant message cycles using Lean Six Sigma DMAIC and accelerate growth.",
    },
    {
      title: "B2B Lead Generation for Startups",
      description:
        "Access bespoke strategies like SEO, content marketing, webinars, PPC, and social media to bring visibility and connect with startup audiences effectively.",
    },
  ];

  const tools = [
    "HubSpot",
    "Bitrix24",
    "Talkdesk",
    "Five9",
    "Zendesk",
    "Dixa",
    "Salesforce",
    "LiveAgent",
    "Avaya",
  ];

  const steps = [
    { number: "01", title: "Requirement Analysis", description: "Understand pain points, niches, and goals to design a growth-focused lead gen strategy." },
    { number: "02", title: "Portal for Engagement", description: "Poka-Yoke enabled portals ensure error-proof, CTQ-aligned engagement." },
    { number: "03", title: "Capture & Nurture Demand", description: "Shore up demand using digital strategies rather than driving fresh demand." },
    { number: "04", title: "Convert Traffic", description: "Turn qualified traffic into subscribers with opt-ins, follow-ups, and nurturing workflows." },
    { number: "05", title: "Lead Segmentation", description: "Convert readers into leads with targeted CTAs and content strategies." },
    { number: "06", title: "Lead Delivery", description: "Deliver CTQ-validated, de-duplicated lead lists ready for CRM integration." },
  ];

  const whyChooseUs = [
    { icon: Shield, title: "Certified & Secure", description: "ISO 9001:2015 and ISO/IEC 27001:2022 certified with strict data protection protocols." },
    { icon: CheckCircle, title: "High Accuracy", description: "Verified and validated warm leads with buying intent." },
    { icon: Clock, title: "Quick Turnaround", description: "Faster delivery of leads so your sales team can focus on conversions." },
    { icon: Users, title: "Experienced Team", description: "200+ specialists including data analysts, aggregators, and lead gen experts." },
    { icon: Database, title: "Scalable Solutions", description: "Flexible solutions that adapt to your startup’s growth." },
    { icon: Target, title: "Cost-Effective", description: "Pocket-friendly pricing to match your budget and goals." },
  ];

  const successStories = [
    {
      title: "Outbound B2B Lead Gen for European Giant",
      description:
        "Helped a research & manufacturing company manage inbound queries and generate warm B2B leads efficiently.",
    },
    {
      title: "Cold Calling for US IT Giant",
      description:
        "Set up outbound calling for a precision equipment manufacturer, qualifying leads and driving new sales opportunities.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>``
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Lead Generation for Startups
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Drive growth, cut inefficiencies, and capture qualified leads with
          tailored strategies designed for startups.
        </p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Services We Offer for Startups
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white rounded-full shadow text-gray-700 text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Lead Generation Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <Card key={idx} className="shadow-sm border-l-4 border-purple-700">
              <CardHeader>
                <span className="text-purple-700 font-bold text-lg">
                  {step.number}
                </span>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
            >
              <item.icon className="h-10 w-10 text-purple-700 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, idx) => (
            <Card key={idx} className="shadow hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg">
          "I'm impressed! You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </blockquote>
        <p className="mt-4 font-semibold">
          — Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-800 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Accelerate Your Startup Growth
        </h2>
        <p className="text-lg mb-6">
          Partner with us to capture qualified leads and drive sales success.
        </p>
        <Button size="lg" className="bg-white text-indigo-800 font-semibold hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default StartupLeadGen;
