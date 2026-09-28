"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Layers,
  CheckCircle2,
  BookOpen,
  Users,
  PhoneCall,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ParcelMappingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Parcel Mapping Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Precise parcel mapping services to mark and represent your ownership boundaries, starting at just $14/hour
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-gray-700">
        <p className="text-lg mb-4">
          Parcel mapping is essential to define ownership boundaries and create cadastral maps for land planning, urban development, and commercial usage. Nimble Auity offers precise parcel mapping with technological expertise, efficiency, and quick turnaround times while keeping costs under control.
        </p>
        <p className="text-lg">
          Our team conducts topological cleaning, digitizes analog maps, and ensures accurate representation of parcel boundaries for homeowners, governments, developers, and urban planners.
        </p>
      </section>

      {/* Parcel Mapping Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Parcel Mapping Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Structuring Data",
            "Annotation",
            "Data Cleanup",
            "Workflow Delineation",
            "COGO Attributes",
            "Topology and Data Integrity",
            "Restructuring and Conversion",
            "Naming and Matching of Attributes",
            "Fabric Staging",
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition rounded-2xl">
              <CardContent className="p-6">
                <Layers className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Who Benefits From Our Parcel Mapping Services?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Engineers",
            "Government Bodies - Local and State",
            "City Planners",
            "Tax Assessors",
            "Homeowners",
            "Private Utility Services",
            "Public Utility Services",
            "Commercial Real Estate",
            "Private Real Estate",
            "Real Estate Developers",
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-md rounded-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <p className="font-medium">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Parcel Mapping Process We Follow</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "Requirement Analysis", desc: "Understand project needs, receive analog maps securely, and recommend the best parcel mapping solution." },
            { step: "Pre-processing", desc: "Scan and plot analog maps and ensure data cleanliness before digitization." },
            { step: "Digitizing Analog Maps", desc: "Digitize maps based on standards and check for clarity, accuracy, and precision." },
            { step: "Georeferencing", desc: "Derive aerial and satellite images to get accurate land dimensions for display on maps." },
            { step: "Quality Check", desc: "Verify boundaries, parcel identification, and other details for complete accuracy." },
            { step: "Matching of the Map", desc: "Match maps with positioning systems and estimate past/future positions." },
            { step: "Delivery", desc: "Deliver files via secure FTP after complete quality checks." },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-blue-600 mb-3" />
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
            "Highway Engineering Services",
            "Public Health Engineering Services",
            "Land Development Design Services",
            "Underground Utility Mapping Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow rounded-xl">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                <p className="font-medium">{srv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Retail Visual Merchandising Services to a UK-based Client",
              desc: "Provided cost-effective and reliable services to meet client requirements.",
            },
            {
              title: "HVAC Modeling Services to an American General Contractor",
              desc: "Delivered superior quality services within a short timeframe.",
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
          "Nimble Auity has been a tremendous resource for our engineering department. They are precise, attentive, and quickly learned our procedures."
        </p>
        <p className="font-semibold">General Partner, a Manufacturing company in the US</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Nimble Parcel Mapping Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get in touch today for accurate parcel mapping services at affordable rates.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-800">
          <PhoneCall className="mr-2 h-5 w-5" /> Contact Us
        </Button>
      </section>
    </div>
  );
}
