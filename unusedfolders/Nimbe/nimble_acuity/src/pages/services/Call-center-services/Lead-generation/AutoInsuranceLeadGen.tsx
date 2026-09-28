import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, BarChart3, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const AutoInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Website Development and Maintenance",
      description:
        "SEO-friendly website development optimized to boost your auto insurance lead generation efforts.",
    },
    {
      title: "Customer Support",
      description:
        "Prompt and efficient customer support services to help you convert high-quality leads into loyal clients.",
    },
    {
      title: "Lead Nurturing",
      description:
        "Customized lead nurturing campaigns engage prospects throughout the sales funnel to maximize conversion.",
    },
    {
      title: "Social Media Brand Management",
      description:
        "Targeted social media campaigns enhance brand perception and attract convertible leads.",
    },
    {
      title: "Campaign Evaluation",
      description:
        "Monitor campaigns through dashboards, apply root-cause analytics, and deliver validated improvement deltas.",
    },
  ];

  const benefits = [
    {
      title: "Customized Pricing Models",
      description:
        "Flexible and affordable pricing tailored for auto insurance lead generation services.",
      icon: BarChart3,
    },
    {
      title: "Complete Data Security",
      description:
        "ISO/IEC 27001-certified protocols and GDPR compliance to protect all client data touchpoints.",
      icon: Shield,
    },
    {
      title: "Skilled and Experienced Team",
      description:
        "Standardized Lean governance playbooks ensure consistent execution and optimal results.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auto Insurance Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Drive validated revenue growth through CTQ-aligned auto insurance lead generation with measurable, scalable outcomes at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-indigo-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Nimble Acuity uses DMAIC-based campaign models integrating market responsiveness, CTQ alignment, and statistically monitored results to provide reliable auto insurance lead generation. Our agile frameworks strengthen long-term customer engagement and improve lead retention by up to 45.28%.
        </p>
        <p>
          Partnering with Nimble ensures you stay ahead of market trends while converting leads efficiently.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Auto Insurance Lead Generation Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Insurance Back-office Operations</li>
          <li>Insurance Quote Summary and Proposal</li>
          <li>Insurance Data Entry</li>
          <li>Insurance Prospect and Market Research</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <benefit.icon className="mx-auto mb-4 text-indigo-600" size={36} />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-2xl font-bold text-center mb-8">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Health Insurance Company
              </h3>
              <p>
                Nimble Acuity optimized the back-office functions for a reputed health insurance firm, achieving record-breaking workflow improvements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Maintenance of Insurance Accounts for US-based Insurance Agency
              </h3>
              <p>
                Helped a US-based insurance carrier maintain an expansive Sagitta database and manage account receivables efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “We enjoy working with Nimble Acuity. The team is highly responsive and detail-oriented when it comes to following policy checking instructions and identifying new policy forms.”
        </p>
        <p className="font-semibold">
          Partner, Risk Management and Property & Casualty Insurance Brokerage, PA, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get Targeted Auto Insurance Lead Generation Support
        </h2>
        <p className="mb-6">
          Nimble Acuity delivers VoC-aligned, DMAIC-governed auto insurance lead generation campaigns. Achieve transparency, flexible pricing, and real-time CTQ dashboards for quick conversions.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default AutoInsuranceLeadGen;
