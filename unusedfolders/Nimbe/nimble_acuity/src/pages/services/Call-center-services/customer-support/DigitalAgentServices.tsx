import React from "react";
import { motion } from "framer-motion";
import { Cpu, BarChart2, Users, MessageSquare, TrendingUp, Globe2, CheckCircle, Calendar } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const DigitalAgentServices: React.FC = () => {
  const services = [
    {
      title: "Digital Agent for Business Development",
      desc: "Our digital agent provides end-to-end business development solutions using AI & ML, easing efforts across verticals.",
      icon: Cpu,
    },
    {
      title: "Digital Agent for Business Intelligence and Analytics",
      desc: "Monitor KPIs and gain actionable insights with AI-powered digital agents driving analytics and reporting.",
      icon: BarChart2,
    },
    {
      title: "Digital Agent for Employee Relationships",
      desc: "Maintain positive employee relations, encourage creativity, growth, and reduce attrition through structured engagement.",
      icon: Users,
    },
    {
      title: "Digital Agent for Customer Service, Engagement, and Profiling",
      desc: "Handle complete customer service workflows, prospect profiling, and engagement models with optimized digital agents.",
      icon: MessageSquare,
    },
    {
      title: "Digital Agent for Marketing Automation",
      desc: "Streamline customer journeys from first contact to closing with phased marketing automation powered by digital agents.",
      icon: TrendingUp,
    },
    {
      title: "Digital Agent for Community Relationships",
      desc: "Maintain consistent and timely engagement with communities, ensuring smooth relationship management at scale.",
      icon: Globe2,
    },
  ];

  const processSteps = [
    "Wait for product selection (Customer Value Added initiation).",
    "Capture and validate customer data (Define & Measure stages).",
    "Apply regulatory checks (Control phase alignment).",
    "Validate against Big Data for compliance (Analyze phase).",
    "Trigger creditworthiness evaluation (Improve phase).",
    "Contract generation (Process handoff standardization).",
    "Activate service (Output CTQ tracking).",
    "Perform quality control (Post-implementation validation).",
  ];

  const otherServices = ["Technical Support Services", "Outbound Call Center", "Inbound Call Center", "Lead Generation Services"];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Digital Agent Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Streamline your operations with standardized, AI-driven digital agent workflows validated under Lean Six Sigma principles.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Contact Us
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Digital Agent Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">The Digital Agent Process</h2>
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

      {/* Other Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You May Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {otherServices.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {srv}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “We only use Nimble Acuity for marketing purposes due to the extremely high professionalism and clear communication. Their services positively impact company turnover.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">
          — Marketing Director, Spray Foam Insulation Company, USA
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Transform Your Operations with Nimble Digital Agents
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Standardize service workflows, reduce manual errors, and enhance client experience with AI-driven digital agent solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get a Custom Quote
        </motion.button>
      </section>
    </div>
  );
};

export default DigitalAgentServices;
