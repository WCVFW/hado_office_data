import React from "react";
import {
  User,
  PenTool,
  Smile,
  BookOpen,
  Share2,
  Layers,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const CharacterIllustration: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="relative bg-gradient-to-r from-pink-600 to-red-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Character Illustration Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Create relatable characters that connect with your audience across
          social streams, publications, and campaigns – starting at just{" "}
          <span className="font-semibold">$12/hour</span>.
        </p>
        <Button
          size="lg"
          className="bg-white text-pink-600 hover:bg-gray-200 transition"
        >
          Get Started
        </Button>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Character Illustration Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <User className="w-10 h-10 text-pink-600" />,
              title: "Purpose-driven Character Illustration",
              desc: "Custom illustrations aligned with your campaign or brand objectives.",
            },
            {
              icon: <PenTool className="w-10 h-10 text-pink-600" />,
              title: "Hand-drawn Illustrations",
              desc: "Charcoal, pen, and pencil sketches for raw, authentic visuals.",
            },
            {
              icon: <Smile className="w-10 h-10 text-pink-600" />,
              title: "Mascot Illustrations",
              desc: "Expressive mascots that reflect your vision and resonate with audiences.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-pink-600" />,
              title: "Anatomical & Educational Characters",
              desc: "Detailed anatomical and educational illustrations for clarity and learning.",
            },
            {
              icon: <Share2 className="w-10 h-10 text-pink-600" />,
              title: "Social Media Characters",
              desc: "Unique characters to build personal connections online.",
            },
            {
              icon: <Layers className="w-10 h-10 text-pink-600" />,
              title: "Multiple Character Series",
              desc: "Illustrations that interact and tell immersive brand stories.",
            },
            {
              icon: <ClipboardCheck className="w-10 h-10 text-pink-600" />,
              title: "Prototyping for Comics",
              desc: "Bring comic book ideas to life with professional prototyping.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Illustration Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "01. Scope",
              desc: "Understanding your business needs and project goals.",
            },
            {
              step: "02. Design",
              desc: "Developing characters that match your brand vision.",
            },
            {
              step: "03. Quality Assurance",
              desc: "Ensuring illustrations meet quality and style standards.",
            },
            {
              step: "04. Delivery",
              desc: "Secure transfer of final high-resolution files.",
            },
          ].map((p, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">
                {p.step.split(".")[0]}
              </div>
              <div>
                <h4 className="font-semibold">{p.step}</h4>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industries We Serve
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            "Advertising Agencies",
            "Medical Agencies",
            "Magazines & Newspapers",
            "Event Management Companies",
            "Children’s Book Publishers",
            "Scientific Communities",
            "Pharmaceutical Companies",
          ].map((industry, i) => (
            <Card key={i} className="shadow rounded-xl">
              <CardContent className="p-6 font-medium text-gray-700">
                {industry}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Cost-effective Pricing",
            "Original, Unique Illustrations",
            "ISO-certified Quality Standards",
            "Experienced & Skilled Illustrators",
            "World-class Infrastructure",
            "Latest Tools & Technologies",
            "Quick Turnaround Time",
            "Scalability for Bulk Projects",
            "Strong Data Security",
          ].map((reason, i) => (
            <Card key={i} className="shadow rounded-xl">
              <CardContent className="p-6">
                <p className="font-medium text-gray-700">{reason}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Case Studies
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Nimble Auity Provided Prepress & Vector Artwork to a Dublin-based
                Client
              </h3>
              <p className="text-gray-600 text-sm">
                Delivered accurate and high-quality vector artwork within
                deadlines, exceeding expectations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Nimble Auity Delivered Vector Artwork to US-based Label Designer
              </h3>
              <p className="text-gray-600 text-sm">
                Provided flawless, unique vector artwork solutions that delighted
                the client.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700">
          "The quality of artwork delivered during the trial was exceptional.
          That helped us decide on Nimble Auity as our trusted partner."
        </blockquote>
        <p className="mt-4 font-medium">
          — Director of Operations, Leading Pharmaceutical Company, Netherlands
        </p>
      </div>

      {/* CTA */}
      <div className="bg-pink-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Character Illustration Services to Nimble Auity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Whether you are a start-up or a Fortune 500, we deliver quality
          character illustrations on time, every time. Let’s bring your ideas to
          life.
        </p>
        <Button
          size="lg"
          className="bg-white text-pink-600 hover:bg-gray-200 transition"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CharacterIllustration;
