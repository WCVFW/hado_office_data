import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const EmailSupportServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Email Support Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Your customers deserve instant email responses. Deliver just that with
          our proficient and professional email support services.
        </p>
        <Button className="mt-6 bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700">
        <p className="text-lg leading-relaxed">
          Expedite responses to your customer queries and maintain a traceable
          communication system with our email support services. We add Customer
          Value Add (CVA) steps, like personalized responses with clear and
          concise information, to transform the way global enterprises manage
          customer service emails.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Our team specializes in handling high volumes of queries to drastically
          reduce the Average Email Handling Time (AEHT) while maintaining quality
          standards. This minimizes unaddressed emails and streamlines responses
          through proactive management techniques, such as automated responses
          for routine queries and prioritization based on urgency and customer
          type.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Email Customer Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Customer Care",
              desc: "VoC-mapped templates, CTQ-aligned responses, AI-driven automation.",
            },
            {
              title: "Technical Support",
              desc: "Software/hardware troubleshooting, ticketing system integration.",
            },
            {
              title: "Order Fulfillment",
              desc: "Order updates, delivery confirmations, return & refund notifications.",
            },
            {
              title: "Customer Account Management",
              desc: "Subscriptions, renewals, confirmations, onboarding support.",
            },
            {
              title: "Verification",
              desc: "Secure codes, encrypted communications, document verification.",
            },
            {
              title: "Query Resolution",
              desc: "AI-powered responses, knowledge base checks, ticket tracking.",
            },
            {
              title: "Escalation Resolution",
              desc: "CTQ-mapped tagging, tiered query handling, specialist follow-ups.",
            },
            {
              title: "Processing Grievances",
              desc: "Formal workflows, resolution timelines, email confirmations.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="shadow-md border-none hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Chat Support Services",
              desc: "24/7 chat assistance to improve engagement and satisfaction.",
            },
            {
              title: "Multi-channel Support",
              desc: "Provide support via email, chat, phone, and social media.",
            },
            {
              title: "Technical Support Services",
              desc: "Certified experts providing professional troubleshooting.",
            },
            {
              title: "Consumer Product Support",
              desc: "Reliable product guidance and troubleshooting help.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="shadow-md border-none hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Nimble Auity for Email Support Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "AI-Driven Personalization",
              desc: "Personalized responses aligned with CTQ workflows.",
            },
            {
              title: "Integration with CRM",
              desc: "Seamless integration for consistent and relevant responses.",
            },
            {
              title: "Multilingual Support",
              desc: "24/7 global email support across multiple languages.",
            },
            {
              title: "Data-Driven Insights",
              desc: "DMAIC analytics to optimize response strategies.",
            },
            {
              title: "Email Security Protocols",
              desc: "Encryption & compliance with global data standards.",
            },
            {
              title: "Adaptive Email Support",
              desc: "Scalable solutions for growing email volumes.",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="shadow-md border-none hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title:
                "Nimble Auity Provided Email Support to a Leading Australian Accounting Firm",
            },
            {
              title:
                "A Leading Home Furnishing Product Manufacturer Benefitted from Our Ticketing and Email Support",
            },
          ].map((caseStudy, idx) => (
            <Card
              key={idx}
              className="shadow-md border-none hover:shadow-lg transition"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {caseStudy.title}
                </h3>
                <Button
                  variant="link"
                  className="text-blue-600 hover:underline p-0"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Engage Our 24/7 Dedicated Email Support Team
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Maintain efficiency and professionalism in every email response,
          transforming enquiring customers into loyal brand ambassadors.
        </p>
        <Button className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default EmailSupportServices;
