import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardList,
  FileText,
  Trash2,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  PhoneCall,
  Globe,
  Users,
  Layers,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const ProductRecallManagement: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Auity - Product Recall Management Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          We are currently working with India&apos;s Largest e-commerce
          conglomerate to onboard <strong>4000+ sellers</strong> each month.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Does your present product recall procedure lack defined workflows and
          is it not in line with compliance-critical (Critical-to-Quality) CTQs?
          If yes, then you need product recall management and support services.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Nimble Auity</strong> is one of the leading providers of
          product recall management services in India. We understand that
          product recalls can be devastating for a brand and can plummet its
          reputation if the recall ecosystem is not robust. At Nimble, we use
          (Voice of Customer) VoC-to-CTQ mapping technique, based on
          international risk governance standards, to determine recall
          priorities. With more than 27 years of operational experience, we have
          verified our recall response frameworks. We leverage product recall
          management best practices to help you streamline your recall process.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Product Recall Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ClipboardList className="w-8 h-8 text-indigo-600" />,
              title: "Product Testing",
              desc: "Our experts initiate 'mock recalls' to test and prepare the recall plan, estimating product quantity vs time.",
            },
            {
              icon: <AlertTriangle className="w-8 h-8 text-indigo-600" />,
              title: "Risk Assessment",
              desc: "We identify impacts on system, environment, and business to minimize the probability of major recalls.",
            },
            {
              icon: <Trash2 className="w-8 h-8 text-indigo-600" />,
              title: "Product Destruction/Disposal",
              desc: "We ensure complete compliance and traceable value recovery with Poka-Yoke integrated disposal operations.",
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
              title: "Reporting & Cost Analysis",
              desc: "We estimate the financial impact of recalls, providing clear quantification and measurement.",
            },
            {
              icon: <Layers className="w-8 h-8 text-indigo-600" />,
              title: "Advanced Analytics",
              desc: "We help plan future recall management strategies with predictive risk identification and cost mitigation.",
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

      {/* Process Timeline */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Product Recall Management Process
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {[
            "Preparation/Planning - Initiate recall and test plan according to your industry.",
            "Consignee Identification - Identify the consignee who has the affected products.",
            "Notification/Response Management - Notify customers on time using multi-channel communication.",
            "Process Documentation - Use the latest tools to document recalls as per compliance.",
            "Process, Remedy & Disposal - Assist in removing, processing, and destructing the product.",
            "Recall Retrieval - Pull products from all inventories leveraging our vast network.",
          ].map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Product Recall Management Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Flexible Pricing Options tailored to budget, size, and geography.",
            "100% Information Security - ISO/IEC 27001:2022 certified operations.",
            "State-of-the-art Infrastructure with world-class automation tools.",
            "High Quality with complete 360° recall management support.",
            "Multilingual Language Support to cater to diverse markets.",
            "24/7 Availability with SOP-driven efficiency.",
            "Experienced Team with 200+ representatives & 100+ man-years cumulative expertise.",
            "Ease of Scalability to expand or reduce services as per demand.",
          ].map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Nimble Product Recall Management Services
        </h2>
        <p className="mb-8 max-w-3xl mx-auto text-lg">
          Nimble, a pioneer in recall management, ensures compliance, efficiency,
          and customer trust. We also provide grievance handling and
          communication services for seamless customer experience.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default ProductRecallManagement;
