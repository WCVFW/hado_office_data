import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, Volume2, Bell, ClipboardCheck, BarChart3, Users } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VoiceBroadcastingServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Voice Broadcasting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Our voice broadcasting services are executed by trained agents using standardized
          workflows, enabling faster message delivery and validated outreach.
        </p>
        <Button className="mt-6 bg-white text-indigo-900 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Boost Your Outreach with Nimble</h2>
        <p className="text-gray-700 leading-relaxed">
          Want to improve your business outreach with clients, stakeholders, employees, voters,
          and others? Voice broadcasting reduces Non-Value Add (NVA) manual efforts in reaching
          each contact by leveraging structured call workflows. At{" "}
          <strong>Nimble Auity</strong>, we apply Lean Six Sigma-driven process control, backed by
          SLAs, AI-enabled infrastructure, and Customer Value Add (CVA) prioritization.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Voice Broadcasting Services We Provide
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Transaction Notifications",
              desc: "Automated alerts for purchases, cart abandonment, and payments—delivered without manual intervention.",
              icon: ClipboardCheck,
            },
            {
              title: "Scheduled Reminders",
              desc: "Automate appointment workflows to reduce no-shows, aligned with Critical to Quality (CTQ) standards.",
              icon: Bell,
            },
            {
              title: "Order Confirmation",
              desc: "Real-time order updates confirming purchases with accuracy and speed.",
              icon: PhoneCall,
            },
            {
              title: "Promotions & Discounts",
              desc: "Broadcast promotional offers and discounts to engage and retain customers.",
              icon: Volume2,
            },
            {
              title: "Campaign Broadcasting",
              desc: "Run marketing campaigns that guarantee reach and enable early insights.",
              icon: BarChart3,
            },
            {
              title: "Phone Surveys",
              desc: "Streamlined Voice of Customer (VoC) collection for measurable service quality feedback.",
              icon: Users,
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-indigo-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Voice Broadcasting Process
        </h2>
        <ol className="space-y-6 text-gray-700">
          {[
            "Requirement Discovery – Capture client’s concerns and objectives.",
            "Analysis – Evaluate requirements and finalize goals.",
            "Execution – Services commence as per SLA with NDA compliance.",
            "Quality Checks – Ensure accuracy and customer satisfaction.",
            "Reporting & Closure – Provide reports and track process benefits.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-indigo-700 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                {i + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Nimble for Voice Broadcasting?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "International Quality standards with ISO 9001:2015 certification.",
            "Cost-effective compared to in-house teams.",
            "Experienced professionals with decades of expertise.",
            "Best-in-class infrastructure with AI-driven error-proofing.",
            "ISO/IEC 27001:2022 certified for total security.",
            "Scalable services tailored to client needs.",
            "Quick Turnaround Times with takt-time alignment.",
            "Enhanced Customer Experience through satisfaction-first design.",
          ].map((point, i) => (
            <Card key={i} className="shadow rounded-2xl">
              <CardContent className="p-6 flex items-start gap-3">
                <span className="text-indigo-700 font-bold">{i + 1}.</span>
                <p>{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Call Quality Monitoring for a Tech Firm
              </h3>
              <p className="text-gray-600">
                Delivered precise monitoring of in-house calls for a US-based client using
                advanced audio recording tools. Outcome: improved call quality and customer
                satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                Ticketing & Email Support for Home Furnishing Brand
              </h3>
              <p className="text-gray-600">
                Provided seamless internal ticketing and email support, streamlining customer
                workflows and enhancing efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
        <p className="max-w-3xl mx-auto text-gray-700 italic">
          “We only use Nimble Auity for marketing purposes due to their professionalism and
          clear communication. Their team consistently delivers beyond expectations.”
        </p>
        <p className="mt-4 font-semibold">— Marketing Director, UK</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-indigo-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Partner with Nimble Auity for Voice Broadcasting
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With our ISO-certified services, advanced AI tools, and customer-first mindset, we
          guarantee seamless communication, faster outreach, and measurable ROI.
        </p>
        <Button className="bg-white text-indigo-900 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default VoiceBroadcastingServices;
