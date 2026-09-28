"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CCmainmenu from "../CCmainmenu";

export default function InboundCustomerFAQs() {
  const [calls, setCalls] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const calculateStaffing = () => {
    if (calls > 0 && minutes > 0) {
      const totalHours = (calls * minutes) / 60;
      const agentsNeeded = Math.ceil(totalHours / 40); // assuming 40hrs per agent
      setResult(`Estimated Agents Needed: ${agentsNeeded}`);
    } else {
      setResult("Please enter valid inputs.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          Inbound Customer Service: Best Practices
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Auity provides world-class inbound customer services with advanced technology,
          multilingual support, and highly qualified agents available 24/7/365.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs on Inbound Customer Services</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger>How committed are call center operations in India?</AccordionTrigger>
            <AccordionContent>
              Call centers in India can offer dedicated customer support programs, available 24/7/365.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What kinds of people are hired as call center professionals?</AccordionTrigger>
            <AccordionContent>
              College-educated professionals with strong training, teamwork, and innovation-driven culture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Do call center employees undergo training?</AccordionTrigger>
            <AccordionContent>
              Yes, with alliances with global universities and partners in the USA & Australia for continuous development.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger>Do Indian inbound call centers have efficient Technology?</AccordionTrigger>
            <AccordionContent>
              Equipped with AVAYA, CISCO, COMPAQ, redundancy, failover, and 99.99% uptime reliability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>


      {/* Contact Form */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Get a Free Quote in 24 Hours</h2>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Contact Nimble Auity</CardTitle>
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

      {/* Case Studies */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Nimble delivered Appointment Setting Services for Franchisee Consultant",
            "CCTV Surveillance Services for Recycling Company in USA",
            "Virtual Assistant Services for Autism Therapy Provider",
            "Effective Lead Generation Services with Tremendous Business Impact",
            "Customer Support Solutions for Health Supplement Provider",
          ].map((study, i) => (
            <Card key={i} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-4">
                <h3 className="font-semibold">{study}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Nimble Auity. All rights reserved.</p>
      </footer>
    </div>
  );
}
