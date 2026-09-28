import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Timer, Users, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";
import DSMainMenu from "../mainmenu";

const ConcurrentAuditServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Concurrent Audit Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get end-to-end examination of your financial transactions to ensure
          accuracy, authenticity, and compliance with our enterprise-ready
          concurrent audit services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Concurrent Audit Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Internal Controls",
              desc: "Reviewing internal controls to ensure operational efficiency and integrity of financial data.",
            },
            {
              title: "Finance and Accounts Controls",
              desc: "Verifying cash flows, bank reconciliations, and payments for accurate financial reporting.",
            },
            {
              title: "Risk Mitigation",
              desc: "Identifying and managing risks across credit, revenue, deposits, and compliance.",
            },
            {
              title: "Identifying Leakages",
              desc: "Detecting operational inefficiencies and income leakages to boost profitability.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Ensuring compliance with policies, laws, and regulations while identifying frauds.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Comprehensive Concurrent Audit Process
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-6">
          {[
            "Discuss Requirements",
            "Audit Planning",
            "Audit Execution",
            "Audit Report",
            "Follow Up",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 flex-1 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold">
                {idx + 1}
              </div>
              <h3 className="font-semibold text-lg">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us As Your Concurrent Audit Company
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "ISMS Compliance" },
            { icon: Users, title: "Expert Consultants" },
            { icon: Zap, title: "Short Turnaround Times" },
            { icon: FileText, title: "High-quality Services" },
            { icon: Timer, title: "State-of-the-art Infrastructure" },
            { icon: CheckCircle, title: "Affordable Pricing" },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="flex items-center space-x-4 p-6">
                <item.icon className="w-8 h-8 text-blue-600" />
                <span className="font-medium text-lg">{item.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Concurrent Audit Services To Us
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Ensure comprehensive auditing, seamless controls, and strict
          compliance with international standards. Secure your business with our
          expert concurrent audit solutions today.
        </p>
        <Button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100">
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default ConcurrentAuditServices;
