import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, BarChart3, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const PetInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Pet Insurance Policy Support",
      description:
        "Understand pet owners' requirements to craft marketing strategies and offer solutions that meet client needs effectively.",
    },
    {
      title: "Pet Insurance Consulting",
      description:
        "Deploy DMAIC-based omnichannel campaigns with CTQ metrics for consistent outcomes. Similar models improved service quality by 48.58%.",
    },
    {
      title: "Marketing Support",
      description:
        "Lean Six Sigma-aligned strategies using VSM for SEO, PPC, and social media, ensuring campaigns are free from non-value-added steps.",
    },
    {
      title: "Customer Support",
      description:
        "Our team traces leads and ensures prompt follow-ups to convert potential customers efficiently.",
    },
  ];

  const benefits = [
    {
      title: "Cost-effective Prices",
      description: "High-quality pet insurance lead generation at affordable rates starting at $8/hour.",
      icon: BarChart3,
    },
    {
      title: "High Quality",
      description:
        "ISO/IEC 27001:2022 certified processes ensure adherence to global standards for quality and data security.",
      icon: Shield,
    },
    {
      title: "Transparency",
      description:
        "Nimble Acuity maintains full openness in operations and communications throughout the project lifecycle.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-pink-600 to-pink-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Pet Insurance Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Boost revenues and expand your business with professional pet insurance lead generation services at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-pink-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Looking to generate more leads for your pet insurance company? Nimble Acuity implements CTQ-aligned strategies guided by VoC insights, eliminating non-value-added steps while maximizing conversion potential.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pet Insurance Lead Generation Services We Offer
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
                <benefit.icon className="mx-auto mb-4 text-pink-600" size={36} />
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
      <section className="text-center py-16 px-6 bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Pet Insurance Business?
        </h2>
        <p className="mb-6">
          Partner with Nimble Acuity to implement validated, Lean Six Sigma-driven pet insurance lead generation workflows aligned to VoC and CTQ benchmarks.
        </p>
        <Button size="lg" className="bg-white text-pink-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default PetInsuranceLeadGen;
