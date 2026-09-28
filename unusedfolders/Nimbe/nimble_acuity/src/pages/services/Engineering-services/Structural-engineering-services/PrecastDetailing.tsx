"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PrecastDetailing() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Precast Panel Detailing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Get superior quality precast panel detailing solutions for your projects and save up to 50% in cost and time.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Request a Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg mb-6">
          Looking for data-driven precast model delivery? Partner with Nimble, a leading precast panel detailing
          service provider. Hire our trained engineers to manage your construction requirements efficiently and cost-effectively.
        </p>
        <p className="text-lg mb-6">
          Nimble Acuity is trusted by major AEC businesses globally, delivering high-quality precast panels that enhance your
          projects’ structural accuracy and execution.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Precast Panel Detailing Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Wall Panel Detailing",
            "Precast Shop Drawings",
            "Erection Drawing",
            "Bar Bending Schedules",
            "BIM Coordination",
            "Beam and Column Detailing",
            "Marking Plan",
            "Precast Concrete Wall Systems",
            "Tilt-up Panel Detailing",
            "Precast Joinery Detailing",
            "Precast Column Detailing",
            "Precast Cladding Panels",
            "Precast Engineering Services",
            "Tekla Panel Detailing",
            "Tekla Precast Concrete Detailing",
            "Curtain Wall Panel Detailing",
            "Precast Beam-Column Connection Detailing",
            "Shear Wall Panel Detailing",
            "Load-Bearing Wall Units Panel Detailing",
            "Connection & Handling System Design",
            "Formwork for Cast-in-Place Concrete Panel Detailing",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Retail Visual Merchandising Services",
            "BIM Component Creation Services",
            "Millwork Drawings Services",
            "Point Cloud Services",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-lg">
              <CardContent className="p-6 text-center">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Acuity for Precast Detailing</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Flexible pricing starting at $12/hour",
            "Quick turnaround through multiple global delivery centers",
            "World-class infrastructure and latest precast detailing software",
            "ISO-certified, error-free services",
            "Skilled and experienced precast detailing engineers",
            "24/7 customer support",
            "Data privacy and security via ISMS certification and NDA agreements",
            "Highly scalable services based on project requirements",
            "Dedicated point of contact for each project",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Structural Drafting Services for Award-winning Design Firm",
              desc: "Nimble set aside a team of skilled drafters, quality analysts, and account managers to implement project markups accurately, preventing rework.",
            },
            {
              title: "Structural Modeling Support for a Concrete Supplying Giant",
              desc: "Our structural support designers conducted scope analysis and seismic analysis to provide accurate reports.",
            },
          ].map((story, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-gray-700">
                <h3 className="font-bold mb-2 text-lg">{story.title}</h3>
                <p>{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reliable Precast Panel Detailing Starts Here
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for accurate, scalable, and efficient precast panel detailing services for your projects.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-700 font-semibold hover:bg-gray-200"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
