import React from "react";
import CCmainmenu from "../CCmainmenu";

const SubscriptionRenewalServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Subscription Renewal Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We keep track of renewals and send reminders so your customers enjoy uninterrupted service.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Are you experiencing subscriber attrition due to missed renewals or ineffective
          retention workflows? Get subscription renewal services that map Voice of the
          Customer (VoC)-to-Critical to Quality (CTQ) metrics to create strategies for
          minimizing churn and increasing engagement. Nimble Auity is a Lean-aligned partner
          following standardized processes to help clients retain existing customers and
          grow their base without operational strain.
        </p>
        <p className="text-lg leading-relaxed">
          Backed by 25+ years of experience in call center solutions, Nimble Auity helps you
          grow revenue with subscription renewal sales services. Our B2B experts leverage
          multi-channel communications to remind clients of upcoming renewals, ensuring
          loyalty and engagement.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Subscription Renewal Sales Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Product Subscription Renewal Services",
            "Subscriptions with Automatic Renewal",
            "Subscriptions with Manual Renewal",
            "Service Subscription Renewal Services",
            "Membership Subscription Renewal Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Subscription Renewal Services Process We Follow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Requirement Gathering",
              desc: "Collect requirements with your sales team, segmenting priorities and add-ons.",
            },
            {
              step: "02",
              title: "Refreshing Subscriber List",
              desc: "Evaluate and update subscriber data before sending personalized reminders.",
            },
            {
              step: "03",
              title: "Reminder Delivery",
              desc: "Dispatch reminders with upsell/cross-sell offers to reinforce retention.",
            },
            {
              step: "04",
              title: "Reporting",
              desc: "Maintain precise reports with metrics like delivery, open, and bounce rates.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow border-t-4 border-indigo-600"
            >
              <span className="text-indigo-600 font-bold text-xl">{item.step}</span>
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-sm mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Subscription Renewal Services from Nimble Auity?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Certified Subscription Renewal Services Provider (ISO 9001:2015, Lean Six Sigma)",
            "Data Security with ISO/IEC 27001:2022 standards",
            "High Accuracy & Multi-level Quality Checks",
            "Short Turnaround with VSM and CTQ prioritization",
            "Scalable & Customized Solutions",
            "Pocket-friendly Pricing Options",
            "Dedicated Single Point of Contact",
            "Experienced Contact Center Agents (10+ years)",
            "Modern Infrastructure & Security Systems",
            "Secure Data Exchange via SFTP & VPN",
            "24/7/365 Multilingual Availability",
          ].map((point, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Advanced IT Support to a UK-based Motorcycle Insurance Company",
              desc: "Nimble Auity’s multi-level support elevated service levels from 30% to 90%.",
            },
            {
              title: "Inbound Technical Support Help Desk Services to an IT Services Company",
              desc: "Handled inbound technical queries with precision and improved response times.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{story.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-indigo-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work. Thank you so much!"
          <footer className="mt-4 font-semibold">– Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Subscription Renewal Services to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Auity is ISO-certified with 26+ years of call center expertise, 500+
          specialists, and global delivery centers. Enhance retention and revenue with
          structured renewal processes.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SubscriptionRenewalServices;
