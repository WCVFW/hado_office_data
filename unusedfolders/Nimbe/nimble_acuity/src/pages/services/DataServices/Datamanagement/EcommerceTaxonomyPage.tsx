import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

export default function EcommerceTaxonomyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble E-commerce Taxonomy Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Make it easier for your customers to find products with user-friendly
          search results. Boost your eCommerce taxonomy at just{" "}
          <span className="font-semibold">$10/hour</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-lg text-gray-700">
          eCommerce taxonomy is a development service that helps you classify
          products into categories and subcategories hierarchically. The goal is
          to improve customer experience while simplifying product management
          for store owners.
        </p>
        <p className="text-lg text-gray-700">
          Product categorization provides consumers with quick navigation,
          leading to faster purchases. If you lack in-house resources, partnering
          with a professional provider like Nimble Auity ensures optimized
          taxonomy and seamless product organization.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          eCommerce Taxonomy Development Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Accurate Product Categorization",
              desc: "Categorizing products into relevant categories & subcategories with SKU-level precision for Amazon, eBay, and more.",
            },
            {
              title: "Optimize Your Taxonomy",
              desc: "Balancing product categories, fixing faulty categories, and ensuring customers find exactly what they need.",
            },
            {
              title: "eCommerce Product Taxonomy Development",
              desc: "Designing and revising site taxonomy, assigning accurate tags & categories for enhanced customer experience.",
            },
            {
              title: "Accurate & Speedy Search Results",
              desc: "Tagging and categorizing products to ensure efficient search visibility and quick product discovery.",
            },
            {
              title: "Better SEO Ranking",
              desc: "Optimized categories & subcategories with keyword integration to improve search engine rankings.",
            },
            {
              title: "Stratified Design",
              desc: "Logical site structure with easy navigation, enabling upselling, cross-selling, and third-party integration.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Development Services Process We Follow
        </h2>
        <ol className="space-y-6">
          {[
            "Requirement Analysis – Analyzing product catalog and performing site technology review.",
            "Gathering Information – Collecting metadata, conversions, definitions, and developing sample categories.",
            "Building the Taxonomy – Categorizing products, assigning keywords, and developing product attributes.",
            "Taxonomy Delivery – Delivering taxonomy portal, importing structure into system, and enabling product categorization.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <span className="text-indigo-600 font-bold text-xl">{`0${
                idx + 1
              }.`}</span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble for eCommerce Taxonomy Development?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Simplifying Customer Search – Multi-level classification with product tree taxonomy.",
            "Cost-Effective Services – Reduce effort & improve turnover with affordable solutions.",
            "Experienced Team – Multidisciplinary experts with deep domain knowledge.",
            "Data Security & ISO Certified – ISO/IEC 27001:2022 certified for highest security.",
            "Working with Leading Platforms – Magento, Shopify, BigCommerce, eBay, Amazon, and more.",
            "High Data Accuracy – 99% accuracy ensured through thorough validation.",
            "24/7 Customer Support – Dedicated experts available via email & chat.",
            "Dedicated Project Manager – Assigned manager for progress updates & support.",
            "Maintenance & Scalability – Ongoing updates as your product data grows.",
          ].map((reason, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-6">
                <p className="text-gray-700">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Working with Nimble has been a great experience. They quickly learned
          our business, adapted to requirements, and consistently performed
          well. A reliable partner that goes above and beyond.”
        </blockquote>
        <p className="mt-4 text-gray-600">
          – Spokesperson, Executive recruitment firm in the US
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble for E-commerce Taxonomy Development
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With years of experience and cutting-edge AI-powered taxonomy
          solutions, Nimble Auity ensures optimized navigation, improved SEO, and
          exceptional customer experience. Contact us now for a free quote.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full shadow-md hover:shadow-xl"
        >
          Get a Free Quote
        </Button>
      </section>
    </div>
  );
}
