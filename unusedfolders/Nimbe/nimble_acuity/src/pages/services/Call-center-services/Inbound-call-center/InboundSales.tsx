import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Monitor,
  Activity,
  CheckCircle2,
  Star,
  Smartphone,
  Mail,
  ShoppingCart,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const InboundSales: React.FC = () => {
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
          Outsource Inbound Sales Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          No sales tactics. No irrelevant offers. Win deals by prioritizing
          customer challenges, goals, and preferences with Nimble Acuity's
          inbound acquisition techniques.
        </p>
      </section>

      {/* Why Inbound Sales */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700">
            Why Prioritize Inbound Sales?
          </h2>
          <p className="text-gray-600 mb-4">
            Businesses that nurture incoming prospects make 50% more sales at
            33% less cost. Nimble Acuity ensures every interaction meets high
            standards, converting prospects into loyal customers.
          </p>
          <ul className="space-y-3">
            {[
              "Adaptive selling with AI-driven insights",
              "Real-time prospect behavior analysis",
              "CRM integration for unified customer management",
              "Agile, responsive, and high-quality service",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            Client Success Stories
          </h3>
          <p className="text-gray-600 mb-2">
            US-based Restaurant Order Management Firm overcame pandemic surges
            using Nimble Acuity’s inbound sales support.
          </p>
          <p className="text-gray-600">
            IT Services Company efficiently resolved incoming technical queries
            with Nimble inbound call assistance.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Offshore Inbound Sales Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Consumer Response Services",
              icon: Users,
              desc: "Ticketing, analytics, and omnichannel support to reduce NVA activities and enhance CX.",
            },
            {
              title: "Enquiry Handling Services",
              icon: ClipboardList,
              desc: "Real-time tracking, knowledge base integration, and SOP-driven efficient processing.",
            },
            {
              title: "Identifying Buyer Persona",
              icon: Monitor,
              desc: "Demographics and behavior analysis using CVA-BVA-NVA mapping.",
            },
            {
              title: "Recognizing Prospective Buyers",
              icon: Activity,
              desc: "Predictive analytics, prospect scoring, and engagement tracking.",
            },
            {
              title: "Defining the Buyer Journey",
              icon: ShoppingCart,
              desc: "Map journeys, optimize touchpoints, and enhance sales funnel conversion.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
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

      {/* Approach Steps */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Our Inbound Sales Approach
        </h2>
        <div className="space-y-12">
          {[
            {
              step: "01. Market Cultivation",
              desc: "VoC-driven acquisition model structures activities to match high-CVA customer needs.",
            },
            {
              step: "02. Prospect Nurturing",
              desc: "Automated emails and personalized content engage prospects for ongoing interaction.",
            },
            {
              step: "03. Focusing on Buying Prospects",
              desc: "CRM tools analyze and prioritize high-potential prospects for conversion.",
            },
            {
              step: "04. CRM Integration",
              desc: "Unified data management maintains comprehensive customer information.",
            },
            {
              step: "05. Sales Qualification",
              desc: "CVA scoring and BANT models filter statistically viable prospects.",
            },
            {
              step: "06. Conversion Optimization",
              desc: "DMAIC-defined engagement points enhance conversion rates.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="bg-indigo-50 rounded-xl p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {item.step}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools & Sectors */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Tools & Sectors
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              Tools We Leverage
            </h3>
            <p>HubSpot Sales Hub, Zoho CRM, Salesforce, Pipedrive, Freshsales, Insightly</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">Sectors We Cater To</h3>
            <p>
              Retail, Healthcare, Technology, Real Estate, Hospitality, Financial Services, Education, E-commerce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Predictive Analytics", desc: "Forecast buying behaviors and trends to create proactive sales strategies." },
            { title: "Automation-powered Nurturing", desc: "Automate workflows to keep prospects engaged and moving through the funnel." },
            { title: "Real-time Performance Tracking", desc: "Dashboards connected to CTQs for continuous visibility and quick adjustments." },
            { title: "Expert Sales Qualification", desc: "Structured frameworks like CHAMP ensure high-quality leads are prioritized." },
            { title: "Exceptional Service Standards", desc: "ISO-certified, Lean Six Sigma SOPs guarantee repeatable and audit-ready operations." },
            { title: "Customizable Pricing Plans", desc: "Flexible pricing tailored to your business scale and requirements." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="bg-indigo-50 rounded-xl p-6 shadow"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Maximize Inbound Sales with Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Deliver personalized customer support that boosts conversions and maximizes your inbound sales.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InboundSales;
