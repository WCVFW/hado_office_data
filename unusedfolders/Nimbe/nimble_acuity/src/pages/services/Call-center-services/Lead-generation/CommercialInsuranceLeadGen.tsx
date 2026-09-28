import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Shield, Users, CalendarCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CommercialInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Salesforce Consulting",
      description:
        "We integrate the Salesforce Platform into your business to optimize and automate sales processes, customize solutions, and better understand customer requirements.",
    },
    {
      title: "Digital Marketing Optimization",
      description:
        "Optimize your website, strategic CTAs, and traffic-driving campaigns to generate more commercial insurance leads and increase revenue.",
    },
    {
      title: "Email Marketing",
      description:
        "Launch personalized B2B email campaigns to engage prospects, improve interactions, and drive conversions for your commercial insurance business.",
    },
    {
      title: "Campaign Management & Optimization",
      description:
        "Analyze past campaigns, study competitors, and launch optimized PPC and social media campaigns to boost engagement and conversions.",
    },
    {
      title: "Customer Prospecting",
      description:
        "Prospect incoming leads, evaluate requirements, and forward only qualified leads to save time and maximize conversion rates.",
    },
  ];

  const benefits = [
    {
      title: "Cost-effective Lead Generation",
      description:
        "Flexible, customized pricing for insurance agencies and carriers starting at $8/hour.",
      icon: BarChart3,
    },
    {
      title: "100% Data Security",
      description:
        "ISO-certified processes and robust ISMS system to protect client data and confidentiality.",
      icon: Shield,
    },
    {
      title: "Advanced Infrastructure",
      description:
        "World-class infrastructure to deliver highly-effective commercial insurance lead generation services.",
      icon: Users,
    },
    {
      title: "Qualified Team of Experts",
      description:
        "Global digital marketing experts deploy proven strategies to generate highly convertible leads.",
      icon: CalendarCheck,
    },
    {
      title: "Dedicated Project Managers & 24/7 Support",
      description:
        "Assigned project manager keeps you updated while our support team resolves your queries round-the-clock.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Commercial Insurance Lead Generation
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Maximize your reach and client base with Nimble Acuity's commercial insurance lead generation services at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Struggling to prospect new commercial insurance clients due to workload and pressure? Nimble Acuity works as an extension of your team, finding and nurturing new clients so you can focus on closing deals and growing your business.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Commercial Insurance Lead Generation Services
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
                  className="mx-auto mb-4 text-blue-600"
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
                Optimized back-office operations for a national healthcare insurance provider, enabling faster workflows and business growth.
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
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Commercial Insurance Business?
        </h2>
        <p className="mb-6">
          Nimble Acuity provides conversion-ready commercial insurance lead generation services to help agents maximize reach and revenue.
        </p>
        <Button size="lg" className="bg-white text-blue-700 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default CommercialInsuranceLeadGen;
