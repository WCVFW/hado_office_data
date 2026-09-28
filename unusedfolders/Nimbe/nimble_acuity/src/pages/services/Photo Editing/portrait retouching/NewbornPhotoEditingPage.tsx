import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Camera, Sparkles, Shield, Clock, Users, Image as ImageIcon, Star, Wand2, Palette, Layers } from "lucide-react";
import { motion } from "framer-motion";
import PEMainMenu from "../PEmainmenu";

const solutions = [
  { title: "Color Correction", desc: "Ensure visual consistency across your set while matching your signature style.", icon: <Palette className="w-6 h-6" /> },
  { title: "Skin Retouching", desc: "Subtle, natural retouching that preserves newborn textures and tones.", icon: <Sparkles className="w-6 h-6" /> },
  { title: "Background Removal", desc: "Clean, distraction-free backgrounds or seamless replacements.", icon: <Layers className="w-6 h-6" /> },
  { title: "Composite Creation", desc: "Safely create artistic composites that stand out in your portfolio.", icon: <Wand2 className="w-6 h-6" /> },
  { title: "Lighting Adjustment", desc: "Refine exposure and illumination for radiant, soft outcomes.", icon: <Camera className="w-6 h-6" /> },
  { title: "Noise Reduction", desc: "Minimize grain while preserving delicate detail and softness.", icon: <ImageIcon className="w-6 h-6" /> },
  { title: "Image Resizing", desc: "Optimize for web, print, and albums without quality loss.", icon: <ImageIcon className="w-6 h-6" /> },
  { title: "Color Enhancement", desc: "Tasteful vibrancy boosts while retaining a timeless feel.", icon: <Palette className="w-6 h-6" /> },
  { title: "B&W Conversion", desc: "Emotive monochrome edits with rich tonal depth.", icon: <ImageIcon className="w-6 h-6" /> },
  { title: "Customized Effects", desc: "On-brand, artistic effects tailored to your studio style.", icon: <Wand2 className="w-6 h-6" /> },
];

const clientele = [
  "Professional Photographers",
  "Maternity & Newborn Studios",
  "Baby/Parenting Magazines & Blogs",
  "E-commerce & Retail",
  "Advertising & Marketing Agencies",
  "Maternity Hospitals & Clinics",
  "Parenting Websites & Communities",
  "Baby Shower & Event Planners",
  "Photo Gift & Keepsake Companies",
  "Social Media Influencers",
];

const reasons = [
  { title: "Quality Systems", desc: "Multi-step QC ensures flawless deliverables every time.", icon: <CheckCircle className="w-6 h-6" /> },
  { title: "Project Security", desc: "Access-controlled workflows protect your assets and client data.", icon: <Shield className="w-6 h-6" /> },
  { title: "Swift Turnaround", desc: "Streamlined pipelines deliver edits fast—without compromise.", icon: <Clock className="w-6 h-6" /> },
  { title: "Easy Scalability", desc: "Scale up or down instantly based on seasonal demand.", icon: <Users className="w-6 h-6" /> },
  { title: "24/7 Access", desc: "Global coverage so you can ship projects across time zones.", icon: <Clock className="w-6 h-6" /> },
  { title: "Modest Pricing", desc: "Flexible models aligned to your volume and needs.", icon: <CheckCircle className="w-6 h-6" /> },
];

const extraServices = [
  "Image Enhancement Services",
  "Photo Manipulation Services",
  "Portrait Services",
  "Photo Restoration Services",
];

export default function NewbornPhotoEditingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <PEMainMenu/>
      <section className="bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Nimble Newborn Photo Editing Services
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Capture the Magic, Leave the Editing to Us! Delight clients with effortless perfection and quick turnarounds.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl font-semibold">Start Your Free Trial</Button>
      </section>

      {/* Challenges / Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Focus on Shooting, We Handle Post</h2>
          <p className="mb-4">
            Newborn sessions demand patience and artistry. Post-production—color work, exposure balancing, and meticulous retouching—can drain time and focus. Our specialists amplify your images with consistent quality so you can nurture client relationships and grow your portfolio.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center"><CheckCircle className="text-pink-500 mr-2" /> Free your calendar for more shoots</li>
            <li className="flex items-center"><CheckCircle className="text-pink-500 mr-2" /> Consistent, studio-aligned style</li>
            <li className="flex items-center"><CheckCircle className="text-pink-500 mr-2" /> Fast, reliable delivery</li>
          </ul>
        </div>
        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-8 shadow flex flex-col items-center justify-center text-center">
          <Sparkles className="w-14 h-14 text-pink-500 mb-4" />
          <p className="text-pink-700 font-medium">Premium, baby-safe edits that keep textures natural and gentle.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Newborn Photo Editing Solutions We Offer</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-pink-600">{s.icon}</div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-gray-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Clientele */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Clientele We Serve</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {clientele.map((c, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <Users className="mx-auto mb-2 text-pink-500" />
                <p className="font-medium">{c}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <div className="p-2 rounded-xl bg-pink-100 text-pink-600 w-fit mb-3">{r.icon}</div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {extraServices.map((s, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md">
              <CardContent className="p-6">
                <Wand2 className="mx-auto mb-2 text-pink-500" />
                <p className="font-medium">{s}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Success Stories</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Design Manipulation for a Global Swim Brand</h3>
              <p className="text-sm text-gray-600">Delivered creative image manipulation for a leading baby & toddler swimming company at highly affordable costs.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hair Masking for Netherlands Photographer</h3>
              <p className="text-sm text-gray-600">700 images processed in 2 days by 4 editors—high-quality masking and background changes.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 text-center">
        <Star className="mx-auto text-pink-500 w-10 h-10 mb-4" />
        <blockquote className="max-w-2xl mx-auto text-lg italic">
          "First let me congratulate you on the efficiency of your staff. Your team provides great services and I am really happy with their work. Keep up the good work."
        </blockquote>
        <p className="mt-4 font-medium">Director, Leading Photo Studio (Denmark)</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center text-white bg-gradient-to-tr from-rose-500 to-pink-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust Us for Quick and Impeccable Newborn Photo Editing</h2>
        <p className="max-w-2xl mx-auto mb-6">Best-in-class quality, scalable capacity, and rapid outcomes that elevate every gallery.</p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="rounded-2xl font-semibold">Contact Us</Button>
          <Button size="lg" className="rounded-2xl bg-white text-rose-600 font-semibold">Request a Quote</Button>
        </div>
      </section>
    </div>
  );
}
