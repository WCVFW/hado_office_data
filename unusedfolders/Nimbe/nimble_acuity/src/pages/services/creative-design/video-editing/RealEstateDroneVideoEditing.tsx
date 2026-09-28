
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Scissors,
  Wand2,
  Video,
  Layers,
  Music,
  CheckCircle2,
  Clock,
  Users,
  Shield,
  DollarSign,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const RealEstateDroneVideoEditing: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Outsource Real Estate Drone Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Transform raw aerial footage into stunning real estate videos that
          captivate buyers and accelerate property sales.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Real Estate Drone Video Editing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers className="w-8 h-8 text-blue-700" />,
              title: "Shot Sequencing",
              desc: "Arrange drone shots into compelling, well-timed video stories.",
            },
            {
              icon: <Scissors className="w-8 h-8 text-blue-700" />,
              title: "Footage Cleanup",
              desc: "Remove extra minutes, unclear, or unwanted drone footage.",
            },
            {
              icon: <Video className="w-8 h-8 text-blue-700" />,
              title: "Aerial Stabilization",
              desc: "Fix shaky drone videography to ensure smooth, clear visuals.",
            },
            {
              icon: <Music className="w-8 h-8 text-blue-700" />,
              title: "Noise Removal",
              desc: "Remove unwanted wind, traffic, or background drone noises.",
            },
            {
              icon: <Wand2 className="w-8 h-8 text-blue-700" />,
              title: "Color Correction",
              desc: "Adjust color, contrast, and brightness to showcase properties beautifully.",
            },
            {
              icon: <Camera className="w-8 h-8 text-blue-700" />,
              title: "Special Effects",
              desc: "Add titles, music, subtitles, and cinematic transitions.",
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
            { step: "01", title: "Customer Briefing" },
            { step: "02", title: "File Upload" },
            { step: "03", title: "Editing & Enhancement" },
            { step: "04", title: "Customer Approval" },
            { step: "05", title: "Final Output Delivery" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
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
          Why Choose Our Drone Video Editing?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <CheckCircle2 className="w-7 h-7 text-blue-700" />,
              title: "Quality Checks",
              desc: "99% SLA adherence and ISO-compliant quality processes.",
            },
            {
              icon: <Clock className="w-7 h-7 text-blue-700" />,
              title: "Swift Turnaround",
              desc: "Timely delivery based on project scope and complexity.",
            },
            {
              icon: <Users className="w-7 h-7 text-blue-700" />,
              title: "Expert Editors",
              desc: "Skilled professionals with extensive real estate experience.",
            },
            {
              icon: <Shield className="w-7 h-7 text-blue-700" />,
              title: "Data Security",
              desc: "GDPR compliance, NDAs, and strict confidentiality protocols.",
            },
            {
              icon: <DollarSign className="w-7 h-7 text-blue-700" />,
              title: "Affordable Pricing",
              desc: "Hourly, project-based, and FTE pricing to fit all budgets.",
            },
            {
              icon: <Camera className="w-7 h-7 text-blue-700" />,
              title: "Latest Tools",
              desc: "Adobe Premiere Pro, Edius Pro, Final Cut Pro X & more.",
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
      <section className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Affordable Pricing</h2>
        <p className="mb-6">Avail best-in-class services starting at</p>
        <p className="text-4xl font-extrabold mb-6">$10/hour</p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold">
          Request a Free Quote
        </Button>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Elevate Your Real Estate Listings?
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with our experts today and receive a free quote within 24
          hours.
        </p>
        <Button size="lg" className="bg-blue-700 text-white">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default RealEstateDroneVideoEditing;
