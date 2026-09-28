import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ImageIcon, Rocket, Shield, Clock, Cpu, Layers, Sparkles, ArrowRight, Building2, Camera, Plane, Landmark, Hotel, School, Store, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PEMainMenu from "../PEmainmenu";

// Utility animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function PanoramaStitchingServicesUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Hero */}
      <PEMainMenu/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-24">
          <motion.div initial="hidden" animate="show" variants={fadeIn} className="max-w-3xl">
            <Badge className="mb-4 text-sm">360° Panorama Photo Stitching – UK</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Nimble 360 Degree Panorama Photo Stitching Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Create realistic panoramic views to market your offerings, intrigue your target audience, and enhance engagement with our 360° panorama stitching services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl px-6 py-6 text-base">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                Get a Custom Quote
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> ISO/IEC 27001:2022</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Swift Turnaround</span>
              <span className="inline-flex items-center gap-2"><Cpu className="h-4 w-4" /> Advanced Tooling</span>
            </div>
          </motion.div>
        </div>
        {/* Decorative preview banner */}
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ImageIcon className="h-5 w-5" /> Why Nimble?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                <p>
                  Struggling to unify exceptional images into one lifelike panorama? Our experts use state-of-the-art workflows to stitch, align, and blend frames into immersive visuals that convert.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Rocket className="h-5 w-5" /> What You Get</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "High‑resolution 360° outputs",
                  "Precise alignment & de‑ghosting",
                  "HDR blending & tone mapping",
                  "Fast, reliable delivery",
                ].map((t) => (
                  <div key={t} className="inline-flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="h-4 w-4" /> {t}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeIn} className="text-3xl font-semibold tracking-tight sm:text-4xl">
            360° Panorama Image Stitching Services We Offer
          </motion.h2>
          <motion.p variants={fadeIn} className="mt-3 max-w-3xl text-slate-600">
            We specialize in merging multiple shots, removing overlaps, and delivering seamless, realistic panoramic visuals across use-cases.
          </motion.p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div variants={fadeIn} key={s.title}>
                <Card className="h-full rounded-2xl">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg"><Sparkles className="h-5 w-5" /> {s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600 text-sm">{s.desc}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tools */}
      <section className="bg-white/80 border-y">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h3 className="text-2xl font-semibold">Tools We Leverage</h3>
          <p className="mt-2 max-w-3xl text-slate-600">
            We employ cutting-edge stitching and post-processing software to amalgamate frames into high-fidelity panoramas.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {tools.map((t) => (
              <Badge key={t} variant="outline" className="justify-center rounded-xl py-2 text-sm">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <h3 className="text-2xl font-semibold">Industries / Verticals We Cater To</h3>
        <p className="mt-2 max-w-3xl text-slate-600">
          Purpose-built outputs for sales, marketing, documentation, and immersive experiences across industries.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((i) => (
            <Card key={i.title} className="rounded-2xl">
              <CardContent className="flex items-center gap-3 p-4">
                {i.icon}
                <div>
                  <div className="font-medium">{i.title}</div>
                  <div className="text-xs text-slate-500">{i.caption}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h3 className="text-2xl font-semibold">Our Approach</h3>
          <p className="mt-2 max-w-3xl text-slate-600">
            A transparent, collaborative, and quality-first pipeline tuned for speed and precision.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, idx) => (
              <li key={idx} className="group">
                <Card className="rounded-2xl h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Badge variant="secondary" className="rounded-xl">{String(idx + 1).padStart(2, "0")}</Badge>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600">{step.desc}</CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Us */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <h3 className="text-2xl font-semibold">Why Choose Us</h3>
        <p className="mt-2 max-w-3xl text-slate-600">
          Collaborate with our Adobe-certified editors and benefit from stringent QA, GDPR-compliant security, and flexible engagement models.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">{b.icon} {b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">{b.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-white/80 border-y">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <h3 className="text-2xl font-semibold">Customer Success Stories</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Card key={c.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 text-sm">
                  <p>{c.desc}</p>
                  <div className="mt-3"><Button variant="link" className="px-0">Read more →</Button></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid gap-6 md:grid-cols-5">
          <Card className="md:col-span-3 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Nimble 360° Panorama Photo Stitching Services</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p>
                Create compelling digital experiences, unlock advanced tooling without capital spend, and ship high‑quality cylindrical, cubic, and spherical panoramas—fast.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ctaBullets.map((b) => (
                  <li key={b} className="inline-flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4" /> {b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 rounded-2xl">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Work email" />
                <Textarea placeholder="Tell us about your project (shooting style, deliverables, timeline)" />
                <Button className="w-full">Request a Demo</Button>
                <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2"><Layers className="h-4 w-4" /> Nimble Acuity – 360° Panorama Stitching</div>
            <div className="flex gap-4">
              <a className="hover:text-slate-800" href="#">Privacy</a>
              <a className="hover:text-slate-800" href="#">Security</a>
              <a className="hover:text-slate-800" href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Data ---
const services = [
  {
    title: "360° Drone Image Panorama Creation",
    desc: "Convert raw drone captures into seamless spherical panoramas with stitching, blending, alignment, and de‑ghosting.",
  },
  {
    title: "Panoramas for Online Maps",
    desc: "Amalgamate multiple images into a single, natural FOV; sharpen, remove distractions, and blur PII like signboards.",
  },
  {
    title: "HDR Panorama Enhancement",
    desc: "Store panorama enhancement, fisheye and multi‑row stitching; cylindrical, equirectangular (360/180) outputs.",
  },
  {
    title: "General Panorama Stitching",
    desc: "Background replacement, foreign object removal, time‑stamp cleanup, and perspective correction for flawless scenes.",
  },
  {
    title: "3D Virtual Tour Creation",
    desc: "Calibrate, warp, align, and blend frames; add cropping, mapping, and hotspots to craft immersive tours.",
  },
  {
    title: "Aerial & Hotel Panoramas",
    desc: "180°/360° aerial composites and hospitality tours, removing objectionable elements for premium presentation.",
  },
  {
    title: "Scenic Spot Stitching",
    desc: "Expert stitching for wide‑angle landscapes—surreal, high‑fidelity views without seams or color shifts.",
  },
  {
    title: "Real Estate Panoramas",
    desc: "Composites and panoramic panels that broaden spatial understanding and boost listing engagement.",
  },
];

const tools = [
  "PTGui",
  "Autopano Giga",
  "Pano2VR",
  "krpano",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Capture One Pro",
  "Corel PaintShop Pro",
  "GIMP",
  "ACDSee",
  "Skylum Luminar",
  "PTLens",
  "Pixlr",
  "Easypano",
  "ColorWasher",
  "Light Machine",
];

const industries = [
  { title: "Real Estate", caption: "Developers & agents", icon: <Building2 className="h-5 w-5" /> },
  { title: "Events", caption: "Event management", icon: <Handshake className="h-5 w-5" /> },
  { title: "Hospitality", caption: "Hotels & lounges", icon: <Hotel className="h-5 w-5" /> },
  { title: "Tourism", caption: "Tours & attractions", icon: <Landmark className="h-5 w-5" /> },
  { title: "Education", caption: "Schools & campuses", icon: <School className="h-5 w-5" /> },
  { title: "eCommerce", caption: "Stores & brands", icon: <Store className="h-5 w-5" /> },
  { title: "Studios", caption: "Photographers", icon: <Camera className="h-5 w-5" /> },
  { title: "Aerial", caption: "Drone ops", icon: <Plane className="h-5 w-5" /> },
];

const process = [
  { title: "Secure Intake", desc: "Collect images via secure platforms/servers with project specs and target output." },
  { title: "Evaluation", desc: "Assess exposures and overlaps; analyze parallax, nodal offsets, and client requirements." },
  { title: "Recommendations", desc: "Share suggestions on coverage, bracketing, FOV and confirm parameters prior to stitching." },
  { title: "Stitch & Blend", desc: "Calibrate, warp, align, de‑ghost, and HDR‑blend to a seam‑free master panorama." },
  { title: "Polish", desc: "Retouch: remove artifacts/PII, correct perspective, balance color, sharpen and denoise." },
  { title: "Review & Iterate", desc: "Deliver proofs for feedback; implement revisions swiftly to match the creative intent." },
  { title: "Export & Share", desc: "Prepare equirectangular/cylindrical outputs and deliver via secure link or your CMS." },
];

const benefits = [
  { title: "Strict Quality Systems", desc: "Layered QC at every stage to ensure uncompromised excellence and consistency.", icon: <Shield className="h-5 w-5" /> },
  { title: "Swift Turnaround", desc: "Capacity planning plus parallelized workflows keep your releases on schedule.", icon: <Clock className="h-5 w-5" /> },
  { title: "Information Security", desc: "ISO/IEC 27001:2022 framework with GDPR‑aligned processes and secure delivery.", icon: <Shield className="h-5 w-5" /> },
  { title: "Ultramodern Infrastructure", desc: "Advanced VPN, power redundancy, and high‑spec workstations for reliable output.", icon: <Cpu className="h-5 w-5" /> },
  { title: "Adobe‑Certified Experts", desc: "Skilled editors delivering international‑standard panoramas and virtual tours.", icon: <Sparkles className="h-5 w-5" /> },
  { title: "Easy Scalability", desc: "Scale up/down seamlessly based on seasonal or campaign demand spikes.", icon: <Layers className="h-5 w-5" /> },
  { title: "Reasonable Pricing", desc: "Flexible models—by processing time, photo count, or scope—to fit your budget.", icon: <Rocket className="h-5 w-5" /> },
];

const cases = [
  {
    title: "Top Real Estate Company – Panorama Stitching",
    desc: "Saved 60% costs via precise stitching, mismatch corrections, and timely JPEG outputs with premium QC.",
  },
  {
    title: "360° Virtual Tours from Drone Images",
    desc: "Built immersive tours using PTGui and Autopano Giga—warping, aligning, and assembling aerial footage.",
  },
];

const ctaBullets = [
  "Comprehensive 360/180° deliverables",
  "HDR, multi‑row & fisheye support",
  "Secure, GDPR‑aligned workflow",
  "Dedicated PM & support",
];
