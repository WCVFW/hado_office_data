"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function TrendAnalysisServices() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nimble Trend Analysis Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto mb-8"
          >
            Identify emerging trends, evaluate financial shifts, and make
            smarter business decisions with Nimble Acuity’s expert services.
          </motion.p>
          <Button size="lg" className="px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <blockquote className="text-xl md:text-2xl font-medium italic text-center border-l-4 border-gray-900 pl-6">
          “We transform hindsight into foresight — enabling businesses to
          maximize profits, predict customer behavior, and adapt to changing
          environments.”
        </blockquote>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Trend Analysis Services
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Industry Profile Analysis",
            "Customer-Buyer Behavior Analysis",
            "Industry Forecast & SWOT Analysis",
            "Market & Business Challenge Analysis",
            "Customer Churn & Segmentation Studies",
            "Fraud Detection & Financial Trend Analysis",
            "Competitive Benchmarking & Landscape Analysis",
            "Direct & Interactive Marketing Analysis",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <p className="text-lg">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Outsourcing to Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Make faster, better-informed decisions",
            "Reduce operational costs while improving service quality",
            "Identify changes in financial positioning",
            "Analyze shifts in customer needs and perceptions",
            "Track price changes and cost drivers",
            "Evaluate competition, substitutes, and supplier dynamics",
            "Understand emerging business models and best practices",
            "Assess long-term industry and global cycles",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-white shadow-md rounded-xl p-5"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity?
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "20+ years of KPO and research expertise",
            "Support for strategic investments, M&A, and partnerships",
            "Scalable databases for trend detection",
            "Strong security and compliance frameworks",
            "Flexible pricing tailored to business needs",
            "Expertise in advanced statistical tools and survey methods",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                Advantage {idx + 1}
              </h3>
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-10 italic text-gray-700">
          Case Study: Learn how Nimble Acuity provided trend analysis services to a top
          Canadian golf technology firm.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Acuity for Smarter Business Decisions
        </h2>
        <p className="max-w-3xl mx-auto mb-10">
          With expert analysts, advanced statistical tools, and global delivery
          centers, we deliver insights that shape the future of your business.
        </p>
        <Button size="lg" className="px-10 py-6 text-lg rounded-full">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
