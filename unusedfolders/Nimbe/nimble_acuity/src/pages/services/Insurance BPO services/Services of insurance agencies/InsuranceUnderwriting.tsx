import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceUnderwriting: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Underwriting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Bolster risk management, and aggregate and analyze insurance loss runs
          and exposure data with Nimble Acuity's underwriting services. Prices start at{" "}
          <span className="font-semibold">$8/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Underwriting is a common practice in commercial, insurance, and
          investment banking. In the insurance business, underwriters determine
          whether an agency should take on the risk of insuring a client. With
          Nimble Acuity's underwriting services, you can effectively eliminate undue
          risks, optimize quotations, and save up to{" "}
          <span className="font-semibold">80% of time</span> and{" "}
          <span className="font-semibold">50% of costs</span>.
        </p>
        <p>
          Our underwriters evaluate coverage and premium recommendations and
          decide whether to approve or deny applications. Pre-quote analytical
          offerings include underwriting reports, analysis of loss run reports,
          exposure compilation, and more.
        </p>
        <p>
          Build profitable books of business with our certified insurance
          underwriters. <span className="font-semibold">Contact us</span> today
          for tailored solutions.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Insurance Underwriting Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Underwriting Optimization Services",
              desc: "We use predictive analytics and workflow algorithms to evaluate submissions, letting your underwriters focus on high-value accounts."
            },
            {
              title: "Automated Email Assistant",
              desc: "AI-powered email assistants automate lifecycle management of policy and renewal emails, using NLP to interpret unstructured content."
            },
            {
              title: "Underwriting Automation",
              desc: "AI workflows reduce manual effort in day-to-day underwriting activities, boosting efficiency."
            },
            {
              title: "Acquisition and Enrolment Services",
              desc: "We support revenue growth by handling quote reporting, compensation processes, and enrolment tasks."
            },
            {
              title: "Underwriting Support Services",
              desc: "Our team manages multiple F&A departments, enabling improved processing quality at lower costs."
            },
            {
              title: "Document Management",
              desc: "We streamline underwriting documentation processes, improving efficiency and enabling fast growth."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Insurance Data Entry",
            "Insurance Reporting Services",
            "Document Indexing Services",
            "Insurance BPO Customer Support"
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Nimble Insurance Underwriting Services to Nimble Acuity?
        </h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-3 text-lg text-gray-700">
          <li>
            <strong>Cost-effective Services:</strong> Consolidate and automate
            tasks, reduce errors, and cut costs. Services start at $8/hour.
          </li>
          <li>
            <strong>Enhanced Cash Flow:</strong> Digital methods reduce
            processing congestion and boost cash flow.
          </li>
          <li>
            <strong>Best Infrastructure:</strong> We leverage advanced
            underwriting software customized to each client’s needs.
          </li>
          <li>
            <strong>Experienced Team:</strong> From small to enterprise-scale
            projects, our underwriters provide end-to-end solutions.
          </li>
          <li>
            <strong>24/7 Support:</strong> Round-the-clock customer support to
            resolve queries anytime.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “We enjoy working with Nimble Acuity and find the team very
          responsive and detail oriented when it comes to following our policy
          checking instructions and identifying new forms.”
        </blockquote>
        <p className="mt-4 font-medium">
          – Partner, Risk Management & Property & Casualty Insurance Brokerage,
          PA, USA
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Customer Success Stories</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Insurance Policy Checking – NY
            </h3>
            <p>
              Provided back-office support to a NY-based risk insurance agent,
              boosting profit by 22%.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Operations – Health Insurance Company
            </h3>
            <p>
              Optimized workflows for a renowned health insurance firm, enabling
              record-breaking speed.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Underwriting Services to Nimble Acuity
        </h2>
        <p className="mb-6 text-lg">
          Our underwriting and risk disclosure approach sets us apart. Partner
          with us to boost your business with reliable and cost-effective
          solutions.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceUnderwriting;
