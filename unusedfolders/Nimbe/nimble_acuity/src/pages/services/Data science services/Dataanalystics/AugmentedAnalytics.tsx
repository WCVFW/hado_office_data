import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Database, LineChart, Search } from "lucide-react";
import DSMainMenu from "../mainmenu";

const AugmentedAnalytics: React.FC = () => {
  const services = [
    {
      title: "Data Strategy",
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      desc: "Revolutionize your business and boost growth with domain-specific data strategies for valuable insights.",
    },
    {
      title: "Data Integration",
      icon: <Database className="w-8 h-8 text-green-600" />,
      desc: "Seamlessly integrate siloed data sources to ensure unified access across your organization.",
    },
    {
      title: "Data Cognition",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      desc: "Leverage AI, ML, and Power BI to transform massive datasets into lightweight, actionable models.",
    },
    {
      title: "Cognitive Analysis",
      icon: <Search className="w-8 h-8 text-orange-600" />,
      desc: "Automate insight generation with cognitive solutions that improve productivity and customer engagement.",
    },
  ];

  const benefits = [
    "Affordable Rates for all business sizes",
    "Qualified Professionals and Data Scientists",
    "ISO-certified Data Security",
    "High Accuracy and Optimized Strategies",
    "Fast Turnaround Time",
    "24/7 Client Support",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Augmented Analytics Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Operationalize insights from your data to discover patterns and identify trends with our analytics solutions!
        </p>
        <div className="mt-6">
          <Button size="lg">Contact Us</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Augmented Analytics Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" as const }}
              >
                <Card className="shadow-md rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Nimble Acuity?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" as const }}
                className="bg-gray-100 p-4 rounded-xl shadow-sm"
              >
                ✅ {b}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="shadow-lg p-6">
              <CardContent>
                <h3 className="font-semibold text-xl mb-2">
                  Healthcare Provider – Chart Extraction
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  A leading healthcare service provider Nimbled chart extraction services using RPA. We delivered cost-effective and accurate solutions.
                </p>
                <Button variant="link">Read Case Study</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg p-6">
              <CardContent>
                <h3 className="font-semibold text-xl mb-2">
                  African Automotive Firm – Digital Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  We provided digital transformation solutions powered by RPA, ensuring efficiency and scalability for a major automotive firm.
                </p>
                <Button variant="link">Read Case Study</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-3xl font-semibold mb-6"
        >
          Quick and Accurate Augmented Analytics Support
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Ready to operationalize large volumes of your business data? Connect with us now to find out how we empower you with deeper intelligence.
        </p>
        <Button size="lg">Get in Touch</Button>
      </section>
    </div>
  );
};

export default AugmentedAnalytics;
