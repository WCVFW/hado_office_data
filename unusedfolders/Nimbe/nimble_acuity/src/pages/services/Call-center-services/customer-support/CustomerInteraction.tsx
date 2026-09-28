import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MessageSquare,
  Headphones,
  Users,
  ShieldCheck,
  Globe2,
  Star,
  Zap,
  Clock,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CustomerInteraction: React.FC = () => {
  const services = [
    {
      title: "Inbound & Outbound Call Center",
      desc: "SOP-driven workflows using HubSpot, Avaya, Zendesk & Five9 with CVA-BVA-NVA mapping to eliminate redundancy.",
      icon: PhoneCall,
    },
    {
      title: "Email Support",
      desc: "CTQ-standardized templates & dashboards for rapid response and scalable handling of high query volumes.",
      icon: Mail,
    },
    {
      title: "Chat Support",
      desc: "Live chat scripts tested under Poka-Yoke protocols to ensure compliance and reduce Average Handle Time (AHT).",
      icon: MessageSquare,
    },
    {
      title: "Telemarketing",
      desc: "DMAIC-validated campaigns for B2B/B2C cold calling, telesales, and teleprospecting with conversion KPIs.",
      icon: Users,
    },
    {
      title: "Technical Support",
      desc: "Tiered troubleshooting flows with statistical root cause analysis to minimize escalations and ensure SLA adherence.",
      icon: Headphones,
    },
    {
      title: "Customer Helpdesk",
      desc: "Automated helpdesk workflows post-stabilization with SLA-backed governance for seamless request handling.",
      icon: ShieldCheck,
    },
  ];

  const benefits = [
    { title: "Affordable Services", desc: "Cost-per-outcome pricing with modular CTQ-driven options.", icon: Zap },
    { title: "Multilingual Support", desc: "Language-localized workflows for global consistency.", icon: Globe2 },
    { title: "Improved Brand Reputation", desc: "Boost NPS & brand perception via VoC-aligned handling.", icon: Star },
    { title: "Prompt Response", desc: "Live dashboard monitoring to meet SLA-defined cycle times.", icon: Clock },
    { title: "Single Point of Contact", desc: "Dedicated process controller for quality & improvements.", icon: Users },
    { title: "24/7 Assistance", desc: "Global coverage models ensuring 24x7x365 availability.", icon: ShieldCheck },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Outsource Customer Interaction Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Enhance communication outcomes and reduce response variability with
          standardized, VoC-aligned customer interaction services.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Get in Touch
        </motion.button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Interaction Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us for Customer Interaction?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((b, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <b.icon className="h-12 w-12 text-blue-700 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Appointment Setting for US Client
            </h3>
            <p className="text-gray-600">
              A US-based client needed quick appointment-setting support. Our
              team delivered efficient solutions on time, boosting their
              engagement rates.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Telemarketing for Insurance Firm
            </h3>
            <p className="text-gray-600">
              A leading insurance provider partnered with us for cost-effective
              telemarketing campaigns, achieving improved conversion rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “Outsource2india will have a positive effect on any company’s
          turnover, I do not doubt that.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">
          — Marketing Director, UK Insulation Company
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Transform Customer Interactions?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get in touch with us today to run a Lean Six Sigma–driven review of
          your current interaction model and improve CSAT, FCR, and NPS.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

export default CustomerInteraction;
