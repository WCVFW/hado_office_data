import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Headphones, Users, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const services = [
  {
    title: "Outbound Retail Call Support Services",
    description:
      "Lean Six Sigma-guided outbound phone assistance ensuring root cause resolution, reduced rework, and verified outcomes.",
    icon: PhoneCall,
  },
  {
    title: "Inbound Retail Call Support Services",
    description:
      "Customized inbound call support with DMAIC lifecycle, converting VoC into measurable CTQ touchpoints.",
    icon: Headphones,
  },
  {
    title: "Retail Lead Generation Support Services",
    description:
      "Expert lead generation support that helps improve your top line and boost revenues.",
    icon: Users,
  },
  {
    title: "Retail Telemarketing Support Services",
    description:
      "VoC-integrated telemarketing ensuring outbound initiatives drive revenue without waste.",
    icon: PhoneCall,
  },
  {
    title: "Retail Appointment Setting Services",
    description:
      "Optimized scheduling workflows using Lean Six Sigma, improving client retention by 45.28%.",
    icon: CheckCircle2,
  },
  {
    title: "Retail Virtual Assistant",
    description:
      "Hire remote virtual assistants for calling requirements without in-house team overheads.",
    icon: Users,
  },
  {
    title: "CCTV Monitoring Services",
    description:
      "Enhance retail business security with reliable CCTV monitoring solutions.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Affordable Pricing Options",
  "Superior Quality Services",
  "Data Security & ISO Certification",
  "Skilled Team of Experts",
  "World-class Infrastructure",
  "Dedicated Process Manager (SPOC)",
  "Easily Scalable Services",
  "Quick Turnaround Time",
  "24/7 Global Support",
];

const RetailBPOSupport: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Retail BPO Support Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Improve CSAT scores and customer experiences by offering personalized
          and timely retail BPO support at cost-effective rates starting at just{" "}
          <span className="font-semibold">$8/hour</span>.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Retail BPO Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="shadow-lg hover:shadow-2xl transition rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose O2I for Retail BPO Support Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Call Quality Monitoring for a Tech Firm
              </h3>
              <p className="text-gray-600">
                Delivered precision call monitoring using audio recording
                devices, delighting a US-based tech client.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Ticketing & Email Support for Home Furnishing Firm
              </h3>
              <p className="text-gray-600">
                Streamlined internal workflows by handling ticketing and email
                support seamlessly without disruptions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto italic text-gray-700 text-lg">
          “Outsource2india will have a positive effect on any company's turnover
          I do not doubt that.”
        </blockquote>
        <p className="mt-4 font-semibold">Marketing Director, UK</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale Your Retail Operations?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with Outsource2india to gain access to skilled experts, secure
          infrastructure, and cost-effective retail BPO support.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default RetailBPOSupport;
