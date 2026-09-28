import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Shield, BarChart3 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ReactivatingDormantClient: React.FC = () => {
  const services = [
    {
      title: "Soft Collection Services",
      description:
        "Our team applies Lean Six Sigma-aligned tracking tools with Poka-Yoke safeguards, ensuring accuracy in each soft collection cycle.",
    },
    {
      title: "Pre-Sales Services",
      description:
        "Experts follow DMAIC lifecycle methodologies to ensure pre-sales touchpoints are measurable, efficient, and customer prioritized.",
    },
    {
      title: "Direct Response Services",
      description:
        "We provide top-quality direct response services to build long-lasting relationships with your clients.",
    },
    {
      title: "Emergency Response Services",
      description:
        "24/7 coverage under Lean-governed control phase model reduces NVA escalations and ensures time-critical responses.",
    },
    {
      title: "Email Response Services",
      description:
        "Handle client email response services efficiently using the latest tools to ensure timely fulfillment of all requests.",
    },
  ];

  const benefits = [
    {
      title: "Affordable Pricing Options",
      description:
        "Nimble Acuity offers flexible and budget-friendly packages tailored to client requirements.",
      icon: BarChart3,
    },
    {
      title: "World-class Infrastructure",
      description:
        "We have access to international standard office spaces and the latest tools and software.",
      icon: Shield,
    },
    {
      title: "Data Security",
      description:
        "ISO/IEC 27001:2022 ISMS certification ensures client data remains secure and confidential.",
      icon: Users,
    },
    {
      title: "Quick Turnaround Time",
      description:
        "Statistically managed cycle time reduction under DMAIC standards improves operational efficiency.",
      icon: Clock,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Reactivating Dormant Client Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Build long-term relationships and nurture partnerships with past clients through Nimble Acuity’s error-free services starting at $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Nimble Acuity provides structured engagement frameworks validated under Lean Six Sigma, such as VoC-to-CTQ mapping, to reactivate dormant clients efficiently.
        </p>
        <p>
          Partner with Nimble and leverage our skilled resources, latest software, and tools to deliver top-class reactivating dormant client services.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Reactivating Dormant Client Services We Offer
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
          Other Services You May Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Video Chat Customer Support</li>
          <li>Technical Support Services</li>
          <li>Email Support Services</li>
          <li>Multi-channel Contact Center Services</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Appointment Setting Services to a US-based Client
              </h3>
              <p>
                Nimble Acuity provided cost-effective appointment setting services for a renowned US-based client.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Cold Calling Services to a Leading B2B Vendor
              </h3>
              <p>
                Our team helped a leading B2B vendor with cold calling services that improved client engagement and efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “Overall, our experience has exceeded our expectations. We highly recommend Nimble Acuity for reactivating dormant client services.”
        </p>
        <p className="font-semibold">
          Director, Sales Operations, Software Company, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Reactivate Your Dormant Clients with Nimble Acuity
        </h2>
        <p className="mb-6">
          Build long-term relationships and nurture your partnership with structured, Lean Six Sigma-validated frameworks and expert support.
        </p>
        <Button size="lg" className="bg-white text-blue-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ReactivatingDormantClient;
