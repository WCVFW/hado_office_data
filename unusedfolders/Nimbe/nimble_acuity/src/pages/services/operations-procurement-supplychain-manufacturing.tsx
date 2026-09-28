import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Clock, Shield, Users, Headphones, ArrowRight, Star, Scissors, Wand2, Layers, Image as ImageIcon, Camera, Building2, Heart, RefreshCw, Aperture, RotateCcw, Palette, MonitorSmartphone, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PEMainMenu from "./Photo Editing/PEmainmenu";

// ---------- Data ----------
const services = [
  { title: "Portrait Retouching Services", desc: "Elevate your photography to transform portraits into captivating works of art.", icon: Camera },
  { title: "Photo Retouching Services", desc: "Edit and manipulate images for marketing, advertising, and more.", icon: Wand2 },
  { title: "eCommerce Photo Editing Services", desc: "Maximize your online sales potential with dynamic product-ready edits.", icon: MonitorSmartphone },
  { title: "Fashion Photo Editing Services", desc: "Capture the essence of style with impeccable clarity for superior visual impact.", icon: LayoutGrid },
  { title: "Clipping Path Services", desc: "Declutter images and highlight the main elements with precision cut‑outs.", icon: Scissors },
  { title: "Real Estate Photo Editing Services", desc: "Transform property images to precisely showcase spaces at their best.", icon: Building2 },
  { title: "Wedding Photo Editing Services", desc: "Fix flaws and craft personalized edits for timeless wedding memories.", icon: Heart },
  { title: "Photo Restoration Services", desc: "Restore dull, damaged, or old photos and convert them into digital formats.", icon: RotateCcw },
  { title: "Adobe Photoshop Services", desc: "Clean, restore, mask, and enhance images with advanced Photoshop workflows.", icon: Palette },
  { title: "Photo Manipulation Services", desc: "Carefully modify images and transform them into remarkable visuals.", icon: Layers },
  { title: "Image Enhancement Services", desc: "Fix flaws, adjust lighting, and make changes so images stand out.", icon: Aperture },
  { title: "360° Panorama Image Stitching", desc: "Create immersive panoramas that showcase settings from every angle.", icon: RefreshCw },
  { title: "Background Removal Services", desc: "Replace dull backgrounds and remove unwanted elements cleanly.", icon: ImageIcon },
  { title: "Jewelry Photo Editing Services", desc: "Showcase brilliance and micro‑details for high‑conversion listings.", icon: Sparkles },
];

const differentiators = [
  { title: "Quality Systems", desc: "Stringent multi‑step checks ensure flaw‑free deliverables.", icon: Star },
  { title: "Project Security", desc: "Only authorized personnel handle your project with robust controls.", icon: Shield },
  { title: "Swift Turnaround", desc: "World‑class delivery centers across time zones for on‑time results.", icon: Clock },
  { title: "Skilled Team", desc: "Certified Adobe professionals delivering exceptional outcomes.", icon: Users },
  { title: "Easy Scalability", desc: "Scale up or down quickly based on your workload.", icon: RefreshCw },
  { title: "24/7 Access", desc: "Round‑the‑clock assistance over your preferred channels.", icon: Headphones },
  { title: "Modest Pricing", desc: "Flexible, transparent pricing aligned to your project needs.", icon: Check },
];

const caseStudies = [
  {
    title: "Hair Masking for Netherlands‑based Photographer",
    summary: "High‑quality hair masking & background changes for 700 images.",
    metrics: ["700 images", "Precision masking", "Consistent aesthetics"],
  },
  {
    title: "Image Clipping for Denmark‑based Client",
    summary: "Two expert editors delivered 700 clipped images in 24 hours.",
    metrics: ["700 images", "2 editors", "24‑hour TAT"],
  },
];

const badges = [
  "26+ Years Experience",
  "Global Clients",
  "ISO‑style Quality Controls",
  "Secure & Compliant",
];

// ---------- Components ----------
const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string; }>> = ({ id, className, children }) => (
  <section id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>{children}</section>
);

const Heading: React.FC<{ kicker?: string; title: string; sub?: string; center?: boolean; }>
  = ({ kicker, title, sub, center }) => (
    <div className={center ? "text-center" : "text-left"}>
      {kicker && <p className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">{kicker}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted-foreground mx-auto">{sub}</p>}
    </div>
  );

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ElementType; }>
  = ({ title, desc, icon: Icon }) => (
    <Card className="h-full border-muted/40 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl p-3 bg-indigo-50">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );

const Pill: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
    {children}
  </span>
);

