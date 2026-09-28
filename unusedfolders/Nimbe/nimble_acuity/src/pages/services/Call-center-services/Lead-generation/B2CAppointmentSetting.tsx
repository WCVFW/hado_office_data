import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const B2CAppointmentSetting: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble B2C Appointment Setting Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Optimize your conversion funnels and increase revenue per appointment with customized customer engagement techniques.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Inconsistent customer experiences and poor engagement strategies lead
          to erratic end-user behaviors. Such missteps hinder your market
          penetration capabilities by alienating potential customers. Our
          customized B2C appointment setting services reduce this damage by
          ensuring that each customer interaction is tailored to individual
          needs.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our dynamic scheduling and follow-up systems ensure timely
          interactions. We also integrate CRM systems to gain a unified view of
          each customer's journey, facilitating personalized communication at
          every touchpoint. These approaches restore confidence in your brand
          and boost conversion rates, driving market expansion.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { percent: "40%", text: "Enhancement in sales pipeline efficiency from qualified leads." },
            { percent: "22%", text: "Rise in customer retention by implementing follow-up protocols." },
            { percent: "25%", text: "Increase in conversion due to specialized skills and technology." },
          ].map((item, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold text-indigo-600">{item.percent}</h3>
                <p className="text-gray-600 mt-2">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our B2C Appointment Setting Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Web Conferences", points: ["Time zone scheduling optimization", "Automated participant reminders", "Adaptive slot availability management"] },
            { title: "Mortgage Appointments", points: ["Lender-consumer appointment matching", "Flexible rescheduling protocols", "Integration with CRM systems"] },
            { title: "Healthcare Leads", points: ["Patient-centric scheduling interfaces", "Real-time appointment availability", "Cross-platform booking capabilities"] },
            { title: "Retail Product Demos", points: ["In-store & virtual demo scheduling", "Consumer-driven slot selection", "Integrated confirmation systems"] },
            { title: "Home Services", points: ["Real-time provider availability updates", "Geo-targeted scheduling", "Consumer-friendly booking"] },
            { title: "Finance Consultations", points: ["Advisor availability sync", "Secure booking systems", "Automated confirmations"] },
            { title: "Telemarketing Scripts & Lists", points: ["Call-back mechanisms", "KPI-driven appointment outcomes", "Targeted segmentation"] },
          ].map((item, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="text-indigo-600 w-5 h-5 mr-2 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble B2C Appointment Setting Company?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Transform cold leads into opportunities with proactive engagement.",
            "Advanced consumer segmentation strategies for precise outreach.",
            "24/7 appointment accessibility across global time zones.",
            "Real-time appointment updates for flexibility and convenience.",
            "Proactive customer engagement with VoC-driven outreach.",
            "Seamless integration with consumer platforms.",
            "Enhanced compliance protocols and data security.",
          ].map((point, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="text-indigo-600 w-6 h-6 mr-3 mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto text-gray-700">
          "I am proud to personally recommend the services of Nimble Auity to any organization seeking a top-notch partner who can quickly and efficiently deploy effective outbound communication campaigns."
        </blockquote>
        <p className="mt-4 font-semibold">Operations Specialist, Scientific Innovations Company, Korea</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Enhance Your Sales Potential with Nimble
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Build genuine relationships through strategic communication. Turn interest into commitment with our warm lead nurturing expertise.
        </p>
        <Button size="lg" variant="secondary" className="rounded-full">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default B2CAppointmentSetting;
