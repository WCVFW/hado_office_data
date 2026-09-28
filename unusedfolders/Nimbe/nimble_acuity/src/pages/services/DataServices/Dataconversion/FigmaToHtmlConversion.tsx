import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const FigmaToHtmlConversion: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Figma to HTML Conversion Services</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Don't scramble to hire full-time Figma to HTML conversion specialists, when at just $8 and above you can get expert Figma to HTML converting experts to render fluid web designs on any platform & devices.
        </p>
        <Button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          At Nimble Acuity, the Figma to HTML conversion guarantees responsive sites that are SEO- and cross-browser friendly. We make your site accessible and compliant to web standards with semantic markup and a tech stack of your choice. With 26+ years of experience, we offer tailored Figma to HTML solutions at affordable rates.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Figma to HTML Conversion Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Figma to HTML Web & Mobile Development",
              desc: "Enhances user experience across desktop and mobile ensuring consistency across devices.",
            },
            {
              title: "Figma to HTML eCommerce Development",
              desc: "Create user-friendly eCommerce sites with seamless navigation and catalog flows.",
            },
            {
              title: "Figma to HTML WordPress Development",
              desc: "Boost WordPress site responsiveness and customization beyond template-driven designs.",
            },
            {
              title: "Figma to HTML UI Design",
              desc: "Turn concepts into fluid, lightweight, and agile UI experiences across all channels.",
            },
            {
              title: "Figma to HTML Front-end Development",
              desc: "Stylish and functional front-end conversions to drive traffic and improve page authority.",
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Figma to HTML Conversion Process We Follow</h2>
        <ol className="space-y-6 max-w-4xl mx-auto text-lg">
          <li><span className="font-bold">01. Scan and Upload:</span> Clients send raw Figma designs securely.</li>
          <li><span className="font-bold">02. Download/Access Files:</span> We run quality checks before conversion.</li>
          <li><span className="font-bold">03. Conversion:</span> A skilled team executes the conversion process under NDA.</li>
          <li><span className="font-bold">04. Quality Check:</span> QA analysts review and validate the converted output.</li>
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Why Nimble Figma to HTML Conversion Services to Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "Friendly Rates",
            "100% Data Security (ISO/IEC 27001:2022 Compliant)",
            "High-quality Pixel-perfect Conversion",
            "Quick Turnaround Time",
            "ISO 9001:2015 Certified Provider",
            "Scalable Services",
            "Experienced Conversion Professionals",
            "24/7 Support",
          ].map((reason, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 text-center font-medium">{reason}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies and Testimonials */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories & Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Case Study</h3>
              <p>Nimble Acuity provided Scanning & Data Entry to a UK-based software firm with a customized solution delivered on time.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Testimonial</h3>
              <p>“We were very satisfied with the quality of service Nimble Acuity provided. They met our requests with professionalism and flexibility.” – Spokesperson, Online Health Lessons Company in Canada</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Figma to HTML Conversion Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Get tailored Figma to HTML solutions with assured quality, speed, and affordability. Contact us today and receive a free quote within 24 hours.
        </p>
        <Button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default FigmaToHtmlConversion;