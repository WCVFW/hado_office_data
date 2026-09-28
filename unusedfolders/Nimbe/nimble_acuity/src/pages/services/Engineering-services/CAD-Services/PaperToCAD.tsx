"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PaperToCAD() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Paper to CAD Conversion Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Convert manual designs into precise CAD files. Enhance productivity
          and reduce costs by up to 40%.
        </motion.p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Paper Drawings to CAD Conversion Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Scanning Paper Drawings",
              desc: "We use high-quality scanning equipment and techniques to ensure accurate capture of all manual drawings.",
            },
            {
              title: "Pre-conversion Clean-up",
              desc: "Our experts vet scanned drawings to remove speckles, fill gaps, and correct basic errors for optimal conversion.",
            },
            {
              title: "DXF/DWG Conversion",
              desc: "Convert your paper drawings into DXF, DWG, or other vector formats while retaining precision and optimization.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Hire Nimble as Your Paper to CAD Conversion Partner?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Best Infrastructure – World-class tools and technology for accurate conversion.",
            "High-Quality Services – ISO-certified services ensuring error-free deliverables.",
            "Quick Turnaround – Multiple global delivery centers enabling fast delivery.",
            "Experienced Engineers – Skilled professionals ensuring all SLAs are met.",
            "Scalable Services – Easily ramp resources to meet project demands.",
          ].map((point, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">{point}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Engineering Services */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Engineering Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Mechanical Engineering Services",
            "Architectural Engineering Services",
            "Civil Engineering Services",
            "Structural Engineering Services",
            "Electrical Engineering Services",
            "Infrastructure Engineering Services",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                3D Part Modeling Services for Aerospace OEM
              </h3>
              <p>
                Nimble delivered 3D part modeling for an Australian aerospace client
                using Inventor 2015 within a week.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Creo Modeling for UK Cash Management Client
              </h3>
              <p>
                Cost-effective Creo modeling services delivered by Nimble for a UK-based client.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <p className="italic text-gray-700 mb-4">
                “Nimble Acuity has been a tremendous resource for our engineering department.
                Their team is precise and attentive to all our needs.”
              </p>
              <p className="font-semibold">
                — SVP and Co-Founder, Engineering Resource Company
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Digitize Your Paper Drawings?
        </h2>
        <p className="mb-6 text-lg">
          Optimize ROI with Nimble’s paper to CAD conversion services and reduce overhead costs.
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-700 font-semibold hover:bg-gray-200"
        >
          Contact Our Engineers
        </Button>
      </section>
    </div>
  );
}
