import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2CLeadGeneration: React.FC = () => {
  const services = [
    {
      title: "Conversion Optimization",
      description:
        "Ensure accurate identification of improvement areas on your website and efficiently optimize for higher conversions.",
    },
    {
      title: "Demographic Targeting",
      description:
        "Boost campaign efficiency and reach the right audience using our precise demographic targeting services.",
    },
    {
      title: "Cold Calling",
      description:
        "Transform leads into potential customers through our effective cold-calling and appointment-setting services.",
    },
    {
      title: "Lead List Building",
      description:
        "Obtain accurate mailing lists to target potential customers efficiently and increase engagement.",
    },
    {
      title: "Paid Promotions",
      description:
        "Maximize brand reach and visibility using our strategic paid promotion campaigns.",
    },
    {
      title: "Retargeting Leads",
      description:
        "Reconnect with potential customers who have visited your website but haven't converted.",
    },
    {
      title: "Marketing Automation & CRM Integration",
      description:
        "Integrate your sales and marketing software into a cohesive system to manage leads efficiently.",
    },
    {
      title: "Consumer Research & Analysis",
      description:
        "Revamp your strategies using data-driven consumer research to enhance engagement and conversions.",
    },
    {
      title: "Lead Qualification & Validation",
      description:
        "Grade leads based on quality to support your sales team in converting them efficiently.",
    },
    {
      title: "Lead Nurturing & Engagement",
      description:
        "Build long-term relationships with prospective customers through strategic lead nurturing.",
    },
  ];

  const benefits = [
    "Operational Transparency at every step",
    "Multilingual Lead Generation for local engagement",
    "State-of-the-art Infrastructure & latest tools",
    "ISO/IEC 27001:2022 ISMS Certified for data security",
    "Quick Turnaround Time across multiple time zones",
    "Easily Scalable agent count to match business goals",
    "Expert Call Center Agents with proven experience",
    "24/7 Availability via your dedicated Project Manager",
    "Cost-Effective solutions without compromising quality",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Nimble Auity – B2C Lead Generation Services
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Streamline your CMS, target quality leads, and boost conversions with our strategic, sales-driven solutions.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started Today
        </a>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          B2C Lead Generation Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[
            "Aerospace", "Agriculture", "Automotive", "Customs Brokerage", "Defense",
            "Energy", "Education", "Entertainment", "Finance", "Food", "Healthcare",
            "Hospitality", "IT", "Logistics", "Manufacturing", "Multimedia", "Public Sector",
            "Pharmaceutical", "Retail & e-Commerce", "Telecommunications", "Insurance",
            "Legal", "Real Estate"
          ].map((industry) => (
            <div
              key={industry}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition font-medium"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity for B2C Lead Generation?
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

      {/* CTA Section */}
      <section
        id="contact"
        className="text-center py-16 bg-teal-600 text-white rounded-lg mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Generate Quality B2C Leads?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Partner with Nimble Auity to optimize your sales funnel and boost conversions effectively.
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

export default B2CLeadGeneration;
