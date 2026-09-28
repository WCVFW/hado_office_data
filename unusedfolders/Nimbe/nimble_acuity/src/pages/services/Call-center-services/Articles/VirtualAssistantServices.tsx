import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  ClipboardCheck,
  Globe,
  DollarSign,
  Shield,
  Laptop,
  BookOpen,
  PhoneCall,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualAssistantServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="relative text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Stay Competitive: 10 Tips to Leverage Virtual Assistant Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Discover how Nimble Auity’s Virtual Assistant services can streamline
          your operations, boost productivity, and keep your business ahead of
          the curve in today’s fast-paced market.
        </motion.p>
      </section>

      {/* Why VA Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700">
          Virtual Assistant Services Decoded
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Businesses today are overwhelmed with non-core tasks that hinder
          growth. By partnering with Nimble Auity Virtual Assistants, companies
          gain scalable, specialized, and remote support, freeing up valuable
          time and enhancing operational efficiency.
        </p>
      </section>

      {/* 10 Tips Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700">
          10 Tips to Accelerate Success
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Define Your Objectives",
              desc: "Set clear goals to guide VA services, whether driving sales, improving efficiency, or boosting customer service.",
              icon: ClipboardCheck,
            },
            {
              title: "Identify Non-Core Functions",
              desc: "Delegate tasks that are peripheral to your main operations, freeing your focus for strategic growth.",
              icon: Laptop,
            },
            {
              title: "Balance Quality with Cost",
              desc: "Choose VAs that provide value without compromising quality, ensuring ROI on outsourced tasks.",
              icon: DollarSign,
            },
            {
              title: "Invest in Training",
              desc: "Equip your VAs with knowledge of your business, products, and culture for effective representation.",
              icon: BookOpen,
            },
            {
              title: "Leverage Specialized Skill Sets",
              desc: "Assign tasks requiring expertise, such as graphic design, coding, or content creation, to skilled VAs.",
              icon: Users,
            },
            {
              title: "Utilize Time Zone Advantages",
              desc: "Hire international VAs to ensure 24/7 operations and maximize global productivity.",
              icon: Calendar,
            },
            {
              title: "Foster Effective Communication",
              desc: "Implement robust channels and feedback loops to maintain alignment and efficiency.",
              icon: PhoneCall,
            },
            {
              title: "Secure Your Data",
              desc: "Ensure VAs adhere to strict security protocols to protect sensitive information.",
              icon: Shield,
            },
            {
              title: "Measure Performance",
              desc: "Track KPIs to monitor VA impact, adjusting strategies for optimal results.",
              icon: ClipboardCheck,
            },
            {
              title: "Scale with Flexibility",
              desc: "Adapt VA support to business growth or seasonal fluctuations without overhead.",
              icon: Globe,
            },
          ].map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="p-4 bg-blue-100 rounded-full">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-blue-700">
            Benefits of Virtual Assistant Services
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-gray-700">
            {[
              { title: "Cost Savings", icon: DollarSign },
              { title: "Expertise", icon: Users },
              { title: "Focus on Core Business", icon: Laptop },
              { title: "24/7 Support", icon: Calendar },
              { title: "Risk Management", icon: Shield },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
                >
                  <Icon className="text-blue-600 mb-2" size={28} />
                  <p className="font-medium text-center">{benefit.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700">
          Services Offered by Nimble Virtual Assistants
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Real Estate Virtual Assistant", desc: "Manage property listings, client coordination, market research, and CRM tasks." },
            { title: "VA for Call Answering", desc: "Screen calls, take messages, provide basic customer service, and escalate important calls." },
            { title: "E-Commerce Virtual Assistant", desc: "Handle inventory, order processing, customer service, product listings, and returns." },
            { title: "Healthcare VA Services", desc: "Support scheduling, records management, billing, insurance verification, and follow-ups." },
            { title: "Small Business VA", desc: "Assist with email, social media, bookkeeping, and customer support." },
            { title: "Cold Calling VA", desc: "Generate leads, pitch products/services, and initiate the sales funnel." },
            { title: "Research VA", desc: "Perform market research, competitor analysis, and customer insights." },
            { title: "Virtual Legal Assistant", desc: "Manage client communication, case prep, document handling, and compliance." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Harness the power of Nimble Auity Virtual Assistant Services and stay
          ahead in today’s competitive market.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl px-8 py-3 text-lg shadow-md">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default VirtualAssistantServices;
