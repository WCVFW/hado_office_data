import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Target } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const InsuranceLeadGeneration: React.FC = () => {
  const services = [
    {
      title: "Lead Generation for Home Insurance",
      description:
        "We align workflows with lifecycle-triggered CTQs using VoC-to-CTQ mapping and standardized form design to reduce lead drop-offs. We leverage SEO, CTAs, and optimized forms for better campaign results.",
    },
    {
      title: "Lead Generation for Trucking Insurance",
      description:
        "We implement quality assurance systems to determine lead quality for trucking insurance providers. Our pay-per-lead, pay-per-deal, and pay-per-click services ensure 50% greater ROI.",
    },
    {
      title: "Commercial Insurance Lead Generation Services",
      description:
        "We apply CVA, BVA, and NVA mapping to cleanse the lead funnel, remove bottlenecks, and deliver conversion-ready leads. We also set appointments for your sales team.",
    },
    {
      title: "Lead Generation for Life Insurance",
      description:
        "Our outreach follows DMAIC lifecycle controls, ensuring CTQ gating metrics are met. We achieved a 45.28% client retention improvement through standardized handoff models.",
    },
    {
      title: "Lead Generation for Pet Insurance",
      description:
        "We attract pet owners through targeted channels with appealing creatives, educating them about offers and encouraging contact form submissions.",
    },
    {
      title: "Car Insurance Lead Generation Services",
      description:
        "We use pre-qualification filters aligned with CTQs to increase conversion probability. Validated improvements in sales-readiness drive exclusive car insurance lead generation.",
    },
  ];

  const steps = [
    "Industry Analysis",
    "Demographic Profiling",
    "Content Development",
    "Omnichannel Outreach",
    "Prospect Acquisition",
    "Prospect Verification",
    "Prospect Engagement",
    "Customer Conversion",
  ];

  const whyChoose = [
    {
      title: "Demographic Targeting",
      description:
        "Using predictive analytics, we identify prospects most likely to require your services, improving conversion rates.",
      icon: Target,
    },
    {
      title: "Scalable Data Management",
      description:
        "Our systems handle large volumes of data, ensuring consistent lead supply and quality as your business grows.",
      icon: Users,
    },
    {
      title: "ROI-Centric Approach",
      description:
        "We focus on high-quality, pre-qualified leads, maximizing returns by targeting high-conversion prospects.",
      icon: TrendingUp,
    },
    {
      title: "Regulatory Compliance",
      description:
        "We strictly follow GDPR, CCPA, and other data protection regulations to safeguard your business reputation.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Optimize your digital spends and direct them to the best marketing
          channels with our insurance lead generation services.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-6">
          In the US, insurance marketing spends surpass other industries by 8%.
          Companies that spend over 15% of their revenues on lead generation see
          significant growth. But ROI depends on the right marketing channels.
        </p>
        <p>
          Ensure you optimize your digital spends by partnering with Nimble
          Acuity. We use omnichannel marketing, email campaigns, PPC, and
          content marketing to streamline sales and garner 3x more leads.
        </p>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Insurance Policy Checking Services for NY-based Insurance
                Provider
              </h3>
              <p>
                We provided back-office support to a New York-based agent, and
                the client swept 22% profit with our affordable services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Health Insurance Company
              </h3>
              <p>
                We optimized functions for a reputed health insurance firm,
                enabling record-breaking workflow efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          "Nimble Acuity has helped my business by providing a reliable and
          organized back-office team to assist me in daily activities. They are
          responsive and their communication is excellent."
        </p>
        <p className="font-semibold">President, Insurance Agency, Florida</p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Insurance Lead Generation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Lead Generation Steps We Follow
        </h2>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">
                {i + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble as Your Lead Generation Partner?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyChoose.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <item.icon className="mx-auto mb-4 text-blue-600" size={36} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Generate More Qualified Insurance Leads?
        </h2>
        <p className="mb-6">
          Contact Nimble Acuity today and unlock the full potential of your
          insurance lead generation efforts.
        </p>
        <Button size="lg" className="bg-white text-blue-700 rounded-2xl">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default InsuranceLeadGeneration;
