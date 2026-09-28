"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionSequencing() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-indigo-900 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Construction Sequencing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          Maximize productivity and efficiency of your project by creating well-thought-out sequences, starting at <span className="font-semibold text-orange-500">$14/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-800 space-y-6">
        <p>
          Construction sequencing ensures a smooth, efficient workflow by analyzing the interconnection of project components. 
          Nimble Auity helps you save time and costs by creating optimized sequences and 4D models for maximum efficiency.
        </p>
        <p>
          Our experts visualize sequences, resolve potential conflicts, and provide insights to streamline your project from start to finish. 
          With our services, you can coordinate resources, monitor progress, and reduce risks effectively.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Construction Sequencing Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "BIM Cost Estimation & 5D Modeling",
              desc: "Get accurate cost estimations, bid analysis, and detailed 5D models to understand project costs and progress."
            },
            {
              title: "4D Scheduling Services",
              desc: "Visualize the complete construction sequence over time and monitor activity progress throughout the project lifecycle."
            },
            {
              title: "4D Progress Monitoring",
              desc: "Track actual project status, analyze potential delays, and perform constructability analysis and cost estimation for each component."
            },
            {
              title: "4D Simulations & Animations",
              desc: "Understand complex construction operations through simulations and animations, including CDM, H&S precautions, and real-time sequences."
            },
            {
              title: "2D to 4D & 3D to 4D Conversions",
              desc: "Transform 2D or 3D models into 4D sequences to visualize construction timelines and optimize workflow."
            },
            {
              title: "Site Induction Animations",
              desc: "Prepare on-site teams with detailed animated visualizations of construction sequences for better safety and planning."
            },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-orange-500">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          {[
            "Land Development Design Services",
            "Underground Utility Mapping Services",
            "Highway Engineering Services",
            "Public Health Engineering Services",
          ].map((item, i) => (
            <Card key={i} className="p-4 border-l-4 border-orange-500 hover:shadow-md">
              <p className="text-gray-800">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Rates",
            "ISO-Certified Services",
            "Highly Trained Experts",
            "Data Security & Confidentiality",
            "Quick Turnaround Times",
            "Complete Documentation",
            "Dedicated Project Manager",
            "24/7 Assistance",
          ].map((adv, i) => (
            <Card key={i} className="p-6 border-l-4 border-orange-500 shadow-sm hover:shadow-md">
              <p className="text-gray-800 font-medium">{adv}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Land Development Project for California Engineering Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Engineers delivered infrastructure services for a leading California firm, streamlining land development workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Piping & Instrumentation Design for Plant Engineering Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Created and delivered highly accurate piping and instrumentation drawings, ensuring project efficiency and cost-effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “The commitment and focus of Nimble's managers and engineers were excellent and surpassed our expectations.”
        </blockquote>
        <p className="mt-4 font-semibold text-orange-500">
          SVP and Co-Founder - Engineering Resource Company
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for Construction Sequencing Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Streamline your construction projects, mitigate risks, and enhance productivity with Nimble Auity's expert construction sequencing services.
        </p>
        <Button size="lg" className="bg-orange-500 text-white font-semibold hover:bg-orange-400">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
