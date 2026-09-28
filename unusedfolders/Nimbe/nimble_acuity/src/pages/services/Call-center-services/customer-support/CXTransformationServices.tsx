import React from "react";
import { motion } from "framer-motion";
import { Layout, Users, Database, MessageCircle } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CXTransformationServices: React.FC = () => {
  const services = [
    {
      title: "Customer Experience Design",
      desc: "Innovative design solutions that transform the experience of your customers, focusing on personalized CX strategies that work.",
      icon: Layout,
    },
    {
      title: "CRM Services",
      desc: "Omnichannel CRM frameworks aligned with CTQ-defined interaction models, enabling personalized engagement at scale.",
      icon: Users,
    },
    {
      title: "Customer Data Platform",
      desc: "Lean-information-flow-based CDPs centralize data for faster responses and actionable insights reinforcing CX KPIs.",
      icon: Database,
    },
    {
      title: "Conversational AI",
      desc: "AI, NLP, and sentiment analysis-powered solutions that ensure your customers feel heard and engaged effectively.",
      icon: MessageCircle,
    },
  ];

  const additionalServices = [
    "Virtual Assistant Services",
    "Outbound Call Center Services",
    "Telemarketing Services",
    "Customer Support Services",
  ];

  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-20 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Acuity Customer Experience (CX) Transformation Services
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Transform customer journeys through VoC-to-CTQ aligned omnichannel engagement. Reduce NVA friction and increase retention with our innovative CX solutions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Schedule a Consultation
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our CX Transformation Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <srv.icon className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {additionalServices.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {srv}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Acuity for CX Transformation?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Affordable Prices: Flexible, customized solutions to boost CX transformation at reasonable rates.</li>
          <li>Latest Technology: AI-powered tools and advanced software for superior CX strategy execution.</li>
          <li>Complete Data Security: Poka-Yoke controls and ISO-backed protocols to prevent data risks.</li>
          <li>Certified Professionals: Experienced CX experts ensure your transformation project succeeds.</li>
          <li>24/7 Help & Support: Round-the-clock service for immediate query resolution and assistance.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li>Nimble Acuity Provided Professional Appointment Setting Services to a US-based Firm</li>
          <li>Nimble Acuity Provided Robust and Reliable Telemarketing Services to an Insurance Provider</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
        <motion.blockquote
          className="max-w-3xl mx-auto italic text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          “We highly recommend the Nimble Acuity team to anyone who has the need for quality results to help grow their business.”
        </motion.blockquote>
        <p className="mt-4 font-semibold">— Office Manager, International Commercial Vehicles & Marine Equipment Company, Texas</p>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Drive Business Value with Nimble Acuity CX Transformation
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Convert friction points into measurable improvements with our CTQ-aligned, Poka-Yoke–validated customer experience solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Start Your CX Transformation
        </motion.button>
      </section>
    </div>
  );
};

export default CXTransformationServices;
