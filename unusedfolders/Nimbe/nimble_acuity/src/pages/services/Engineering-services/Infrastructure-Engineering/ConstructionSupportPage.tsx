"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Wrench,
  Building2,
  Layers,
  CheckCircle2,
  PhoneCall,
  BookOpen,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionSupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Construction Support Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Access unique multidisciplinary construction support services to navigate through complex construction work, starting at just $14/hour
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-gray-700">
        <p className="text-lg mb-4">
          Successful construction starts with a well-thought plan and an efficient provider – someone who knows the entire construction process inside-out and handles all construction-related challenges like budget, weather, resource availability, and more.
        </p>
        <p className="text-lg">
          At Nimble Auity, we are your trusted partner for construction needs. With 26+ years of industrial experience, we provide exceptional construction support services globally while adhering to timelines and budget.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Construction Support Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Building Inspection & Code Compliance",
              icon: Building2,
              desc: "Thorough site inspections to identify construction and compliance gaps with detailed reports.",
            },
            {
              title: "Architect/Engineer Selection",
              icon: Users,
              desc: "Expert selection support for architects, engineers, and interior designers for new developments, renovations, and restorations.",
            },
            {
              title: "Design Review & BIM Services",
              icon: FileText,
              desc: "Advanced BIM modeling to analyze, prototype, and optimize designs for build-out and renovation projects.",
            },
            {
              title: "Cost Estimating",
              icon: ClipboardCheck,
              desc: "Comprehensive construction cost estimation covering materials, labor, testing, overheads, and production costs.",
            },
            {
              title: "Value Engineering",
              icon: Wrench,
              desc: "Optimization of construction processes to eliminate unwanted costs and improve efficiency and quality.",
            },
            {
              title: "Contract & Bid Management",
              icon: Layers,
              desc: "Evaluation, modification, and advisory services for construction contracts, claims, and settlements.",
            },
            {
              title: "Construction Scheduling",
              icon: CheckCircle2,
              desc: "Time-based planning and scheduling using 3D BIM models for better visualization and project management.",
            },
            {
              title: "Post-Construction Support",
              icon: BookOpen,
              desc: "Comprehensive support after project completion including inspections and coordination for repairs.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="shadow-lg hover:shadow-xl transition rounded-2xl"
            >
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefits of Outsourcing Construction Support Services to Nimble
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>Detailed surveys of your sites</li>
          <li>Advanced 3D construction planning with realistic goals</li>
          <li>Accurate pre-construction cost analysis and revenue implementation</li>
          <li>Building load capacity analysis</li>
          <li>Design and quality evaluations</li>
          <li>Optimal human resource allocation</li>
          <li>Legal compliance</li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Construction Support Service Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Team Meet",
            "Strategy Planning",
            "Execution",
            "Delivery",
          ].map((step, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-lg mb-2">
                  {String(idx + 1).padStart(2, "0")}. {step}
                </h4>
                <p className="text-gray-600">
                  Description of the {step} step.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center">
          {[
            "Infrastructure Engineering Services",
            "Public Health Engineering Services",
            "Architectural Services",
            "Mechanical Engineering Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow rounded-xl">
              <CardContent className="p-6">
                <Wrench className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <p className="font-medium">{srv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title:
                "Nimble Provided Land Development Services to a Leading Engineering Firm in the US",
              desc: "Delivered bespoke land development services at affordable rates.",
            },
            {
              title:
                "Nimble Provided Superior 3D Modeling and Photorealistic Renders Project to a Global Engineering Company",
              desc: "Photorealistic 3D modeling solutions delivered cost-effectively.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="shadow-lg rounded-xl">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">{story.title}</h4>
                <p className="text-gray-600">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="text-lg italic text-gray-700 mb-4">
          "We have been using the services provided by Nimble Auity within the past 2 years. We outsourced some important engineering work and have seen excellent results."
        </p>
        <p className="font-semibold">
          SVP and Co-Founder - Engineering Resource Company
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Nimble Construction Support Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get in touch today and receive a customized construction support plan tailored to your requirements.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-800">
          <PhoneCall className="mr-2 h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}
