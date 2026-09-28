import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Wrench, Factory, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ESmainmenu from "../ESmainmenu";

export default function OilGasEngineeringPage() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white pt-28 pb-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Engineering Services for the Oil and Gas Industry
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Get access to high-quality and comprehensive engineering services for the oil and gas industry
          and boost productivity while cutting costs at prices starting at $12/hour.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Our Oil & Gas Engineering Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Manufacturing Engineering",
              desc: "3D Modeling, CAD Conversion, Reverse Engineering, New Product Development, P&ID, Take-off & Estimation, Plant Engineering, Technical Publications, FEA & CFD, Product Modeling & Animation",
            },
            {
              title: "Electrical & Electronics Engineering",
              desc: "E&I Services, Electrical Design & Documentation, PCB Design, Industrial Automation Engineering",
            },
            {
              title: "Construction Engineering",
              desc: "EPC Support, Structural Engineering, GIS Services, Facility & Asset Management",
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md border-t-4 border-blue-600">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Expertise Across the Oil & Gas Value Chain</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {["Upstream & Downstream EPC","Subsea System Design","Pipeline Engineering","Marine Engineering","Valve & Pump Design","Process & Utility Systems","Refinery & Storage Facilities","Instrumentation & SCADA","Turbomachinery & Rotating Equipment"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-blue-600 mt-1" size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Our Engineering Process</h3>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {["Requirement Analysis","Planning","Building & Monitoring","Quality Control","Final Delivery"].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md p-6 rounded-xl border-t-4 border-blue-600"
            >
              <h4 className="font-semibold text-lg mb-2">Step {i + 1}</h4>
              <p className="text-gray-600 text-sm">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Affordable Pricing Options (FTE/hourly)",
              "ISO-certified High-quality Services",
              "State-of-the-art Infrastructure",
              "Experienced Engineering Team",
              "Advanced Tools & Technologies",
              "Strong Data Security (ISO/IEC 27001:2022)",
              "Short Turnaround Times",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <p className="text-gray-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
        <Card className="shadow-md">
          <CardContent className="p-8">
            <p className="text-lg italic mb-4">
              “Nimble Auity is very precise and attentive to all our needs. They have also learned our processes much quicker than we anticipated.”
            </p>
            <p className="font-semibold">General Partner, Construction Company (US)</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Looking for Reliable Oil & Gas Engineering Services?</h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Nimble Auity has 26+ years of experience serving global clients across upstream, midstream, and downstream sectors. Partner with us for innovative, cost-effective, and future-ready engineering solutions.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
