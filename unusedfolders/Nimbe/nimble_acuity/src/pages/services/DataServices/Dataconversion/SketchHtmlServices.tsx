import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const SketchHtmlServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Sketch to HTML Conversion Services</h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Send us your Sketch designs and get them converted into high-quality HTML codes
          to make your website SEO-friendly, Retina-ready with sticky headers, and more
          at rates starting at $8 per hour.
        </p>
        <Button size="lg" variant="secondary">Contact Us</Button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center py-12 px-6">
        {[
          { value: "40%", label: "Cost Reduction" },
          { value: "8-24 Hrs", label: "Faster Turnaround" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "350+", label: "Skilled Experts" },
          { value: "99%", label: "Accuracy" },
          { value: "21", label: "Years Experience" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-100 rounded-2xl p-6 shadow">
            <h3 className="text-2xl font-bold text-indigo-600">{stat.value}</h3>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Sketch to HTML Conversion Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Sticky Header Conversion",
              desc: "Convert your header designs into sticky headers with pixel-perfect precision.",
            },
            {
              title: "Google Map Integration",
              desc: "Integrate Google Maps into your site with fast-loading HTML code.",
            },
            {
              title: "Retina Display Ready",
              desc: "Ensure your site looks sharp and perfect on modern high-resolution screens.",
            },
            {
              title: "Screen Reader Compatibility",
              desc: "Improve accessibility with semantic HTML for screen readers.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Sketch to HTML Conversion Process We Follow</h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          {[
            { step: "01. Scan and Upload", desc: "Client sends raw Sketch designs via secure FTP." },
            { step: "02. Download/Access Files", desc: "Files are checked for feasibility before conversion." },
            { step: "03. Conversion", desc: "Our experts convert Sketch designs into HTML with NDA compliance." },
            { step: "04. Quality Check", desc: "QA team tests accuracy and responsiveness of the output." },
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-indigo-600">{item.step}</h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Nimble Sketch to HTML Conversion Services to Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Pocket Friendly Rates",
            "100% Data Security (ISO/IEC 27001:2022)",
            "High-quality Conversion with QA",
            "Quick Turnaround Time",
            "ISO Certified Provider",
            "Scalable Services",
            "Experienced Professionals",
            "24/7 Support",
          ].map((reason, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <p className="text-gray-700">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto italic text-lg text-gray-700">
          “We were very satisfied with the quality of service Nimble Acuity provided. They were able to meet our requests with great professionalism and flexibility.”
        </blockquote>
        <p className="mt-4 font-semibold">— Spokesperson, Online Health Lessons Company (Canada)</p>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Nimble Sketch to HTML Conversion Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-8">
          We provide scalable, affordable, and high-quality Sketch to HTML conversion services
          tailored for businesses of all sizes. Contact us today and get a free quote within 24 hours.
        </p>
        <Button size="lg" variant="secondary">Contact Us</Button>
      </section>
    </div>
  );
};

export default SketchHtmlServices;