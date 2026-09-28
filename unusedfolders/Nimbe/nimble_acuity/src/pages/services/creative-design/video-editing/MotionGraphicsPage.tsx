
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Film,
  PenTool,
  Layers,
  Type,
  Sparkles,
  Box,
  MonitorPlay,
  Users,
  CheckCircle2,
  Clock,
  Shield,
  DollarSign,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const MotionGraphicsPage: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Outsource Motion Graphics Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Get access to high-quality, creative, and engaging motion graphics at
          prices starting at <span className="font-bold">$10/hour</span>.
        </p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold">
          Get a Free Quote
        </Button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Motion Graphics Services We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <MonitorPlay className="w-8 h-8 text-purple-700" />,
              title: "Motion Graphics",
              desc: "Engaging visuals, typography, and plain motion graphics synced with audio.",
            },
            {
              icon: <Layers className="w-8 h-8 text-purple-700" />,
              title: "Infographics",
              desc: "Compelling 2D/3D visuals with text, music, and narration to inspire audiences.",
            },
            {
              icon: <Type className="w-8 h-8 text-purple-700" />,
              title: "Typography",
              desc: "Typographic animations for maximum readability, character, and impact.",
            },
            {
              icon: <Sparkles className="w-8 h-8 text-purple-700" />,
              title: "Special Effects",
              desc: "Advanced 3D animation and effects for cinematic quality.",
            },
            {
              icon: <Box className="w-8 h-8 text-purple-700" />,
              title: "3D Animation",
              desc: "Use 3D models and animation to visualize concepts and products effectively.",
            },
            {
              icon: <PenTool className="w-8 h-8 text-purple-700" />,
              title: "Product Modeling",
              desc: "Photorealistic 3D product models for powerful presentations.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
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

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Motion Graphics Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {[
            "Comprehend Need",
            "Rough Animatics",
            "Approve Animatics",
            "Execute Graphics",
            "Render Final Output",
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <p className="mt-3 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Outsource Motion Graphics to O2I?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <DollarSign className="w-7 h-7 text-purple-700" />,
              title: "Competitive Pricing",
              desc: "Flexible packages tailored for every budget.",
            },
            {
              icon: <Users className="w-7 h-7 text-purple-700" />,
              title: "Creative Team",
              desc: "Artists from diverse creative backgrounds delivering stunning results.",
            },
            {
              icon: <CheckCircle2 className="w-7 h-7 text-purple-700" />,
              title: "End-to-End Focus",
              desc: "Close collaboration with clients from concept to delivery.",
            },
            {
              icon: <Sparkles className="w-7 h-7 text-purple-700" />,
              title: "Eye for Detail",
              desc: "Storyboards crafted with precision before execution.",
            },
            {
              icon: <Clock className="w-7 h-7 text-purple-700" />,
              title: "Precise Scheduling",
              desc: "Timely delivery with regular updates and overnight delivery options.",
            },
            {
              icon: <Shield className="w-7 h-7 text-purple-700" />,
              title: "Secure Environment",
              desc: "Stringent data security, privacy, and quality control protocols.",
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

      {/* Case Studies */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Success Stories</h2>
        <p className="text-gray-600 mb-8">
          Discover how we’ve delivered value to global clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>
                Prepress & Vector Artwork for Dublin-based Client
              </CardTitle>
            </CardHeader>
            <CardContent>
              Delivered high-quality prepress and vector artwork quickly and
              reliably.
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle>
                Live Video Editing for Swedish Film Production House
              </CardTitle>
            </CardHeader>
            <CardContent>
              Cost-effective live video editing services delivered with fast
              turnaround.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
        <p className="mb-6">Avail world-class services starting at</p>
        <p className="text-4xl font-extrabold mb-6">$10/hour</p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold">
          Request a Free Quote
        </Button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="italic text-lg text-gray-700">
          “Thanks for your quick turnaround time and attention to detail. Our
          Australian ad agency greatly appreciates your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold">– CEO, Digital Marketing Agency</p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Elevate Your Brand with Motion Graphics
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today and receive a free quote within 24 hours.
        </p>
        <Button size="lg" className="bg-purple-700 text-white">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default MotionGraphicsPage;
