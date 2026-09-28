import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DSmainmenu from "../DSmainmenu";

export default function AdobeXDToHTML() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Adobe XD to HTML Conversion Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Make Your Creative Designs Come to Life by Transforming Them into Adept,
          Standardized HTML Codes.
        </p>
        <Button className="mt-6 bg-white text-indigo-600 font-semibold rounded-2xl px-6 py-3 shadow-lg hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg md:text-xl mb-6">
          Well-designed, intuitive, and responsive web pages can make a good business great.
          With the help of robust Adobe XD to HTML conversion solutions, you can equip
          your business to achieve greater success.
        </p>
        <p className="text-lg md:text-xl">
          At Flatworld Solutions, we offer professional conversion services that help you
          preserve the integrity of your designs while enhancing the responsiveness of
          your web pages. Nimble your design-to-code conversion requirements to us and
          watch your business grow at an incredible pace.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Profound Adobe XD to HTML Conversion Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "HTML to Responsive Conversion Services",
              points: [
                "Ensure your website renders perfectly on all devices",
                "Boost search engine visibility through semantic HTML",
                "Enhance loading speed and reduce bounce rate",
              ],
            },
            {
              title: "Figma to HTML Conversion Services",
              points: [
                "Leverage precise Figma to HTML conversion",
                "Reduce time-to-market with faster workflows",
                "Utilize interactive HTML elements for engagement",
              ],
            },
            {
              title: "SGML Conversion Services",
              points: [
                "Convert outdated SGML files into modern formats",
                "Expedite data retrieval and storage",
                "Lower operational expenses with scalable solutions",
              ],
            },
            {
              title: "Zeplin to HTML Conversion Services",
              points: [
                "Enable seamless designer-developer collaboration",
                "Ensure design consistency across platforms",
                "Speed up project timelines with smart conversion",
              ],
            },
            {
              title: "Sketch to HTML Conversion Services",
              points: [
                "Capture every detail of your original sketch designs",
                "Increase accessibility with responsive designs",
                "Integrate easily into projects for ongoing development",
              ],
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center max-w-6xl mx-auto">
          {[
            { stat: "40%", label: "Cost Reduction" },
            { stat: "8-24 Hrs", label: "Faster Turnaround" },
            { stat: "500+", label: "Satisfied Clients" },
            { stat: "350+", label: "Skilled Experts" },
            { stat: "99%", label: "Accuracy" },
            { stat: "21", label: "Years Experience" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-2xl font-bold text-indigo-600">{item.stat}</h4>
              <p className="mt-2 text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services That Can Assist Your Business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Custom Software Development Services",
              desc: "Customized software solutions enhancing digital transformation and efficiency.",
            },
            {
              title: "SAP Business One Services",
              desc: "Streamline operations and boost growth with real-time business insights.",
            },
            {
              title: "Open Source Development Services",
              desc: "Drive innovation and cut costs with scalable open source solutions.",
            },
            {
              title: "GraphDB Managed Services",
              desc: "Optimize data architecture for better analytics and decision-making.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Should You Choose Our Adobe XD to HTML Conversion Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Seamless Design Consistency",
            "Improved Website Load Performance",
            "Robust Cross-Browser Compatibility",
            "Responsive and Adaptive Layouts",
            "Advanced Semantic Coding",
            "Scalable and Future-Proof Solutions",
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-700">
                {/* Placeholder descriptions; can be expanded further */}
                We deliver {item.toLowerCase()} ensuring top performance and reliability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Scanning & Data Entry for UK Software Firm",
              desc: "Delivered customized scanning and data entry solutions for a software company in Berkshire.",
            },
            {
              title: "E-commerce Data Entry for Bike Accessories Seller",
              desc: "Provided cost-effective eCommerce data entry solutions for a supplier in Poland.",
            },
          ].map((caseStudy, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700 text-sm">{caseStudy.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <blockquote className="italic text-gray-700">
            “Thank you! It has been great working with you. You have always fulfilled your
            part for the best, and you are a good partner to work with.”
          </blockquote>
          <p className="mt-4 font-semibold">Spokesperson, Travel guide company in Sweden</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nimble Adobe XD to HTML Conversion Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Contact us to Nimble Adobe XD to HTML conversion and get a quote in 24 hours.
          We will walk you through the process and ensure an on-time solution.
        </p>
        <Button className="bg-white text-indigo-600 font-semibold rounded-2xl px-6 py-3 shadow-lg hover:bg-gray-100">
          Talk to Our Experts Today
        </Button>
      </section>
    </div>
  );
}