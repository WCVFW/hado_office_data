"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Wrench,
  Settings,
  Building2,
  Ruler,
  Layers,
  CheckCircle2,
  PhoneCall,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionDocumentationPage() {
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
          Nimble Construction Documentation Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Nimble construction documentation services for all working drawings,
          BIM or CAD drawings at reasonable rates starting at just $14 an hour
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          The construction documentation holds high importance during the
          construction phase and is greatly important to builders and
          contractors. Contract documentation in construction encompasses
          extensive construction drawings and permit sets that clearly define
          the construction process, making standardization and accuracy critical
          prerequisites.
        </p>
        <p className="text-lg text-gray-700">
          Nimble Auity offers precise construction documentation services
          globally and has created a strong foothold in the domain in the past
          26+ years of its work. Our client portfolio is diverse, and we have
          successfully completed projects for sectors like healthcare,
          residential properties, commercial buildings, and educational
          institutions, amongst many others.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Construction Documentation Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Construction Drawing Set Services",
              icon: FileText,
              desc: "Comprehensive 2D floor plans, elevations, site plans, RCP, electrical layouts, and more.",
            },
            {
              title: "Construction Permit Set Services",
              icon: ClipboardCheck,
              desc: "Includes site and survey plan, floor plan, foundation, framing plan, building sections, elevations, etc.",
            },
            {
              title: "EP/HVAC System Drawings",
              icon: Wrench,
              desc: "Structural, electrical, plumbing, HVAC layouts, schedules, and technical specifications.",
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

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Construction Project Documentation Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Analysis of Client's Needs",
            "Site Inspection",
            "Documentation",
            "Stringent Quality Control",
            "Client Review",
            "Final Project Submission",
          ].map((step, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-lg mb-2">
                  {String(idx + 1).padStart(2, "0")}. {step}
                </h4>
                <p className="text-gray-600">
                  Process step description for {step}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-center">
          {[
            "Land Development Design Services",
            "Underground Utility Mapping Services",
            "Highway Engineering Services",
            "Public Health Engineering Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow rounded-xl">
              <CardContent className="p-6">
                <Layers className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <p className="font-medium">{srv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Reasons to Hire Nimble Auity as Your Construction Documentation
          Service Provider
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Flexible Pricing Plans:</strong> Easy and reasonable fee
            options tailored to client needs.
          </li>
          <li>
            <strong>Data Security:</strong> Strong safeguards to ensure
            confidentiality and data protection.
          </li>
          <li>
            <strong>Global Standards:</strong> High-quality services aligned to
            international and local construction regulations.
          </li>
          <li>
            <strong>Experienced Teams:</strong> 300+ skilled professionals with
            5-6 years avg. experience.
          </li>
          <li>
            <strong>Timely Deliveries:</strong> Efficient project handling to
            meet budgets and timelines.
          </li>
          <li>
            <strong>Future Modification Support:</strong> Ongoing adaptations
            for evolving design needs.
          </li>
        </ul>
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
                "Nimble Provided Land Development Project Services to a California-based Engineering Firm",
              desc: "Our engineers delivered infrastructure engineering services for a land development project.",
            },
            {
              title:
                "Nimble Delivered Highly Accurate Piping and Instrumentation Drawings",
              desc: "We created accurate P&ID drawings at cost-effective rates for a plant engineering project.",
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
          "We have been using the services provided by Nimble Auity within the
          past 2 years. We have outsourced some important engineering work and
          have seen good results, specifically in the transcription of civil and
          structural engineering calculations using Mathcad."
        </p>
        <p className="font-semibold">SVP and Co-Founder - Engineering Resource Company</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Nimble Construction Documentation Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Talk to our experts today about your construction documentation needs
          and get started.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-800">
          <PhoneCall className="mr-2 h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}
