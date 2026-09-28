"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function CompetitorAnalysisServices() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Competitor Analysis Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg"
        >
          From insight to impact, our competitor analysis services translate
          complex data into strategic advantages, helping you outperform the
          industry benchmarks.
        </motion.p>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Organizations often grapple with acquiring in-depth knowledge of their
          competitors due to the lack of specialized resources or expertise. We
          step in as your dedicated competitor analysis service provider,
          offering tailored solutions for industries worldwide.
        </p>
        <p>
          Using sophisticated tools, we scrutinize competitor strategies,
          offerings, and customer relations—presenting a panoramic view of their
          strengths and weaknesses. Our services provide actionable insights to
          anticipate and counter competitor strategies effectively.
        </p>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title:
                "Primary Research for Leading Chinese Trade Consultants",
              desc: "Delivered actionable insights through comprehensive research.",
            },
            {
              title:
                "Research for US Strategy Firm Accelerated Time-to-Market",
              desc: "Provided crucial data for a wellness product launch.",
            },
            {
              title:
                "Secondary Research for Swiss Hospitality Company",
              desc: "Boosted market insights and strategic planning.",
            },
            {
              title:
                "Research Support for US Tech Firm",
              desc: "Delivered valuable insights in global finance and healthcare trends.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Competitor Analysis Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "SWOT Analysis",
            "PESTEL Analysis",
            "Competitor Profiling",
            "Competitor Intelligence",
            "Competitor Benchmarking",
            "Competitive Advantage Assessment",
            "Competitor Analysis Reports",
            "Competitive Insights Services",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our {service.toLowerCase()} helps you evaluate, strategize, and
                  gain a competitive edge in your market.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Competitor Analysis Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Qualitative Data Analysis",
            "Competitive Positioning Analysis",
            "Product & Services Comparison",
            "Marketing Strategy Analysis",
            "Customer Analysis",
            "Reporting & Strategic Planning",
          ].map((step, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Step {idx + 1}: {step}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We follow a structured process to deliver reliable and
                  actionable competitor insights.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Superior Quality Assurance",
            "Data Security & Confidentiality",
            "Unmatched Precision",
            "Scalable & Flexible Services",
            "Quick Turnaround Times",
            "24/7 Client Support",
          ].map((reason, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{reason}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {reason} is part of our commitment to excellence and client
                  success.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Competitor Analysis Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-8">
          Gain a strategic edge with our robust competitor analysis services. Our
          insights help you make informed decisions and excel in your industry.
        </p>
        <Button size="lg" className="rounded-full px-8 py-6 text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
