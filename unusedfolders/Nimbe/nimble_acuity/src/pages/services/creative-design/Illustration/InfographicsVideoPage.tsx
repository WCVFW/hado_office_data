import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Layers, Clock, Shield, Users, Star } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const InfographicsVideoPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity – 2D Infographics Video Production Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Outsourcing 2D infographics video production services makes your part
          easier in marketing as we develop your script into an engaging video
          animation, at rates starting at <span className="font-semibold">$12/hour</span>.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold hover:bg-gray-100">
          Get a Free Quote
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-6 text-lg">
          Have you failed to try to educate your audience with technical PDF
          content? Sure, everyone feels disappointed when they can't seem to
          understand something important and necessary. This is where you need
          to outsource 2D infographic video production services to{" "}
          <strong>Nimble Auity</strong>. It’s one of the best ways to convert
          your sophisticated presentation into bite-sized content that people
          are more receptive to.
        </p>
        <p className="text-lg">
          Nimble Auity is a leading 2D Infographics video production service
          provider with <strong>26+ years of experience</strong> in coaching how
          animated infographic video enhances your digital marketing campaigns.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          2D Infographics Video Production Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Infographic Explainer Videos for B2B Marketing",
              desc: "We create explainer videos tailored to your brand vision, test them, and deliver engaging outputs.",
            },
            {
              title: "2D Animated Infographic Videos for Social Media",
              desc: "We simplify data-heavy reports and blogs into engaging animated infographic videos for social platforms.",
            },
            {
              title: "Infographic Motion Graphics for Technology Startup",
              desc: "We humanize your product story with frame-by-frame motion graphics and clean infographic designs.",
            },
            {
              title: "Animated Infographic Videos for Brand Awareness",
              desc: "We use mixed media and stats-driven animations to maximize your audience’s attention.",
            },
            {
              title: "Infographic Motion Graphics for Banking Campaign",
              desc: "We create visually rich infographics for banking & finance campaigns at cost-effective rates.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          2D Infographics Video Production Process We Follow
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            { step: "01. Understanding Needs" },
            { step: "02. Planning Phase" },
            { step: "03. Modeling" },
            { step: "04. Quality Check" },
            { step: "05. Delivery" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-lg bg-white"
            >
              <h4 className="font-semibold">{item.step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Layers />, text: "Flexible Pricing Solutions" },
            { icon: <Shield />, text: "100% Secure Data" },
            { icon: <Star />, text: "ISO Certified Provider" },
            { icon: <Users />, text: "Professional Team" },
            { icon: <Clock />, text: "Quick Turnaround" },
            { icon: <PlayCircle />, text: "Cutting-edge Technology" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-6 border rounded-lg bg-white shadow hover:shadow-lg"
            >
              <div className="text-indigo-600 text-3xl">{benefit.icon}</div>
              <p className="font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Nimble Auity Provided Prepress & Vector Artwork to a Dublin-based Client
              </h3>
              <p className="text-gray-600">
                A Dublin-based creative services firm required accurate and
                high-quality prepress and vector artwork. We delivered services
                on time at cost-effective rates.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">
                Nimble Auity Delivered Unique Vector Artwork for a US-based Designer
              </h3>
              <p className="text-gray-600">
                A leading American designer required flawless vector artwork
                services. We provided them with world-class designs that
                exceeded expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center text-lg italic text-gray-700">
          “The quality of artwork delivered during the trial period was exceptional
          and that helped us to decide on our new Outsourced Partner from a couple
          of quotes from companies across the globe.”
          <br />
          <span className="block mt-4 font-semibold">
            Director - Operations, Leading pharmaceutical company in the Netherlands
          </span>
        </blockquote>
      </section>

      {/* Contact CTA */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch with Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          When it comes to 2D infographics video production we're the elite
          choice for your needs. Partner with Nimble Auity to turn your ideas
          into convincing results.
        </p>
        <Button size="lg" className="bg-white text-indigo-600 font-semibold hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default InfographicsVideoPage;
