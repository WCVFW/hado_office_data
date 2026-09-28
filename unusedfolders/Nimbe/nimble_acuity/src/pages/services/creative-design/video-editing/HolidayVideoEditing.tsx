
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Scissors,
  Film,
  Music,
  Wand2,
  Layers,
  Video,
  PlaySquare,
  CheckCircle2,
  Clock,
  Users,
  Shield,
  DollarSign,
  Star,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const HolidayVideoEditing: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative bg-gradient-to-r from-pink-600 to-red-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Outsource Holiday Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Transform your vacation memories into stunning, cinematic videos with
          professional editing at affordable costs.
        </p>
        <Button size="lg" className="bg-white text-pink-600 font-semibold">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Holiday Video Editing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Scissors className="w-8 h-8 text-pink-600" />,
              title: "Video Editing",
              desc: "Cut, trim, and polish your raw vacation footage into engaging stories.",
            },
            {
              icon: <Wand2 className="w-8 h-8 text-pink-600" />,
              title: "Video Effects & Filters",
              desc: "Add transitions, filters, and enhancements for cinematic quality.",
            },
            {
              icon: <Film className="w-8 h-8 text-pink-600" />,
              title: "Multicam Editing",
              desc: "Sync and edit footage from multiple cameras for concerts and gigs.",
            },
            {
              icon: <Music className="w-8 h-8 text-pink-600" />,
              title: "Voiceovers & Music",
              desc: "Add narration, background scores, and sound effects.",
            },
            {
              icon: <Layers className="w-8 h-8 text-pink-600" />,
              title: "Color Correction",
              desc: "Fix exposure, contrast, white balance, and color grading.",
            },
            {
              icon: <Video className="w-8 h-8 text-pink-600" />,
              title: "Drone Video Editing",
              desc: "Turn raw drone shots into breathtaking travel montages.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center">
                {service.icon}
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Editing Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {[
            { step: "01", title: "Statement of Work" },
            { step: "02", title: "Input & Footage Transfer" },
            { step: "03", title: "Editing & Enhancement" },
            { step: "04", title: "Review & Edits" },
            { step: "05", title: "Approval & Delivery" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                {item.step}
              </div>
              <p className="mt-3 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Partner with Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-7 h-7 text-pink-600" />,
              title: "Quick Turnaround",
              desc: "Efficient workflows ensure on-time delivery.",
            },
            {
              icon: <DollarSign className="w-7 h-7 text-pink-600" />,
              title: "Affordable Pricing",
              desc: "Starts at just $10/hour with flexible models.",
            },
            {
              icon: <Users className="w-7 h-7 text-pink-600" />,
              title: "Talented Editors",
              desc: "Highly skilled editors capable of any request.",
            },
            {
              icon: <Shield className="w-7 h-7 text-pink-600" />,
              title: "Data Security",
              desc: "Strict GDPR compliance and NDAs for client safety.",
            },
            {
              icon: <CheckCircle2 className="w-7 h-7 text-pink-600" />,
              title: "Customized Solutions",
              desc: "Editing tailored to your footage and style.",
            },
            {
              icon: <Star className="w-7 h-7 text-pink-600" />,
              title: "24/6 Support",
              desc: "Dedicated support across global time zones.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center">
                {benefit.icon}
                <CardTitle className="mt-2">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
        <p className="mb-6">Avail best-in-class services starting at</p>
        <p className="text-4xl font-extrabold mb-6">$10/hour</p>
        <Button size="lg" className="bg-white text-pink-600 font-semibold">
          Request a Free Quote
        </Button>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Transform Your Holiday Memories?
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with our experts today and receive a free quote within 24
          hours.
        </p>
        <Button size="lg" className="bg-pink-600 text-white">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default HolidayVideoEditing;
