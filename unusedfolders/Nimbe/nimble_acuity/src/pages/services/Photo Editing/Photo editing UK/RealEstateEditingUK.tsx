import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Shield, Clock, Zap, Layers, Camera, Building2, CloudLightning, Image as ImageIcon, Aperture, Ruler, SunMoon, Crop, SlidersHorizontal, LayoutGrid, FolderLock, Rocket, Cpu, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PEMainMenu from "../PEmainmenu";

// --------------------------------------
// Utility Data
// --------------------------------------

const services = [
  { title: "Still Image Processing", desc: "Refine clarity, color and overall appeal for consistent, professional listings.", icon: Aperture },
  { title: "HDR Image Blending", desc: "Blend multiple exposures to reveal detail in shadows and highlights.", icon: SunMoon },
  { title: "Panorama Stitching", desc: "Seamlessly stitch wide vistas for immersive room and exterior views.", icon: LayoutGrid },
  { title: "Day to Dusk (Twilight)", desc: "Transform bright daylight into warm, inviting twilight ambiance.", icon: CloudLightning },
  { title: "Decluttering", desc: "Remove distractions to keep focus on the property’s best features.", icon: Layers },
  { title: "Drone Image Processing", desc: "Enhance aerials for compelling context of lot, locale and access.", icon: Camera },
  { title: "Virtual Tour Creation", desc: "Interactive 3D walkthroughs to boost engagement and time-on-listing.", icon: Building2 },
  { title: "Matterport Services", desc: "Capture and deliver true-to-life, fully navigable 3D spaces.", icon: Building2 },
  { title: "2D Floor Plan Creation", desc: "Clean, legible floor plans from sketches or scans.", icon: Ruler },
  { title: "Image Cleaning & Resizing", desc: "Crisp, right-sized assets for web, MLS, print and ads.", icon: ImageIcon },
  { title: "Color Correction", desc: "True-to-life color, balanced white point and pleasing contrast.", icon: SlidersHorizontal },
  { title: "Flash Fixtures", desc: "Remove flash reflections and lighting artefacts.", icon: Zap },
  { title: "Cropping & Rotation", desc: "Stronger composition with level verticals and horizons.", icon: Crop },
  { title: "Perspective Correction", desc: "Fix converging lines for accurate geometry.", icon: Ruler },
  { title: "Image Editing & Blending", desc: "Composite and blend for the perfect hero frame.", icon: Layers },
  { title: "Image Enhancement", desc: "Overall polish to maximise perceived value.", icon: Sparkles },
  { title: "Virtual Renovation", desc: "Show potential with tasteful, realistic upgrades.", icon: Rocket },
  { title: "Background Removal", desc: "Isolate and simplify to emphasise subject.", icon: ImageIcon },
];

const tools = [
  "Adobe Photoshop CC",
  "Adobe Lightroom",
  "PTGui",
  "3D Vista",
  "Matterport",
  "Topaz Gigapixel",
  "JPEG • PNG • TIFF • PSD",
];

const clientTypes = [
  "Real estate photographers",
  "Real estate dealers",
  "Real estate companies",
  "Interior design companies",
  "Virtual tour creators",
  "Luxury real estate dealers",
  "Real estate rental companies",
];

const benefits = [
  { title: "Quality Assurance", desc: "Six‑sigma checks, multi‑stage QA and editor peer‑review on every batch.", icon: Shield },
  { title: "Swift Delivery", desc: "Follow‑the‑sun teams deliver within agreed SLAs for any volume.", icon: Clock },
  { title: "Certified Expertise", desc: "ISO‑certified workflows, specialists across Photoshop, Lightroom, Corel and more.", icon: Badge },
  { title: "Data Protection", desc: "GDPR‑aligned security with encrypted transfer and permission‑based access.", icon: FolderLock },
  { title: "Scalable Operations", desc: "Spin resources up or down instantly to meet seasonal peaks.", icon: Cpu },
  { title: "Flexible Pricing", desc: "Hourly, per‑image and FTE models to fit your margins.", icon: LineChart },
];

const keyServices = [
  "Drone Photo Editing",
  "Day to Dusk Services",
  "Panorama Stitching",
  "Floor Plan Conversion",
  "Sky Replacement",
  "Virtual Staging",
  "Real Estate Image Processing",
];

const caseStudies = [
  {
    title: "Drone Video Editing for European Client",
    blurb: "98% accuracy, curated music, text overlays and rapid turnaround for aerial listings.",
  },
  {
    title: "Panorama Stitching for Top RE Brand",
    blurb: "Precision cropping, mismatch correction and 60% cost savings with fast delivery.",
  },
];

