import React from "react";
import CCmainmenu from "../CCmainmenu";

const TelemarketingLeadGeneration: React.FC = () => {
  const services = [
    "B2B Cold Calling Leads",
    "Lead Management",
    "Product Promotion Leads",
    "Database Selling Leads",
    "Decision Maker Contact Leads",
    "Debt Collection Leads",
    "Research Surveys and Polling",
    "Upsell/Cross-sell Campaigns",
    "Seminar Population Leads",
    "Market Intelligence Leads",
    "Appointment Setting Leads",
    "Web-based Business Development Leads",
    "Direct Mail Follow-up Leads",
  ];

  const processSteps = [
    {
      title: "Requirement Analysis",
      description:
        "We analyze client requirements and devise a strategy for telemarketing leads tailored to their needs.",
    },
    {
      title: "Strategy Implementation",
      description:
        "Our call center agents implement the strategy while constantly adapting to client requirements.",
    },
    {
      title: "Quality Analysis & Transfer",
      description:
        "Leads are monitored for quality and transferred once verified for potential conversion.",
    },
    {
      title: "Feedback Incorporation",
      description:
        "Continuous improvements are made to streamline and optimize future lead generation campaigns.",
    },
  ];

  const benefits = [
    "ISO 9001:2015 Certified",
    "Best Infrastructure & Latest Tools",
    "Information Security with ISMS Certification",
    "24/7 Availability",
    "Experienced Call Center Agents",
    "Fast Turnaround Time",
    "Easy Scalability",
    "Single Point of Contact",
    "Reasonable Pricing",
  ];

  const otherServices = [
    "B2B Lead Generation Services",
    "Mortgage Lead Generation Services",
    "Insurance Lead Generation Services",
    "Appointment Setting Services",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Auity – Telemarketing Lead Generation Services
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Use proven outreach workflows to generate high-quality leads from unexplored regions and boost conversions.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started Today
        </a>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Telemarketing Lead Generation Services
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition text-gray-700"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Telemarketing Lead Generation Process
        </h2>
        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-blue-600 font-bold text-2xl">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((point, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mr-4 text-green-600 font-bold text-xl">✓</div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Other Services You May Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-gray-700">
          {otherServices.map((service, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="text-center py-16 bg-teal-600 text-white rounded-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Boost Your Telemarketing Leads?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Partner with Nimble Auity to streamline your telemarketing campaigns and generate high-quality leads efficiently.
        </p>
        <a
          href="mailto:info@nimbleauity.com"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default TelemarketingLeadGeneration;
