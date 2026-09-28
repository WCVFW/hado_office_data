
	import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Carousel } from "@/components/ui/carousel"; // hypothetical - replace with your carousel
import { Home,  Sliders, Music, CheckCircle2, Globe, Clock } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function Video360Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <CSmainmenu/>
      <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            360° Video Editing Services
          </motion.h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            Immersive, stabilized and studio-grade 360° edits that help your
            audience dive into the experience — ideal for marketing, events,
            virtual tours and more.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="rounded-2xl">Get a Free Quote</Button>
            <Button variant="ghost" className="rounded-2xl">View Samples</Button>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our 360° Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Home className="w-6 h-6 text-violet-600" />
              <CardTitle className="mt-2">Basic 360 Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Clipping, merging, sequencing and format standardization to make your 360 footage ready for distribution.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>

              <CardTitle className="mt-2">Effects & Transitions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Voiceovers, creative tilts, zooms, animated overlays and special effects designed specifically for spherical media.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Sliders className="w-6 h-6 text-violet-600" />
              <CardTitle className="mt-2">Stabilization & Repair</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Advanced stabilization to remove shake, defective pixel correction and frame-level repairs to keep video quality pristine.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Music className="w-6 h-6 text-violet-600" />
              <CardTitle className="mt-2">Sound Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Background score, ambience mapping, dialog mastering and noise reduction to make the 360 experience immersive.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Globe className="w-6 h-6 text-violet-600" />
              <CardTitle className="mt-2">Subtitling & Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Accurate subtitle timing and translations in multiple languages for global distribution.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <CheckCircle2 className="w-6 h-6 text-violet-600" />
              <CardTitle className="mt-2">Delivery & Formats</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">We deliver in any required spherical/video format — web, mobile, social or platform-specific packages.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools Carousel */}
      <section className="py-12 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">Tools & Technologies We Use</h3>
          <div className="max-w-4xl mx-auto">
            {/* NOTE: replace Carousel with your project's carousel component */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center">
              {["Adobe Premiere", "Filmora", "Blender", "HitFilm", "Lightworks", "VSDC"].map((t) => (
                <div key={t} className="p-4 bg-slate-50 rounded-lg text-center shadow-sm">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose O2I for 360° Editing</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-emerald-500 mt-1"/>Quick Turnaround & Multiple delivery centers</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1"/>Affordable pricing & customizable packages</li>
              <li className="flex items-start gap-3"><Globe className="w-5 h-5 text-emerald-500 mt-1"/>Data security & confidentiality agreements</li>
              <li className="flex items-start gap-3"><Home className="w-5 h-5 text-emerald-500 mt-1"/>26+ years of industry experience & scalable teams</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Who we serve</h3>
            <p className="text-slate-700 mb-4">Brands, event organisers, real estate, tourism boards, training & e-learning producers and VR studios — anyone building immersive experiences.</p>

            <div className="grid grid-cols-2 gap-3">
              {["Real Estate", "Events", "Tours", "Education", "VR", "Marketing"].map((s) => (
                <span key={s} className="px-3 py-2 bg-white rounded-xl shadow text-sm text-slate-800">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-bold text-center mb-4">Ready to start your 360° project?</h3>
          <form className="grid gap-4">
            <Input placeholder="Name*" required />
            <Input type="email" placeholder="Email*" required />
            <Input placeholder="Phone*" required />
            <Textarea placeholder="Briefly describe your project*" required />
            <div className="flex gap-3">
              <Button className="flex-1 rounded-2xl">Submit</Button>
              <Button variant="outline" className="rounded-2xl">Contact: info***@outsource2india.com</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto"> 
          <p>© {new Date().getFullYear()} Outsource2india — 360° Video Editing & immersive production services.</p>
        </div>
      </footer>
    </div>
  );
}
