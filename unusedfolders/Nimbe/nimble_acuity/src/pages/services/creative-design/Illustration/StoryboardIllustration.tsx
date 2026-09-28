import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const StoryboardIllustration: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Storyboard Illustration Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Access high-quality storyboard illustration services from a highly-experienced team of illustrators and designers, starting at <b>$10/hour</b>.
        </p>
        <Button className="mt-6 bg-white text-purple-700 hover:bg-purple-200">
          Contact Us
        </Button>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Looking for professional storyboard illustration services to bring your video concepts to life? Nimble Auity’s expert illustrators create detailed storyboards that eliminate errors, spark creativity, and accurately visualize your ideas for any project.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Storyboard Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Concept Panel Creation", desc: "Stunning concept panels to help directors and cinematographers visualize ideas with realistic renderings." },
            { title: "Digimatics", desc: "Replace sketches with digital content to plan and adjust video elements efficiently." },
            { title: "Thumbnail Sketch Creation", desc: "Cost-effective, rough storyboards for early-stage project planning." },
            { title: "Black and White Storyboards", desc: "Detailed grayscale storyboards for commercial or animatic pitch purposes." },
            { title: "Color Storyboards", desc: "Colorful storyboards that enhance panel details for commercial spots or treatment pitches." },
            { title: "Continuity Boards", desc: "Ensure consistency of poses, camera angles, and essential details for each shot." },
            { title: "Creative Storyboard Services", desc: "Advanced storyboards created from abstract ideas using skilled designers and software." }
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

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity for Storyboard Illustration?
        </h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-gray-700">
          <li>Affordable and flexible pricing options</li>
          <li>Experienced storyboard illustration team</li>
          <li>High-quality illustrations with ISO standards</li>
          <li>Creative and tailored solutions for your requirements</li>
          <li>Data security with ISO/IEC 27001:2022 compliance</li>
          <li>Near 100% SLA adherence on all projects</li>
          <li>Multi-level quality checks for flawless output</li>
          <li>Short turnaround times for timely delivery</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Client Case Studies</h2>
        <div className="space-y-6">
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Provided Illustration Services for Apparel Manufacturer
              </h3>
              <p className="text-sm text-gray-600">
                Paris-based men's apparel manufacturer received 200 storyboard illustrations, delivering four images per day in EPS & PDF formats. Resulted in 60% cost savings.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Nimble Delivered Illustrations for Denmark-based Writer
              </h3>
              <p className="text-sm text-gray-600">
                Denmark-based writer needed high-quality storyboards for a new children's book. Nimble delivered highly-affordable and visually impressive illustrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-purple-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto italic text-lg text-gray-700">
          “Congratulations to the team at Nimble Auity for a splendid job. I heartily recommend their services!”
        </blockquote>
        <p className="mt-4 font-semibold">CMO, Leading Medical Care Company, Seattle, WA</p>
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Visualize Your Story?
        </h2>
        <p className="mb-6">
          Nimble Auity’s storyboard illustrators deliver creative, accurate, and professional visuals to bring your project to life.
        </p>
        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Get Started Today
        </Button>
      </div>
    </section>
  );
};

export default StoryboardIllustration;
