"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SaladScrollPage from "@/components/SaladScrollPage";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ChefHat, Leaf, Clock, Heart, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-green-50">
      <Header />
      <Hero />
      <SaladScrollPage />

      {/* Features */}
      <motion.section
        className="py-24 bg-gradient-to-r from-green-50 via-white to-orange-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Why Choose <span className="text-[#F36A22]">FreshMeals?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver chef-prepared meals with farm-fresh ingredients and unmatched convenience.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: ChefHat, title: "Chef-Prepared", desc: "Crafted by professional chefs" },
            { icon: Leaf, title: "Farm Fresh", desc: "Locally sourced ingredients" },
            { icon: Clock, title: "Quick & Convenient", desc: "Ready in minutes" },
            { icon: Heart, title: "Nutritionally Balanced", desc: "Designed by nutritionists" },
            { icon: Truck, title: "Reliable Delivery", desc: "Fast & fresh to your door" },
            { icon: Shield, title: "Quality Guaranteed", desc: "100% satisfaction promise" },
          ].map((f, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="border-0 shadow-md hover:shadow-xl transition-all rounded-2xl p-6">
                <div className="w-14 h-14 bg-[#F36A22]/10 rounded-xl flex items-center justify-center mb-5">
                  <f.icon className="h-7 w-7 text-[#F36A22]" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold mb-2">{f.title}</CardTitle>
                  <CardDescription className="text-gray-600">{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Plans */}
      <motion.section
        id="plans"
        className="py-24 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Choose Your <span className="text-[#F36A22]">Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible, affordable meal plans tailored to your lifestyle.
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Essential */}
          <Card className="rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Essential</CardTitle>
              <CardDescription>Perfect for individuals</CardDescription>
              <div className="mt-6 text-4xl font-extrabold text-[#F36A22]">
                $99<span className="text-gray-500 text-lg font-normal">/week</span>
              </div>
            </CardHeader>
            <ul className="px-6 space-y-3">
              {["10 meals per week", "2 meals per day", "Free delivery"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-[#16a34a]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-11/12 mx-auto mt-8 bg-[#F36A22] hover:bg-[#d95c1e]" asChild>
              <Link to="/plans">Choose Essential</Link>
            </Button>
          </Card>

          {/* Family */}
          <Card className="rounded-2xl border border-[#F36A22] shadow-xl relative bg-gradient-to-b from-orange-50 to-green-50">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white shadow-md">
              Most Popular
            </Badge>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Family</CardTitle>
              <CardDescription>Great for families</CardDescription>
              <div className="mt-6 text-4xl font-extrabold text-[#F36A22]">
                $179<span className="text-gray-500 text-lg font-normal">/week</span>
              </div>
            </CardHeader>
            <ul className="px-6 space-y-3">
              {["21 meals per week", "3 meals per day", "Priority support"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-[#16a34a]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-11/12 mx-auto mt-8 bg-[#16a34a] hover:bg-green-700 text-white" asChild>
              <Link to="/plans">Choose Family</Link>
            </Button>
          </Card>

          {/* Premium */}
          <Card className="rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Premium</CardTitle>
              <CardDescription>Ultimate convenience</CardDescription>
              <div className="mt-6 text-4xl font-extrabold text-[#F36A22]">
                $259<span className="text-gray-500 text-lg font-normal">/week</span>
              </div>
            </CardHeader>
            <ul className="px-6 space-y-3">
              {["35 meals per week", "5 meals per day", "24/7 concierge service"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-[#16a34a]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="w-11/12 mx-auto mt-8 bg-[#F36A22] hover:bg-[#d95c1e]" asChild>
              <Link to="/plans">Choose Premium</Link>
            </Button>
          </Card>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-24 bg-gradient-to-r from-[#F36A22] to-[#16a34a] text-white relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Ready to Transform Your Eating Habits?</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers who made healthy eating effortless.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#F36A22] font-semibold hover:bg-orange-50 shadow-lg" asChild>
            <Link to="/plans">Start Your Journey Today →</Link>
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
