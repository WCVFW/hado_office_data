
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function MP4VideoEditingPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Outsource MP4 Video Editing Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Deliver high-quality MP4 videos with our professional editing services. From
          basic edits to advanced effects and stabilization, we help you present
          videos with clarity and consistency.
        </p>
        <div className="mt-6">
          <Button size="lg">Get a Free Quote</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our MP4 Video Editing Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Basic MP4 Video Editing",
              desc: "Merging, sequencing, and removing unwanted content for a polished video."
            },
            {
              title: "MP4 Video Effects & Transitions",
              desc: "Creative effects, zooming, tilting, animations, and voice-overs."
            },
            {
              title: "MP4 Video Stabilization",
              desc: "Remove shakes and movements for smooth, professional footage."
            },
            {
              title: "MP4 Audio Integration",
              desc: "Add background music, reduce noise, and master dialogues."
            },
            {
              title: "MP4 Video Subtitling",
              desc: "Accurate subtitling with support for multiple languages."
            }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Benefits of Using the MP4 Format</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Easy video sharing via email and storage.",
            "Supports seamless internet streaming.",
            "Backwards compatibility with MPEG and MP3.",
            "Widely supported across devices and players.",
            "Maintains high video quality even after compression.",
            "Ability to store multiple data types in a single file."
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Experienced editors skilled with MP4 tools like iMovie, Lightworks, VSDC, and more.",
            "98% accuracy and strict ISO guidelines for quality delivery.",
            "Quick turnaround times with competitive pricing options.",
            "Stringent security protocols to safeguard your data.",
            "Customized editing solutions to suit your exact needs."
          ].map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-500 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gray-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-2xl font-bold mb-4">Hire the Best MP4 Video Editors</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          With over 26+ years of expertise, our team ensures your MP4 videos maintain
          top-notch quality while meeting deadlines. Outsource to us for reliable,
          scalable, and secure editing solutions.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
}