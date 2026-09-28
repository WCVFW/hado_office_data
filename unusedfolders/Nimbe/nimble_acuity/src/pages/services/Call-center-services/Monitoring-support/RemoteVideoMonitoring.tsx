import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const RemoteVideoMonitoring: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Remote Video Monitoring Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Achieve real-time, Critical to Quality (CTQ)-validated remote
          surveillance through standardized video monitoring.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-4">
        <p>
          If you are running a business where security is paramount and has a
          direct effect on how your customers perceive you, video monitoring is
          the perfect solution. Situational risk and compliance visibility are
          non-negotiable. Lean Six Sigma–aligned remote monitoring enables
          proactive threat detection and operational continuity.
        </p>
        <p>
          Nimble Auity offers video monitoring systems engineered to reduce false
          positives, optimize alert response, and map every activity to CTQ
          security triggers.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Our Remote Video Monitoring Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Virtual Security Guard Services",
              desc: "SOP-driven patrol cycles, Poka-Yoke dashboards, and verified real-time event logging.",
            },
            {
              title: "Virtual Opening & Closing Escort Services",
              desc: "Two-way audio/video confirmation with CTQ-based entry clearance and access validation.",
            },
            {
              title: "Virtual Verified Alarm Monitoring",
              desc: "Live video feed verification and direct law enforcement alerts for triggered alarms.",
            },
            {
              title: "AI-based Virtual Anti-Loitering",
              desc: "AI triggers tied to dwell thresholds, auto categorization of anomalies, and real-time response.",
            },
            {
              title: "Audit Compliance Monitoring",
              desc: "Professional audit compliance monitoring across safety, cleanliness, staffing, and more.",
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Additional Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Customer Counting</li>
          <li>Queue Management and Time Analysis</li>
          <li>True Alarm Detection</li>
          <li>False Alarm Filtering</li>
          <li>AI-based Face Detection</li>
          <li>Crowd Monitoring</li>
          <li>Perimeter Monitoring</li>
          <li>Intrusion Detection</li>
          <li>Vehicle License Plate Monitoring</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Why Nimble Remote Video Monitoring Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Responsive and Agile",
              desc: "7-second industry-best average response time to alarms and infractions.",
            },
            {
              title: "Situationally Aware",
              desc: "Team includes ex-law enforcement officers with sharp judgment and fast response.",
            },
            {
              title: "Flexible",
              desc: "Multiple customizable options to meet unique customer satisfaction goals.",
            },
            {
              title: "Continuously Improving",
              desc: "Ongoing R&D ensures latest SOPs and best technology implementation.",
            },
          ].map((benefit, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-10 px-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">
          Client Success Stories
        </h2>
        <div className="space-y-4">
          <p>
            Nimble provided live CCTV monitoring services to a UK hostel owner,
            preventing intrusions with constant surveillance.
          </p>
          <p>
            Nimble helped a European gym monitor compliance with social
            distancing norms using advanced CCTV monitoring.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Choose Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Getting started with our suite of video and security camera monitoring
          services is extremely easy. Contact us now and let us make your
          business security our personal concern.
        </p>
        <Button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default RemoteVideoMonitoring;
