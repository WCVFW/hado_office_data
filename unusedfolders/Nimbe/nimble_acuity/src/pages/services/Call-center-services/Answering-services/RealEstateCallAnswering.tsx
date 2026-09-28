import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const RealEstateCallAnswering: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Auity Real Estate Call Answering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Since most crucial business dealings happen outside business hours, our real estate call answering services will ensure that you never miss any calls from your customers — starting at just <span className="font-semibold">$10 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-lg leading-relaxed">
        <p>
          Being a real estate agent or a property manager requires pushing boundaries when it comes to being available for business around the clock. While you may have definite 9 to 5 timings, customers are at the liberty to call you outside of work hours. 
        </p>
        <p>
          When you hire Nimble Auity, we implement a structured engagement model aligned with Voice of the Customer (VoC) insights and Critical to Quality (CTQ) performance goals. This ensures that each customer opportunity is captured through standardized workflows that eliminate Non-Value Adding (NVA) handoff delays.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Real Estate Call Answering Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Appointment Scheduling",
              desc: "We integrate with your calendar to manage property visits, office meetings, open houses, and more with real-time notifications."
            },
            {
              title: "Lead Capture",
              desc: "We ensure prompt response, track CTQs like response time, and maximize lead conversion with proven Six Sigma frameworks."
            },
            {
              title: "Sending Messages",
              desc: "We notify you promptly via calls, text, or emails so that you can respond swiftly."
            },
            {
              title: "Multilingual Support",
              desc: "Native speakers provide flawless call answering services for global clientele."
            },
            {
              title: "Complete Availability",
              desc: "Our team is available 24/7, including weekends, to support your customers even when you’re off-duty."
            },
            {
              title: "Conditional Call Forwarding",
              desc: "Never miss a call with our forwarding service when you’re already on a call or away."
            }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-6 text-lg">
          <li>Cost-saving Solutions with pay-per-minute flexibility</li>
          <li>High Accuracy & Quality Service backed by Lean Six Sigma</li>
          <li>Modern Infrastructure with advanced call center tools</li>
          <li>Experienced Team of Contact Center Agents and Managers</li>
          <li>Short Turnaround for faster responses</li>
          <li>Scalable services with dedicated bandwidth</li>
          <li>ISO Certified methodologies & compliance</li>
          <li>Complete Data Security with stringent safeguards</li>
          <li>Dedicated Project Manager as a single point of contact</li>
          <li>24/7 Support via calls, emails, or chat</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center italic text-lg">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work. Thank you so much!"
        </blockquote>
        <p className="text-center mt-4 font-semibold">Reservations Supervisor, Travel Website Company, CA</p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Contact Nimble Auity Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Maximize your real estate business by relying on Nimble Auity. Let our experts streamline your call answering with professionalism, speed, and trust.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default RealEstateCallAnswering;
