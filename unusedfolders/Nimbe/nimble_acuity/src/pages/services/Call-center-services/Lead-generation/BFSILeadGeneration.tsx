import React from "react";
import CCmainmenu from "../CCmainmenu";

const BFSILeadGeneration: React.FC = () => {
  const services = [
    {
      title: "B2B Lead Generation",
      description:
        "Delivering CTQ-qualified B2B leads through statistical root cause analysis and VoC alignment, boosting revenue and industry relationships.",
    },
    {
      title: "Cold Calling",
      description:
        "Effective cold calling services with DMAIC process controls and Poka-Yoke mechanisms, ensuring high conversion consistency.",
    },
    {
      title: "Appointment Setting",
      description:
        "Standardized appointment-setting scripts to engage key decision-makers and improve client retention by 45%.",
    },
  ];

  const processSteps = [
    {
      step: "01. Analysis",
      description:
        "Analyze client requirements and understand the BFSI business niche to strategize effectively.",
    },
    {
      step: "02. Planning",
      description:
        "Devise a project plan and put a strategy in place for high-quality lead generation.",
    },
    {
      step: "03. Lead Generation",
      description:
        "Execute the strategy and generate leads according to the client’s requirements.",
    },
    {
      step: "04. Delivery",
      description:
        "Post-qualification follow-up using SOP-driven validation steps to ensure CTQ-compliant leads.",
    },
  ];

  const whyChoose = [
    "Affordable Pricing tailored to your business objectives",
    "High-quality ISO-certified leads that convert",
    "Best infrastructure and international-standard office spaces",
    "Information Security with ISO/IEC 27001:2022 certification",
    "Experienced lead generation experts",
    "Quick turnaround time across multiple time zones",
    "Single Point of Contact for streamlined communication",
    "24/7 Availability for immediate support",
    "Ease of scalability to meet growing needs",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Auity – BFSI Lead Generation Experts
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          High-quality leads, CTQ-aligned, cost-effective solutions.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Us Today
        </a>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our BFSI Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Lead Generation Process
        </h2>
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col md:flex-row items-start md:items-center md:space-x-6"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {step.step.split(".")[0]}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{step.step}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whyChoose.map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4 text-blue-600 font-bold text-xl">
                ✓
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="text-center py-16 bg-indigo-600 text-white rounded-lg mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Boost Your BFSI Leads?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Partner with Nimble Auity for high-quality, CTQ-aligned lead generation.
        </p>
        <a
          href="mailto:info@nimbleauity.com"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
};

export default BFSILeadGeneration;
