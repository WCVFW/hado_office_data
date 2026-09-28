"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  PieChart,
  Circle,
  Layers,
  Grid,
  CheckCircle2,
  BookOpen,
  Users,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ThematicMappingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Thematic Mapping Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Superior quality, error-free thematic mapping services starting at just $14/hour
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-gray-700">
        <p className="text-lg mb-4">
          When assessing geographic data, thematic mapping simplifies complex information for easy understanding. Nimble Auity provides precise, automated, and refined thematic mapping services using GIS technology and spatial analysis for analytical assessments or visual reporting.
        </p>
        <p className="text-lg">
          With 15+ years of experience, we deliver reliable and accurate maps that highlight specific attributes, patterns, and locations for better decision-making.
        </p>
      </section>

      {/* Thematic Mapping Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Thematic Mapping Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Ranges",
              icon: Grid,
              desc: "Split data into ranges with specified colors. Options include equal ranges, equal count, quantiles, and bar graphs.",
            },
            {
              title: "Pie Charts",
              icon: PieChart,
              desc: "Create pie chart themes representing each field's share for comparative analysis.",
            },
            {
              title: "Graduated Theme",
              icon: Circle,
              desc: "Use varying symbol sizes to represent different values for magnitude visualization.",
            },
            {
              title: "Dot Density",
              icon: MapPin,
              desc: "Represent population density using dots; more dots indicate higher density.",
            },
            {
              title: "Colored Points",
              icon: MapPin,
              desc: "Assign specific colors to values for magnitude representation or numerical progression.",
            },
            {
              title: "Colored Lines",
              icon: Layers,
              desc: "Display travel routes with distinct colors to avoid confusion (e.g., metro routes).",
            },
            {
              title: "Colored Areas",
              icon: Layers,
              desc: "Highlight chunks of areas with different colors for visualizing low/high values.",
            },
            {
              title: "Lines of Different Thickness",
              icon: Layers,
              desc: "Represent value ranges using line thickness, ideal for route mapping or graduated values.",
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Thematic Mapping Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "Requirement Analysis", desc: "Understand project scope, timeframe, and cost. Approve SOP before proceeding." },
            { step: "Preparation for Mapping", desc: "Assign team and delegate responsibilities for a smooth project execution." },
            { step: "Thematic Mapping", desc: "Use latest software and automation to ensure accurate mapping outcomes." },
            { step: "Quality Check", desc: "Run stringent checks to verify accuracy and consistency." },
            { step: "Delivery", desc: "Deliver final results in required formats such as vector and raster via secure FTP." },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-lg mb-2">{String(idx + 1).padStart(2, "0")}. {item.step}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50 px-6">
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
                <Layers className="h-8 w-8 text-green-700 mx-auto mb-3" />
                <p className="font-medium">{srv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "HVAC Modeling Services to an American General Contractor",
              desc: "Delivered best-quality services within a short timeframe.",
            },
            {
              title: "Retail Visual Merchandising Services to a UK-based Client",
              desc: "Cost-effective and reliable services for international clients.",
            },
          ].map((story, idx) => (
            <Card key={idx} className="shadow-lg rounded-xl">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-green-600 mb-3" />
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
          "Hyde Engineering is very satisfied with Nimble Auity's services. They have met all our deadlines and exceeded expectations in quality."
        </p>
        <p className="font-semibold">Spokesperson, Oil exploration company in the US</p>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Nimble Thematic Mapping Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get in touch today to create accurate thematic maps tailored to your needs.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-green-800">
          <PhoneCall className="mr-2 h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}
