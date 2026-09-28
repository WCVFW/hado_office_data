"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

export default function IndustryProfilingServices() {
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
          Nimble Industry Profiling Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg"
        >
          Gain accurate insights into industries worldwide with comprehensive
          profiles covering trends, key players, opportunities, and challenges
          to guide your strategic decisions.
        </motion.p>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Assessing an industry requires deep evaluation of customer behavior,
          trends, competitors, and innovations. At Nimble Acuity, we provide
          Fortune 1000 companies and global businesses with detailed, well-structured
          industry profiles that support smarter strategies and reduce risks.
        </p>
        <p>
          With two decades of experience, our analysts prepare meticulous reports
          balancing pragmatic outlooks and detailed analysis. From transaction
          data to forecasting, we empower businesses to set measurable goals
          backed by research-driven insights.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Industry Profiling Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "Profiling leading companies with performance reports, turnover, employees, and practices",
            "Reports on new entrants into the industry, including successes and failures",
            "Profiling of recent mergers and acquisitions",
            "Supplier-focused profiles with market share and business data",
            "Competitor landscape profiling with detailed competitor analysis",
            "Market research and forecast profiling",
            "Financial research and projections for industries",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Service {idx + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Who Can Benefit?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Businesses seeking insights into their current or new industry",
            "Companies planning to launch new products/services in unfamiliar markets",
            "Investors looking for reliable data before entering a new market",
          ].map((audience, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Group {idx + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{audience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Advantages of Partnering with Nimble Acuity
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Custom profiles refined by geography",
            "Flexible and scalable services",
            "Accurate industry facts and forecasts",
            "Reports adhering to international quality standards",
            "Expert analysts with access to extensive repositories",
            "Fast turnaround times at affordable costs",
          ].map((advantage, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Advantage {idx + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{advantage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get a Customized Industry Profile Today!
        </h2>
        <p className="max-w-3xl mx-auto mb-8">
          From retail to agriculture, mining to financial services—our industry
          profiling expertise gives you reliable information to enter new
          markets or strengthen your current strategy. Make confident decisions
          with Nimble Acuity by your side.
        </p>
        <Button size="lg" className="rounded-full px-8 py-6 text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
