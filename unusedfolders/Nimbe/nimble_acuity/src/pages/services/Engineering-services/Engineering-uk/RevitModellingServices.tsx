import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  Layers,
  DraftingCompass,
  CheckCircle,
  Lock,
  Globe,
  Users,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function RevitModellingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-700 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Revit Modelling Services - Robust Pre-construction Design & BIM Support
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Create clash-free Revit models that prevent rework and cost-intensive construction oversights.
        </p>
        <div className="mt-8">
          <Button size="lg" className="rounded-2xl shadow-lg">
            Try Our Services Now
          </Button>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Are you grappling with exorbitant software costs, complex learning paths, and time-consuming Revit modelling procedures daily? If so, it's time to turn the tide by offshoring your needs to our expert team at <strong>Nimble Auity</strong>, boasting 26+ years of versatile, multi-disciplinary proficiency in delivering top-notch Revit modelling services. We serve design firms, sub-contractors, general contractors, engineers, consultants, manufacturers, and fabricators across the UK.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "PDF to Revit Models",
              desc: "Transform static PDF blueprints into editable Revit models with enhanced precision and seamless modifications.",
            },
            {
              title: "CAD to Revit Models",
              desc: "Convert CAD drawings into detailed, data-rich Revit models that streamline design and collaboration.",
            },
            {
              title: "Revit Modelling from Concept Schematics",
              desc: "Turn conceptual designs into comprehensive Revit models for accurate visualization and flawless execution.",
            },
            {
              title: "2D CAD to 3D Revit Models",
              desc: "Convert 2D CAD drawings into detailed 3D Revit models for improved insight and communication.",
            },
            {
              title: "Floor Plan Modelling",
              desc: "Create interactive floor plans in Revit, enhancing understanding and informed decision-making.",
            },
            {
              title: "Clash Detection",
              desc: "Identify and resolve costly design conflicts early with our clash detection services.",
            },
            {
              title: "Scan to Revit Conversions",
              desc: "Convert physical structures into accurate digital Revit models for retrofit and preservation.",
            },
            {
              title: "Scan to Revit BIM Services",
              desc: "Digitize as-built structures with data-rich Revit BIM models for seamless project management.",
            },
            {
              title: "Revit CAD Services",
              desc: "Streamline plumbing, electrical, and mechanical modelling with detailed construction-ready Revit CAD services.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Who Benefits from Our Services?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Architects",
            "Structural Engineers",
            "Construction Professionals",
            "Contractors",
            "Engineers",
            "Interior Designers",
          ].map((aud, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
              <Users className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
              <p className="font-medium">{aud}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process Flow</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { step: "01", title: "Initial Consultation", desc: "We begin with a thorough discussion to understand your project requirements and objectives." },
            { step: "02", title: "Creation of Revit Model", desc: "Our experts craft a precise 3D model using advanced Revit tools." },
            { step: "03", title: "Quality Assurance", desc: "Every model undergoes multi-step quality checks for accuracy and detailing." },
            { step: "04", title: "Model Delivery and Support", desc: "We securely deliver the final model with full after-service support." },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="text-indigo-600 font-bold text-3xl">{item.step}</div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Multi-step Quality Check", desc: "Ensuring benchmark accuracy with rigorous quality checks.", icon: CheckCircle },
            { title: "Custom Pricing Plans", desc: "Flexible and transparent pricing with no hidden costs.", icon: DollarSign },
            { title: "Data Security & GDPR Compliance", desc: "Strict protocols to keep your information safe.", icon: Lock },
            { title: "State-of-the-Art Facilities", desc: "Innovative delivery centres across multiple time zones.", icon: Globe },
            { title: "Advanced Revit Modelling Tools", desc: "Cutting-edge tools for precision and detail-rich models.", icon: DraftingCompass },
            { title: "Experienced Professionals", desc: "26+ years of industry expertise with certified professionals.", icon: Users },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700">
              <item.icon className="w-8 h-8 mb-4 text-indigo-400" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {["BIM Services", "MEP Services", "Architectural Modelling", "Structural Modelling"].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow shadow-md hover:shadow-xl">
              <Wrench className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-16 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">3D BIM Modeling for UK Design Studio</h3>
              <p className="text-sm text-gray-600">Delivered cost-effective Revit MEP services with quick turnaround for a UK-based client.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Revit Modelling for Swiss Architectural Firm</h3>
              <p className="text-sm text-gray-600">Provided fast and accurate Revit modelling, ensuring seamless execution within deadlines.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          "The team has turned around drawings quickly with excellent drafting skills and attention to detail. Nimble Auity has been very professional and thorough. We look forward to a continued and successful partnership."
        </blockquote>
        <p className="mt-4 font-semibold">– Principal, Design & Architecture Company, US</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource Revit Modelling Services to Nimble Auity for Accurate & Detail-rich 3D Models
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Ready to optimise your construction design for productivity and predictability? Partner with Nimble Auity today.
        </p>
        <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 rounded-2xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}