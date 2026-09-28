
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layers,
  Video,
  Film,
  Wand2,
  Users,
  DollarSign,
  CheckCircle2,
  Clock,
  Headphones,
  Shield,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function VideoCompositingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Video Compositing Services
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Transform your raw footage into stunning composites with professional
          editing. O2I delivers top-quality results at affordable prices.
        </p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Get a Free Quote
        </Button>
      </section>

      {/* What is Compositing */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What is Compositing?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          Video compositing is the art of layering multiple images or videos to
          create a unified visual experience. From weather forecasts to
          Hollywood blockbusters, compositing brings imagination to life with
          green screen, keying, and special effects.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Video Compositing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Video, title: "Video Editing" },
            { icon: Wand2, title: "Video Correction" },
            { icon: Film, title: "Video Synchronization" },
            { icon: Users, title: "Audio Sync & Correction" },
            { icon: Layers, title: "Channel Copy" },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="flex flex-col items-center text-center p-6">
                <item.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it's Done */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          How is Video Compositing Done?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Using green or blue screens, uniform lighting, and advanced keying
          techniques, our experts replace backgrounds and seamlessly merge
          visuals to deliver flawless composites.
        </p>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Benefits of Outsourcing to O2I
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: DollarSign, text: "Competitive Pricing" },
            { icon: CheckCircle2, text: "High Quality Output" },
            { icon: Users, text: "Dedicated Experts" },
            { icon: Clock, text: "Short Turnaround Times" },
            { icon: Headphones, text: "24/7 Support" },
            { icon: Shield, text: "Secure & Confidential" },
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-sm">
              <CardContent className="flex flex-col items-center text-center p-6">
                <benefit.icon className="h-10 w-10 text-purple-600 mb-4" />
                <p className="text-gray-700">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
        <p className="text-lg text-gray-600 mb-6">
          Starts at just <span className="font-semibold">$10/hour</span>.
        </p>
        <Button size="lg" className="bg-indigo-700 text-white">
          Request Pricing
        </Button>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-700 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Elevate Your Videos?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Let O2I handle your video compositing needs with precision, creativity
          and speed. Contact us today for a free consultation.
        </p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
