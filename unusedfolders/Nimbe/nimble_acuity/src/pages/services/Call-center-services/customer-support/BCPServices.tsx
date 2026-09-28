import React from "react";
import { ShieldCheck, Activity, RefreshCcw, Wrench } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const BCPServices: React.FC = () => {
  const services = [
    {
      title: "Business Impact Analysis",
      desc: "VoC-to-CTQ translation using impact-weighted risk models.",
      icon: ShieldCheck,
    },
    {
      title: "Interruption Risk Assessment",
      desc: "Root cause identification using Failure Mode and Effects Analysis (FMEA) and failure-mode modeling.",
      icon: Activity,
    },
    {
      title: "Recovery Plan Creation",
      desc: "Recovery workflows structured under DMAIC.",
      icon: RefreshCcw,
    },
    {
      title: "Recovery Strategy Execution",
      desc: "Selection guided by statistical prioritization and scenario stress-testing.",
      icon: Wrench,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Business Continuity Planning Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Build resilience against process disruptions with our CTQ-aligned Business Continuity Planning services.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Nimble Auity for BCP Services?
          </h2>
          <ul className="space-y-4 text-lg">
            <li>✅ Affordable Pricing Options</li>
            <li>✅ ISO/IEC 27001:2022 Certified Data Security</li>
            <li>✅ Superior Quality Services with DMAIC & SOP-driven Execution</li>
            <li>✅ State-of-the-art Infrastructure</li>
            <li>✅ Highly Scalable Services & Skilled Team</li>
            <li>✅ Round the Clock Support & Quick Turnaround</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Safeguard Your Business?
        </h2>
        <p className="text-gray-600 mb-8">
          Nimble Auity applies Lean Six Sigma governance to every continuity project, ensuring your business remains resilient and statistically de-risked.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default BCPServices;
