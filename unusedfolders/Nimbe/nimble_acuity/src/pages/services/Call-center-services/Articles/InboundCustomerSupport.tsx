import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const InboundCustomerSupport: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold"
        >
          Nimble Inbound Customer Support Services
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Outsourcing inbound customer services to <strong>Nimble Auity</strong> is a smart choice. 
          With highly educated professionals, advanced infrastructure, and excellent telecom 
          connectivity, Nimble delivers seamless customer support solutions globally.
        </p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100 rounded-full shadow-md">
          Get Started
        </Button>
      </section>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-2xl font-bold mb-4">Why Nimble Inbound Customer Services?</h2>
          <p className="text-gray-600 leading-relaxed">
            Many organizations face challenges in delivering excellent customer support due to high costs, 
            attrition, and limited infrastructure. Nimble offers advantages in order taking, surveys, 
            registrations, direct marketing, web support, and technical support.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Advantages of Nimble Inbound Services</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Large English-speaking workforce & multilingual support</li>
                <li>Fastest growing pool of technical manpower</li>
                <li>Reliable, secure, and globally recognized standards</li>
                <li>State-of-the-art infrastructure & telecom networks</li>
                <li>Cost benefits & pro-active government policies</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Accordion Section (FAQ Style for Advantages) */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Inbound Call Center Services by Nimble</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Phone Answering & Virtual Receptionist</AccordionTrigger>
            <AccordionContent>
              Nimble provides round-the-clock phone answering and receptionist services to ensure no customer query is missed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Order Taking & Claims Processing</AccordionTrigger>
            <AccordionContent>
              Efficient order taking and claims processing with dedicated professionals and intelligent scripting programs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>IVR & Up-Selling/Cross-Selling</AccordionTrigger>
            <AccordionContent>
              Leverage interactive voice response systems and trained representatives for better sales conversion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Infrastructure & Cost Benefits */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Infrastructure Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Fast dedicated internet connectivity</li>
              <li>Advanced CTI & IVR systems</li>
              <li>State-of-the-art call center technology</li>
              <li>24x7 operations with redundant power & telecom</li>
              <li>Government-backed pro-active policies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Cost Benefits</h3>
            <p className="text-gray-600">
              Nimble delivers inbound customer support at competitive global costs, 
              enabling up to <strong>50-60% savings</strong> compared to in-house support operations.
            </p>
          </div>
        </div>
      </section>

      {/* Staffing Calculator */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Call Center Staffing Calculator</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <form className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Project Type</label>
                <select className="w-full border rounded p-2 mt-1">
                  <option>Inbound</option>
                  <option>Outbound - One Time</option>
                  <option>Outbound - Ongoing</option>
                  <option>Email</option>
                  <option>Chat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Service Type</label>
                <select className="w-full border rounded p-2 mt-1">
                  <option>Order Taking Services</option>
                  <option>Claims Processing</option>
                  <option>Customer Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Target Country</label>
                <select className="w-full border rounded p-2 mt-1">
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Shift Coverage</label>
                <select className="w-full border rounded p-2 mt-1">
                  <option>24/7 Coverage</option>
                  <option>Business Hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Average Call Count Per Week</label>
                <input type="number" className="w-full border rounded p-2 mt-1" placeholder="Enter number of calls" />
              </div>
              <div>
                <label className="block text-sm font-medium">Average Handling Time (Min)</label>
                <input type="number" className="w-full border rounded p-2 mt-1" placeholder="Enter minutes" />
              </div>
            </form>
            <Button className="mt-6 w-full">Check Result</Button>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center py-12 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource Inbound Support with Nimble Auity</h2>
        <p className="max-w-2xl mx-auto">
          Ready to elevate your customer support? Fill in the inquiry form and our Client Engagement 
          Team will reach out within 24 hours.
        </p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200 shadow-md rounded-full">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default InboundCustomerSupport;
