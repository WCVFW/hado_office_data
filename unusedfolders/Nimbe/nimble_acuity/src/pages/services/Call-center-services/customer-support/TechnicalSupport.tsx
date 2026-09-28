import React from "react";
import { Clock, Users, Shield, Settings } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const TechnicalSupport: React.FC = () => {
  const benefits = [
    {
      title: "Experienced Agents",
      description:
        "Lean Six Sigma-trained agents with structured onboarding and Tier-wise response scripting.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support with dedicated project management.",
      icon: Clock,
    },
    {
      title: "State-of-the-art Infrastructure",
      description:
        "Seamless connectivity and modern infrastructure for uninterrupted service.",
      icon: Settings,
    },
    {
      title: "Information Security",
      description:
        "ISO/IEC 27001:2022 certified ISMS ensuring CTQ-driven compliance.",
      icon: Shield,
    },
  ];

  return (
    <div><CCmainmenu/>
    <div className="w-full px-4 md:px-16 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Support Outsourcing Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Switch to technical support outsourcing and transform your technical
            support from business liability to business strength.
          </p>
        </header>

        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-gray-700 mb-4">
            Are unresolved technical issues delaying customer satisfaction and
            eroding your service quality? Nimble Auity provides 24/7 technical
            support call center services with Voice of Customer (VoC)-aligned
            scripts designed under the Define, Measure, Analyze, Improve, and
            Control (DMAIC) lifecycle. This ensures streamlined ticket triage,
            fast resolutions, and measurable improvement.
          </p>
          <p className="text-gray-700">
            Our team adapts to your products' technicalities while delivering
            consistent support mapped to Critical to Quality (CTQ) parameters.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose Nimble Auity for Technical Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Our Technical Support Services
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>
              <strong>Desktop Support:</strong> Hardware and software issue
              resolution with Tier-1 standardized workflows.
            </li>
            <li>
              <strong>IT Support Services:</strong> Network management,
              cybersecurity, and cloud tech support aligned to Lean Six Sigma
              standards.
            </li>
            <li>
              <strong>Product Tech Support:</strong> CRM and product-specific
              issue resolution mapped to CTQs.
            </li>
            <li>
              <strong>Maintenance Support:</strong> Preventive, predictive,
              and corrective maintenance to reduce downtime.
            </li>
            <li>
              <strong>Pre & Post-Sales Support:</strong> Seamless customer
              journey with CVA-BVA-NVA frameworks.
            </li>
            <li>
              <strong>Inbound Tech Support:</strong> Manage incoming calls
              efficiently with Lean Six Sigma Tier-1 workflows.
            </li>
            <li>
              <strong>Email & Chat Support:</strong> Timely technical
              assistance via email and live chat.
            </li>
            <li>
              <strong>Advanced Troubleshooting:</strong> Root cause analysis
              to resolve complex technical problems.
            </li>
            <li>
              <strong>Remote Assistance:</strong> Prompt problem resolution
              via remote access tools.
            </li>
          </ul>
        </section>

        {/* Industries Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700 text-center">
            {[
              "Telecommunications",
              "Consumer Electronics",
              "Hospitality",
              "Financial Services",
              "Insurance",
              "IT and Software",
              "e-Commerce",
              "Learning and Education",
              "Manufacturing",
              "Software as a Service (SaaS)",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-10 bg-blue-50 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Technical Support?
          </h2>
          <p className="mb-6 text-gray-700">
            Partner with Nimble Auity to deliver 24/7 technical support, reduce
            downtime, and enhance customer satisfaction.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </section>
      </div>
    </div>
    </div>
  );
};

export default TechnicalSupport;
