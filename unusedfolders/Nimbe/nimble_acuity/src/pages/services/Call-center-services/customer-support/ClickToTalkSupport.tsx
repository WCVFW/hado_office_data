import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock, Shield, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ClickToTalkSupport: React.FC = () => {
  const services = [
    {
      title: "Inquiries Resolution Support",
      description:
        "DMAIC-based inquiry resolution workflows reduce variation and ensure timely responses aligned with CTQ metrics.",
    },
    {
      title: "Technical Support Services",
      description:
        "Experienced technical support experts deliver high-quality services with quick turnaround.",
    },
    {
      title: "Order Management Services",
      description:
        "Lean-governed processes and Poka-Yoke tools minimize manual error and streamline order processing.",
    },
    {
      title: "Product/Service Support Services",
      description:
        "Accurate and timely product/service support improves client satisfaction and service quality.",
    },
    {
      title: "Lead Generation Support",
      description:
        "CVA-BVA-NVA mapping improves qualification accuracy and reduces follow-up cycle time, enhancing retention.",
    },
  ];

  const benefits = [
    {
      title: "Flexible Pricing Options",
      description:
        "Highly flexible and affordable pricing packages tailored to client budgets.",
      icon: PhoneCall,
    },
    {
      title: "World-class Infrastructure",
      description:
        "International standard office spaces with latest tools and click-to-talk support technologies.",
      icon: Shield,
    },
    {
      title: "Experienced Team",
      description:
        "Skilled and talented experts deliver error-free, scalable, and efficient click-to-talk support services.",
      icon: Users,
    },
    {
      title: "Short Turnaround Time",
      description:
        "Global delivery locations ensure fast service with Lean Six Sigma-driven cycle optimization.",
      icon: Clock,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Click to Talk Support Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Reduce costs and convert online users into happy clients with superior quality services starting at $8/hour.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-600">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <p className="mb-4">
          Nimble Acuity helps reduce Non-Value-Added (NVA) effort and improve online user conversion using VoC-aligned support models. Our Lean Six Sigma-driven workflows ensure consistent, efficient, and measurable improvements across client touchpoints.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Click to Talk Support Services We Offer
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
          <li>Email Support Services</li>
          <li>Chat Support Services</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Acuity for Click to Talk Support?
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

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700">
        <h2 className="text-2xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Appointment Setting Services for US Client
              </h3>
              <p>
                Nimble Acuity provided appointment setting services to a leading US-based client quickly and efficiently.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Telemarketing Services to Leading Insurance Firm
              </h3>
              <p>
                Provided cost-effective telemarketing services to enhance client outreach and engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <p className="italic text-gray-600 mb-2">
          “Nimble Acuity has provided a 1st Line remote help desk service for us since August 2008. The service and SLA exceeded expectations.”
        </p>
        <p className="font-semibold">
          Systems Manager, Property Support Services Company, U.K.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Enhance Your Online User Conversion with Nimble Acuity
        </h2>
        <p className="mb-6">
          Partner with us for efficient, reliable, and Lean Six Sigma-driven click-to-talk support services.
        </p>
        <Button size="lg" className="bg-white text-blue-600 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default ClickToTalkSupport;
