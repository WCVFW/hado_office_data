"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CCmainmenu from "../CCmainmenu";

export default function CallCenterFAQ() {
  const [calls, setCalls] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const calculateStaffing = () => {
    if (calls > 0 && minutes > 0) {
      const totalHours = (calls * minutes) / 60;
      const agentsNeeded = Math.ceil(totalHours / 40); // assume 40hrs per agent
      setResult(`Estimated Agents Needed: ${agentsNeeded}`);
    } else {
      setResult("Please enter valid inputs.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          FAQs on Nimble Call Center Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get answers to all the questions you may have in mind regarding Nimble call center
          services in India. Read through our comprehensive list of FAQs asked by our clients.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "What are the service hours of your call center?",
              a: "Our call center services are offered 365 X 24 X 7.",
            },
            {
              q: "How many languages do you support?",
              a: "We have multilingual staff that speaks French, Spanish, German, English, Dutch, and more.",
            },
            {
              q: "What kind of clients do you work for?",
              a: "We work with small, medium, and large companies, including Fortune 500s.",
            },
            {
              q: "How long have you been offering call center solutions?",
              a: "Nimble Auity has been in business since 2002, serving global customers.",
            },
            {
              q: "Is there any training process underlined for your contact center agents?",
              a: "Yes, agents are pre-trained and receive refresher training before new assignments.",
            },
            {
              q: "Do you support any particular Live Chat software?",
              a: "We support all types of chat software and train our agents accordingly.",
            },
            {
              q: "How do you take care of lost calls when the phone line is busy?",
              a: "Calls are transferred to voicemail and our agents respond promptly.",
            },
            {
              q: "I have never outsourced, but want to give it a try. I am apprehensive though.",
              a: "We encourage discussions with our reps to address your concerns before partnering.",
            },
            {
              q: "Is my data secure if I outsource?",
              a: "Yes. We follow strict data security measures, NDAs, and penalties for breaches.",
            },
            {
              q: "I want to do business with you, how can I start?",
              a: "Fill out the sign-up form or talk to a representative. After a customized contract and training, we start operations.",
            },
            {
              q: "Can agents multitask in free time?",
              a: "No. Multitasking reduces quality; agents focus solely on your calls.",
            },
            {
              q: "Is there a minimum duration to do business or contract?",
              a: "No minimum contract. You can terminate with 30 days’ notice.",
            },
            {
              q: "What are your payment terms and conditions?",
              a: "Work starts only after advance payment. Delays may suspend service.",
            },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Huge Cost Savings",
            "Increased Profits",
            "Need to Hire Less Resources",
            "Decreased Administrative Hassles",
            "Highly Skilled Personnel at Low Cost",
            "Faster TAT and High-Quality Results",
          ].map((benefit, i) => (
            <Card key={i} className="shadow hover:shadow-xl transition">
              <CardContent className="p-6 text-center font-semibold">{benefit}</CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Contact Form */}
      <section className="bg-indigo-600 py-12 px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Get Started with Nimble Auity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Name*" />
            <Input type="email" placeholder="Email*" />
            <Input type="tel" placeholder="Phone*" />
            <Textarea placeholder="Enter your requirements*" />
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nimble Auity. All rights reserved.</p>
      </footer>
    </div>
  );
}
