import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star, Wrench, Layers, Cpu, Users } from "lucide-react";
import ESmainmenu from "../ESmainmenu";

export default function RetailEngineeringDesign() {
  return (
    <div className="w-full text-gray-800">

      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Engineering Design for Retail Stores
        </motion.h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Optimize your retail space with featured layouts, targeted customer flow analysis, and precise HVAC load calculations to enhance shopper experience and maximize sales.
        </p>
        <Button className="bg-white text-blue-700 font-semibold">Get Started</Button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-6 text-blue-700">Innovative Retail Engineering Design</h3>
        <p className="mb-4">
          Engineering design services for retail stores focus on crafting innovative spaces that enhance the shopping experience while addressing the challenges of modern retailing. With the rise of experiential shopping and digital integration, store designs must accommodate advanced technologies and flexible layouts.
        </p>
        <p className="mb-4">
          Equipped with 3D modeling and virtual reality simulations, we optimize customer flow, integrate sustainable systems, and ensure compliance with regulations.
        </p>
        <p>
          By focusing on adaptability and future readiness, we create retail environments that evolve with industry trends, ensuring leadership in customer engagement and efficiency.
        </p>
      </section>

      {/* Success Stories */}
      <section id="success" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Customer Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">Retail Design & Drafting for $600m Company</h4>
              <p className="mb-4">A leading store management company benefited from our customized space planning, interior designs, and refurbishing drawings.</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center">Read more <ArrowRight className="ml-2 w-4 h-4" /></a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-2">UK Client Saves Big with Retail Planning</h4>
              <p className="mb-4">Our expert drafting saved a UK client over £30,000 every month with detailed plans for retail stores and supermarkets.</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center">Read more <ArrowRight className="ml-2 w-4 h-4" /></a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6 text-blue-700">Customer Testimonial</h3>
        <blockquote className="italic text-lg text-gray-700 mb-4">
          “The commitment and focus of Nimble Auity’s managers and engineers were excellent and surpassed our expectations.”
        </blockquote>
        <p className="font-semibold">SVP and Co-Founder, Engineering Resource Company</p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Manage Projects with Our Retail Engineering Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            "Retail Space Design & Drafting",
            "Shop Drawings",
            "Fabrication Drawings",
            "Cabinet Shop Drawings",
            "3D Walkthrough & Visualization",
            "Casework Shop Drawings",
            "Store Layout Design",
            "3D Rendering Service",
            "Assembly Design",
            "Visual Merchandising",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{service}</h4>
                <p>Comprehensive design solutions tailored for retail functionality and aesthetics.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-10 text-center text-blue-700">Our Optimized Process Flow</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {["Consultation & Assessment","Concept Development","Design Refinement","Regulatory Compliance","Finalization & Documentation","Construction Oversight","Handover & Inspection","Post-Occupancy Evaluation"].map((step, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <div className="text-blue-600 font-bold text-lg mb-2">{`0${i+1}`}</div>
                <h4 className="font-semibold">{step}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Tools We Use</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto text-sm">
          {["AutoCAD","CATIA","SolidWorks","Autodesk Inventor","Siemens SX","Autodesk REVIT","MicroStation","PTC Creo","AutoCAD LT","Autodesk Plant 3D","Cadworx"].map((tool, i) => (
            <span key={i} className="px-4 py-2 bg-white shadow rounded-full">{tool}</span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="whyus" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-blue-700">Why Choose Nimble Auity?</h3>
        <ul className="space-y-4">
          {["Custom Layout Optimization","Specialized Expertise","Cutting-Edge Design Tools","Integrated Smart Systems","Comprehensive Compliance Management","Value Engineering"].map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Articles */}
      <section id="articles" className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10 text-blue-700">Key Articles for Insightful Learning</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">Why You Should Seriously Consider Outsourced Engineering Services?</h4>
              <p className="mb-4">Unlock efficiency and innovation by outsourcing engineering services to India.</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center">Read more <ArrowRight className="ml-2 w-4 h-4" /></a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">The Impact of Technological Advancements</h4>
              <p className="mb-4">Discover how outsourcing engineering accelerates innovation and efficiency.</p>
              <a href="#" className="text-blue-600 font-semibold flex items-center">Read more <ArrowRight className="ml-2 w-4 h-4" /></a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <h3 className="text-3xl font-bold mb-4">Outsource CAD Engineering Services for Retail Stores to Nimble Auity</h3>
        <p className="max-w-3xl mx-auto mb-6">
          By choosing Nimble Auity, you gain access to state-of-the-art CAD, BIM, and VR simulations with a focus on sustainability and compliance, ensuring innovative and future-ready retail spaces.
        </p>
        <Button className="bg-white text-blue-700 font-semibold">Get a Quote</Button>
      </section>
    </div>
  );
}