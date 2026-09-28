import React from "react";
import CCmainmenu from "../CCmainmenu";

const CustomerAcquisition: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Customer Acquisition Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We promote your products and services to the right audience by
          educating and offering a value proposition through voice calls
          starting at <span className="font-semibold">$8 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 text-gray-700">
        <p>
          Increasing your existing customer base is the fastest way to achieve
          your short-term goals and grow your business. However, it costs 5
          times more to attract a new customer than to retain an existing one.
          Nimble customer acquisition services are the key to expanding your
          current market by leveraging disruptive technologies that help you
          surpass call barring and blocking apps.
        </p>
        <p>
          At Nimble Auity, our team of skilled business development
          representatives use time-tested omnichannel marketing strategies that
          map Voice of the Customer (VoC) to Critical to Quality (CTQ) metrics.
          This helps us build data-driven customer-centric processes and identify
          opportunities to acquire new customers.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Telesales Customer Acquisition Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Inbound & Outbound Telesales",
              desc: "Custom outbound calls and handling inbound calls using state-of-the-art CRM systems.",
            },
            {
              title: "Lead Generation",
              desc: "Focused messaging, market research, and clear value propositions for quality leads.",
            },
            {
              title: "Online Market Research",
              desc: "VoC insights mapped to CTQ metrics with customer surveys, evaluations, and mystery shopping.",
            },
            {
              title: "Multi-media Campaigns",
              desc: "DMAIC-based lifecycle execution with measurable milestones and campaign effectiveness.",
            },
            {
              title: "Customer Retention Services",
              desc: "Last-step retention strategies to reduce churn and win back customers.",
            },
            {
              title: "Search Engine Marketing",
              desc: "CTQ-aligned SEM strategies evaluated against KPIs for revenue impact.",
            },
            {
              title: "Cross-sell & Up-sell Programs",
              desc: "Lower-cost customer engagement programs to increase revenue per client.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staffing Calculator */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Call Center Staffing Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md">
            <div className="space-y-4">
              <label className="block">
                Project Type
                <select className="w-full mt-1 p-2 border rounded">
                  <option>Inbound</option>
                  <option>Outbound - One time</option>
                  <option>Outbound - Ongoing</option>
                  <option>Email</option>
                  <option>Chat</option>
                </select>
              </label>
              <label className="block">
                Service Type
                <input
                  type="text"
                  placeholder="Order Taking Services"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block">
                Target Country
                <input
                  type="text"
                  placeholder="USA"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block">
                Shift Coverage
                <input
                  type="text"
                  placeholder="24/7 Coverage"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
            </div>
            <div className="space-y-4">
              <label className="block">
                Average Call Count Per Week
                <input
                  type="number"
                  placeholder="Enter Number of Calls"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block">
                Average Handling Time (Min)
                <input
                  type="number"
                  placeholder="Enter Minutes"
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Check Result
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Auity as Your Telesales Partner?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Cost-effective Services",
            "Quality Control",
            "State-of-art Technology",
            "Rapid Turnaround",
            "Data Confidentiality",
            "Personalized Assistance",
            "Effective Sales Strategy",
            "Experienced Telesales Consultants",
            "Expert Customer Service",
            "Domain Expertise (22+ years)",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-gray-700">
          "I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!"
        </blockquote>
        <p className="mt-4 font-semibold">
          – Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Acquire More Customers?
        </h2>
        <p className="mb-6">
          Contact Nimble Auity today for telesales customer acquisition services
          that scale your growth.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CustomerAcquisition;
