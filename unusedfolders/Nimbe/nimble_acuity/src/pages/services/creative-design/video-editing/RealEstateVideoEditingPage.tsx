
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  HomeIcon,
  VideoIcon,
  Feather,
  Layers,
  CheckCircle2,
  Globe,
  Clock,
  RefreshCcw,
} from "lucide-react";
import CSmainmenu from "../CSmainmenu";

export default function RealEstateVideoEditingPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <CSmainmenu/>
      <header className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real Estate Video Editing Services
          </motion.h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Present properties with clarity, consistency, and visual appeal — from walkthroughs
            and drone showcases to promotional clips that convert viewers into buyers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="rounded-2xl">Get a Free Quote</Button>
            <Button variant="ghost" className="rounded-2xl">View Samples</Button>
          </div>
        </div>
      </header>

      {/* What We Do */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Real Estate Video Editing Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow">
            <CardHeader>
              <VideoIcon className="w-6 h-6 text-sky-600" />
              <CardTitle className="mt-2">Shot Sequencing & Decluttering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">We turn raw footage into flowing property stories: well-paced sequencing, removal of irrelevant frames, and visually coherent edits that keep a buyer's attention.</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                <li>Supports residential & commercial projects</li>
                <li>Delivers market-ready, brand-consistent videos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardHeader>
              <HomeIcon className="w-6 h-6 text-sky-600" />
              <CardTitle className="mt-2">Drone & Aerial Stabilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Smooth, high-resolution aerial footage for premium property showcases — stabilized, color matched, and perfected for listings and virtual walkthroughs.</p>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
                <li>Perfect for large estates & commercial sites</li>
                <li>Outputs optimized for web, social, and MLS platforms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardHeader>
              <Feather className="w-6 h-6 text-sky-600" />
              <CardTitle className="mt-2">Color Correction & Pixel Fixes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Balance lighting, match tones to real-life ambiance, and correct defective pixels to achieve crisp, trustworthy walkthroughs.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardHeader>
              <Layers className="w-6 h-6 text-sky-600" />
              <CardTitle className="mt-2">Advanced Enhancement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Sky replacements, object removal, motion graphics, audio syncing and tasteful music — everything to make listings feel premium and clickable.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">Why Choose Our Services</h3>
            <p className="text-slate-700 mb-4">26+ years of experience, ISO 9001:2015 certification, and a skilled team of editors and composers ready to scale with your business.</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600"/>Expert Team & Latest Software</li>
              <li><CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600"/>Quick TAT - up to 3 videos/day/resource</li>
              <li><CheckCircle2 className="inline-block w-4 h-4 mr-2 text-emerald-600"/>24/7 Support & 1 free revision</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Additional Services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Artwork & Illustration",
                "Graphic Design",
                "2D & 3D Animation",
                "Audio Editing & Dubbing",
                "Video Production",
                "Virtual Walkthroughs"
              ].map((s, i) => (
                <Card key={i} className="p-4 rounded-xl">
                  <CardContent className="text-sm">{s}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Success & Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow">
            <CardContent>
              <h4 className="font-semibold">Live Editing for Swedish Film Production House</h4>
              <p className="mt-2 text-sm text-slate-700">O2I provided live video editing and delivered under tight deadlines. The client praised the turnaround and professionalism.</p>
              <Button variant="link" className="mt-4">Read case study</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow">
            <CardContent>
              <h4 className="font-semibold">Italian Wedding Photographer</h4>
              <p className="mt-2 text-sm text-slate-700">High-quality photo and video editing services that helped the client deliver refined wedding albums and videos on time.</p>
              <Button variant="link" className="mt-4">Read case study</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-700">"I am overwhelmed with the support & level of understanding of your team... Looking forward to a successful business relationship." — Graphics Manager, Leading Electronics Company (South Korea)</blockquote>

          <blockquote className="border-l-4 border-sky-500 pl-4 italic text-slate-700">"Thanks for your fast turnaround time and attention to detail... appreciate your hard work." — CEO, Australian Digital Marketing Agency</blockquote>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold">Starting at $10/hour</h3>
            <p className="mt-2 text-sm">Cost-effective, scalable pricing tailored to your needs. Contact us for customized quotes.</p>
          </div>
          <div className="md:col-span-2">
            <div className="flex gap-4 justify-end">
              <Button size="lg" className="rounded-2xl">Get a Free Quote</Button>
              <Button variant="outline" className="rounded-2xl">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>What types of real estate videos can you edit?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-700">We handle walkthroughs, drone showcases, promotional clips, virtual tours, MLS-ready edits and social snippets—optimized to your delivery platforms.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>Why should I outsource real estate video editing?</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-700">Outsourcing gives you cost-efficiency, scalability, and access to experienced editors and software without the overhead of hiring in-house.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Get a FREE QUOTE — Decide in 24 hours</h3>
          <form className="grid gap-4">
            <Input placeholder="Name*" required />
            <Input type="email" placeholder="Email*" required />
            <Input placeholder="Phone*" required />
            <Textarea placeholder="Enter your requirements*" required />
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
          <p>© {new Date().getFullYear()} Outsource2india / Flatworld Solutions — 116 Village Blvd, Suite 200, Princeton, NJ 08540</p>
        </div>
      </footer>
    </div>
  );
}
