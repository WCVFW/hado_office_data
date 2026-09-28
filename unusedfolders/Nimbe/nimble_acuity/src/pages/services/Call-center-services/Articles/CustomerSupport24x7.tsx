"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

export default function CustomerSupport24x7() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <CCmainmenu/>
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight"
          >
            Keep Them Coming Back
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl font-medium">
            Why Should Your Business Embrace 24/7 Customer Support?
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg opacity-90">
            Delve into the world of 24/7 customer support to understand its
            profound impact on business growth and why it&apos;s more than just a trend.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          <p className="text-slate-700 leading-relaxed">
            The hyper-connected business landscape and the continually evolving
            customer expectations have set the bar for exceptional customer
            service higher than ever. As businesses strive to meet and exceed
            these expectations, one strategy that has emerged as a crucial
            differentiator is offering 24/7 customer support. This round-the-clock
            availability has become more than just a service feature; it&apos;s a
            powerful business tool that can significantly enhance a company&apos;s
            competitive edge.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            The provision of 24/7 customer support facilitates uninterrupted
            interactions with customers, ensuring their needs are met promptly and
            effectively, irrespective of geographical or time constraints. This
            means businesses can cater to a global customer base, breaking down
            traditional barriers and opening new avenues for growth. By offering
            24/7 services, businesses cultivate stronger relationships, foster
            trust, and strengthen operational efficiency.
          </p>
        </section>

        {/* BENEFITS */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Top Benefits of 24/7 Customer Support
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Boost in Customer Loyalty",
                text: "Constant availability builds trust and fosters loyalty. Loyal customers bring steady revenue and referrals.",
              },
              {
                title: "Differentiation from Competitors",
                text: "24/7 support shows commitment, helping businesses stand out in crowded markets.",
              },
              {
                title: "Expanded Sales Potential",
                text: "Serve global customers across time zones. Quick responses prevent sales from falling through.",
              },
              {
                title: "Strengthened Business Image",
                text: "24/7 commitment improves public perception, attracts customers, and drives retention.",
              },
              {
                title: "Streamlined Issue Resolution",
                text: "Quick resolution prevents minor issues from escalating and improves efficiency.",
              },
              {
                title: "Greater Market Reach",
                text: "Round-the-clock availability enables global expansion and increased revenue.",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{benefit.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ADDITIONAL SERVICES */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Additional Services That Fortify Your Efforts
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Lead Generation Services",
              "Outbound Call Center",
              "Telemarketing Services",
              "Technical Support Services",
            ].map((service, idx) => (
              <Card
                key={idx}
                className="shadow hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-4 text-center font-medium text-slate-800">
                  {service}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl text-white p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Drive Success With 24/7 Customer Support
            </h3>
            <p className="max-w-3xl mx-auto mb-6 opacity-90">
              24/7 support is a game-changing strategy that improves retention,
              reputation, and profitability. Step into the new era of customer
              service with <strong>Nimble Auity</strong>.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-700 font-semibold hover:bg-slate-100"
            >
              Contact Us Today
            </Button>
          </div>
        </section>

        {/* ARTICLE SLIDER (STATIC EXAMPLE) */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Article Slider</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "How is AI Becoming Instrumental in Boosting Call Center Productivity",
              "Unique Selling Proposition - Your Key to Successful Marketing",
              "Top 6 Benefits of Live Chat for Customer Service Teams",
            ].map((article, idx) => (
              <Card
                key={idx}
                className="shadow hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-4 text-slate-800">{article}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Nimble Auity — 24/7 customer support &
          business solutions.
        </div>
      </footer>
    </div>
  );
}
