import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, BarChart3, Users, Shield } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const TruckingInsuranceLeadGen: React.FC = () => {
  const services = [
    {
      title: "Policy Creation",
      description:
        "We use Value Stream Mapping (VSM) and VoC-to-CTQ mapping to present the right policies to potential customers, improving engagement and drawing in eligible insurance prospects.",
    },
    {
      title: "Competitor Research",
      description:
        "Detailed competitor analysis helps you understand how others generate leads and optimize your own trucking insurance lead strategies.",
    },
    {
      title: "Campaign Management",
      description:
        "We create and execute optimized online marketing campaigns for your insurance firm to maximize results.",
    },
    {
      title: "Digital Marketing",
      description:
        "Lean-validated brand positioning models increase inbound lead volume and brand visibility, producing Customer Value Add (CVA) results.",
    },
    {
      title: "Follow-Ups",
      description:
        "Our expert team ensures that leads are nurtured effectively and converted into paying customers.",
    },
  ];

  const benefits = [
    {
      title: "Affordable Rates",
      description:
        "Pocket-friendly pricing model suitable for small and mid-sized insurance firms, helping you save costs while generating leads.",
      icon: BarChart3,
    },
    {
      title: "Data Security",
      description:
        "We follow ISO-aligned procedures and Lean Six Sigma audit trails to ensure compliance, traceability, and protection of your data.",
      icon: Shield,
    },
    {
      title: "Best Infrastructure",
      description:
        "Nimble is equipped with advanced technology and tools to provide top-quality services to clients.",
      icon: Users,
    },
    {
      title: "Professional Agents",
      description:
        "Our agents leverage VoC-aligned, Lean Six Sigma-refined campaign plans to deliver predictable and measurable conversion results.",
      icon: Truck,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team of sales experts, project managers, and insurance professionals are always ready to assist you.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Trucking Insurance Lead Generation
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Offshore lead generation services for trucking insurance at just $8/hour.
          Accumulate a steady stream of highly convertible projects with Nimble.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Need hot leads for your trucking insurance company? Nimble Acuity leverages industry best practices and advanced digital marketing techniques to generate high-quality leads and boost your conversions.
        </p>
        <p>
          Our world-class infrastructure and legal-grade audit trails increase customer confidence and security. Using Lean Six Sigma handoff strategies, we achieved a 45.28% increase in client retention in a similar campaign.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Trucking Lead Generation Services We Offer
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
          Why Choose Nimble for Trucking Insurance Lead Generation?
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
                Insurance Policy Checking for NY-based Provider
              </h3>
              <p>
                We provided back-office support to a New York-based risk insurance agent, enabling 22% profit growth with affordable services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Back-office Operations for Health Insurance Company
              </h3>
              <p>
                Optimized back-office functions for a reputed health insurance firm, achieving record-breaking workflow efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “We enjoy working with Nimble Acuity and find the team responsive and detail-oriented when following our policy checking instructions.”
        </p>
        <p className="font-semibold">
          Partner, Risk Management & Insurance Brokerage, PA, USA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Trucking Insurance Leads?
        </h2>
        <p className="mb-6">
          Nimble Acuity equips your team with conversion-ready databases and strategies. Affordable and reliable solutions tailored to your goals.
        </p>
        <Button size="lg" className="bg-white text-blue-700 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default TruckingInsuranceLeadGen;
