import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, BarChart3, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const LifeInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Business Acquisition Support",
      description:
        "We offer the best business acquisition support to our clients to help them achieve quality lead generation.",
    },
    {
      title: "General Administration Support",
      description:
        "Guided by Lean Six Sigma quality standards, each process is mapped to CTQ parameters and monitored via standardized workflows for consistent outcomes.",
    },
    {
      title: "Lead Generation Consulting",
      description:
        "Using DMAIC lifecycle, we optimize lead acquisition workflows, identify root causes of drop-offs, and ensure validated improvements. Similar projects achieved a 48.58% service quality improvement.",
    },
    {
      title: "Customer Support Services",
      description:
        "Proactive customer support enhances lead conversion. Our team manages support operations to ensure your agency appears reliable to prospects.",
    },
    {
      title: "Marketing Services",
      description:
        "Cross-channel marketing designed with Lean Six Sigma and Value Stream Mapping (VSM) ensures minimized delays and maximum Customer Value Add (CVA). VoC insights ensure message consistency.",
    },
  ];

  const benefits = [
    {
      title: "Affordable",
      description:
        "Nimble Acuity provides high-quality insurance lead generation at highly flexible and pocket-friendly prices.",
      icon: BarChart3,
    },
    {
      title: "ISO Certified",
      description:
        "ISO/IEC 27001:2022 certification ensures top-level data protection and compliance.",
      icon: Shield,
    },
    {
      title: "Transparency",
      description:
        "Clients are kept up-to-date with timely updates, ensuring complete transparency in our services.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Life Insurance Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Collaborate with us and tap into new growth opportunities through successful lead generation at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          To stay competitive in today’s digital insurance landscape, Nimble Acuity uses CTQ-aligned strategies based on VoC insights to eliminate non-value-added steps and focus on high-conversion audiences, resulting in validated revenue improvements.
        </p>
        <p>
          With over 26+ years of experience, Nimble Acuity helps life insurance companies and agencies generate high-quality leads, access the right audience, and improve lead conversion rates.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Life Insurance Lead Generation Services We Offer
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
          <li>Services for MGAs</li>
          <li>Insurance Reporting Services</li>
          <li>Insurance Back-office Operations</li>
          <li>Services for Carriers</li>
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
                <benefit.icon className="mx-auto mb-4 text-blue-600" size={36} />
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
                Policy Checking for Chicago-based Brokerage Firm
              </h3>
              <p>
                Nimble Acuity helped a Chicago consulting firm with cost-effective policy checking and COI services, improving operational efficiency.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Insurance Firm
              </h3>
              <p>
                Provided reliable business processing services for an insurance firm, ensuring smooth workflows and cost-effective operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “Nimble Acuity has helped my business by providing a reliable and organized back-office team. They are very responsive and communicate excellently.”
        </p>
        <p className="font-semibold">
          President, Insurance Agency, Florida
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Life Insurance Business?
        </h2>
        <p className="mb-6">
          Partner with Nimble Acuity to implement validated, Lean Six Sigma-driven life insurance lead generation workflows aligned to VoC and CTQ benchmarks.
        </p>
        <Button size="lg" className="bg-white text-blue-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default LifeInsuranceLeadGen;
