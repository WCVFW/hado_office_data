import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Globe2, Users, Calendar, Mail, Phone, CheckCircle } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ConsumerProductSupport: React.FC = () => {
  const services = [
    {
      title: "Bilingual Chat Services",
      desc: "We have bilingual experts managing customers in English and native European languages, providing error-free customer interactions with high first-contact resolution rates.",
      icon: MessageSquare,
    },
    {
      title: "Multi-lingual Chat Support",
      desc: "CVA-driven multilingual chat support increases conversion, reduces bounce rates, streamlines order processing, and improves real-time assistance.",
      icon: Globe2,
    },
    {
      title: "Pre-sales Services",
      desc: "Our pre-sales support assists sales & marketing teams with lead qualification, product research, proposals, and CTQ-compliant interactions to improve conversion efficiency.",
      icon: Users,
    },
    {
      title: "Soft Collection Services",
      desc: "Respectful debt recovery through structured escalation, telecalling, emails, chats, and guarantor communication while maintaining CVA relationships.",
      icon: Phone,
    },
    {
      title: "Conference & Seminar Registration Services",
      desc: "End-to-end conference and seminar registration services with web-based systems, CTQ-aligned processes, and SIPOC-mapped sequences.",
      icon: Calendar,
    },
    {
      title: "Direct Response & Email Response Services",
      desc: "Targeted campaigns with DMAIC-defined triggers, prompt email responses, and VoC-aligned scripts to boost engagement and conversions.",
      icon: Mail,
    },
  ];

  const processSteps = [
    "Upload project requirements including objectives, agent count, skills, scripts, and reporting schedule.",
    "Select the hiring model: per-hour, per-head, project-based, self-service, or hybrid.",
    "Assign a team with required skill sets and align them with business objectives.",
    "Kick-start project with live monitoring, quality analysis, and Poka-Yoke enabled error-proofing.",
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Consumer Product Support
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          We deliver CTQ-aligned, empathetic customer experiences that make your customers feel valued across multiple channels.
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Consumer Product Support Services We Offer
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
              <srv.icon className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Consumer Product Support Process</h2>
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
          {["Technical Support Services", "Remote IT Support Services", "Email Support Services", "Chat Support Services"].map(
            (srv, idx) => (
              <motion.div
                key={idx}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {srv}
              </motion.div>
            )
          )}
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
          “I'm impressed! :) You ladies and gentlemen are doing fantastic work. Thank you so much!”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Reservations Supervisor, Travel Website Company, CA</p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Elevate Your Consumer Product Support
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Focus on business priorities while Nimble Acuity handles your customer support with CTQ-aligned workflows.
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

export default ConsumerProductSupport;
