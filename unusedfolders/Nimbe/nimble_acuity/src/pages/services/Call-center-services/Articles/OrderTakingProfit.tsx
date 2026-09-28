"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

export default function OrderTakingProfit() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center px-6 py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          How Can Nimble Order Taking Increase Profit Margins?
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Discover how outsourcing order-taking with <span className="font-semibold">Nimble Auity</span> drives
          efficiency, customer satisfaction, and profitability.
        </p>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Strategic Outsourcing</h2>
            <p>
              Nimble order-taking services provide a competitive edge by leveraging specialized skills and
              technologies, letting your business focus on innovation and growth.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Cost-Benefit Equation</h2>
            <p>
              Reduce infrastructure and labor costs while boosting ROI. Deloitte notes that{" "}
              <strong>59% of companies outsource</strong> primarily to cut costs.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Continuous Availability</h2>
            <p>
              24/7 global support ensures customer satisfaction and retention. Forrester reports{" "}
              <strong>10-15% higher retention</strong> with continuous support.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Customer Experience</h2>
            <p>
              Skilled Nimble agents personalize interactions with advanced CRM tools, boosting loyalty and
              long-term profitability.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Accordion for Detailed Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">In-Depth Insights</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="scaling">
            <AccordionTrigger>Scaling Operations with Agility</AccordionTrigger>
            <AccordionContent>
              Nimble Auity ensures businesses scale up or down easily, especially during seasonal peaks or
              promotions, without staffing hassles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="technology">
            <AccordionTrigger>Harnessing Cutting-Edge Technology</AccordionTrigger>
            <AccordionContent>
              AI, automation, and CRM tools cut processing times by up to 50% (McKinsey) while enabling
              real-time insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="risk">
            <AccordionTrigger>Mitigating Business Risks</AccordionTrigger>
            <AccordionContent>
              Robust disaster recovery, compliance with industry standards, and strict data security protect
              your business from risks.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Profit Margins?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with <span className="font-semibold">Nimble Auity</span> today to transform your order-taking
          process into a profit-driving strategy.
        </p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
