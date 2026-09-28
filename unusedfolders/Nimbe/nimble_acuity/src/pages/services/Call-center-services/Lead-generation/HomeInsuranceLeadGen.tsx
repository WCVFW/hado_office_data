import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, BarChart3, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const HomeInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Competitor Analysis",
      description:
        "We perform end-to-end competitor analysis with the tools and technology needed to understand their strategies and improve your lead generation outcomes.",
    },
    {
      title: "Marketing",
      description:
        "We craft effective marketing strategies to position your home insurance company in the best way, attracting high-quality leads consistently.",
    },
    {
      title: "Lead Follow-up",
      description:
        "Lead nurturing is managed with Lean-standardized workflows, validated with CTQ dashboards. In a similar optimization, we improved client retention by 45.28%.",
    },
    {
      title: "Policy Making",
      description:
        "We co-develop policy engagement frameworks with Poka-Yoke safeguards to eliminate gaps and streamline decision-making across segments.",
    },
  ];

  const benefits = [
    {
      title: "Certified Company",
      description:
        "Nimble Acuity is an ISO-certified company specializing in home insurance lead generation with proven expertise.",
      icon: Shield,
    },
    {
      title: "High Accuracy",
      description:
        "We ensure CTQ-driven targeting accuracy with DMAIC-backed monitoring, reducing error rates by 30% in past workflows.",
      icon: Target,
    },
    {
      title: "Highly Scalable Services",
      description:
        "Scale services up or down quickly without additional costs. Our infrastructure adapts to your demand instantly.",
      icon: Users,
    },
    {
      title: "Pocket-Friendly Rates",
      description:
        "Our global delivery centers help us offer cost-effective services with quick turnaround times.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Home Insurance Lead Generation
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Struggling to build a consistent home insurance database? Rev up your
          client acquisition efforts with our professional and reliable
          services—starting at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Looking to generate high-quality home insurance leads through
          CTQ-aligned strategies derived from VoC insights? Our structured
          approach ensures measurable impact and minimal NVA effort.
        </p>
        <p className="mb-4">
          Nimble Acuity applies DMAIC lifecycle workflows to identify, validate,
          and scale lead generation improvements with precision.
        </p>
        <p>
          As a global leader, Nimble Acuity offers effective, result-driven
          strategies to help you nurture and convert leads. With us, you’ll
          never run short of positive results in your home insurance lead
          generation journey.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Property Insurance Lead Generation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
          Why Choose Nimble for Home Insurance Lead Generation?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                Insurance Policy Checking for NY-based Provider
              </h3>
              <p>
                We provided back-office support to a New York-based risk
                insurance agent, enabling 22% profit growth with affordable
                services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Health Insurance Company
              </h3>
              <p>
                We optimized back-office functions for a reputed health
                insurance firm, achieving record-breaking efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “We enjoy working with Nimble Acuity and find the entire team to be
          responsive and detail-oriented when it comes to following our policy
          checking instructions and identifying new forms.”
        </p>
        <p className="font-semibold">
          Partner, Risk Management & Insurance Brokerage, PA, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Scale Your Home Insurance Lead Generation?
        </h2>
        <p className="mb-6">
          Nimble Acuity empowers your sales by lining up a database of the most
          convertible leads. Get affordable online & offline strategies tailored
          to your goals.
        </p>
        <Button size="lg" className="bg-white text-blue-700 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default HomeInsuranceLeadGen;
