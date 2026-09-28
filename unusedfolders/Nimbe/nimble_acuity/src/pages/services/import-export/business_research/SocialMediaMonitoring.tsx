import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, Users, Shield, TrendingUp } from "lucide-react";
import NavigationMenu from "../MegaMenu";

const SocialMediaMonitoring: React.FC = () => {
  return (
    <div className="p-8 space-y-16">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Nimble Social Media Monitoring Services
        </motion.h1>
        <p className="text-lg text-gray-600">
          Drive your business forward with our cost-efficient social media monitoring services. 
          Leverage expert analysis, optimize marketing spend, and achieve exceptional returns on investment.
        </p>
        
      </section>

      {/* Challenges */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">The Challenge</h2>
        <p>
          Keeping track of competitors and industry trends manually is time-consuming and resource-intensive. 
          With the massive volume of social media data generated daily, extracting insights and understanding customer sentiment 
          can be daunting — often leading to missed opportunities.
        </p>
      </section>

      {/* Solutions */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Our Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Campaign Analysis",
              desc: "Measure campaign performance, track key metrics, and get actionable recommendations.",
              icon: BarChart3,
            },
            {
              title: "Reputation Monitoring",
              desc: "Comprehensive coverage and timely responses to safeguard your brand reputation.",
              icon: Shield,
            },
            {
              title: "Competitor Benchmarking",
              desc: "Unbiased insights into competitor strategies, content performance, and engagement.",
              icon: Users,
            },
            {
              title: "ROI Analysis",
              desc: "Maximize returns by outsourcing expertise without heavy in-house investment.",
              icon: TrendingUp,
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 space-y-3">
                <item.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 p-8 rounded-2xl space-y-6">
        <h2 className="text-2xl font-semibold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Experienced Team</strong> – Online reputation experts uncover insights and track trends.</li>
            <li><strong>Refined Strategies</strong> – Data-driven decisions enhance customer satisfaction.</li>
            <li><strong>State-of-the-art Tools</strong> – World-class infrastructure for real-time monitoring.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Quality & Security</strong> – ISO-certified with strict confidentiality standards.</li>
            <li><strong>Flexible Pricing</strong> – Cost-effective, scalable solutions for all budgets.</li>
          </ul>
        </div>
      </section>

      {/* Additional Services */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Social Media Optimization", "Social Media Customer Services", "Social Media Marketing Services", "Real Estate Social Media Services"].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 text-center font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Market Research Survey for UK Pharma Firm</h3>
              <p className="text-gray-600 text-sm">
                We helped a 70-year-old pharmaceutical company with social media research and telephonic study across 50 airports worldwide.
              </p>
              <Button variant="link" className="p-0">Read more →</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Primary & Secondary Research for US Client</h3>
              <p className="text-gray-600 text-sm">
                Provided full-time equivalent support for digital transformation provider with quick turnaround.
              </p>
              <Button variant="link" className="p-0">Read more →</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 p-8 rounded-2xl space-y-4 text-center">
        <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          “The services Nimble Acuity provided helped us achieve substantial cost and time savings on difficult projects. 
          Their prompt attention and attention to detail is excellent.”
        </blockquote>
        <p className="text-sm text-gray-600">— Senior VP, Automotive & Transportation Industry Solutions</p>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Nimble Social Media Monitoring Today</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Streamline workflows, monitor brand reputation, benchmark competitors, and understand your audience with real-time insights.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
};

export default SocialMediaMonitoring;
