import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const SkuDataEntryPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nimble SKU Data Entry Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Streamline your eCommerce inventory with our professional SKU data
            entry experts – starting at just <span className="font-semibold">$6/hour</span>.
          </p>
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          SKU Data Entry Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "SKU Database Data Entry",
              desc: "Edit, add, delete, and update SKU identifiers while enhancing searchability with product descriptions.",
            },
            {
              title: "Data Mining of SKU",
              desc: "Deep-dive data collection from multiple internal and external sources to enrich your SKU database.",
            },
            {
              title: "Product Segmentation",
              desc: "Create logical brand/product tree structures with filters, keywords, and descriptions.",
            },
            {
              title: "Inventory Management",
              desc: "Keep SKU databases updated to prevent shortages or overstocking with accurate layouts and fields.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our SKU Data Entry Process
          </h2>
          <ol className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {[
              "Scan & Upload",
              "Download & Evaluate",
              "Data Entry (OCR/Tools)",
              "Index, Sort & Organize",
              "Quality Check",
            ].map((step, idx) => (
              <li
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-700 mb-3">
                  {idx + 1}
                </div>
                <p className="font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Pocket-Friendly Rates",
            "100% Data Security (ISO/IEC 27001:2022)",
            "Multiple Data Format Support",
            "High-Quality, Enriched Data",
            "Quick Turnaround Time",
            "ISO 9001:2015 Certified Provider",
            "Scalable Services",
            "Experienced SKU Professionals",
            "24/7 Global Support",
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-4 text-center font-medium">
                {point}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <blockquote className="italic text-lg text-gray-700">
            “We were very satisfied with the quality of service Nimble Acuity
            provided. They met our requests with great professionalism and
            flexibility. We look forward to future projects with them.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-800">
            – Spokesperson, Online Health Lessons Company (Canada)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your SKU Database?
        </h2>
        <p className="text-lg mb-8">
          Contact us today to Nimble SKU Data Entry and get a free quote
          within 24 hours.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default SkuDataEntryPage;
