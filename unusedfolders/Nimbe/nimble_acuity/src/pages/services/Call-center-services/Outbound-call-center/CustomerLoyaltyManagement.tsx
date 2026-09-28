import React from "react";
import CCmainmenu from "../CCmainmenu";

const CustomerLoyaltyManagement: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Customer Loyalty Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Retain valuable clients and turn them into brand advocates using Lean Six Sigma-based loyalty management strategies.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Are you giving your loyal customers the attention they deserve? Nimble Auity
          helps you proactively retain prized clients by coordinating loyalty initiatives
          with key satisfaction factors using VoC-to-CTQ mapping.
        </p>
        <p className="text-lg leading-relaxed">
          We offer robust customer loyalty management services and actionable insights for
          promotions, subscription upgrades, and reward points. Maintain a healthy list of
          loyal clients and drive revenue with our B2B data cleansing and personalized
          multichannel communication.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Customer Loyalty Management Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Launching offers or discounts",
            "Aftermarket analysis",
            "Creating loyalty programs",
            "Engaging customer service",
            "Onboarding",
            "Dispute resolution",
            "Introducing new plans or upgrades",
            "Workflow management",
            "Reporting and analysis of customer reports",
            "Multichannel marketing",
            "Risk analysis",
            "Data cleansing",
            "Data appending",
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

      {/* Industries */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Industries We Cater To</h2>
        <p className="text-center text-gray-700">
          Aerospace, Agriculture, Automotive, Customs Brokerage, Defense, Energy,
          Education, Entertainment, Finance, Food, Healthcare, Hospitality,
          Information Technology, Logistics, Manufacturing, Multimedia, Public Sector,
          Pharmaceutical, Retail & e-Commerce, Telecommunications, Insurance, Legal,
          Real Estate
        </p>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">
          Customer Loyalty Management & Retention Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Requirement Gathering",
              desc: "Identify loyal clients for multichannel communication.",
            },
            {
              step: "02",
              title: "Refreshing Your Database",
              desc: "Scrub and append your database with up-to-date information.",
            },
            {
              step: "03",
              title: "Customized Communication",
              desc: "Send offers, upgrades, and benefits to entice client loyalty.",
            },
            {
              step: "04",
              title: "Reporting",
              desc: "Generate insights and reports to plan next moves in client retention.",
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
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Customer Loyalty Management Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "ISO 9001:2015 Certified Customer Loyalty Services",
            "Data Security (ISO/IEC 27001:2022)",
            "High Accuracy & Quality Service",
            "Short Turnaround with Lean Six Sigma",
            "Scalable Solutions",
            "Pocket-friendly Pricing Options",
            "Dedicated Single Point of Contact",
            "Experienced Contact Center Agents (10+ years)",
            "Modern Infrastructure & Security",
            "Secure Data Exchange via SFTP & VPN",
            "24/7/365 Multilingual Support",
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
              desc: "Nimble Auity elevated service levels from 30% to 90% for a leading UK insurance client.",
            },
            {
              title: "Inbound Technical Support Help Desk Services to an IT Services Company",
              desc: "Handled inbound technical queries efficiently for a leading IT company.",
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
          <footer className="mt-4 font-semibold">
            – Reservations Supervisor, Travel Website Company, CA
          </footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Customer Loyalty Management to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Auity has 26+ years of call center expertise and global delivery centers.
          Boost customer loyalty, retention, and revenue with structured loyalty management.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CustomerLoyaltyManagement;
