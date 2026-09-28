import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, BarChart3 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ThirdPartyVerification: React.FC = () => {
  const services = [
    {
      title: "Automatic TPV Services",
      description:
        "Automated third-party verification executed under DMAIC lifecycle ensures VoC-aligned CTQs and Poka-Yoke error-proofing.",
    },
    {
      title: "Live Operator TPV Services",
      description:
        "Standardized workflows and CVA-BVA-NVA mapping ensure each interaction delivers measurable value with latest tools.",
    },
    {
      title: "Customized Call Scripting Services",
      description:
        "We design call scripts using VoC-to-CTQ translation, optimizing CVA and minimizing NVA steps in conversation.",
    },
  ];

  const benefits = [
    {
      title: "Flexible Pricing Options",
      description:
        "Lean waste-reduction principles balance customer value with operational cost efficiency.",
      icon: BarChart3,
    },
    {
      title: "Information Security",
      description:
        "ISO/IEC 27001:2022 ISMS certified processes ensure zero deviation from compliance-critical CTQs.",
      icon: Shield,
    },
    {
      title: "Short Turnaround Time",
      description:
        "Cycle time optimization with Value Stream Mapping reduces NVA steps and accelerates delivery.",
      icon: Clock,
    },
    {
      title: "Experienced Team",
      description:
        "Our Lean Six Sigma-trained TPV specialists ensure error-free, scalable, and high-quality services.",
      icon: Users,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Third-Party Verification (TPV) Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get access to error-free, quick, and superior quality third-party verification services starting at just $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-green-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Nimble Acuity accelerates your TPV cycle with validated process consistency and VoC-aligned quality metrics. Our Lean Six Sigma-trained professionals deliver statistically validated, error-proof verification tailored to CTQs.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Third-Party Verification Services We Offer
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
          <li>Technical Support Services</li>
          <li>Remote IT Support Services</li>
          <li>Toll-Free Customer Support</li>
          <li>Email Support Services</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Acuity for TPV?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Call Quality Monitoring for a Leading Tech Firm
              </h3>
              <p>
                Nimble Acuity provided call monitoring services to a US-based tech firm, resulting in precise call tracking and high client satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Ticketing and Email Support for Home Furnishing Manufacturer
              </h3>
              <p>
                Our TPV and support services streamlined the client’s workflow without disruptions, improving overall operational efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “Efforts from Nimble Acuity have been a major factor in our successful relationship. They helped us with verification calls and follow-ups.”
        </p>
        <p className="font-semibold">
          CEO, Energy Equipment & Solutions, Kitchener, Ontario, CA
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Accelerate Your Third-Party Verification with Nimble Acuity
        </h2>
        <p className="mb-6">
          Implement Lean Six Sigma-aligned TPV services to enhance compliance, reduce verification errors, and shorten cycle times.
        </p>
        <Button size="lg" className="bg-white text-green-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ThirdPartyVerification;
