import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, TrendingUp, ShieldCheck, Clock, Sparkles } from "lucide-react";
import NavigationMenu from "../MegaMenu";

export default function ProductResearchServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
       <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Nimble Product Research Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Orient your business around your customers and drive more meaningful human connections with our product research services starting at <span className="font-semibold">$14 per hour</span>.
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Product Research Matters</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          When planning to develop and launch a product, a thorough assessment of the existing market space is extremely important. Not only does it help you understand your customers' needs and requirements, but also identifies the existing competition.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nimble Acuity (Nimble Acuity) provides comprehensive and highly efficient product research services to help you successfully design and launch products as per your market's current needs and demand. From conducting market research and analysis to elevating your product's features and benefits, we do it all to ensure maximum growth and profitability.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Product Research Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Initial Product Research", desc: "Spot promising product ideas and eliminate unprofitable ones." },
            { title: "Market Research", desc: "Evaluate demand, size, competition, and risks for your product." },
            { title: "Product Name Research", desc: "Test and choose a product name that resonates with customers." },
            { title: "Industry Research", desc: "Gain insights on competitors and optimize product strategies." },
            { title: "Consumer Research", desc: "Profile customers, analyze sentiment, and identify preferences." },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Our Product Research Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[ 
            { step: "01", title: "Customized Project", desc: "We create a tailored research plan covering all parameters." },
            { step: "02", title: "Data Collection", desc: "Gather insights on customer needs and market alignment." },
            { step: "03", title: "Analysis", desc: "Transform data into actionable reports with clear insights." },
            { step: "04", title: "Product Improvement", desc: "Optimize and test products to boost value and profits." },
          ].map((p, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{p.step}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Benefits of Outsourcing Product Research</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Understand customer needs and demands",
            "Tailor products to meet expectations",
            "Gain insights on market trends",
            "Evaluate competition and success rate",
            "Stay current with industry trends",
            "Modify products as per changing demands",
            "Design effective marketing strategies",
            "Boost sales and profitability",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <ShieldCheck className="text-green-600 mt-1" size={20} />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">Why Nimble to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Certified Specialists", desc: "Instant access to experts with proven experience." },
            { icon: Sparkles, title: "Innovative Tools", desc: "Advanced analytics and tools for accurate insights." },
            { icon: Clock, title: "Quick Turnaround", desc: "Fast, reliable services with no missed deadlines." },
            { icon: TrendingUp, title: "Cost-Effective", desc: "Pocket-friendly rates without compromising quality." },
            { icon: ShieldCheck, title: "Data Security", desc: "End-to-end encryption ensures complete confidentiality." },
            { icon: Search, title: "Custom Solutions", desc: "Tailored research services to match your needs." },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult projects. Their prompt attention to our requests and attention to detail is excellent.”
        </blockquote>
        <p className="mt-4 font-semibold">Senior Vice President, Automotive & Transportation Industry Solutions Group</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Nimble Product Research Services to Nimble Acuity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get in touch with us to know how we can help you build a product that improves your brand's value and drives maximum traction and profits amidst immense competition.
        </p>
        <Button size="lg" variant="secondary">Contact Us</Button>
      </section>
    </div>
  );
}
