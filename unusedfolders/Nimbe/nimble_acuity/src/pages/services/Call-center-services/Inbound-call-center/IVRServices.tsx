import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Headphones,
  Workflow,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const IVRServices: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Auity - Interactive Voice Response (IVR) Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          We are currently working with India&apos;s Largest e-commerce
          conglomerate to onboard <strong>4000+ sellers</strong> each month.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          As your company grows, you will see an increase in the number of
          interactions that highlight the Voice of the Customer (VoC), such as
          support requests for direct purchases through mobile devices and
          inquiries about your products/services. Rising call volumes often
          overwhelm in-house teams by impacting operational KPIs, decreasing
          Customer Value Added (CVA) steps and inefficient service delivery.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          We help you address these with our{" "}
          <strong>Interactive Voice Response (IVR) Services</strong>, which are
          designed to help you maintain consistent service quality and increase
          client retention. This can inadvertently affect your customer
          relationships and your organization&apos;s bottom-line. Also, you will
          have to bear the costs of staff salaries and investments on
          infrastructure for this purpose.
        </p>
      </section>

      {/* Why Use IVR */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use IVR Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <PhoneCall className="w-8 h-8 text-indigo-600" />,
              title: "Customer Self-Service",
              desc: "IVR is an automated way of letting callers interact with your business through intuitive workflows.",
            },
            {
              icon: <Workflow className="w-8 h-8 text-indigo-600" />,
              title: "24/7 Availability",
              desc: "Minimize Non Value Added (NVA) steps and deliver round-the-clock support without incremental staffing.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
              title: "Cost Efficiency",
              desc: "Significantly reduce customer support costs while boosting service quality and loyalty.",
            },
            {
              icon: <Users className="w-8 h-8 text-indigo-600" />,
              title: "Proven Success",
              desc: "Nimble Auity has been delivering IVR services worldwide with higher success rates than other vendors.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Nimble IVR */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Use Nimble Auity&apos;s IVR Services?
        </h2>
        <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            In this age of economic ups and downs, it is important that your
            inbound call center is accessible to your customers round-the-clock.
          </p>
          <p>
            We help you deploy IVR services to ensure consistent and
            round-the-clock business support for your customers. Our team maps
            the Voice of the Customer (VoC) to Critical to Quality (CTQ)
            processes to translate your customer needs into measurable
            performance metrics.
          </p>
          <p>
            Our IVR services can help you solve customer problems or assist them
            even if your offices are closed. Customers can easily get
            information and access to your products or services at the touch of
            a few buttons on their phones.
          </p>
          <p>
            With us, you can create IVR workflows that help you conduct VoC
            surveys, identify root causes of customer churn, and discover
            improvement opportunities.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Should You Invest in IVR with Nimble?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Cost reduction of almost 50% compared to traditional services.",
            "Eliminate costs of staff salaries, telephony equipment, and overheads.",
            "Gain access to other services like call center and telemarketing in conjunction with IVR.",
            "Obtain competitive advantage through faster customer service.",
            "Focus on strategic issues like customer acquisition and business growth.",
            "Frees you of management and administrative risks in running full support operations.",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <p>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Nimble IVR Services – Smarter, Faster, Better
        </h2>
        <p className="mb-8 max-w-3xl mx-auto text-lg">
          Contact us today to implement cost-effective, scalable, and efficient
          IVR solutions that elevate customer satisfaction and streamline your
          operations.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default IVRServices;
