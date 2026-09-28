import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Compass, Target, Users, TrendingUp, Layers } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function PerceptualMappingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble <span className="text-blue-600">Perceptual Mapping Services</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Visualize how customers perceive your brand, products, and competitors. 
          Our expert perceptual mapping services help you make data-driven decisions 
          for strategic market positioning.
        </motion.p>
      </section>

      {/* Services We Offer */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Perceptual Mapping Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Compass, title: "Brand Positioning", desc: "Understand how your brand is perceived relative to competitors." },
            { icon: Users, title: "Competitor Analysis", desc: "Gain insights into competitor strengths, weaknesses, and strategies." },
            { icon: Target, title: "Market Segmentation", desc: "Identify customer segments and their ideal preferences." },
            { icon: Layers, title: "Concept Evaluation", desc: "Test new product or brand concepts before market launch." },
            { icon: TrendingUp, title: "Trend Analysis", desc: "Stay ahead of market trends and changing consumer perceptions." },
            { icon: BarChart3, title: "Product Positioning", desc: "Spot gaps in the market and align your product effectively." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="shadow-md rounded-2xl hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Role in Brand Positioning */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Role of Perceptual Mapping in Brand Positioning
          </h2>
          <p className="text-gray-600 mb-6">
            Perceptual maps illustrate how consumers view your products compared to competitors. 
            They uncover market gaps, help refine positioning strategies, and enable smarter 
            decision-making for long-term brand success.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Process to Create Customized Perceptual Maps
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Collect consumer data through rating scales, surveys, and attributes.",
            "Apply statistical models like multi-dimensional scaling.",
            "Generate clear visual maps for strategic insights.",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white shadow rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Step {idx + 1}</h3>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Perceptual Mapping Services to Us
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Let Nimble Acuity be your partner in brand positioning research. 
          With our expertise and advanced statistical tools, we deliver 
          accurate perceptual maps tailored to your business needs.
        </p>
       
      </section>
    </div>
  );
}
