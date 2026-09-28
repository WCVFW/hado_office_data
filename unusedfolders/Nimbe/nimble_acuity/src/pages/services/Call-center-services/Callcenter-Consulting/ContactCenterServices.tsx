import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Cloud, Headphones, Users, CheckCircle2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

export default function ContactCenterServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Contact Center Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Interact with your customers smoothly and seamlessly with our omnichannel
          and Lean Six Sigma-driven solutions.
        </p>
        <Button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Customers rate their experience not only on product quality but also on
          how communication and issue resolution are handled. Nimble Acuity helps
          you build trust by providing digital-first, multichannel client engagement
          backed by Lean Six Sigma best practices.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Contact Center Outsourcing Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inbound Contact Center Services",
                icon: Headphones,
                desc: "We triage and direct all customer-initiated interactions including calls, texts, and emails to proper resolution paths.",
              },
              {
                title: "Outbound Contact Center Services",
                icon: Phone,
                desc: "We assist in surveys, feedback collection, marketing, and lead generation campaigns via multiple channels.",
              },
              {
                title: "Customer Contact Center Services",
                icon: Users,
                desc: "We build intelligent AI-driven chatbots with speech recognition for seamless customer interactions.",
              },
              {
                title: "Cloud Contact Center Services",
                icon: Cloud,
                desc: "We implement robust, cloud-based infrastructures with measurable CTQ impact.",
              },
              {
                title: "Omnichannel Contact Center Services",
                icon: Users,
                desc: "Engage customers with two-way texting, emails, live chat, and social media for prompt responses.",
              },
              {
                title: "Contact Center as a Service (CCaaS)",
                icon: Cloud,
                desc: "Save costs with cloud-hosted environments and specialized virtual agents.",
              },
            ].map((service, i) => (
              <Card key={i} className="shadow-md hover:shadow-xl transition">
                <CardHeader className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Contact Center Process Flow
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Requirement Gathering",
              "Strategy Formulation",
              "Implementation",
              "Support & Maintenance",
            ].map((step, i) => (
              <Card
                key={i}
                className="p-6 shadow-md border-t-4 border-blue-600"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {String(i + 1).padStart(2, "0")}. {step}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Nimble Acuity?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "Experienced Professionals",
              "Data Security",
              "ISO-Certified",
              "Well-Established Infrastructure",
              "Round-the-Clock Customer Support",
              "Cost-Effective Solutions",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Contact Center?
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Acuity today and experience CTQ-based performance
          outcomes, standardized workflows, and future-proof customer engagement.
        </p>
        <Button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">
          Get Started
        </Button>
      </section>
    </div>
  );
}