// ---------- Page ----------
export default function PhotoEditingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <PEMainMenu />
      <Section className="pt-16 pb-12 relative bg-cover bg-center bg-[url('/images/img9.jpg')]">

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="rounded-full bg-indigo-600 hover:bg-indigo-600">Professional Photo Editing</Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-white">
                Professional Photo Editing Services We Offer
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Despite powerful tools in the market, many businesses and marketers still struggle to meet their unique photo editing needs. If that sounds familiar, Nimble your image editing to seasoned professionals like us.
              </p>
              <ul className="mt-6 space-y-2 text-white/90">
                <li className="flex gap-2"><Check className="h-5 w-5 mt-0.5" /> 26+ years of industry experience and global delivery capability</li>
                <li className="flex gap-2"><Check className="h-5 w-5 mt-0.5" /> Advanced tools & best‑practice workflows for flawless, high‑impact visuals</li>
                <li className="flex gap-2"><Check className="h-5 w-5 mt-0.5" /> Fast, secure, and scalable services tailored to your goals</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {badges.map((b) => (<Pill key={b}>{b}</Pill>))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl">
                  Get a Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-2xl">
                  Request a Quote
                </Button>
              </div>
              <p className="mt-4 text-xs text-white/80">Photo Editing Services in the Philippines · Global Support</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-white p-6 shadow-sm"
            >
              <div className="grid grid-cols-2 gap-4">
                {services.slice(0, 6).map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="rounded-xl p-2 bg-slate-50"><s.icon className="h-5 w-5" /></div>
                    <div>
                      <p className="text-sm font-medium">{s.title.replace(" Services", "")}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>


      {/* Services Grid */}
      <Section id="services" className="py-12">
        <Heading
          kicker="Services"
          title="Comprehensive Image Editing for Every Use Case"
          sub="Our skilled, qualified editors leverage advanced software to transform ordinary images into exceptional, conversion‑ready visuals."
          center
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      {/* Why Us */}
      <Section id="why-us" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Heading
              kicker="Why Choose Us"
              title="What Makes Us the Preferred Photo Editing Company?"
              sub="Beyond quick and efficient delivery, we go the extra mile to create measurable value across quality, security, speed, and cost."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((d) => (
                <Card key={d.title} className="rounded-2xl border-muted/40">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl p-3 bg-slate-50"><d.icon className="h-6 w-6" /></div>
                      <CardTitle className="text-base">{d.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{d.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="case-studies" className="py-16">
        <Heading kicker="Customer Success" title="Proven Results, Fast Turnarounds" center />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <Card key={c.title} className="rounded-2xl border-muted/40">
              <CardHeader>
                <CardTitle className="text-xl">{c.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{c.summary}</p>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {c.metrics.map((m) => (
                    <Pill key={m}>{m}</Pill>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="ghost" className="rounded-2xl">Read the Case Study <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="py-16">
        <Heading kicker="Testimonials" title="What Our Clients Say" center />
        <div className="mt-10 max-w-3xl mx-auto">
          <Card className="rounded-2xl border-muted/40">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                “First let me congratulate you on the efficiency of the staff. Your team provides the best services and I am happy with their service. Keep up the good work.”
              </p>
              <div className="mt-4 text-sm text-muted-foreground">Director, Leading Photo Studio in Denmark</div>
            </CardContent>
          </Card>
          <div className="mt-6 text-center">
            <Button variant="ghost" className="rounded-2xl">More Testimonials</Button>
          </div>
        </div>
      </Section>

      {/* How We Help */}
      <Section id="benefits" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Heading
              kicker="Nimble with Confidence"
              title="Smooth Delivery of Professionally Edited Images"
              sub="Delegate your image‑intensive tasks to our expert team and refocus on what matters most."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Delegate image‑heavy workloads and receive pixel‑perfect outputs.",
                "Leverage advanced tools and a vast talent pool for complex edits.",
                "Realign your focus to strategic tasks while we handle production.",
                "Access custom solutions to bring out the best in every image.",
              ].map((b) => (
                <li key={b} className="flex gap-3 rounded-2xl border bg-white p-4 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Card className="rounded-3xl border-indigo-200/60 bg-gradient-to-br from-indigo-50 to-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">Ready to Transform Your Images?</h3>
                <p className="mt-2 text-muted-foreground">Start a free trial or request a custom quote. Our experts are available 24/7.</p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button className="rounded-2xl">Start Free Trial</Button>
                <Button variant="outline" className="rounded-2xl">Get Custom Quote</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10">
        <Section>
          <div className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Photo Editing Services · All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
}
