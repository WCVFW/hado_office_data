"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart, Users, Shield, Clock, DollarSign, FileText } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function InsuranceMarketResearch() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Insurance Market Research Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get comprehensive and in-depth insurance market research services provided by highly-experienced research analysts at prices starting from only <span className="font-semibold">$14/hour</span>.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="text-lg mb-4">
          Are you an insurance carrier or company looking to keep up with the latest insurance market trends? 
          Our experts provide research that helps you stay on top of the ever-evolving insurance sector with actionable insights.
        </p>
        <p className="text-lg">
          Nimble Acuity (Nimble Acuity) is a leading insurance market research service provider, delivering comprehensive reports 
          that enable better-informed decisions and keep you ahead of the competition.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Insurance Market Research Services We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Survey Design Services",
            "Macroeconomic Reports",
            "Online Research",
            "Demographic Analysis",
            "Data Analysis",
            "Equity Markets Reports",
            "Fixed Income Markets",
            "Property & Casualty Reports",
            "Structured Finance Reports",
            "Life & Pension Reports",
            "Public Insurance Reports",
            "Reinsurance Market Reports",
            "Primary Market Research",
            "Market Entry Research",
            "Internal Finance & Risk Reports",
            "Legal Reports",
            "Technological Updates",
            "Valuation Support",
            "Marketing Support",
            "Data Analytics",
            "Industry Reports",
            "Competitive Intelligence",
            "Transaction Support",
            "BI Dashboard Creation",
            "Group Sales Analysis"
          ].map((service, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Expert analysis tailored to the insurance industry to support your strategic decisions.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Insurance Market Research Process</h2>
        <ol className="space-y-6">
          {[
            "Requirement Analysis",
            "Define Research Objective",
            "Research Design",
            "Data Collection",
            "Quality Checks",
            "Visualization and Analysis",
            "Reporting"
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1" />
              <span className="text-lg">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: DollarSign, title: "Affordable Pricing", desc: "High-quality services at cost-effective rates." },
            { icon: Shield, title: "Data Security", desc: "ISO/IEC 27001:2022 ISMS certified, ensuring data safety." },
            { icon: FileText, title: "High-quality Reports", desc: "ISO 9001:2015 certified for premium quality standards." },
            { icon: Users, title: "Experienced Team", desc: "Highly-qualified analysts with proven expertise." },
            { icon: BarChart, title: "Advanced Tools", desc: "We use the latest BI & research software." },
            { icon: Clock, title: "Quick Turnaround", desc: "Fast and reliable delivery of research services." }
          ].map((item, i) => (
            <Card key={i} className="shadow-md rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Online Healthcare Study</h3>
              <p className="text-sm text-gray-600 mb-4">
                Generated a high-quality healthcare report with data from 17 countries for a Swedish client.
              </p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Financial Research for Private Equity Firm</h3>
              <p className="text-sm text-gray-600 mb-4">
                Delivered pension fund research across US states for a top equity firm in just 4 months.
              </p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult projects. Their prompt attention to our requests and attention to detail are excellent.”
        </blockquote>
        <p className="mt-4 font-semibold">– Senior Vice President, Automotive & Transportation Industry Solutions Group</p>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Insurance Market Research Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with Nimble Acuity for professional, cost-effective, and reliable insurance market research. 
          Our team provides customized insights to keep you ahead of the competition.
        </p>
        <Button size="lg">Contact Us Today</Button>
      </section>
    </div>
  );
}
