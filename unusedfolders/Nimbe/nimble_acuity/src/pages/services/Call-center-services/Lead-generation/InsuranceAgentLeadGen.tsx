import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Shield, Users, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const InsuranceAgentLeadGen: React.FC = () => {
  const services = [
    {
      title: "Advanced Competitor Analysis",
      description:
        "We use advanced competitor analysis techniques to understand competitor marketing strategies, realign your products and marketing tactics, and help you win more customers.",
    },
    {
      title: "Digital Marketing Planning & Optimization",
      description:
        "Build a strong online presence through website creation, social campaigns, and digital marketing strategies to generate more qualified leads efficiently.",
    },
    {
      title: "Campaign Designing and Lead Management",
      description:
        "Campaigns executed under Lean Six Sigma frameworks with DMAIC lifecycle monitoring, resulting in validated improvements like 32.2% cycle time reduction.",
    },
    {
      title: "Lead Follow-up",
      description:
        "Nurture leads effectively, provide necessary information for closure, strengthen brand building, and maximize lead generation success.",
    },
  ];

  const benefits = [
    {
      title: "Affordable Rates",
      description:
        "Pocket-friendly rates starting at $8/hour, ideal for small and mid-sized insurance firms.",
      icon: BarChart3,
    },
    {
      title: "Data Security",
      description:
        "ISO/IEC 27001:2022-compliant procedures within Lean Six Sigma governance to ensure secure, auditable access.",
      icon: Shield,
    },
    {
      title: "Best Infrastructure",
      description:
        "Advanced technology and infrastructure enabling top-quality lead generation services for insurance agents.",
      icon: Users,
    },
    {
      title: "Professional Agents",
      description:
        "Leads are qualified via statistical root cause analysis and CTQ-aligned workflows, achieving validated conversion improvements (e.g., 45.28% client retention gain).",
      icon: CalendarCheck,
    },
    {
      title: "24/7 Support & Single Contact Point",
      description:
        "Dedicated project manager for updates and round-the-clock expert support for queries and issues.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Lead Generation for Insurance Agents
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Accelerate your insurance business with Nimble Acuity's lead generation services. Get more qualified customers, better reach, and higher revenue at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-green-700">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Generating qualified insurance leads demands CTQ-aligned processes mapped to real-time VoC insights. Nimble Acuity eliminates NVA steps and enhances conversion readiness using standardized DMAIC-driven workflows.
        </p>
        <p>
          Our services empower insurance agents worldwide, helping you generate high-quality, sales-ready leads with measurable improvements in lead quality and cycle time.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Lead Generation Services for Insurance Agents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
          <li>Insurance Data Entry</li>
          <li>Insurance Reporting Services</li>
          <li>Document Indexing Services</li>
          <li>Insurance BPO Customer Support</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <benefit.icon
                  className="mx-auto mb-4 text-green-600"
                  size={36}
                />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-2xl font-bold text-center mb-8">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Policy Checking for NY-based Insurance Provider
              </h3>
              <p>
                Nimble Acuity's back-office support helped a New York risk insurance agency increase operational profit by 22%.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Health Insurance Company
              </h3>
              <p>
                Optimized back-office functions for a national healthcare insurance provider, enabling faster workflow and growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “We enjoy working with Nimble Acuity and find the team very responsive and detail-oriented when following our policy checking instructions.”
        </p>
        <p className="font-semibold">
          Partner, Risk Management & Property & Casualty Insurance Brokerage, PA, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Insurance Business?
        </h2>
        <p className="mb-6">
          Nimble Acuity provides conversion-ready lead generation services to help insurance agents maximize reach and revenue.
        </p>
        <Button size="lg" className="bg-white text-green-700 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default InsuranceAgentLeadGen;
