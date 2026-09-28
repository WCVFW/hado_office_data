import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, BarChart3, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const HealthInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Competitor Analysis",
      description:
        "Our analytics team runs complex analyses to understand competitor strategies and improve your health insurance lead generation metrics.",
    },
    {
      title: "Digital Marketing Plan",
      description:
        "We provide top-notch digital marketing strategies to increase your firm's branding and attract high-quality leads.",
    },
    {
      title: "Lead Follow-up",
      description:
        "We ensure proper lead nurturing to maximize repeat business, helping agents convert leads into paying clients efficiently.",
    },
    {
      title: "Campaign Management",
      description:
        "We help you manage health insurance campaigns efficiently, tuning your marketing engine performance with advanced tools.",
    },
    {
      title: "Policy Making",
      description:
        "We ensure best practices for your policies so that you can acquire the best leads for your firm.",
    },
  ];

  const benefits = [
    {
      title: "Certified Company",
      description:
        "Nimble Acuity is ISO-certified and possesses the expertise needed for impactful health insurance lead generation.",
      icon: Shield,
    },
    {
      title: "Data Security",
      description:
        "We ensure 100% data security for all clients and sign NDA agreements to protect confidentiality.",
      icon: Target,
    },
    {
      title: "High Accuracy",
      description:
        "With skilled manpower, modern infrastructure, and robust resources, we deliver precise and reliable lead generation.",
      icon: Users,
    },
    {
      title: "Short Turnaround",
      description:
        "Our multiple delivery centers enable us to provide services within strict timelines, ensuring reliability.",
      icon: BarChart3,
    },
    {
      title: "Pocket-Friendly Rates",
      description:
        "Flexible pricing options start at just $8/hour to accommodate budgets without compromising quality.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Health Insurance Lead Generation
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Sell more insurance with our conversion-ready lead generation services.
          Replenish your database and increase your business reach at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-green-700">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Looking for robust health insurance lead generation solutions? Worried about closing on fewer sales? Nimble handles your lead generation while you focus on growing your business.
        </p>
        <p>
          Nimble Acuity’s methods and strategies perfect multichannel contact approaches, reinforce lead qualification, and improve your branding. Our specialized services generate enough health insurance leads to convert them into paying clients.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Health Insurance Lead Generation Services We Offer
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
          Why Choose Nimble for Health Insurance Lead Generation?
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
          “We enjoy working with Nimble Acuity and find the team responsive and
          detail-oriented when it comes to following our policy checking
          instructions.”
        </p>
        <p className="font-semibold">
          Partner, Risk Management & Insurance Brokerage, PA, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Health Insurance Leads?
        </h2>
        <p className="mb-6">
          Nimble Acuity equips your team with conversion-ready databases and
          strategies. Affordable and reliable solutions tailored to your goals.
        </p>
        <Button size="lg" className="bg-white text-green-700 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default HealthInsuranceLeadGen;
