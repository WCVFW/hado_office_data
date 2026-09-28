import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import Imainmenu from "../Imainmenu";

export default function InsuranceBPOCustomerSupport() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance BPO Customer Support Services
        </h1>
        <p className="max-w-3xl mx-auto mb-6">
          Build lasting client relationships with professional, 24/7 customer
          support tailored to the insurance industry.
        </p>
        <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
          Get Started Today
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Insurance BPO Customer Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Inbound Customer Support",
              desc: "Helpdesk, IVR, claims processing, payment collection, and order entry services.",
            },
            {
              title: "Outbound Customer Support",
              desc: "Lead generation, appointment setting, product sales, third-party verification.",
            },
            {
              title: "Telemarketing Services",
              desc: "Debt collection, product promotion, cold calling, surveys, follow-up services.",
            },
            {
              title: "Multichannel Support",
              desc: "Video chat, social media, phone, email, and live chat support.",
            },
            {
              title: "Lead Generation & Appointment Setting",
              desc: "Advanced outbound strategies to keep your pipeline full.",
            },
            {
              title: "CCTV Monitoring & Cloud Contact Center",
              desc: "24/7 monitoring and cloud-based solutions for maximum efficiency.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software Accordion */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Insurance Software We Use
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="software">
            <AccordionTrigger>View Software List</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-gray-700">
                Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix,
                Applied Agency Management, Newton Agency Solution, Insly, SEMCATA1,
                Jenesis, ABS, SIBRO, QQCatalyst, IBM SPSS, SAS Advanced Analytics,
                QuickBooks, Sage, Invoicera, and many more.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Customer Support Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              step: "01. Requirement Analysis",
              desc: "We analyze the client’s requirements and define expectations clearly.",
            },
            {
              step: "02. Case Allocation",
              desc: "Cases are assigned to skilled representatives based on expertise.",
            },
            {
              step: "03. Case Resolution",
              desc: "We resolve cases promptly depending on complexity and priority.",
            },
            {
              step: "04. Report Generation",
              desc: "Clients receive weekly, monthly, or quarterly reports for transparency.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold">{item.step}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Acuity for Offshore Insurance BPO Support?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Pricing",
            "ISO/IEC 27001:2022 Certified Information Security",
            "Quick Turnaround Time",
            "Experienced Insurance Agents",
            "High-quality Services",
            "Best Infrastructure & Tools",
            "Single Point of Contact",
            "24/7 Availability",
            "Ease of Scalability",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Story */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Client Success Story</h2>
        <p className="max-w-3xl mx-auto mb-4">
          A leading US-based insurance agency approached us with a requirement of
          insurance accounts maintenance. Our team provided the services within a
          quick time, ensuring accuracy and cost savings.
        </p>
        <Button className="bg-blue-900 text-white hover:bg-blue-800">
          Read More Case Studies
        </Button>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center bg-blue-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance BPO Customer Support Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Reliable, efficient, and cost-effective customer support services with
          access to the best tools and infrastructure.
        </p>
        <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}