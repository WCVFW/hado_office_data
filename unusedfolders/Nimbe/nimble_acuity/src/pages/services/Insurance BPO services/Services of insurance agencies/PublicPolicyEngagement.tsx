// src/components/PublicPolicyEngagement.tsx
import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

type Service = { title: string; content: string };

const SERVICES: Service[] = [
  {
    title: "Advisory Services",
    content:
      "Expert guidance on when and how to engage with policymakers at various levels to maximize impact.",
  },
  {
    title: "Strategizing",
    content:
      "We build strong strategies aligned with policymakers, advocates and stakeholders to ensure effective engagement.",
  },
  {
    title: "Research Translation",
    content:
      "Convert written/audio research into concise briefs, statistics, infographics and policy-ready materials.",
  },
  {
    title: "Training",
    content:
      "Virtual and in-person training for representatives on how to communicate and engage with policymakers.",
  },
  {
    title: "Facilitation & Media Advocacy",
    content:
      "We facilitate meetings, manage follow-ups and run media advocacy to deliver targeted messages to decision-makers.",
  },
];

const PROCESS_STEPS = [
  "Requirement Assessment",
  "Quotation & Pricing",
  "Revision & Agreement",
  "Team Allotment",
  "QA & Delivery",
];

const BENEFITS = [
  "Cost-effective & customized services",
  "High data security with encrypted communications",
  "Modern, class-leading infrastructure",
  "Shortest turnaround times",
  "24/7 customer support",
  "Dedicated project manager (single point of contact)",
  "Qualified and skilled professionals",
  "One-team-per-client model for focus and accuracy",
];

const PublicPolicyEngagement: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
       <Imainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Public Policy Engagement Services
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Get exceptional public policy engagement services to create a long-lasting impact in policymaking — rates starting at{" "}
          <span className="font-semibold">$8/hour</span>
        </p>
        <button className="mt-4 inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Get Started Today
        </button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-4">Why Public Policy Engagement Matters</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We provide well-researched data, training and strategy so your organization can engage effectively with policymakers, stakeholders and communities — creating evidence-based, lasting policy influence.
        </p>
      </section>

      {/* Services Accordion */}
      <section className="bg-gray-50 py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
        <div className="max-w-4xl mx-auto">
          {SERVICES.map((s, i) => (
            <div key={i} className="mb-4 border rounded-lg bg-white shadow">
              <h4>
                <button
                  id={`accordion-${i}`}
                  aria-controls={`panel-${i}`}
                  aria-expanded={openIndex === i}
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-4 font-semibold text-left text-lg focus:outline-none"
                >
                  <span>{s.title}</span>
                  <span className="ml-4 text-xl">{openIndex === i ? "▲" : "▼"}</span>
                </button>
              </h4>
              <div
                id={`panel-${i}`}
                role="region"
                aria-labelledby={`accordion-${i}`}
                className={`px-6 pb-4 ${openIndex === i ? "block" : "hidden"}`}
              >
                <p className="text-gray-700">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Our Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">0{idx + 1}</div>
              <div className="font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Why Nimble to Nimble Acuity?</h3>
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
          {BENEFITS.map((b, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <blockquote className="italic text-lg text-gray-700">
          “We chose Nimble Acuity for their reasonable cost, flexibility, and skilled team. They learned our workflows and delivered exactly as we wanted.”
        </blockquote>
        <p className="mt-4 font-semibold">— COO, Insurance Marketing Company, Florida</p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Start Your 1-Week Free Trial</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Try our public policy engagement services free for 7 days — experience the Nimble Acuity advantage before you commit.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default PublicPolicyEngagement;
