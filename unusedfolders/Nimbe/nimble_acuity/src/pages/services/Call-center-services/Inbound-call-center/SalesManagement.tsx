import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Monitor,
  ClipboardList,
  Activity,
  Star,
  CheckCircle2,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const SalesManagement: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Outsource Sales Management Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Scale your business and achieve sales targets efficiently with Nimble
          Acuity’s experienced sales management team, starting at $8/hour.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Sales Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sales Strategy",
              icon: Users,
              desc: "Develop robust strategies through VoC-to-CTQ mapping and DMAIC lifecycle for optimized sales.",
            },
            {
              title: "Sales Model Development",
              icon: Monitor,
              desc: "Structured workflows and accountability to maximize sales potential and reduce NVA handoffs.",
            },
            {
              title: "Sales Processes",
              icon: ClipboardList,
              desc: "End-to-end process design from pitching to closing, ensuring modular and systematic sales funnels.",
            },
            {
              title: "Sales CRM Building",
              icon: Activity,
              desc: "Design, implement, and optimize CRM systems aligned with CVA to boost sales force productivity.",
            },
            {
              title: "Performance Metrics",
              icon: Star,
              desc: "Assess, identify, and drive KPIs across business development, account management, and CRM.",
            },
            {
              title: "Sales Coaching",
              icon: CheckCircle2,
              desc: "Train your in-house sales team using standardized practices validated by Six Sigma methodology.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-indigo-600">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sales Management Team */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Sales Management Team
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              role: "Sales Strategy Head",
              desc: "Leads core strategies and drives synergies of the sales organization towards business growth.",
            },
            {
              role: "Sales Engineering Head",
              desc: "Oversees statistical analysis and establishes KPIs to support Lean Six Sigma improvement goals.",
            },
            {
              role: "Sales Management Executive",
              desc: "Tracks and leads sales meetings, executes strategy, and directly coaches sales teams.",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {member.role}
              </h3>
              <p className="text-gray-600">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Why Hire Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Affordable Prices",
              desc: "Cost-effective services to hire a dedicated team within your budget.",
            },
            {
              title: "Dedicated and Experienced Team",
              desc: "Expert sales professionals driving meaningful results for your projects.",
            },
            {
              title: "Tailored Services",
              desc: "Custom services aligned with your organization’s specific goals.",
            },
            {
              title: "Measurable Impact",
              desc: "Lean Six Sigma validated processes ensure high performance and maintained standards.",
            },
            {
              title: "Improved Processes",
              desc: "Streamlined workflows and mentoring enhance sales process efficiency.",
            },
            {
              title: "Faster Growth",
              desc: "Synergized teams and dedicated efforts scale your business and revenue faster.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-indigo-50 rounded-xl p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Lead Generation Services for Financial Firm",
              desc: "A Singapore-based financial services provider received high-quality lead generation services within a quick time.",
            },
            {
              title: "Chat Support for Packers & Movers",
              desc: "A leading English firm received reliable and professional chat support and lead generation services efficiently.",
            },
          ].map((story, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">
          Testimonials
        </h2>
        <p className="max-w-3xl mx-auto text-lg italic text-gray-700">
          "I am happy with the inbound call center services that Nimble provided
          and I would recommend their services to anyone looking for
          professional call center services."
        </p>
        <p className="mt-4 font-semibold">Business Owner, Online Advertising Company, Canada</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Scale Your Sales with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with Nimble Acuity for professional sales management services that drive measurable growth.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SalesManagement;
