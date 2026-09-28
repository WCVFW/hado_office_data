
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Film, Music, Scissors, PenTool, CheckCircle2 } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function FilmServicesPage() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Outsource Film & Storyboarding Services
        </motion.h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          At Outsource2india (O2I), we provide Storyboarding, Video Editing,
          Animation, and Music Composition services to bring your creative
          vision to life.
        </p>
        <Button size="lg" className="rounded-2xl shadow-lg">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardHeader>
              <Film className="w-10 h-10 text-indigo-600 mb-2" />
              <CardTitle>Storyboarding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Plan your video project shot-by-shot with detailed sketches,
                audio mapping, and timing. Visualize your film before it’s even
                made.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardHeader>
              <Scissors className="w-10 h-10 text-indigo-600 mb-2" />
              <CardTitle>Video Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our experts use Adobe Premiere, Avid, Final Cut Pro & Edius Pro
                to deliver professional, high-quality edits tailored to your
                project.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardHeader>
              <Music className="w-10 h-10 text-indigo-600 mb-2" />
              <CardTitle>Music Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                From jingles to full soundtracks, our talented composers create
                music in any style – modern, classical, or fusion – to match
                your vision.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O2I Advantages */}
      <section className="bg-white py-16 px-6 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">
          Leverage the O2I Advantage
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Save big on operating costs",
            "Focus on core business activities",
            "Professional film experts & composers",
            "ISO quality standard delivery",
            "Increase sales & business value",
            "Quick turnaround time"
          ].map((adv, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              <p>{adv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Trusted by Leading Clients
        </h2>
        <div className="flex flex-wrap justify-center gap-6 opacity-80">
          {["Alcon", "ARI", "Yale", "Medversant", "Loomis", "Maximus"].map(
            (client, i) => (
              <span
                key={i}
                className="text-lg font-semibold bg-white px-6 py-3 rounded-xl shadow"
              >
                {client}
              </span>
            )
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
          <p className="text-gray-700">
            Decide in 24 hours whether outsourcing will work for you.
          </p>
        </div>
        <form className="max-w-3xl mx-auto grid gap-6">
          <Input placeholder="Name*" required />
          <Input type="email" placeholder="Email*" required />
          <Input type="tel" placeholder="Phone*" required />
          <Textarea placeholder="Enter your requirements*" required />
          <Button size="lg" className="w-full rounded-2xl">
            Submit
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Outsource2india (Flatworld Solutions).
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
