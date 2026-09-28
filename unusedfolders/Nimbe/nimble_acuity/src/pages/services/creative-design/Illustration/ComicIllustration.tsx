import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const ComicIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Comic Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Create high-quality and artistic comic illustrations starting from only <b>$10/hour</b>. 
          Bring your stories to life with Nimble Auity’s expert illustrators.
        </p>
        <Button className="mt-6 bg-white text-purple-700 hover:bg-purple-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Are you looking for artistic illustrations to make your comic stories more presentable? 
          Nimble Auity has been a trusted partner for over 21 years, helping global clients 
          with comic illustrations tailored to children, youth, young adults, and experienced audiences.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Comic Illustration Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Comic Book Illustration Services",
              desc: "Compelling illustrations for strips, pages, or full comics designed with the latest tools."
            },
            {
              title: "Book Cover Illustration",
              desc: "Eye-catching book covers that increase reader interest and sales."
            },
            {
              title: "Cartoon Illustration Services",
              desc: "Exclusive and innovative cartoons created to wow your audience."
            },
            {
              title: "Comic Storyboard Illustration",
              desc: "Storyboarding services with detailed illustrations in color or black & white."
            },
            {
              title: "Comic Illustrations for Brands",
              desc: "Mascots and brand illustrations that strengthen audience connection."
            },
            {
              title: "Comic Illustrations for Products",
              desc: "Product illustrations that enhance engagement and boost sales."
            },
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Comic Illustration Process</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            { step: "Comprehension", desc: "Understanding client requirements, elements, and script." },
            { step: "Illustration", desc: "Creating rough sketches to illustrate the storyboard." },
            { step: "Authorization", desc: "Sharing sketches for client feedback and review." },
            { step: "Execution", desc: "Final drawings are created and refined with feedback." },
            { step: "Finalization", desc: "Delivering polished, high-quality illustrations securely." }
          ].map((item, i) => (
            <AccordionItem key={i} value={`step-${i}`}>
              <AccordionTrigger>{item.step}</AccordionTrigger>
              <AccordionContent>{item.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity for Comic Illustration?
        </h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Cost-effective pricing for all budgets</li>
          <li>Use of the latest design tools (Adobe, Corel, etc.)</li>
          <li>Quick turnaround times</li>
          <li>Support for multiple formats (TIFF, PNG, JPEG, GIF)</li>
          <li>Style guide for consistent design</li>
          <li>Collaborative work with publishers and authors</li>
          <li>Strict quality control checks</li>
          <li>Experienced and creative team</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Illustrate Your Comic?
        </h2>
        <p className="mb-6">
          Nimble Auity’s illustrators deliver creative, engaging, and professional illustrations 
          that connect with your audience instantly.
        </p>
        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default ComicIllustration;