const testimonials = [
  {
    quote:
      "I would recommend Nimble Acuity to anybody looking for photo editing and Photoshop requirements. Fast, efficient and exactly to spec.",
    author: "Owner, Portrait & Background Editing Company",
  },
];

// --------------------------------------
// Components
// --------------------------------------

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string; }>> = ({ id, className, children }) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ""}`}>{children}</section>
);

const GradientBlob: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`pointer-events-none absolute blur-3xl opacity-30 -z-10 ${className}`} />
);

const BeforeAfterPlaceholder: React.FC = () => (
  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-100 grid place-items-center">
    <div className="text-xs uppercase tracking-wider text-slate-600">Before / After</div>
    <div className="absolute inset-0 grid grid-cols-2">
      <div className="border-r border-white/70"></div>
      <div></div>
    </div>
  </div>
);

// --------------------------------------
// Page
// --------------------------------------

export default function RealEstateEditingUK() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Hero */}
      <PEMainMenu/>
      <div className="relative overflow-hidden">
        <GradientBlob className="w-[40rem] h-[40rem] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)] -top-32 -left-24" />
        <GradientBlob className="w-[30rem] h-[30rem] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.25),transparent_60%)] top-24 right-0" />

        <Section className="pt-20 pb-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4" variant="secondary">UK • Real Estate Photo Editing</Badge>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Ease your post‑processing and <span className="text-blue-600">level up</span> your property images.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Get consistency, on‑time delivery, and responsive support. From HDR & Flambient to Single Exposure—our editors refine every frame so your listings convert.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-2xl px-6 py-6 text-base">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="secondary" className="rounded-2xl px-6 py-6 text-base">
                  View Case Studies
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> GDPR‑aligned</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 12–24h typical</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Scalable Teams</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="rounded-2xl shadow-xl border-slate-200">
                <CardHeader>
                  <CardTitle>Try a Free Test Edit</CardTitle>
                  <CardDescription>Upload a sample set and get results within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Input placeholder="Name" />
                  <Input placeholder="Work Email" type="email" />
                  <Textarea placeholder="Tell us about your shoot (style, volume, deadline)…" />
                  <Button className="w-full rounded-xl">Get Started</Button>
                </CardContent>
                <CardFooter className="text-xs text-slate-500">Secure transfer • Encrypted at rest • No sharing without consent</CardFooter>
              </Card>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Professional Real Estate Photo Editing Solutions</h2>
          <Badge variant="outline">18 Services</Badge>
        </div>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Unique, UK‑ready edits that transform property photos into polished, persuasive visuals.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="rounded-2xl border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100"><Icon className="h-5 w-5" /></div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
                <CardDescription className="pt-2">{desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <BeforeAfterPlaceholder />
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="px-0 text-blue-600">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key Services & Tools */}
      <Section className="py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle>Key Real Estate Services</CardTitle>
              <CardDescription>Focused offerings that move the needle.</CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              {keyServices.map((k) => (
                <div key={k} className="flex items-center gap-2 text-slate-700">
                  <Check className="h-4 w-4 text-green-600" /> {k}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle>Editing Tools We Leverage</CardTitle>
              <CardDescription>Pro‑grade software and formats.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Clients */}
      <Section className="py-12">
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle>Clients We Serve</CardTitle>
            <CardDescription>Specialised support for every role in the UK property pipeline.</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {clientTypes.map((c) => (
              <div key={c} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">{c}</div>
            ))}
          </CardContent>
        </Card>
      </Section>

      {/* Why Choose Us */}
      <Section id="why" className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Why UK Clients Choose Us</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Entrust editing to a dependable partner and unlock efficiencies, time savings and better margins.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="rounded-2xl border-slate-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100"><Icon className="h-5 w-5" /></div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-slate-600">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Card key={cs.title} className="rounded-2xl border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{cs.title}</CardTitle>
                <CardDescription>{cs.blurb}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="px-0 text-blue-600">Read more <ArrowRight className="ml-1 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-12">
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle>What Clients Say</CardTitle>
            <CardDescription>Trusted by studios, agents and brands across the UK.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="italic text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-500">— {t.author}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Section>

      {/* Final CTA */}
      <Section className="py-16">
        <Card className="rounded-2xl border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Ready to elevate your listings?</h3>
              <p className="mt-2 text-slate-600">Start a free trial today and get your first batch back within 24 hours.</p>
            </div>
            <div className="flex gap-3">
              <Button className="rounded-2xl px-6 py-6 text-base">Start Free Trial</Button>
              <Button variant="secondary" className="rounded-2xl px-6 py-6 text-base">Talk to Sales</Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nimble Acuity • Real Estate Photo Editing • UK
      </footer>
    </div>
  );
}
