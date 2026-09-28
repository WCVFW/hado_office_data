
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Film, Scissors, Crop, Clock, ShieldCheck, Cpu, Globe, CheckCircle2 } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function EdiusServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <CSmainmenu/>
      <header className="bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional EDIUS Video Editing Services
          </motion.h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg opacity-90">
            High-resolution workflows (4K / 8K), real-time editing and multi-format
            support handled by EDIUS experts — throughput and quality you can rely on.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="rounded-2xl">Get a Free Quote</Button>
            <Button variant="ghost" className="rounded-2xl">View Samples</Button>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Custom EDIUS Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Film className="w-6 h-6 text-emerald-500" />
              <CardTitle className="mt-2">Vlog Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Engaging vlog edits optimized for audience retention and social sharing — color, grading, trims and creative cuts.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="mt-2">Drone Video Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Stabilization, color matching and cinematic grading for aerial footage, leveraging EDIUS' real-time tools.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Scissors className="w-6 h-6 text-emerald-500" />
              <CardTitle className="mt-2">Trimming & Tight Edits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Precise trims and multi-cam edits to keep narratives crisp and viewer-focused.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Crop className="w-6 h-6 text-emerald-500" />
              <CardTitle className="mt-2">Cropping & Reframing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Reframe footage for different aspect ratios and platforms without losing visual intent.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <Cpu className="w-6 h-6 text-emerald-500" />
              <CardTitle className="mt-2">High-Res Workflows (4K / 8K)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Optimized timelines and proxy workflows to handle heavy raw footage while keeping turnaround fast.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow hover:shadow-lg transition">
            <CardHeader>
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              <CardTitle className="mt-2">Format & Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Export to any format required — broadcast standards, web, social or client-specific packages.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Our EDIUS Editing Workflow</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">01</div>
              <h4 className="font-semibold mt-2">Setting Up the Project</h4>
              <p className="text-sm text-slate-700 mt-1">Create a dedicated EDIUS project with the right codec, frame settings and bins.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">02</div>
              <h4 className="font-semibold mt-2">Importing Media</h4>
              <p className="text-sm text-slate-700 mt-1">Securely ingest and organize your raw files with metadata and backup policy.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">03</div>
              <h4 className="font-semibold mt-2">Organizing Timeline</h4>
              <p className="text-sm text-slate-700 mt-1">Structure multi-cam and B-roll for a readable, efficient timeline.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">04</div>
              <h4 className="font-semibold mt-2">Post-Production</h4>
              <p className="text-sm text-slate-700 mt-1">Color grading, effects, audio sweetening and motion graphics as required.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">05</div>
              <h4 className="font-semibold mt-2">Preview & Adjustments</h4>
              <p className="text-sm text-slate-700 mt-1">Client previews, notes capture and iterative refinements until sign-off.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl shadow">
              <div className="text-emerald-600 font-bold text-xl">06</div>
              <h4 className="font-semibold mt-2">Render & Deliver</h4>
              <p className="text-sm text-slate-700 mt-1">Final render, QC checks and multi-format delivery with checksums and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Travel", "Sports", "Healthcare", "Real Estate", "Media", "Events", "Education", "Advertising"].map((i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white shadow text-sm">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Our EDIUS Team</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-emerald-500 mt-1"/>Secure project infrastructure</li>
              <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-emerald-500 mt-1"/>EDIUS proficiency & optimized workflows</li>
              <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-emerald-500 mt-1"/>Accelerated delivery & proxy workflows</li>
              <li className="flex items-start gap-3"><Globe className="w-5 h-5 text-emerald-500 mt-1"/>Multi-format compatibility & delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Add-on Services</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Graphic Design",
                "3D Design",
                "Audio Editing",
                "Animation",
                "Subtitling & Localization",
                "Mastering & Delivery"
              ].map((s) => (
                <Card key={s} className="p-3">
                  <CardContent className="text-sm">{s}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq1">
            <AccordionTrigger>Can you handle 8K footage?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-700">Yes — we support 4K & 8K workflows and use proxy timelines to keep editing responsive.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq2">
            <AccordionTrigger>Do you provide sample edits?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-700">Yes — we can provide quick sample cuts to demonstrate our workflow and quality.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
          <h4 className="text-xl font-bold text-center mb-4">Get a FREE QUOTE — Decide in 24 hours</h4>
          <form className="grid gap-4">
            <Input placeholder="Name*" required />
            <Input type="email" placeholder="Email*" required />
            <Input placeholder="Phone*" required />
            <Textarea placeholder="Enter project details*" required />
            <div className="flex gap-3">
              <Button className="flex-1 rounded-2xl">Submit</Button>
              <Button variant="ghost" className="rounded-2xl">Email: info***@outsource2india.com</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto"> 
          <p>© {new Date().getFullYear()} Outsource2india — EDIUS Video Editing Services.</p>
        </div>
      </footer>
    </div>
  );
}
