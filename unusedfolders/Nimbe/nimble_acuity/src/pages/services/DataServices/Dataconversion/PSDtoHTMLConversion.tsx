import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DSmainmenu from "../DSmainmenu";

export default function PSDtoHTMLConversion() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble PSD to HTML Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Step into the Future of Web Designing and Retain the Integrity of Your Adobe Photoshop Designs. 
          Empower your web designers with freedom and creative autonomy to design dynamic web pages.
        </p>
        <Button variant="secondary" className="mt-6 rounded-full px-6 py-3 text-lg">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Range of PSD to HTML Conversion Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{
              title: "WordPress Migration Services",
              desc: "Ensure smooth migration, customize WordPress, and improve SEO post migration."
            },{
              title: "CMS Development Services",
              desc: "Develop custom CMS, empower staff, and streamline workflows."
            },{
              title: "Bootstrap Web Development Services",
              desc: "Build mobile-first websites with Bootstrap and accelerate development."
            },{
              title: "jQuery App Development Services",
              desc: "Create fast, interactive web apps with jQuery for cross-platform use."
            }].map((service, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tools We Use</h2>
        <p className="text-center mb-6 text-gray-600">
          Avocode • Export Kit • Pinegrow
        </p>
        <p className="text-xs text-center text-gray-400 max-w-xl mx-auto">
          (Disclaimer: The use of the above-mentioned tools is subject to Nimble Acuity's present practices. We do not endorse the use of these tools in any capacity.)
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Global Experience and Expertise","Quick Deployment","Streamlined Workflow Integration","W3C Compliance","Industry-Best Security Protocols","Dedicated Support and Maintenance"].map((point, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{point}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Custom Software Development","Digital Transformation Services","Mobile App Development","Database Services"].map((service, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{service}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-lg max-w-3xl mx-auto text-gray-700">
          “We were very satisfied with the quality of service Nimble Acuity provided. They were able to meet our requests with great professionalism and flexibility. We look forward to having your team fulfill future projects for us.”
        </blockquote>
        <p className="mt-4 font-semibold">Spokesperson, Online health lessons company in Canada</p>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[{
              title: "Nimble Acuity Provided Scanning & Data Entry to a UK-based Software Firm",
              desc: "A software company from Berkshire delegated scanning and data entry solutions to Nimble Acuity. We delivered a customized solution in no time."
            },{
              title: "Nimble Acuity Provided eCommerce Data Entry to Bike Accessories Seller",
              desc: "A Poland-based parts and accessories supplier Nimbled data mining and entry to us. We offered budget-friendly eCommerce data solutions."
            }].map((caseStudy, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm">{caseStudy.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Expedite business deployment and growth
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Partner with us for your PSD to HTML conversion services and bring your designs to life.
        </p>
        <Button variant="secondary" className="rounded-full px-6 py-3 text-lg">
          Talk to Our Experts
        </Button>
      </section>
    </div>
  );
}
