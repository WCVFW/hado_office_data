import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles, Layers, ShieldCheck, Timer, Ruler, Image as ImageIcon, Grid, Workflow, PackageCheck, Database, Recycle, Users } from "lucide-react";
import PEMainMenu from "../PEmainmenu";

/**
 * Professional Cloth Pattern Tiling Services – Landing Page (TSX)
 * Design system: Tailwind + shadcn/ui + lucide-react
 * Notes:
 * - Includes a lightweight, code-only "pattern preview" using pure CSS (no external images)
 * - Section order: Hero → Intro → Services → Live Preview → Tech → Benefits → Additional Services → Case Studies → Testimonial → CTA
 */

export default function ClothPatternTilingPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <PEMainMenu/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #eef2ff 0 20px, #e0e7ff 20px 40px)`
        }} />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <Badge className="mb-4">Professional Cloth Pattern Tiling Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Revolutionize your designs with <span className="text-indigo-600">seamless pattern tiling</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Perfect alignment, high resolution, and swift delivery. Enhance efficiency and client satisfaction today!
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg">Get a Quote</Button>
            <Button size="lg" variant="secondary">Start a Free Trial</Button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Pixel-perfect patterns, production-ready outcomes</h2>
            <p className="mb-4">
              At Nimble Acuity, we combine Adobe Photoshop mastery with specialized tiling expertise to deliver
              seamless, custom patterns for textiles, wallpapers, web/UI, and 3D models. We know delays
              or discrepancies can derail entire product cycles—so we obsess over detail and execution.
            </p>
            <p className="mb-4">
              Expect perfectly aligned, high‑resolution repeats that scale beautifully. We share digital previews
              to visualize real‑world translation and enable fast, informed decisions. Dedicated teams and
              on‑call backup editors ensure continuity and reliable SLAs.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "ISO 9001:2015 quality workflows",
                "ISO/IEC 27001 information security",
                "Rapid turnarounds with guaranteed SLAs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl shadow-sm border p-6 bg-gray-50">
            <h3 className="font-semibold mb-3">What you gain</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {icon: Sparkles, title: "Seamless Repeats"},
                {icon: Layers, title: "Hi‑Res Output"},
                {icon: Timer, title: "Swift Delivery"},
                {icon: ShieldCheck, title: "Secure Process"},
              ].map(({icon:Icon, title}, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 border">
                  <Icon className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Cloth Pattern Tiling Services We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cloth Pattern Replication",
                desc: "Digitization + proprietary checks for uniform, iteration‑saving replication.",
                icon: Grid,
              },
              {
                title: "Digital Cloth Pattern Tiling",
                desc: "Crystal‑clear previews to validate scale, offset, and flow before production.",
                icon: ImageIcon,
              },
              {
                title: "Fabric Matching",
                desc: "Texture + color matching across lighting/orientation for consistent results.",
                icon: Ruler,
              },
              {
                title: "3D Cloth Pattern Tiling",
                desc: "Clean, seamless repeats for 3D pipelines and physically‑based renders.",
                icon: Layers,
              },
              {
                title: "Pattern Grading",
                desc: "Precision scaling to maintain motif integrity across sizes.",
                icon: Ruler,
              },
              {
                title: "Pattern Layout",
                desc: "Production‑ready layouts with digital precision and minimal waste.",
                icon: Workflow,
              },
              {
                title: "Prototype Creation",
                desc: "High‑res mockups to validate design decisions fast and affordably.",
                icon: PackageCheck,
              },
              {
                title: "Pattern Scaling",
                desc: "Versatile format support and complex shapes handled with ease.",
                icon: Ruler,
              },
              {
                title: "Seamless Tiling",
                desc: "High‑res color‑accurate joins for professional, durable outcomes.",
                icon: Sparkles,
              },
            ].map(({ title, desc, icon: Icon }, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-600" />
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE PREVIEW (CSS demo) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Seamless Preview (Demo)</h2>
        <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600">
          A simple, code‑only preview that mimics seamless tiling using CSS. Replace this with
          your uploaded swatch to see instant repeats while validating scale & offset.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Small Tiles</h3>
            <div
              aria-label="pattern-small"
              className="h-64 rounded-xl border"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #4f46e5 0 16px, transparent 16px 32px), repeating-linear-gradient(0deg, #4f46e5 0 16px, transparent 16px 32px)",
                backgroundSize: "32px 32px",
                backgroundColor: "#e0e7ff",
              }}
            />
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Large Tiles</h3>
            <div
              aria-label="pattern-large"
              className="h-64 rounded-xl border"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #0ea5e9 0 30px, transparent 30px 60px), repeating-linear-gradient(-45deg, #818cf8 0 30px, transparent 30px 60px)",
                backgroundSize: "60px 60px",
                backgroundColor: "#eef2ff",
              }}
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <Button variant="secondary" size="sm">Upload Swatch (Coming Soon)</Button>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Leverage</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {label: "Adobe Photoshop CC", icon: ImageIcon},
              {label: "Adobe Lightroom", icon: Sparkles},
              {label: "CAD Friendly Outputs", icon: Database},
              {label: "Sustainable Workflows", icon: Recycle},
            ].map(({label, icon:Icon}, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border rounded-xl p-4">
                <Icon className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us as Your Cloth Pattern Tiling Partner?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title: "AI‑Driven Tiling", desc: "Algorithmic precision for motif alignment and orientation."},
            {title: "Sustainable Options", desc: "Eco‑conscious choices without compromising quality."},
            {title: "Fabric Database", desc: "Continuously updated library for faster decisioning."},
            {title: "Rapid Prototyping", desc: "Visualize & refine designs before production."},
            {title: "Collaboration Hub", desc: "Clear communication and version control."},
            {title: "Quality Protocols", desc: "Multi‑stage QC for flawless deliverables."},
            {title: "Scalability", desc: "From boutique runs to mass production."},
            {title: "Pattern Scaling Expertise", desc: "Maintain integrity across sizes & shapes."},
            {title: "High‑Res Imaging", desc: "Capture the finest details for perfect replication."},
            {title: "Digital Fabric Printing", desc: "Vibrant, durable prints that endure."},
          ].map(({title, desc}, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services You Can Benefit From</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title: "Portrait Services", desc: "Skin tones, color harmony, and consistent looks."},
              {title: "Photoshop Services", desc: "Advanced edits that blend precision and creativity."},
              {title: "Clipping Path Services", desc: "Meticulous cutouts ready for any background."},
            ].map(({title, desc}, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>South Korean Client – Portrait Restoration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Delivered 1,400 high‑quality finished portraits in record time with strict QC and secure delivery.</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Wisconsin Insurance Firm – Image Clipping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">High‑quality clipping services to reduce overheads in cost and time while maintaining SLA commitments.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Users className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
          <blockquote className="text-xl italic mb-3">
            “Thank you for the excellent work. The quality was very high, pricing was excellent and turnaround very fast. 10/10.”
          </blockquote>
          <p className="font-medium">— Professional Photographer, Australia</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nimble Cloth Pattern Tiling Services to Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Elevate design quality, reduce iterations, and accelerate time‑to‑market with our seamless pattern tiling teams.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg">Contact Us</Button>
          <Button size="lg" variant="secondary">Book a Demo</Button>
        </div>
      </section>
    </main>
  );
}