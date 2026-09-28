import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ShoppingCart,
  Headphones,
  Clock,
  Users,
  CheckCircle,
  Globe2,
  BarChart,
  MessageSquare,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const EcommerceSupport: React.FC = () => {
  const services = [
    {
      title: "Email Support",
      desc: "Managed support inboxes, SLA-governed templates, and prompt query resolution through root cause categorization.",
      icon: Mail,
    },
    {
      title: "Billing & Payment Support",
      desc: "Transaction validation, multi-platform reconciliation, and Poka-Yoke enabled dispute reduction.",
      icon: CheckCircle,
    },
    {
      title: "Answering Product Queries",
      desc: "VoC-mapped protocols, guided purchase support, and instructional messaging to improve customer experience.",
      icon: ShoppingCart,
    },
    {
      title: "Order Tracking Support",
      desc: "Timely updates, order tracking system integration, and proactive shipping issue resolution.",
      icon: Clock,
    },
    {
      title: "Live Chat Support",
      desc: "Instant query resolution and 24/7 customer engagement with error-proofed chat scripts.",
      icon: MessageSquare,
    },
    {
      title: "Post-purchase & Retail Support",
      desc: "Returns/exchanges handling, warranty assistance, and retail product guidance.",
      icon: Users,
    },
  ];

  const processSteps = [
    "Understand Ecommerce Customer Support Needs",
    "Develop Client-specific Customer Support Strategy",
    "Build the Support Squad",
    "Multi-channel Customer Support System",
    "Optimization of the Support Process",
    "Incorporating Feedback for Continuous Improvement",
  ];

  const sectors = [
    "Automotives",
    "Pharmacies",
    "Travel & Tourism",
    "Movies & Entertainment",
    "Food & Beverage",
    "Retail Industry",
    "Online Education & E-learning",
  ];

  const toolkit = [
    "Social Media Management Tools",
    "Live Chat Software",
    "Predictive Analytics",
    "Help Desk Software",
    "Self-service Portals",
    "Email Support Services",
    "CRM Systems",
    "Feedback & Survey Tools",
    "AI-powered Chatbots",
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Outsource eCommerce Customer Support Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Foster loyalty and drive repeat business with our specialized eCommerce
          customer support solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Get in Touch
        </motion.button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our eCommerce Customer Support Solutions
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
              <srv.icon className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Offshore eCommerce Support Process
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
          {processSteps.map((step, idx) => (
            <motion.li
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Sectors */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sectors We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              className="bg-purple-50 text-purple-700 font-semibold px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Toolkit */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Toolkit</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto text-gray-700">
          {toolkit.map((tech, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BarChart className="mx-auto mb-2 h-6 w-6 text-pink-600" />
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
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
              Provided urgent appointment-setting services for a US-based client,
              delivering efficiency and improved engagement.
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
              Delivered cost-efficient telemarketing campaigns for a leading insurance firm,
              boosting conversions and outreach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Clients Speak</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “O2I will have a positive effect on any company's turnover, I do not doubt that.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Marketing Director, UK Insulation Company</p>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Elevate Your eCommerce Customer Support?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Schedule a diagnostic consultation to optimize CTQ-aligned workflows and improve CSAT, FCR, and loyalty.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

export default EcommerceSupport;
