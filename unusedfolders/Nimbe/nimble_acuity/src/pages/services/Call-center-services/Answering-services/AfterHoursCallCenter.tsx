import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const AfterHoursCallCenter: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auity After Hours Call Center Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get our trained agents to handle your after-hours call center
          operations to prevent service disruptions at rates starting as low as{" "}
          <span className="font-semibold">$10 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          Are inconsistent service quality or unmonitored escalations impacting
          your after-hours customer experience? At Nimble Auity, we implement a
          structured support system that aligns with Voice of the Customer (VoC)
          feedback and maps interactions to Critical to Quality (CTQ)
          performance expectations. This ensures consistent service across after
          hours timeframes.
        </p>
        <p>
          Nimble Auity has 25+ years of experience in simplifying client
          interactions through after-hours call center services. Our efforts are
          supported by robust infrastructure, equipped contact centers, and
          qualified agents serving businesses where performance is critical.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 bg-white px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          After Hours Call Center Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Off-hours Chat",
              desc: "Our agents man the chat desk to help customers courteously in the after hours."
            },
            {
              title: "After-hours Guest Assistance",
              desc: "We support your after-hours clients like an extension of your team."
            },
            {
              title: "Network Monitoring (NOC)",
              desc: "We apply VSM and defined escalation logic to ensure proactive network health monitoring."
            },
            {
              title: "After-hours IT Support",
              desc: "We provide IT support during the after hours without slack in quality or agility."
            },
            {
              title: "Ticket Logging & Escalation",
              desc: "DMAIC ticket workflows reduce root-cause delays and increase client retention by 45.28%."
            },
            {
              title: "Notification Response Handling",
              desc: "Prevent after-hours notification bottlenecks with our response handling support."
            },
            {
              title: "After-hours Help Desk",
              desc: "Inbound queries via calls, email, or chat are handled professionally and promptly."
            },
            {
              title: "After-hours Emergency Call Center",
              desc: "Emergencies are unpredictable; our staff proactively manage after-hours crisis calls."
            }
          ].map((service, idx) => (
            <Card
              key={idx}
              className="shadow-md hover:shadow-lg transition rounded-2xl"
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our After Hours Call Center Process
        </h2>
        <ol className="space-y-6 text-lg">
          <li>
            <span className="font-semibold">01. Requirement Gathering –</span>{" "}
            We collaborate with you to collect your business needs.
          </li>
          <li>
            <span className="font-semibold">
              02. Implementing After Hours Call Center –
            </span>{" "}
            We design a system that ensures business continuity for after-hours
            clients.
          </li>
          <li>
            <span className="font-semibold">03. Performance Testing –</span> We
            thoroughly test systems to ensure reliability under dynamic
            conditions.
          </li>
          <li>
            <span className="font-semibold">04. Sign off and Support –</span> We
            deliver reports, validate success, and provide ongoing support.
          </li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-100 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity for After Hours Call Center Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-lg">
          <li>ISO 9001:2015 Certified After Hours Call Center Provider</li>
          <li>ISO/IEC 27001:2022 Data Security Standards</li>
          <li>High Accuracy and Quality Service with CTQ Dashboards</li>
          <li>Short Turnaround with punctual, reliable service</li>
          <li>Scalable services to handle fluctuating workloads</li>
          <li>Pocket-friendly Pricing with flexible options</li>
          <li>Experienced Contact Center Agents and Managers</li>
          <li>Modern Infrastructure with advanced call tools</li>
          <li>24/7/365 Availability for uninterrupted operations</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-lg">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </blockquote>
        <p className="text-center mt-4 font-semibold">
          Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Partner with Nimble Auity for After Hours Excellence
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Let us help you identify inefficiencies and streamline your after-hours
          operations. Our team aligns your VoC priorities with CTQ goals and
          reduces Non-Value Adding (NVA) tasks across the service lifecycle.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default AfterHoursCallCenter;
