import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, BarChart3, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CarInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Competitor Analysis Services",
      description:
        "Evaluate competitors' products, plans, services, and prices to devise powerful lead generation strategies for your car insurance business.",
    },
    {
      title: "Customized Digital Marketing Services",
      description:
        "Build your website, optimize Google Business pages, and strengthen social media presence to boost car insurance lead generation.",
    },
    {
      title: "Campaign Designing and Management",
      description:
        "Run paid digital marketing campaigns, create custom ad designs, landing pages, and target high-performing keywords for maximum leads.",
    },
    {
      title: "Online Reputation Management",
      description:
        "Strengthen your online reputation with customized ORM solutions to create favorable impressions and faster lead conversions.",
    },
    {
      title: "Lead Nurturing",
      description:
        "Build long-lasting relationships with customers through effective follow-ups and engagement strategies to convert leads into brand ambassadors.",
    },
  ];

  const benefits = [
    {
      title: "Cost-effective Prices",
      description:
        "Nimble Acuity provides high-quality car insurance lead generation services at highly affordable and flexible rates starting at $8/hour.",
      icon: BarChart3,
    },
    {
      title: "High-quality Standards",
      description:
        "As an ISO/IEC 27001:2022 certified company, Nimble Acuity adheres strictly to best practices in lead generation services.",
      icon: Shield,
    },
    {
      title: "Transparency",
      description:
        "We maintain full transparency in our processes, keeping clients informed and confident in the services delivered.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Car Insurance Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get high-intent car insurance leads quickly and easily with Nimble Acuity’s lead generation services. Prices start at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-green-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Nimble Acuity is a leading car insurance lead generation company helping agents and companies scale their business. We leverage advanced, data-driven lead generation and digital marketing strategies to convert prospects into high-paying customers.
        </p>
        <p>
          Partner with Nimble and focus on closing deals while we take care of finding and nurturing qualified leads.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Car Insurance Lead Generation Services We Offer
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
                <benefit.icon className="mx-auto mb-4 text-green-600" size={36} />
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
                Business Processing Services for an Insurance Firm
              </h3>
              <p>
                Nimble Acuity provided cost-effective services for a well-known insurance firm to improve efficiency and operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Policy Checking Services for a Brokerage Consulting Firm
              </h3>
              <p>
                Nimble Acuity helped a Chicago-based consulting firm with policy checking and COI services for better lead conversions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “Nimble Acuity has helped my business with a reliable back-office team. They are very responsive, and their communication is excellent.”
        </p>
        <p className="font-semibold">
          President, Insurance Agency, Florida
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Scale Your Car Insurance Business With Nimble Acuity
        </h2>
        <p className="mb-6">
          Leverage data-driven, DMAIC-governed campaigns, VoC-aligned insights, and real-time dashboards to convert high-intent leads quickly and efficiently.
        </p>
        <Button size="lg" className="bg-white text-green-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default CarInsuranceLeadGen;
