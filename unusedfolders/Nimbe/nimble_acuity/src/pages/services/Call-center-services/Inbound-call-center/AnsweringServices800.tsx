import React from "react";
import CCmainmenu from "../CCmainmenu";

const AnsweringServices800: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fully Managed, Lean-Optimized 800 Answering Services
        </h1>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Nimble Acuity’s Lean methodologies have increased our call answering QA scores 
          from 83% to 92% while reducing performance process refinement.
        </p>
      </section>

      {/* Highlight Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Trusted by India’s Largest E-commerce Conglomerate
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We are currently onboarding <span className="font-semibold">4000+ sellers</span> each month.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Managing call volumes originating from diverse touchpoints requires more than 
          just reactive customer service. What you need is predictive and proactive 
          customer support frameworks that are faultless, scalable, and insight-driven, 
          which our 800 answering services deliver. We don’t just copy your internal 
          workflows; we map our processes to Customer Value Added (CVA) and Business 
          Value Added (BVA) steps, eliminate Non-Value Added (NVA) processes, and 
          re-engineer your workflows for speed, accuracy, and efficiency.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our data- and people-centric process excellence is fortified by a global team 
          of 100+ certified Lean Six Sigma Green and Yellow Belt experts in strategic 
          positions. This has enabled us to minimize call inaccuracies and decrease 
          missed calls, achieving 48.58% improvement in service quality.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          800 Answering Services Designed for Scale and Accuracy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Toll-free Incoming Call Support",
              description:
                "Lean call flows map Voice of the Customer (VoC) to Critical to Quality (CTQ)..."
            },
            {
              title: "Virtual Receptionist Services",
              description:
                "Upgrade your call triage process to remove hold times and eliminate non-value-adding steps..."
            },
            {
              title: "After-hours Answering Services",
              description:
                "Use demand forecasting and load balancing to assign agents effectively without wasting capacity..."
            },
            {
              title: "Technical Support Services",
              description:
                "Provide robust tier 1 technical support with structured troubleshooting guidelines..."
            },
            {
              title: "Order Taking and Processing",
              description:
                "Integration with your systems to bypass call handoffs, shorten cycle times, and reduce errors..."
            },
            {
              title: "Lead Capture and Qualification",
              description:
                "Lean-optimized scripts prevent duplicate data and validation delays, qualifying prospects faster..."
            },
            {
              title: "Message Taking and Call Routing",
              description:
                "Automated call routing and customized message capture avoid delays and misdirected calls..."
            },
            {
              title: "Billing and Account Inquiry Handling",
              description:
                "Lean process mapping addresses billing and account inquiries with fewer steps for faster resolution..."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Smarter, Faster, and Better - Our Differentiators
        </h2>
        <ul className="space-y-6 max-w-5xl mx-auto">
          {[
            "Smart Call Triage with Lean Automation",
            "SLA-driven Response Times Across Volume Swings",
            "Frictionless Integration with Client Systems",
            "Proactive Workflows to Manage High Call Volumes",
            "Quality Monitoring and Feedback Loops",
            "Custom Reporting with Process Optimization Insights"
          ].map((item, idx) => (
            <li
              key={idx}
              className="p-5 bg-white shadow rounded-xl border border-gray-200"
            >
              <span className="font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Call Center Staffing Calculator</h2>
        <p className="text-lg mb-6">
          Calculate staffing & costing for your project with Nimble Acuity.
        </p>
        <div className="p-6 bg-gray-100 rounded-xl shadow-md inline-block">
          <p className="text-sm text-gray-600">
            (Form fields like Project Type, Service Type, Calls per Week, etc. can be
            integrated here)
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Outsource 800 Answering Services for Brand-aligned and Lean-optimized Call Management
        </h2>
        <p className="max-w-3xl mx-auto mb-8">
          Structured Lean-based process interventions increased our call answering QA 
          scores from 83% to 92% while reducing attrition by 78%. Ready to harness the 
          power of Lean automation in your 800 answering services?
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Connect with Our Experts
        </button>
      </section>
    </div>
  );
};

export default AnsweringServices800;
